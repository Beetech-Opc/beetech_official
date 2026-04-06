import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Megaphone, Warehouse, ShoppingCart, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the Beetech ecosystem — our portfolio of innovative platforms and services.",
};

const projects = [
  {
    title: "Beetech SuperShop",
    description:
      "Your one-stop digital super shop offering everyday products, exclusive deals, and a seamless shopping experience for customers across Bangladesh.",
    tags: ["Retail", "E-commerce", "Points System"],
    status: "Live",
    icon: ShoppingBag,
    accent: "from-blue-500 to-violet-500",
  },
  {
    title: "Beetech Marketing",
    description:
      "A powerful digital marketing platform helping businesses grow their reach through targeted campaigns, analytics, and customer engagement tools.",
    tags: ["Marketing", "Analytics", "Growth"],
    status: "Live",
    icon: Megaphone,
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Beetech Warehouse",
    description:
      "Smart warehouse management system with automated inventory tracking, barcode scanning, and real-time stock monitoring for efficient operations.",
    tags: ["Inventory", "Warehouse", "Automation"],
    status: "Live",
    icon: Warehouse,
    accent: "from-orange-500 to-amber-500",
  },
  {
    title: "Beetech E-Commerce",
    description:
      "A full-featured multi-vendor e-commerce marketplace with real-time inventory management, secure payments, and delivery tracking.",
    tags: ["Marketplace", "Payments", "Multi-vendor"],
    status: "Coming Soon",
    icon: ShoppingCart,
    accent: "from-purple-500 to-pink-500",
  },
  {
    title: "Beetech Courier",
    description:
      "End-to-end courier and logistics service with real-time tracking, automated dispatch, and nationwide delivery coverage.",
    tags: ["Logistics", "Delivery", "Tracking"],
    status: "Coming Soon",
    icon: Truck,
    accent: "from-rose-500 to-red-500",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Our Ecosystem
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Platforms we&apos;ve built and services currently in development.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group relative flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 border-border/60"
            >
              {/* Accent top bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.accent}`} />

              <CardHeader className="flex-1">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <project.icon className="size-5 text-primary" />
                  </div>
                  <Badge
                    variant={project.status === "Live" ? "default" : "outline"}
                    className={
                      project.status === "Live"
                        ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/15"
                        : "text-muted-foreground"
                    }
                  >
                    <span
                      className={`mr-1.5 inline-block size-1.5 rounded-full ${
                        project.status === "Live" ? "bg-emerald-500" : "bg-muted-foreground"
                      }`}
                    />
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
