"use client";

import { motion } from "framer-motion";
import { PretextDOM } from "@/components/pretext-render";
import { Mail, MapPin, Phone } from "lucide-react";
import Script from "next/script";

export function CTASection() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl bg-dark-teal"
        >
          <div className="grid lg:grid-cols-[1fr_1.4fr]">
            {/* Left — Copy + Contact Info */}
            <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16">
              <div>
                <p className="text-sm font-medium tracking-wider text-salmon uppercase">
                  Book a Call
                </p>
                <PretextDOM
                  text="You have got questions? Connect with us for more clarity."
                  font="400 44px Prata"
                  lineHeight={52}
                  className="heading-serif mt-4 text-3xl leading-snug text-white sm:text-4xl lg:text-5xl"
                  as="h2"
                />
                <p className="mt-5 text-base leading-relaxed text-white/60">
                  Reach out to us directly, schedule a free call. None of your
                  questions will go unanswered.
                </p>
              </div>

              <div className="mt-12 space-y-6">
                {/* Divider */}
                <div className="h-px w-full bg-white/10" />

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <MapPin className="h-4 w-4 text-salmon" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white/40 uppercase tracking-wider">
                        Office
                      </p>
                      <p className="mt-0.5 text-sm text-white/80">
                        Creative Hub, Digital District, New Delhi, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <Mail className="h-4 w-4 text-salmon" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white/40 uppercase tracking-wider">
                        Email
                      </p>
                      <a
                        href="mailto:hello@promodrive.in"
                        className="mt-0.5 text-sm text-white/80 transition-colors hover:text-white"
                      >
                        hello@promodrive.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <Phone className="h-4 w-4 text-salmon" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white/40 uppercase tracking-wider">
                        Phone
                      </p>
                      <a
                        href="tel:+919800000000"
                        className="mt-0.5 text-sm text-white/80 transition-colors hover:text-white"
                      >
                        +91 98XX XXX XXX
                      </a>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-white/10" />

                <div className="flex gap-3">
                  {["In", "Ig", "Tw"].map((s) => (
                    <span
                      key={s}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-medium text-white/60 transition-colors hover:border-white/30 hover:text-white cursor-pointer"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-white/30">
                  Terms & Conditions &nbsp;&middot;&nbsp; Privacy Policy
                </p>
              </div>
            </div>

            {/* Right — Calendly Widget */}
            <div className="relative border-t border-white/10 lg:border-t-0 lg:border-l">
              {/* Subtle gradient overlay at top */}
              <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-dark-teal/60 to-transparent z-10 pointer-events-none" />

              <div className="h-full min-h-[600px] lg:min-h-[700px]">
                <div
                  className="calendly-inline-widget h-full w-full"
                  data-url="https://calendly.com/promodrive-info/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0d2f38&text_color=ffffff&primary_color=e07b6a"
                  style={{ minWidth: "320px", height: "700px" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
