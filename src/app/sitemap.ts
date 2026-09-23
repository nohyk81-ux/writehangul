import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { guideArticles } from '@/data/guides';
import vocabulary from '@/data/vocabulary.json';

const host = 'https://www.writehangul.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const guideRoutes = guideArticles.map((a) => `/guide/${a.slug}`);
  const categoryRoutes = vocabulary.categories.map((c) => `/category/${c.id}`);

  const staticRoutes = [
    '',
    '/guide',
    ...guideRoutes,
    ...categoryRoutes,
    '/alphabet',
    '/my-name',
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
