(function (scope) {
  'use strict';
  function normalizeText(value) {
    return String(value || '').trim().toLocaleLowerCase('pl').replace(/ł/g,'l')
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ');
  }
  function filterEntries(entries, filters = {}) {
    const query = normalizeText(filters.query);
    return entries.filter(entry =>
      (!filters.category || filters.category === 'all' || entry.category === filters.category) &&
      (!filters.status || filters.status === 'all' || entry.status === filters.status) &&
      (!query || normalizeText(entry.name + ' ' + entry.description).includes(query)));
  }
  scope.DungeonCatalogue = Object.freeze({normalizeText, filterEntries});
})(globalThis);
