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
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Avatar Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-cyan-500 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>

            {/* Inner white circle */}
            <div className="absolute inset-1 bg-slate-900 rounded-full"></div>

            {/* Avatar content */}
            <div className="absolute inset-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-5xl">🤖</span>
            </div>

            {/* Floating chat bubbles */}
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-lg animate-bounce" style={{ animationDelay: '0s' }}>
              💬
            </div>
            <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-lg animate-bounce" style={{ animationDelay: '0.3s' }}>
              ✓
            </div>
          </div>
        </div>

        <div className="inline-block mb-6 px-4 py-1 bg-green-500/20 rounded-full border border-green-500/50">
          <span className="text-green-400 text-sm font-semibold">✨ Revolucione seu consultório</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Atenda mais pacientes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">sem sobrecarregar</span> sua equipe
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Automatize 100% do agendamento via WhatsApp com IA. Confirmações automáticas, lembretes inteligentes e reschedule em 1 clique. Sua clínica merece trabalhar de forma inteligente.
        </p>

        {/* Video Demo Player */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20 max-w-2xl mx-auto">
          <div className="bg-slate-800 aspect-video flex items-center justify-center">
            <div className="text-center">
              <button className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition mb-4">
                <span className="text-white text-3xl">▶</span>
              </button>
              <p className="text-gray-400 text-sm">Clique para ver demonstração (1min)</p>
              <p className="text-gray-500 text-xs mt-2">Local para upload de seu vídeo demo</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleCTA}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition duration-300 hover:scale-105"
          >
            📅 Agende uma Demo Gratuita
          </button>
          <button className="px-8 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition duration-300" onClick={handleMessage}>
            💬 Envie uma Mensagem
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 text-center">
          <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
            <p className="text-3xl sm:text-4xl font-bold text-green-400">+40%</p>
            <p className="text-gray-400 text-sm mt-2">Confirmação de consultas</p>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
            <p className="text-3xl sm:text-4xl font-bold text-blue-400">10h/mês</p>
            <p className="text-gray-400 text-sm mt-2">Economizadas em admin</p>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700">
            <p className="text-3xl sm:text-4xl font-bold text-cyan-400">30min</p>
            <p className="text-gray-400 text-sm mt-2">Setup + treinamento</p>
          </div>
        </div>
      </div>
    </section>
  );
}
