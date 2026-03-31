import { useEffect, useState } from 'react';
import { trackSectionView } from '../utils/analytics';

export default function FAQ() {
  useEffect(() => {
    trackSectionView('faq');
  }, []);

  const [activeId, setActiveId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What is included in the free trial?',
      answer: 'The free trial includes access to all templates, basic analytics, and support via email. You can create up to 3 landing pages during the trial period.',
    },
    {
      id: 2,
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time without any penalties or hidden fees. Your pages will remain accessible for 30 days after cancellation.',
    },
    {
      id: 3,
      question: 'Do you provide customer support?',
      answer: 'Yes, we offer 24/7 support via email and chat. Professional and Enterprise plans also include phone support and a dedicated account manager.',
    },
    {
      id: 4,
      question: 'Can I use custom domains?',
      answer: 'Yes, all paid plans support custom domains. You can connect your own domain or use our subdomain at no additional cost.',
    },
    {
      id: 5,
      question: 'How secure is my data?',
      answer: 'Your data is encrypted and stored on secure servers with automatic backups. We comply with GDPR and other international data protection regulations.',
    },
    {
      id: 6,
      question: 'Can I export my landing pages?',
      answer: 'Yes, Professional and Enterprise customers can export their landing pages as standalone HTML files for hosting anywhere.',
    },
  ];

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isActive = activeId === faq.id;
            return (
              <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary transition duration-300">
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="text-left font-semibold text-gray-900">{faq.question}</span>
                  <span className={isActive ? 'text-primary transition duration-300 rotate-180' : 'text-primary transition duration-300'}>
                    {isActive ? '▼' : '▶'}
                  </span>
                </button>
                {isActive && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
          <p className="text-gray-900 font-semibold mb-3">Still have questions?</p>
          <p className="text-gray-600 mb-4">
            Cannot find the answer you are looking for? Please contact our support team.
          </p>
          <button className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:shadow-lg transition duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
