"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Youtube, ArrowRight } from "lucide-react"

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.97-1.561 4.78 4.78 0 0 1-1.236-3.18H10.45v13.62a3.292 3.292 0 0 1-3.29 3.29 3.29 3.29 0 0 1-3.29-3.29c0-1.815 1.476-3.29 3.29-3.29.35 0 .69.056 1.01.16v-4.16a7.284 7.284 0 0 0-1.01-.07 7.49 7.49 0 1 0 7.5 7.49V10.15a8.777 8.777 0 0 0 4.929 1.516v-4.98z"/>
  </svg>
)

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
}

export function ExploreBioStyles() {
  return (
    <section className="relative mx-auto max-w-4xl pt-4 pb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12 space-y-4 flex flex-col items-center"
      >
        <h2 className="section__h2 text-foreground">
          Explore Bio Styles for Every Identity
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Tailored ideas and premium templates designed specifically for every type of profile, niche, and personal brand.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col border-t border-border"
      >
        {/* Instagram Row */}
        <motion.div variants={itemVariants}>
          <Link 
            href="/instagram-bio-generator" 
            className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 border-b border-border transition-colors hover:bg-muted/30 px-4 md:px-6 -mx-4 md:-mx-6 rounded-2xl"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Instagram className="h-6 w-6 text-primary" />
              </div>
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold mb-2 text-foreground tracking-tight group-hover:text-primary transition-colors">
                  Instagram Bio Generator
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Need the perfect bio for your Instagram grid? Our tool creates highly converting, aesthetic profile descriptions tailored perfectly for the platform's constraints and features.
                </p>
              </div>
            </div>
            <div className="shrink-0 hidden md:flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
              <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </Link>
        </motion.div>

        {/* TikTok Row */}
        <motion.div variants={itemVariants}>
          <Link 
            href="/tiktok-bio-generator" 
            className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 border-b border-border transition-colors hover:bg-muted/30 px-4 md:px-6 -mx-4 md:-mx-6 rounded-2xl"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <TikTokIcon className="h-6 w-6 text-primary" />
              </div>
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold mb-2 text-foreground tracking-tight group-hover:text-primary transition-colors">
                  TikTok Bio Generator
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  TikTok requires punchy, engaging bios that grab attention instantly. Craft the ultimate short-form profile description to match your viral content.
                </p>
              </div>
            </div>
            <div className="shrink-0 hidden md:flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
              <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </Link>
        </motion.div>

        {/* YouTube Row */}
        <motion.div variants={itemVariants}>
          <Link 
            href="/youtube-bio-generator" 
            className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 border-b border-border transition-colors hover:bg-muted/30 px-4 md:px-6 -mx-4 md:-mx-6 rounded-2xl"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Youtube className="h-6 w-6 text-primary" />
              </div>
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold mb-2 text-foreground tracking-tight group-hover:text-primary transition-colors">
                  YouTube Bio Generator
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Establish authority and drive channel subscriptions. Create compelling, SEO-friendly bios to turn viewers into loyal subscribers.
                </p>
              </div>
            </div>
            <div className="shrink-0 hidden md:flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
              <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  )
}
