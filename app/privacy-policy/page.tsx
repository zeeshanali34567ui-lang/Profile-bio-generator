import type { Metadata } from "next"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - How We Protect Your Data",
  description:
    "Read InstaBioGen's privacy policy. Learn how we collect, use, and protect your data when using our free AI Instagram bio generator.",
  alternates: {
    canonical: "https://profilebiogenerator.site/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | InstaBioGen",
    description: "Read InstaBioGen's privacy policy.",
    url: "https://profilebiogenerator.site/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | InstaBioGen",
    description: "Read InstaBioGen's privacy policy.",
  },
}

const sections = [
  {
    title: "1. Introduction",
    content: `Welcome to InstaBioGen ("we", "our", "us"). We are committed to protecting and respecting your privacy. This Privacy Policy explains how we handle information when you visit our website at profilebiogenerator.site and use our Instagram bio generator tool. By using our website, you agree to the practices described in this policy.`,
  },
  {
    title: "2. Information We Collect",
    content:
      "We design our service to minimize data collection. Here is what we may collect:",
    list: [
      {
        bold: "Usage & Analytics Data:",
        text: "We use Vercel Analytics to understand how visitors interact with our website. This includes anonymized data like pages visited, time spent on pages, referring URLs, and general engagement metrics. This data is aggregated and cannot be used to identify individual users.",
      },
      {
        bold: "Device & Browser Information:",
        text: "Standard technical information automatically sent by your browser, including browser type and version, operating system, device type, and screen resolution. This helps us optimize the website for all devices.",
      },
      {
        bold: "Contact Form Data:",
        text: "If you choose to reach out through our contact page, we collect the name, email address, subject, and message you voluntarily provide. This data is used solely to respond to your inquiry.",
      },
      {
        bold: "Generated Bio Data:",
        text: "The bios you generate are created in real-time on our servers and are NOT stored, logged, or saved anywhere. Once you leave the page, the generated content is gone unless you copied it.",
      },
    ],
  },
  {
    title: "3. What We Do NOT Collect",
    content: "We want to be transparent about what we intentionally avoid:",
    list: [
      { bold: "No Account Data:", text: "We do not require registration or login. There are no user accounts." },
      { bold: "No Personal Profiles:", text: "We do not build profiles about you or track you across websites." },
      { bold: "No Payment Data:", text: "Our service is completely free. We never collect credit card or payment information." },
      { bold: "No Location Tracking:", text: "We do not track or store your precise geographic location." },
    ],
  },
  {
    title: "4. How We Use Your Information",
    list: [
      { bold: "Website Improvement:", text: "Analytics data helps us understand which features are popular and where we can improve the user experience." },
      { bold: "Communication:", text: "If you contact us, we use your provided information to respond to your query." },
      { bold: "Technical Performance:", text: "Device data helps us ensure the website works smoothly across different browsers and screen sizes." },
      { bold: "Legal Compliance:", text: "We may use data when required to comply with applicable laws or regulations." },
    ],
  },
  {
    title: "5. Cookies & Tracking Technologies",
    content: `We use minimal cookies that are essential for website functionality. Vercel Analytics uses privacy-friendly, cookie-less analytics that do not track individual users across sites. We do not use any third-party advertising cookies. If we ever introduce optional cookies (such as for preferences), we will provide clear notice and a way to manage your choices through your browser settings.`,
  },
  {
    title: "6. Third-Party Services",
    content: "We use the following trusted third-party services:",
    list: [
      { bold: "Vercel:", text: "Our hosting provider and analytics platform. Vercel processes data in accordance with their privacy policy and is committed to data protection." },
      { bold: "Google Fonts:", text: "We use Google Fonts to display custom typography. Google may collect limited technical data when fonts are loaded." },
    ],
    afterContent:
      "We do not sell, rent, or share your personal information with any third parties for marketing purposes.",
  },
  {
    title: "7. Data Security",
    content:
      "We take the security of your data seriously. Our website is served over HTTPS, ensuring all data transmitted between your browser and our servers is encrypted. We use industry-standard security practices provided by Vercel's infrastructure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "8. Data Retention",
    content:
      "Analytics data is retained in anonymized, aggregated form as managed by Vercel Analytics. Contact form submissions are retained only as long as necessary to respond to your inquiry, after which they are deleted. Generated bios are never stored.",
  },
  {
    title: "9. Children's Privacy",
    content:
      "Our service is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately and we will take steps to remove it.",
  },
  {
    title: "10. Your Rights",
    content: "You have the right to:",
    list: [
      { bold: "Access:", text: "Request a copy of any personal data we hold about you (primarily limited to contact form submissions)." },
      { bold: "Deletion:", text: "Request that we delete any personal data associated with you." },
      { bold: "Correction:", text: "Request correction of any inaccurate data." },
      { bold: "Objection:", text: "Object to certain types of data processing." },
    ],
    afterContent:
      "To exercise any of these rights, please email us at contact@profilebiogenerator.site. We will respond within 30 days.",
  },
  {
    title: "11. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make changes, we will update the \"Last updated\" date at the top of this page. We encourage you to review this policy periodically.",
  },
  {
    title: "12. Contact Us",
    content:
      "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us at:",
    afterContent: "Email: contact@profilebiogenerator.site",
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Shield className="h-3.5 w-3.5" />
            Your Privacy Matters
          </div>
          <h1
            className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last updated: February 2026
          </p>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            We believe in being fully transparent about how we handle your
            data. The short version: we collect almost nothing, store even less,
            and never sell anything.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-border bg-card py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-border bg-background p-6 md:p-8"
              >
                <h2 className="text-xl font-bold text-foreground">
                  {section.title}
                </h2>
                {section.content && (
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {section.content}
                  </p>
                )}
                {section.list && (
                  <ul className="mt-4 flex flex-col gap-3 pl-1">
                    {section.list.map((item) => (
                      <li key={item.bold} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          <strong className="font-semibold text-foreground">
                            {item.bold}
                          </strong>{" "}
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
                {section.afterContent && (
                  <p className="mt-4 text-sm font-medium text-foreground">
                    {section.afterContent}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
