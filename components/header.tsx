"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, ArrowUpRight, Sun, Moon } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="h-9 w-9"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-40 overflow-hidden lg:h-12 lg:w-48">
            <Image
              src="/logos/PromoDrive Logo.png"
              alt="Promodrive Branding Lab"
              fill
              priority
              className="object-cover object-[center_52%]"
              sizes="(max-width: 1024px) 160px, 192px"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Theme Toggle */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button
            variant="default"
            className="group gap-2 rounded-full bg-foreground px-6 text-background hover:bg-foreground/90"
            asChild
          >
            <Link href="#contact">
              Book a Call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile: Theme Toggle + Menu */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetTitle>
                <div className="relative h-10 w-40 overflow-hidden">
                  <Image
                    src="/logos/PromoDrive Logo.png"
                    alt="Promodrive Branding Lab"
                    fill
                    className="object-cover object-[center_52%]"
                    sizes="160px"
                  />
                </div>
              </SheetTitle>
              <nav className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  className="mt-4 w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
                  asChild
                >
                  <Link href="#contact" onClick={() => setOpen(false)}>
                    Book a Call
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
