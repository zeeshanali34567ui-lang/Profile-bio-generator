import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Lifestyle Influencer",
    image: "AR",
    story: "I usually change my Instagram bio every few weeks to keep things fresh. Before finding this generator, I would literally stare at my phone for hours trying to come up with a stylish bio that didn't sound desperate. I used the 'Attitude' tone on InstaBioGen and within two seconds, it gave me a bio that was funny, edgy, and completely unique. Since updating it, I've noticed a 20% spike in followers tracking directly from my profile page. The absolute best part is that the tool is entirely free. This is hands down the best Instagram bio generator tool out there."
  },
  {
    name: "Samantha Lee",
    role: "Small Business Owner",
    image: "SL",
    story: "As someone running a boutique clothing brand, I needed my profile to look hyper-professional but still aesthetic and approachable. I tried writing it myself, but it always looked cluttered and unprofessional. I selected the 'Professional' tone on this tool and it generated a perfect balance of brand identity, emojis, and a clean call-to-action for my link-in-bio. It even perfectly spaced the multi-line text so it looks incredible on mobile. My website click-through rate has measurably improved. Highly recommended for any brand."
  },
  {
    name: "Jordan Hayes",
    role: "Digital Creator",
    image: "JH",
    story: "I love the 'Cool Bios for Boys' category and the 'VIP' options! The AI doesn't just spit out the same generic quotes you see on every single Pinterest board. The phrases it generates feel like something an actual celebrity or high-end creator would write. It understands modern slang, the right balance of emojis, and the psychology behind what makes people click 'Follow'. Plus, the one-click copy and paste feature means I don't have to fiddle with weird formatting glitches on the Instagram app. It's an absolute game changer!"
  }
]

export function TestimonialsSection() {
  return (
    <section className="bg-muted/10 py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Success Stories
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
            What Our Community is Saying
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Read the incredible stories of creators, influencers, and business owners who transformed their digital presence using our tool.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted-foreground mb-8 flex-1 italic">
                "{t.story}"
              </p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  {t.image}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
