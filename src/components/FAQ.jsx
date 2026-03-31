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
      question: 'O que está incluído no teste gratuito?',
      answer: 'O teste gratuito inclui acesso a todos os templates, análise básica e suporte por email. Você pode criar até 3 landing pages durante o período de teste.',
    },
    {
      id: 2,
      question: 'Posso cancelar minha assinatura a qualquer momento?',
      answer: 'Sim, você pode cancelar sua assinatura a qualquer momento sem penalidades ou taxas ocultas. Suas páginas permanecerão acessíveis por 30 dias após o cancelamento.',
    },
    {
      id: 3,
      question: 'Você oferece suporte ao cliente?',
      answer: 'Sim, oferecemos suporte 24/7 via email e chat. Os planos Professional e Enterprise também incluem suporte telefônico e gerente de conta dedicado.',
    },
    {
      id: 4,
      question: 'Posso usar domínios personalizados?',
      answer: 'Sim, todos os planos pagos suportam domínios personalizados. Você pode conectar seu próprio domínio ou usar nosso subdomínio sem custo adicional.',
    },
    {
      id: 5,
      question: 'Qual é a segurança dos meus dados?',
      answer: 'Seus dados são criptografados e armazenados em servidores seguros com backups automáticos. Nós estamos em conformidade com GDPR e outros regulamentos internacionais de proteção de dados.',
    },
    {
      id: 6,
      question: 'Posso exportar minhas landing pages?',
      answer: 'Sim, clientes Professional e Enterprise podem exportar suas landing pages como arquivos HTML independentes para hospedar em qualquer lugar.',
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
            Encontre respostas para perguntas comuns sobre nossa plataforma.
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
                    {isActive ? '▼' : '▶'}
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
            Não encontra a resposta que procura? Entre em contato com nosso time de suporte.
          </p>
          <button className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:shadow-lg transition duration-300">
            Contate o Suporte
          </button>
        </div>
      </div>
    </section>
  );
}
