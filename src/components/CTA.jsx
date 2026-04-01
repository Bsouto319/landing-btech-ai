import { useEffect, useState } from 'react';
import { trackSectionView, trackFormSubmission, trackButtonClick } from '../utils/analytics';
import { subscribeNewsletter } from '../utils/api';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

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
      setMessage('Obrigado por se inscrever!');
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Erro ao se inscrever. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    trackButtonClick('cta_whatsapp');
    openWhatsApp(WHATSAPP_MESSAGES.demo);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Pronto para Começar?
        </h2>
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Junte-se a milhares de usuários que já estão criando landing pages incríveis. Comece seu teste grátis hoje.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
          <input
            type="email"
            placeholder="Digite seu email"
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
            {loading ? 'Inscrevendo...' : 'Inscrever'}
          </button>
        </form>

        <div className="flex justify-center">
          <button
            onClick={handleWhatsAppClick}
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-green-500/50"
          >
            💬 Fale Conosco via WhatsApp
          </button>
        </div>

        {message && (
          <p className={message.indexOf('Obrigado') > -1 ? 'mt-4 text-sm text-green-100' : 'mt-4 text-sm text-red-100'}>
            {message}
          </p>
        )}

        <p className="text-sm text-white/75 mt-6">
          Sem spam. Respeitamos sua privacidade.
        </p>
      </div>
    </section>
  );
}
