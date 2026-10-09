---
name: new-form
description: "Crea il form del post (creazione e modifica) con i componenti UI condivisi, validazione zod ed errori sotto ogni campo. Trigger: nuovo form, il form di creazione, il modulo del post."
---

# Nuovo form del post

1. Controlla se esiste già un form in `src/app/admin/_components/`. Se c'è,
   usalo o estendilo invece di crearne un secondo.
2. Crea `src/app/admin/_components/PostForm.tsx`. Props: `initial?: Partial<PostInput>`
   e `postId?: string`. Con `postId` fa PATCH, senza fa POST.
3. Prima riga: `"use client"` più un commento che dice perché (stato e
   event handler del form).
4. Importa **sempre** `Field`, `Input` e `Button` da `@/components/ui/Field`,
   `@/components/ui/Input` e `@/components/ui/Button`. Nessun `<input>`,
   `<textarea>` o `<button>` scritto a mano. Se serve un controllo che
   `Input` non copre (per esempio `status`), fermati e dillo.
5. Ogni controllo sta dentro il suo `Field`, con `htmlFor` uguale all'`id`
   dell'`Input`. Stato degli errori: `Record<string, string>`.
6. All'invio valida con `postInputSchema.safeParse`, mai con controlli a mano.
   Se fallisce, riempi l'errore di ogni campo dai messaggi di zod e non inviare.
7. Passa l'errore al prop `error` del `Field` che avvolge il campo (e
   `invalid` all'`Input`). Mai un riquadro di errori in cima alla pagina.
8. URL solo da `API_ROUTES` (`posts` o `post(postId)`), metodo POST o PATCH.
   In PATCH manda solo i campi cambiati rispetto a `initial`.
9. Se la risposta non è ok, leggila come `ApiError`. Con
   `code === "validation_error"` copia `error.fields` negli stessi `Field`;
   per gli altri codici metti `error.message` sul campo più vicino, non in cima.
10. Durante l'invio tieni `submitting` a true e passa `disabled={submitting}`
    al `Button` (`type="submit"`): niente doppio invio. Rimettilo a false in `finally`.
11. A successo vai a `ROUTES.adminPosts` con `useRouter`. Testi in italiano.
12. Esegui `npm run check` e riporta l'esito in una riga.

Tocca solo il file del form. Il contratto e `src/components/ui/` non si modificano.
