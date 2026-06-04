import { Copy } from "lucide-react"

const bioCategories = [
  {
    category: "Stylish Bios for Boys",
    bios: [
      "✨ Living life in my own lane \n🌟 Dreamer by night, achiever by day \n👑 Unstoppable",
      "🎨 Creating my own sunshine \n✨ Designer of my own reality \n💫 Chasing stars",
      "🖤 Elegance is an attitude \n✨ Minimalist soul \n🌟 Less perfection, more authenticity",
      "✨ Radiating positive vibes only \n🌟 Living for the moments you can't put into words",
      "👑 Masterpiece in progress \n✨ Painting life with my own colors \n🌟 Unique edition",
      "💫 Turning dreams into vision \n✨ Vision into reality \n🌟 Watch me glow",
      "🎨 Art is my middle name \n✨ Living a life colored by imagination",
      "✨ Always dressed in confidence \n🌟 Wearing my invisible crown daily",
      "🔥 Born to express, not to impress \n💯 Living a stylish life \n💎 Limitless",
      "🌟 Keep your heels, head, and standards high \n✨ Creating memories"
    ]
  },
  {
    category: "Attitude Bios for Boys",
    bios: [
      "🔥 Born to stand out \n⚡ Rule breaker \n💯 Zero apologies given",
      "💯 I don't follow trends, I set them \n🔥 Unleashing my inner beast",
      "⚡ They told me I couldn't \n🔥 So I did \n💯 Watch me do it again",
      "🔥 No permission needed \n💯 Simply living by my own rules",
      "⚡ Excellence is not an act, it's my habit \n🔥 Born ready",
      "💯 Not here to fit in \n🔥 Here to take over \n⚡ Legacy builder",
      "🔥 My attitude reflects your behavior \n💯 Choose wisely",
      "⚡ Speak less, act more \n🔥 Let success make the noise",
      "👑 King of my own world \n💯 Attitude in my blood",
      "🔥 Hate me or love me, I'm still gonna shine \n⚡ Pure savage"
    ]
  },
  {
    category: "Cool Bios for Boys",
    bios: [
      "🌊 Going with the flow \n🤙 Keeping it real since day one \n🌴 Chill vibes only",
      "🎮 Professional over-thinker \n🎧 Music addict \n✌️ Pizza enthusiast",
      "🤙 I put the 'Elation' in Public Relations \n🌊 Enjoying the ride",
      "🌴 Collecting memories \n✌️ Not things \n🌊 Wanderlust soul",
      "🎧 Life is short \n🤙 Smile while you still have teeth",
      "✌️ Too cool for your rules \n🌊 Riding the waves of adventure",
      "🌴 Sun-kissed and totally blessed \n🤙 Taking life one day at a time",
      "🎧 Soundtrack of my life currently playing \n✌️ Do not disturb",
      "🌊 Just another papercut survivor \n✌️ Keeping it simple",
      "🌴 Reality called, so I hung up \n🤙 Surfing through life"
    ]
  },
  {
    category: "VIP Bios for Boys",
    bios: [
      "💎 Premium edition \n🏆 Born to lead \n👑 Operating at the highest level",
      "👑 CEO of my own life \n💎 Exclusive access only \n🏆 Making history",
      "🏆 Focus on the vision \n💎 Ignore the noise \n👑 Future billionaire",
      "💎 Top tier mindset \n👑 Building an empire \n🏆 Elite standards",
      "👑 Rare breed \n💎 Adding value daily \n🏆 Strictly business",
      "🏆 Playing the long game \n💎 High value, low tolerance for drama",
      "💎 Master of my fate \n👑 Captain of my soul \n🏆 Unlimited access",
      "🏆 Setting the gold standard \n💎 Elevating everyone around me",
      "👑 Luxury lifestyle \n💎 Building my legacy one day at a time",
      "🏆 Success is the only option \n👑 Elite mentality"
    ]
  },
  {
    category: "Aesthetic Bios for Girls",
    bios: [
      "🌸 Plant mom & sunset chaser \n✨ Finding magic in the mundane",
      "🦋 Romancing my life \n☁️ Creating a beautiful existence",
      "☕ Coffee, poetry, and vintage vibes \n✨ Soft aesthetic",
      "🌙 Moon child chasing solar eclipses \n🌸 Blooming quietly",
      "🤍 Keeping it minimalist \n✨ Less is definitely more",
      "☁️ Head in the clouds \n🦋 Heart in the art",
      "🌸 Pastels and deep thoughts \n✨ Embracing my feminine energy",
      "🤍 Neutral palette \n☕ Cozy afternoons and rainy days",
      "🦋 Collecting beautiful moments \n🌙 Star gazer",
      "✨ Romanticizing every second \n🌸 Soft girl era"
    ]
  },
  {
    category: "Attitude Bios for Girls",
    bios: [
      "💅 Queen of my own castle \n💄 Too glam to give a damn",
      "👑 Crown adjusted \n👠 Standards high \n💄 Flawless",
      "💅 Sweet as sugar, hard as ice \n👑 Cross me once, I'll break you twice",
      "💄 Prove them wrong \n👠 Look cute while doing it",
      "👑 Not your average girl \n💅 Unapologetically me",
      "👠 Walking over obstacles like a runway model \n💄 Fierce",
      "💅 I don't need your approval \n👑 I have my own",
      "💄 Beautiful but dangerous \n👠 Handle with caution",
      "👑 Better than your ex \n💅 Better than your next",
      "👠 Slaying every single day \n💄 Boss lady"
    ]
  },
  {
    category: "Professional Bios",
    bios: [
      "📈 Helping brands grow \n💼 Digital Marketer \n📩 DM for collabs",
      "💻 Software Engineer \n🚀 Building the future of tech",
      "✍️ Freelance Writer & Editor \n📚 Helping you tell your story",
      "📸 Photographer \n🌍 Capturing the world's hidden beauty",
      "🎨 UI/UX Designer \n✨ Designing seamless digital experiences",
      "💼 Entrepreneur \n📈 Scaling businesses from zero to hero",
      "🎓 Constant Learner \n💡 Sharing insights on professional growth",
      "📈 Financial Advisor \n💰 Making your money work for you",
      "💻 Tech Enthusiast \n🚀 Code, Coffee, and Innovation",
      "💼 Real Estate Agent \n🏠 Helping you find your dream home"
    ]
  },
  {
    category: "Funny Bios",
    bios: [
      "🍕 I put the 'pro' in procrastinate \n🫠 Expert nap taker",
      "🤡 My bed is a magical place where I suddenly remember everything I was supposed to do",
      "🌮 I'm not lazy, I'm just on energy-saving mode",
      "🍟 Professional snack tester \n🥤 Will work for food",
      "🫠 I desperately need a 6-month vacation, twice a year",
      "🤡 I suffer from an extreme case of not being a Kardashian",
      "🍕 I'm actually not funny, I'm just really mean and people think I'm joking",
      "🌮 Why fall in love when you can fall asleep?",
      "🥤 Holding it all together with one bobby pin \n🍟 Send help",
      "🫠 I followed my heart and it led me to the fridge"
    ]
  }
]

export function PopularBiosSection() {
  return (
    <section className="bg-background py-16 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
            The Ultimate Instagram Bio Database
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Browse our massive, hand-picked database of over 80+ top-performing, highly engaging Instagram bios for 2026. Whether you need a stylish boy's bio, a clean aesthetic girl's bio, or a hilarious quote, you will find it below. Use our AI generator above to craft thousands more unique combinations!
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {bioCategories.map((group) => (
            <div key={group.category} className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-3">
                {group.category}
              </h3>
              <div className="flex flex-col gap-5">
                {group.bios.map((bio, idx) => (
                  <div key={idx} className="group relative rounded-2xl border border-border bg-card p-5 hover:border-primary/50 hover:shadow-md transition-all">
                    <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                      {bio}
                    </p>
                    <button 
                      className="absolute top-3 right-3 p-2 rounded-lg bg-muted text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-white shadow-sm"
                      title="Copy to clipboard"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
