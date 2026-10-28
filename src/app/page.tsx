import {
  ArrowRight, CalendarDays, Gift, Mail, MessageCircle, Plus,
  RefreshCcw, Sparkles, Zap, type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { AppCard } from "@/components/AppCard";
import { Graveyard, Pumpkin, Spider, Web } from "@/components/Scenery";
import {
  APPS, appUrl, BRANDS, FAQ, FEATURED, heroSrc, logoSrc, OBJ, REVIEWS, STEPS,
} from "@/lib/objects";
import { SALE } from "@/lib/sale";

const PERKS: [LucideIcon, string][] = [[Gift, "Free Plans Available"], [Zap, "Live in Minutes"], [RefreshCcw, "Cancel Anytime"]];
const PAD = "px-6 md:px-12 lg:px-16";
const byslug = (s: string) => APPS.find((a) => a.slug === s)!;

function Head({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-balance font-semibold text-3xl tracking-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-lg text-muted">{sub}</p>}
    </div>
  );
}

const btn = "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-bold transition";
const primary = `${btn} bg-action text-white hover:bg-action-hover`;
const ghost = `${btn} border border-white/20 text-white hover:border-pumpkin`;

export default function ObjectsPage() {
  return (
    <>
      {/* ANNOUNCEMENT */}
      <a
        href="#apps"
        className="relative z-40 flex items-center justify-center gap-2 bg-ink border-b border-white/15 px-4 py-2.5 text-center text-sm font-semibold text-white"
      >
        <Sparkles size={16} className="shrink-0" aria-hidden />
        <span>Halloween Sale: <u>{SALE.percent}% off every Shopify app</u>. Starts {SALE.startsOn}.</span>
      </a>

      <main>
        {/* HERO */}
        <section
          className="relative isolate flex min-h-[calc(100svh-2.5rem)] min-[1440px]:min-h-[760px] flex-col items-center justify-center overflow-hidden bg-ink bg-cover bg-center px-6 pb-16 pt-28 text-center md:px-12"
          style={{ backgroundImage: "linear-gradient(rgb(15 10 31 / 0.62), rgb(15 10 31 / 0.62)), url(/hero/forest.png)" }}
        >
          <header className="absolute inset-x-0 top-0 z-30">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-left md:grid md:grid-cols-[1fr_auto_1fr] md:px-12 lg:px-24 xl:px-32">
              <a href={OBJ.site} aria-label="Objects" className="justify-self-start">
                <Image src="/objects/logo.svg" alt="Objects" width={124} height={34} priority unoptimized className="h-8 w-auto" />
              </a>
              <div className="hidden items-center gap-8 text-sm font-semibold text-muted md:flex">
                <a href="#apps" className="hover:text-foreground">Apps</a>
                <a href={`${OBJ.site}/pricing`} className="hover:text-foreground">Pricing</a>
                <a href={`${OBJ.site}/blog`} className="hover:text-foreground">Blog</a>
                <a href="#contact" className="hover:text-foreground">Contact</a>
              </div>
              <a
                href="#apps"
                className="justify-self-end rounded-full border border-white/20 bg-ink/70 px-4 py-2 text-sm font-semibold text-white transition hover:border-pumpkin"
              >
                Browse apps
              </a>
            </nav>
          </header>

          <h1 className="max-w-[1100px] text-balance font-semibold leading-[1.1] tracking-tight text-foreground [font-size:clamp(2.25rem,5vw,4rem)]">
            Halloween sale.<br /><span className="text-pumpkin">{SALE.percent}% off</span> our Shopify apps.
          </h1>
          <p className="mt-5 max-w-[780px] text-balance text-lg leading-[1.4] text-muted sm:text-xl">
            Starting <strong className="font-semibold text-white">{SALE.startsOn}</strong>. Reduced prices across our Shopify apps. No coupon needed.
          </p>


          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#apps"
              className="inline-flex h-14 items-center justify-center rounded-md bg-action px-7 font-bold text-white transition hover:bg-action-hover"
            >
              Browse all apps
            </a>
          </div>
        </section>

        {/* APPS OVERVIEW */}
        <section className={`mx-auto max-w-4xl py-20 text-center ${PAD}`}>
          <h2 className="mt-5 text-balance font-semibold text-3xl leading-[1.1] sm:text-5xl">
            Shopify apps for conversion, loyalty and wholesale.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Build bundles, reward repeat customers, manage wholesale orders or improve your storefront. Choose the apps your store needs.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#apps" className={primary}>Browse All Apps <ArrowRight size={18} aria-hidden /></a>
            <a href={`${OBJ.site}/pricing`} className={ghost}>See Pricing</a>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-semibold text-muted">
            {PERKS.map(([Icon, t]) => (
              <li key={t} className="flex items-center gap-2"><Icon size={16} className="text-pumpkin" aria-hidden />{t}</li>
            ))}
          </ul>
        </section>

        {/* FEATURED */}
        <section className={`mx-auto max-w-7xl py-16 ${PAD}`}>
          <h2 className="mb-6 text-center text-2xl font-semibold">Featured apps</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {FEATURED.map((s) => {
              const a = byslug(s);
              return (
                <a
                  key={s}
                  href={appUrl(s)}
                  target="_blank"
                  rel="noopener"
                  className="group overflow-hidden rounded-xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-pumpkin/60"
                >
                  <div className="relative aspect-video overflow-hidden bg-ink">
                    <span className="absolute right-3 top-3 z-10 rounded-full bg-pumpkin px-2.5 py-1 text-xs font-bold text-ink">−{SALE.percent}%</span>
                    <Image src={heroSrc(a)} alt={`${a.name} preview`} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center gap-3 p-4">
                    <Image src={logoSrc(s)} alt="" width={40} height={40} unoptimized className="rounded-lg" />
                    <span className="flex-1 font-bold">{a.name}</span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-white">Open app <ArrowRight size={14} aria-hidden /></span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* TRUSTED BY */}
        <section className="border-y border-line bg-surface/60 py-14">
          <div className={`mx-auto max-w-6xl text-center ${PAD}`}>
            <h2 className="font-semibold text-2xl tracking-tight sm:text-3xl">Trusted by Top Shopify B2B + B2C Brands</h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {BRANDS.map(([f, name, dark]) => (
                <span key={f} className={`flex h-16 w-36 items-center justify-center rounded-xl p-3 ${dark ? "border border-line bg-surface" : "bg-white"}`}>
                  <Image src={`/objects/brands/${f}`} alt={name} width={120} height={40} unoptimized className="max-h-10 w-auto object-contain" />
                </span>
              ))}
            </div>
            <a href="#apps" className="mt-8 inline-flex items-center gap-2 font-semibold text-white">
              See the apps these brands installed <ArrowRight size={16} aria-hidden />
            </a>
          </div>
        </section>

        {/* APPS */}
        <section id="apps" className={`mx-auto max-w-7xl scroll-mt-8 py-24 ${PAD}`}>
          <Head
            title="Explore our Shopify apps"
            sub="Browse the full collection. Sale prices start October 29, with free plans available on selected apps."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {APPS.map((a) => <AppCard key={a.slug} a={a} />)}
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-muted">Can&apos;t decide? Compare every plan of all our Sales-Boosting Shopify apps side by side.</p>
            <a href={`${OBJ.site}/pricing`} className={ghost}>Compare Pricing</a>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="relative overflow-hidden border-y border-line bg-surface py-24">
          <Web className="absolute right-0 top-0 w-56 -scale-x-100 text-muted/15" />
          <div className={`mx-auto max-w-6xl ${PAD}`}>
            <Head title="Get started on Shopify" sub="Choose an app, install it from Shopify, and configure it for your store." />
            <ol className="mt-14 grid gap-5 md:grid-cols-3">
              {STEPS.map(([t, d], i) => (
                <li key={t} className="rounded-xl border border-line bg-ink/60 p-7">
                  <span className="flex size-11 items-center justify-center rounded-full bg-pumpkin text-2xl font-extrabold text-ink">{i + 1}</span>
                  <h3 className="mt-5 text-lg font-bold">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{d}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 text-center">
              <a href="#apps" className={primary}>Start Step One: Pick Your Next Shopify App</a>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-pumpkin/[0.07] to-transparent py-24">
          <div className={`mx-auto max-w-7xl ${PAD}`}>
            <Head title="From the merchants using our apps" sub="Real reviews from the Shopify App Store, by the merchants who run these apps on live stores every day." />
            <div className="mt-14 gap-5 space-y-5 md:columns-2 lg:columns-3">
              {REVIEWS.slice(0, 3).map(([name, country, usage, text]) => (
                <figure key={name} className="break-inside-avoid rounded-xl border border-line bg-surface p-6">
                  <blockquote className="leading-relaxed text-foreground/90">&ldquo;{text}&rdquo;</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-pumpkin/20 text-sm font-bold text-muted">
                      {name.replace(/[^A-Za-zÀ-ÿ ]/g, "").split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()}
                    </span>
                    <span className="text-sm">
                      <span className="block font-bold">{name}</span>
                      <span className="text-muted">{country} · {usage}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href="#apps" className={ghost}>View All Apps</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className={`mx-auto max-w-3xl scroll-mt-8 pb-24 ${PAD}`}>
          <Head title="Questions about the apps" sub="Straight answers. If yours isn't here, message us on WhatsApp." />
          <div className="mt-10 divide-y divide-line rounded-xl border border-line bg-surface">
            {FAQ.map(([q, a], i) => (
              <details key={q} open={i === 0} className="group px-6 py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                  {q}
                  <Plus className="plus shrink-0 text-pumpkin transition-transform" size={20} aria-hidden />
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative scroll-mt-8 overflow-hidden border-t border-line bg-surface py-24">
          <Spider className="dangle absolute right-[12%] top-0 hidden h-32 text-muted sm:block" />
          <div className={`mx-auto max-w-5xl ${PAD}`}>
            <Head title="Need help choosing an app?" sub="Ask about app features, plans or setup. Contact the Objects team directly." />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                [MessageCircle, "WhatsApp", OBJ.phone, OBJ.whatsapp],
                [CalendarDays, "Book a Meeting", "Pick a time that suits you", OBJ.calendly],
                [Mail, "Email", OBJ.email, `mailto:${OBJ.email}`],
              ].map(([Icon, t, d, href]) => {
                const I = Icon as LucideIcon;
                return (
                  <a key={t as string} href={href as string} target="_blank" rel="noopener" className="group rounded-xl border border-line bg-ink/60 p-6 text-center transition hover:-translate-y-1 hover:border-pumpkin/60">
                    <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-pumpkin/10 text-white"><I size={22} aria-hidden /></span>
                    <h3 className="mt-4 text-lg font-bold text-white">{t as string}</h3>
                    <p className="mt-1 text-sm text-muted">{d as string}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* FINAL CTA + FOOTER (100vh) */}
      <footer className="sky relative isolate flex min-h-[620px] flex-col overflow-hidden">
        <div className="stars absolute inset-0 -z-10" />
        <Web className="absolute right-0 top-0 -z-10 w-48 -scale-x-100 text-muted/25 sm:w-72" />
        <div className="relative flex flex-1 flex-col items-center justify-center px-6 pb-40 pt-24 text-center md:px-12">
          <h2 className="max-w-4xl text-balance font-semibold tracking-tight leading-[1.1] [font-size:clamp(1.9rem,min(5.5vh,5vw),4rem)]">
            Find the right app for your store.
          </h2>
          <p className="mt-[2vh] max-w-xl text-lg text-muted">
            Explore free plans and trial options on each app page.
            <strong className="text-pumpkin-hot"> {SALE.percent}% off</strong> every app starting {SALE.startsOn}.
          </p>
          <div className="mt-[4vh] flex flex-col items-center gap-3 sm:flex-row">
            <a href="#apps" className={primary}>Browse All Apps</a>
          </div>
          <ul className="mt-[3vh] flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-muted">
            {PERKS.map(([Icon, t]) => (
              <li key={t} className="flex items-center gap-2"><Icon size={16} className="text-pumpkin" aria-hidden />{t}</li>
            ))}
          </ul>
          <Pumpkin className="flicker absolute bottom-[1vh] left-[7%] z-10 w-24 sm:h-[13vh] sm:w-auto" />
          <Pumpkin className="flicker absolute bottom-[1vh] left-[26%] z-10 hidden sm:block sm:h-[7vh]" style={{ animationDelay: "-1s" }} />
          <Pumpkin className="flicker absolute bottom-[1vh] right-[24%] z-10 hidden sm:block sm:h-[8.5vh]" style={{ animationDelay: "-2s" }} />
          <Pumpkin className="flicker absolute bottom-[1vh] right-[7%] z-10 w-20 sm:h-[12vh] sm:w-auto" style={{ animationDelay: "-1.5s" }} />
          <Graveyard className="absolute inset-x-0 bottom-0 h-[17vh] min-h-24 w-full" />
        </div>

        <div className={`relative z-20 border-t border-white/10 bg-ink py-7 text-sm text-muted ${PAD}`}>
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
            <div>
              <Image src="/objects/logo.svg" alt="Objects" width={124} height={34} unoptimized className="h-8 w-auto" />
              <p className="mt-4 max-w-xs leading-relaxed">Shopify apps built by Objects, a custom software team shipping tools that turn storefront traffic into revenue.</p>
              <a href="https://objects.ws" className="mt-3 inline-block font-semibold text-white">objects.ws ↗</a>
            </div>
            <div>
              <h3 className="mb-3 font-bold text-foreground">Apps</h3>
              <ul className="space-y-2">{APPS.slice(0, 5).map((a) => <li key={a.slug}><a href={appUrl(a.slug)} className="hover:text-foreground">{a.name}</a></li>)}</ul>
            </div>
            <div>
              <h3 className="mb-3 font-bold text-foreground">More Apps</h3>
              <ul className="space-y-2">{APPS.slice(5).map((a) => <li key={a.slug}><a href={appUrl(a.slug)} className="hover:text-foreground">{a.name}</a></li>)}</ul>
            </div>
            <div>
              <h3 className="mb-3 font-bold text-foreground">Get in Touch</h3>
              <ul className="space-y-2">
                <li><a href={`mailto:${OBJ.email}`} className="hover:text-foreground">{OBJ.email}</a></li>
                <li><a href={OBJ.whatsapp} className="hover:text-foreground">{OBJ.phone}</a></li>
                <li><a href={OBJ.calendly} className="hover:text-foreground">Book a Meeting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-bold text-foreground">Company</h3>
              <ul className="space-y-2">
                <li><a href="#apps" className="hover:text-foreground">All Apps</a></li>
                <li><a href={`${OBJ.site}/pricing`} className="hover:text-foreground">Pricing</a></li>
                <li><a href={`${OBJ.site}/blog`} className="hover:text-foreground">Blog</a></li>
                <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-7xl border-t border-white/10 pt-4">© 2026 Objects. All rights reserved. Built for Shopify merchants worldwide.</p>
        </div>
      </footer>

      <a
        href={OBJ.whatsapp}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-action text-white transition hover:bg-action-hover"
      >
        <MessageCircle size={26} aria-hidden />
      </a>
    </>
  );
}
