"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { 
  Copy, 
  Check, 
  RefreshCw, 
  Wand2, 
  User, 
  Tag, 
  Smile, 
  Hash, 
  Download, 
  AlertCircle, 
  ClipboardCopy,
  Layers,
  Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const toneOptions = [
  "Attitude",
  "Cool",
  "Stylish",
  "VIP",
  "Swag",
  "Professional",
  "Funny",
  "Motivational",
  "Simple",
  "Creative",
] as const

const categoryOptions = [
  "General",
  "Gaming",
  "Fitness",
  "Music",
  "Travel",
  "Photography",
  "Student",
  "Entrepreneur",
] as const

const platformOptions = [
  "Instagram",
  "TikTok",
  "Twitter / X",
  "LinkedIn",
  "YouTube",
  "Pinterest",
  "Threads",
] as const

type Tone = (typeof toneOptions)[number]
type Category = (typeof categoryOptions)[number]
type Platform = (typeof platformOptions)[number]

const bioTemplates: Record<Tone, string[]> = {
  Attitude: [
    "Born to express, not to impress {emoji}",
    "Silent but deadly. My success makes the noise {emoji}",
    "I don't have an attitude problem. You have a perception problem {emoji}",
    "Not everyone likes me, but not everyone matters {emoji}",
    "My life, my rules, my attitude {emoji}",
    "Too glam to give a damn {emoji}",
    "I am who I am. Your approval isn't needed {emoji}",
    "Walking through fire doesn't make you weak {emoji}",
    "Be a warrior, not a worrier {emoji}",
    "Lions don't lose sleep over the opinions of sheep {emoji}",
  ],
  Cool: [
    "Living my best life, one story at a time {emoji}",
    "Making memories around the world {emoji}",
    "Coffee addict and adventure seeker {emoji}",
    "Chasing sunsets and dreams {emoji}",
    "Just a cool guy in a warm world {emoji}",
    "Vibes speak louder than words {emoji}",
    "Low key but high value {emoji}",
    "Keeping it real since day one {emoji}",
    "Dream big, hustle hard, stay cool {emoji}",
    "Life is short, make it cool {emoji}",
  ],
  Stylish: [
    "Dressed to kill, born to thrill {emoji}",
    "Style is a way to say who you are without speaking {emoji}",
    "Fashion fades, but style is eternal {emoji}",
    "Simplicity is the ultimate sophistication {emoji}",
    "Making the world my runway {emoji}",
    "Elegance is not standing out but being remembered {emoji}",
    "Classy with a touch of sassy {emoji}",
    "My outfit speaks before I do {emoji}",
    "Stay stylish, stay humble {emoji}",
    "Dapper by nature, gentleman by choice {emoji}",
  ],
  VIP: [
    "VIP mentality, boss lifestyle {emoji}",
    "Living like a king in my own kingdom {emoji}",
    "First class mind in a world full of economy thinkers {emoji}",
    "Premium vibes only {emoji}",
    "Luxury is a necessity that begins where necessity ends {emoji}",
    "Don't watch me, watch my moves {emoji}",
    "Building an empire while they sleep {emoji}",
    "Exclusive mindset, inclusive heart {emoji}",
    "VIP access to greatness {emoji}",
    "Born to stand out from the VIP section {emoji}",
  ],
  Swag: [
    "Swag is not something you wear, it's something you are {emoji}",
    "Too much swag, zero apologies {emoji}",
    "My swag is on autopilot {emoji}",
    "Walk it like I talk it {emoji}",
    "Dripping in confidence {emoji}",
    "They see me rolling, they admiring {emoji}",
    "Swag game: infinity {emoji}",
    "Making moves in silence {emoji}",
    "Unbothered, moisturized, in my lane {emoji}",
    "Swag is the art of confidence {emoji}",
  ],
  Professional: [
    "Entrepreneur | Dreamer | Achiever {emoji}",
    "Turning vision into reality, one step at a time {emoji}",
    "CEO mindset with a hustler's work ethic {emoji}",
    "Building something meaningful {emoji}",
    "Passionate about growth and innovation {emoji}",
    "On a mission to create impact {emoji}",
    "Leadership is action, not position {emoji}",
    "Investing in myself daily {emoji}",
    "Goal-oriented | Purpose-driven {emoji}",
    "Creating value in everything I do {emoji}",
  ],
  Funny: [
    "I'm not lazy, I'm on energy saving mode {emoji}",
    "Professional overthinker, part-time human {emoji}",
    "Running on coffee and bad decisions {emoji}",
    "My brain has too many tabs open {emoji}",
    "I put the 'pro' in procrastinator {emoji}",
    "Currently pretending to be a functioning adult {emoji}",
    "Sarcasm is my love language {emoji}",
    "I followed my heart and it led me to the fridge {emoji}",
    "Error 404: Bio not found {emoji}",
    "If I was funny, I'd have a better bio {emoji}",
  ],
  Motivational: [
    "Dream it. Believe it. Build it {emoji}",
    "Your only limit is your mind {emoji}",
    "Rising and grinding every single day {emoji}",
    "Be the change you wish to see in the world {emoji}",
    "Hard work beats talent when talent doesn't work hard {emoji}",
    "Focused on becoming a better version of myself {emoji}",
    "Stay hungry, stay foolish {emoji}",
    "Progress, not perfection {emoji}",
    "The best time to start was yesterday. The next best time is now {emoji}",
    "Turning obstacles into opportunities {emoji}",
  ],
  Simple: [
    "Just a simple guy with big dreams {emoji}",
    "Keeping things simple and real {emoji}",
    "Less drama, more karma {emoji}",
    "Simple living, high thinking {emoji}",
    "Life is simple, don't complicate it {emoji}",
    "Happiness is homemade {emoji}",
    "Good vibes only {emoji}",
    "Be kind, always {emoji}",
    "Living simply so others can simply live {emoji}",
    "Simplicity is the key to brilliance {emoji}",
  ],
  Creative: [
    "Painting my life in bold colors {emoji}",
    "Creating art in everyday life {emoji}",
    "Mind full of ideas, heart full of dreams {emoji}",
    "Life is a canvas, make it a masterpiece {emoji}",
    "Imagine. Create. Inspire {emoji}",
    "Thinking outside the box since day one {emoji}",
    "Turning ideas into reality {emoji}",
    "Creative soul with a logical mind {emoji}",
    "Every day is a chance to create something beautiful {emoji}",
    "Art is not what I do, it's what I am {emoji}",
  ],
}

const emojiSets: Record<Tone, string[]> = {
  Attitude: ["\u{1F525}", "\u{1F4AF}", "\u{1F60E}", "\u26A1", "\u{1F5A4}", "\u{1F451}", "\u{1F43A}", "\u{1F4AA}"],
  Cool: ["\u{1F30A}", "\u2728", "\u{1F3AF}", "\u{1F919}", "\u{1F60E}", "\u{1F3C4}", "\u{1F334}", "\u{1F3A7}"],
  Stylish: ["\u{1F3A9}", "\u{1F454}", "\u{1F48E}", "\u2728", "\u{1F31F}", "\u{1FA84}", "\u{1F5A4}", "\u{1F935}"],
  VIP: ["\u{1F451}", "\u{1F48E}", "\u{1F3C6}", "\u2B50", "\u{1F525}", "\u{1F4AB}", "\u{1F947}", "\u{1F3AF}"],
  Swag: ["\u{1F4AF}", "\u{1F525}", "\u{1F624}", "\u{1F4AA}", "\u270C\uFE0F", "\u{1F918}", "\u{1F60F}", "\u26A1"],
  Professional: ["\u{1F4C8}", "\u{1F4BC}", "\u{1F3AF}", "\u{1F680}", "\u{1F4A1}", "\u{1F310}", "\u{1F4CA}", "\u2B50"],
  Funny: ["\u{1F602}", "\u{1F923}", "\u{1F61C}", "\u{1F92A}", "\u{1F604}", "\u{1F355}", "\u{1F3AE}", "\u{1F480}"],
  Motivational: ["\u{1F4AA}", "\u{1F680}", "\u{1F31F}", "\u{1F525}", "\u{1F3AF}", "\u2B50", "\u{1F3C6}", "\u{1F4A1}"],
  Simple: ["\u270C\uFE0F", "\u{1F33F}", "\u2600\uFE0F", "\u{1F90D}", "\u{1F338}", "\u{1F343}", "\u{1F60A}", "\u{1F54A}\uFE0F"],
  Creative: ["\u{1F3A8}", "\u2728", "\u{1F308}", "\u{1F4A1}", "\u{1F58C}\uFE0F", "\u{1F4F7}", "\u{1F3AD}", "\u{1F31F}"],
}

const hashtagSets: Record<Tone, string[]> = {
  Attitude: ["#AttitudeBoy", "#BornToRule", "#AlphaVibes", "#KingMindset"],
  Cool: ["#CoolVibes", "#ChillMode", "#GoodVibesOnly", "#StayCool"],
  Stylish: ["#StylishBoy", "#Fashion", "#Dapper", "#StyleGame"],
  VIP: ["#VIPLife", "#BossMode", "#LuxuryLife", "#Exclusive"],
  Swag: ["#SwagBoy", "#SwagLife", "#DrippingSwag", "#OwnTheGame"],
  Professional: ["#Hustle", "#Grind", "#Entrepreneur", "#Success"],
  Funny: ["#JustKidding", "#LOL", "#FunnyBio", "#Humor"],
  Motivational: ["#Motivation", "#NeverGiveUp", "#DreamBig", "#Inspire"],
  Simple: ["#SimpleLife", "#Minimalist", "#KeepItReal", "#GoodVibes"],
  Creative: ["#Creative", "#ArtLife", "#ThinkDifferent", "#Visionary"],
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function BioGeneratorTool({ platform: initialPlatform }: { platform?: Platform }) {
  const [name, setName] = useState("")
  const [tone, setTone] = useState<Tone>("Cool")
  const [category, setCategory] = useState<Category>("General")
  const [platform, setPlatform] = useState<Platform>(initialPlatform || "Instagram")
  const [includeEmojis, setIncludeEmojis] = useState(true)
  const [includeHashtags, setIncludeHashtags] = useState(false)
  const [numBios, setNumBios] = useState<number>(3)
  const [generatedBios, setGeneratedBios] = useState<string[]>([])
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [copiedAll, setCopiedAll] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const copyAllTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Clear timeouts on unmount to prevent leaks
  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
      if (copyAllTimeoutRef.current) clearTimeout(copyAllTimeoutRef.current)
    }
  }, [])

  // Universal bios generation function
  const generateBiosWithValues = useCallback((
    targetName: string,
    targetTone: Tone,
    targetCategory: Category,
    targetIncludeEmojis: boolean,
    targetIncludeHashtags: boolean,
    targetNumBios: number
  ) => {
    setIsGenerating(true)
    setCopiedIndex(null)

    setTimeout(() => {
      const templates = bioTemplates[targetTone]
      const emojis = emojiSets[targetTone]
      const hashtags = hashtagSets[targetTone]

      const shuffled = shuffleArray(templates)
      const selected = shuffled.slice(0, targetNumBios)

      const bios = selected.map((bio) => {
        let result = bio

        if (targetIncludeEmojis) {
          const randomEmojis = shuffleArray(emojis).slice(0, 2)
          result = result.replace("{emoji}", randomEmojis.join(" "))
        } else {
          result = result.replace(" {emoji}", "").replace("{emoji}", "")
        }

        if (targetName.trim()) {
          const nameVariations = [
            `${targetName} | `,
            `It's ${targetName}. `,
            `${targetName} here. `,
            `~ ${targetName}`,
          ]
          const randomName =
            nameVariations[Math.floor(Math.random() * nameVariations.length)]
          if (Math.random() > 0.5) {
            result = randomName + result
          } else {
            result = result + ` ${randomName.trim()}`
          }
        }

        if (targetCategory !== "General") {
          const categoryTags: Record<string, string> = {
            Gaming: "Gamer",
            Fitness: "Fitness Enthusiast",
            Music: "Music Lover",
            Travel: "Traveller",
            Photography: "Photographer",
            Student: "Student Life",
            Entrepreneur: "Entrepreneur",
          }
          result = `${categoryTags[targetCategory]} | ${result}`
        }

        if (targetIncludeHashtags) {
          const randomHashtags = shuffleArray(hashtags).slice(0, 2)
          result = `${result}\n${randomHashtags.join(" ")}`
        }

        return result.trim()
      })

      setGeneratedBios(bios)
      setIsGenerating(false)
    }, 600)
  }, [])

  // Action to generate with current form values
  const generateBios = useCallback(() => {
    generateBiosWithValues(name, tone, category, includeEmojis, includeHashtags, numBios)
  }, [generateBiosWithValues, name, tone, category, includeEmojis, includeHashtags, numBios])

  // Single card bio regeneration function
  const regenerateSingleBio = useCallback((index: number) => {
    const templates = bioTemplates[tone]
    const emojis = emojiSets[tone]
    const hashtags = hashtagSets[tone]

    const randomTemplate = templates[Math.floor(Math.random() * templates.length)]

    let result = randomTemplate
    if (includeEmojis) {
      const randomEmojis = shuffleArray(emojis).slice(0, 2)
      result = result.replace("{emoji}", randomEmojis.join(" "))
    } else {
      result = result.replace(" {emoji}", "").replace("{emoji}", "")
    }

    if (name.trim()) {
      const nameVariations = [
        `${name} | `,
        `It's ${name}. `,
        `${name} here. `,
        `~ ${name}`,
      ]
      const randomName = nameVariations[Math.floor(Math.random() * nameVariations.length)]
      if (Math.random() > 0.5) {
        result = randomName + result
      } else {
        result = result + ` ${randomName.trim()}`
      }
    }

    if (category !== "General") {
      const categoryTags: Record<string, string> = {
        Gaming: "Gamer",
        Fitness: "Fitness Enthusiast",
        Music: "Music Lover",
        Travel: "Traveller",
        Photography: "Photographer",
        Student: "Student Life",
        Entrepreneur: "Entrepreneur",
      }
      result = `${categoryTags[category]} | ${result}`
    }

    if (includeHashtags) {
      const randomHashtags = shuffleArray(hashtags).slice(0, 2)
      result = `${result}\n${randomHashtags.join(" ")}`
    }

    const formattedBio = result.trim()
    setGeneratedBios((prev) => {
      const next = [...prev]
      next[index] = formattedBio
      return next
    })
  }, [name, tone, category, includeEmojis, includeHashtags])

  // Preset pill handler
  const handlePresetClick = useCallback((preset: "Fitness Influencer" | "Tech Entrepreneur" | "Travel Blogger") => {
    let nextName = name
    let nextCategory: Category = "General"
    let nextTone: Tone = "Cool"
    let nextIncludeEmojis = true
    let nextIncludeHashtags = true
    let nextNumBios = 3

    if (preset === "Fitness Influencer") {
      nextCategory = "Fitness"
      nextTone = "Motivational"
    } else if (preset === "Tech Entrepreneur") {
      nextCategory = "Entrepreneur"
      nextTone = "Professional"
    } else if (preset === "Travel Blogger") {
      nextCategory = "Travel"
      nextTone = "Creative"
    }

    setName(nextName)
    setCategory(nextCategory)
    setTone(nextTone)
    setIncludeEmojis(nextIncludeEmojis)
    setIncludeHashtags(nextIncludeHashtags)
    setNumBios(nextNumBios)

    generateBiosWithValues(nextName, nextTone, nextCategory, nextIncludeEmojis, nextIncludeHashtags, nextNumBios)
  }, [generateBiosWithValues, name])

  // Clipboard copies: Single Bio Card copy
  const copyBio = useCallback(async (bio: string, index: number) => {
    try {
      await navigator.clipboard.writeText(bio)
      setCopiedIndex(index)
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
      copyTimeoutRef.current = setTimeout(() => setCopiedIndex(null), 2000)
    } catch {
      const textarea = document.createElement("textarea")
      textarea.value = bio
      textarea.style.position = "fixed"
      textarea.style.opacity = "0"
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      setCopiedIndex(index)
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
      copyTimeoutRef.current = setTimeout(() => setCopiedIndex(null), 2000)
      console.warn("Clipboard copy failed, using fallback copy.")
      document.body.focus()
    }
  }, [])

  // Clipboard copies: Copy All generated bios
  const copyAllBios = useCallback(async () => {
    const textToCopy = generatedBios.join("\n\n")
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopiedAll(true)
      if (copyAllTimeoutRef.current) clearTimeout(copyAllTimeoutRef.current)
      copyAllTimeoutRef.current = setTimeout(() => setCopiedAll(false), 2000)
    } catch {
      const textarea = document.createElement("textarea")
      textarea.value = textToCopy
      textarea.style.position = "fixed"
      textarea.style.opacity = "0"
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      setCopiedAll(true)
      if (copyAllTimeoutRef.current) clearTimeout(copyAllTimeoutRef.current)
      copyAllTimeoutRef.current = setTimeout(() => setCopiedAll(false), 2000)
      console.warn("Clipboard copyAll failed, using fallback copy.")
      document.body.focus()
    }
  }, [generatedBios])

  // Download all bios as a formatted txt file
  const downloadBios = useCallback(() => {
    const textContent = generatedBios
      .map((bio, idx) => `Bio #${idx + 1}:\n${bio}`)
      .join("\n\n====================\n\n")
    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `instagram-bios-${tone.toLowerCase()}-${category.toLowerCase()}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }, [generatedBios, tone, category])

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 md:gap-12 items-start relative sm:rounded-2xl border-y sm:border-x border-border bg-card p-4 sm:p-6 md:p-8 shadow-sm">
      
      {/* LEFT PANEL: 40% Width controls */}
      <div className="flex flex-col gap-6 w-full">
        {!initialPlatform && (
          <div>
            <Label htmlFor="platform" className="text-sm font-semibold text-foreground flex items-center gap-1.5 cursor-pointer">
              <Globe className="h-4 w-4 text-muted-foreground" />
              Social Platform
            </Label>
            <Select
              value={platform}
              onValueChange={(v) => setPlatform(v as Platform)}
            >
              <SelectTrigger id="platform" className="mt-2 rounded-md border-border bg-background">
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                {platformOptions.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div>
          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-1.5 cursor-pointer">
              <User className="h-4 w-4 text-muted-foreground" />
              Your Name (Optional)
            </Label>
            <span className="text-xs text-muted-foreground font-mono tabular-nums">
              {name.length}/30
            </span>
          </div>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value.slice(0, 30))}
            maxLength={30}
            placeholder="Enter your name"
            className="mt-2 rounded-md border-border bg-background"
          />
        </div>

        <div>
          <Label htmlFor="category" className="text-sm font-semibold text-foreground flex items-center gap-1.5 cursor-pointer">
            <Tag className="h-4 w-4 text-muted-foreground" />
            Category
          </Label>
          <Select
            value={category}
            onValueChange={(v) => setCategory(v as Category)}
          >
            <SelectTrigger id="category" className="mt-2 rounded-md border-border bg-background">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categoryOptions.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="tone" className="text-sm font-semibold text-foreground flex items-center gap-1.5 cursor-pointer">
            <Smile className="h-4 w-4 text-muted-foreground" />
            Tone / Style
          </Label>
          <Select
            value={tone}
            onValueChange={(v) => setTone(v as Tone)}
          >
            <SelectTrigger id="tone" className="mt-2 rounded-md border-border bg-background">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              {toneOptions.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="numBios" className="text-sm font-semibold text-foreground flex items-center gap-1.5 cursor-pointer">
            <Layers className="h-4 w-4 text-muted-foreground" />
            Number of Bios to Generate
          </Label>
          <Select
            value={String(numBios)}
            onValueChange={(v) => setNumBios(Number(v))}
          >
            <SelectTrigger id="numBios" className="mt-2 rounded-md border-border bg-background">
              <SelectValue placeholder="Select count" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={String(num)}>
                  {num} {num === 1 ? "Bio" : "Bios"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-4 py-3 border-y border-border/60">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Smile className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="emoji" className="text-sm text-foreground cursor-pointer font-medium">
                Include Emojis
              </Label>
            </div>
            <Switch
              id="emoji"
              checked={includeEmojis}
              onCheckedChange={setIncludeEmojis}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Hash className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="hashtags" className="text-sm text-foreground cursor-pointer font-medium">
                Include Hashtags
              </Label>
            </div>
            <Switch
              id="hashtags"
              checked={includeHashtags}
              onCheckedChange={setIncludeHashtags}
            />
          </div>
        </div>

        <Button
          onClick={generateBios}
          disabled={isGenerating}
          size="lg"
          className="w-full rounded-md bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-200"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-4 w-4" />
              Generate {numBios} {numBios === 1 ? "Bio Idea" : "Bio Ideas"}
            </>
          )}
        </Button>
      </div>

      {/* RIGHT PANEL: 60% Width Output (Separated by border on md screens) */}
      <div className="md:border-l md:border-border md:pl-8 lg:pl-10 min-h-[480px] flex flex-col justify-start w-full gap-4">
        
        {/* Empty State placeholder */}
        {generatedBios.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-16 px-4 h-full border border-dashed border-border rounded-2xl bg-muted/10 my-auto">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Wand2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Your Bios Will Appear Here</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs leading-relaxed">
              Fill in the form on the left and hit Generate, or kickstart with one of our high-converting presets:
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-2.5 max-w-md w-full">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePresetClick("Fitness Influencer")}
                className="rounded-md bg-background border-border text-xs px-4 py-2 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium"
              >
                Fitness Influencer
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePresetClick("Tech Entrepreneur")}
                className="rounded-md bg-background border-border text-xs px-4 py-2 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium"
              >
                Tech Entrepreneur
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePresetClick("Travel Blogger")}
                className="rounded-md bg-background border-border text-xs px-4 py-2 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium"
              >
                Travel Blogger
              </Button>
            </div>
          </div>
        ) : (
          /* Generated Bios List */
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Generated Bios
                </h3>
                <p className="text-xs text-muted-foreground">
                  Choose from {generatedBios.length} custom variation{generatedBios.length === 1 ? "" : "s"} below
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyAllBios}
                  className="rounded-md border-border text-foreground hover:bg-muted text-xs flex items-center gap-1.5 transition-all duration-200"
                >
                  {copiedAll ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-green-600 animate-in zoom-in-50" />
                      <span className="font-semibold text-green-600">Copied All!</span>
                    </>
                  ) : (
                    <>
                      <ClipboardCopy className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>Copy All</span>
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadBios}
                  className="rounded-md border-border text-foreground hover:bg-muted text-xs flex items-center gap-1.5 transition-all duration-200"
                >
                  <Download className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Download .txt</span>
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {generatedBios.map((bio, index) => {
                const charCount = bio.length
                
                const getPlatformLimit = (p: Platform) => {
                  switch(p) {
                    case "TikTok": return 80
                    case "Twitter / X": return 160
                    case "Pinterest": return 160
                    case "LinkedIn": return 220
                    case "Threads": return 500
                    case "YouTube": return 1000
                    case "Instagram":
                    default: return 150
                  }
                }
                
                const limit = getPlatformLimit(platform)
                const isExceeded = charCount > limit

                return (
                  <div
                    key={`${bio}-${index}`}
                    className="group relative rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:border-border/80 flex flex-col justify-between gap-4"
                  >
                    <p className="whitespace-pre-line text-sm leading-relaxed text-foreground pr-2 font-sans font-medium">
                      {bio}
                    </p>

                    <div className="flex items-center justify-between mt-2 pt-3 border-t border-border/40">
                      {/* Character Count text */}
                      <div className="flex items-center">
                        {isExceeded ? (
                          <span className="flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400">
                            <AlertCircle className="h-3.5 w-3.5" />
                            {charCount}/{limit} chars
                          </span>
                        ) : (
                          <span className="text-xs font-medium text-muted-foreground">
                            {charCount}/{limit} chars
                          </span>
                        )}
                      </div>

                      {/* Card Actions */}
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => regenerateSingleBio(index)}
                          className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                          title="Regenerate this bio"
                        >
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyBio(bio, index)}
                          className="h-8 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg px-2 flex items-center gap-1 transition-all duration-200"
                          aria-label={`Copy bio ${index + 1}`}
                        >
                          {copiedIndex === index ? (
                            <>
                              <Check className="h-4 w-4 text-green-600 animate-in zoom-in-50" />
                              <span className="text-xs font-semibold text-green-600">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4" />
                              <span className="text-xs font-medium">Copy</span>
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
