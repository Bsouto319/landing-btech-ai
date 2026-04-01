import { useEffect } from 'react';
import { trackSectionView, trackButtonClick } from '../utils/analytics';
import { openWhatsApp, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function Pricing() {
  useEffect(() => {
    trackSectionView('pricing');
  }, []);

  const plans = [
    {
      id: 'demo',
      name: 'Demo Gratuita',
      price: 'Gratis',
      period: '(15 minutos)',
      description: 'Veja o Btech AI Attendant em acao',
      features: [
        'Demonstracao ao vivo',
        'Perguntas e respostas com especialista',
        'Analise do seu caso',
        'Sem compromisso',
      ],
      highlighted: false,
    },
    {
      id: 'clinic',
      name: 'Clinica ou Consultorio',
      price: 'R$ 1.000',
      period: '(implantacao) + R$ 300/mes',
      description: 'Ideal para operacoes de pequeno porte que querem padronizar a recepcao',
      features: [
        'Agendamento automatico 24/7',
        'Lembretes no WhatsApp',
        'Sincronizacao com Google Calendar',
        'Dashboard da agenda',
        'Relatorio de leads',
        'Suporte tecnico',
        'Treinamento completo',
        'Setup em 30 minutos',
      ],
      highlighted: true,
    },
    {
      id: 'enterprise',
      name: 'Multiplas Filiais',
      price: 'Custom',
      period: '(consulte valor)',
      description: 'Para grupos com mais de uma unidade e operacao centralizada',
      features: [
        'Tudo do plano Clinica',
        'Multiplos atendentes',
        'Gestao centralizada',
        'Relatorios avancados',
        'Integracao com CRM',
        'Suporte prioritario',
        'Gerente dedicado',
      ],
      highlighted: false,
    },
  ];

  const handlePlanClick = (planId) => {
    trackButtonClick(`pricing_${planId}`);
    const messageMap = {
      demo: WHATSAPP_MESSAGES.demo,
      clinic: WHATSAPP_MESSAGES.pricing,
      enterprise: WHATSAPP_MESSAGES.pricing,
    };

    openWhatsApp(messageMap[planId] || WHATSAPP_MESSAGES.contact);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/sections/pricing-neural-bg.png')" }}
      />
      <div className="absolute inset-0 bg-slate-950/80" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Precos Simples e Transparentes
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Sem taxas escondidas. Implantacao, suporte e treinamento inclusos para a clinica comecar rapido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan) => {
            const highlighted = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={
                  highlighted
                    ? 'rounded-lg p-8 transition duration-300 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500 shadow-xl shadow-green-500/20'
                    : 'rounded-lg p-8 transition duration-300 bg-slate-800/90 border border-slate-700 hover:border-blue-500/50'
                }
              >
                {highlighted && (
                  <div className="mb-4 inline-block px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full">
                    Mais Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm block mt-1">{plan.period}</span>
                </div>
                <button
                  onClick={() => handlePlanClick(plan.id)}
                  className={
                    highlighted
                      ? 'w-full py-3 px-4 font-semibold rounded-lg mb-8 transition duration-300 bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/50'
                      : 'w-full py-3 px-4 font-semibold rounded-lg mb-8 transition duration-300 border border-blue-500 text-blue-400 hover:bg-blue-500/10'
                  }
                >
                  {plan.id === 'demo' ? 'Agendar Demo' : 'Comecar Agora'}
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-gray-300 text-sm">
                      <span className="text-green-400 font-bold mr-3 mt-0.5">+</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-slate-800/90 border border-slate-700 rounded-lg">
          <h3 className="text-white text-xl font-semibold mb-4">Oferta Especial de Lancamento</h3>
          <p className="text-gray-300">
            Primeiros clientes podem receber condicoes comerciais diferenciadas e uma consultoria inicial para otimizar o funil da recepcao.
          </p>
        </div>
      </div>
    </section>
  );
}
