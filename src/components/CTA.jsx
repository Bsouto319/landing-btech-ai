import { useEffect } from 'react';
import { trackSectionView, trackButtonClick } from '../utils/analytics';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'brunosouto1108@gmail.com';

export default function CTA() {
  useEffect(() => {
    trackSectionView('cta');
  }, []);

  const handleWhatsAppClick = () => {
    trackButtonClick('cta_whatsapp');
    openWhatsApp(WHATSAPP_MESSAGES.demo);
  };

  const handleEmailClick = () => {
    trackButtonClick('cta_email');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Quero mais informações sobre a implantação')}`;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Quer implantar isso na sua clínica?
        </h2>
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Hoje a operação está focada em atendimento regional, com implantação presencial, treinamento no local e suporte próximo para a sua equipe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleWhatsAppClick}
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-green-500/50"
          >
            Falar no WhatsApp e agendar visita
          </button>
          <button
            onClick={handleEmailClick}
            className="px-8 py-3 bg-white text-primary font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-white/20"
          >
            Enviar um e-mail
          </button>
        </div>

        <p className="text-sm text-white/75 mt-6">
          Atendimento consultivo para clínicas e consultórios da região. WhatsApp ou e-mail, você escolhe.
        </p>
      </div>
    </section>
  );
}
