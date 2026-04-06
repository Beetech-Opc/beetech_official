import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShoppingBag,
  Globe,
  Users,
  TrendingUp,
  ShieldCheck,
  Zap,
  Store,
  Warehouse,
  Hotel,
  UtensilsCrossed,
  CheckCircle2,
  Award,
  Coins,
  Smartphone,
  ExternalLink,
} from "lucide-react";

const BEETECH_APP =
  "https://play.google.com/store/apps/details?id=com.beetech.beetech_customer&pcampaignid=web_share";
const SUPERSHOP_PORTAL = "https://beetechworld.com";

export default function HomePage() {
  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.50_0.20_264_/_0.08),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.50_0.20_264_/_0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.50_0.20_264_/_0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black_40%,transparent)]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8 lg:pt-36 lg:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary tracking-wide">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Trusted Digital Commerce Platform
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08]">
              Empowering the Future with{" "}
              <span className="text-gradient">Beetech World</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Bangladesh&apos;s all-in-one digital commerce platform — connecting
              customers, shops, super shops, hotels, restaurants, and warehouses
              under one ecosystem.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all px-8 h-12 text-base w-full sm:w-auto"
                asChild
              >
                <a href={BEETECH_APP} target="_blank" rel="noopener noreferrer">
                  <Smartphone className="size-4" />
                  Download App
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl px-8 h-12 text-base w-full sm:w-auto"
                asChild
              >
                <a href={SUPERSHOP_PORTAL} target="_blank" rel="noopener noreferrer">
                  SuperShop Portal <ExternalLink className="size-3.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Stats row */}
          <div className="mx-auto mt-12 sm:mt-16 max-w-3xl">
            <div className="grid grid-cols-3 divide-x divide-border">
              {[
                { value: "6,00,000+", label: "Customers" },
                { value: "15,000+", label: "Partner Shops" },
                { value: "Nationwide", label: "Coverage" },
              ].map((stat) => (
                <div key={stat.label} className="px-2 sm:px-4 py-2 text-center">
                  <p className="text-lg font-bold tracking-tight text-foreground sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] sm:text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ About ═══ */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            {/* Text — 3 cols */}
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                About Us
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Building Bangladesh&apos;s largest digital commerce ecosystem
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
                Beetech World unites shops, super shops, hotels, restaurants, and
                warehouses under a single platform. With over 6 lakh customers
                and 15,000+ partner shops, we&apos;re creating opportunities,
                supporting local businesses, and building a sustainable digital
                economy.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Instant cashback on every purchase",
                  "Club membership with profit sharing",
                  "Verified and trusted partner network",
                  "Nationwide coverage across Bangladesh",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    {item}
                  </div>
                ))}
              </div>

              <Button variant="outline" className="mt-8 rounded-xl" asChild>
                <Link href="/projects">
                  View Our Projects <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            {/* Value cards — 2 cols */}
            <div className="grid grid-cols-2 gap-3 lg:col-span-2">
              {[
                {
                  icon: TrendingUp,
                  title: "Innovation",
                  desc: "Digital solutions for modern commerce",
                },
                {
                  icon: ShieldCheck,
                  title: "Trust",
                  desc: "Verified and transparent ecosystem",
                },
                {
                  icon: Users,
                  title: "Community",
                  desc: "Growing network of partners",
                },
                {
                  icon: Zap,
                  title: "Rewards",
                  desc: "Cashback and bonuses on every deal",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl sm:rounded-2xl border bg-card p-4 sm:p-5 transition-all hover:shadow-md hover:border-primary/20"
                >
                  <div className="mb-2 sm:mb-3 flex size-9 sm:size-10 items-center justify-center rounded-lg sm:rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <item.icon className="size-4 sm:size-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xs sm:text-sm">{item.title}</h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ How It Works ═══ */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              How It Works
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple steps to get started
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                icon: Store,
                title: "Shop or Sell",
                desc: "Purchase or sell products from any Beetech partner outlet nationwide.",
              },
              {
                step: "02",
                icon: Coins,
                title: "Earn Points",
                desc: "Collect points on every transaction. Get instant cashback on purchases.",
              },
              {
                step: "03",
                icon: Award,
                title: "Unlock Rewards",
                desc: "Reach 100 points to become a Club Member and earn profit sharing bonuses.",
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center group">
                <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="size-6 text-primary" />
                </div>
                <span className="absolute -top-2 right-1/2 translate-x-6 text-[3rem] sm:text-[4rem] font-bold text-muted/50 leading-none select-none sm:translate-x-10">
                  {item.step}
                </span>
                <h3 className="relative text-lg font-semibold">{item.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Ecosystem ═══ */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Our Ecosystem
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything under one platform
            </h2>
            <p className="mt-4 text-muted-foreground">
              Integrated platforms working together across Bangladesh.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Store,
                title: "15,000+ Partner Shops",
                desc: "Local shops connected through our digital commerce network.",
              },
              {
                icon: ShoppingBag,
                title: "15+ Super Shops",
                desc: "Beetech-owned super shops with everyday products and exclusive deals.",
              },
              {
                icon: Warehouse,
                title: "Warehouse & Logistics",
                desc: "Centralized warehouse with smart inventory and nationwide delivery.",
              },
              {
                icon: Hotel,
                title: "Hotels",
                desc: "Partner hotels integrated for hospitality services.",
              },
              {
                icon: UtensilsCrossed,
                title: "Restaurants",
                desc: "Restaurant partners offering food ordering and dining experiences.",
              },
              {
                icon: Globe,
                title: "All-in-One Platform",
                desc: "Everything connected — nationwide coverage across Bangladesh.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex gap-4 rounded-2xl border bg-card p-5 transition-all hover:shadow-md hover:border-primary/20"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/85 px-5 py-12 text-center text-primary-foreground shadow-2xl shadow-primary/20 sm:px-12 sm:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white/10,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,white/5,transparent_50%)]" />
            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
                Ready to Join Beetech?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-primary-foreground/80 text-base sm:text-lg">
                Whether you&apos;re a shopper, shop owner, or investor — there&apos;s a
                place for you.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-xl px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                  asChild
                >
                  <Link href="/contact">
                    Get in Touch <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-xl px-8 h-12 text-base text-primary-foreground/90 hover:bg-white/10 hover:text-primary-foreground w-full sm:w-auto"
                  asChild
                >
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
