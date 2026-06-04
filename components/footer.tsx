import Link from "next/link"

const footerLinks = {
  Tools: [
    { href: "/instagram-bio-generator", label: "Instagram Bio Generator" },
    { href: "/tiktok-bio-generator", label: "TikTok Bio Generator" },
    { href: "/youtube-bio-generator", label: "YouTube Bio Generator" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background pt-16 pb-8 overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group" aria-label="Profile Bio Generator Home">
              <div className="flex h-10 w-10 items-center justify-center group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 68 68" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="footerIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB"/>
                      <stop offset="100%" stopColor="#06B6D4"/>
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="68" height="68" rx="14" ry="14" fill="url(#footerIconGrad)"/>
                  <polygon points="24,14 32,38 24,56 16,38" fill="#FFFFFF"/>
                  <circle cx="24" cy="53" r="2.5" fill="#FFFFFF"/>
                  <line x1="38" y1="20" x2="56" y2="20" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="38" y1="28" x2="54" y2="28" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="38" y1="36" x2="52" y2="36" stroke="#FFFFFF" strokeOpacity="0.50" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="38" y1="44" x2="50" y2="44" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-foreground" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                  Profile Bio
                </span>
                <span className="text-xs font-normal tracking-wide text-muted-foreground" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                  Generator
                </span>
              </div>
            </Link>
            <p className="max-w-xs text-base leading-relaxed text-muted-foreground">
              The ultimate AI-powered social media bio generator. Create
              cool, stylish, and highly-converting bios in seconds.
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  {category}
                </h3>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                         href={link.href}
                         className="text-muted-foreground transition-colors hover:text-primary font-medium"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-sm font-medium text-muted-foreground">
            &copy; {new Date().getFullYear()} Profile Bio Generator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
