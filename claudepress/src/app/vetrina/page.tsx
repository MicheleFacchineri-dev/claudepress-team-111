"use client"; // Input vuole onChange e Button onClick, non esprimibili in un server component

import { useState } from "react";
import { PostCard } from "@/components/ui/PostCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { EmptyState } from "@/components/ui/EmptyState";

export default function VetrinaPage() {
  const [normale, setNormale] = useState("");
  const [multiline, setMultiline] = useState("");
  const [conErrore, setConErrore] = useState("");

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-10 p-8">
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase text-gray-500">
          PostCard
        </h2>
        <div className="flex flex-col gap-4">
          <PostCard
            title="Il primo articolo"
            excerpt="Un sommario di prova per vedere il componente a schermo."
            author="Michele Facchineri"
            date="2026-09-12T10:00:00.000Z"
            href="/posts/il-primo-articolo"
          />
          <PostCard
            title="Note sul rilascio 2.0"
            excerpt="Cosa cambia nella nuova versione del blog, in breve."
            author="Simone Bellesi"
            date="2026-10-01T10:00:00.000Z"
            href="/posts/note-sul-rilascio-2-0"
          />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase text-gray-500">
          StatusBadge
        </h2>
        <div className="flex gap-2">
          <StatusBadge status="published" />
          <StatusBadge status="draft" />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase text-gray-500">
          Button
        </h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="primary">Primario</Button>
          <Button variant="secondary">Secondario</Button>
          <Button variant="danger">Pericoloso</Button>
          <Button disabled>Disabilitato</Button>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase text-gray-500">
          Field + Input
        </h2>
        <div className="flex flex-col gap-4">
          <Field label="Titolo" htmlFor="titolo">
            <Input
              id="titolo"
              name="titolo"
              value={normale}
              onChange={setNormale}
              placeholder="Scrivi un titolo"
            />
          </Field>
          <Field label="Contenuto" htmlFor="contenuto">
            <Input
              id="contenuto"
              name="contenuto"
              value={multiline}
              onChange={setMultiline}
              multiline
              placeholder="Scrivi il contenuto"
            />
          </Field>
          <Field label="Autore" htmlFor="autore" error="Il campo è obbligatorio">
            <Input
              id="autore"
              name="autore"
              value={conErrore}
              onChange={setConErrore}
              invalid
              placeholder="Nome autore"
            />
          </Field>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase text-gray-500">
          EmptyState
        </h2>
        <div className="flex flex-col gap-4">
          <EmptyState
            title="Nessun articolo trovato"
            description="Crea il primo articolo per iniziare."
          />
          <EmptyState title="Nessun risultato" />
        </div>
      </section>
    </main>
  );
}
