import { Brain, Clock, ShieldCheck, Flame, RefreshCcw, SmilePlus } from "lucide-react"

const reasons = [
  { 
    icon: Clock, 
    title: "Saves You Countless Hours of Brainstorming", 
    desc: "Writing the perfect bio requires creativity, precise formatting, and the right mix of emojis. Instead of spending hours brainstorming lines, searching Google for quotes, and getting frustrated over Instagram's character limits, our tool instantly generates multiple high-quality, perfectly formatted bio ideas in literally seconds. Get back to creating great posts while we handle your profile introduction." 
  },
  { 
    icon: Flame, 
    title: "Highly Engaging, Conversion-Optimized Text", 
    desc: "A great bio does more than just look pretty; it converts profile visitors into dedicated followers. Our AI is explicitly engineered to maximize follower conversion rates and overall profile visibility. By utilizing psychology-backed phrases and strategic keyword placement, these cool bios grab attention immediately and provide clear representations of your personality or brand." 
  },
  { 
    icon: Brain, 
    title: "Advanced AI-Powered Originality", 
    desc: "Unlike standard copy-paste directories that hand out the exact same bio to millions of people, our generator utilizes massive language data models to guarantee fresh, completely original attitude bios. This means the bio you generate is highly likely to be entirely unique to your profile, giving you a distinctive edge over everyone else using recycled, overused quotes from the internet." 
  },
  { 
    icon: RefreshCcw, 
    title: "Continuously Updated with 2026 Trends", 
    desc: "The language of the internet changes incredibly fast. Our development team ensures the AI is constantly reflecting the absolute newest 2026 social media trends, popular trending hashtags, and emerging digital aesthetics. Whether the current trend is minimalist lowercase themes, aggressive VIP swag, or nostalgic quotes, our generator is already programmed to deliver it flawlessly." 
  },
  { 
    icon: ShieldCheck, 
    title: "100% Free Forever, No Hidden Catches", 
    desc: "We believe that premium digital presence shouldn't come with a price tag. There are absolutely no restrictive paywalls, no required signups, no email harvesting, and no credit cards needed. You can generate unlimited stylish bios entirely free of cost, as many times as you want, completely anonymously." 
  },
  { 
    icon: SmilePlus, 
    title: "Multi-Tone Varieties for Every Mood", 
    desc: "Human beings are complex, and your mood can change daily. That's why we provide access to perfectly tailored vibes - from aggressive Attitude, to elite VIP, to confident Swag, to sharp Professional, and even hilarious Funny bios. No matter what energy you want to match today, all these versatile tones are organized beautifully under one clean ecosystem." 
  }
]

export function WhyUseSection() {
  return (
    <section className="bg-muted/30 py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
            Why Choose InstaBioGen?
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            Discover exactly why over 50,000+ top influencers, casual users, and businesses choose our advanced Instagram Bio Generator as their ultimate secret weapon for social media growth.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-6 p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <r.icon className="h-8 w-8" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">{r.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
