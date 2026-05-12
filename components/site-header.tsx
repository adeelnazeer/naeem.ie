'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contacts', label: 'Contacts' },
  { href: '/priorities', label: 'Priorities' },
  { href: '/statements', label: 'Statements' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-[#fafbfc]/85 backdrop-blur-xl supports-[backdrop-filter]:bg-[#fafbfc]/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 leading-tight"
          onClick={() => setOpen(false)}
        >
          <span className="flex size-10 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-primary-deep shadow-lg shadow-primary/25 ring-1 ring-white/20 transition group-hover:shadow-primary/40">
            <span className="font-display text-lg font-extrabold tracking-tighter text-white">
              NI
            </span>
          </span>
          <span className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-slate-900 transition group-hover:text-primary sm:text-xl">
              Naeem Iqbal
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500 sm:block">
              Community first
            </span>
          </span>
        </Link>

        <nav
          className="hidden rounded-full border border-slate-200/80 bg-white/90 p-1 shadow-sm md:flex md:items-center md:gap-0.5"
          aria-label="Primary"
        >
          {nav.map(({ href, label }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  active
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-primary'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-primary shadow-sm transition hover:bg-slate-50 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-slate-200/80 bg-white/98 backdrop-blur-lg md:hidden"
        >
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile primary">
            {nav.map(({ href, label }) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-xl px-4 py-3.5 text-base font-semibold ${
                    active
                      ? 'bg-primary text-white shadow-md shadow-primary/15'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
