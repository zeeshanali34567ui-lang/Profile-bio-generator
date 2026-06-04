"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Lightbulb, Palette, AlignLeft, MousePointerClick, Smile, RefreshCw } from "lucide-react"

interface Tip {
  title: string
  description: string
  icon: React.ElementType
}

type Platform = "Universal" | "Instagram" | "TikTok" | "YouTube"

interface SeoContentProps {
  platform?: Platform
}

const contentData = {
  Universal: {
    heading1: "Social Media Bio Ideas",
    content1: (
      <>
        <p>Your social media bio is the first thing visitors see when they land on your profile. It is your digital handshake, your elevator pitch, and your personal brand statement. That is exactly why having the right <Link href="/" className="font-medium text-primary hover:underline underline-offset-4 transition-colors">bio ideas</Link> matters more than most people realize.</p>
        <p>A well-crafted bio immediately communicates who you are, what you do, and why someone should follow you. Whether you are a content creator looking for a daily spark of motivational bio ideas, a traveler highlighting their journeys, or someone wanting a stylish profile, our <Link href="/" className="font-medium text-primary hover:underline underline-offset-4 transition-colors">universal bio maker</Link> helps you establish that connection instantly.</p>
        <p>Great bio ideas go beyond generic motivational quotes. They leverage strategic formatting, carefully chosen emojis, and concise language that speaks directly to your target audience across any platform.</p>
      </>
    ),
    heading2: "What is a Profile Bio Generator?",
    content2: (
      <>
        <p>A Profile Bio Generator is an AI-powered online tool designed to help you create professional, stylish, and engaging profile descriptions without any manual brainstorming. Instead of staring at a blank cursor wondering how to summarize your entire personality, the generator does the creative heavy lifting for you.</p>
        <p>Our tool analyzes your selected niche, preferred tone, and stylistic preferences to produce multiple unique bio options instantly. It draws from thousands of proven copywriting patterns, trending formats, and high-performing profile structures to deliver results that are optimized for conversions.</p>
        <p>Whether you need a minimalist aesthetic bio, a bold attitude statement, a professional brand summary, or a witty one-liner, our <Link href="/" className="font-medium text-primary hover:underline underline-offset-4 transition-colors">Universal Bio Generator</Link> handles every category with precision.</p>
      </>
    ),
    heading3: "Universal Bio Maker",
    content3: (
      <>
        <p>An AI bio maker is more than a text generator - it is a strategic branding tool built for the modern social media landscape. In an era where attention spans are measured in milliseconds, your profile bio is the single most important piece of copy on your entire account.</p>
        <p>Our bio maker combines advanced AI with proven copywriting principles to produce bios that are not only creative but conversion-focused. Every output is engineered to answer the three questions every profile visitor subconsciously asks: Who is this person? What value do they provide? Why should I follow them right now?</p>
        <p>The tool supports an extensive range of categories and adapts to trending formats. For platform-specific generation, check out our dedicated <Link href="/instagram-bio-generator" className="font-medium text-primary hover:underline underline-offset-4 transition-colors">Instagram bio generator</Link> or <Link href="/tiktok-bio-generator" className="font-medium text-primary hover:underline underline-offset-4 transition-colors">TikTok bio generator</Link>.</p>
      </>
    ),
  },
  Instagram: {
    heading1: "Instagram Bio Ideas",
    content1: (
      <>
        <p>Your Instagram bio is the first thing visitors see when they land on your profile. It is your digital handshake, your elevator pitch, and your personal brand statement - all compressed into 150 characters. That is exactly why having the right <Link href="/instagram-bio-generator" className="font-medium text-primary hover:underline underline-offset-4 transition-colors">Instagram bio ideas</Link> matters more than most people realize.</p>
        <p>A well-crafted bio immediately communicates who you are, what you do, and why someone should follow you. It sets the tone for your entire account. Whether you are a content creator looking for a daily spark of motivational Instagram bio ideas, a traveler highlighting their journeys, or someone wanting a stylish profile, our <Link href="/instagram-bio-generator" className="font-medium text-primary hover:underline underline-offset-4 transition-colors">Instagram bio maker</Link> helps you establish that connection instantly.</p>
        <p>Great bio ideas go beyond generic motivational quotes. They leverage strategic formatting, carefully chosen emojis, and concise language that speaks directly to your target audience. A strong bio reduces bounce rates on your profile, increases your follower-to-visitor conversion ratio, and gives the algorithm a positive signal that your account is active and relevant.</p>
      </>
    ),
    heading2: "What is an Instagram Bio Generator?",
    content2: (
      <>
        <p>An Instagram Bio Generator is an AI-powered online tool designed to help you create professional, stylish, and engaging profile descriptions without any manual brainstorming. Instead of staring at a blank cursor wondering how to summarize your entire personality in a handful of characters, the generator does the creative heavy lifting for you.</p>
        <p>Our tool analyzes your selected niche, preferred tone, and stylistic preferences to produce multiple unique bio options instantly. It draws from thousands of proven copywriting patterns, trending formats, and high-performing profile structures to deliver results that are not only visually appealing but also psychologically optimized for conversions.</p>
        <p>Whether you need a minimalist aesthetic bio, a bold attitude statement, a professional brand summary, or a witty one-liner, our generator handles every category with precision. If you are creating short-form video content, check out our dedicated <Link href="/tiktok-bio-generator" className="font-medium text-primary hover:underline underline-offset-4 transition-colors">TikTok bio generator</Link> instead.</p>
      </>
    ),
    heading3: "Instagram Bio Maker",
    content3: (
      <>
        <p>An Instagram bio maker is more than a text generator - it is a strategic branding tool built for the modern social media landscape. In an era where attention spans are measured in milliseconds, your profile bio is the single most important piece of copy on your entire account.</p>
        <p>Our bio maker combines advanced AI with proven copywriting principles to produce bios that are not only creative but conversion-focused. Every output is engineered to answer the three questions every profile visitor subconsciously asks: Who is this person? What value do they provide? Why should I follow them right now?</p>
        <p>The tool supports an extensive range of categories - from aesthetic and attitude to professional, gaming, travel, and beyond. It adapts to trending formats, incorporates strategic emoji placement, and ensures proper line-break formatting.</p>
      </>
    ),
  },
  TikTok: {
    heading1: "TikTok Bio Ideas",
    content1: (
      <>
        <p>Your TikTok bio is restricted to just 80 characters, making it the most prime real estate on your entire profile. Every single word counts. That is why discovering high-performing <Link href="/tiktok-bio-generator" className="font-medium text-primary hover:underline underline-offset-4 transition-colors">TikTok bio ideas</Link> is essential for converting viral views into long-term followers.</p>
        <p>A well-crafted TikTok bio immediately communicates your niche, your vibe, and your value proposition. Whether you are a dancer, a comedian, an educator, or an aesthetic vlogger, our <Link href="/tiktok-bio-generator" className="font-medium text-primary hover:underline underline-offset-4 transition-colors">TikTok bio maker</Link> helps you distill your brand into a punchy, memorable statement.</p>
        <p>The best TikTok bios are short, actionable, and visually clean. They often leverage a single line of text followed by a strong Call To Action pointing to a Linktree or external URL. An optimized bio is critical for capturing the fleeting attention of users scrolling through the For You Page.</p>
      </>
    ),
    heading2: "What is a TikTok Bio Generator?",
    content2: (
      <>
        <p>A TikTok Bio Generator is a specialized AI tool that crafts punchy, 80-character profile descriptions tailored specifically for the TikTok platform. It takes the guesswork out of writing the perfect short-form bio.</p>
        <p>Our tool considers the unique constraints and culture of TikTok. It understands that TikTok bios need to be punchier and more direct than Instagram bios. It generates options that include clever wordplay, trending aesthetic styles, and clear calls-to-action.</p>
        <p>Whether you need a funny gen-z style bio, a clean creator summary, or an engaging hook, our generator provides options that fit perfectly within the character limit. For longer, more detailed bios, you might also want to try our <Link href="/instagram-bio-generator" className="font-medium text-primary hover:underline underline-offset-4 transition-colors">Instagram bio generator</Link>.</p>
      </>
    ),
    heading3: "TikTok Bio Maker",
    content3: (
      <>
        <p>A TikTok bio maker is an essential utility for anyone trying to grow their audience on the world's fastest-growing app. Because viral videos can bring thousands of profile visitors in an hour, your bio must instantly convince them to hit the follow button.</p>
        <p>Our bio maker uses advanced language models trained on the most successful TikTok profiles across every major niche. It outputs text that feels native to the platform—using the right slang, the right emojis, and the right pacing.</p>
        <p>The tool automatically optimizes for character limits, ensuring your bio never gets cut off mid-sentence. It also provides structured layouts that draw the eye directly down towards your bio link.</p>
      </>
    ),
  },
  YouTube: {
    heading1: "YouTube Channel Descriptions",
    content1: (
      <>
        <p>Your YouTube channel description (the 'About' section) is a critical piece of your channel's SEO and branding. With up to 1,000 characters available, having the right <Link href="/youtube-bio-generator" className="font-medium text-primary hover:underline underline-offset-4 transition-colors">YouTube channel description ideas</Link> is vital for YouTube search rankings.</p>
        <p>A strong About section clearly explains your channel's value proposition, your upload schedule, and your contact information. Whether you run a gaming channel, a tech review hub, or a daily vlog, our <Link href="/youtube-bio-generator" className="font-medium text-primary hover:underline underline-offset-4 transition-colors">YouTube bio maker</Link> helps you script the perfect introduction.</p>
        <p>The YouTube algorithm scans your description to understand your content. The best descriptions are rich in targeted keywords, highly readable, and feature a compelling story about why the creator started the channel.</p>
      </>
    ),
    heading2: "What is a YouTube Bio Generator?",
    content2: (
      <>
        <p>A YouTube Bio Generator is an AI-powered tool designed to write comprehensive, SEO-optimized channel descriptions. Unlike short-form platforms, YouTube requires a mini-essay about your content strategy and brand identity.</p>
        <p>Our tool takes your channel's niche, tone, and target audience, and expands them into a beautifully structured About page. It generates natural-sounding paragraphs that seamlessly integrate important keywords without feeling spammy.</p>
        <p>Whether you need an energetic introduction, a professional business channel summary, or an aesthetic lifestyle description, our generator creates long-form copy that drives subscriptions and improves channel discovery. If you also cross-post, check out our <Link href="/tiktok-bio-generator" className="font-medium text-primary hover:underline underline-offset-4 transition-colors">TikTok bio generator</Link>.</p>
      </>
    ),
    heading3: "YouTube Channel Description Maker",
    content3: (
      <>
        <p>A YouTube description maker is a vital SEO asset. The first 100-150 characters of your About section often appear in YouTube search results next to your channel name, making it your primary hook for new viewers.</p>
        <p>Our maker structures the output into highly readable formats—using clear spacing, bullet points, and distinct sections for your upload schedule, business inquiries, and social media links.</p>
        <p>By automating the writing process, you can ensure your channel looks professional from day one, allowing you to focus entirely on creating great video content instead of stressing over copywriting.</p>
      </>
    ),
  }
}

export function SeoContent({ platform = "Universal" }: SeoContentProps) {
  const content = contentData[platform]

  return (
    <section className="mx-auto max-w-3xl pb-24 space-y-20 px-4 md:px-0">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight font-serif">
          Deep Dive: {platform} Bios
        </h2>
        <p className="mt-4 text-xl text-muted-foreground font-light">
          Everything you need to know about crafting the perfect profile.
        </p>
      </div>

      <div className="space-y-16">
        {/* Article 1 */}
        <article className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 max-w-none">
          <h3 className="text-3xl font-bold mb-6 text-foreground border-b border-border/40 pb-4">{content.heading1}</h3>
          <div className="text-muted-foreground text-lg space-y-6">
            {content.content1}
          </div>
        </article>

        {/* Article 2 */}
        <article className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 max-w-none">
          <h3 className="text-3xl font-bold mb-6 text-foreground border-b border-border/40 pb-4">{content.heading2}</h3>
          <div className="text-muted-foreground text-lg space-y-6">
            {content.content2}
          </div>
        </article>

        {/* Article 3 */}
        <article className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 max-w-none">
          <h3 className="text-3xl font-bold mb-6 text-foreground border-b border-border/40 pb-4">{content.heading3}</h3>
          <div className="text-muted-foreground text-lg space-y-6">
            {content.content3}
          </div>
        </article>
      </div>

      {/* Tips to Write Better Bios - Organic Visual Grid */}
      <div className="pt-16 border-t border-border/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground font-serif tracking-tight">Tips to Write Better Bios</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Actionable tips to elevate your profile instantly:
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
          {[
            { icon: Lightbulb, title: "Lead With a Hook", text: "Your first line is your headline. State who you are or the value you provide." },
            { icon: Palette, title: "Show, Don't Tell", text: "Demonstrate creativity through formatting and word choice." },
            { icon: AlignLeft, title: "Use Line Breaks", text: "Break your bio into scannable lines that guide the reader's eye." },
            { icon: MousePointerClick, title: "Include a CTA", text: "Tell visitors exactly what to do next - click the link or send a DM." },
            { icon: Smile, title: "Keep Emojis Intentional", text: "Use 2-4 emojis as visual bullet points, not as decoration." },
            { icon: RefreshCw, title: "Update Regularly", text: "Refresh your bio every 4-6 weeks to signal an active account." }
          ].map((tip, i) => (
            <div key={i} className="flex gap-4 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary/20">
                <tip.icon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1.5 text-lg tracking-tight group-hover:text-primary transition-colors">{tip.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
