"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Promodrive completely transformed our online presence. Our sales skyrocketed within months. Their data-driven approach and creative execution exceeded all expectations.",
    name: "Cameron Williamson",
    role: "CEO, Pioneer Capital",
    initials: "CW",
  },
  {
    quote:
      "Working with Promodrive was a game-changer. They built us a stunning website and ran ads that actually converted. Transparent, strategic, and always a step ahead.",
    name: "Jenny Wilson",
    role: "CEO, TechVu Circle",
    initials: "JW",
  },
  {
    quote:
      "From SEO to social media, Promodrive handles everything with precision. Our organic traffic grew 300% in 6 months. Best marketing investment we've made.",
    name: "Robert Chen",
    role: "Founder, ModernHome",
    initials: "RC",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium tracking-wider text-primary uppercase">
            Testimonials
          </p>
          <h2 className="heading-serif mt-3 text-3xl sm:text-4xl lg:text-5xl">
            What our clients say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 lg:p-8"
            >
              <div>
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="h-4 w-4 fill-amber-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-teal text-xs font-semibold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
