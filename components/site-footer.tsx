import Link from 'next/link';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-900/90 bg-linear-to-b from-slate-900 via-[#071525] to-[#041018] text-slate-400">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,91,164,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,91,164,0.12) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
      />
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-secondary/25 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/40 blur-[90px]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="font-display text-2xl font-bold tracking-tight text-white">
              Naeem Iqbal
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Serving Portlaoise and Co. Laois — working for the community with the community,
              focused on practical solutions that strengthen local life.
            </p>
            <Link
              href="/contacts"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-secondary/20 transition hover:bg-accent-hover"
            >
              Get in touch
              <ArrowUpRight className="size-4 opacity-90" aria-hidden />
            </Link>
          </div>

          <div className="lg:col-span-4">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Contact
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary ring-1 ring-white/10">
                  <MapPin className="size-4" aria-hidden />
                </span>
                <span className="pt-1.5 leading-snug text-slate-300">Portlaoise, Co. Laois</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary ring-1 ring-white/10">
                  <Mail className="size-4" aria-hidden />
                </span>
                <a
                  href="mailto:info@naeem.ie"
                  className="font-medium text-white underline-offset-4 transition hover:text-secondary hover:underline"
                >
                  info@naeem.ie
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary ring-1 ring-white/10">
                  <Phone className="size-4" aria-hidden />
                </span>
                <a
                  href="tel:+353892309015"
                  className="font-medium text-white underline-offset-4 transition hover:text-secondary hover:underline"
                >
                  089 230 9015
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Explore
            </p>
            <ul className="mt-6 space-y-3 text-sm font-medium">
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/priorities" className="text-slate-300 hover:text-white">
                  Priorities
                </Link>
              </li>
              <li>
                <Link href="/statements" className="text-slate-300 hover:text-white">
                  Statements
                </Link>
              </li>
            </ul>
            <p className="mt-8">
              <a
                href="https://www.facebook.com/NaeemIqbalFA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-300/90 hover:text-secondary"
              >
                Facebook
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </p>
          </div>
        </div>

        <p className="mt-14 border-t border-white/10 pt-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Naeem Iqbal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
