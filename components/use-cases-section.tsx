import { Gamepad2, Camera, Briefcase, Smile, Plane, Dumbbell } from "lucide-react"

const useCases = [
    {
        icon: Gamepad2,
        title: "Gamers & Streamers",
        description: "Get aggressive, cool, and swag bios perfect for showcasing your rank and gaming skills.",
    },
    {
        icon: Camera,
        title: "Influencers & Models",
        description: "Stylish and aesthetic bios that make your profile pop and attract brand collaborations.",
    },
    {
        icon: Briefcase,
        title: "Entrepreneurs",
        description: "Professional, sharp bios demonstrating ambition, hustle, and your personal brand.",
    },
    {
        icon: Dumbbell,
        title: "Fitness Enthusiasts",
        description: "Motivational and gym-focused bios that capture your dedication to the grind.",
    },
    {
        icon: Plane,
        title: "Travelers",
        description: "Wanderlust captions highlighting your next adventure and passport stamps.",
    },
    {
        icon: Smile,
        title: "Everyday Cool Boys",
        description: "Simple, attitude-filled, or funny bios that match your daily vibe perfectly.",
    },
]

export function UseCasesSection() {
    return (
        <section className="bg-muted/30 py-16 lg:py-24 border-t border-border">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start">

                    <div className="lg:sticky lg:top-24 lg:max-w-md lg:shrink-0 text-center lg:text-left">
                        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                            Who is it for?
                        </span>
                        <h2
                            className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Bios Built for Every Vibe and Persona
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            Whether you are grinding at the gym, clutching ranked matches, or building a startup, we generate the exact bio that matches your persona.
                        </p>
                    </div>

                    <div className="grid w-full gap-6 sm:grid-cols-2">
                        {useCases.map((useCase, idx) => (
                            <div
                                key={idx}
                                className="group flex gap-4 rounded-xl bg-card p-6 border border-border transition-all hover:border-primary/40 hover:shadow-md"
                            >
                                <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                    <useCase.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {useCase.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
