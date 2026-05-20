/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  ArrowRight,
  Home as HomeIcon,
  HeartPulse,
  TrainFront,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      easing: 'ease-out-cubic',
      disable: 'phone',
    });
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-white"
        aria-labelledby="hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(13,124,63,0.18),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-secondary/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pt-18">
          <div className="max-w-3xl" data-aos="fade-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
              Working for the community with the community
            </p>
            <h1
              id="hero-heading"
              className="mt-4 text-4xl font-bold tracking-tight text-text-dark sm:text-5xl lg:text-6xl"
            >
              Naeem <span className="text-primary">Iqbal</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-dim sm:text-xl">
            Naeem is deeply committed to serving the people of <span className="font-medium text-text-dark">Portlaoise</span> and <span className="font-medium text-text-dark">Co. Laois</span>, focused on listening to local voices and delivering practical solutions that strengthen the community. With a vision built on inclusion, progress, and accountability, he is dedicated to addressing local priorities and ensuring every resident has the opportunity to be heard. His goal is to support stronger communities, improved local services, and a brighter future for everyone in the region.

            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/25 transition hover:bg-accent-hover hover:shadow-xl"
              >
                Get in touch
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/priorities"
                className="inline-flex items-center rounded-xl border-2 border-primary/20 px-5 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
              >
                View priorities
              </Link>
            </div>
          </div>

          <div
            className="mt-16 lg:mt-20"
            data-aos="fade-up"
            data-aos-delay="100"
            aria-labelledby="priorities-heading"
          >
         
            <ul className=" grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: 'Homes',
                  body: 'Build housing that communities can afford.',
                  icon: HomeIcon,
                },
                {
                  title: 'Health',
                  body: 'Secure healthcare that keeps pace with growth.',
                  icon: HeartPulse,
                },
                {
                  title: 'Infrastructure',
                  body: 'Deliver transport and infrastructure that Portlaoise needs.',
                  icon: TrainFront,
                },
              ].map(({ title, body, icon: Icon }) => (
                <li
                  key={title}
                  className="flex flex-col rounded-2xl border border-primary/10 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/25 hover:shadow-md"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-dim">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-primary/10 bg-slate-50/80 py-16 sm:py-20" aria-label="Highlights">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
            <div data-aos="fade-right">
              <h2 className="text-2xl font-bold text-text-dark sm:text-3xl">
                Trusted numbers, grounded in{' '}
                <span className="text-primary">people and place</span>
              </h2>
              <p className="mt-4 text-text-dim leading-relaxed">
                Whether you need straightforward accounting guidance or broader business insight, the
                aim is practical help that respects your time—and the community we share.
              </p>
              <Link
                href="/statements"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-accent-hover"
              >
                Read statements
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>

            <ul className="space-y-4" data-aos="fade-left">
              {[
                'Clear, approachable explanations—no unnecessary jargon.',
                'Support aligned with Irish small-business and sole-trader realities.',
                'Long-term ties to Portlaoise and surrounding areas.',
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-2xl border border-primary/10 bg-white p-5 shadow-sm"
                >
                  <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary/15 font-bold text-secondary">
                    ✓
                  </span>
                  <span className="text-text-dark/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-16 sm:py-20" id="contacts" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h2 id="contact-heading" className="text-2xl font-bold text-text-dark sm:text-3xl">
              Contacts
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-dim">
              Reach out by phone or email—we will be glad to hear from you.
            </p>
          </div>

          <div
            className="mt-12 grid gap-6 sm:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <a
              href="#"
              className="group rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition hover:border-secondary/40 hover:shadow-md"
            >
              <MapPin className="size-8 text-secondary transition group-hover:scale-105" aria-hidden />
              <p className="mt-4 font-semibold text-primary">Location</p>
              <p className="mt-2 text-sm text-text-dim">Portlaoise, Co. Laois</p>
            </a>
            <a
              href="mailto:info@naeem.ie"
              className="group rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition hover:border-secondary/40 hover:shadow-md"
            >
              <Mail className="size-8 text-secondary transition group-hover:scale-105" aria-hidden />
              <p className="mt-4 font-semibold text-primary">Email</p>
              <p className="mt-2 text-sm text-primary underline-offset-4 group-hover:underline">
                info@naeem.ie
              </p>
            </a>
            <a
              href="tel:+353892309015"
              className="group rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition hover:border-secondary/40 hover:shadow-md"
            >
              <Phone className="size-8 text-secondary transition group-hover:scale-105" aria-hidden />
              <p className="mt-4 font-semibold text-primary">Phone</p>
              <p className="mt-2 text-sm text-primary underline-offset-4 group-hover:underline">
                089 230 9015
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
