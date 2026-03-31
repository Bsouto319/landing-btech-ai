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
      description: 'Sua recepcionista passa 10h/semana gerenciando agendamentos manualmente no WhatsApp pessoal.',
      icon: '⏱️',
    },
    {
      id: 2,
      title: 'Alto Índice de Faltas',
      description: '50% dos pacientes não confirmam presença e você só descobre na hora da consulta.',
      icon: '📞',
    },
    {
      id: 3,
      title: 'Agendador Sobrecarregado',
      description: 'Recepcionista tem que responder pacientes o tempo todo. Não sobra tempo para outras tarefas.',
      icon: '😰',
    },
    {
      id: 4,
      title: 'Dados Desorganizados',
      description: 'Agenda espalhada em diferentes lugares. Impossível ter visão clara do funil de vendas e leads.',
      icon: '📊',
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
            Você não está sozinho. Milhares de clínicas lidam com esses desafios todo dia. E se pudesse automatizar TUDO?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem) => (
            <div key={problem.id} className="p-8 border border-slate-700 rounded-lg hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition duration-300 bg-slate-800/50 backdrop-blur">
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-gray-400">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg">
          <p className="text-center text-white text-lg">
            <span className="font-bold text-red-400">Resultado:</span> Pacientes perdidos, receita deixada de lado, e equipe desmotivada.
          </p>
        </div>
      </div>
    </section>
  );
}
