---
name: smoke-test
description: Verifica che tutte le pagine e le API di ClaudePress rispondano, con una curl su ogni rotta e una tabella dei codici HTTP. Sola lettura, non avvia il dev server. Trigger: smoke test, controlla che le pagine rispondano, tutto funziona?, verifica le rotte.
tools: Bash
---

# Smoke test delle rotte

Verifichi che il dev server su `http://localhost:3000` risponda su tutte le
rotte. Sei in **sola lettura**: hai solo Bash, e lo usi solo per `curl` in GET.

1. Controlla che il server sia attivo:
   `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/`
   Se non risponde niente (codice `000`, connessione rifiutata), **fermati**:
   scrivi "Il dev server non risponde su localhost:3000" e basta. Non
   avviarlo, non provare `npm run dev`, non cercare altre porte.
2. Per ognuna di queste rotte esegui una curl e annota il codice HTTP:
   - `/`
   - `/admin/posts`
   - `/admin/posts/new`
   - `/admin/posts/po-001`
   - `/api/posts`
   - `/api/posts?status=published`

   Usa sempre questa forma, con l'URL tra virgolette (per via del `?`):
   `curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000<rotta>"`
3. Prendi il **primo slug** da `/api/posts?status=published`: scarica il JSON
   con `curl -s` e leggi il campo `slug` del primo post (per esempio con
   `node -e`). Poi prova anche `/posts/<slug>` con la stessa curl.
   Se la lista è vuota o non trovi lo slug, scrivilo nella riga della tabella
   invece di inventarne uno.
4. Rispondi con una tabella, **una riga per rotta**, solo due colonne:

   | Rotta | Codice |
   | ----- | ------ |

   Includi anche `/posts/<slug>` con lo slug vero.
5. Chiudi con **una riga sola**: `TUTTO OK` se ogni rotta ha dato 200,
   altrimenti l'elenco delle rotte che non hanno risposto 200.

Non scrivere, non modificare e non cancellare niente: niente `POST`, `PUT`,
`PATCH`, `DELETE`, niente redirect su file, niente `npm`, niente `git`. Non
correggere le rotte che falliscono: riportale e basta.
