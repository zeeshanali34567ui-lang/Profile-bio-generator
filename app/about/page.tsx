import type { Metadata } from "next"
import Link from "next/link"
import {
  Sparkles,
  Target,
  Users,
  Zap,
  Shield,
  Globe,
  Heart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - InstaBioGen | Who We Are & Our Story",
  description:
    "Learn about InstaBioGen, the trusted AI-powered Instagram bio generator. Discover our story, mission, and why users trust us for perfect profile bios.",
  alternates: {
    canonical: "https://profilebiogenerator.site/about",
  },
  openGraph: {
    title: "About InstaBioGen - Our Story & Mission",
    description:
      "Discover how InstaBioGen became India's go-to Instagram bio generator.",
    url: "https://profilebiogenerator.site/about",
    type: "website",
    siteName: "InstaBioGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "About InstaBioGen",
    description: "Learn about InstaBioGen, the trusted AI-powered Instagram bio generator.",
  },
}

const values = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description:
      "We constantly refine our algorithms to generate bios that feel fresh, creative, and on-trend. Our AI learns from millions of popular Instagram profiles to deliver content that resonates.",
  },
  {
    icon: Users,
    title: "Built for Everyone",
    description:
      "Whether you are a student, entrepreneur, gamer, or creative professional, our tool adapts to your personality. We believe every profile deserves a bio that truly represents who you are.",
  },
  {
    icon: Shield,
    title: "Privacy & Trust",
    description:
      "We never store your generated bios or personal data. Your creative choices remain yours. No login required, no data tracking, no hidden agendas.",
  },
  {
    icon: Zap,
    title: "Speed & Simplicity",
    description:
      "Generate the perfect bio in under 5 seconds. No complicated setup, no learning curve. Just pick your style, click generate, and copy your favourite bio instantly.",
  },
  {
    icon: Globe,
    title: "Made in India, for the World",
    description:
      "We started in India but our bios work for anyone, anywhere. Our content is crafted to appeal globally while keeping the swag and attitude that Indian boys love.",
  },
  {
    icon: Heart,
    title: "100% Free, Always",
    description:
      "No premium plans. No paywall. No hidden fees. We believe everyone deserves a standout Instagram bio. Generate unlimited bios at zero cost, forever.",
  },
]

const milestones = [
  { number: "2024", label: "Founded", detail: "InstaBioGen was born" },
  { number: "10K+", label: "Users in Month 1", detail: "Organic growth" },
  { number: "50K+", label: "Active Users Today", detail: "Across India & beyond" },
  { number: "500K+", label: "Bios Generated", detail: "And counting daily" },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About InstaBioGen",
            description: "Learn about InstaBioGen, the trusted AI-powered Instagram bio generator. Discover our story, mission, and why users trust us for perfect profile bios.",
            url: "https://profilebiogenerator.site/about",
            publisher: {
              "@type": "Organization",
              name: "InstaBioGen",
            },
          }),
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Our Story
          </div>
          <h1
            className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            We Help You Stand Out on Instagram
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            InstaBioGen is India&apos;s most loved AI-powered Instagram bio
            generator. What started as a simple side project has grown into a
            tool trusted by over 50,000 users who want their Instagram profile
            to make a lasting first impression.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="border-t border-border bg-card py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2
            className="text-3xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Problem We Saw
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-muted-foreground">
            <p className="leading-relaxed">
              We noticed something: millions of boys across India were spending
              hours scrolling through Google, copying generic bios that everyone
              else was already using. The result? Profiles that all looked the
              same. No personality, no uniqueness, no swag.
            </p>
            <p className="leading-relaxed">
              Your Instagram bio is the first thing people see when they visit
              your profile. It is your digital first impression. And yet, most
              tools out there were either outdated, filled with ads, or just
              listed the same 50 bios on every website.
            </p>
            <p className="leading-relaxed">
              We built InstaBioGen to change that. Using smart algorithms and a
              massive library of creative content, we created a tool that
              generates fresh, unique, and personalized bios in seconds. Pick
              your tone (attitude, cool, stylish, VIP, swag), pick your
              category, and get 5 perfectly crafted bios with one click.
            </p>
          </div>

          <h2
            className="mt-14 text-3xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Makes Us Different
          </h2>
          <div className="mt-6 flex flex-col gap-3">
            {[
              "We do not just list bios - our algorithm generates unique combinations every time you click",
              "10+ tones and 8+ categories give you thousands of possible bio variations",
              "One-click copy makes it instant to use on your profile",
              "Emoji and hashtag toggles let you customize the style to your taste",
              "Zero signup, zero cost, zero ads interrupting your experience",
              "Mobile-first design so you can generate bios right from your phone",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="leading-relaxed text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="border-t border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2
            className="text-center text-3xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Journey So Far
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {milestones.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <p className="text-3xl font-bold text-primary">{item.number}</p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-card py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2
            className="text-center text-3xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What We Stand For
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            These are the principles that guide every decision we make while
            building InstaBioGen.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2
            className="text-3xl font-bold tracking-tight text-primary-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to Upgrade Your Instagram Bio?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Join 50,000+ users and generate your perfect bio in seconds. Free
            forever.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-8 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            Generate Your Bio Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
