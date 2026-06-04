import Link from "next/link"
import Image from "next/image"

export function SeoContentSection() {
  return (
    <section className="border-t border-border bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Level Up Your Profile
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Master Your Instagram Game: Ultimate Bio Guide for Boys
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know to craft a bio that stands out, attracts followers, and defines your online personality.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-3">
          {/* Main content Cards (3 cols) */}
          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">

            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-md transition-all">
              <h3 className="mb-3 text-xl font-bold text-foreground">
                First Impressions Matter
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Your Instagram bio is the first thing people see when they visit
                your profile. A well-crafted Instagram bio for boys can make a
                lasting impression and help you gain more followers. Whether you
                are looking for an attitude bio or a simple bio, words define you.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-md transition-all">
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Stand Out from the Crowd
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A cool bio should reflect your unique personality. From trendy
                one-liners to creative ideas, the options are endless. Our AI-powered tool
                helps you find the best bio by generating personalized
                results based on your preferred tone and style.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-md transition-all">
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Trending Bios in 2026
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Staying up-to-date is essential. Instagram bio for boys 2026 trends
                include minimalist bios, emoji-rich descriptions, and motivational quotes.
                Our generator is constantly updated with the latest trends.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-md transition-all">
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Copy and Paste Ready
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Looking for Instagram bio ideas for boys copy paste ready? Our tool
                generates bios that you can instantly copy and paste directly to
                your Instagram profile in seconds. No sign-up or hassle.
              </p>
            </div>

          </div>

          <div className="lg:col-span-2 mt-4 rounded-2xl border border-border bg-background p-6 hover:shadow-md transition-all">
            <h3 className="mb-3 text-xl font-bold text-foreground">
              Why Use an Instagram Bio Generator?
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              Crafting the perfect bio by yourself can be very time-consuming. You want something that precisely captures your character, but finding the right words, emojis, and styling isn't always easy. This is where an advanced Instagram Bio Generator becomes essential. By leveraging AI, the generator analyzes thousands of successful, stylish bios and curating them specifically for your profile. 
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Whether you are hunting for attitude bios to assert your dominance, aesthetic elements for visual appeal, or just fresh bio ideas to revamp an outdated profile, utilizing a generator guarantees you get highly engaging, copy-paste ready results without the headache. Step up your social media presence with stylish bios engineered to maximize follower conversion and engagement right from your first impression.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-1">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl shadow-sm border border-border">
              <Image
                src="/images/stats-section.jpg"
                alt="Instagram growth analytics showing increasing engagement and followers"
                width={500}
                height={350}
                className="h-auto w-full object-cover aspect-video lg:aspect-square"
              />
            </div>

            {/* Explore More */}
            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-foreground">
                Explore More Bio Ideas
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Beyond boys bios, we also cover:
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {[
                  { href: "/blog/instagram-bio-ideas-for-girls", label: "Bio Ideas for Girls" },
                  { href: "/blog/instagram-business-bio-ideas", label: "Business Bio Ideas" },
                  { href: "/blog/aesthetic-instagram-bio-ideas", label: "Aesthetic Bio Ideas" },
                  { href: "/blog/instagram-bio-ideas-for-gamers", label: "Gaming Bio Ideas" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
