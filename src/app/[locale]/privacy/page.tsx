import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: 'Privacy Policy - Write Hangul',
    description: 'Privacy Policy for Write Hangul.',
  };
}

export default async function PrivacyPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1 max-w-3xl mx-auto w-full p-6 md:p-12">
      <h1 className="text-4xl font-serif font-bold text-muk mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg prose-slate">
        <p><strong>Effective Date:</strong> August 5, 2026</p>
        
        <h2>1. Information We Collect</h2>
        <p>
          We do not require users to create an account to use our services. We collect minimal information to ensure the core functionality of our service:
        </p>
        <ul>
          <li><strong>Local Storage:</strong> We use your browser's local storage to save your practice words and attendance records locally on your device.</li>
          <li><strong>Analytics:</strong> We use Google Analytics and Microsoft Clarity to understand how users interact with our website to improve our services. These tools may collect anonymous usage data.</li>
        </ul>

        <h2>2. Use of Information</h2>
        <p>
          The information we collect is used solely to improve the user experience and maintain the performance of the Website. Images uploaded to our AI Scanner are processed temporarily via secure APIs and are not stored permanently on our servers.
        </p>

        <h2>3. Third-Party Services</h2>
        <p>
          We use Google AdSense to display advertisements. AdSense uses cookies to serve ads based on a user's prior visits to our website or other websites. You can opt out of personalized advertising by visiting Google's Ads Settings.
        </p>

        <h2>4. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through our Contact page.
        </p>
      </div>
    </main>
  );
}
