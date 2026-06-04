import { Metadata } from "next"
import Link from "next/link"
import { BioGeneratorTool } from "@/components/bio-generator-tool"
import { FadeIn } from "@/components/animated-ui"
import { FaqAccordion } from "@/components/faq-accordion"
import { SeoContent } from "@/components/seo-content"
import { ExploreBioStyles } from "@/components/explore-bio-styles"

export const metadata: Metadata = {
  title: "YouTube Bio Generator – Create Unique Bios Instantly",
  description:
    "Discover the best YouTube bio ideas and generate stunning, high-converting bios in seconds. Free AI-powered tool for aesthetic, stylish, and professional profiles.",
  alternates: {
    canonical: "/youtube-bio-generator",
  },
}

export default function YouTubeBioGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "YouTube Bio Generator",
            url: "https://profilebiogenerator.site/youtube-bio-generator",
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
            
            {/* H1 — YouTube Specific */}
            <h1 className="pt-12 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance font-serif text-foreground leading-[1.05]">
              YouTube Bio Generator
            </h1>

            {/* INTRO PARAGRAPH */}
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground text-pretty font-sans leading-relaxed">
              Looking for the perfect YouTube channel description? Our dedicated YouTube bio generator crafts unique and highly converting "About" sections tailored for your channel.
            </p>
          </div>

          <div className="w-full">
            <div className="relative rounded-3xl bg-background border border-border shadow-sm p-2 sm:p-4">
              <BioGeneratorTool platform="YouTube" />
            </div>
          </div>
        </section>

        {/* ============================================================
            HOW TO USE (YOUTUBE SPECIFIC)
        ============================================================ */}
        <section className="mx-auto max-w-5xl scroll-mt-24">
          <div className="text-center mb-16 space-y-4 flex flex-col items-center">
            <h2 className="section__h2 text-foreground">
              How to Use the YouTube Bio Generator
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Craft the perfect SEO-optimized channel description in three easy steps.
            </p>
          </div>

          <div className="flex flex-col gap-12 relative max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 md:w-3/4 items-start">
              <div className="text-7xl font-bold text-primary/20 select-none font-serif leading-none -mt-2">01</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Define Your Channel</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Select your YouTube niche (e.g., Tech, Gaming, Vlog) and choose the tone that best reflects your on-camera personality.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 md:w-3/4 items-start">
              <div className="text-7xl font-bold text-primary/20 select-none font-serif leading-none -mt-2">02</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Generate the About Page</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Click generate. Our AI will draft a comprehensive, keyword-rich channel description designed to boost search rankings.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 md:w-3/4 items-start relative">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 hidden md:block"></div>
              <div className="text-7xl font-bold text-primary/20 select-none font-serif leading-none -mt-2">03</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Update Your Channel</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Copy the result, open YouTube Studio, navigate to 'Customization' &gt; 'Basic info', and paste it in your description.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            UNIQUE SECTION (YOUTUBE) - YOUTUBE SEO STRUCTURE
        ============================================================ */}
        <section className="mx-auto max-w-5xl scroll-mt-24">
          <div className="text-center mb-16 space-y-4 flex flex-col items-center">
            <h2 className="section__h2 text-foreground">
              The Structure of a Perfect Channel About Page
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Unlike short-form platforms, YouTube descriptions are mini-essays optimized for search. Here is the framework our AI uses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Block 1 */}
            <div className="flex flex-col h-full border-l-2 border-primary/20 pl-6">
              <div className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">Top 150 Characters</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">The SEO Hook</h3>
              <p className="text-muted-foreground text-lg leading-relaxed flex-grow">
                This is the text that appears in YouTube search results next to your channel name. It must contain your primary keywords and an immediate value proposition.
              </p>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col h-full border-l-2 border-primary/20 pl-6">
              <div className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">The Middle</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">The Channel Narrative</h3>
              <p className="text-muted-foreground text-lg leading-relaxed flex-grow">
                The core story. What kind of videos do you post? Who is your target audience? What is your upload schedule? This builds community connection.
              </p>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col h-full border-l-2 border-primary/20 pl-6">
              <div className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">The Bottom</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">The Connect Block</h3>
              <p className="text-muted-foreground text-lg leading-relaxed flex-grow">
                The business end of the bio. It includes your business inquiry email address, structured lists of your gear or affiliate links, and links to your other socials.
              </p>
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
        <SeoContent platform="YouTube" />

        {/* ============================================================
            4. FAQ SECTION
        ============================================================ */}
        <FaqAccordion platform="YouTube" />

      </main>
    </>
  )
}
