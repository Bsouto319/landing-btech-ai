import { useEffect } from 'react';
import { trackSectionView } from '../utils/analytics';

export default function Features() {
  useEffect(() => {
    trackSectionView('features');
  }, []);

  const features = [
    {
      title: 'Análise Avançada',
      items: ['Rastreamento em tempo real', 'Análise de funil de conversão', 'Mapa de calor'],
    },
    {
      title: 'Total Customizável',
      items: ['CSS customizado', 'Design responsivo', 'Mobile-first'],
    },
    {
      title: 'Integrações',
      items: ['Email marketing', 'Sistemas CRM', 'Processadores de pagamento'],
    },
    {
      title: 'Colaboração em Equipe',
      items: ['Edição em tempo real', 'Controle de versão', 'Gerenciamento de permissões'],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need out of the box, ready to go.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <ul className="space-y-3">
                {feature.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center text-gray-600">
                    <span className="text-primary mr-3">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
