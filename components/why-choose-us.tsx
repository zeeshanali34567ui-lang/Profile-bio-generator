"use client"

import { Gauge, Fingerprint, TrendingUp, Unlock } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Gauge,
    title: "Lightning-Fast Results",
    description: "Generate dozens of polished, ready-to-use bios in under three seconds. No waiting, no loading screens.",
  },
  {
    icon: Fingerprint,
    title: "100% Unique Outputs",
    description: "Our AI produces fresh, original content every time. No recycled lists, no copy-paste libraries.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-Optimized",
    description: "Every template is crafted using proven copywriting psychology to actively drive follows and clicks.",
  },
  {
    icon: Unlock,
    title: "Free Forever",
    description: "No hidden fees, no premium tiers, no sign-up walls. Access the full power of our tool at absolutely zero cost.",
  }
]

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

export function WhyChooseUs() {
  return (
    <section className="relative mx-auto max-w-5xl pb-16">

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="section__h2 text-foreground">
          Why Choose Us
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          In a crowded market of generic bio tools, we stand apart by delivering quality, speed, and genuine value through advanced AI.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-x-12 gap-y-16"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="group flex flex-col sm:flex-row gap-6 items-start"
          >
            <div className="shrink-0 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-md group-hover:bg-primary/20">
              <feature.icon className="h-8 w-8" />
            </div>
            
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
