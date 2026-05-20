import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Statements',
  description:
    'Statements on local issues from Naeem Iqbal—including housing, education, recreation, and representation.',
};

const statements = [
  {
    title: 'Disable People Representation',
    dateIso: '2024-02-01',
    dateLabel: '1 February 2024',
    excerpt:
      'None but the people with disability are most suitable to be included in the committees & sub-committees of the Laois County Council departments to give input in policy making & to have an oversight on the issues which direct & indirectly concern their lives.',
    sourceUrl: 'https://naeem.ie/Statements/Disable-People-Representation',
  },
  {
    title: 'Recreation & Sports Facilities in Portlaoise',
    dateIso: '2024-02-01',
    dateLabel: '1 February 2024',
    excerpt:
      'Statement on recreation and sports facilities for Portlaoise and the wider community. Read the full piece on the official site.',
    sourceUrl: 'https://naeem.ie/Statements/Recreation-Sports-Facilities-in-Portlaoise',
  },
  {
    title: 'Third Level Education in Portlaoise',
    dateIso: '2024-02-01',
    dateLabel: '1 February 2024',
    excerpt:
      'Statement on third-level education and opportunities in Portlaoise. Read the full piece on the official site.',
    sourceUrl: 'https://naeem.ie/Statements/Third-Level-Education-in-Portlaoise',
  },
  {
    title: 'Housing for All',
    dateIso: '2020-04-05',
    dateLabel: '5 April 2020',
    excerpt:
      'Affordable housing and county council housing loans—priorities around housing delivery and support in the county.',
    sourceUrl: 'https://naeem.ie/Statements/Housing-for-All',
  },
] as const;

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
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-accent-hover"
              >
                Read full statement
                <ExternalLink className="size-4 shrink-0 opacity-90" aria-hidden />
              </a>
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
