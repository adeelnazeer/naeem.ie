/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Leaf,
  MapPin,
  Mail,
  Phone,
  TrendingUp,
  Users,
} from 'lucide-react';
import { featuredStatement } from '@/lib/statements';

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
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" aria-hidden />
              <h2
                id="priorities-heading"
                className="shrink-0 text-center text-xs font-bold tracking-[0.12em] text-[#1a73e8] sm:text-sm"
              >
                MY TOP PRIORITIES FOR LAOIS
              </h2>
              <div className="h-px flex-1 bg-slate-200" aria-hidden />
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_minmax(240px,300px)] lg:gap-12">
              <ol className="space-y-8">
                {[
                  {
                    num: 1,
                    title: 'STRONG COMMUNITIES',
                    body: 'Supporting local groups, investing in our towns and villages, and keeping Laois a great place to live.',
                    icon: Users,
                    color: '#34A853',
                  },
                  {
                    num: 2,
                    title: 'JOBS & ECONOMIC GROWTH',
                    body: 'Attracting investment, backing local businesses, and creating quality jobs for our people.',
                    icon: TrendingUp,
                    color: '#4285F4',
                  },
                  {
                    num: 3,
                    title: 'BETTER EDUCATION & OPPORTUNITIES',
                    body: 'Improving schools, supporting further education and giving young people the best start in life.',
                    icon: GraduationCap,
                    color: '#FBBC05',
                  },
                  {
                    num: 4,
                    title: 'HEALTHCARE THAT WORKS',
                    body: 'Pushing for better access to GP services, shorter waiting times and stronger local healthcare.',
                    icon: HeartPulse,
                    color: '#EA4335',
                  },
                  {
                    num: 5,
                    title: 'A SUSTAINABLE LAOIS',
                    body: 'Protecting our environment, improving transport, and building a greener, more sustainable county.',
                    icon: Leaf,
                    color: '#0d7c3f',
                  },
                ].map(({ num, title, body, icon: Icon, color }) => (
                  <li key={title} className="flex gap-4 sm:gap-5">
                    <span
                      className="flex size-12 shrink-0 items-center justify-center rounded-full text-white shadow-sm sm:size-14"
                      style={{ backgroundColor: color }}
                    >
                      <Icon className="size-5 sm:size-6" strokeWidth={2} aria-hidden />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p
                        className="font-display text-3xl font-extrabold leading-none sm:text-4xl"
                        style={{ color }}
                      >
                        {num}
                      </p>
                      <h3
                        className="mt-1 text-sm font-bold tracking-wide sm:text-base"
                        style={{ color }}
                      >
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-dim sm:text-[0.9375rem]">
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <aside className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm sm:p-7 lg:self-start">
                <Users className="size-8 text-[#4285F4]" strokeWidth={1.75} aria-hidden />
                <p className="mt-4 font-display text-sm font-bold leading-snug tracking-wide text-[#4285F4] sm:text-base">
                  LISTENING. REPRESENTING. DELIVERING.
                </p>
                <div
                  className="mt-4 flex h-1 overflow-hidden rounded-full"
                  aria-hidden
                >
                  <span className="flex-1 bg-[#4285F4]" />
                  <span className="flex-1 bg-[#EA4335]" />
                  <span className="flex-1 bg-[#FBBC05]" />
                  <span className="flex-1 bg-[#34A853]" />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-text-dim">
                  I believe in open communication, strong leadership and accountability to the people
                  of Laois.
                </p>
                <p className="mt-4 font-display text-base italic text-[#1a73e8] sm:text-lg">
                  Let&apos;s build a better future for Laois together.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Featured statement */}
      <section
        className="border-y border-primary/10 bg-slate-50/80 py-16 sm:py-20"
        aria-labelledby="featured-statement-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <article
            className="relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-8 shadow-sm sm:p-10"
            data-aos="fade-up"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-primary/10 pb-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
                  Latest statement
                </p>
                <time
                  className="text-sm font-medium text-text-dim"
                  dateTime={featuredStatement.dateIso}
                >
                  {featuredStatement.dateLabel}
                </time>
              </div>
              <h2
                id="featured-statement-heading"
                className="mt-6 text-2xl font-bold text-primary sm:text-3xl"
              >
                {featuredStatement.title}
              </h2>
              <blockquote className="mt-6 border-l-4 border-secondary/60 pl-6 text-lg leading-relaxed text-text-dim">
                {featuredStatement.excerpt}
              </blockquote>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/statements"
                  className="inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/20 transition hover:bg-accent-hover"
                >
                  View all statements
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          </article>
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
