"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What exactly is an Instagram Bio Generator?",
    answer:
      "An Instagram Bio Generator is a highly specialized AI-powered tool that automatically creates, formats, and styles profile descriptions for your social media. Instead of manually brainstorming quotes or worrying about character limits and emoji placements, the algorithm delivers multiple copy-paste ready options based on your selected tone, category, and preferences. It completely eliminates creative block and ensures your profile looks incredibly professional or stylish within seconds."
  },
  {
    question: "Are the generated bios actually unique?",
    answer:
      "Absolutely. Unlike static copy-paste websites that provide the exact same list of 50 bios to millions of visitors, our generator uses advanced generative AI models. This means it dynamically pieces together sentences, vocabulary, and aesthetics based on a massive database to provide combinations that are entirely fresh. When you generate an attitude bio for boys or an aesthetic bio for girls, it is highly personalized and highly unique to your prompt session."
  },
  {
    question: "Is this tool completely free to use?",
    answer:
      "Yes! We firmly believe that everyone deserves an outstanding digital presence without having to pay for it. InstaBioGen is 100% free forever. There are no hidden fees, no required premium subscriptions to unlock the 'best' bios, no email waitlists, and absolutely no credit card requirements. You can generate fifty different bios in one day, and you still will not hit a paywall."
  },
  {
    question: "How do I choose the right tone for my profile?",
    answer:
      "Choosing your tone depends entirely on what you want to achieve with your Instagram profile. If you are running a business or a creative portfolio, the 'Professional' tone is best to establish trust and authority. If you want to show off your confidence and high standards, the 'Attitude' or 'VIP' bios are perfect. If you just want to vibe with your friends, 'Cool' or 'Funny' bios work incredibly well. Feel free to experiment with all of them until you find the perfect match!"
  },
  {
    question: "Will the formatting remain correct when I copy and paste it?",
    answer:
      "Yes! One of the biggest complaints people have with Instagram is that writing multiple lines natively in the app often results in glitched spacing or broken line breaks. Our tool mathematically formats the text so that when you use our 'Copy' button and paste it directly into your Instagram 'Edit Profile' section, the line breaks, the invisible spaces, and the emojis are preserved absolutely perfectly."
  },
  {
    question: "How often should I change my Instagram bio?",
    answer:
      "Social media experts generally recommend auditing and updating your Instagram bio every 4 to 6 weeks. Keeping your profile fresh signals to the algorithm and your followers that you are highly active. Furthermore, digital trends move incredibly quickly. What was considered a trendy bio in 2024 is outdated today. Use our generator to quickly check what the newest 2026 aesthetics and phrases look like, and keep your identity modern."
  },
  {
    question: "Does it work for both boys and girls?",
    answer:
      "Yes, our AI is trained on incredibly diverse datasets covering every demographic imaginable. Whether you specifically need hard-hitting, swag-filled attitude bios for boys, or soft, minimalist, cute aesthetic bios for girls, the tool handles both effortlessly. It even handles neutral, professional bios for brands, organizations, and businesses flawlessly."
  },
  {
    question: "Can I use these generated bios for TikTok or Twitter?",
    answer:
      "Certainly! While the text length and formatting are explicitly optimized for Instagram’s strict character limits and visual aesthetics, incredibly stylish and cool bios are universal. You can instantly copy and paste the generated text directly into your TikTok, Twitter (X), Facebook, or YouTube profiles without any issues whatsoever."
  }
]

export function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="bg-background py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Clear Your Doubts
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our Instagram bio generator, how the AI fundamentally works, and how to maximize your social media growth.
          </p>
        </div>

        <div className="bg-card border border-border shadow-sm rounded-3xl p-6 lg:p-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-bold text-foreground py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6 pr-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
