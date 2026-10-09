import Link from "next/link";
import type { PostCardProps } from "@/contracts/blog";

export function PostCard({ title, excerpt, author, date, href }: PostCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-lg border border-gray-200 p-5 transition hover:border-gray-300 hover:shadow-sm"
    >
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{excerpt}</p>
      <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
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
