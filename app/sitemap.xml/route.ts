import { NextResponse } from 'next/server';

export async function GET() {
  const siteUrl = "https://profilebiogenerator.site";
  const date = new Date().toISOString();
  
  const pages = [
    { url: siteUrl, priority: 1.0, changefreq: "daily" },
    { url: `${siteUrl}/instagram-bio-generator`, priority: 0.9, changefreq: "daily" },
    { url: `${siteUrl}/tiktok-bio-generator`, priority: 0.9, changefreq: "daily" },
    { url: `${siteUrl}/youtube-bio-generator`, priority: 0.9, changefreq: "daily" },
    { url: `${siteUrl}/about`, priority: 0.8, changefreq: "monthly" },
    { url: `${siteUrl}/contact`, priority: 0.7, changefreq: "monthly" },
    { url: `${siteUrl}/privacy-policy`, priority: 0.3, changefreq: "yearly" },
    { url: `${siteUrl}/disclaimer`, priority: 0.3, changefreq: "yearly" },
    { url: `${siteUrl}/terms-and-conditions`, priority: 0.3, changefreq: "yearly" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map((page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
