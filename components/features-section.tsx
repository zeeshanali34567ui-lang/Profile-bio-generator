import { CheckCircle2, Shield, Zap, Wand2 } from "lucide-react"

const features = [
    {
        icon: Zap,
        title: "100% Free & Instant",
        description: "Generate unlimited Instagram bios completely free of cost. No hidden charges or premium subscriptions required.",
    },
    {
        icon: Shield,
        title: "No Sign-up Required",
        description: "We don't ask for your personal details. Just select your tone, generate, and copy your favourite bio directly.",
    },
    {
        icon: Wand2,
        title: "10+ Unique Styles",
        description: "From attitude and stylish to professional and funny, our AI generates bios tailored to your specific vibe.",
    },
    {
        icon: CheckCircle2,
        title: "Copy & Paste Ready",
        description: "All generated bios are perfectly formatted for Instagram. Just click copy and paste it into your profile.",
    },
]

export function FeaturesSection() {
    return (
        <section className="bg-muted/50 py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                        Why We Are The Best
                    </span>
                    <h2
                        className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Supercharge Your Profile Effortlessly
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        Everything you need to create an unforgettable first impression on Instagram.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border transition-all hover:shadow-md"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                                <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-2 font-semibold text-foreground">
                                {feature.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
