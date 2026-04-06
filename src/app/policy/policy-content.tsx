"use client";

import { useState } from "react";
import {
  Shield,
  FileText,
  Database,
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
  Users,
} from "lucide-react";

const tabs = [
  { id: "customer", label: "Customer Terms", icon: Users },
  { id: "shopper", label: "Shopper Terms", icon: ShoppingBag },
  { id: "privacy", label: "Privacy Policy", icon: Shield },
  { id: "data", label: "Data Processing", icon: Database },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function PolicyContent() {
  const [active, setActive] = useState<TabId>("customer");

  return (
    <section className="pt-8 pb-16 sm:pt-12 sm:pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* ── Page Header ── */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/10">
            <Shield className="size-7 text-primary" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Terms &amp; Privacy Policy
          </h1>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Everything you need to know about using Beetech
          </p>
          <p className="mt-1 text-xs text-muted-foreground/60">
            Last updated: April 2026
          </p>
        </div>

        {/* ── Tab Navigation ── */}
        <div className="mb-8 sticky top-16 z-30 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-3 bg-background/80 backdrop-blur-md border-b border-border/40">
          <nav className="flex gap-1 overflow-x-auto no-scrollbar pb-0.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`
                    flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-2 text-xs sm:text-sm sm:px-4 sm:py-2.5 font-medium transition-all
                    ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }
                  `}
                >
                  <Icon className="size-3.5 sm:size-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* ── Tab Content ── */}
        <div className="min-h-[60vh]">
          {active === "customer" && <CustomerTerms />}
          {active === "shopper" && <ShopperTerms />}
          {active === "privacy" && <PrivacyPolicy />}
          {active === "data" && <DataProcessing />}
        </div>

        {/* ── Contact (always visible) ── */}
        <div className="mt-14 rounded-2xl border border-border/60 bg-gradient-to-br from-muted/30 to-muted/50 p-5 sm:p-8 lg:p-10">
          <h2 className="text-xl font-bold mb-1">Questions?</h2>
          <p className="text-sm text-muted-foreground mb-6">
            If you have any questions or concerns about our policies, reach out
            to us.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <ContactCard
              icon={Mail}
              label="Email"
              value="beetech24@gmail.com"
            />
            <ContactCard
              icon={Phone}
              label="Phone"
              value="+880 1324-763476"
            />
            <ContactCard
              icon={MapPin}
              label="Address"
              value="Abdul Karim Villa, 80/1 Purba Chanduna, Gazipur-1700"
            />
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Beetech Communication OPC. All
          rights reserved.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   Tab Sections
   ═══════════════════════════════════════════════ */

function CustomerTerms() {
  return (
    <article className="space-y-6">
      <TabHeader
        icon={Users}
        title="Customer Terms of Service"
        description="By using Beetech, you agree to comply with the following terms and conditions."
      />

      <ol className="list-none space-y-3 pl-0">
        <PolicyItem number={1}>
          Customers shall purchase all lawful products or services from Beetech
          outlets in accordance with the laws of Bangladesh.
        </PolicyItem>
        <PolicyItem number={2}>
          Customers will earn points as a specified percentage (%) of the profit
          from products or services purchased at the outlet, or a fixed amount
          as per the agreement.
        </PolicyItem>
        <PolicyItem number={3}>
          Points can only be earned through the purchase of products or
          services.
        </PolicyItem>
        <PolicyItem number={4}>
          A customer becomes a Club Member upon accumulating 100 points through
          purchases.
        </PolicyItem>
        <PolicyItem number={5}>
          Club Members are entitled to 2 types of income:
          <ul className="mt-2 ml-4 sm:ml-6 list-disc space-y-1 text-sm text-muted-foreground">
            <li>
              <strong>a) Club Income.</strong> Members become shareholders in the
              company&apos;s profits, up to the 10th bonus.
            </li>
            <li>
              <strong>b) Club Bonus.</strong> Members receive up to 15 bonuses
              progressively, based on the organization&apos;s sales, at non-fixed
              intervals.
            </li>
          </ul>
        </PolicyItem>
        <PolicyItem number={6}>
          A 5% service charge will be deducted on any withdrawal from any income
          system.
        </PolicyItem>
        <PolicyItem number={7}>
          Every purchase includes instant cashback.
        </PolicyItem>
        <PolicyItem number={8}>
          There is no fixed time limit for purchases, income, or bonuses as a
          customer. You can shop whenever you need.
        </PolicyItem>
        <PolicyItem number={9}>
          Customers must refrain from all activities that are contrary to the
          interests of the organization.
        </PolicyItem>
        <PolicyItem number={10}>
          If a registered customer engages in any activity contrary to the
          organization&apos;s interests or operates outside the designated system,
          immediate legal action will be taken against the customer.
        </PolicyItem>
        <PolicyItem number={11}>
          As a registered customer, you are obligated to abide by the rules and
          regulations of this organization.
        </PolicyItem>
        <PolicyItem number={12}>
          In the broader interest of the organization, the management reserves
          the right to change, amend, add, remove, or cancel any decision or
          policy at any time. No objections in this regard will be entertained.
        </PolicyItem>
        <PolicyItem number={13} highlight>
          <strong>Our Commitment</strong> — Beetech Communication OPC assures
          you of full cooperation and support.
        </PolicyItem>
      </ol>
    </article>
  );
}

function ShopperTerms() {
  return (
    <article className="space-y-6">
      <TabHeader
        icon={ShoppingBag}
        title="Shopper Terms of Service"
        description="By registering as a Beetech Shopper, you agree to comply with the following terms and conditions."
      />

      <ol className="list-none space-y-3 pl-0">
        <PolicyItem number={1}>
          Shoppers shall sell all lawful products or services from Beetech
          outlets in accordance with the laws of Bangladesh.
        </PolicyItem>
        <PolicyItem number={2}>
          Shoppers will earn points as a specified percentage (%) of the profit
          from products or services sold at the outlet, or a fixed amount as per
          the agreement.
        </PolicyItem>
        <PolicyItem number={3}>
          Points can only be earned through the sale of products or services.
        </PolicyItem>
        <PolicyItem number={4}>
          There is no fixed time limit for sales, income, or bonuses as a
          Shopper. You can sell whenever you need.
        </PolicyItem>
        <PolicyItem number={5}>
          Shoppers must refrain from all activities that are contrary to the
          interests of the organization.
        </PolicyItem>
        <PolicyItem number={6}>
          If a registered Shopper engages in any activity contrary to the
          organization&apos;s interests or operates outside the designated system,
          immediate legal action will be taken against the Shopper.
        </PolicyItem>
        <PolicyItem number={7}>
          As a registered Shopper, you are obligated to abide by the rules and
          regulations of this organization.
        </PolicyItem>
        <PolicyItem number={8}>
          In the broader interest of the organization, the management reserves
          the right to change, amend, add, remove, or cancel any decision or
          policy at any time. No objections in this regard will be entertained.
        </PolicyItem>
        <PolicyItem number={9} highlight>
          <strong>Our Commitment</strong> — Beetech Communication OPC assures
          you of full cooperation and support.
        </PolicyItem>
      </ol>
    </article>
  );
}

function PrivacyPolicy() {
  return (
    <article className="space-y-6">
      <TabHeader
        icon={Shield}
        title="Privacy Policy"
        description='Beetech Communication OPC ("Beetech", "we", "our") places the highest importance on your privacy. This Privacy Policy describes how we collect, use, store, and protect your personal information.'
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <InfoCard title="Information We Collect">
          <ul className="list-disc space-y-1.5 pl-4 text-sm text-muted-foreground">
            <li>
              <strong>Personal:</strong> Name, phone, email, NID, address
            </li>
            <li>
              <strong>Transactions:</strong> Purchase history, points, bonuses
            </li>
          </ul>
        </InfoCard>

        <InfoCard title="Purpose of Data Usage">
          <ul className="list-disc space-y-1.5 pl-4 text-sm text-muted-foreground">
            <li>Account creation &amp; management</li>
            <li>Points, bonus &amp; income system operations</li>
            <li>Transaction verification &amp; security</li>
            <li>Customer service &amp; issue resolution</li>
            <li>Promotional updates (with consent)</li>
            <li>Legal compliance</li>
          </ul>
        </InfoCard>

        <InfoCard title="Data Storage & Security">
          <p className="text-sm text-muted-foreground">
            We use secure servers with industry-standard encryption. Only
            authorized personnel access data. Information is retained while your
            account is active or as required by law.
          </p>
        </InfoCard>

        <InfoCard title="Third-Party Sharing">
          <ul className="list-disc space-y-1.5 pl-4 text-sm text-muted-foreground">
            <li>Legal orders or government directives</li>
            <li>Payment partners (bKash, Upay) for transactions only</li>
            <li>Service providers under strict confidentiality</li>
          </ul>
        </InfoCard>
      </div>

      <InfoCard title="Your Rights" fullWidth>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "View and correct your information",
            "Request account deletion (subject to law)",
            "Unsubscribe from promotional messages",
            "Know how your data is being used",
          ].map((right) => (
            <div
              key={right}
              className="flex items-start gap-2.5 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              {right}
            </div>
          ))}
        </div>
      </InfoCard>
    </article>
  );
}

function DataProcessing() {
  return (
    <article className="space-y-6">
      <TabHeader
        icon={Database}
        title="Data Processing Policy"
        description="Formulated in accordance with international data protection standards."
      />

      {/* Data table */}
      {/* Mobile: stacked cards / Desktop: table */}
      <div className="hidden sm:block overflow-x-auto rounded-xl border border-border/60">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted/60">
              <th className="p-4 text-left font-semibold text-foreground">
                Data Type
              </th>
              <th className="p-4 text-left font-semibold text-foreground">
                Purpose
              </th>
              <th className="p-4 text-left font-semibold text-foreground">
                Tracking?
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {[
              ["Name & Contact Info", "Account creation & management"],
              ["Phone Number", "Identity verification & OTP"],
              ["Email Address", "Account recovery & notifications"],
              ["Purchase History", "Point calculation & bonus allocation"],
            ].map(([type, purpose], i) => (
              <tr
                key={i}
                className="border-t border-border/40 hover:bg-muted/30 transition-colors"
              >
                <td className="p-4 font-medium text-foreground/80">{type}</td>
                <td className="p-4">{purpose}</td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    No
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="sm:hidden space-y-3">
        {[
          ["Name & Contact Info", "Account creation & management"],
          ["Phone Number", "Identity verification & OTP"],
          ["Email Address", "Account recovery & notifications"],
          ["Purchase History", "Point calculation & bonus allocation"],
        ].map(([type, purpose], i) => (
          <div
            key={i}
            className="rounded-xl border border-border/40 bg-card p-4 space-y-2"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">{type}</p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                No
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{purpose}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <InfoCard title="Legal Basis">
          <ul className="list-disc space-y-1.5 pl-4 text-sm text-muted-foreground">
            <li>
              <strong>Consent:</strong> Voluntarily provided during registration
            </li>
            <li>
              <strong>Contract:</strong> Essential for service delivery
            </li>
            <li>
              <strong>Legal:</strong> Bangladesh Digital Security Act compliance
            </li>
          </ul>
        </InfoCard>

        <InfoCard title="Retention Period">
          <ul className="list-disc space-y-1.5 pl-4 text-sm text-muted-foreground">
            <li>Retained while account is active</li>
            <li>Deleted within 30 days of closure request</li>
            <li>ID numbers kept for serial tracking</li>
            <li>Transaction records per legal requirements</li>
          </ul>
        </InfoCard>

        <InfoCard title="Data Transfer">
          <p className="text-sm text-muted-foreground">
            Data is stored on GDPR-compliant EU servers with industry-standard
            encryption and security protocols ensuring the highest level of
            protection.
          </p>
        </InfoCard>

        <InfoCard title="User Eligibility">
          <p className="text-sm text-muted-foreground">
            All ages may use our services. Minors should use the service under
            parental supervision. All user data is equally protected.
          </p>
        </InfoCard>

        <InfoCard title="Data Deletion">
          <p className="text-sm text-muted-foreground">
            Request deletion via &quot;Delete Account&quot; in app settings or contact us.
            Personal data is removed within 30 days. ID numbers are retained for
            system management.
          </p>
        </InfoCard>

        <InfoCard title="Cookies & Tracking">
          <p className="text-sm text-muted-foreground">
            We may use cookies for functionality. No third-party ad tracking. No
            tracking without your permission.
          </p>
        </InfoCard>
      </div>

      <InfoCard title="Policy Changes" fullWidth>
        <p className="text-sm text-muted-foreground">
          We may update this policy periodically. Significant changes will be
          communicated through the app. Continued use after changes constitutes
          acceptance.
        </p>
      </InfoCard>
    </article>
  );
}

/* ═══════════════════════════════════════════════
   Shared Components
   ═══════════════════════════════════════════════ */

function TabHeader({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border border-primary/10 p-5 sm:p-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="size-4 sm:size-5 text-primary" />
        </div>
        <h2 className="text-lg sm:text-2xl font-bold">{title}</h2>
      </div>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function PolicyItem({
  number,
  children,
  highlight,
}: {
  number: number;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <li
      className={`flex gap-3 sm:gap-4 rounded-xl p-3 sm:p-4 transition-colors ${
        highlight
          ? "bg-primary/5 border border-primary/15"
          : "hover:bg-muted/50"
      }`}
    >
      <span className="flex size-7 sm:size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
        {number}
      </span>
      <span className="text-sm sm:text-base leading-relaxed text-muted-foreground pt-0.5">
        {children}
      </span>
    </li>
  );
}

function InfoCard({
  title,
  children,
  fullWidth,
}: {
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`rounded-xl sm:rounded-2xl border border-border/40 bg-card p-4 sm:p-6 transition-colors hover:border-border/60 ${
        fullWidth ? "sm:col-span-2" : ""
      }`}
    >
      <h3 className="text-sm font-semibold text-foreground mb-2 sm:mb-3">{title}</h3>
      {children}
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-background/60 p-4">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="size-4 text-primary" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-muted-foreground/70">{label}</p>
        <p className="text-sm font-medium text-foreground break-words">
          {value}
        </p>
      </div>
    </div>
  );
}
