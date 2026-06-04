"use client"

import { useState } from "react"
import {
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  HelpCircle,
  Bug,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const reasons = [
  {
    icon: HelpCircle,
    label: "General Question",
    description: "Ask us anything about InstaBioGen",
  },
  {
    icon: Bug,
    label: "Report a Bug",
    description: "Something not working? Let us know",
  },
  {
    icon: Lightbulb,
    label: "Feature Request",
    description: "Have an idea to improve the tool?",
  },
  {
    icon: MessageSquare,
    label: "Feedback",
    description: "Share your experience with us",
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedReason, setSelectedReason] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Mail className="h-3.5 w-3.5" />
            Get In Touch
          </div>
          <h1
            className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            We Would Love to Hear From You
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you have a question about our Instagram bio generator, need
            help with something, want to report a bug, or just want to say
            hello, we are always happy to help.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email Us</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  contact@profilebiogenerator.site
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Response Time</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Within 24-48 hours
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Based In</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="border-t border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          {submitted ? (
            <div className="mx-auto max-w-lg rounded-2xl border border-border bg-card p-10 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Send className="h-7 w-7 text-primary" />
              </div>
              <h2
                className="text-2xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Message Sent Successfully
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Thank you for reaching out! We have received your message and
                will get back to you within 24-48 hours. In the meantime, feel
                free to explore our bio generator tool.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-5">
              {/* Reason selector */}
              <div className="lg:col-span-2">
                <h2
                  className="text-2xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  What can we help you with?
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Select a topic so we can route your message to the right
                  person.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  {reasons.map((reason) => (
                    <button
                      key={reason.label}
                      type="button"
                      onClick={() => setSelectedReason(reason.label)}
                      className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
                        selectedReason === reason.label
                          ? "border-primary bg-primary/5"
                          : "border-border bg-card hover:border-primary/30"
                      }`}
                    >
                      <reason.icon
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          selectedReason === reason.label
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {reason.label}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {reason.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-border bg-card p-6 md:p-8"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    Send us a message
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fill in the details below and we will respond as soon as
                    possible.
                  </p>
                  <div className="mt-6 flex flex-col gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name" className="text-foreground">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          required
                          className="mt-2 rounded-xl border-border bg-background"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          className="mt-2 rounded-xl border-border bg-background"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-foreground">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Brief description of your query"
                        required
                        value={selectedReason}
                        onChange={(e) => setSelectedReason(e.target.value)}
                        className="mt-2 rounded-xl border-border bg-background"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-foreground">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us everything. The more detail you provide, the better we can help..."
                        rows={6}
                        required
                        className="mt-2 rounded-xl border-border bg-background"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      By submitting, you agree to our{" "}
                      <a
                        href="/privacy-policy"
                        className="text-primary underline"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Additional SEO Content Section */}
      <section className="border-t border-border bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2
              className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              More About Reaching Out to InstaBioGen
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We are dedicated to providing the best AI Instagram bio generation experience. Here is everything you need to know about contacting our support team.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-md transition-all">
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Why Your Feedback Matters
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                At InstaBioGen, our goal is to empower users with the most creative, stylish, and engaging Instagram bios on the internet. Whether you are looking for an attitude bio, a cool quote, or a professional summary, our AI depends on continuous learning. Your feedback plays a critical role in this process. When you share your thoughts, suggest new bio categories, or report an issue, you directly contribute to making our Instagram bio generator better for everyone.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We read every single message. If you have an idea for a new tone - like a specific gaming aesthetic or a unique regional slang - let us know! Our development team regularly rolls out updates based entirely on user requests to keep your social media presence fresh and trending.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-md transition-all">
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Before You Send a Message
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                To help us assist you faster, please make sure to check out our Frequently Asked Questions on the homepage. Many common queries - such as how to use the copy-paste feature, whether the tool is truly free (yes, always 100% free!), or how the AI generates unique text - are already answered there in detail.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                If you are reporting a bug or technical issue, please include as much detail as possible in your contact form. Mention the device you are using (e.g., iPhone, Android, or Desktop), the browser, and the specific steps that led to the issue. This technical detail allows our engineers to reproduce the problem and deploy a fix much quicker, ensuring our bio generator remains seamless for millions of users.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-md transition-all">
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Partnerships & Collaborations
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Are you an influencer, social media manager, or a brand looking to collaborate? We are always open to exciting partnerships! InstaBioGen helps thousands of users daily to elevate their Instagram aesthetic, and aligning with voices that share our passion for social media growth is something we highly value.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                If you are interested in a partnership, simply select "General Question" in the form above and start your subject line with "[Partnership]". Let us know how we can work together to bring even more value to the community. We are especially interested in collaborating with content creators who focus on Instagram tips, digital marketing, and profile aesthetics.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 hover:shadow-md transition-all">
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Our Customer Support Commitment
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                We believe that free tools should still come with premium support. While InstaBioGen does not charge any hidden fees or require premium subscriptions for generating top-tier Instagram bios, we are fully committed to answering your questions promptly. Our support team typically responds within 24 to 48 hours during regular business days.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Please note that during peak traffic or massive viral updates (when everyone is hunting for the newest 2026 bio trends!), response times might be slightly delayed. Rest assured, your message is safely delivered to our inbox, and a real human being - no bots here - will read and respond to it as soon as possible. Thank you for making us the #1 Instagram Bio Generator platform!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
