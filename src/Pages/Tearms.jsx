import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white text-black py-12 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <header className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent mb-4">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 text-lg">
          Last Updated: <span className="font-semibold">November 11, 2025</span>
        </p>
      </header>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto space-y-12 text-gray-800 leading-relaxed">
        <div className="prose prose-lg max-w-none">
          <p className="text-base md:text-lg">
            Welcome to <span className="font-bold text-pink-600">[Your Agency Name]</span> ("we," "us," or "our"), a full-service marketing agency offering{' '}
            <span className="font-semibold text-yellow-600">
              Digital Marketing, PR, Social Media Management, Branding, Performance Marketing, and Creative Designing
            </span>
            . These Terms and Conditions ("Terms") govern your use of our website and services.
          </p>

          <p className="mt-6">
            By accessing or using our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.
          </p>
        </div>

        {/* Section 1 */}
        <div className="bg-gradient-to-br from-pink-50 to-yellow-50 p-8 rounded-xl border border-pink-200">
          <h2 className="text-2xl font-bold text-pink-700 mb-4">1. Use of Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>You must be at least 18 years old to engage our services.</li>
            <li>You agree to provide accurate and complete information when requesting services.</li>
            <li>You are responsible for maintaining confidentiality of any account credentials.</li>
            <li>Misuse of our services (spam, illegal activities, etc.) will result in immediate termination.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">2. Our Services</h2>
          <p>We provide the following marketing services:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            {[
              'Digital Marketing',
              'Public Relations (PR)',
              'Social Media Management',
              'Brand Strategy & Identity',
              'Performance Marketing (PPC, SEO)',
              'Creative Designing (Graphics, Video, Web)'
            ].map((service, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg flex items-center space-x-3 ${
                  idx % 2 === 0 ? 'bg-pink-100' : 'bg-yellow-100'
                }`}
              >
                <span className={`w-3 h-3 rounded-full ${idx % 2 === 0 ? 'bg-pink-600' : 'bg-yellow-600'}`}></span>
                <span className="font-medium text-gray-800">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-black text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">3. Client Responsibilities</h2>
          <ul className="list-disc pl-6 mt-3 text-gray-200 space-y-2">
            <li>Provide timely feedback, assets, and approvals.</li>
            <li>Ensure all content (text, images, logos) is legally owned or licensed.</li>
            <li>Pay invoices within the agreed timeline (default: 7 days).</li>
            <li>Do not resell or redistribute our creative work without permission.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">4. Payment Terms</h2>
          <ul className="space-y-3 mt-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span><strong>Upfront Payment:</strong> 50% advance for all projects above ₹50,000.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span><strong>Late Payments:</strong> 1.5% monthly interest on overdue invoices.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span><strong>Refunds:</strong> Non-refundable after project kickoff (except in case of breach by us).</span>
            </li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="bg-gradient-to-r from-pink-100 to-yellow-100 p-8 rounded-xl border border-pink-300">
          <h2 className="text-2xl font-bold text-pink-700 mb-4">5. Intellectual Property</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ You own final deliverables after full payment.</li>
            <li>✅ We retain rights to use work in our portfolio (unless NDA signed).</li>
            <li>✅ Source files (PSD, AI, Figma) provided only under premium packages.</li>
            <li>✅ Third-party assets (fonts, stock images) may require separate licensing.</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">6. Revisions & Project Timeline</h2>
          <div className="space-y-3 text-gray-700">
            <p>Each package includes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>2 rounds of revisions (additional at ₹2,000/hr).</li>
              <li>Delays due to client feedback extend timeline proportionally.</li>
              <li>Fast-track delivery available at +30% cost.</li>
            </ul>
          </div>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">7. Termination</h2>
          <p>
            Either party may terminate with 15 days written notice. You remain liable for work completed up to termination.
          </p>
        </div>

        {/* Section 8 */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">8. Limitation of Liability</h2>
          <p>
            We are not liable for indirect damages, loss of profit, or third-party platform changes (e.g., algorithm updates).
          </p>
          <p className="mt-3 text-sm italic text-gray-600">
            Maximum liability capped at the total project fee.
          </p>
        </div>

        {/* Section 9 */}
        <div className="bg-gradient-to-r from-black to-gray-800 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">9. Governing Law</h2>
          <p className="text-gray-200">
            These Terms are governed by the laws of <strong>India</strong>. Any disputes shall be resolved in the courts of <strong>[Your City], India</strong>.
          </p>
        </div>

        {/* Section 10 */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">10. Changes to Terms</h2>
          <p>
            We may update these Terms. Continued use of services after changes constitutes acceptance.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-pink-100 to-yellow-100 p-8 rounded-xl border border-pink-300">
          <h2 className="text-2xl font-bold text-pink-700 mb-4">11. Contact Us</h2>
          <p className="text-gray-700">
            Questions? Reach out:
          </p>
          <div className="mt-4 space-y-1 text-sm font-medium">
            <p>📧 <a href="mailto:legal@youragency.com" className="underline text-pink-600">legal@youragency.com</a></p>
            <p>📍 [Your Agency Address], [City], India</p>
            <p>📞 +91 XXXXXXXXXX</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} [Your Agency Name]. All rights reserved.</p>
        <p className="mt-2">
          <a href="/privacy" className="underline text-pink-600 hover:text-yellow-600">Privacy Policy</a> | 
          <span className="text-yellow-600"> Terms & Conditions</span>
        </p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;