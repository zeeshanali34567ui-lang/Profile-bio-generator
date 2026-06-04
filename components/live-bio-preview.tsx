"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Heart, MessageCircle, Send, Bookmark } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const bioExamples = [
  {
    name: "Alex | Tech & Design",
    bio: "Building the future, one pixel at a time \u2728\nDesign Engineer @startup\nCoffee addict & late-night coder \u2615",
  },
  {
    name: "Sarah Adventures",
    bio: "Exploring the unseen \u{1F30D}\n50 countries and counting \u2708\uFE0F\nNext stop: Tokyo \u{1F3EE}\nTravel \u2022 Photography \u2022 Life",
  },
  {
    name: "Jay | Fitness Coach",
    bio: "Transforming lives daily \u{1F4AA}\nOnline Coaching | Meal Plans \u{1F34F}\nJoin the 100 Day Challenge! \u{1F525}",
  }
]

export function LiveBioPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bioExamples.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative mx-auto max-w-[340px] rounded-[3rem] border-8 border-border bg-background p-4 shadow-2xl overflow-hidden aspect-[9/19]">
      {/* Dynamic Island / Notch */}
      <div className="absolute left-1/2 top-0 h-6 w-1/3 -translate-x-1/2 rounded-b-xl bg-border z-20"></div>

      {/* Glow Effect */}
      <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-primary/20 blur-[80px]"></div>
      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-accent/20 blur-[80px]"></div>

      <div className="relative z-10 flex h-full flex-col pt-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4">
          <span className="text-sm font-bold tracking-tight">instabiogen</span>
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5" />
            <MessageCircle className="h-5 w-5" />
            <Send className="h-5 w-5" />
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-4 py-2">
          <div className="relative">
            <div className="absolute -inset-1 animate-spin-slow rounded-full bg-gradient-to-tr from-primary to-accent opacity-70 blur-sm"></div>
            <Avatar className="h-16 w-16 border-2 border-background relative z-10">
              <AvatarImage src={`https://api.dicebear.com/7.x/notionists/svg?seed=${currentIndex}`} />
              <AvatarFallback>IBG</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-1 justify-between text-center">
            <div>
              <div className="text-base font-bold">142</div>
              <div className="text-xs text-muted-foreground">Posts</div>
            </div>
            <div>
              <div className="text-base font-bold">12.4k</div>
              <div className="text-xs text-muted-foreground">Followers</div>
            </div>
            <div>
              <div className="text-base font-bold">1,200</div>
              <div className="text-xs text-muted-foreground">Following</div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="py-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="space-y-1"
            >
              <h2 className="text-sm font-bold">{bioExamples[currentIndex].name}</h2>
              <p className="text-sm whitespace-pre-line leading-snug">
                {bioExamples[currentIndex].bio}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-3 text-sm font-medium text-blue-500">linktr.ee/profile</div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 py-2">
          <div className="flex-1 rounded-lg bg-secondary py-1.5 text-center text-sm font-bold">Follow</div>
          <div className="flex-1 rounded-lg bg-secondary py-1.5 text-center text-sm font-bold">Message</div>
        </div>

        {/* Post Grid Placeholder */}
        <div className="mt-4 grid flex-1 grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="aspect-square bg-muted/50 rounded-sm"></div>
          ))}
        </div>
      </div>
    </div>
  )
}
