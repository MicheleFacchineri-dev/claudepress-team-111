import Link from "next/link";
import type { PostCardProps } from "@/contracts/blog";

export function PostCard({ title, excerpt, author, date, href }: PostCardProps) {
  return (
    <Link
      href={href}
      className="group block border-b border-rule py-6 first:pt-0 last:border-b-0"
    >
      <h3 className="font-display text-xl text-ink group-hover:text-stamp">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{excerpt}</p>
      <div className="mt-3 flex items-center gap-2 text-xs text-ink-muted">
        <span>{author}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={date}>
          {new Date(date).toLocaleDateString("it-IT", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </div>
    </Link>
  );
}
