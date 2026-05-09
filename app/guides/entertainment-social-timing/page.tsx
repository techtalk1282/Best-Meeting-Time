/* 
File: app/guides/entertainment-social-timing/page.tsx
Version: 2.0
Date: 2026-05-09

Purpose:
- Fix Entertainment & Social Timing page layout
- Add full integrated white navigation header
- Match Cultural Timing page structure
- Center and constrain all content properly
- Prevent image cropping issues
- Improve spacing, readability, and SEO presentation

Rollback:
- Revert to Version 1.0 if needed
- No Stripe or protected logic touched
*/

import Image from "next/image";
import Link from "next/link";

export default function EntertainmentSocialTimingPage() {
  return (
    <main className="min-h-screen bg-[#4c1d95] px-4 py-8">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-purple-200 bg-[#f8f7fc] px-6 py-6 md:px-10 md:py-8">

        {/* SITE HEADER */}

        <header className="flex flex-col gap-6 border-b border-purple-100 pb-8 lg:flex-row lg:items-center lg:justify-between">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-xl font-black text-[#5b21b6]">
              ⌘
            </div>

            <div className="text-3xl font-black tracking-tight text-[#5b21b6]">
              Best Meeting Time
            </div>
          </Link>

          <nav className="flex flex-wrap items-center gap-8 text-lg font-bold text-[#1e293b]">
            <Link href="/">Home</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/features">Features</Link>

            <Link
              href="/guides"
              className="border-b-4 border-[#7c3aed] pb-1 text-[#5b21b6]"
            >
              Guides
            </Link>

            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <Link
            href="/"
            className="inline-flex w-fit items-center justify-center rounded-2xl bg-[#5b21b6] px-8 py-4 text-lg font-black text-white transition hover:scale-[1.02]"
          >
            Schedule a Meeting
          </Link>
        </header>

        {/* HERO SECTION */}

        <section className="grid gap-12 border-b border-purple-100 py-14 lg:grid-cols-2 lg:items-center">

          <div>
            <div className="mb-6 inline-flex rounded-full bg-purple-100 px-5 py-2 text-sm font-black uppercase tracking-wide text-[#5b21b6]">
              Entertainment & Social Timing Guide
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-tight text-[#0f172a] md:text-7xl">
              Entertainment & Social Timing Across the World
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-10 text-slate-700">
              From live streams and global gaming events to sports,
              movies, and social hangouts — timing makes every experience
              better. Find the best times to play, watch, and connect
              across every time zone.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              <div className="rounded-3xl border border-purple-200 bg-white p-6 text-center shadow-sm">
                <div className="mb-4 text-5xl">🎮</div>

                <div className="text-lg font-black text-[#5b21b6]">
                  Global Gaming
                </div>

                <div className="mt-2 text-sm leading-7 text-slate-600">
                  Find the best times for events and raids
                </div>
              </div>

              <div className="rounded-3xl border border-purple-200 bg-white p-6 text-center shadow-sm">
                <div className="mb-4 text-5xl">📺</div>

                <div className="text-lg font-black text-[#5b21b6]">
                  Streaming
                </div>

                <div className="mt-2 text-sm leading-7 text-slate-600">
                  Catch premieres and releases worldwide
                </div>
              </div>

              <div className="rounded-3xl border border-purple-200 bg-white p-6 text-center shadow-sm">
                <div className="mb-4 text-5xl">⚽</div>

                <div className="text-lg font-black text-[#5b21b6]">
                  Sports Timing
                </div>

                <div className="mt-2 text-sm leading-7 text-slate-600">
                  Never miss a global event again
                </div>
              </div>

            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-purple-200 bg-white shadow-sm">
            <Image
              src="/images/guides/entertainment_social_hero.png"
              alt="Entertainment and social timing hero"
              width={1600}
              height={1000}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </section>

        {/* INTRO SECTION */}

        <section className="border-b border-purple-100 py-14">

          <div className="mx-auto max-w-5xl text-center">

            <div className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#7c3aed]">
              ENTERTAINMENT TIMING MATTERS
            </div>

            <h2 className="text-4xl font-black text-[#0f172a] md:text-5xl">
              Timing shapes the entertainment experience.
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-10 text-slate-700">
              A live sports match at the perfect local hour creates excitement.
              A poorly timed gaming event can exclude half your community.
              Understanding time zones helps people connect socially without
              burnout, spoilers, or missed moments.
            </p>

          </div>
        </section>

        {/* QUESTION 1 */}

        <section className="grid gap-12 border-b border-purple-100 py-16 lg:grid-cols-2 lg:items-center">

          <div>

            <div className="mb-6 inline-flex rounded-full bg-purple-100 px-5 py-2 text-sm font-black uppercase tracking-wide text-[#5b21b6]">
              Question 1
            </div>

            <h2 className="max-w-2xl text-5xl font-black leading-tight text-[#0f172a]">
              When is the best time for global gaming events?
            </h2>

            <div className="mt-8 space-y-8 text-xl leading-10 text-slate-700">

              <p>
                Online gaming communities often include players from North
                America, Europe, Asia, Australia, and South America all at the
                same time.
              </p>

              <p>
                Weekend afternoons in North America usually overlap reasonably
                well with evening hours in Europe.
              </p>

              <p>
                Rotating schedules for raids, tournaments, and community events
                helps prevent one region from always being excluded.
              </p>

            </div>

          </div>

          <div className="overflow-hidden rounded-[32px] border border-purple-200 bg-white shadow-sm">
            <Image
              src="/images/guides/global_gaming_events.png"
              alt="Global gaming events"
              width={1600}
              height={1000}
              className="h-auto w-full object-contain"
            />
          </div>

        </section>

        {/* QUESTION 2 */}

        <section className="grid gap-12 py-16 lg:grid-cols-2 lg:items-center">

          <div>

            <div className="mb-6 inline-flex rounded-full bg-purple-100 px-5 py-2 text-sm font-black uppercase tracking-wide text-[#5b21b6]">
              Question 2
            </div>

            <h2 className="max-w-2xl text-5xl font-black leading-tight text-[#0f172a]">
              Why does timing matter for streaming and live sports?
            </h2>

            <div className="mt-8 space-y-8 text-xl leading-10 text-slate-700">

              <p>
                Streaming platforms release shows globally, but audiences often
                experience premieres at completely different local times.
              </p>

              <p>
                Sports fans also deal with difficult schedules. International
                tournaments may air late at night or early in the morning.
              </p>

              <p>
                Understanding local time differences helps viewers avoid missed
                events, spoilers, and scheduling confusion.
              </p>

            </div>

          </div>

          <div className="overflow-hidden rounded-[32px] border border-purple-200 bg-white shadow-sm">
            <Image
              src="/images/guides/streaming_sports_timing.png"
              alt="Streaming and sports timing"
              width={1600}
              height={1000}
              className="h-auto w-full object-contain"
            />
          </div>

        </section>

        {/* CTA */}

        <section className="mt-4 rounded-[32px] bg-gradient-to-r from-[#5b21b6] to-[#7c3aed] px-8 py-14 text-center text-white">

          <h2 className="text-4xl font-black md:text-5xl">
            Plan entertainment across every time zone.
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-10 text-purple-100">
            Use Best Meeting Time to coordinate global gaming events,
            streaming parties, sports watch groups, and online communities
            without the confusion of manual time conversion.
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex rounded-2xl bg-white px-10 py-5 text-lg font-black text-[#5b21b6] transition hover:scale-[1.02]"
          >
            Schedule a Meeting — free to try
          </Link>

        </section>

      </div>
    </main>
  );
}
