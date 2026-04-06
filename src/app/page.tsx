import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  ArrowRight,
  ShoppingBag,
  Globe,
  Radio,
  Users,
  TrendingUp,
  ShieldCheck,
  Zap,
  Store,
  Warehouse,
  Hotel,
  UtensilsCrossed,
  MapPinned,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,oklch(0.50_0.20_264_/_0.12),transparent)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary">
              <Zap className="size-3.5" />
              Trusted Digital Commerce Platform
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
              Empowering the Future with{" "}
              <span className="text-gradient">Beetech World</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Bangladesh&apos;s all-in-one digital commerce platform — connecting 6 lakh+
              customers, 15,000+ shops, super shops, hotels, restaurants, and warehouses
              nationwide under one trusted ecosystem.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all px-8 h-12 text-base" asChild>
                <Link href="/projects">
                  Explore Ecosystem <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl px-8 h-12 text-base" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-6">
            {[
              { value: "6,00,000+", label: "Customers", icon: Users },
              { value: "15,000+", label: "Shops", icon: Store },
              { value: "15+", label: "Super Shops", icon: ShoppingBag },
              { value: "1", label: "Warehouse", icon: Warehouse },
              { value: "Hotels", label: "& Restaurants", icon: UtensilsCrossed },
              { value: "Nationwide", label: "All Over BD", icon: MapPinned },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 py-8 sm:py-10">
                <stat.icon className="size-5 text-primary/60 mb-1" />
                <span className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                About Us
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Who We Are
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
                Beetech World is Bangladesh&apos;s leading all-in-one digital commerce and
                entrepreneurship platform — uniting shops, super shops, hotels, restaurants,
                and warehouses under a single trusted ecosystem across the entire country.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                With over 6 lakh customers and 15,000+ partner shops nationwide, our mission
                is to create opportunities, support local businesses, and build a sustainable
                digital economy through innovation, transparency, and leadership.
              </p>
              <Button variant="outline" className="mt-8 rounded-xl" asChild>
                <Link href="/projects">
                  View Our Projects <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, title: "Innovation", desc: "Cutting-edge solutions" },
                { icon: ShieldCheck, title: "Trust", desc: "Verified ecosystem" },
                { icon: Users, title: "Community", desc: "Growing network" },
                { icon: Zap, title: "Speed", desc: "Instant cashback" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border bg-card p-6 text-center transition-all hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5"
                >
                  <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <item.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beetech Ecosystem */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Our Platforms
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Beetech Ecosystem
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Our integrated platforms working together for your success.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Store,
                title: "15,000+ Partner Shops",
                description: "Local shops across the country connected through our digital commerce platform.",
                gradient: "from-blue-500/10 to-violet-500/10",
              },
              {
                icon: ShoppingBag,
                title: "15+ Super Shops",
                description: "Beetech-owned super shops offering everyday products and exclusive deals.",
                gradient: "from-emerald-500/10 to-teal-500/10",
              },
              {
                icon: Warehouse,
                title: "Warehouse & Logistics",
                description: "Centralized warehouse with smart inventory management and nationwide delivery.",
                gradient: "from-orange-500/10 to-rose-500/10",
              },
              {
                icon: Hotel,
                title: "Hotels",
                description: "Partner hotels integrated into the Beetech ecosystem for hospitality services.",
                gradient: "from-purple-500/10 to-pink-500/10",
              },
              {
                icon: UtensilsCrossed,
                title: "Restaurants",
                description: "Restaurant partners offering food ordering and dining experiences through Beetech.",
                gradient: "from-rose-500/10 to-red-500/10",
              },
              {
                icon: Globe,
                title: "All-in-One Platform",
                description: "Everything connected under one ecosystem — nationwide coverage across Bangladesh.",
                gradient: "from-cyan-500/10 to-blue-500/10",
              },
            ].map((service) => (
              <Card
                key={service.title}
                className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 border-border/60"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <CardHeader className="relative">
                  <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <service.icon className="size-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 px-8 py-20 text-center text-primary-foreground shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white/10,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,white/5,transparent_50%)]" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Join the Beetech Ecosystem?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-primary-foreground/80 text-lg">
                Whether you&apos;re a shopper, shop owner, or investor — Beetech World has
                a place for you.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="mt-10 rounded-xl px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="/contact">
                  Get in Touch <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
