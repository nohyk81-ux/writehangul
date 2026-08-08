import { setRequestLocale } from 'next-intl/server';
import { Mail, MessageSquare } from 'lucide-react';

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
    <main className="flex-1 max-w-3xl mx-auto w-full p-6 md:p-12">
      <h1 className="text-4xl font-serif font-bold text-muk mb-8">Contact Us</h1>
      
      <div className="prose prose-lg prose-slate mb-12">
        <p>
          Have questions, feedback, or need support? We'd love to hear from you! Please reach out to us using the information below, and our team will get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border-2 border-muk/10 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-4">
            <Mail size={32} />
          </div>
          <h2 className="text-xl font-bold text-muk mb-2">Email Support</h2>
          <p className="text-muk/70 mb-4">For general inquiries and technical support.</p>
          <a href="mailto:support@writehangul.com" className="text-seal font-bold hover:underline">
            support@writehangul.com
          </a>
        </div>

        <div className="bg-white p-6 rounded-xl border-2 border-muk/10 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
            <MessageSquare size={32} />
          </div>
          <h2 className="text-xl font-bold text-muk mb-2">Business & Partnerships</h2>
          <p className="text-muk/70 mb-4">For advertising, partnerships, and press.</p>
          <a href="mailto:business@writehangul.com" className="text-seal font-bold hover:underline">
            business@writehangul.com
          </a>
        </div>
      </div>
    </main>
  );
}
