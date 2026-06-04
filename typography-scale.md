# Headcanon Space Typography Scale

Based on the established design rules (Rule 9), here is the detailed breakdown of font selections and exact pixel sizes for headings and paragraphs across the site.

## Font Families
* **Serif (Headings)**: `Playfair Display, Georgia, serif` (Mapped to `var(--font-serif)`)
* **Sans-Serif (Body & UI)**: `DM Sans, system-ui, sans-serif` (Mapped to `var(--font-sans)`)

---

## 1. Main Page Titles (H1)
Used for the primary page title at the very top of each page.
* **Font**: Serif (`font-serif`)
* **Weight**: Extra Bold (`font-extrabold`)
* **Tracking**: Tight (`tracking-tight`)
* **Sizes**:
  * Mobile (`text-4xl`): **36px**
  * Desktop (`sm:text-5xl`): **48px**

## 2. Primary Sections & FAQ Headings (H2)
Used for all major section dividers and the FAQ heading. Strictly uses the `.section__h2` CSS class.
* **Font**: Serif (`font-serif`)
* **Weight**: Extra Bold (`font-extrabold` / `800`)
* **Line Height**: `1.15`
* **Letter Spacing**: `-0.8px`
* **Sizes (Fluid)**:
  * Scales fluidly based on screen width using `clamp(28px, 4vw, 42px)`.
  * Minimum size (Mobile): **28px**
  * Maximum size (Desktop): **42px**

## 3. Subheadings & Card Headers (H3)
Used for individual tool cards, blog post titles, and smaller section subheadings.
* **Font**: Sans-Serif (`font-sans`)
* **Weight**: Bold (`font-bold`)
* **Sizes**:
  * Mobile (`text-lg`): **18px**
  * Desktop (`sm:text-xl`): **20px**

## 4. Body Text & Paragraphs (P)
Used for standard prose, FAQ answers, and descriptive text.
* **Font**: Sans-Serif (`font-sans`)
* **Line Height**: Relaxed (`leading-relaxed` / ~`1.625`)
* **Color**: Muted (`text-[var(--color-text-muted)]`)
* **Sizes**:
  * Mobile (`text-sm`): **14px**
  * Desktop (`sm:text-base`): **16px**

---

### Implementation Notes
* To maintain consistency, **do not use ad-hoc pixel values** or inline styles. Always use the respective Tailwind classes (e.g., `text-4xl sm:text-5xl`) or the `.section__h2` global class.
