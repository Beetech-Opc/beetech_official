import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-gradient-to-b from-background to-muted/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-bold text-sm shadow-md">
                B
              </div>
              <span className="text-lg font-bold tracking-tight">
                Beetech <span className="text-primary">World</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A complete digital commerce and entrepreneurship platform empowering shoppers, shop owners, and investors.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-primary transition-colors">
                  Data Processing Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 mt-0.5 shrink-0 text-primary/60" />
                <span>Abdul Karim Villa, 80/1 Purba Chanduna, Shibbari Mor, Gazipur Sadar, Gazipur-1700</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary/60" />
                <span>+880 1324-763476</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-primary/60" />
                <span>beetechopc@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Beetech Communication OPC. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Crafted with care in Bangladesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
