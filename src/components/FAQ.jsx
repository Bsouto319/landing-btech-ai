import { useEffect, useState } from 'react';
import { trackSectionView } from '../utils/analytics';

export default function FAQ() {
  useEffect(() => {
    trackSectionView('faq');
  }, []);

  const [activeId, setActiveId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Como funciona a implantacao presencial?',
      answer: 'Nos vamos ate a clinica, configuramos o fluxo, conectamos o WhatsApp e deixamos a operacao pronta para uso com a sua equipe.',
    },
    {
      id: 2,
      question: 'Qual e o valor da implantacao?',
      answer: 'A implantacao custa R$ 500 e a mensalidade e de R$ 300. O valor inclui configuracao inicial e acompanhamento para colocar a rotina em funcionamento.',
    },
    {
      id: 3,
      question: 'O suporte tambem e presencial?',
      answer: 'Sim. O foco atual e vender somente para clinicas da regiao, justamente para oferecer suporte mais proximo, com atendimento presencial quando necessario.',
    },
    {
      id: 4,
      question: 'Preciso trocar meu numero ou sistema atual?',
      answer: 'Nao necessariamente. Avaliamos sua operacao atual e adaptamos a implantacao para encaixar no processo da clinica com o menor atrito possivel.',
    },
    {
      id: 5,
      question: 'Em quanto tempo a clinica comeca a usar?',
      answer: 'Na maioria dos casos, a clinica ja sai da implantacao com o fluxo principal configurado e a equipe treinada para operar no mesmo dia.',
    },
    {
      id: 6,
      question: 'Esse sistema serve para qualquer especialidade?',
      answer: 'Sim. O modelo atende consultorios, clinicas medicas, odontologicas, esteticas e outros servicos que dependem de agenda, confirmacao e atendimento no WhatsApp.',
    },
  ];

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Respostas objetivas sobre implantacao presencial, suporte local e operacao da ferramenta.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isActive = activeId === faq.id;
            return (
              <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary transition duration-300">
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="text-left font-semibold text-gray-900">{faq.question}</span>
                  <span className={isActive ? 'text-primary transition duration-300 rotate-180' : 'text-primary transition duration-300'}>
                    {isActive ? 'v' : '>'}
                  </span>
                </button>
                {isActive && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
          <p className="text-gray-900 font-semibold mb-3">Ainda tem duvidas?</p>
          <p className="text-gray-600 mb-4">
            Chame no WhatsApp e avaliamos se faz sentido implantar na sua clinica.
          </p>
          <button className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:shadow-lg transition duration-300">
            Falar com especialista
          </button>
        </div>
      </div>
    </section>
  );
}
