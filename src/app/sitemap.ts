import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const host = 'https://writehangul.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/alphabet',
    '/history',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return staticRoutes.map((route) => ({
    url: `${host}/en${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
    alternates: {
      languages: routing.locales.reduce((acc, locale) => {
        acc[locale] = `${host}/${locale}${route}`;
        return acc;
      }, {} as Record<string, string>),
    },
  }));
}
