import { useEffect } from 'react';
import { trackSectionView, trackButtonClick } from '../utils/analytics';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function CTA() {
  useEffect(() => {
    trackSectionView('cta');
  }, []);

  const handleWhatsAppClick = () => {
    trackButtonClick('cta_whatsapp');
    openWhatsApp(WHATSAPP_MESSAGES.demo);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Quer implantar isso na sua clinica?
        </h2>
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Hoje a operacao esta focada em atendimento regional, com implantacao presencial, treinamento no local e suporte proximo para sua equipe.
        </p>

        <div className="flex justify-center">
          <button
            onClick={handleWhatsAppClick}
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-green-500/50"
          >
            Falar no WhatsApp e agendar visita
          </button>
        </div>

        <p className="text-sm text-white/75 mt-6">
          Atendimento consultivo para clinicas e consultorios da regiao.
        </p>
      </div>
    </section>
  );
}
