"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl bg-dark-teal"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left - Copy */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <h2 className="heading-serif text-3xl leading-snug text-white sm:text-4xl lg:text-5xl">
                Optimize every marketing dollar
              </h2>
              <p className="mt-4 text-white/70">
                Ready to grow? Let&apos;s talk about your goals and build a
                strategy that delivers real results. No commitments — just a
                conversation.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm text-white/60">
                      Name
                    </label>
                    <Input
                      placeholder="Your name"
                      className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-salmon"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-white/60">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-salmon"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-white/60">
                    Tell us about your project
                  </label>
                  <Textarea
                    placeholder="What are you looking to achieve?"
                    rows={4}
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-salmon"
                  />
                </div>
                <Button
                  size="lg"
                  className="group mt-2 w-full gap-2 rounded-full bg-white text-dark-teal hover:bg-white/90 sm:w-auto"
                >
                  Get Started
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </div>
            </div>

            {/* Right - Info */}
            <div className="flex flex-col justify-between border-t border-white/10 p-8 sm:p-12 lg:border-t-0 lg:border-l lg:p-16">
              <div className="space-y-8">
                <div>
                  <p className="text-sm font-medium text-white/50">
                    Social Media
                  </p>
                  <div className="mt-3 flex gap-4">
                    {["Instagram", "LinkedIn", "Twitter", "Dribbble"].map(
                      (social) => (
                        <span
                          key={social}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs text-white/70 transition-colors hover:border-white/30 hover:text-white"
                        >
                          {social[0]}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-white/50">
                    Our Office
                  </p>
                  <p className="mt-2 text-white/80">
                    Creative Hub, Digital District
                    <br />
                    New Delhi, India
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-white/50">Contact</p>
                  <p className="mt-2 text-white/80">
                    hello@promodrive.in
                    <br />
                    +91 98XX XXX XXX
                  </p>
                </div>
              </div>

              <div className="mt-12 border-t border-white/10 pt-6">
                <p className="text-xs text-white/40">
                  Terms & Conditions &nbsp;·&nbsp; Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
