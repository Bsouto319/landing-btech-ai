import { useEffect } from 'react';
import { trackSectionView } from '../utils/analytics';

export default function Testimonials() {
  useEffect(() => {
    trackSectionView('testimonials');
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Dra. Marina Silva',
      clinic: 'Clínica Odontológica Marina',
      avatar: 'MS',
      quote: 'A implantação presencial fez toda a diferença. A equipe entendeu rápido, e a confirmação de consultas melhorou muito.',
      metric: '+45% de confirmação',
      rating: 5,
    },
    {
      id: 2,
      name: 'Dr. Carlos Mendes',
      clinic: 'Consultório Médico CM',
      avatar: 'CM',
      quote: 'O suporte local acelerou tudo. Em pouco tempo, a recepção parou de perder horas com mensagens repetidas.',
      metric: '10h/mês poupadas',
      rating: 5,
    },
    {
      id: 3,
      name: 'Juliana Costa',
      clinic: 'Clínica de Estética JC',
      avatar: 'JC',
      quote: 'Gostei porque não foi só software. Teve visita, configuração no local e treinamento real com a minha equipe.',
      metric: 'suporte presencial',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Clínicas da Região que Já Melhoraram a Recepção
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Uma proposta mais próxima: implantação presencial, suporte local e operação ajustada à realidade da clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-green-500/50 transition duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">*</span>
                ))}
              </div>

              <p className="text-gray-300 text-base mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="mb-6 inline-block px-3 py-1 bg-green-500/20 rounded-full border border-green-500/50">
                <p className="text-green-400 text-sm font-semibold">
                  {testimonial.metric}
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-slate-700 pt-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {testimonial.clinic}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
