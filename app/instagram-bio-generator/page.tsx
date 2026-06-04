import { Metadata } from "next"
import Link from "next/link"
import { BioGeneratorTool } from "@/components/bio-generator-tool"
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/animated-ui"
import { FaqAccordion } from "@/components/faq-accordion"
import { Sparkles, CheckCircle2 } from "lucide-react"
import { SeoContent } from "@/components/seo-content"
import { ExploreBioStyles } from "@/components/explore-bio-styles"

export const metadata: Metadata = {
  title: "Instagram Bio Generator – Create Unique Bios Instantly",
  description:
    "Discover the best instagram bio ideas and generate stunning, high-converting bios in seconds. Free AI-powered tool for aesthetic, stylish, and professional profiles.",
  alternates: {
    canonical: "/instagram-bio-generator",
  },
}

export default function InstagramBioGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Instagram Bio Generator",
            url: "https://profilebiogenerator.site/instagram-bio-generator",
          }),
        }}
      />

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay"></div>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-transparent text-foreground space-y-32 overflow-hidden">

        {/* ============================================================
            1. HERO SECTION & TOOL (TOOL-FIRST DESIGN)
        ============================================================ */}
        <section id="generator-tool" className="relative mt-8 flex flex-col items-center justify-center space-y-12 scroll-mt-24">
          <div className="text-center space-y-10 z-10 w-full max-w-4xl mx-auto pb-4">
            
            {/* H1 — Instagram Specific */}
            <h1 className="pt-12 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance font-serif text-foreground leading-[1.05]">
              Instagram Bio Generator
            </h1>

            {/* INTRO PARAGRAPH */}
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground text-pretty font-sans leading-relaxed">
              Looking for the perfect Instagram bio? Our dedicated ig bio generator crafts unique, aesthetic, and highly converting profile descriptions in seconds for your Instagram profile.
            </p>
          </div>

          <div className="w-full">
            <div className="relative rounded-3xl bg-background border border-border shadow-sm p-2 sm:p-4">
              <BioGeneratorTool platform="Instagram" />
            </div>
          </div>
        </section>

        {/* ============================================================
            1.5 HOW TO USE (INSTAGRAM SPECIFIC)
        ============================================================ */}
        <section className="mx-auto max-w-5xl scroll-mt-24">
          <div className="text-center mb-16 space-y-4 flex flex-col items-center">
            <h2 className="section__h2 text-foreground">
              How to Use the Instagram Bio Generator
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your Instagram bio is your digital elevator pitch. Here is how to nail it in three steps.
            </p>
          </div>

          <div className="flex flex-col gap-12 relative max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 md:w-3/4 items-start">
              <div className="text-7xl font-bold text-primary/20 select-none font-serif leading-none -mt-2">01</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Define Your Aesthetic</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Select your specific Instagram category and preferred tone. Whether you want an aesthetic, funny, or professional vibe, the AI adapts instantly.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 md:w-3/4 items-start">
              <div className="text-7xl font-bold text-primary/20 select-none font-serif leading-none -mt-2">02</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Generate Options</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Click generate to instantly receive a list of custom bios. The AI automatically structures them with line breaks and strategic emojis.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 md:w-3/4 items-start relative">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 hidden md:block"></div>
              <div className="text-7xl font-bold text-primary/20 select-none font-serif leading-none -mt-2">03</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Copy & Update Profile</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Find your favorite result, copy it to your clipboard, and paste it directly into your Instagram 'Edit Profile' section.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            UNIQUE SECTION (INSTAGRAM) - ANATOMY OF A BIO
        ============================================================ */}
        <section className="mx-auto max-w-5xl scroll-mt-24">
          <div className="text-center mb-16 space-y-4 flex flex-col items-center">
            <h2 className="section__h2 text-foreground">
              Anatomy of the Perfect Bio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every character counts. Here is how our AI structures your profile for maximum conversions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative px-4 sm:px-0">
            <div className="absolute -top-10 -right-10 text-primary/5 -z-10 hidden sm:block">
              <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </div>
            
            <div className="space-y-12 relative z-10 border-l-2 border-primary/20 pl-8 ml-4">
              {/* Row 1 */}
              <div className="relative">
                <div className="absolute -left-[2.85rem] top-1 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold ring-4 ring-background">1</div>
                <h4 className="text-foreground font-bold text-xl mb-2">The Hook (First Line)</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">Grabs attention immediately. States exactly who you are or what your page is about before the 'Read More' cut-off.</p>
              </div>
              
              {/* Row 2 */}
              <div className="relative">
                <div className="absolute -left-[2.85rem] top-1 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold ring-4 ring-background">2</div>
                <h4 className="text-foreground font-bold text-xl mb-2">The Value Prop (Middle)</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">Explains why they should follow you. Uses strategic emojis as visual bullet points to break up the text.</p>
              </div>

              {/* Row 3 */}
              <div className="relative">
                <div className="absolute -left-[2.85rem] top-1 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold ring-4 ring-background">3</div>
                <h4 className="text-foreground font-bold text-xl mb-2">The Call to Action (Bottom)</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">A direct command (e.g., 'Shop the sale 👇') pointing downwards to drive traffic to your Link-in-Bio.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            2. EXPLORE STYLES
        ============================================================ */}
        <ExploreBioStyles />

        {/* ============================================================
            3. SEO CONTENT
        ============================================================ */}
        <SeoContent platform="Instagram" />

        {/* ============================================================
            4. FAQ SECTION
        ============================================================ */}
        <FaqAccordion platform="Instagram" />

      </main>
    </>
  )
}
