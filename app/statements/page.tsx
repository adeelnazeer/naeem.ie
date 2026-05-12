import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Statements',
  description: 'Statements and positions on local issues.',
};

export default function StatementsPage() {
  return (
    <main className="min-h-[60vh] bg-white">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Statements</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
          On the record
        </h1>
        <p className="mt-4 text-lg text-text-dim leading-relaxed">
          Use this page for formal statements, press releases, or longer-form comments. Below is sample
          structure you can duplicate.
        </p>

        <article className="mt-12 rounded-2xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8">
          <time className="text-sm font-medium text-secondary" dateTime="2026-01-01">
            1 January 2026
          </time>
          <h2 className="mt-2 text-xl font-semibold text-primary">Sample statement title</h2>
          <p className="mt-4 leading-relaxed text-text-dim">
            Replace this paragraph with your statement text. Short paragraphs and clear headings help
            readers on mobile and desktop.
          </p>
        </article>

        <p className="mt-10">
          <Link href="/contacts" className="text-sm font-semibold text-secondary hover:underline">
            Media or enquiries — contact →
          </Link>
        </p>
      </div>
    </main>
  );
}
