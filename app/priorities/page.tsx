import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Priorities',
  description: 'Policy and community priorities for Portlaoise and Co. Laois.',
};

const items = [
  {
    title: 'Community first',
    body: 'Decisions that reflect the everyday needs of families, small businesses, and neighbours in Portlaoise and the wider county.',
  },
  {
    title: 'Transparent communication',
    body: 'Straightforward updates and open channels so people know what is being worked on and why.',
  },
  {
    title: 'Practical support',
    body: 'Focus on measures that make a tangible difference—access, opportunity, and local resilience.',
  },
];

export default function PrioritiesPage() {
  return (
    <main className="min-h-[60vh] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Priorities</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
          What we focus on
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-dim">
          Edit this page to match your published priorities on{' '}
          <a href="https://naeem.ie/" className="font-medium text-primary hover:underline">
            naeem.ie
          </a>
          . The layout is ready for your own bullet points and detail.
        </p>

        <ul className="mt-12 space-y-6">
          {items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-primary/10 bg-slate-50/60 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold text-primary">{item.title}</h2>
              <p className="mt-3 text-text-dim leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          <Link href="/statements" className="text-sm font-semibold text-secondary hover:underline">
            Read statements →
          </Link>
        </p>
      </div>
    </main>
  );
}
