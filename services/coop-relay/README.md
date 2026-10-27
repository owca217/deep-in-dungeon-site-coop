# Pośrednik lobby Deep in Dungeon

Node.js 24; jedna zależność `ws` przypięta w package-lock.json. Usługa przechowuje
wyłącznie bieżące połączenia i trasowanie pokoi w pamięci. Stan lobby i reguły
prowadzi urządzenie twórcy; broker nie prowadzi symulacji i nie zapisuje gry.

Uruchomienie z korzenia projektu:

```powershell
npm ci --prefix services/coop-relay --omit=dev
node services/coop-relay/server.cjs
```

PORT pochodzi ze środowiska, domyślnie 10000; serwer nasłuchuje na 0.0.0.0.
Render kończy TLS; klienci internetowi używają WSS. Upgrade jest dostępny na `/`
i `/ws`, bez parametrów query. GET `/healthz` zwraca krótki status protokołu,
bez nazw pokoi, graczy lub sekretów. Nie ma klucza konta Render w kliencie.

## Protokół

Welcome nadaje losowy 128-bitowy peerId połączenia. Host wybiera losowy
32-znakowy hex room_id. Subskrypcja ma pola:

```json
{"type":"subscribe","channel":"did-coop/<room_id>","hostPeerId":"<peerId hosta>","create":true,"requestId":"lobby-subscribe"}
```

Nowy pokój może utworzyć tylko socket o wskazanym własnym peerId. Gość podaje
`create:false`, istniejący kanał i zgodny identyfikator hosta z zaproszenia.
Każdy socket ma jeden pokój; capability kanału ma 128 bitów losowości i jest
przekazywana uczestnikom w zaproszeniu. Nie ma publicznego spisu pokojów.

Broker odpowiada `ack`, emituje `presence` z tablicami joined/left, przekazuje
`publish` hosta jako `message` i `send` jako `direct`. `from` zawsze pochodzi
od brokera. Gość może wysyłać jedynie do hosta; host jedynie do uczestników
własnego pokoju. Host nadal zatwierdza dołączenie, gotowość i token wznowienia.

Po utracie hosta broker wysyła presence.left i zamyka gości kodem1001. Stare
zaproszenie nie tworzy pokoju ponownie. Po restarcie usługi trzeba utworzyć nowe
lobby. SIGTERM/SIGINT zamyka połączenia; brak migracji hosta lub trwałej sesji.

## Granice prototypu

- 4 pokoje, 8 socketów na pokój łącznie z hostem, 40 połączeń ogółem.
- 16 KiB wejściowej ramki i gotowej koperty wyjściowej, 256 KiB kolejki odbiorcy,
  głębokość JSON do32. Dodanie identyfikatora nadawcy przez broker podlega
  sprawdzeniu przed dostarczaniem; zbyt duża koperta odrzuca nadawcę kodem
  `frame_too_large`/1009, zamiast zamykać poprawnego odbiorcę.
- Pełna kolejka pojedynczego odbiorcy zamyka tylko ten socket kodem
  `slow_consumer`/4011. Jest on pomijany przed rezerwacją fanout pozostałych;
  wolny gość nie powoduje odrzucenia poprawnego hosta.
- 20 operacji/s na socket, burst40; przekroczenie zamyka połączenie kodem4011.
- Globalny budżet trasowanych wiadomości: **8 KiB/s +128 KiB burst**, wspólny
  dla całej instancji i wszystkich pokoi. Liczy pełny JSON koperty i nagłówek
  WebSocket dla każdej kopii fanout. Cała rozsyłka jest sprawdzana i rezerwowana
  przed dostarczeniem pierwszej kopii; brak budżetu odrzuca nadawcę kodem
  `transfer_limit`/4011 i nie dostarcza częściowego snapshotu.
- Socket nieprzypisany do pokoju zamyka się po15s; ping/pong co20s wykrywa martwe.
- Binary, nieprawidłowy format lub niedozwolona operacja: error i zamknięcie1008.
- Brak kompresji, bazy, dysku, plików gry i logowania wiadomości/zaproszeń.

Globalny budżet dotyczy przekazywanego `send`/`publish`. Małe komunikaty
sterujące (welcome/ack/presence/error), ping/pong, HTTP i narzut transportu
pozostają poza tym licznikiem. Limity zmniejszają zużycie aplikacji, ale **nie
stanowią twardego limitu rachunku Render**, licznika miesięcznego dostawcy ani
zabezpieczenia przed każdym rodzajem ruchu sieciowego. Transfer WSS wychodzący
z Render podlega rozliczeniom platformy.

## Testy

```powershell
npm test --prefix services/coop-relay
```

Testy używają rzeczywistych lokalnych socketów i losowych portów. Nie łączą się
z Render, nie odczytują kluczy konta i nie dowodzą działania telefonu lub Web.

Eksport do testów: async `createRelayServer({host,port,limits})` zwraca
`{url,port,close()}`. Parametry limits są tylko do lokalnych testów modułu;
produkcyjny entrypoint używa stałych wartości domyślnych.
