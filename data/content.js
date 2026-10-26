// Dane przewodnika. Generuj: node strona/tools/build-content.mjs
globalThis.DUNGEON_DATA = {
  "meta": {
    "title": "Deep in Dungeon",
    "version": "0.40",
    "updated": "2026-10-24"
  },
  "download": {
    "version": "0.40",
    "url": "https://drive.google.com/file/d/1t2nUJJ4c2rpaMW-o2E0j4mSwMvW_7srR/view",
    "fileName": "DeepInDungeon-0.40-arm64-public.apk",
    "sizeBytes": 51305334,
    "sha256": "51b1c9a1229396a565fbadfc6b92ba1ce4fd106d87d6cf0aeb4ba9633cf0b8d8",
    "androidMinimum": "7.0",
    "architecture": "arm64-v8a"
  },
  "items": [
    {
      "armorClass": 0,
      "cards": [
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń",
          "id": "short_thrust",
          "name": "Krótkie pchnięcie"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń\nCelność +15pp",
          "id": "knife_feint",
          "name": "Zwód i pchnięcie"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń ×2\nOsobny rzut na każdy cios",
          "id": "knife_pair",
          "name": "Dwa szybkie ciosy"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń\n20%: ogłuszenie na 1 turę",
          "id": "knife_pommel",
          "name": "Cios głowicą"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń\n50%: −25pp celności na 1 turę",
          "id": "knife_eye",
          "name": "Pchnięcie w okolice oczu"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń\n25% na krytyk ×2",
          "id": "knife_opening",
          "name": "Cios w odsłonięty bok"
        }
      ],
      "category": "weapon",
      "effect": "",
      "id": "wooden_knife",
      "name": "Drewniany nóż",
      "price": 10,
      "slot": "weapon",
      "status": "implemented",
      "description": "Skromny początek każdej wyprawy. Sześć różnych ataków pozwala poznać rytm turowej walki.",
      "image": "assets/pixel/wooden_knife.png"
    },
    {
      "armorClass": 0,
      "cards": [
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń",
          "id": "dagger_prick",
          "name": "Ukłucie z nadgarstka"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń\nKrwawienie: 2 HP ×2 tury",
          "id": "dagger_artery",
          "name": "Rozcięcie tętnicy"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń\nPomiń 15 KP przy trafieniu",
          "id": "dagger_gap",
          "name": "Pchnięcie w szczelinę"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 4,
          "damageMin": 3,
          "effectText": "ATAK → wróg\n3–4 obrażeń\n40% na krytyk ×2",
          "id": "dagger_vital",
          "name": "Pchnięcie w słaby punkt"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń ×3\nOsobny rzut na każdy cios",
          "id": "dagger_flurry",
          "name": "Potrójna seria"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń\n75%: −25pp celności na 1 turę",
          "id": "dagger_eyes",
          "name": "Cięcie nad oczami"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 4,
          "damageMin": 3,
          "effectText": "ATAK → wróg\n3–4 obrażeń\n+4 obrażeń, gdy cel ma ≤30% HP",
          "id": "dagger_finish",
          "name": "Dobijające pchnięcie"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń\nCelność +20pp",
          "id": "dagger_deception",
          "name": "Pozorowane cięcie"
        }
      ],
      "category": "weapon",
      "effect": "",
      "id": "dagger",
      "name": "Sztylet",
      "price": 25,
      "slot": "weapon",
      "status": "implemented",
      "description": "Szybkie pchnięcia, serie i ataki w słabe punkty. Osiem kart daje wiele sposobów na wykorzystanie okazji.",
      "image": "assets/pixel/dagger.png"
    },
    {
      "armorClass": 0,
      "cards": [
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 9,
          "damageMin": 7,
          "effectText": "ATAK → wróg\n7–9 obrażeń",
          "id": "hammer_overhead",
          "name": "Cios znad głowy"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 5,
          "damageMin": 3,
          "effectText": "ATAK → wróg\n3–5 obrażeń\n60%: ogłuszenie na 1 turę",
          "id": "hammer_temple",
          "name": "Uderzenie w skroń"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 7,
          "damageMin": 5,
          "effectText": "ATAK → wróg\n5–7 obrażeń\nPomiń 25 KP przy trafieniu",
          "id": "hammer_armor",
          "name": "Wgniecenie pancerza"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 7,
          "damageMin": 5,
          "effectText": "ATAK → wróg\n5–7 obrażeń\n3 obrażeń omija barierę",
          "id": "hammer_barrier",
          "name": "Przełamanie osłony"
        },
        {
          "copies": 1,
          "cost": 3,
          "damageMax": 9,
          "damageMin": 7,
          "effectText": "ATAK → wróg\n7–9 obrażeń\n30% na krytyk ×2",
          "id": "hammer_rib",
          "name": "Zmiażdżenie żeber"
        },
        {
          "copies": 1,
          "cost": 3,
          "damageMax": 10,
          "damageMin": 8,
          "effectText": "ATAK → wróg\n8–10 obrażeń\n+6 obrażeń, gdy cel ma ≤30% HP",
          "id": "hammer_execution",
          "name": "Egzekucyjny zamach"
        }
      ],
      "category": "weapon",
      "effect": "",
      "id": "hammer",
      "name": "Młot",
      "price": 35,
      "slot": "weapon",
      "status": "implemented",
      "description": "Ciężkie, kosztowne uderzenia. Ogłuszenie, przebicie pancerza i mocne dobicie nagradzają właściwy moment.",
      "image": "assets/pixel/hammer.png"
    },
    {
      "armorClass": 0,
      "cards": [
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 0,
          "damageMin": 0,
          "effectText": "WSPARCIE → sojusznik\nHP +4",
          "id": "heal",
          "name": "Leczenie"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 0,
          "damageMin": 0,
          "effectText": "WSPARCIE → sojusznik\nBariera +4",
          "id": "barrier",
          "name": "Bariera"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 0,
          "damageMin": 0,
          "effectText": "WSPARCIE → sojusznik\nSiła +2",
          "id": "strength",
          "name": "Wzmocnienie siły"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 0,
          "damageMin": 0,
          "effectText": "WSPARCIE → sojusznik\nUsuń ogłuszenie, oślepienie i krwawienie",
          "id": "staff_cleanse",
          "name": "Oczyszczenie"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 0,
          "damageMin": 0,
          "effectText": "WSPARCIE → sojusznik\nHP +3 · Bariera +3",
          "id": "staff_shelter",
          "name": "Opiekuńcze schronienie"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 0,
          "damageMin": 0,
          "effectText": "WSPARCIE → sojusznik\nHP +2 · Siła +2",
          "id": "staff_vigor",
          "name": "Przywrócenie wigoru"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 0,
          "damageMin": 0,
          "effectText": "WSPARCIE → sojusznik\nBariera +2 · Siła +2",
          "id": "staff_resolve",
          "name": "Niezłomność"
        }
      ],
      "category": "weapon",
      "effect": "",
      "id": "caretaker_staff",
      "name": "Kostur opiekuna",
      "price": 35,
      "slot": "weapon",
      "status": "implemented",
      "description": "Siedem kart wyłącznie wsparcia: leczenie, bariery, siła i oczyszczanie. Działa na siebie lub sojusznika.",
      "image": null
    },
    {
      "armorClass": 0,
      "cards": [
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń",
          "id": "aw_brush",
          "name": "Muśnięcie ostrza"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń\nCelność +20pp",
          "id": "aw_feint",
          "name": "Fałszywy krok"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń\nPomiń 15 KP przy trafieniu",
          "id": "aw_gap",
          "name": "Ząb pod żebrem"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń ×3\nOsobny rzut na każdy cios",
          "id": "aw_flurry",
          "name": "Trzy ukłucia"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń\nKrwawienie: 2 HP ×2 tury",
          "id": "aw_wound",
          "name": "Zadziorna rana"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń\n60%: −25pp celności na 1 turę",
          "id": "aw_flash",
          "name": "Błysk ametystu"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 4,
          "damageMin": 3,
          "effectText": "ATAK → wróg\n3–4 obrażeń\n35% na krytyk ×2",
          "id": "aw_nerve",
          "name": "Pchnięcie w nerw"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 4,
          "damageMin": 3,
          "effectText": "ATAK → wróg\n3–4 obrażeń\n+4 obrażeń, gdy cel ma ≤30% HP",
          "id": "aw_finish",
          "name": "Ostatnie słowo"
        }
      ],
      "category": "weapon",
      "effect": "",
      "id": "amethyst_whisper",
      "name": "Ametystowy Szept",
      "price": 25,
      "slot": "weapon",
      "status": "implemented",
      "description": "Lekkie ostrze z ametystowym akcentem. Szybkie ukłucia, krwawienie i błysk oślepiający przeciwnika.",
      "image": "assets/weapons/01-szept-zadry.png"
    },
    {
      "armorClass": 0,
      "cards": [
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 9,
          "damageMin": 7,
          "effectText": "ATAK → wróg\n7–9 obrażeń",
          "id": "sp_swing",
          "name": "Spłata żelazem"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 6,
          "damageMin": 4,
          "effectText": "ATAK → wróg\n4–6 obrażeń\n50%: ogłuszenie na 1 turę",
          "id": "sp_stun",
          "name": "Uderzenie naprawcze"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 7,
          "damageMin": 5,
          "effectText": "ATAK → wróg\n5–7 obrażeń\nPomiń 20 KP przy trafieniu",
          "id": "sp_rivets",
          "name": "Pęknięcie nitów"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 8,
          "damageMin": 6,
          "effectText": "ATAK → wróg\n6–8 obrażeń\n2 obrażeń omija barierę",
          "id": "sp_seal",
          "name": "Rozbicie pieczęci"
        },
        {
          "copies": 1,
          "cost": 3,
          "damageMax": 9,
          "damageMin": 7,
          "effectText": "ATAK → wróg\n7–9 obrażeń\n35% na krytyk ×2",
          "id": "sp_verdict",
          "name": "Kowalski wyrok"
        },
        {
          "copies": 1,
          "cost": 3,
          "damageMax": 10,
          "damageMin": 8,
          "effectText": "ATAK → wróg\n8–10 obrażeń\n+6 obrażeń, gdy cel ma ≤30% HP",
          "id": "sp_nail",
          "name": "Ostatni gwóźdź"
        }
      ],
      "category": "weapon",
      "effect": "",
      "id": "smith_penance",
      "name": "Kowalska Pokuta",
      "price": 35,
      "slot": "weapon",
      "status": "implemented",
      "description": "Ciężki młot naprawiany miedzią. Rozbija ochronę i rozstrzyga walkę potężnym zamachem.",
      "image": "assets/weapons/02-dlug-kowala.png"
    },
    {
      "armorClass": 0,
      "cards": [
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń",
          "id": "wo_cut",
          "name": "Cięcie strażnika"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń\nCelność +15pp",
          "id": "wo_feint",
          "name": "Zwód jelcem"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 6,
          "damageMin": 4,
          "effectText": "ATAK → wróg\n4–6 obrażeń\nPomiń 15 KP przy trafieniu",
          "id": "wo_mail",
          "name": "Pchnięcie pod kolczugę"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 3,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–3 obrażeń ×2\nOsobny rzut na każdy cios",
          "id": "wo_cross",
          "name": "Krzyżowe cięcia"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń\n35%: ogłuszenie na 1 turę",
          "id": "wo_pommel",
          "name": "Odpowiedź głowicą"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 5,
          "damageMin": 4,
          "effectText": "ATAK → wróg\n4–5 obrażeń\n25% na krytyk ×2",
          "id": "wo_broken",
          "name": "Zerwana przysięga"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 5,
          "damageMin": 4,
          "effectText": "ATAK → wróg\n4–5 obrażeń\n+3 obrażeń, gdy cel ma ≤30% HP",
          "id": "wo_judgment",
          "name": "Sąd nad pokonanym"
        }
      ],
      "category": "weapon",
      "effect": "",
      "id": "widower_oath",
      "name": "Przysięga Wdowca",
      "price": 25,
      "slot": "weapon",
      "status": "implemented",
      "description": "Wysłużony miecz z pamiątką dawnej przysięgi. Łączy pchnięcia, cięcia i uderzenie głowicą.",
      "image": "assets/weapons/03-rdzawy-slub.png"
    },
    {
      "armorClass": 0,
      "cards": [
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 8,
          "damageMin": 6,
          "effectText": "ATAK → wróg\n6–8 obrażeń",
          "id": "tt_swing",
          "name": "Rozmach drwala"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 4,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–4 obrażeń\nKrwawienie: 2 HP ×2 tury",
          "id": "tt_barb",
          "name": "Zadzior ostrza"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 6,
          "damageMin": 4,
          "effectText": "ATAK → wróg\n4–6 obrażeń\nPomiń 20 KP przy trafieniu",
          "id": "tt_rivets",
          "name": "Cięcie pod nitami"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 6,
          "damageMin": 4,
          "effectText": "ATAK → wróg\n4–6 obrażeń\n2 obrażeń omija barierę",
          "id": "tt_shield",
          "name": "Rąbnięcie w osłonę"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 4,
          "damageMin": 3,
          "effectText": "ATAK → wróg\n3–4 obrażeń\n35%: ogłuszenie na 1 turę",
          "id": "tt_poll",
          "name": "Cios obuchem"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń\nCelność +20pp",
          "id": "tt_guard",
          "name": "Zerwanie gardy"
        },
        {
          "copies": 1,
          "cost": 3,
          "damageMax": 10,
          "damageMin": 8,
          "effectText": "ATAK → wróg\n8–10 obrażeń\n+5 obrażeń, gdy cel ma ≤30% HP",
          "id": "tt_finish",
          "name": "Ostatnia danina"
        }
      ],
      "category": "weapon",
      "effect": "",
      "id": "thorn_tribute",
      "name": "Danina Cierni",
      "price": 35,
      "slot": "weapon",
      "status": "implemented",
      "description": "Topór o zadziornym ostrzu. Rozcina, kruszy osłony i pozostawia krwawiące rany.",
      "image": "assets/weapons/04-cierniowy-poborca.png"
    },
    {
      "armorClass": 0,
      "cards": [
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 8,
          "damageMin": 6,
          "effectText": "ATAK → wróg\n6–8 obrażeń",
          "id": "mr_strike",
          "name": "Pierwsze uderzenie"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 4,
          "damageMin": 3,
          "effectText": "ATAK → wróg\n3–4 obrażeń\n55%: ogłuszenie na 1 turę",
          "id": "mr_bell",
          "name": "Dzwon w skroni"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń\n60%: −25pp celności na 1 turę",
          "id": "mr_echo",
          "name": "Głuchy pogłos"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 6,
          "damageMin": 4,
          "effectText": "ATAK → wróg\n4–6 obrażeń\n3 obrażeń omija barierę",
          "id": "mr_barrier",
          "name": "Pęknięta osłona"
        },
        {
          "copies": 1,
          "cost": 3,
          "damageMax": 9,
          "damageMin": 7,
          "effectText": "ATAK → wróg\n7–9 obrażeń\n30% na krytyk ×2",
          "id": "mr_heart",
          "name": "Serce dzwonu"
        },
        {
          "copies": 1,
          "cost": 3,
          "damageMax": 10,
          "damageMin": 8,
          "effectText": "ATAK → wróg\n8–10 obrażeń\n+5 obrażeń, gdy cel ma ≤30% HP",
          "id": "mr_finish",
          "name": "Ostatnie bicie"
        }
      ],
      "category": "weapon",
      "effect": "",
      "id": "mourning_resonance",
      "name": "Żałobny Rezonans",
      "price": 35,
      "slot": "weapon",
      "status": "implemented",
      "description": "Ciężka broń, której pogłos odbiera wrogowi pewność. Ogłuszenie, oślepienie i przełamywanie bariery.",
      "image": "assets/weapons/05-ostatni-dzwon.png"
    },
    {
      "armorClass": 0,
      "cards": [
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń",
          "id": "rs_thrust",
          "name": "Pchnięcie na wprost"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń\nCelność +20pp",
          "id": "rs_beak",
          "name": "Ostry dziób"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 6,
          "damageMin": 4,
          "effectText": "ATAK → wróg\n4–6 obrażeń\nPomiń 20 KP przy trafieniu",
          "id": "rs_plate",
          "name": "Podważenie napierśnika"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń\nKrwawienie: 1 HP ×2 tury",
          "id": "rs_hook",
          "name": "Rozdarcie hakiem"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 3,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–3 obrażeń ×2\nOsobny rzut na każdy cios",
          "id": "rs_shaft",
          "name": "Dwa uderzenia drzewcem"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń\n60%: −25pp celności na 1 turę",
          "id": "rs_eyes",
          "name": "Grot przy oczach"
        },
        {
          "copies": 1,
          "cost": 3,
          "damageMax": 9,
          "damageMin": 7,
          "effectText": "ATAK → wróg\n7–9 obrażeń\n+4 obrażeń, gdy cel ma ≤30% HP",
          "id": "rs_pin",
          "name": "Przyszpilenie"
        }
      ],
      "category": "weapon",
      "effect": "",
      "id": "raven_spire",
      "name": "Krucza Iglica",
      "price": 25,
      "slot": "weapon",
      "status": "implemented",
      "description": "Drzewce z kruczym grotem. Pchnięcia, zahaczenia i serie trafień korzystają z luk w ochronie.",
      "image": "assets/weapons/08-kruczy-przesmyk.png"
    },
    {
      "armorClass": 0,
      "cards": [
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 8,
          "damageMin": 6,
          "effectText": "ATAK → wróg\n6–8 obrażeń",
          "id": "si_swing",
          "name": "Oskardowy zamach"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń\nCelność +15pp",
          "id": "si_gap",
          "name": "Szukanie szczeliny"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 6,
          "damageMin": 4,
          "effectText": "ATAK → wróg\n4–6 obrażeń\nPomiń 25 KP przy trafieniu",
          "id": "si_plate",
          "name": "Przebicie płyty"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 6,
          "damageMin": 4,
          "effectText": "ATAK → wróg\n4–6 obrażeń\n3 obrażeń omija barierę",
          "id": "si_barrier",
          "name": "Rozłupanie bariery"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 4,
          "damageMin": 3,
          "effectText": "ATAK → wróg\n3–4 obrażeń\n35%: ogłuszenie na 1 turę",
          "id": "si_temple",
          "name": "Kolec w skroń"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń\nKrwawienie: 2 HP ×2 tury",
          "id": "si_pull",
          "name": "Wyrwanie kolca"
        }
      ],
      "category": "weapon",
      "effect": "",
      "id": "siegebreaker_icicle",
      "name": "Sopel Oblężnika",
      "price": 35,
      "slot": "weapon",
      "status": "implemented",
      "description": "Oskardowy kolec do przełamywania oporu. Przebija pancerz, rozłupuje barierę i rozrywa rany.",
      "image": "assets/weapons/09-gwozdz-polnocy.png"
    },
    {
      "armorClass": 0,
      "cards": [
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń",
          "id": "st_thrust",
          "name": "Szybka sztycha"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń\nCelność +25pp",
          "id": "st_feint",
          "name": "Sztych po zwodzie"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń\nPomiń 15 KP przy trafieniu",
          "id": "st_needle",
          "name": "Igła między płytami"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń ×2\nOsobny rzut na każdy cios",
          "id": "st_pair",
          "name": "Podwójny takt"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 4,
          "damageMin": 3,
          "effectText": "ATAK → wróg\n3–4 obrażeń\n40% na krytyk ×2",
          "id": "st_heart",
          "name": "Punkt serca"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń\nKrwawienie: 1 HP ×2 tury",
          "id": "st_wrist",
          "name": "Rozcięcie nadgarstka"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń\n60%: −25pp celności na 1 turę",
          "id": "st_brow",
          "name": "Cięcie nad brwią"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 4,
          "damageMin": 3,
          "effectText": "ATAK → wróg\n3–4 obrażeń\n+4 obrażeń, gdy cel ma ≤30% HP",
          "id": "st_finale",
          "name": "Finał pojedynku"
        }
      ],
      "category": "weapon",
      "effect": "",
      "id": "scarlet_thread",
      "name": "Szkarłatna Nić",
      "price": 25,
      "slot": "weapon",
      "status": "implemented",
      "description": "Smukłe ostrze pojedynkowe. Precyzyjny rytm pchnięć, krytyczne trafienia i finał przeciw osłabionemu celowi.",
      "image": "assets/weapons/11-wdowi-scieg.png"
    },
    {
      "armorClass": 0,
      "cards": [
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 8,
          "damageMin": 6,
          "effectText": "ATAK → wróg\n6–8 obrażeń",
          "id": "cv_bolt",
          "name": "Ciężki bełt"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 5,
          "damageMin": 4,
          "effectText": "ATAK → wróg\n4–5 obrażeń\nCelność +20pp",
          "id": "cv_aim",
          "name": "Strzał po przycelowaniu"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 6,
          "damageMin": 4,
          "effectText": "ATAK → wróg\n4–6 obrażeń\nPomiń 25 KP przy trafieniu",
          "id": "cv_plate",
          "name": "Bełt płytobójczy"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń\nKrwawienie: 2 HP ×2 tury",
          "id": "cv_barb",
          "name": "Zadziorny grot"
        },
        {
          "copies": 1,
          "cost": 3,
          "damageMax": 8,
          "damageMin": 6,
          "effectText": "ATAK → wróg\n6–8 obrażeń\n35% na krytyk ×2",
          "id": "cv_heart",
          "name": "Bełt w serce"
        },
        {
          "copies": 1,
          "cost": 3,
          "damageMax": 10,
          "damageMin": 8,
          "effectText": "ATAK → wróg\n8–10 obrażeń\n+5 obrażeń, gdy cel ma ≤30% HP",
          "id": "cv_finish",
          "name": "Wyrok końcowy"
        }
      ],
      "category": "weapon",
      "effect": "",
      "id": "crypt_verdict",
      "name": "Wyrok z Krypty",
      "price": 35,
      "slot": "weapon",
      "status": "implemented",
      "description": "Kusza o ciężkim bełcie. Celowanie i przebijanie pancerza prowadzą do ostatecznego wyroku.",
      "image": "assets/weapons/14-slepiec-z-krypty.png"
    },
    {
      "armorClass": 0,
      "cards": [
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń",
          "id": "he_arrow",
          "name": "Szybka strzała"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń\nCelność +20pp",
          "id": "he_breath",
          "name": "Strzał na wydechu"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 5,
          "damageMin": 4,
          "effectText": "ATAK → wróg\n4–5 obrażeń\nPomiń 15 KP przy trafieniu",
          "id": "he_gap",
          "name": "Grot w szczelinę"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 3,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–3 obrażeń ×2\nOsobny rzut na każdy cios",
          "id": "he_pair",
          "name": "Podwójny strzał"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 3,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–3 obrażeń\nKrwawienie: 1 HP ×2 tury",
          "id": "he_barb",
          "name": "Zadziorna strzała"
        },
        {
          "copies": 1,
          "cost": 2,
          "damageMax": 2,
          "damageMin": 1,
          "effectText": "ATAK → wróg\n1–2 obrażeń\n60%: −25pp celności na 1 turę",
          "id": "he_temple",
          "name": "Strzała przy skroni"
        },
        {
          "copies": 1,
          "cost": 3,
          "damageMax": 9,
          "damageMin": 7,
          "effectText": "ATAK → wróg\n7–9 obrażeń\n30% na krytyk ×2",
          "id": "he_draw",
          "name": "Pełny naciąg"
        }
      ],
      "category": "weapon",
      "effect": "",
      "id": "hunter_eclipse",
      "name": "Zaćmienie Łowcy",
      "price": 25,
      "slot": "weapon",
      "status": "implemented",
      "description": "Łuk łowcy do celnych strzałów i podwójnych serii. Pełny naciąg daje szansę na silny krytyk.",
      "image": "assets/weapons/15-sciagacz-switow.png"
    },
    {
      "armorClass": 0,
      "cards": [
        {
          "copies": 2,
          "cost": 1,
          "damageMax": 4,
          "damageMin": 2,
          "effectText": "ATAK → wróg\n2–4 obrażeń",
          "id": "ember",
          "name": "Iskra żaru"
        }
      ],
      "category": "artifact",
      "effect": "",
      "id": "fire_fragment",
      "name": "Odłamek żaru",
      "price": 40,
      "slot": "artifact",
      "status": "implemented",
      "description": "Ofensywny artefakt dodający dwie kopie Iskry żaru do talii. Zajmuje jedno z dwóch miejsc artefaktów.",
      "image": null
    },
    {
      "armorClass": 0,
      "cards": [
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 0,
          "damageMin": 0,
          "effectText": "WSPARCIE → sojusznik\nHP +3",
          "id": "herbal_heal",
          "name": "Ziołowe leczenie"
        },
        {
          "copies": 1,
          "cost": 1,
          "damageMax": 0,
          "damageMin": 0,
          "effectText": "WSPARCIE → sojusznik\nBariera +3",
          "id": "herbal_barrier",
          "name": "Ziołowa osłona"
        }
      ],
      "category": "artifact",
      "effect": "",
      "id": "herbalist_talisman",
      "name": "Talizman zielarza",
      "price": 35,
      "slot": "artifact",
      "status": "implemented",
      "description": "Artefakt wsparcia. Wnosi do talii ziołowe leczenie i osłonę dla siebie lub sojusznika.",
      "image": null
    },
    {
      "armorClass": 3,
      "cards": [],
      "category": "armor",
      "effect": "",
      "id": "leather_hood",
      "name": "Skórzany kaptur",
      "price": 20,
      "slot": "head",
      "status": "implemented",
      "description": "Lekka osłona głowy. Jej klasa pancerza sumuje się z ochroną pozostałego wyposażenia.",
      "image": "assets/pixel/head_leather.png"
    },
    {
      "armorClass": 7,
      "cards": [],
      "category": "armor",
      "effect": "",
      "id": "leather_vest",
      "name": "Skórzany kaftan",
      "price": 35,
      "slot": "torso",
      "status": "implemented",
      "description": "Skórzana ochrona tułowia. Wnosi pasywną klasę pancerza, bez dokładania osobnej karty do ręki.",
      "image": "assets/pixel/armor_light.png"
    },
    {
      "armorClass": 2,
      "cards": [],
      "category": "armor",
      "effect": "",
      "id": "leather_gloves",
      "name": "Skórzane rękawice",
      "price": 15,
      "slot": "gloves",
      "status": "implemented",
      "description": "Ochrona dłoni podnosząca łączną klasę pancerza postaci.",
      "image": "assets/pixel/gloves.png"
    },
    {
      "armorClass": 4,
      "cards": [],
      "category": "armor",
      "effect": "",
      "id": "leather_legs",
      "name": "Skórzane spodnie",
      "price": 25,
      "slot": "legs",
      "status": "implemented",
      "description": "Skórzana ochrona nóg. Jej wkład w KP działa pasywnie podczas walki.",
      "image": "assets/pixel/legs.png"
    },
    {
      "armorClass": 2,
      "cards": [],
      "category": "armor",
      "effect": "",
      "id": "leather_boots",
      "name": "Skórzane buty",
      "price": 15,
      "slot": "boots",
      "status": "implemented",
      "description": "Podstawowa ochrona stóp. Mały element wspólnej puli klasy pancerza.",
      "image": "assets/pixel/boots.png"
    },
    {
      "armorClass": 2,
      "cards": [],
      "category": "armor",
      "effect": "",
      "id": "wooden_shield",
      "name": "Drewniana tarcza",
      "price": 25,
      "slot": "offhand",
      "status": "implemented",
      "description": "Osłona drugiej ręki. Podnosi KP, które utrudnia trafienie, zamiast tworzyć pulę bloku.",
      "image": "assets/pixel/shield.png"
    },
    {
      "armorClass": 0,
      "cards": [],
      "category": "consumable",
      "effect": "Zdrowie +6. Koszt w walce: 50% maksymalnej energii.",
      "id": "healing_potion",
      "name": "Mikstura leczenia",
      "price": 15,
      "slot": "",
      "status": "implemented",
      "description": "Przywraca 6 punktów zdrowia, najwyżej do maksymalnego HP. W walce zużywa połowę maksymalnej energii.",
      "image": "assets/consumables/01-mikstura-leczenia.png"
    },
    {
      "armorClass": 0,
      "cards": [],
      "category": "consumable",
      "effect": "Bariera do co najmniej 5. Efekty nie sumują się; zachowujesz większą z obecnej i podanej wartości. Koszt w walce: 50% maksymalnej energii.",
      "id": "barrier_potion",
      "name": "Fiolka osłony",
      "price": 20,
      "slot": "",
      "status": "implemented",
      "description": "Podnosi barierę do 5, jeśli obecna jest niższa. Efekty nie sumują się: przy barierze 4 końcowa wartość to 5, nie 9. Osłona trwa do zużycia albo końca walki.",
      "image": null
    },
    {
      "armorClass": 0,
      "cards": [],
      "category": "consumable",
      "effect": "Siła do co najmniej 3. Efekty nie sumują się; zachowujesz większą z obecnej i podanej wartości. Koszt w walce: 50% maksymalnej energii.",
      "id": "strength_potion",
      "name": "Eliksir siły",
      "price": 20,
      "slot": "",
      "status": "implemented",
      "description": "Podnosi siłę do 3 przed następnym udanym trafieniem. Efekty nie sumują się: przy sile 2 końcowa wartość to 3, nie 5. Koszt w walce to połowa maksymalnej energii.",
      "image": null
    },
    {
      "id": "concept-weapon-6",
      "name": "Ząb Studni",
      "category": "weapon",
      "status": "concept",
      "description": "Ząbkowane ostrze o surowej, nadgryzionej sylwetce. Koncepcja graficzna; karty i statystyki nie są ustalone.",
      "image": "assets/weapons/06-zab-studni.png",
      "slot": "weapon",
      "price": null,
      "armorClass": null,
      "effect": "",
      "cards": []
    },
    {
      "id": "concept-weapon-7",
      "name": "Popielny Werdykt",
      "category": "weapon",
      "status": "concept",
      "description": "Broń o przygaszonej, popielnej kolorystyce. Koncepcja graficzna; bez zatwierdzonego zestawu kart.",
      "image": "assets/weapons/07-popielny-werdykt.png",
      "slot": "weapon",
      "price": null,
      "armorClass": null,
      "effect": "",
      "cards": []
    },
    {
      "id": "concept-weapon-10",
      "name": "Korzeń Gniewu",
      "category": "weapon",
      "status": "concept",
      "description": "Organiczna forma ciężkiej broni. Koncepcja wyglądu, bez wdrożonych zasad.",
      "image": "assets/weapons/10-korzen-gniewu.png",
      "slot": "weapon",
      "price": null,
      "armorClass": null,
      "effect": "",
      "cards": []
    },
    {
      "id": "concept-weapon-12",
      "name": "Łamacz Przysiąg",
      "category": "weapon",
      "status": "concept",
      "description": "Mroczna broń o wyrazistej sylwetce. To projekt ilustracji, nie kolejny przedmiot w grze.",
      "image": "assets/weapons/12-lamacz-przysiag.png",
      "slot": "weapon",
      "price": null,
      "armorClass": null,
      "effect": "",
      "cards": []
    },
    {
      "id": "concept-weapon-13",
      "name": "Głód Katakumb",
      "category": "weapon",
      "status": "concept",
      "description": "Projekt broni z motywem katakumb. Statystyki i działanie wymagają osobnego ustalenia.",
      "image": "assets/weapons/13-glod-katakumb.png",
      "slot": "weapon",
      "price": null,
      "armorClass": null,
      "effect": "",
      "cards": []
    },
    {
      "id": "concept-weapon-16",
      "name": "Solny Płacz",
      "category": "weapon",
      "status": "concept",
      "description": "Ilustracja broni o chłodnym, zużytym charakterze. Nie ma jeszcze kart ani ceny w grze.",
      "image": "assets/weapons/16-solny-placz.png",
      "slot": "weapon",
      "price": null,
      "armorClass": null,
      "effect": "",
      "cards": []
    },
    {
      "id": "concept-weapon-17",
      "name": "Miedziousty",
      "category": "weapon",
      "status": "concept",
      "description": "Projekt broni z miedzianymi detalami. Wygląd nie oznacza wdrożonych efektów.",
      "image": "assets/weapons/17-miedziousty.png",
      "slot": "weapon",
      "price": null,
      "armorClass": null,
      "effect": "",
      "cards": []
    },
    {
      "id": "concept-weapon-18",
      "name": "Zgaszona Jutrznia",
      "category": "weapon",
      "status": "concept",
      "description": "Koncepcja broni w przygaszonej palecie. Zestaw kart pozostaje nieustalony.",
      "image": "assets/weapons/18-zgaszona-jutrznia.png",
      "slot": "weapon",
      "price": null,
      "armorClass": null,
      "effect": "",
      "cards": []
    },
    {
      "id": "concept-weapon-19",
      "name": "Klucz do Ciszy",
      "category": "weapon",
      "status": "concept",
      "description": "Nietypowa forma fantasy o wyrazistych detalach. Materiał do oceny, jeszcze poza grą.",
      "image": "assets/weapons/19-klucz-do-ciszy.png",
      "slot": "weapon",
      "price": null,
      "armorClass": null,
      "effect": "",
      "cards": []
    },
    {
      "id": "concept-weapon-20",
      "name": "Drzazga Tronu",
      "category": "weapon",
      "status": "concept",
      "description": "Ozdobny projekt broni z królewskim motywem. Koncepcja graficzna bez danych rozgrywki.",
      "image": "assets/weapons/20-drzazga-tronu.png",
      "slot": "weapon",
      "price": null,
      "armorClass": null,
      "effect": "",
      "cards": []
    },
    {
      "id": "concept-02-bandaz-polowy",
      "name": "Bandaż polowy",
      "category": "consumable",
      "status": "concept",
      "description": "Pozwala opatrzyć rany między walkami. Tańsza alternatywa dla mikstury, wymagająca spokojnej chwili.",
      "image": "assets/consumables/02-bandaz-polowy.png",
      "slot": "",
      "price": null,
      "armorClass": null,
      "effect": "Proponowane działanie — wymaga osobnego zatwierdzenia i balansu.",
      "cards": []
    },
    {
      "id": "concept-03-racje-wedrowca",
      "name": "Racje wędrowca",
      "category": "consumable",
      "status": "concept",
      "description": "Jednorazowy posiłek między walkami, przywracający niewielką część zdrowia. Bez licznika głodu i obowiązku jedzenia.",
      "image": "assets/consumables/03-racje-wedrowca.png",
      "slot": "",
      "price": null,
      "armorClass": null,
      "effect": "Proponowane działanie — wymaga osobnego zatwierdzenia i balansu.",
      "cards": []
    },
    {
      "id": "concept-04-mikstura-wigoru",
      "name": "Mikstura wigoru",
      "category": "consumable",
      "status": "concept",
      "description": "Zapewnia dodatkową energię w bieżącej turze. Pomaga zagrać kosztowną kartę w ważnym momencie.",
      "image": "assets/consumables/04-mikstura-wigoru.png",
      "slot": "",
      "price": null,
      "armorClass": null,
      "effect": "Proponowane działanie — wymaga osobnego zatwierdzenia i balansu.",
      "cards": []
    },
    {
      "id": "concept-05-masc-ochronna",
      "name": "Maść ochronna",
      "category": "consumable",
      "status": "concept",
      "description": "Przed walką zapewnia wybranej postaci dodatkową osłonę na pierwszą turę.",
      "image": "assets/consumables/05-masc-ochronna.png",
      "slot": "",
      "price": null,
      "armorClass": null,
      "effect": "Proponowane działanie — wymaga osobnego zatwierdzenia i balansu.",
      "cards": []
    },
    {
      "id": "concept-06-oselka",
      "name": "Osełka",
      "category": "consumable",
      "status": "concept",
      "description": "Jednorazowo wzmacnia najbliższy atak wybranego bohatera. Pozwala przygotować mocne uderzenie bez trwałego ulepszania broni.",
      "image": "assets/consumables/06-oselka.png",
      "slot": "",
      "price": null,
      "armorClass": null,
      "effect": "Proponowane działanie — wymaga osobnego zatwierdzenia i balansu.",
      "cards": []
    },
    {
      "id": "concept-07-bomba-dymna",
      "name": "Bomba dymna",
      "category": "consumable",
      "status": "concept",
      "description": "Osłabia najbliższy atak wskazanego przeciwnika. Daje chwilę na leczenie lub odbudowanie obrony.",
      "image": "assets/consumables/07-bomba-dymna.png",
      "slot": "",
      "price": null,
      "armorClass": null,
      "effect": "Proponowane działanie — wymaga osobnego zatwierdzenia i balansu.",
      "cards": []
    },
    {
      "id": "concept-08-flaszka-ognia",
      "name": "Flaszka ognia",
      "category": "consumable",
      "status": "concept",
      "description": "Zadaje obrażenia wskazanemu przeciwnikowi. Awaryjny atak, gdy ręka kart nie daje dobrego wyjścia.",
      "image": "assets/consumables/08-flaszka-ognia.png",
      "slot": "",
      "price": null,
      "armorClass": null,
      "effect": "Proponowane działanie — wymaga osobnego zatwierdzenia i balansu.",
      "cards": []
    },
    {
      "id": "concept-09-zwoj-rozeznania",
      "name": "Zwój rozeznania",
      "category": "consumable",
      "status": "concept",
      "description": "Odsłania niewielki obszar mapy wokół drużyny. Nie usuwa przeciwników ani nie otwiera przejść.",
      "image": "assets/consumables/09-zwoj-rozeznania.png",
      "slot": "",
      "price": null,
      "armorClass": null,
      "effect": "Proponowane działanie — wymaga osobnego zatwierdzenia i balansu.",
      "cards": []
    },
    {
      "id": "concept-10-krysztal-oslony",
      "name": "Kryształ osłony",
      "category": "consumable",
      "status": "concept",
      "description": "Zapewnia wybranej postaci natychmiastową osłonę na bieżącą turę. Rzadki zapas na trudne starcie.",
      "image": "assets/consumables/10-krysztal-oslony.png",
      "slot": "",
      "price": null,
      "armorClass": null,
      "effect": "Proponowane działanie — wymaga osobnego zatwierdzenia i balansu.",
      "cards": []
    }
  ],
  "enemies": [
    {
      "id": "floor_enemy",
      "name": "Przeciwnik",
      "status": "implemented",
      "category": "enemy",
      "description": "Podstawowy przeciwnik generowanych lochów. Walczy w grupach rosnących wraz z głębokością. Na nowych piętrach może rozpocząć starcie przez aggro albo dołączyć do mapy jako posiłek.",
      "image": "assets/pixel/enemy_guard.png",
      "stats": [
        {
          "label": "Zdrowie",
          "value": "18 / 22",
          "context": "Normalny / Trudny; wartości bieżącego prototypu"
        },
        {
          "label": "Atak bazowy",
          "value": "3 / 4",
          "context": "Normalny / Trudny; wartości bieżącego prototypu; surowe obrażenia przed ochroną"
        },
        {
          "label": "Poziom",
          "value": "1 + ⌊(piętro − 1) / 2⌋",
          "context": "Obecne reguły; piętro liczone od 1"
        },
        {
          "label": "Klasa pancerza",
          "value": "2 × (poziom − 1)",
          "context": "KP zależy od poziomu przeciwnika"
        }
      ],
      "actions": [
        {
          "name": "Atak",
          "effect": "Jedno działanie w fazie NPC. Trafienie uwzględnia KP celu i różnicę poziomów."
        }
      ],
      "occurrence": "W jednej grupie: 2 wrogów na piętrach 1–2, 3 na 3–4, potem co dwa piętra o jednego więcej, do 8. Na nowych piętrach od 0.26 początkowa liczba ikon spotkań (z bossem) wynosi 4 + 6 × piętro na Normalnym i 4 + 10 × piętro na Trudnym. Aggro ma zasięg 1–4 pól, zależny od siły całych drużyn; ściany blokują wykrycie przez aggro. Co 20 udanych kroków: 25% szansy na dodatkową zwykłą ikonę poza kwadratem 11 × 11. Limit udanych posiłków na piętro to połowa początkowych ikon; pokonane również zużywają limit.",
      "loot": "Zwycięstwo w całym zwykłym starciu daje bohaterowi 10 złota — nie za każdego wroga osobno. XP za każdego zwykłego wroga: 10 × jego poziom dla uczestnika drużyny."
    },
    {
      "id": "floor_boss",
      "name": "Boss piętra",
      "status": "implemented",
      "category": "boss",
      "description": "Strzeże przejścia na następne piętro. Dopiero pokonanie bossa odsłania schody; zejście wymaga osobnej decyzji.",
      "image": "assets/pixel/floor_boss.png",
      "stats": [
        {
          "label": "Zdrowie",
          "value": "30 / 36",
          "context": "Normalny / Trudny; wartości bieżącego prototypu"
        },
        {
          "label": "Atak bazowy",
          "value": "4 / 5",
          "context": "Normalny / Trudny; wartości bieżącego prototypu; surowe obrażenia przed ochroną"
        },
        {
          "label": "Poziom",
          "value": "2 + ⌊(piętro − 1) / 2⌋",
          "context": "Obecne reguły; piętro liczone od 1"
        },
        {
          "label": "Klasa pancerza",
          "value": "2 × (poziom − 1) + 4",
          "context": "KP zależy od poziomu przeciwnika"
        }
      ],
      "actions": [
        {
          "name": "Atak",
          "effect": "Jedno działanie w fazie NPC. Trafienie uwzględnia KP celu i różnicę poziomów."
        }
      ],
      "occurrence": "Jeden boss na piętro, wliczony w początkowe ikony. Na nowych piętrach od 0.26 początkowa liczba ikon spotkań (z bossem) wynosi 4 + 6 × piętro na Normalnym i 4 + 10 × piętro na Trudnym. Aggro ma zasięg 1–4 pól, zależny od siły całych drużyn; ściany blokują wykrycie przez aggro.",
      "loot": "Zwycięstwo nad bossem daje bohaterowi 25 złota i otwiera dostęp do schodów. XP za bossa: 40 × jego poziom dla uczestnika drużyny."
    },
    {
      "id": "01-szczurzy-nozownik",
      "name": "Szczurzy Nożownik",
      "status": "concept",
      "category": "enemy",
      "description": "Słaby napastnik; od piętra 1. Łatwy do wyeliminowania jako pierwszy; dwie akcje ofensywne i jedna obronna.",
      "image": "assets/enemies/01-szczurzy-nozownik.png",
      "stats": [
        {
          "label": "Zdrowie",
          "value": "10",
          "context": "Koncepcja sprzed przebudowy walki: Normalny, piętra 1–5; to nie jest obecny balans."
        },
        {
          "label": "Stała redukcja obrażeń",
          "value": "0",
          "context": "Koncepcja sprzed przebudowy walki: Normalny, piętra 1–5; to nie jest obecny balans. Nie utożsamiać z obecną KP."
        },
        {
          "label": "Akcje na turę",
          "value": "1",
          "context": "Koncepcja sprzed przebudowy walki: Normalny, piętra 1–5; to nie jest obecny balans."
        }
      ],
      "actions": [
        {
          "name": "Ukłucie",
          "effect": "2 obrażenia jednemu celowi."
        },
        {
          "name": "Podwójne dźgnięcie",
          "effect": "2 × 2 obrażenia temu samemu celowi; blok pochłania kolejne trafienia."
        },
        {
          "name": "Skulona osłona",
          "effect": "+2 bloku dla siebie, bez obrażeń."
        }
      ],
      "occurrence": "Proponowana szansa udziału w zwykłej grupie na piętrach 1–5: 1: 80% · 2: 60% · 3: 100% · 4: 100% · 5: 100%. To szansa obecności w grupie, nie procent pól mapy. Cykl: Ukłucie → Ukłucie → Podwójne dźgnięcie → Skulona osłona.",
      "loot": "Propozycja nagrody za jednego wroga po zwycięstwie: 3–5 złota oraz jeden wynik: Sztylet 8%; Mikstura leczenia (+6 HP) 12%; Brak przedmiotu 80%."
    },
    {
      "id": "02-rdzawy-wartownik",
      "name": "Rdzawy Wartownik",
      "status": "concept",
      "category": "enemy",
      "description": "Obrońca; od piętra 1. Atakować mocno w rundach bez bloku; nie ma stałego pancerza.",
      "image": "assets/enemies/02-rdzawy-wartownik.png",
      "stats": [
        {
          "label": "Zdrowie",
          "value": "18",
          "context": "Koncepcja sprzed przebudowy walki: Normalny, piętra 1–5; to nie jest obecny balans."
        },
        {
          "label": "Stała redukcja obrażeń",
          "value": "0",
          "context": "Koncepcja sprzed przebudowy walki: Normalny, piętra 1–5; to nie jest obecny balans. Nie utożsamiać z obecną KP."
        },
        {
          "label": "Akcje na turę",
          "value": "1",
          "context": "Koncepcja sprzed przebudowy walki: Normalny, piętra 1–5; to nie jest obecny balans."
        }
      ],
      "actions": [
        {
          "name": "Rdzawy zamach",
          "effect": "3 obrażenia jednemu celowi."
        },
        {
          "name": "Zwarcie tarcz",
          "effect": "+4 bloku dla siebie, bez obrażeń."
        },
        {
          "name": "Pchnięcie w szczelinę",
          "effect": "4 obrażenia; nie ignoruje bloku."
        },
        {
          "name": "Uderzenie tarczą",
          "effect": "2 obrażenia jednemu celowi i +2 bloku dla siebie."
        }
      ],
      "occurrence": "Proponowana szansa udziału w zwykłej grupie na piętrach 1–5: 1: 65% · 2: 75% · 3: 85% · 4: 80% · 5: 100%. To szansa obecności w grupie, nie procent pól mapy. Cykl: Rdzawy zamach → Zwarcie tarcz → Pchnięcie w szczelinę → Uderzenie tarczą.",
      "loot": "Propozycja nagrody za jednego wroga po zwycięstwie: 4–6 złota oraz jeden wynik: Sztylet 10%; Młot 5%; Mikstura leczenia (+6 HP) 15%; Brak przedmiotu 70%."
    },
    {
      "id": "03-kopalniany-rozbijacz",
      "name": "Kopalniany Rozbijacz",
      "status": "concept",
      "category": "enemy",
      "description": "Powolny napastnik; od piętra 2. Runda przygotowania daje czas na obronę lub dobicie. W grupie najwyżej jeden Rozbijacz.",
      "image": "assets/enemies/03-kopalniany-rozbijacz.png",
      "stats": [
        {
          "label": "Zdrowie",
          "value": "24",
          "context": "Koncepcja sprzed przebudowy walki: Normalny, piętra 1–5; to nie jest obecny balans."
        },
        {
          "label": "Stała redukcja obrażeń",
          "value": "0",
          "context": "Koncepcja sprzed przebudowy walki: Normalny, piętra 1–5; to nie jest obecny balans. Nie utożsamiać z obecną KP."
        },
        {
          "label": "Akcje na turę",
          "value": "1",
          "context": "Koncepcja sprzed przebudowy walki: Normalny, piętra 1–5; to nie jest obecny balans."
        }
      ],
      "actions": [
        {
          "name": "Cios kilofowym młotem",
          "effect": "4 obrażenia jednemu celowi."
        },
        {
          "name": "Cięcie robocze",
          "effect": "2 obrażenia jednemu celowi."
        },
        {
          "name": "Ciężki zamach",
          "effect": "+2 bloku; przygotowuje Rozłupanie na następną własną turę. Cel i 8 obrażeń są już wtedy jawne."
        },
        {
          "name": "Rozłupanie",
          "effect": "8 obrażeń jednemu celowi, wyłącznie po Ciężkim zamachu; nigdy w pierwszej turze."
        }
      ],
      "occurrence": "Proponowana szansa udziału w zwykłej grupie na piętrach 1–5: 1: 0% · 2: 35% · 3: 45% · 4: 55% · 5: 35%. To szansa obecności w grupie, nie procent pól mapy. Cykl: Cios kilofowym młotem → Cięcie robocze → Ciężki zamach → Rozłupanie.",
      "loot": "Propozycja nagrody za jednego wroga po zwycięstwie: 6–8 złota oraz jeden wynik: Młot 15%; Mikstura leczenia (+6 HP) 15%; Brak przedmiotu 70%."
    },
    {
      "id": "04-popielna-wiedzma",
      "name": "Popielna Wiedźma",
      "status": "concept",
      "category": "enemy",
      "description": "Wsparcie; od piętra 3. Mało HP, ale przedłuża walkę. W grupie najwyżej jedna Wiedźma; leczenie nie wskrzesza.",
      "image": "assets/enemies/04-popielna-wiedzma.png",
      "stats": [
        {
          "label": "Zdrowie",
          "value": "14",
          "context": "Koncepcja sprzed przebudowy walki: Normalny, piętra 1–5; to nie jest obecny balans."
        },
        {
          "label": "Stała redukcja obrażeń",
          "value": "0",
          "context": "Koncepcja sprzed przebudowy walki: Normalny, piętra 1–5; to nie jest obecny balans. Nie utożsamiać z obecną KP."
        },
        {
          "label": "Akcje na turę",
          "value": "1",
          "context": "Koncepcja sprzed przebudowy walki: Normalny, piętra 1–5; to nie jest obecny balans."
        }
      ],
      "actions": [
        {
          "name": "Iskra popiołu",
          "effect": "3 obrażenia jednemu celowi; zwykły blok działa."
        },
        {
          "name": "Napar z popiołu",
          "effect": "+3 HP najbardziej rannemu żywemu członkowi własnej grupy (także sobie); maks. 2 udane użycia na walkę, bez nadleczenia. Gdy brak rannego lub ładunków: Cięcie rytualne."
        },
        {
          "name": "Rozżarzona żagiew",
          "effect": "4 obrażenia jednemu celowi, bez podpalenia ani obrażeń w kolejnych turach."
        },
        {
          "name": "Cięcie rytualne",
          "effect": "2 obrażenia jednemu celowi."
        }
      ],
      "occurrence": "Proponowana szansa udziału w zwykłej grupie na piętrach 1–5: 1: 0% · 2: 0% · 3: 25% · 4: 45% · 5: 50%. To szansa obecności w grupie, nie procent pól mapy. Cykl: Iskra popiołu → Napar z popiołu → Rozżarzona żagiew → Cięcie rytualne.",
      "loot": "Propozycja nagrody za jednego wroga po zwycięstwie: 5–7 złota oraz jeden wynik: Mikstura leczenia (+6 HP) 30%; Sztylet 5%; Brak przedmiotu 65%."
    },
    {
      "id": "05-dozorca-lancuchow",
      "name": "Dozorca Łańcuchów",
      "status": "concept",
      "category": "enemy",
      "description": "Rzadki dowódca zwykłej grupy; od piętra 4. Mocny, ale co cztery tury poświęca akcję na obronę. Najwyżej jeden w grupie; nie zastępuje bossa piętra.",
      "image": "assets/enemies/05-dozorca-lancuchow.png",
      "stats": [
        {
          "label": "Zdrowie",
          "value": "28",
          "context": "Koncepcja sprzed przebudowy walki: Normalny, piętra 1–5; to nie jest obecny balans."
        },
        {
          "label": "Stała redukcja obrażeń",
          "value": "0",
          "context": "Koncepcja sprzed przebudowy walki: Normalny, piętra 1–5; to nie jest obecny balans. Nie utożsamiać z obecną KP."
        },
        {
          "label": "Akcje na turę",
          "value": "1",
          "context": "Koncepcja sprzed przebudowy walki: Normalny, piętra 1–5; to nie jest obecny balans."
        }
      ],
      "actions": [
        {
          "name": "Cios klucznika",
          "effect": "4 obrażenia jednemu celowi."
        },
        {
          "name": "Żelazna osłona",
          "effect": "+4 bloku dla siebie, bez obrażeń."
        },
        {
          "name": "Smagnięcie łańcuchem",
          "effect": "2 × 2 obrażenia temu samemu celowi; bez ogłuszenia i odbierania tury."
        },
        {
          "name": "Egzekutorskie cięcie",
          "effect": "5 obrażeń jednemu celowi."
        }
      ],
      "occurrence": "Proponowana szansa udziału w zwykłej grupie na piętrach 1–5: 1: 0% · 2: 0% · 3: 0% · 4: 20% · 5: 45%. To szansa obecności w grupie, nie procent pól mapy. Cykl: Cios klucznika → Żelazna osłona → Smagnięcie łańcuchem → Egzekutorskie cięcie.",
      "loot": "Propozycja nagrody za jednego wroga po zwycięstwie: 8–10 złota oraz jeden wynik: Młot 15%; Sztylet 10%; Mikstura leczenia (+6 HP) 20%; Brak przedmiotu 55%."
    }
  ],
  "releases": [
    {
      "version": "0.40",
      "date": "2026-10-24",
      "title": "Jednakowa skala postaci obu drużyn",
      "groups": [
        {
          "label": "Wspólny rozmiar na arenie",
          "changes": [
            "Obie drużyny używają skali postaci dobranej do liczniejszej strony. Przy trzech sojusznikach i dwóch przeciwnikach figury obu stron mają skalę drużyny trzyosobowej.",
            "Przy równej liczbie postaci rozmiar pozostaje dotychczasowy. Zachowano formacje, imiona, paski zdrowia i obsługę dotknięć postaci."
          ]
        },
        {
          "label": "Ta sama walka i zapis",
          "changes": [
            "Dopasowanie do pionowego i poziomego ekranu pozostaje dostępne. Zmiana skali nie dodaje nowych reguł walki ani treści.",
            "Format zapisu 6, rozpoczęte próby, historia i rekord pozostają bez zmian i nie wymagają resetowania."
          ]
        }
      ],
      "note": "Liczniejsza drużyna wyznacza wspólną skalę figur po obu stronach areny. Przy równych składach wygląd pozostaje bez zmian."
    },
    {
      "version": "0.39",
      "date": "2026-10-23",
      "title": "Gra dopasowana do całego ekranu",
      "groups": [
        {
          "label": "Pion, poziom i proporcje pośrednie",
          "changes": [
            "Menu, mapa, walka, ręka kart, ekwipunek i okna dopasowują układ do dostępnej szerokości i wysokości. Na szerokim ekranie panele znajdują się obok pola gry; na wąskim zachowują układ pionowy.",
            "Pion 9:16 pozostaje wzorcem wyglądu. Układ obejmuje proporcje 9:16, 9:18, 9:19, 9:19,5, 9:20, 9:21, 9:22, 3:4, 2:3, 5:8, 1:1, 4:3, 16:10, 16:9 i 21:9 oraz płynne dopasowanie pomiędzy nimi.",
            "Postacie, przedmioty i pozostałe ilustracje zachowują proporcje. Listy można przewijać, a przyciski i panele uwzględniają bezpieczny obszar ekranu."
          ]
        },
        {
          "label": "Więcej miejsca w przeglądarce i na Androidzie",
          "changes": [
            "Wersja przeglądarkowa wypełnia dostępne okno zamiast pozostawać w wąskiej ramce 9:16. Przycisk Pełny ekran udostępnia dodatkowe miejsce, jeśli przeglądarka pozwala włączyć ten tryb.",
            "Android dopuszcza automatyczny obrót gry wraz z urządzeniem. Układ uwzględnia bezpieczny obszar przy krawędziach i wycięciach ekranu."
          ]
        },
        {
          "label": "Ta sama wyprawa",
          "changes": [
            "Mapa zachowuje kadr 11 × 11 pól, a okno informacji o postaci nadal nie przyciemnia walki.",
            "Reguły, treści i format zapisu 6 pozostają bez zmian. Rozpoczęte próby, historia i rekord nie wymagają resetowania."
          ]
        }
      ],
      "note": "Elastyczny układ całej gry w pionie i poziomie. Wersja pozostaje prototypem; obrót i bezpieczne obszary nie zostały sprawdzone na fizycznym telefonie."
    },
    {
      "version": "0.38",
      "date": "2026-10-23",
      "title": "Zwarte okno informacji o postaci",
      "groups": [
        {
          "label": "Szczegóły nad polem walki",
          "changes": [
            "Dotknięcie sojusznika lub przeciwnika otwiera wyśrodkowane okno informacji bez przyciemniania pola walki. Jego wysokość dopasowuje się do treści, a dłuższe opisy można przewijać.",
            "Przycisk rozmowy z towarzyszem znajduje się w nagłówku okna. Zamknij i Wstecz nadal wracają do walki."
          ]
        },
        {
          "label": "Zachowane działanie walki",
          "changes": [
            "Podgląd nie zmienia wybranego celu. Dostępne informacje o sojusznikach i przeciwnikach oraz rozmowy zachowują dotychczasowe zasady.",
            "Reguły walki i format zapisu 6 pozostają bez zmian. Rozpoczęte próby, historia i rekord nie wymagają resetowania."
          ]
        }
      ],
      "note": "Informacje o dotkniętej postaci mieszczą się w zwartym oknie dopasowanym do treści. Długie szczegóły pozostają dostępne przez przewijanie."
    },
    {
      "version": "0.37",
      "date": "2026-10-22",
      "title": "Lochy bez mgły",
      "groups": [
        {
          "label": "Cały teren od początku",
          "changes": [
            "Usunięto mgłę, zaciemnienie terenu i stopniowe odkrywanie mapy. Cały teren piętra jest dostępny od początku także w podglądzie mapy.",
            "W menu nie ma już przełącznika mgły. Widok wokół bohatera zachowuje kadr 11 × 11 pól."
          ]
        },
        {
          "label": "Zachowana wyprawa",
          "changes": [
            "Rozpoczęte próby wczytują się z pełną widocznością terenu. Zachowano format zapisu 6 i dotychczasowy postęp, bez resetowania danych.",
            "Ściany, ruch i aggro zachowują dotychczasowe działanie. Zmiana widoczności terenu nie dodaje nowych zasad walki ani treści."
          ]
        }
      ],
      "note": "Pełny teren piętra od początku, także w podglądzie mapy. Kadr 11 × 11, rozpoczęte próby i zasady walki pozostają."
    },
    {
      "version": "0.36",
      "date": "2026-10-22",
      "title": "Więcej miejsca na walkę",
      "groups": [
        {
          "label": "Informacje przy talii",
          "changes": [
            "Imię, zdrowie z paskiem, bariera, siła, energia i KP bohatera znajdują się w zwartym panelu na prawo od talii.",
            "Po otwarciu ręki karty nie zasłaniają dostępu do wartości bohatera: zdrowie, energia, bariera, siła i KP są widoczne także w jej nagłówku.",
            "Przesunięto komunikat walki i podpis pomieszczenia. Pole z postaciami sięga wyżej i ma więcej miejsca, a figury pozostają na podłodze areny."
          ]
        },
        {
          "label": "Czytelniejszy układ postaci",
          "changes": [
            "Każda drużyna od trzech osób jest wyświetlana w zygzaku: kolejne postacie od lewej do prawej znajdują się naprzemiennie niżej i wyżej. Jedna lub dwie postacie pozostają w poziomej linii.",
            "Imiona, paski zdrowia i obszary dotyku poszczególnych postaci są rozdzielone. Rozmiar figur dopasowuje się także do krótkiego ekranu."
          ]
        },
        {
          "label": "Ta sama walka i wyprawa",
          "changes": [
            "To zmiana rozmieszczenia elementów ekranu. Auto z wersji 0.35, ręka kart przed postaciami, wybór celu i szczegóły postaci pozostają dostępne.",
            "Reguły, karty, przedmioty i format zapisu 6 pozostają bez zmian. Rozpoczęte próby, historia i rekord nie wymagają resetowania."
          ]
        }
      ],
      "note": "Panel bohatera przy talii i zygzak postaci zwalniają miejsce na ekranie walki. Zmiana układu nie dodaje nowych zasad."
    },
    {
      "version": "0.35",
      "date": "2026-10-22",
      "title": "Auto i wygodniejsza ręka kart",
      "groups": [
        {
          "label": "Karty i plecak pod ręką",
          "changes": [
            "Rozwinięta ręka kart jest wyświetlana przed postaciami. Dotknięcie karty trafia w kartę, także gdy pod nią znajduje się figura.",
            "Przycisk plecaka nad talią przesunięto nieco wyżej. Obok niego oraz w nagłówku ręki znajduje się przycisk Auto."
          ]
        },
        {
          "label": "Automatyczne tury bohatera",
          "changes": [
            "Auto jest domyślnie wyłączone i przygaszone. Po dotknięciu staje się kolorowe i rozgrywa kolejne tury bohatera aż do końca walki lub wyłączenia.",
            "Co 0,4 sekundy wybiera dostępne zagranie według dotychczasowych zasad decyzji towarzyszy. Korzysta z kart bohatera, bez zużywania mikstur.",
            "Gdy nie ma dostępnego zagrania, kończy turę. Zachowano dotychczasowy pokaz działań NPC; po nim Auto podejmuje następną turę bohatera. Ponowne dotknięcie wyłącza Auto także podczas pokazu NPC."
          ]
        },
        {
          "label": "Powrót do ręcznego sterowania",
          "changes": [
            "Auto wyłącza się po wyniku walki, opuszczeniu walki, przejściu do menu, przejściu aplikacji w tło albo błędzie zapisu.",
            "Kontynuuj przywraca walkę z wyłączonym Auto. Ustawienie nie jest zapisywane na przyszłość; format zapisu 6, rozpoczęte próby, historia i rekord pozostają bez resetowania.",
            "Test na fizycznym telefonie pozostaje niewykonany."
          ]
        }
      ],
      "note": "Opcjonalne Auto rozgrywa kolejne tury bohatera. Ręka kart pozostaje przed postaciami, a rozpoczęte próby nie wymagają resetowania."
    },
    {
      "version": "0.34",
      "date": "2026-10-21",
      "title": "Szczegóły postaci od razu",
      "groups": [
        {
          "label": "Krótsza droga do informacji",
          "changes": [
            "Dotknięcie postaci na polu walki otwiera od razu szczegóły właśnie tej postaci. Pominięto pośrednią listę obu drużyn.",
            "Zamknij albo Wstecz wraca bezpośrednio do ekranu bitwy."
          ]
        },
        {
          "label": "Zachowane działanie",
          "changes": [
            "Szczegóły przeciwników nadal pokazują wyłącznie dotychczas dostępne informacje. Zachowano wybór celu i rozmowy z towarzyszami.",
            "Reguły walki, rozpoczęte próby, historia i rekord pozostają. Format zapisu 6 nie wymaga resetowania danych."
          ]
        }
      ],
      "note": "Dotknięcie otwiera szczegóły konkretnej postaci bez dodatkowej listy. Zasady i zapis pozostają zachowane."
    },
    {
      "version": "0.33",
      "date": "2026-10-21",
      "title": "Nowy widok walki",
      "groups": [
        {
          "label": "Postacie w centrum",
          "changes": [
            "Środek ekranu zajmują postacie obu drużyn. Po każdej stronie mieści się do ośmiu uczestników, w dwóch rzędach po najwyżej cztery postacie.",
            "Nazwy i paski zdrowia znajdują się nad głowami. Wskazanie celu, informacje o postaci, rozmowy z towarzyszami i ich dymki pozostają dostępne."
          ]
        },
        {
          "label": "Informacje pod ręką",
          "changes": [
            "Przycisk Dziennik zastępuje Tempo. Dziennik jest domyślnie zamknięty; po otwarciu pokazuje do pięciu ostatnich zdarzeń, od najnowszego.",
            "Usunięto regulację tempa. Działania NPC są odtwarzane w stałym tempie 0,4 s na zdarzenie.",
            "Klasa pancerza bohatera jest widoczna w górnym pasku informacji zamiast na osobnej karcie w widoku. Przycisk plecaka ma ikonę."
          ]
        },
        {
          "label": "Ta sama wyprawa",
          "changes": [
            "Zmienia się rozmieszczenie elementów ekranu walki. Zasady, karty, wyposażenie i dotychczasowe możliwości rozmów pozostają zachowane.",
            "Rozpoczęte próby, historia i rekord pozostają. Zachowano format zapisu 6 bez resetowania danych.",
            "Test na fizycznym telefonie pozostaje niewykonany."
          ]
        }
      ],
      "note": "Nowy wygląd walki i ukryty pod przyciskiem dziennik. Bez zmiany zasad ani resetowania wyprawy."
    },
    {
      "version": "0.32",
      "date": "2026-10-21",
      "title": "Wybierz towarzysza wyprawy",
      "groups": [
        {
          "label": "Prostszy początek",
          "changes": [
            "W oknie Nowa próba wybierasz poziom Normalny lub Trudny oraz jednego towarzysza: Wojownika, Łucznika, Maga, Łotrzyka albo Kleryka. Towarzysza wskazujesz samodzielnie; domyślnie wybrane są Normalny i Kleryk.",
            "Okno zawiera tylko te dwa wybory oraz przyciski Start i Anuluj. Usunięto wprowadzenie, opisy oraz ustawienia rozmiaru piętra i liczby skrzyń.",
            "Nowe próby mają stałe cztery skrzynie na piętro. Układ 50 × 50, liczba pokojów i krótkie korytarze pozostają zgodne z poprzednią wersją."
          ]
        },
        {
          "label": "Sprzęt na początek",
          "changes": [
            "Wojownik zaczyna z Przysięgą Wdowca, Łucznik z Zaćmieniem Łowcy, a Łotrzyk ze Sztyletem.",
            "Mag ma Kostur opiekuna i Odłamek żaru w lewym miejscu artefaktu. Kleryk zaczyna z Kosturem opiekuna.",
            "To istniejące przedmioty i ich dotychczasowe karty. Wybór roli określa wyposażenie początkowe, ale nie blokuje późniejszej wymiany sprzętu; towarzysz nadal korzysta z obecnych decyzji i rozmów."
          ]
        },
        {
          "label": "Rozpoczęta wyprawa",
          "changes": [
            "Kontynuuj zachowuje dotychczasową drużynę, wyposażenie, ustawienia skrzyń i postęp. Nie dodaje ani nie podmienia towarzysza w zapisanej próbie.",
            "Pula neutralnych postaci spotykanych na mapie pozostaje bez zmian. Zachowano format zapisu 6, historię i rekord, bez resetowania danych.",
            "Test na fizycznym telefonie pozostaje niewykonany."
          ]
        }
      ],
      "note": "Wybór towarzysza i stałe cztery skrzynie dotyczą nowych prób. Istniejące zapisy pozostają zachowane."
    },
    {
      "version": "0.31",
      "date": "2026-10-20",
      "title": "Jasne mury widziane z góry",
      "groups": [
        {
          "label": "Nowy wygląd ścian",
          "changes": [
            "Ściany korzystają z 36 nowych grafik: sześciu kształtów po sześć wariantów. Jasny, ciepły kamień jest pokazany prostopadle z góry i kontrastuje z ciemnym otoczeniem.",
            "Nowa pula zastępuje tylko grafiki murów. Pozostają te same 24 warianty podłóg oraz dotychczasowe schody, skrzynie, łupy i postacie.",
            "Kształty nadal wynikają z konturu pomieszczenia. Zachowano kierunki prostych odcinków, narożników i rozgałęzień T; nowy wklęsły narożnik przedstawia masę kamienia z wycięciem na podłogę."
          ]
        },
        {
          "label": "Ta sama wyprawa",
          "changes": [
            "Nowy wygląd pojawia się także po wybraniu Kontynuuj. Nie zmienia geometrii piętra, zasad, ruchu 0,30 s ani formatu zapisu 6; nie resetuje postępu.",
            "Wariant pozostaje stały dla tego samego piętra i pola, także po zawróceniu lub wczytaniu. Wybór grafiki nie zużywa losowania walki, łupów ani posiłków.",
            "Grafiki są ładowane przed pierwszym ruchem; zachowano pamięć podręczną i ponowne używanie kafelków podczas marszu."
          ]
        },
        {
          "label": "Ograniczenia",
          "changes": [
            "Test na fizycznym telefonie pozostaje niewykonany. Nie potwierdzono płynności Androida ani idealnego połączenia pikseli wszystkich wygenerowanych wariantów."
          ]
        },
        {
          "label": "Wersja przeglądarkowa — 21 października 2026",
          "changes": [
            "Zakładka Zagraj pozwala uruchomić prototyp 0.31 w przeglądarce albo pobrać APK na Androida.",
            "Wersja Web ma pionowy widok, lokalny zapis w przeglądarce oraz przycisk Zapisz i wróć. Zapis jest niezależny od aplikacji Android.",
            "Reguły walki, lochy i wyposażenie pochodzą z tego samego projektu. Fizyczny telefon w przeglądarce pozostaje nieprzetestowany."
          ]
        }
      ],
      "note": "Aktualizacja samych grafik ścian. Nowe piętra zachowują układ 50 × 50 z wydania 0.30, a rozpoczęta próba pozostaje zachowana."
    },
    {
      "version": "0.30",
      "date": "2026-10-20",
      "title": "Pokoje bliżej siebie",
      "groups": [
        {
          "label": "Kompaktowe piętra",
          "changes": [
            "Nowe próby i kolejne generowane piętra mają 50 × 50 pól, zarówno na Normalnym, jak i Trudnym. Pozostaje 14 pokojów różnych rozmiarów.",
            "Cały korytarz poza pokojami ma najwyżej 4 pola. Generator rozmieszcza pokoje blisko siebie, zachowując połączenie lochu; krótkie odcinki nie sklejają się w długi tunel.",
            "W konfiguracji próby stała informacja 50 × 50 zastępuje wybór trzech rozmiarów. Trudność i liczba skrzyń nadal są wybierane osobno."
          ]
        },
        {
          "label": "Dotychczasowa wyprawa",
          "changes": [
            "Aktualnie zapisane piętro nie jest zmniejszane ani przeliczane. Po udanym zejściu następne piętro będzie kompaktowe; postacie i wyposażenie pozostają.",
            "Nie zmieniono wzoru liczby przeciwników, aggro, łupów, widoku 11 × 11 ani tempa ruchu 0,30 s. Na mniejszej mapie jest gęściej, a miejsce może skończyć się wcześniej. Brak miejsca nie obcina liczby wrogów ani nie usuwa dotychczasowego piętra."
          ]
        },
        {
          "label": "Sprawdzenie",
          "changes": [
            "Sprawdzono 1000 układów, limit całych korytarzy, dostępność pokojów, powtarzalność i odczyt starego oraz nowego zapisu. Testy przeszły również na skompilowanych zasobach APK i w rendererze komputera.",
            "Test fizycznego telefonu pozostaje niewykonany. Nie deklarujemy pomiarów płynności Androida."
          ]
        }
      ],
      "note": "Zmiana geometrii nowych pięter, bez resetu aktualnej próby. Nie wracaj do starszego APK po zapisaniu nowego piętra."
    },
    {
      "version": "0.29",
      "date": "2026-10-20",
      "title": "Mury trzymają kierunek",
      "groups": [
        {
          "label": "Poprawione przypisanie ścian",
          "changes": [
            "Skała za krawędzią pokoju nie jest już traktowana jako dodatkowa odnoga muru. Proste brzegi sal i korytarzy używają odcinków poziomych lub pionowych zamiast powtarzanych kafelków T.",
            "Rzeczywiste trójramienne połączenia nadal używają T; narożniki zachowują odpowiednie obroty. Rozpoznawanie korzysta z faktycznych brzegów skały przy znanej podłodze.",
            "Dobór kształtu uwzględnia wyłączenie mgły także w buforze marszu. Przy włączonej mgle nie korzysta z ukrytej geometrii, a odkrycie otoczenia odświeża istniejące kafelki."
          ]
        },
        {
          "label": "Bez resetowania wyprawy",
          "changes": [
            "Poprawka działa również w trwającej próbie. Nie zmienia układu lochu, przejść, ruchu, losowań ani formatu zapisu.",
            "Pozostaje ta sama pula 60 tekstur. Nie zmieniono samych obrazów, podłóg, schodów, przedmiotów ani postaci."
          ]
        },
        {
          "label": "Sprawdzenie",
          "changes": [
            "Błąd odtworzono na zasobach 0.28 i porównano ten sam kontrolowany układ przed oraz po poprawce. Przeszły celowane testy i zwykły renderer komputera.",
            "Test fizycznego telefonu pozostaje niewykonany. Korekta przypisania nie jest przebudową grafik ani gwarancją idealnego połączenia pikseli wszystkich kształtów."
          ]
        }
      ],
      "note": "Naprawa doboru ścian, bez nowej próby i bez przeliczania mapy."
    },
    {
      "version": "0.28",
      "date": "2026-10-20",
      "title": "Więcej twarzy lochu",
      "groups": [
        {
          "label": "Nowy wygląd podłóg i ścian",
          "changes": [
            "Mapa korzysta z 60 nowych grafik: czterech rodzajów podłóg i sześciu kształtów ścian, po sześć wariantów każdego rodzaju.",
            "Podłogi i ściany czerpią wyłącznie z nowej, spójnej puli. Dawne grafiki pozostają w projekcie, ale mapa ich nie wybiera.",
            "Wariant danego rodzaju kafelka jest stały dla tego samego piętra i pola. Marsz, zawracanie i wczytanie nie losują go ponownie; wybór wyglądu nie zużywa losowania walki, łupów ani posiłków."
          ]
        },
        {
          "label": "Kontynuacja wyprawy",
          "changes": [
            "Nowy wygląd zobaczysz także po wybraniu Kontynuuj. Układ rozpoczętego piętra, postęp, historia i rekord pozostają zachowane, bez migracji formatu zapisu 6.",
            "Schody, skrzynie, worki łupu, bohater i pozostałe postacie zachowują dotychczasowe grafiki. Widok 11 × 11, ramka i tempo marszu 0,30 s pozostają bez zmian.",
            "Pula grafik jest ładowana przed pierwszym ruchem; zachowano pamięć podręczną i ponowne używanie kafelków podczas marszu."
          ]
        },
        {
          "label": "Sprawdzenie",
          "changes": [
            "Przeszły celowane testy wyboru wariantów, ruchu i zapisu oraz sprawdzenie zwykłego renderera na komputerze. Test na fizycznym telefonie pozostaje niewykonany; nie potwierdzono płynności Androida."
          ]
        }
      ],
      "note": "Aktualizacja wyglądu podłóg i ścian. Nie wymaga nowej próby ani przeliczania geometrii lochu."
    },
    {
      "version": "0.27",
      "date": "2026-10-20",
      "title": "Imię twojego nieszczęśnika",
      "groups": [
        {
          "label": "Własne imię",
          "changes": [
            "Gdy imię nie jest jeszcze zapisane, nad menu pojawia się pytanie „Podaj imię swojego nieszczęśnika”. Dotyczy to również pierwszego uruchomienia po aktualizacji.",
            "Imię ma od 1 do 24 znaków po przycięciu skrajnych spacji. Można używać polskich liter i spacji; zapisane imię pozostaje po zamknięciu aplikacji."
          ]
        },
        {
          "label": "Zmiana podczas wyprawy",
          "changes": [
            "W menu wybierz Opcje → Zmień nazwę postaci, aby edytować obecne imię. Anulowanie pozostawia poprzednią nazwę.",
            "Nowe imię obowiązuje w bieżącej próbie, także podczas rozpoczętej walki, oraz w kolejnych próbach. Nie resetuje postępu, historii ani rekordu i nie losuje ponownie ręki kart.",
            "Imię jest widoczne przy zdrowiu bohatera, w drużynie i nowych wpisach walki. Starsze wpisy dziennika pozostają zachowane; długie imię jest skracane przy HP, a pełną nazwę zawiera podpowiedź."
          ]
        },
        {
          "label": "Sprawdzenie",
          "changes": [
            "Sprawdzono zapis imienia, błędy zapisu, wznowienie i zmianę podczas walki oraz układ na komputerze. Test na fizycznym telefonie, w tym z jego klawiaturą ekranową, pozostaje niewykonany."
          ]
        }
      ],
      "note": "Imię jest trwałym ustawieniem postaci. Rozpoczęta próba, historia, rekord i dotychczasowy format zapisu pozostają zachowane."
    },
    {
      "version": "0.26",
      "date": "2026-10-20",
      "title": "Loch nie czeka bezczynnie",
      "groups": [
        {
          "label": "Mniejsze pokoje, więcej spotkań",
          "changes": [
            "Każdy losowany bok pokoju zmniejszono o 30%: pokoje mają teraz boki od 4 do 11 pól. Wymiary pięter i cienkie korytarze pozostają bez zmian.",
            "Początkowa liczba ikon spotkań wynosi 4 + 6 × piętro na Normalnym oraz 4 + 10 × piętro na Trudnym. Jeden boss jest wliczony; na pierwszym piętrze to odpowiednio 10 i 14 ikon, nie pojedynczych osób w grupach."
          ]
        },
        {
          "label": "Posiłki i automatyczne starcia",
          "changes": [
            "Co 20 udanych kroków jest 25% szansy na dodatkową zwykłą grupę. Ikona pojawia się poza całym widocznym kwadratem 11 × 11, poza pokojem startowym i zajętymi polami.",
            "Łączna liczba udanych posiłków na piętro nie przekracza połowy liczby początkowych ikon. Pokonanie posiłku nie zwalnia limitu; brak wolnego miejsca zużywa próbę losowania.",
            "Po wykonaniu pełnego kroku wróg może rozpocząć walkę z odległości od 1 do 4 pól. Zasięg zależy od siły całej grupy przeciwników względem całej zdolnej do walki drużyny gracza, z uwzględnieniem poziomów i wyposażenia.",
            "Ściany blokują aggro także przy wyłączonej mgle. Najbliższa uprawniona ikona rozpoczyna jedno starcie; powrót ze zwycięstwa sam nie uruchamia kolejnego."
          ]
        },
        {
          "label": "Ruch i zapis",
          "changes": [
            "Zachowano marsz 0,30 s na pole, widok 11 × 11 i zapis po trasie lub rozpoczęciu walki, a nie po każdym kafelku.",
            "Nowy format zapisu zachowuje licznik kroków, wynikowy stan losowania posiłków i kontekst wejścia w aggro. Późniejsze ogłuszenie lub utrata przytomności towarzysza nie zmieniają składu zapamiętanego przy wejściu.",
            "Nowe zasady dotyczą nowej próby i kolejnych generowanych pięter. Rozpoczęte stare piętro pozostaje bez zmian; historia i rekord nie są resetowane."
          ]
        },
        {
          "label": "Sprawdzenie wydania",
          "changes": [
            "Przeszły celowane testy, uruchomienie na komputerze oraz eksport i kontrola APK. Test na fizycznym telefonie pozostaje niewykonany; pomiary komputera nie są wynikiem płynności Androida."
          ]
        }
      ],
      "note": "Po zapisaniu formatu 6 nie wracaj do 0.25. Generator ma skończoną pojemność: jeśli zabraknie miejsca na wymaganą liczbę ikon, pokaże błąd i zachowa bieżącą próbę. Balans jest roboczy; pięciu koncepcyjnych wrogów nadal nie dodano do gry."
    },
    {
      "version": "0.25",
      "date": "2026-10-20",
      "title": "Wyposażenie pod lupą",
      "groups": [
        {
          "label": "Nowości",
          "changes": [
            "W menu gry pojawił się panel administratora z biblioteką 25 przedmiotów, filtrami, ilustracjami, statystykami i kartami.",
            "Podczas eksploracji można dodać jedną wybraną rzecz do pierwszego wolnego miejsca plecaka, bez kosztu i automatycznego zakładania.",
            "Biblioteka przeciwników pokazuje dwa obecne typy, ich rzeczywiste działania oraz parametry dla bieżącego piętra i trudności."
          ]
        },
        {
          "label": "Zasady panelu",
          "changes": [
            "Bez aktywnej próby i podczas walki panel służy tylko do podglądu. Pełny plecak nie pozwala dodać przedmiotu.",
            "Dodanie rzeczy podlega zapisowi. Pięciu proponowanych przeciwników nie wdrożono w tej wersji."
          ]
        }
      ],
      "note": "Rozpoczęte próby, historia i rekord pozostają zachowane. Bez resetu zapisu i zmiany reguł walki."
    },
    {
      "version": "0.24",
      "date": "2026-10-20",
      "title": "Cała ręka w zasięgu palca",
      "groups": [
        {
          "label": "Poprawki",
          "changes": [
            "Przesunięcie palcem rozpoczęte na karcie przewija rękę i odsłania karty piątą oraz szóstą.",
            "Gest przewijania nie zagrywa karty. Osobne dotknięcie nadal służy do jej użycia."
          ]
        }
      ],
      "note": "Zasady walki i rozpoczęte próby pozostają bez zmian."
    },
    {
      "version": "0.23",
      "date": "2026-10-20",
      "title": "Dziesięć nowych broni",
      "groups": [
        {
          "label": "Nowości",
          "changes": [
            "Do łupów i wymiany trafiło dziesięć nowych broni z własnymi ilustracjami.",
            "Nowe bronie wnoszą łącznie 68 różnych kart ofensywnych — od szybkich pchnięć po ciężkie strzały."
          ]
        }
      ],
      "note": "Zapisane próby pozostają. Nowe bronie mogą pojawić się na nowych piętrach lub w nowej próbie; dawny łup nie jest losowany ponownie."
    },
    {
      "version": "0.22",
      "date": "2026-10-20",
      "title": "Każda broń walczy inaczej",
      "groups": [
        {
          "label": "Zmiany",
          "changes": [
            "Drewniany nóż otrzymał 6 różnych ataków, sztylet 8, a młot 6.",
            "Kostur opiekuna daje 7 kart wyłącznie wsparcia.",
            "Karty wykorzystują celność, serie, krytyki, krwawienie, ogłuszenie i przełamywanie ochrony."
          ]
        }
      ],
      "note": "Rozpoczęte próby formatu v5 zostały zachowane."
    },
    {
      "version": "0.21",
      "date": "2026-10-20",
      "title": "Wyposażenie kształtuje walkę",
      "groups": [
        {
          "label": "Nowości",
          "changes": [
            "Dziewięć miejsc wyposażenia, w tym dwa miejsca artefaktów. Przedmioty budują wspólną talię ataku i wsparcia.",
            "Klasa pancerza utrudnia trafienie; obrażenia są losowane w podanych widełkach.",
            "Doświadczenie z walk daje kolejne poziomy. W walce można używać przedmiotów użytkowych."
          ]
        },
        {
          "label": "Zmiany",
          "changes": [
            "Na początku każdej tury gracz otrzymuje do 6 świeżo wylosowanych kart, bez dobierania po zagraniu.",
            "Wsparcie można kierować na siebie lub sojusznika. Przedmiot użytkowy kosztuje połowę maksymalnej energii."
          ]
        }
      ],
      "note": "Historyczny reset tej wersji: usunięto starsze próby, historię i rekord, bez migracji. Nowe dane v5 są normalnie zapisywane; nie jest to reguła każdej aktualizacji."
    },
    {
      "version": "0.20",
      "date": "2026-10-20",
      "title": "Mniejszy zapis wyprawy",
      "groups": [
        {
          "label": "Usprawnienia",
          "changes": [
            "Stała mapa piętra jest zapisywana osobno od zmieniającego się stanu wyprawy.",
            "Zapis po trasie obejmuje mniej danych i unika ponownego odtwarzania niezmiennej geometrii."
          ]
        }
      ],
      "note": "Ta wersja zachowywała wcześniejsze próby przy migracji. Pomiary dotyczyły komputera, nie płynności Androida."
    },
    {
      "version": "0.19",
      "date": "2026-10-20",
      "title": "Lżejsze odświeżanie mapy",
      "groups": [
        {
          "label": "Usprawnienia",
          "changes": [
            "Kafelki i obramowania są ponownie wykorzystywane zamiast przebudowywane przy każdym kroku.",
            "Gra pomija odświeżanie niezmienionego wyglądu i ukrytej siatki podczas marszu."
          ]
        }
      ],
      "note": "Bez zmian rozmiaru widoku, zasad ruchu i zapisu."
    },
    {
      "version": "0.18",
      "date": "2026-10-19",
      "title": "Więcej odkrytego lochu",
      "groups": [
        {
          "label": "Zmiany",
          "changes": [
            "Obszar odkrywania zwiększono do 11 × 11 pól.",
            "W menu dodano przełącznik mgły. Testowy start bez mgły pokazuje lokalny kadr, także za ścianami."
          ]
        }
      ],
      "note": "Ustawienie mgły trwa do zamknięcia aplikacji. Nie odsłania całego piętra."
    },
    {
      "version": "0.17",
      "date": "2026-10-19",
      "title": "Szerszy widok eksploracji",
      "groups": [
        {
          "label": "Zmiany",
          "changes": [
            "W tej samej ramce mieści się teraz 11 × 11 pól zamiast 7 × 7.",
            "Bohater pozostaje w środku; dostosowano wybór pól i animację na krawędziach widoku."
          ]
        }
      ],
      "note": "Samo to wydanie nie zwiększało jeszcze zasięgu odkrywania — zmieniło się to w 0.18."
    },
    {
      "version": "0.16",
      "date": "2026-10-17",
      "title": "Zapis po trasie, szybszy marsz",
      "groups": [
        {
          "label": "Usprawnienia",
          "changes": [
            "Krok skrócono do 0,30 s, a zapis następuje po całej wybranej trasie lub zatrzymaniu.",
            "Ograniczono przebudowy portretów i przerwy między animacjami kroków."
          ]
        }
      ],
      "note": "Nagłe przerwanie procesu bez przejścia do tła może cofnąć niedokończony marsz do poprzedniego zapisu."
    },
    {
      "version": "0.15",
      "date": "2026-10-17",
      "title": "Drużyna naprawdę wyrusza razem",
      "groups": [
        {
          "label": "Nowości",
          "changes": [
            "Drużyna do 8 osób, rekrutacja podróżników, osobne plecaki i złoto.",
            "Przeciąganie przedmiotów, zakupy, barter, prezenty i samodzielne wybieranie wyposażenia przez towarzyszy.",
            "Rozmowy, prośby taktyczne, mikstury oraz wyjaśnienia decyzji postaci."
          ]
        }
      ],
      "note": "Zachowanie NPC jest lokalną symulacją gry offline."
    },
    {
      "version": "0.14",
      "date": "2026-10-17",
      "title": "Narodziny Deep in Dungeon",
      "groups": [
        {
          "label": "Wygląd",
          "changes": [
            "Gra otrzymała wybraną przez autora nazwę Deep in Dungeon.",
            "Ilustrację tytułową wykorzystano jako ikonę aplikacji."
          ]
        }
      ],
      "note": "Zmiana nazwy i ikony zachowała dane i zasady gry."
    },
    {
      "version": "0.13",
      "date": "2026-10-17",
      "title": "Pierwszy towarzysz",
      "groups": [
        {
          "label": "Nowości",
          "changes": [
            "Nowa próba zaczynała się z klerykiem; zwykli przeciwnicy pojawiali się w grupach.",
            "Dodano portrety stron, wybór celu i informacje o postaciach.",
            "Fazę towarzyszy i wrogów można oglądać w różnym tempie."
          ]
        }
      ],
      "note": "To pierwszy etap drużyn. Handel i pełne rozmowy pojawiły się później, w 0.15."
    },
    {
      "version": "0.12",
      "date": "2026-10-17",
      "title": "Krótsze postoje między polami",
      "groups": [
        {
          "label": "Usprawnienia",
          "changes": [
            "Ograniczono koszt zapisu wykonywanego wtedy po każdym polu.",
            "Czas kroku ustawiono na 0,45 s."
          ]
        }
      ],
      "note": "Ta poprawka nie usuwała całkowicie pauz; sposób zapisu zmieniono później w 0.16."
    },
    {
      "version": "0.11",
      "date": "2026-10-17",
      "title": "Spokojniejsze tempo kroków",
      "groups": [
        {
          "label": "Zmiany",
          "changes": [
            "Na prośbę autora zwiększono czas przejścia między polami z około 0,18 s do 0,75 s."
          ]
        }
      ],
      "note": "Historyczna zmiana tempa; kolejne wydania ponownie je dostosowały."
    },
    {
      "version": "0.10",
      "date": "2026-10-16",
      "title": "Mapa sunie pod bohaterem",
      "groups": [
        {
          "label": "Wygląd",
          "changes": [
            "Mapa zaczęła płynnie przesuwać się pod bohaterem pozostającym w środku.",
            "Ruch nie używa podskoków; zatrzymanie kończy się na pełnym polu."
          ]
        }
      ],
      "note": "Zasady eksploracji i walki pozostały bez zmian."
    },
    {
      "version": "0.9",
      "date": "2026-10-16",
      "title": "Loch nabiera wyglądu",
      "groups": [
        {
          "label": "Wygląd",
          "changes": [
            "Podłączono pikselowe tekstury mapy, bohatera, przeciwników i przedmiotów.",
            "Karty, liczniki stosów, menu i historia otrzymały pierwszą spójną oprawę."
          ]
        }
      ],
      "note": "Aktualizacja graficzna bez nowych zasad."
    },
    {
      "version": "0.8",
      "date": "2026-10-16",
      "title": "Wyprawa, do której można wrócić",
      "groups": [
        {
          "label": "Nowości",
          "changes": [
            "Menu Kontynuuj, Nowa próba i Historia oraz ustawienia trudności, rozmiaru piętra i liczby skrzyń.",
            "Automatyczny lokalny zapis mapy, plecaka i walki oraz historia czterech zakończonych prób i rekord.",
            "Boss piętra i schody pojawiające się po jego pokonaniu. Jawne zejście zalicza piętro."
          ]
        }
      ],
      "note": "Zamknięcie aplikacji przestało oznaczać rozpoczęcie wyprawy od zera."
    },
    {
      "version": "0.7",
      "date": "2026-10-16",
      "title": "Zbieraj, oglądaj, wymieniaj",
      "groups": [
        {
          "label": "Nowości",
          "changes": [
            "Łup trafia najpierw do plecaka. Dotknięcie przedmiotu pokazuje szczegóły i jego karty.",
            "Założenie broni z plecaka odkłada poprzednią dokładnie w zwolnione miejsce.",
            "Puste miejsca otrzymały tła i przygaszone symbole wyposażenia."
          ]
        }
      ],
      "note": "Wtedy zakres obejmował trzy podstawowe bronie. Zamiana nie leczyła postaci."
    },
    {
      "version": "0.6",
      "date": "2026-10-16",
      "title": "Pierwszy podgląd ekwipunku",
      "groups": [
        {
          "label": "Nowości",
          "changes": [
            "Dodano osobne okno siedmiu miejsc wyposażenia i aktualnej broni.",
            "Pod spodem pojawił się przewijany podgląd 60 miejsc plecaka."
          ]
        }
      ],
      "note": "Był to jeszcze podgląd. Zbieranie i przekładanie dodano w 0.7; obecnie wyposażenie ma dziewięć miejsc."
    },
    {
      "version": "0.5",
      "date": "2026-10-16",
      "title": "Za każdym razem inny loch",
      "groups": [
        {
          "label": "Nowości",
          "changes": [
            "Generator pięter z pokojami, wąskimi korytarzami i losową zawartością.",
            "Kamera podąża za bohaterem, a mapa odkryć pokazuje odwiedzone miejsca.",
            "Można wyznaczać znaną drogę i zatrzymywać marsz."
          ]
        }
      ],
      "note": "Zapis wyprawy pojawił się dopiero w 0.8."
    },
    {
      "version": "0.4",
      "date": "2026-10-16",
      "title": "Pierwsze kroki po mapie",
      "groups": [
        {
          "label": "Nowości",
          "changes": [
            "Stała plansza 7 × 7, ruch wybierany dotknięciem i ściany ograniczające drogę.",
            "Wróg, skrzynia i worek łupu wymagają podejścia. Wroga można ominąć inną trasą.",
            "Po zwycięstwie wraca się na mapę z odblokowanym przejściem."
          ]
        }
      ],
      "note": "Pierwszy prototyp eksploracji, jeszcze bez generatora."
    },
    {
      "version": "0.3",
      "date": "2026-10-15",
      "title": "Łup zmienia twoją talię",
      "groups": [
        {
          "label": "Nowości",
          "changes": [
            "Po walce wybór łupu pozwalał zamienić drewniany nóż na sztylet albo młot.",
            "Kolejne starcie pokazywało inny zestaw kart i tempo broni.",
            "Śmierć kończyła próbę, a restart przywracał początkowy sprzęt."
          ]
        }
      ],
      "note": "Wcześniej powstały szkielet aplikacji, pojedyncza walka i jej pierwsza oprawa. Te etapy nie mają potwierdzonych numerów 0.1 i 0.2."
    }
  ]
};
