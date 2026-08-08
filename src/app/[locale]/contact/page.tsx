import { setRequestLocale } from 'next-intl/server';
import ContactForms from '@/components/ContactForms';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: 'Contact Us - Write Hangul',
    description: 'Get in touch with the Write Hangul team.',
  };
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full p-6 md:p-12">
      <h1 className="text-4xl font-serif font-bold text-muk mb-8 text-center md:text-left">Contact Us</h1>
      
      <div className="prose prose-lg prose-slate mb-12 text-center md:text-left">
        <p>
          Have questions, feedback, or need support? We'd love to hear from you! Please reach out to us using the forms below, and our team will get back to you as soon as possible.
        </p>
      </div>

      <ContactForms />
    </main>
  );
}
