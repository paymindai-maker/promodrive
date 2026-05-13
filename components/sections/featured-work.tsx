"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PretextDOM } from "@/components/pretext-render";

const projects = [
  {
    client: "Mitera Events",
    category: "Web Design & Branding",
    description:
      "Crafted a high-impact brand presence showcasing portfolio, media presence, and premium services.",
    tags: ["Web Design", "Branding", "Copywriting"],
    link: "https://miteraedge.com/",
    type: "Website",
    featured: true,
    theme: "teal",
  },
  {
    client: "Caloriz Tracker",
    category: "App Development",
    description:
      "Scalable calorie tracking app with barcode-based food logging and personalised meal planning.",
    tags: ["App Dev", "UI/UX", "Product Design"],
    link: "https://play.google.com/store/apps/details?id=com.bhoomitechzone.caloriz&hl=en_IN",
    type: "Mobile App",
    featured: false,
    theme: "blue",
  },
  {
    client: "GharPlot",
    category: "App Development",
    description:
      "Real estate platform with verified listings and buyer-seller communication.",
    tags: ["App Dev", "PropTech", "UI/UX"],
    link: "https://play.google.com/store/apps/details?id=com.bhoomitechzone.gharplot&hl=en_IN",
    type: "Mobile App",
    featured: false,
    theme: "orange",
  },
  {
    client: "Kirayedar24",
    category: "App Development",
    description:
      "Rental platform with smooth transactions and modern communication.",
    tags: ["App Dev", "PropTech", "UI/UX"],
    link: "https://play.google.com/store/apps/details?id=com.bhoomitechzone.kirayedar24&hl=en_IN",
    type: "Mobile App",
    featured: false,
    theme: "purple",
  },
  {
    client: "EV Smart",
    category: "App Development",
    description:
      "EV charging platform with real-time tracking and smart station discovery.",
    tags: ["App Dev", "EV Tech", "Smart Platform"],
    link: "https://play.google.com/store/apps/details?id=hash.code.evsmart",
    type: "Mobile App",
    featured: false,
    theme: "green",
  },
  {
    client: "DoctCare",
    category: "HealthTech Platform",
    description:
      "Telemedicine platform enabling online consultations and scheduling.",
    tags: ["HealthTech", "Telemedicine", "App Dev"],
    link: "https://play.google.com/store/apps/details?id=bhoomi.app.doctcare.doctcare_app",
    type: "Mobile App",
    featured: false,
    theme: "cyan",
  },
];

const featured = projects[0];
const rest = projects.slice(1);

const themeMap = {
  teal: {
    glow: "bg-cyan-500/20",
    accent: "bg-cyan-400",
    text: "text-cyan-500 dark:text-cyan-300",
  },
  blue: {
    glow: "bg-blue-500/20",
    accent: "bg-blue-400",
    text: "text-blue-500 dark:text-blue-300",
  },
  orange: {
    glow: "bg-orange-500/20",
    accent: "bg-orange-400",
    text: "text-orange-500 dark:text-orange-300",
  },
  purple: {
    glow: "bg-violet-500/20",
    accent: "bg-violet-400",
    text: "text-violet-500 dark:text-violet-300",
  },
  green: {
    glow: "bg-emerald-500/20",
    accent: "bg-emerald-400",
    text: "text-emerald-500 dark:text-emerald-300",
  },
  cyan: {
    glow: "bg-sky-500/20",
    accent: "bg-sky-400",
    text: "text-sky-500 dark:text-sky-300",
  },
};

function FeaturedProjectVisual({
  client,
  type,
  theme,
}: {
  client: string;
  type: string;
  theme: keyof typeof themeMap;
}) {
  const styles = themeMap[theme];

  return (
    <div className="relative aspect-[21/9] overflow-hidden bg-background">
      {/* grid */}
      <div className="absolute inset-0 bg-[size:42px_42px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]" />

      {/* ambient glows */}
      <div
        className={`absolute left-[18%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full blur-[120px] ${styles.glow}`}
      />

      <div
        className={`absolute right-[18%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full blur-[120px] ${styles.glow}`}
      />

      {/* top ui */}
      <div className="absolute left-7 top-7 z-20">
        <div className="rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-sm font-medium text-black/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:text-white/70">
          {type}
        </div>
      </div>

      {/* center visual */}
      <div className="absolute inset-0 flex items-center justify-center pb-24">
        <div className="relative scale-[0.9] lg:scale-100">
          {/* bars */}
          <div className="absolute -left-20 top-1/2 flex -translate-y-1/2 items-end gap-2">
            {[38, 64, 92, 56].map((height) => (
              <div
                key={height}
                className={`w-3 rounded-full ${styles.accent}`}
                style={{ height }}
              />
            ))}
          </div>

          {/* typography */}
          <div className="text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-black/30 dark:text-white/30">
              Digital Experience
            </p>

            <h2 className="heading-serif text-5xl text-foreground dark:text-white lg:text-7xl">
              {client}
            </h2>

            <p className={`mt-5 text-sm ${styles.text}`}>
              Strategy · Design · Growth
            </p>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

function ProjectCardVisual({
  client,
  type,
  theme,
}: {
  client: string;
  type: string;
  theme: keyof typeof themeMap;
}) {
  const styles = themeMap[theme];

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-background">
      {/* grid */}
      <div className="absolute inset-0 bg-[size:36px_36px] dark:bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)]" />

      {/* glow */}
      <div
        className={`absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${styles.glow}`}
      />

      {/* top */}
      <div className="absolute left-4 top-4">
        <div className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-medium text-black/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:text-white/70">
          {type}
        </div>
      </div>

      {/* center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-5 flex items-end gap-1.5">
          {[30, 48, 64, 40].map((height) => (
            <div
              key={height}
              className={`w-1.5 rounded-full ${styles.accent}`}
              style={{ height }}
            />
          ))}
        </div>

        <h3 className="heading-serif text-3xl text-foreground dark:text-white">
          {client}
        </h3>

        <p className={`mt-3 text-xs uppercase tracking-[0.25em] ${styles.text}`}>
          Digital Platform
        </p>
      </div>

      {/* fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

export function FeaturedWorkSection() {
  return (
    <section
      id="work"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* ambient bg */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* header */}
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
              Our Work
            </p>

            <PretextDOM
              text="Projects we're proud of"
              font="400 48px Prata"
              lineHeight={56}
              className="heading-serif mt-3 text-3xl sm:text-4xl lg:text-5xl"
              as="h2"
            />
          </div>

          <p className="heading-serif text-6xl text-muted-foreground/10 sm:text-8xl lg:text-9xl">
            2025
          </p>
        </div>

        {/* featured */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group mb-8 overflow-hidden rounded-[32px] border border-black/10 bg-card/30 backdrop-blur-xl dark:border-white/10"
        >
          <Link
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative">
              <FeaturedProjectVisual
                client={featured.client}
                type={featured.type}
                theme={featured.theme as keyof typeof themeMap}
              />

              {/* arrow */}
              <div className="absolute right-7 top-7 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] text-foreground backdrop-blur-xl transition-all duration-300 group-hover:scale-105 dark:border-white/10 dark:bg-black/30 dark:text-white group-hover:dark:bg-white group-hover:dark:text-black">
                <ArrowUpRight className="h-4 w-4" />
              </div>

              {/* content */}
              <div className="absolute bottom-0 left-0 z-20 max-w-2xl p-8 sm:p-12">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
                  PROJECT 01 · {featured.category}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {featured.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="rounded-full border border-black/10 bg-black/[0.03] text-foreground hover:bg-black/[0.06] dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.08]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <motion.div
              key={project.client}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
              }}
              className="group overflow-hidden rounded-[28px] border border-black/10 bg-card/30 backdrop-blur-xl transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 dark:border-white/10"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* visual */}
                <div className="relative">
                  <ProjectCardVisual
                    client={project.client}
                    type={project.type}
                    theme={project.theme as keyof typeof themeMap}
                  />

                  {/* arrow */}
                  <div className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] text-foreground opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:opacity-100 dark:border-white/10 dark:bg-black/30 dark:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* content */}
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    PROJECT 0{i + 2} · {project.category}
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full border border-black/10 bg-black/[0.03] text-xs text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:text-white/80"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}