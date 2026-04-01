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
      quote: 'Reduziu nossos no-shows em 45%. O sistema é muito fácil de usar!',
      metric: '+45% confirmação',
      rating: 5,
    },
    {
      id: 2,
      name: 'Dr. Carlos Mendes',
      clinic: 'Consultório Médico CM',
      avatar: 'CM',
      quote: 'Economizamos 15 horas por semana com agendamentos automáticos.',
      metric: '15h/semana',
      rating: 5,
    },
    {
      id: 3,
      name: 'Juliana Costa',
      clinic: 'Clínica de Estética JC',
      avatar: 'JC',
      quote: 'Pacientes adoram a facilidade de agendar pelo WhatsApp!',
      metric: '+60% conversão',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Clínicas que Já Transformaram seu Atendimento
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre o Btech AI Attendant
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-900 rounded-xl p-8 border border-slate-700 hover:border-green-500/50 transition duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-base mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Metric Badge */}
              <div className="mb-6 inline-block px-3 py-1 bg-green-500/20 rounded-full border border-green-500/50">
                <p className="text-green-400 text-sm font-semibold">
                  {testimonial.metric}
                </p>
              </div>

              {/* Author */}
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
