import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Clock,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Beetech World — we'd love to hear from you.",
};

const EMAIL = "beetech24@gmail.com";
const PHONE = "+8801324763476";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=Inquiry+from+Beetech+Website&body=Hello+Beetech+Team,%0D%0A%0D%0A`;

export default function ContactPage() {
  return (
    <section className="pt-8 pb-16 sm:pt-12 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Reach Out
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or want to join the Beetech ecosystem? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Primary CTA — Email */}
        <div className="mx-auto mb-12 max-w-2xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-8 sm:p-12 text-center text-primary-foreground shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white/10,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,white/5,transparent_50%)]" />
            <div className="relative">
              <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                <Mail className="size-8" />
              </div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Send Us an Email
              </h2>
              <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
                Click below to open Gmail and write to us directly. We typically respond within 24 hours.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="mt-8 rounded-xl px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all gap-2"
                asChild
              >
                <a href={GMAIL_COMPOSE} target="_blank" rel="noopener noreferrer">
                  <Mail className="size-4" />
                  Compose in Gmail
                  <ExternalLink className="size-3.5 opacity-60" />
                </a>
              </Button>
              <p className="mt-4 text-xs text-primary-foreground/60">
                {EMAIL}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Phone */}
          <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 border-border/60">
            <CardHeader className="space-y-4">
              <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
                <Phone className="size-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base">Call Us</CardTitle>
                <CardDescription className="mt-1.5 leading-relaxed">
                  +880 1324-763476
                  <br />
                  <span className="text-xs text-muted-foreground/70">Sat–Thu, 9 AM – 6 PM BST</span>
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" className="w-full rounded-lg" asChild>
                <a href={`tel:${PHONE}`}>
                  <Phone className="size-3.5" />
                  Call Now
                </a>
              </Button>
            </CardHeader>
          </Card>

          {/* WhatsApp / Message */}
          <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 border-border/60">
            <CardHeader className="space-y-4">
              <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                <MessageCircle className="size-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base">WhatsApp</CardTitle>
                <CardDescription className="mt-1.5 leading-relaxed">
                  Quick chat with our team
                  <br />
                  <span className="text-xs text-muted-foreground/70">Usually replies within minutes</span>
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" className="w-full rounded-lg" asChild>
                <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-3.5" />
                  Chat on WhatsApp
                  <ExternalLink className="size-3 opacity-60" />
                </a>
              </Button>
            </CardHeader>
          </Card>

          {/* Office Hours */}
          <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5 border-border/60">
            <CardHeader className="space-y-4">
              <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10">
                <Clock className="size-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base">Office Hours</CardTitle>
                <CardDescription className="mt-1.5 leading-relaxed">
                  Saturday – Thursday
                  <br />
                  <span className="text-xs text-muted-foreground/70">9:00 AM – 6:00 PM BST</span>
                </CardDescription>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-600">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                We&apos;re open now
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Address Section */}
        <div className="mt-12">
          <Card className="overflow-hidden border-border/60">
            <div className="grid lg:grid-cols-2">
              {/* Map placeholder */}
              <div className="relative bg-gradient-to-br from-muted to-muted/50 p-8 sm:p-12 flex flex-col justify-center min-h-[280px]">
                <div className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 mb-5">
                    <MapPin className="size-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Visit Our Office</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Abdul Karim Villa, 80/1
                    <br />
                    Purba Chanduna, Shibbari Mor
                    <br />
                    Gazipur Sadar, Gazipur-1700
                    <br />
                    Bangladesh
                  </p>
                  <Button variant="outline" size="sm" className="mt-6 rounded-lg" asChild>
                    <a
                      href="https://www.google.com/maps/search/Abdul+Karim+Villa+80+Purba+Chanduna+Gazipur+1700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="size-3.5" />
                      Open in Google Maps
                      <ExternalLink className="size-3 opacity-60" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Quick info */}
              <div className="p-8 sm:p-12 flex flex-col justify-center space-y-6">
                <h3 className="text-xl font-bold">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you want to discuss a partnership, have questions about our
                  platforms, or just want to say hello — we&apos;re here to help.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "beetech24@gmail.com", href: GMAIL_COMPOSE },
                    { icon: Phone, label: "+880 1324-763476", href: `tel:${PHONE}` },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("https") ? "_blank" : undefined}
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                    >
                      <div className="flex size-9 items-center justify-center rounded-lg bg-primary/5 group-hover/link:bg-primary/10 transition-colors">
                        <item.icon className="size-4 text-primary" />
                      </div>
                      {item.label}
                    </Link>
                  ))}
                </div>
                <Button className="rounded-xl shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 transition-all w-fit" asChild>
                  <a href={GMAIL_COMPOSE} target="_blank" rel="noopener noreferrer">
                    <Mail className="size-4" />
                    Email Us Now
                    <ExternalLink className="size-3.5 opacity-60" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
