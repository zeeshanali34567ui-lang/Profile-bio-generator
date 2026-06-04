import { Metadata } from "next"
import Link from "next/link"
import { BioGeneratorTool } from "@/components/bio-generator-tool"
import { FadeIn } from "@/components/animated-ui"
import { FaqAccordion } from "@/components/faq-accordion"
import { SeoContent } from "@/components/seo-content"
import { ExploreBioStyles } from "@/components/explore-bio-styles"

export const metadata: Metadata = {
  title: "TikTok Bio Generator – Create Unique Bios Instantly",
  description:
    "Discover the best TikTok bio ideas and generate stunning, high-converting bios in seconds. Free AI-powered tool for aesthetic, stylish, and professional profiles.",
  alternates: {
    canonical: "/tiktok-bio-generator",
  },
}

export default function TikTokBioGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "TikTok Bio Generator",
            url: "https://profilebiogenerator.site/tiktok-bio-generator",
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
            
            {/* H1 — TikTok Specific */}
            <h1 className="pt-12 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance font-serif text-foreground leading-[1.05]">
              TikTok Bio Generator
            </h1>

            {/* INTRO PARAGRAPH */}
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground text-pretty font-sans leading-relaxed">
              Looking for the perfect TikTok bio? Our dedicated TikTok bio generator crafts unique, aesthetic, and highly converting profile descriptions perfectly formatted for TikTok's 80-character limit.
            </p>
          </div>

          <div className="w-full">
            <div className="relative rounded-3xl bg-background border border-border shadow-sm p-2 sm:p-4">
              <BioGeneratorTool platform="TikTok" />
            </div>
          </div>
        </section>

        {/* ============================================================
            HOW TO USE (TIKTOK SPECIFIC)
        ============================================================ */}
        <section className="mx-auto max-w-5xl scroll-mt-24">
          <div className="text-center mb-16 space-y-4 flex flex-col items-center">
            <h2 className="section__h2 text-foreground">
              How to Use the TikTok Bio Generator
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Create a viral-ready profile description in just three simple steps.
            </p>
          </div>

          <div className="flex flex-col gap-12 relative max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 md:w-3/4 items-start">
              <div className="text-7xl font-bold text-primary/20 select-none font-serif leading-none -mt-2">01</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Choose Your Niche</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Select your TikTok category (e.g., Creator, Business, Gamer) and pick a tone that matches your video style.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 md:w-3/4 items-start">
              <div className="text-7xl font-bold text-primary/20 select-none font-serif leading-none -mt-2">02</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Generate Options</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Hit generate. Our AI will create multiple punchy, 80-character descriptions optimized for the TikTok FYP.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 md:w-3/4 items-start relative">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 hidden md:block"></div>
              <div className="text-7xl font-bold text-primary/20 select-none font-serif leading-none -mt-2">03</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Copy & Paste</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Copy your favorite result and paste it directly into your TikTok profile via the 'Edit Profile' button.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            UNIQUE SECTION (TIKTOK) - THE 80 CHARACTER RULE
        ============================================================ */}
        <section className="mx-auto max-w-5xl scroll-mt-24">
          <div className="text-center mb-16 space-y-4 flex flex-col items-center">
            <h2 className="section__h2 text-foreground">
              Mastering the 80-Character Limit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              TikTok gives you far less space than other platforms. Here is how our AI optimizes every single letter.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex justify-between items-end mb-2">
                <span className="font-bold text-foreground">Character Count Limit</span>
                <span className="text-primary font-bold">80 / 80</span>
              </div>
              
              {/* Progress Bar Visualization */}
              <div className="h-6 w-full bg-muted rounded-full overflow-hidden flex">
                <div className="h-full bg-primary w-[45%]"></div>
                <div className="h-full bg-primary/60 w-[35%]"></div>
                <div className="h-full bg-primary/30 w-[20%]"></div>
              </div>
              
              {/* Legend */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border/50 mt-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-sm"></div>
                    <span className="font-bold text-base text-foreground tracking-tight">The Hook (45%)</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Your main value proposition. Who are you and what do you post?</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-4 h-4 rounded-full bg-primary/60 shadow-sm"></div>
                    <span className="font-bold text-base text-foreground tracking-tight">Authority (35%)</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Why should they trust you? (e.g., '10M+ Views', 'NYT Bestseller').</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-4 h-4 rounded-full bg-primary/30 shadow-sm"></div>
                    <span className="font-bold text-base text-foreground tracking-tight">The CTA (20%)</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">A short, punchy directive pointing to your link (e.g., '👇 Grab the guide').</p>
                </div>
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
        <SeoContent platform="TikTok" />

        {/* ============================================================
            4. FAQ SECTION
        ============================================================ */}
        <FaqAccordion platform="TikTok" />

      </main>
    </>
  )
}
