import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Priorities',
  description:
    'Housing, healthcare, and transport priorities for Portlaoise and Co. Laois—grounded in what residents experience every day.',
};

const priorities = [
  {
    title: 'Housing pressure and planned growth',
    context: [
      'Portlaoise is growing rapidly, but demand continues to outpace infrastructure and housing availability. Even while large numbers of homes are being delivered, demand remains intense and land availability inside Portlaoise itself is becoming a challenge.',
    ],
    actions: [
      'Faster delivery of affordable and social housing',
      'Bring vacant and derelict properties back into use',
      'Ensure new estates include schools, parks and services',
      'Push for balanced development so infrastructure grows with population',
    ],
  },
  {
    title: 'Healthcare access and GP shortages',
    context: [
      'Population growth in Portlaoise has not been matched by healthcare capacity. Concerns have been raised around GP shortages and pressure on local services.',
    ],
    actions: [
      'Campaign for more GP capacity and primary care services',
      'Push for expansion of healthcare infrastructure',
      'Support better ambulance and community care provision',
      'Advocate for stronger local health investment',
    ],
  },
  {
    title: 'Traffic, transport and local infrastructure',
    context: [
      'As Portlaoise expands, transport concerns increasingly follow growth. Funding exists for road maintenance, but frustrations remain over congestion, bypass projects, cycling infrastructure and planning for future growth.',
    ],
    actions: [
      'Safer roads and junction improvements',
      'Better cycle lanes and walking routes',
      'Stronger public transport connections',
      'Pressure for long-promised traffic solutions around Portlaoise',
    ],
  },
] as const;

export default function PrioritiesPage() {
  return (
    <main className="min-h-[60vh] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Priorities</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
          What we focus on
        </h1>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-text-dim">
          <p>
            If elected, Naeem&apos;s strongest priorities will be the issues which residents feel
            daily.
          </p>
          <p>
            Based on feedback from the public, the top three issues are set out below—each with
            context and the areas Naeem will work on.
          </p>
        </div>

        <ol className="mt-12 space-y-10">
          {priorities.map((item, index) => (
            <li
              key={item.title}
              className="rounded-2xl border border-primary/10 bg-slate-50/60 p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span
                  className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-sm font-bold text-primary"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">{item.title}</h2>
              </div>
              <div className="mt-4 space-y-3 text-text-dim leading-relaxed">
                {item.context.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 border-t border-primary/10 pt-6">
                <p className="text-sm font-bold uppercase tracking-wide text-text-dark">
                  What Naeem will work on
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-text-dim marker:text-primary">
                  {item.actions.map((action) => (
                    <li key={action} className="leading-relaxed">
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10">
          <Link href="/statements" className="text-sm font-semibold text-secondary hover:underline">
            Read statements →
          </Link>
        </p>
      </div>
    </main>
  );
}
