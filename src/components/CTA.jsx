import { useEffect, useState } from 'react';
import { trackSectionView, trackFormSubmission } from '../utils/analytics';
import { subscribeNewsletter } from '../utils/api';

export default function CTA() {
  useEffect(() => {
    trackSectionView('cta');
  }, []);

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await subscribeNewsletter(email);
      trackFormSubmission('newsletter_cta');
      setMessage('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Join thousands of users who are already building amazing landing pages. Start your free trial today.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:shadow-lg transition duration-300 disabled:opacity-50"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {message && (
          <p className={message.indexOf('Thank') > -1 ? 'mt-4 text-sm text-green-100' : 'mt-4 text-sm text-red-100'}>
            {message}
          </p>
        )}

        <p className="text-sm text-white/75 mt-6">
          No spam, ever. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
