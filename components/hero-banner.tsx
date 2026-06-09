import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Handshake, Quote, TrendingUp, Users } from 'lucide-react';

const PORTRAIT_SRC =
  '/bg-remove.png';

const pillars = [
  { label: 'Listen', icon: Users },
  { label: 'Work', icon: Handshake },
  { label: 'Deliver', icon: TrendingUp },
] as const;

type HeroBannerProps = {
  ctaHref?: string;
  ctaLabel?: string;
};

export function HeroBanner({
  ctaHref = '/contacts#contact-details',
  ctaLabel = 'Contact us',
}: HeroBannerProps) {
  return (
    <section
      className="relative overflow-hidden bg-[#070f0c] text-white"
      aria-labelledby="hero-banner-heading"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_75%_40%,rgba(34,197,94,0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage: `repeating-linear-gradient(
            -32deg,
            transparent,
            transparent 72px,
            rgba(34, 197, 94, 0.07) 72px,
            rgba(34, 197, 94, 0.07) 73px
          )`,
        }}
      />
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(13,124,63,0.35),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-16">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <p className="font-display text-lg font-semibold tracking-wide text-emerald-400 sm:text-xl">
            Iqbal
          </p>
          <h1
            id="hero-banner-heading"
            className="font-display mt-1 text-5xl font-extrabold leading-none tracking-tight sm:text-6xl lg:text-7xl"
          >
            NAEEM
          </h1>
          <div className="mt-4 h-1 w-28 rounded-full bg-emerald-500 sm:w-36" aria-hidden />

          <p className="mt-6 max-w-md text-lg leading-snug text-white/95 sm:text-xl">
            Working for You.{' '}
            <span className="font-semibold text-emerald-400">Delivering for Our Community.</span>
          </p>

          <ul className="mt-8 flex flex-wrap gap-6 sm:gap-8" aria-label="Commitments">
            {pillars.map(({ label, icon: Icon }) => (
              <li key={label} className="flex flex-col items-center gap-2.5">
                <span className="flex size-14 items-center justify-center rounded-xl border border-emerald-500/35 bg-emerald-950/40 text-emerald-400 shadow-[inset_0_0_20px_rgba(34,197,94,0.08)] sm:size-16">
                  <Icon className="size-6 sm:size-7" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href={ctaHref}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-linear-to-r from-emerald-400 to-emerald-600 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-emerald-950 shadow-lg shadow-emerald-500/25 transition hover:from-emerald-300 hover:to-emerald-500 hover:shadow-emerald-400/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070f0c]"
          >
            {ctaLabel}
            <ArrowRight className="size-5" aria-hidden />
          </Link>
        </div>

        {/* Portrait + quote */}
        <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none lg:justify-self-end">
          <div className="relative aspect-4/5 w-full max-w-[380px] lg:ml-auto lg:max-w-[440px]">
            <div
              className="pointer-events-none absolute -inset-4 rounded-3xl bg-emerald-500/20 blur-3xl"
              aria-hidden
            />
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-800/50 ring-1 ring-white/10 lg:rounded-none lg:bg-transparent lg:ring-0">
              <Image
                src={PORTRAIT_SRC}
                alt="Naeem Iqbal"
                fill
                className="object-cover object-[50%_15%]"
                sizes="(min-width: 1024px) 440px, min(380px, 90vw)"
                priority
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#070f0c] via-[#070f0c]/60 to-transparent lg:from-[#070f0c]/90"
                aria-hidden
              />
            </div>

            <figure className="absolute inset-x-3 bottom-3 rounded-xl border border-white/10 bg-black/55 px-4 py-3.5 backdrop-blur-md sm:inset-x-4 sm:bottom-4 lg:inset-x-auto lg:right-0 lg:bottom-6 lg:max-w-[300px]">
              <Quote
                className="mb-1 size-8 fill-emerald-500/30 text-emerald-400"
                aria-hidden
              />
              <blockquote className="text-sm leading-relaxed text-white/90 sm:text-[0.9375rem]">
                A strong community built on trust, opportunity and progress.
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
