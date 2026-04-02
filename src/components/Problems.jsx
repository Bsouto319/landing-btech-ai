import { useEffect } from 'react';
import { trackSectionView } from '../utils/analytics';

export default function Problems() {
  useEffect(() => {
    trackSectionView('problems');
  }, []);

  const problems = [
    {
      id: 1,
      title: 'Agendamentos Manuais',
      description: 'Sua recepção perde horas por semana organizando mensagens, papéis e horários manualmente.',
      image: '/images/features/manual-appointments.png',
      alt: 'Ilustração de agendamentos manuais caóticos',
    },
    {
      id: 2,
      title: 'Alto Índice de Faltas',
      description: 'Muitos pacientes não confirmam a presença, e a clínica só descobre a ausência na hora da consulta.',
      image: '/images/features/missed-appointments.png',
      alt: 'Ilustração de faltas e consultas perdidas',
    },
    {
      id: 3,
      title: 'Equipe Sobrecarregada',
      description: 'A recepcionista precisa responder o tempo todo. Falta foco para o atendimento presencial e para tarefas críticas.',
      icon: '!!',
    },
    {
      id: 4,
      title: 'Dados Desorganizados',
      description: 'Agenda espalhada em vários lugares. Fica difícil enxergar leads, confirmações e o desempenho da operação.',
      icon: '::',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Os Problemas que Toda Clínica Enfrenta
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Você não está sozinho. Milhares de clínicas lidam com esses gargalos todos os dias. A diferença está em automatizar o que trava sua recepção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="p-8 border border-slate-700 rounded-lg hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition duration-300 bg-slate-800/50 backdrop-blur"
            >
              {problem.image ? (
                <img
                  src={problem.image}
                  alt={problem.alt}
                  className="w-20 h-20 mb-5 rounded-2xl object-cover shadow-lg shadow-blue-500/10"
                />
              ) : (
                <div className="w-20 h-20 mb-5 rounded-2xl bg-slate-700 flex items-center justify-center text-3xl font-bold text-cyan-300">
                  {problem.icon}
                </div>
              )}
              <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-gray-400">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg">
          <p className="text-center text-white text-lg">
            <span className="font-bold text-red-400">Resultado:</span> pacientes perdidos, receita travada e uma equipe sempre correndo atrás do básico.
          </p>
        </div>
      </div>
    </section>
  );
}
