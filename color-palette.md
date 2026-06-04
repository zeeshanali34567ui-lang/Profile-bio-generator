# Headcanon Space Color Palette

Based on the design rules (solid colors, indigo/purple highlights, elegant typography), here is the proposed color palette for the site:

## Light Mode
- **Background**: `#FFFFFF` (White)
- **Foreground / Primary Text**: `#0F172A` (Slate 900)
- **Secondary / Muted Text**: `#475569` (Slate 600)
- **Primary / Brand (Indigo/Purple)**: `#4F46E5` (Indigo 600)
- **Card Background**: `#FFFFFF` (White)
- **Border**: `#E2E8F0` (Slate 200)

## Dark Mode
- **Background**: `#020617` (Slate 950)
- **Foreground / Primary Text**: `#F8FAFC` (Slate 50)
- **Secondary / Muted Text**: `#94A3B8` (Slate 400)
- **Primary / Brand (Indigo/Purple)**: `#818CF8` (Indigo 400)
- **Card Background**: `#0F172A` (Slate 900)
- **Border**: `#1E293B` (Slate 800)

## Usage in Tailwind CSS
These colors map to standard Tailwind CSS variables to ensure site-wide consistency (Rule 9).
* **Primary Text**: `var(--color-text)` -> `var(--foreground)`
* **Muted Text**: `var(--color-text-muted)` -> `var(--muted-foreground)`
* **Brand Highlights**: `var(--color-primary)`
