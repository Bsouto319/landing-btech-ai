import { useEffect } from "react";
import { trackSectionView, trackButtonClick } from "../utils/analytics";
export default function Hero() {
  useEffect(() => { trackSectionView("hero"); }, []);
  const WA = "556193988147";
  const handleCTA = () => { trackButtonClick("hero_cta"); window.open(`https://wa.me/${WA}?text=${encodeURIComponent("Olá! Quero agendar uma demo gratuita do BTech AI Attendant.")}`, "_blank"); };
  const handleMessage = () => { trackButtonClick("hero_message"); window.open(`https://wa.me/${WA}?text=${encodeURIComponent("Olá! Tenho interesse no BTech AI Attendant. Pode me contar mais?")}`, "_blank"); };
  return (<section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4"><div className="max-w-4xl mx-auto text-center"><h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">Atenda mais pacientes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">sem sobrecarregar</span> sua equipe</h1><p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Automatize 100% do agendamento via WhatsApp com IA.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button onClick={handleCTA} className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:scale-105 transition">?? Agende uma Demo Gratuita</button><button onClick={handleMessage} className="px-8 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition">?? Envie uma Mensagem</button></div></div></section>);
}
