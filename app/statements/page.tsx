import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { statements } from '@/lib/statements';

export const metadata: Metadata = {
  title: 'Statements',
  description:
    'Statements on local issues from Naeem Iqbal—including housing, education, recreation, and representation.',
};

export default function StatementsPage() {
  return (
    <main className="min-h-[60vh] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Statements</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
          On the record
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-text-dim leading-relaxed">
          Where Naeem stands on issues that shape Portlaoise and Co. Laois—housing, services,
            education, and representation.
        </p>

        <div className="mt-12 space-y-8">
          {statements.map((item) => (
            <article
              key={item.sourceUrl}
              className="rounded-2xl border border-primary/10 bg-slate-50/40 p-6 shadow-sm sm:p-8"
            >
              <time className="text-sm font-medium text-secondary" dateTime={item.dateIso}>
                {item.dateLabel}
              </time>
              <h2 className="mt-2 text-xl font-semibold text-primary sm:text-2xl">
                {item.title}
              </h2>
              <p className="mt-4 leading-relaxed text-text-dim">{item.excerpt}</p>
              {/* <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-accent-hover"
              >
                Read full statement
                <ExternalLink className="size-4 shrink-0 opacity-90" aria-hidden />
              </a> */}
            </article>
          ))}
        </div>

        <p className="mt-10">
          <Link href="/contacts" className="text-sm font-semibold text-secondary hover:underline">
            Media or enquiries — contact →
          </Link>
        </p>
      </div>
    </main>
  );
}
