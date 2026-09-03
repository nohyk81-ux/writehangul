import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { guideArticles } from '@/data/guides';

const host = 'https://writehangul.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const guideRoutes = guideArticles.map((a) => `/guide/${a.slug}`);

  const staticRoutes = [
    '',
    '/guide',
    ...guideRoutes,
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
