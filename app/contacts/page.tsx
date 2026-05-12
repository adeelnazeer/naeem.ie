import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacts',
  description: 'Get in touch with Naeem Iqbal in Portlaoise, Co. Laois.',
};

const PORTRAIT_SRC =
  'https://naeem.ie/gallery_gen/afc2c4f3d66eae707cf56026bf6f0028_597x641_350x309_1320x1980_crop.jpg?ts=1728317742';

export default function ContactsPage() {
  return (
    <main className="min-h-[60vh] bg-[#fafbfc]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-6 xl:col-span-7">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Contacts
            </p>
            <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Let&apos;s talk
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600 leading-relaxed">
              Portlaoise, Co. Laois — reachable by email or phone for accounting and business advisory
              enquiries.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4 xl:grid-cols-3">
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

          <div className="flex justify-center lg:col-span-6 xl:col-span-5 lg:justify-end">
            <figure className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
              <div
                className="pointer-events-none absolute -inset-6 rounded-[2.25rem] bg-linear-to-br from-primary/25 via-secondary/15 to-primary/10 opacity-80 blur-2xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-4xl bg-linear-to-b from-slate-300 to-slate-400 shadow-2xl shadow-slate-900/15 ring-1 ring-slate-900/10">
                <div className="relative aspect-4/5 w-full">
                  <Image
                    src={PORTRAIT_SRC}
                    alt="Naeem Iqbal — accountant and business advisor"
                    fill
                    className="object-cover object-[50%_18%] sm:object-[50%_20%]"
                    sizes="(min-width: 1280px) 420px, (min-width: 1024px) 38vw, min(380px, 92vw)"
                    priority
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-slate-900/90 via-slate-900/45 to-transparent"
                    aria-hidden
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-12 text-left">
                    <p className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                      Naeem Iqbal
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/85">
                      Accountant &amp; business advisor
                    </p>
                    <p className="mt-2 text-xs text-white/65">Portlaoise, Co. Laois</p>
                  </figcaption>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </main>
  );
}
