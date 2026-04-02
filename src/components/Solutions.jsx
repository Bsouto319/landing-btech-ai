import { useEffect } from 'react';
import { trackSectionView } from '../utils/analytics';

export default function Solutions() {
  useEffect(() => {
    trackSectionView('solutions');
  }, []);

  const solutions = [
    {
      id: 1,
      title: 'Paciente recebe o link no WhatsApp',
      description: 'O paciente continua no canal que já usa todos os dias, sem precisar baixar aplicativo nem enfrentar atrito.',
      icon: '01',
    },
    {
      id: 2,
      title: 'A IA conduz a conversa',
      description: 'Data, horário e confirmação acontecem em uma conversa natural, com resposta instantânea.',
      icon: '02',
    },
    {
      id: 3,
      title: 'Confirmação automática',
      description: 'A clínica recebe a confirmação em tempo real e reduz o risco de horários ociosos na agenda.',
      icon: '03',
    },
    {
      id: 4,
      title: 'Lembretes inteligentes',
      description: 'Mensagens automaticas antes da consulta diminuem faltas e aumentam previsibilidade.',
      icon: '04',
    },
    {
      id: 5,
      title: 'Dashboard centralizado',
      description: 'Agenda, leads e confirmações ficam visíveis em um único painel de controle.',
      icon: '05',
    },
    {
      id: 6,
      title: 'Integração com calendário',
      description: 'Sincroniza com o Google Calendar e encaixa o fluxo da clínica sem retrabalho.',
      icon: '06',
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
            Um fluxo simples, visual e automatizado para transformar o WhatsApp no canal oficial de agendamento da sua clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition duration-300"
              >
                <div className="w-14 h-14 mb-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300 font-bold">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-24 bg-slate-900/90 border border-cyan-500/30 rounded-3xl p-5 shadow-2xl shadow-cyan-500/10">
            <div className="overflow-hidden rounded-2xl border border-slate-700">
              <img
                src="/images/sections/whatsapp-flow.png"
                alt="Mockup de conversa de agendamento por IA no WhatsApp"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-4">
              <p className="text-cyan-300 text-sm font-semibold uppercase tracking-[0.2em]">WhatsApp + IA</p>
              <p className="text-white text-lg font-semibold mt-2">O paciente agenda em segundos, e a recepção ganha fôlego operacional.</p>
              <p className="text-gray-400 text-sm mt-2">
                A imagem mostra o fluxo real da conversa, deixando claro como a IA oferece horários e fecha a confirmação no mesmo canal.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Passo a Passo Simplificado</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="text-5xl mb-4">1</div>
              <p className="font-semibold mb-2">Paciente entra em contato</p>
              <p className="text-gray-400 text-sm">A clínica envia o link ou inicia o fluxo no próprio WhatsApp.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">2</div>
              <p className="font-semibold mb-2">A IA oferece horarios</p>
              <p className="text-gray-400 text-sm">O paciente escolhe a melhor opção e recebe a confirmação automaticamente.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">3</div>
              <p className="font-semibold mb-2">A agenda fica organizada</p>
              <p className="text-gray-400 text-sm">Lembretes e sincronização garantem menos faltas e mais previsibilidade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
