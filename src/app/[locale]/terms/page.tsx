import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: 'Terms of Use - Write Hangul',
    description: 'Terms of Use and Conditions for Write Hangul.',
  };
}

export default async function TermsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1 max-w-3xl mx-auto w-full p-6 md:p-12">
      <h1 className="text-4xl font-serif font-bold text-muk mb-8">Terms of Use</h1>
      
      <div className="prose prose-lg prose-slate">
        <p><strong>Effective Date:</strong> August 5, 2026</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using Write Hangul (the "Website"), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the PDF materials generated on Write Hangul for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul>
          <li>modify or copy the core software materials;</li>
          <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>attempt to decompile or reverse engineer any software contained on the Website.</li>
        </ul>

        <h2>3. Disclaimer</h2>
        <p>
          The materials on Write Hangul's website are provided on an 'as is' basis. Write Hangul makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2>4. Limitations</h2>
        <p>
          In no event shall Write Hangul or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Write Hangul's website.
        </p>

        <h2>5. Modifications</h2>
        <p>
          Write Hangul may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
        </p>
      </div>
    </main>
  );
}
