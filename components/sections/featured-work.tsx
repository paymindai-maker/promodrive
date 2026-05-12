"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PretextDOM } from "@/components/pretext-render";

const projects = [
  {
    title: "Premium Events Brand Experience",
    client: "Mitera Events",
    category: "Web Design & Branding",
    description:
      "Crafted a high-impact brand presence showcasing portfolio, media presence, and premium services. Immersive copywriting and storytelling for a refined visual diary.",
    tags: ["Web Design", "Branding", "Copywriting"],
    color: "bg-dark-teal",
    link: "https://miteraedge.com/",
    type: "Website",
    featured: true,
  },
  {
    title: "Smart Calorie Tracking App",
    client: "Caloriz Tracker",
    category: "App Development",
    description:
      "Scalable calorie tracking app with barcode-based food logging, personalised meal planning, and intuitive UX.",
    tags: ["App Dev", "UI/UX", "Product Design"],
    color: "bg-primary",
    link: "https://play.google.com/store/apps/details?id=com.bhoomitechzone.caloriz&hl=en_IN",
    type: "Mobile App",
    featured: false,
  },
  {
    title: "Real Estate Listings Platform",
    client: "GharPlot",
    category: "App Development",
    description:
      "User-friendly mobile app with verified listings, virtual tours, smart filters, and direct buyer-seller communication.",
    tags: ["App Dev", "PropTech", "UI/UX"],
    color: "bg-salmon",
    link: "https://play.google.com/store/apps/details?id=com.bhoomitechzone.gharplot&hl=en_IN",
    type: "Mobile App",
    featured: false,
  },
  {
    title: "Property Rental Management App",
    client: "Kirayedar24",
    category: "App Development",
    description:
      "Streamlined rental platform with verified listings, direct communication, and smooth digital transactions.",
    tags: ["App Dev", "PropTech", "UI/UX"],
    color: "bg-dark-teal",
    link: "https://play.google.com/store/apps/details?id=com.bhoomitechzone.kirayedar24&hl=en_IN",
    type: "Mobile App",
    featured: false,
  },
  {
    title: "EV Charging Smart Platform",
    client: "EV Smart",
    category: "App Development",
    description:
      "Smart EV charging platform with live station tracking, slot booking, payment integration, and real-time updates.",
    tags: ["App Dev", "EV Tech", "Smart Platform"],
    color: "bg-dark-teal",
    link: "https://play.google.com/store/apps/details?id=hash.code.evsmart",
    type: "Mobile App",
    featured: false,
  },
  {
    title: "Telemedicine & Healthcare App",
    client: "DoctCare Services",
    category: "App Development",
    description:
      "Telemedicine platform enabling online consultations, appointment scheduling, digital prescriptions, and health records.",
    tags: ["App Dev", "HealthTech", "Telemedicine"],
    color: "bg-primary",
    link: "https://play.google.com/store/apps/details?id=bhoomi.app.doctcare.doctcare_app",
    type: "Mobile App",
    featured: false,
  },
  {
    title: "Cancer Patient Healthcare Ecosystem",
    client: "OncaSol Healthcare",
    category: "Web Design & E-Commerce",
    description:
      "Healthcare ecosystem integrating e-commerce, telemedicine portal, service listings, and content-focused solutions.",
    tags: ["Web Design", "E-Commerce", "HealthTech"],
    color: "bg-salmon",
    link: "https://oncasol.com/",
    type: "Website",
    featured: false,
  },
  {
    title: "EdTech Certification Platform",
    client: "SkillsBoost",
    category: "Web Development",
    description:
      "Scalable edtech platform with certification programs, smooth learning experience, and career-focused skill development.",
    tags: ["Web Dev", "EdTech", "UI/UX"],
    color: "bg-dark-teal",
    link: "https://www.skillsboost.in/",
    type: "Website",
    featured: false,
  },
  {
    title: "Ayurveda Wellness Platform",
    client: "Medix Ayurveda",
    category: "Web Design & Content",
    description:
      "Informative Ayurveda-focused platform listing herbal wellness products, handling enquiries, and educating users.",
    tags: ["Web Design", "E-Commerce", "Content"],
    color: "bg-primary",
    link: "https://magical-snickerdoodle-6274d5.netlify.app/",
    type: "Website",
    featured: false,
  },
];

const featured = projects[0];
const rest = projects.slice(1);

export function FeaturedWorkSection() {
  return (
    <section id="work" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium tracking-wider text-primary uppercase">
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
          <p className="heading-serif text-6xl text-muted-foreground/20 sm:text-8xl lg:text-9xl">
            2025
          </p>
        </div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative mb-8 overflow-hidden rounded-3xl"
        >
          <Link href={featured.link} target="_blank" rel="noopener noreferrer">
            <div className={`${featured.color} relative aspect-[16/9] sm:aspect-[21/9]`}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
              <div className="absolute top-8 right-8 flex items-center gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                  {featured.type}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all group-hover:bg-white group-hover:text-dark-teal">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="absolute bottom-0 left-0 p-8 sm:p-12">
                <p className="text-sm font-medium text-white/60 uppercase tracking-wider">
                  PROJECT 01 · {featured.category}
                </p>
                <h3 className="heading-serif mt-2 text-2xl text-white sm:text-4xl">
                  {featured.client}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">
                  {featured.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-full border-none bg-white/10 text-white hover:bg-white/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <motion.div
              key={project.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg hover:border-primary/20"
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <div className={`${project.color} relative aspect-[16/9]`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="heading-serif text-2xl text-white/20">
                      {project.client}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-black/20 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    PROJECT 0{i + 2} · {project.category}
                  </p>
                  <h3 className="heading-serif mt-2 text-lg">{project.client}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full text-xs">
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
