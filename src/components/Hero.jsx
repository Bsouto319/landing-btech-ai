import { useEffect } from 'react';
import { trackSectionView, trackButtonClick } from '../utils/analytics';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'brunosouto1108@gmail.com';

export default function Hero() {
  useEffect(() => {
    trackSectionView('hero');
  }, []);

  const handleCTA = () => {
    trackButtonClick('hero_cta');
    openWhatsApp(WHATSAPP_MESSAGES.demo);
  };

  const handleMessage = () => {
    trackButtonClick('hero_message');
    openWhatsApp(WHATSAPP_MESSAGES.contact);
  };

  const handleEmail = () => {
    trackButtonClick('hero_email');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Quero implantar na minha clínica')}`;
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/hero/regional-btech-ai.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[74%_30%] opacity-90 contrast-125 saturate-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/82 to-slate-900/20" />
      </div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center lg:text-left max-w-3xl">
          <div className="inline-block mb-6 px-4 py-1 bg-green-500/20 rounded-full border border-green-500/50">
            <span className="text-green-400 text-sm font-semibold">Automação para clínicas no WhatsApp</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Atenda mais pacientes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">sem sobrecarregar</span> sua equipe
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl lg:max-w-xl mx-auto lg:mx-0">
            Automatize o agendamento via WhatsApp com IA, com implantação presencial e suporte local para clínicas da sua região. Menos sobrecarga na recepção, mais consultas confirmadas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleCTA}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition duration-300 hover:scale-105"
            >
              Agende uma Demo Gratuita
            </button>
            <button
              className="px-8 py-3 border border-green-400 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition duration-300"
              onClick={handleMessage}
            >
              Fale no WhatsApp
            </button>
            <button
              className="px-8 py-3 border border-blue-400 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition duration-300"
              onClick={handleEmail}
            >
              Envie um E-mail
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 text-center lg:text-left">
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
              <p className="text-3xl sm:text-4xl font-bold text-green-400">+40%</p>
              <p className="text-gray-400 text-sm mt-2">Confirmação de consultas</p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
              <p className="text-3xl sm:text-4xl font-bold text-blue-400">10h/mes</p>
              <p className="text-gray-400 text-sm mt-2">economizadas em tarefas administrativas</p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
              <p className="text-3xl sm:text-4xl font-bold text-cyan-400">30min</p>
              <p className="text-gray-400 text-sm mt-2">implantação e treinamento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
