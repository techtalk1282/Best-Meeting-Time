/* 
File: app/guides/entertainment-social-timing/page.tsx
Version: 1.0
Date: 2026-05-09
Purpose:
- Create the new Entertainment & Social Timing guide page
- Use approved custom visual assets
- Match Cultural Timing guide layout structure
- Improve SEO and engagement quality

Rollback:
- Safe new route
- Does not modify Stripe or protected logic
*/

import Image from "next/image";
import Link from "next/link";

export default function EntertainmentSocialTimingPage() {
  return (
    <main className="min-h-screen bg-[#4c1d95] px-4 py-8">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-purple-200 bg-[#f8f7fc] p-6 md:p-10">

        {/* HERO SECTION */}

        <section className="grid gap-10 border-b border-purple-100 pb-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit rounded-full bg-purple-100 px-5 py-2 text-sm font-black uppercase tracking-wide text-[#5b21b6]">
              Entertainment & Social Timing
            </div>

            <h1 className="max-w-xl text-5xl font-black leading-none tracking-tight text-[#0f172a] md:text-7xl">
              Best Times for Streaming, Gaming, and Live Sports
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-700">
              Entertainment happens across every time zone. Whether you are
              planning global gaming events, watching sports live, or hosting
              streaming parties with friends, timing matters more than most
              people realize.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-purple-200 bg-white px-6 py-5 text-xl font-bold text-[#5b21b6]">
                Global gaming events
              </div>

              <div className="rounded-2xl border border-purple-200 bg-white px-6 py-5 text-xl font-bold text-[#5b21b6]">
                Streaming premieres worldwide
              </div>

              <div className="rounded-2xl border border-purple-200 bg-white px-6 py-5 text-xl font-bold text-[#5b21b6]">
                International sports viewing times
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-purple-200 bg-white">
            <Image
              src="/images/guides/entertainment_social_hero.png"
              alt="Entertainment and social timing hero"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </section>

        {/* INTRO BLOCK */}

        <section className="border-b border-purple-100 py-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#7c3aed]">
              ENTERTAINMENT TIMING MATTERS
            </div>

            <h2 className="text-4xl font-black text-[#0f172a]">
              Timing shapes the entertainment experience.
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-700">
              A live sports match at the perfect local hour creates excitement.
              A poorly timed gaming event can exclude half your community.
              Understanding time zones helps people connect socially without
              burnout, spoilers, or missed moments.
            </p>
          </div>
        </section>

        {/* QUESTION 1 */}

        <section className="grid gap-10 border-b border-purple-100 py-14 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full bg-purple-100 px-5 py-2 text-sm font-black uppercase tracking-wide text-[#5b21b6]">
              Question 1
            </div>

            <h2 className="max-w-xl text-5xl font-black leading-tight text-[#0f172a]">
              When is the best time for global gaming events?
            </h2>

            <div className="mt-8 space-y-8 text-lg leading-9 text-slate-700">
              <p>
                Online gaming communities often include players from North
                America, Europe, Asia, Australia, and South America all at the
                same time. Picking a fair event window is important for player
                participation and community growth.
              </p>

              <p>
                Weekend afternoons in North America usually overlap reasonably
                well with evening hours in Europe. However, those same times may
                become extremely late in Asia or very early in Australia.
              </p>

              <p>
                Rotating schedules for raids, tournaments, and community events
                helps prevent one region from always being excluded.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-purple-200 bg-white">
            <Image
              src="/images/guides/global_gaming_events.png"
              alt="Global gaming events"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* QUESTION 2 */}

        <section className="grid gap-10 py-14 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full bg-purple-100 px-5 py-2 text-sm font-black uppercase tracking-wide text-[#5b21b6]">
              Question 2
            </div>

            <h2 className="max-w-xl text-5xl font-black leading-tight text-[#0f172a]">
              Why does timing matter for streaming and live sports?
            </h2>

            <div className="mt-8 space-y-8 text-lg leading-9 text-slate-700">
              <p>
                Streaming platforms release shows globally, but audiences often
                experience premieres at completely different local times. A
                midnight release in one country may happen during work hours in
                another.
              </p>

              <p>
                Sports fans also deal with difficult schedules. International
                tournaments may air late at night or early in the morning
                depending on where the event takes place.
              </p>

              <p>
                Understanding local time differences helps viewers avoid missed
                events, spoilers, and scheduling confusion.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-purple-200 bg-white">
            <Image
              src="/images/guides/streaming_sports_timing.png"
              alt="Streaming and sports timing"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* CTA */}

        <section className="mt-6 rounded-[32px] border border-purple-200 bg-gradient-to-r from-[#5b21b6] to-[#7c3aed] p-10 text-center text-white">
          <h2 className="text-4xl font-black">
            Plan entertainment across every time zone.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-purple-100">
            Use Best Meeting Time to coordinate global gaming events, streaming
            parties, sports watch groups, and online communities without the
            confusion of manual time conversion.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 text-lg font-black text-[#5b21b6] transition hover:scale-[1.02]"
          >
            Schedule a Meeting — free to try
          </Link>
        </section>

      </div>
    </main>
  );
}
