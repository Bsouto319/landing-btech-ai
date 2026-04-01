import { useEffect } from 'react';
import { trackSectionView, trackButtonClick } from '../utils/analytics';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

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

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-block mb-6 px-4 py-1 bg-green-500/20 rounded-full border border-green-500/50">
            <span className="text-green-400 text-sm font-semibold">Automacao para clinicas no WhatsApp</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Atenda mais pacientes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">sem sobrecarregar</span> sua equipe
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl lg:max-w-xl mx-auto lg:mx-0">
            Automatize o agendamento via WhatsApp com IA. Confirmacoes automaticas, lembretes inteligentes e remarcacao em um clique para uma recepcao mais leve e previsivel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleCTA}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition duration-300 hover:scale-105"
            >
              Agende uma Demo Gratuita
            </button>
            <button
              className="px-8 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition duration-300"
              onClick={handleMessage}
            >
              Envie uma Mensagem
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 text-center lg:text-left">
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
              <p className="text-3xl sm:text-4xl font-bold text-green-400">+40%</p>
              <p className="text-gray-400 text-sm mt-2">Confirmacao de consultas</p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
              <p className="text-3xl sm:text-4xl font-bold text-blue-400">10h/mes</p>
              <p className="text-gray-400 text-sm mt-2">Economizadas em admin</p>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
              <p className="text-3xl sm:text-4xl font-bold text-cyan-400">30min</p>
              <p className="text-gray-400 text-sm mt-2">Setup e treinamento</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-green-500/20 blur-3xl rounded-[2rem]" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
              <img
                src="/images/hero/ai-agenda-illustration.svg"
                alt="Ilustracao de agenda com inteligencia artificial para clinicas"
                className="w-full h-[540px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-cyan-400/20 bg-slate-900/95 backdrop-blur px-5 py-4 shadow-xl">
              <p className="text-cyan-300 text-xs uppercase tracking-[0.2em]">Fluxo automatizado</p>
              <p className="text-white font-semibold mt-2">Agendamento confirmado sem trocar dezenas de mensagens.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
