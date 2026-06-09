import type { Metadata } from 'next';
import { MapPin, Mail, Phone } from 'lucide-react';
import { HeroBanner } from '@/components/hero-banner';

export const metadata: Metadata = {
  title: 'Contacts',
  description: 'Get in touch with Naeem Iqbal in Portlaoise, Co. Laois.',
};

export default function ContactsPage() {
  return (
    <main className="min-h-[60vh] bg-[#fafbfc]">
      <HeroBanner ctaHref="#contact-details" ctaLabel="Contact us" />

      <div
        id="contact-details"
        className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          Contacts
        </p>
        <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Let&apos;s talk
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-600 leading-relaxed">
          Based in Portlaoise, Co. Laois — get in touch by email or phone with questions, ideas,
          or local priorities you would like to share.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm sm:p-6">
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="size-5" aria-hidden />
            </span>
            <p className="mt-4 font-display text-xs font-bold uppercase tracking-wide text-slate-500">
              Address
            </p>
            <p className="mt-2 font-medium text-slate-900">Portlaoise, Co. Laois</p>
          </div>
          <a
            href="mailto:info@naeem.ie"
            className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition hover:border-secondary/40 hover:shadow-md sm:p-6"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-secondary/12 text-secondary">
              <Mail className="size-5" aria-hidden />
            </span>
            <p className="mt-4 font-display text-xs font-bold uppercase tracking-wide text-slate-500">
              Email
            </p>
            <p className="mt-2 font-semibold text-primary">info@naeem.ie</p>
          </a>
          <a
            href="tel:+353892309015"
            className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition hover:border-secondary/40 hover:shadow-md sm:p-6"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-secondary/12 text-secondary">
              <Phone className="size-5" aria-hidden />
            </span>
            <p className="mt-4 font-display text-xs font-bold uppercase tracking-wide text-slate-500">
              Phone
            </p>
            <p className="mt-2 font-semibold text-primary">089 230 9015</p>
          </a>
        </div>
      </div>
    </main>
  );
}
