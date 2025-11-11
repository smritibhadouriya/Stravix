import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-black py-12 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <header className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-lg">
          Last Updated: <span className="font-semibold">November 11, 2025</span>
        </p>
      </header>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto space-y-12 text-gray-800 leading-relaxed">
        <div className="prose prose-lg max-w-none">
          <p className="text-base md:text-lg">
            Welcome to Our Stravix, a premier marketing agency specializing in{' '}
            <span className="font-semibold text-yellow-600">
              Digital Marketing, PR, Social Media Management, Branding, Performance Marketing, and Creative Designing
            </span>
            . This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website or use our services.
          </p>

          <p className="mt-6">
            By using our website or services, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-yellow-50 p-8 rounded-xl border border-pink-200">
          <h2 className="text-2xl font-bold text-pink-700 mb-4">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Personal Information:</strong> Name, email, phone number, company name, and payment details when you contact us or hire our services.
            </li>
            <li>
              <strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and referral source.
            </li>
            <li>
              <strong>Cookies & Tracking:</strong> We use cookies to improve user experience and analyze site performance.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul className="list-none space-y-3 mt-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Provide and improve our marketing, PR, social media, branding, and creative services.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Communicate with you about projects, campaigns, and updates.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Send promotional emails (you can opt out anytime).</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Analyze website performance and user behavior.</span>
            </li>
          </ul>
        </div>

        <div className="bg-black text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">3. Data Sharing & Third Parties</h2>
          <p className="text-gray-200">
            We do not sell your personal data. We may share information with:
          </p>
          <ul className="list-disc pl-6 mt-3 text-gray-200 space-y-1">
            <li>Trusted service providers (e.g., Google Analytics, Mailchimp, payment processors).</li>
            <li>Legal authorities if required by law.</li>
            <li>Partners for campaign execution (with your consent).</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-black mb-4">4. Data Security</h2>
          <p>
            We implement industry-standard security measures (SSL encryption, secure servers, access controls) to protect your data. However, no method of transmission over the internet is 100% secure.
          </p>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-yellow-100 p-8 rounded-xl border border-pink-300">
          <h2 className="text-2xl font-bold text-pink-700 mb-4">5. Your Rights (GDPR & Indian DPDP Act Compliant)</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Access, correct, or delete your personal data.</li>
            <li>✅ Withdraw consent for marketing emails.</li>
            <li>✅ Request data portability.</li>
            <li>✅ File a complaint with a data protection authority.</li>
          </ul>
          <p className="mt-4 text-sm">
            Contact us at <a href="mailto:privacy@youragency.com" className="underline text-pink-600 font-medium">privacy@youragency.com</a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-black mb-4">6. Cookies</h2>
          <p>
            We use cookies for analytics and functionality. You can disable cookies in your browser, but some features may not work properly.
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm">
            <strong>Manage Cookies:</strong> Use browser settings or our cookie consent banner.
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-black mb-4">7. Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under 18. We do not knowingly collect data from children.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-black mb-4">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date.
          </p>
        </div>

        <div className="bg-gradient-to-r from-black to-gray-800 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">9. Contact Us</h2>
          <p className="text-gray-200">
            For any questions about this Privacy Policy, contact:
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <p>📧 <a href="mailto:privacy@youragency.com" className="underline text-pink-400">privacy@youragency.com</a></p>
            <p>📍 [Your Agency Address], India</p>
            <p>📞 +91 XXXXXXXXXX</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;