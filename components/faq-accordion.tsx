"use client"

import Link from "next/link"
import { FadeIn } from "@/components/animated-ui"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Platform = "Universal" | "Instagram" | "TikTok" | "YouTube"

interface FaqAccordionProps {
  platform?: Platform
}

const faqData = {
  Universal: [
    {
      q: "What is a profile bio generator and how does it work?",
      a: "A profile bio generator is an AI-powered tool that generates unique, stylish, and optimized bios for your social media profiles. You simply select a category that matches your niche, choose a tone that reflects your personality, and the tool instantly creates multiple ready-to-use bio options. There is no sign-up required, no downloads, and no cost involved."
    },
    {
      q: "Is this bio generator completely free to use?",
      a: "Yes, our tool is 100% free with no hidden charges, no premium subscriptions, and no email gates. You can generate as many bios as you want, every single day, without ever hitting a paywall."
    },
    {
      q: "Can I use these generated bios on other social media platforms?",
      a: "Absolutely. While the formatting and character limits can be optimized specifically for platforms like Instagram or TikTok, the bios work beautifully on Twitter (X), Facebook, YouTube, LinkedIn, and any other platform that features a profile description."
    },
    {
      q: "How often should I update my profile bio?",
      a: "Social media experts recommend refreshing your bio every four to six weeks. Regular updates signal to the algorithm and your audience that your account is active and evolving."
    }
  ],
  Instagram: [
    {
      q: "What makes a good Instagram bio?",
      a: "A good Instagram bio clearly states who you are, what you do, and why someone should follow you. It should be easy to read, use line breaks, include targeted keywords for Instagram SEO, and end with a strong Call-To-Action (CTA) pointing to your link-in-bio."
    },
    {
      q: "Does this Instagram bio maker format the line breaks correctly?",
      a: "Yes! One of the biggest challenges with Instagram is getting line breaks to stick. Our generator automatically structures your bio with the correct spacing and formatting so you can copy and paste it directly into your Instagram profile without losing the layout."
    },
    {
      q: "Can I generate aesthetic Instagram bios with this tool?",
      a: "Definitely. By selecting the 'Aesthetic' or 'Minimalist' tone in the generator, the AI will craft clean, visually appealing bios that use aesthetic fonts, minimal emojis, and elegant phrasing to match your grid's vibe."
    },
    {
      q: "How many characters can an Instagram bio be?",
      a: "Instagram limits your profile bio to 150 characters. Our generator is specifically trained to craft compelling descriptions that fit perfectly within this tight character limit, ensuring your message never gets cut off."
    }
  ],
  TikTok: [
    {
      q: "How long can a TikTok bio be?",
      a: "TikTok bios are strictly limited to 80 characters. This is much shorter than most platforms, which is why our dedicated TikTok bio generator is specifically designed to write punchy, hyper-concise copy that fits perfectly."
    },
    {
      q: "Should I include emojis in my TikTok bio?",
      a: "Yes, but sparingly. Because of the 80-character limit, every letter matters. Emojis can act as visual bullet points (like pointing down to your link) and convey emotion instantly without wasting precious characters."
    },
    {
      q: "How do I get a link in my TikTok bio?",
      a: "To add a clickable link to your TikTok profile, you generally need a Business Account or a Personal Account with over 1,000 followers. Once you meet the criteria, you can add it in the 'Website' field under 'Edit Profile'."
    },
    {
      q: "Does the AI understand TikTok trends and slang?",
      a: "Yes. Our TikTok bio maker is trained on the latest social media trends, Gen-Z vernacular, and platform-specific aesthetics to ensure your bio feels native to the For You Page."
    }
  ],
  YouTube: [
    {
      q: "Where does my YouTube channel description appear?",
      a: "Your YouTube channel description appears in the 'About' tab on your channel page. Additionally, the first 100-150 characters often show up in YouTube search results directly below your channel name, making it critical for SEO."
    },
    {
      q: "What should I include in my YouTube About section?",
      a: "A professional YouTube bio should include your channel's main value proposition, your upload schedule (e.g., 'New videos every Friday!'), your business inquiry email, and links to your other social media profiles."
    },
    {
      q: "Is this tool better than writing a YouTube bio myself?",
      a: "Writing a long-form, SEO-optimized YouTube description from scratch can be time-consuming. Our generator acts as a powerful starting point, automatically structuring your channel's details and injecting relevant keywords to boost your search rankings instantly."
    },
    {
      q: "How does the YouTube bio generator help with SEO?",
      a: "YouTube is the world's second-largest search engine. Our generator naturally weaves your selected niche and keywords into the bio's narrative, helping the YouTube algorithm understand exactly what your channel is about so it can recommend your videos to the right audience."
    }
  ]
}

export function FaqAccordion({ platform = "Universal" }: FaqAccordionProps) {
  const faqs = faqData[platform]

  return (
    <section className="mx-auto max-w-3xl">
      <FadeIn className="text-center mb-10 space-y-4 flex flex-col items-center">
        <h2 className="section__h2 text-foreground text-center">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground text-center">
          Everything you need to know about your {platform === "Universal" ? "profile" : platform} bio.
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <Accordion type="single" collapsible className="w-full border-t border-border/50">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className={index === faqs.length - 1 ? "border-b-0" : "border-b border-border/50"}>
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary data-[state=open]:text-primary transition-colors py-6 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6 pr-12">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </section>
  )
}
