'use strict';

// Usage: node tools/web/assemble-coop-web.cjs MANIFEST.json OLD.pck OUTPUT.pck
// The output may replace OLD.pck only after every hash and length has passed.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const zlib = require('node:zlib');

const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const integer = n => Number.isSafeInteger(n) && n >= 0;

function checkBytes(bytes, expected, label) {
  if (!expected || !integer(expected.bytes) || !/^[a-f0-9]{64}$/.test(expected.sha256) ||
      bytes.length !== expected.bytes || sha256(bytes) !== expected.sha256) {
    throw new Error(label + ': size/SHA256 mismatch. No output was written.');
  }
}

function main() {
  const [manifestPath, basePath, outputPath] = process.argv.slice(2);
  if (!manifestPath || !basePath || !outputPath) {
    throw new Error('Usage: node assemble-coop-web.cjs MANIFEST.json OLD.pck OUTPUT.pck');
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  if (manifest.format !== 'deep-in-dungeon-pck-delta-v1' ||
      manifest.algorithm !== 'adler32-block-copy-brotli-json-v1' ||
      !manifest.delta || path.basename(manifest.delta.file) !== manifest.delta.file ||
      !integer(manifest.target?.bytes) || manifest.target.bytes > 256 * 1024 * 1024 ||
      !integer(manifest.delta.decoded_bytes) || manifest.delta.decoded_bytes > 384 * 1024 * 1024) {
    throw new Error('Invalid or unsupported delta manifest.');
  }
  const base = fs.readFileSync(basePath);
  checkBytes(base, manifest.base, 'Base PCK');
  const delta = fs.readFileSync(path.join(path.dirname(manifestPath), manifest.delta.file));
  checkBytes(delta, manifest.delta, 'Delta');
  const decoded = zlib.brotliDecompressSync(delta, {maxOutputLength: manifest.delta.decoded_bytes});
  if (decoded.length !== manifest.delta.decoded_bytes) throw new Error('Decoded delta size mismatch.');
  const program = JSON.parse(decoded.toString('utf8'));
  if (program.version !== 1 || !Array.isArray(program.operations) ||
      program.operations.length !== manifest.delta.operations) throw new Error('Invalid delta operations.');
  const output = Buffer.alloc(manifest.target.bytes);
  let written = 0;
  for (const operation of program.operations) {
    if (!Array.isArray(operation)) throw new Error('Invalid operation.');
    let bytes;
    if (operation[0] === 0 && operation.length === 3 && integer(operation[1]) && integer(operation[2]) &&
        operation[1] + operation[2] <= base.length) {
      bytes = base.subarray(operation[1], operation[1] + operation[2]);
    } else if (operation[0] === 1 && operation.length === 2 && typeof operation[1] === 'string') {
      bytes = Buffer.from(operation[1], 'base64');
    } else {throw new Error('Invalid copy/literal operation.');}
    if (written + bytes.length > output.length) throw new Error('Delta exceeds target length.');
    bytes.copy(output, written);
    written += bytes.length;
  }
  if (written !== output.length) throw new Error('Incomplete target PCK.');
  checkBytes(output, manifest.target, 'Target PCK');
  fs.writeFileSync(outputPath, output);
  console.log(JSON.stringify({output: outputPath, bytes: output.length, sha256: sha256(output)}));
}

try {main();} catch (error) {console.error(error.message); process.exitCode = 1;}
