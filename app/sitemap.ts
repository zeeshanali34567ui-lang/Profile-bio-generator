import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://profilebiogenerator.site";
  const date = new Date().toISOString();

  return [
    {
      url: siteUrl,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/instagram-bio-generator`,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/tiktok-bio-generator`,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/youtube-bio-generator`,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: date,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/disclaimer`,
      lastModified: date,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-and-conditions`,
      lastModified: date,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
