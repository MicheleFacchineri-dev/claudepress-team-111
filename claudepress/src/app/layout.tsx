import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClaudePress",
  description: "Un blog con il suo CMS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        <header className="border-b border-rule">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
            <Link href="/" className="font-display text-xl tracking-tight text-ink">
              ClaudePress
            </Link>
            <nav className="flex gap-6 text-sm text-ink-muted">
              <Link href="/" className="hover:text-ink">
                Blog
              </Link>
              <Link href="/admin/posts" className="hover:text-ink">
                Backoffice
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
