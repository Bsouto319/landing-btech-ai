import { useEffect } from 'react';
import { trackSectionView, trackButtonClick } from '../utils/analytics';

export default function Pricing() {
  useEffect(() => {
    trackSectionView('pricing');
  }, []);

  const plans = [
    {
      id: 'demo',
      name: 'Demo Gratuita',
      price: 'Grátis',
      period: '(15 minutos)',
      description: 'Veja o Btech AI Attendant em ação',
      features: [
        'Demonstração ao vivo',
        'Q&A com especialista',
        'Análise customizada seu caso',
        'Sem compromisso',
      ],
      highlighted: false,
    },
    {
      id: 'clinic',
      name: 'Clinica/Consultório',
      price: 'R$ 1.000',
      period: '(implantação) + R$ 300/mês',
      description: 'Ideal para clínicas e consultórios de pequeno porte',
      features: [
        '✓ Agendamento automático 24/7',
        '✓ Lembretes WhatsApp (1 dia + 1h antes)',
        '✓ Sincronização Google Calendar',
        '✓ Dashboard de agenda',
        '✓ Relatório de leads',
        '✓ Suporte técnico',
        '✓ Treinamento completo',
        '✓ Setup em 30 minutos',
      ],
      highlighted: true,
    },
    {
      id: 'enterprise',
      name: 'Múltiplas Filiais',
      price: 'Custom',
      period: '(confira preço especial)',
      description: 'Para clínicas com múltiplas consultórios',
      features: [
        '✓ Tudo do plano Clínica',
        '✓ Múltiplos consultórios',
        '✓ Gestão centralizada',
        '✓ Relatórios avançados',
        '✓ Integração CRM',
        '✓ Suporte prioritário',
        '✓ Gerente dedicado',
      ],
      highlighted: false,
    },
  ];

  const handlePlanClick = (planId) => {
    trackButtonClick('pricing_' + planId);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Preços Simples e Transparentes
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Sem taxas escondidas. Suporte incluso. Implantação e treinamento inclusos. Cancele quando quiser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan) => {
            const highlighted = plan.highlighted;
            return (
              <div
                key={plan.id}
                className={highlighted ? 'rounded-lg p-8 transition duration-300 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500 shadow-xl shadow-green-500/20' : 'rounded-lg p-8 transition duration-300 bg-slate-800 border border-slate-700 hover:border-blue-500/50'}
              >
                {highlighted && (
                  <div className="mb-4 inline-block px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full">
                    Mais Popular ⭐
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
                  className={highlighted ? 'w-full py-3 px-4 font-semibold rounded-lg mb-8 transition duration-300 bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/50' : 'w-full py-3 px-4 font-semibold rounded-lg mb-8 transition duration-300 border border-blue-500 text-blue-400 hover:bg-blue-500/10'}
                >
                  {plan.id === 'demo' ? '📅 Agendar Demo' : 'Começar Agora'}
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                      <span className="text-green-400 font-bold mr-3 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-slate-800 border border-slate-700 rounded-lg">
          <h3 className="text-white text-xl font-semibold mb-4">🎁 Oferta Especial de Lançamento</h3>
          <p className="text-gray-300">
            Primeiros 10 clientes: <span className="text-green-400 font-bold">1 mês grátis</span> na assinatura anual!
            Além disso, consultoria gratuita de 1 hora para otimizar seu funil de vendas.
          </p>
        </div>
      </div>
    </section>
  );
}
