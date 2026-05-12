import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "#" },
    { label: "SEO", href: "#" },
    { label: "Google Ads", href: "#" },
    { label: "Meta Ads", href: "#" },
    { label: "Social Media", href: "#" },
    { label: "Content & Creative", href: "#" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#work" },
    { label: "FAQ", href: "#faq" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <div className="relative h-11 w-44 overflow-hidden">
                <Image
                  src="/logos/PromoDrive Logo.png"
                  alt="Promodrive Branding Lab"
                  fill
                  className="object-cover object-[center_52%]"
                  sizes="176px"
                />
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              We build high-converting websites and growth-focused digital
              marketing systems for modern brands.
            </p>
            <div className="mt-6 flex gap-3">
              {["In", "Ig", "X", "Dr"].map((social) => (
                <span
                  key={social}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-sm font-semibold">{title}</p>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Promodrive. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
