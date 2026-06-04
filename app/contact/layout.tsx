import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us – InstaBioGen | Get Support & Help",
  description:
    "Contact InstaBioGen! Have questions about our Instagram bio generator? Send us a message and our team will get back to you within 24-48 hours.",
  alternates: {
    canonical: "https://profilebiogenerator.site/contact",
  },
  openGraph: {
    title: "Contact Us – InstaBioGen | Get Support & Help",
    description:
      "Get in touch with InstaBioGen. Questions about our Instagram bio generator? We are here to help.",
    url: "https://profilebiogenerator.site/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Us – InstaBioGen | Get Support & Help",
    description: "Submit a form to contact the InstaBioGen team.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact InstaBioGen",
            description: "Get in touch with InstaBioGen. Have questions about our Instagram bio generator? We are here to help.",
            url: "https://profilebiogenerator.site/contact",
          }),
        }}
      />
      {children}
    </>
  )
}
