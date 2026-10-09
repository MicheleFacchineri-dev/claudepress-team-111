---
name: new-page
description: Crea una pagina del sito pubblico in src/app/ che carica dati dalle API del contratto con fetch no-store. Trigger: nuova pagina, crea la home, la pagina del post.
---

# Nuova pagina del sito pubblico

Ricevi lo scopo di una pagina, per esempio "la pagina del post".

1. Apri `src/contracts/blog.ts` e individua la rotta in `API_ROUTES` che serve.
   **Se non c'è, fermati e dillo**: il contratto non si modifica.
2. Crea `src/app/<percorso>/page.tsx`. Server component: **niente `"use client"`**.
3. Carica i dati con `fetch(apiUrl(API_ROUTES.x), { cache: "no-store" })`,
   importando `apiUrl` e `API_ROUTES` da `@/contracts/blog`. Mai un path
   relativo che risale, mai un URL scritto a mano.
4. Gestisci tre casi:
   - dati presenti → rendi il markup con i componenti di `src/components/ui/`;
   - elenco vuoto → `<EmptyState ... />` (componente condiviso, non scriverne
     uno nuovo);
   - risorsa singola non trovata o fetch fallita → chiama `notFound()` da
     `next/navigation`, **mai** `return null`.
5. Solo classi Tailwind, nessuna libreria nuova. Testi visibili in italiano,
   nomi di variabili e file in inglese.
6. Alla fine esegui `npm run check` e riporta l'esito in una riga.

Tocca **solo** il file della pagina. Se ti accorgi che servirebbe cambiare
contratto, componenti condivisi o API, dillo invece di farlo.
