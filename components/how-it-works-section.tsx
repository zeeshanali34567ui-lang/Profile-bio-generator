import { Settings2, Wand2, ClipboardCopy, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Settings2,
    step: "01",
    title: "Select Your Unique Profile Vibe and Details",
    description:
      "The first step to unlocking a magnetic profile is providing our AI with a sense of who you are. Start by typing your name in the designated field if you want personalized outputs. Then, browse through our extensive list of over 10+ distinct tones. Are you aiming for an aggressive, dominant 'Attitude' bio? Perhaps a clean, highly aesthetic 'Stylish' bio? Or maybe you want a 'Professional' setup for your business page? You also hold the power to toggle specific options like the inclusion of emojis for visual flair, or hashtags to boost your discoverability in Instagram's search engine. Customization is king here.",
  },
  {
    icon: Wand2,
    step: "02",
    title: "Initiate the Advanced AI Generation Process",
    description:
      "Once you have carefully dialed in your preferences, simply click the 'Generate Bios' button. Instantly, our sophisticated backend algorithm leaps into action. Unlike standard template websites, our AI dynamically strings together words, aesthetic formatting tricks, and appropriate emojis to craft 5 completely unique and personalized Instagram bios. The process takes less than a second, and because it generates multiple distinct variations simultaneously, you are guaranteed to find at least one combination that resonates perfectly with your current digital mood.",
  },
  {
    icon: ClipboardCopy,
    step: "03",
    title: "Preview, Copy, and Dominate Instagram",
    description:
      "The final step is the most satisfying. Review the five beautifully formatted bio blocks presented on your screen. When you find the one that feels right, simply click the 'Copy' icon located right next to the bio. The text is immediately saved to your device's clipboard, preserving all the intricate spacing, line breaks, and emojis perfectly. From there, open your Instagram app, navigate to 'Edit Profile', paste your fresh new bio, and hit save. It is that seamless! Not fully satisfied? You can click generate again as many times as you like, absolutely free of charge.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-background py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Masterclass Tutorial
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How to Use the Instagram Bio Generator
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            Our tool was built from the ground up to be incredibly intuitive, lightning-fast, and completely hassle-free. Here is the comprehensive three-step guide to overhauling your Instagram identity.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-12">
          {steps.map((step, index) => (
            <div key={step.step} className="flex flex-col md:flex-row gap-8 bg-card border border-border shadow-sm p-8 rounded-3xl hover:shadow-lg transition-all duration-300">
              <div className="flex shrink-0 flex-col items-center md:items-start">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="mt-6 hidden md:flex items-center justify-center bg-muted rounded-full px-4 py-1">
                  <span className="text-sm font-bold text-muted-foreground">
                    STEP {step.step}
                  </span>
                </div>
              </div>
              <div className="pb-2 text-center md:text-left flex-1">
                <div className="md:hidden flex items-center justify-center gap-3 mb-4">
                  <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    STEP {step.step}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
