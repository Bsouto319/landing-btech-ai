const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'brunosouto1108@gmail.com';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Btech AI Attendant</h3>
            <p className="text-gray-400 text-sm">
              Automação de agendamento para clínicas da região, com implantação presencial e suporte próximo.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Serviço</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Agendamento por WhatsApp</a></li>
              <li><a href="#" className="hover:text-white transition">Implantação presencial</a></li>
              <li><a href="#" className="hover:text-white transition">Treinamento local</a></li>
              <li><a href="#" className="hover:text-white transition">Suporte regional</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Oferta</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Implantação R$ 500</a></li>
              <li><a href="#" className="hover:text-white transition">Mensalidade R$ 300</a></li>
              <li><a href="#" className="hover:text-white transition">Demo gratuita</a></li>
              <li><a href="#" className="hover:text-white transition">Atendimento consultivo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://wa.me/5561982025951" target="_blank" rel="noreferrer" className="hover:text-white transition">WhatsApp</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition">{CONTACT_EMAIL}</a></li>
              <li><a href="#" className="hover:text-white transition">Visita comercial</a></li>
              <li><a href="#" className="hover:text-white transition">Suporte presencial</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              Copyright (c) {currentYear} Btech AI. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="https://wa.me" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">WhatsApp</a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-400 hover:text-white transition">E-mail</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
