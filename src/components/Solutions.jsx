import { useEffect } from 'react';
import { trackSectionView } from '../utils/analytics';

export default function Solutions() {
  useEffect(() => {
    trackSectionView('solutions');
  }, []);

  const solutions = [
    {
      id: 1,
      title: '📱 Patient recebe link via WhatsApp',
      description: 'Seu paciente recebe um link único no WhatsApp. Sem precisar sair do app que já usa todos os dias.',
      icon: '📲',
    },
    {
      id: 2,
      title: '🤖 IA facilita todo o fluxo',
      description: 'A IA guia o paciente pelos passos: data → horário → confirmação. Respostas rápidas e naturais.',
      icon: '💬',
    },
    {
      id: 3,
      title: '✅ Confirmação automática',
      description: 'Paciente confirma presença diretamente. Você recebe notificação em tempo real.',
      icon: '✔️',
    },
    {
      id: 4,
      title: '🔔 Lembretes inteligentes',
      description: '1 dia antes + 1 hora antes: lembretes automáticos no WhatsApp. Reduz faltas em 40%.',
      icon: '⏰',
    },
    {
      id: 5,
      title: '📊 Dashboard centralizado',
      description: 'Toda sua agenda em um lugar. Com relatórios de leads, funil de vendas, financeiro.',
      icon: '📈',
    },
    {
      id: 6,
      title: '🔗 Integração Google Calendar',
      description: 'Sincroniza automaticamente com seu Google Calendar e outros calendários profissionais.',
      icon: '📅',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Automação inteligente em 6 passos. Tudo integrado. Sem complicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div key={solution.id} className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition duration-300">
              <div className="text-5xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <h3 className="text-white text-2xl font-bold mb-4">📝 Passo a Passo Simplificado</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="text-5xl mb-4">1️⃣</div>
              <p className="font-semibold mb-2">Seu paciente chega</p>
              <p className="text-gray-400 text-sm">Você cria o link de agendamento na plataforma (leva 30seg)</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">2️⃣</div>
              <p className="font-semibold mb-2">Paciente recebe no WhatsApp</p>
              <p className="text-gray-400 text-sm">Link é enviado. Ele clica e escolhe data/horário. IA conversa com ele.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">3️⃣</div>
              <p className="font-semibold mb-2">Consulta confirmada</p>
              <p className="text-gray-400 text-sm">Você recebe confirmação. Lembretes automáticos no dia. Pronto!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
