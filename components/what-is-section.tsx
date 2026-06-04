import { Info } from "lucide-react"

export function WhatIsSection() {
  return (
    <section className="bg-background py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <Info className="h-4 w-4" />
            The Ultimate Guide to Digital First Impressions
          </div>
          <h2 
            className="text-3xl font-bold tracking-tight text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What is an Instagram Bio Generator?
          </h2>
        </div>
        
        <div className="mt-12 space-y-8 text-lg leading-relaxed text-muted-foreground bg-card border border-border shadow-sm rounded-3xl p-8 lg:p-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">The Science of the First Impression</h3>
            <p className="mb-4">
              In the fast-paced world of social media, your Instagram bio is essentially your digital billboard. It represents the very first impression you make when potential followers, brands, or friends land on your profile. Research shows that users take less than three seconds to decide whether they want to follow an account. During this critical window, what you have written in your bio speaks volumes about your identity, your aesthetic, and your overall vibe. Relying on an outdated, generic, or poorly formatted bio means you risk losing massive engagement and potential follower growth. 
            </p>
            <p>
              An <strong>Instagram Bio Generator</strong> is a highly advanced, AI-powered digital utility specifically engineered to solve this exact problem. Instead of staring at a blank screen wondering what clever quote or stylish formatting to use, a bio generator instantly does the heavy lifting for you. It serves as your personal creative assistant, delivering perfectly structured, highly engaging text combinations tailored precisely to the persona you wish to project.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">How the Artificial Intelligence Works</h3>
            <p className="mb-4">
              Behind the scenes, our Instagram Bio Generator utilizes sophisticated language models trained on millions of the most successful, viral, and highly engaging profiles across the platform. The AI understands the nuances of modern social media language, the strategic placement of emojis, and the psychological impact of specific keywords. When you request an <em>attitude bio for boys</em>, the AI dynamically pulls from its vast database of confident, assertive, and cool phrases. When you request a <em>stylish bio</em> or an <em>aesthetic bio for girls</em>, the output shifts entirely to become elegant, minimalist, and visually pleasing.
            </p>
            <p>
              It doesn't just copy and paste old quotes; it synthesizes entirely new, 100% unique combinations that haven't been overused on the platform. This guarantees that your profile remains totally original and fresh. Furthermore, the tool automatically formats the line breaks and spacing - a notorious headache for many Instagram users - ensuring that your bio looks perfectly aligned on both mobile devices and desktop screens.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Why Everyone Needs It in 2026</h3>
            <p className="mb-4">
              Social media algorithms and trends evolve at breakneck speeds. What was considered a "cool bio" in 2023 might seem incredibly outdated today. Maintaining a relevant, modern profile is crucial whether you are a casual user looking to impress friends, an influencer trying to attract brand deals, or a business aiming to drive traffic to your link-in-bio. Our generator is continuously updated to reflect the absolute newest 2026 digital aesthetics and regional slang. 
            </p>
            <p>
              Say goodbye to the intense creative block and endless scrolling through copy-paste websites filled with spam. With our incredibly fast, entirely free, and beautifully designed Instagram Bio Generator, you hold the ultimate power to revamp your digital identity instantly. Generate, preview, copy, and paste an unforgettable bio that makes your profile utterly magnetic.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
