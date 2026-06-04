"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/instagram-bio-generator", label: "Instagram Bio Generator" },
  { href: "/tiktok-bio-generator", label: "TikTok Bio Generator" },
  { href: "/youtube-bio-generator", label: "YouTube Bio Generator" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-4 transition-all duration-500 pointer-events-none">
      <div
        className={`pointer-events-auto relative flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 transition-all duration-500
          ${isScrolled 
            ? "h-14 rounded-full border border-border/50 bg-background/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl" 
            : "h-20 rounded-2xl border border-transparent bg-transparent"}
        `}
      >
        {/* Glow removed per Rule 4 */}

        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-3 group" aria-label="Profile Bio Generator Home" onClick={() => setMobileOpen(false)}>
          <div className="relative flex h-9 w-9 items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <svg viewBox="0 0 68 68" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="headerIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB"/>
                  <stop offset="100%" stopColor="#06B6D4"/>
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="68" height="68" rx="14" ry="14" fill="url(#headerIconGrad)"/>
              <polygon points="24,14 32,38 24,56 16,38" fill="#FFFFFF"/>
              <circle cx="24" cy="53" r="2.5" fill="#FFFFFF"/>
              <line x1="38" y1="20" x2="56" y2="20" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="38" y1="28" x2="54" y2="28" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="38" y1="36" x2="52" y2="36" stroke="#FFFFFF" strokeOpacity="0.50" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="38" y1="44" x2="50" y2="44" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-foreground" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Profile Bio
            </span>
            <span className="text-[11px] font-normal tracking-wide text-muted-foreground" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Generator
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 relative z-10" onMouseLeave={() => setHoveredPath(null)}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredPath(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {/* Hover Background */}
                {hoveredPath === link.href && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-background/50 border border-border/50 text-foreground md:hidden backdrop-blur-md transition-transform active:scale-95"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl md:hidden flex flex-col justify-center px-6 pointer-events-auto"
          >
            {/* Ambient background glow removed per Rule 4 */}
            
            <nav className="flex flex-col gap-6 relative z-10" aria-label="Mobile navigation">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between text-3xl font-bold tracking-tight transition-colors ${
                        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                      {isActive && <ChevronRight className="h-6 w-6 text-primary" />}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
