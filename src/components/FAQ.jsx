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
      question: 'Como funciona a implantação presencial?',
      answer: 'Nós vamos até a clínica, configuramos o fluxo, conectamos o WhatsApp e deixamos a operação pronta para uso com a sua equipe.',
    },
    {
      id: 2,
      question: 'Qual é o valor da implantação?',
      answer: 'A implantação custa R$ 500, e a mensalidade é de R$ 300. O valor inclui configuração inicial e acompanhamento para colocar a rotina em funcionamento.',
    },
    {
      id: 3,
      question: 'O suporte também é presencial?',
      answer: 'Sim. O foco atual é vender somente para clínicas da região, justamente para oferecer suporte mais próximo, com atendimento presencial quando necessário.',
    },
    {
      id: 4,
      question: 'Preciso trocar meu número ou sistema atual?',
      answer: 'Não necessariamente. Avaliamos sua operação atual e adaptamos a implantação para encaixar no processo da clínica com o menor atrito possível.',
    },
    {
      id: 5,
      question: 'Em quanto tempo a clínica começa a usar?',
      answer: 'Na maioria dos casos, a clínica já sai da implantação com o fluxo principal configurado e a equipe treinada para operar no mesmo dia.',
    },
    {
      id: 6,
      question: 'Esse sistema serve para qualquer especialidade?',
      answer: 'Sim. O modelo atende consultórios, clínicas médicas, odontológicas, estéticas e outros serviços que dependem de agenda, confirmação e atendimento no WhatsApp.',
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
            Respostas objetivas sobre implantação presencial, suporte local e operação da ferramenta.
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
          <p className="text-gray-900 font-semibold mb-3">Ainda tem dúvidas?</p>
          <p className="text-gray-600 mb-4">
            Chame no WhatsApp e avaliamos se faz sentido implantar na sua clínica.
          </p>
          <button className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:shadow-lg transition duration-300">
            Falar com especialista
          </button>
        </div>
      </div>
    </section>
  );
}
