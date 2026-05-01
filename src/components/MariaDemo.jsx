import { useEffect, useRef, useState, useCallback } from "react";

// ─── Cenários do demo ────────────────────────────────────────────────────────
const SCENES = [
  {
    id: "agendamento",
    label: "Agendamento",
    icon: "📅",
    messages: [
      { type: "u", text: "Oi! Quero marcar uma consulta com o Dr. Silva" },
      { type: "b", text: "Olá! 😊 Sou a Maria, assistente virtual da Clínica Saúde+. Terei prazer em ajudá-la!\n\nTemos horários disponíveis esta semana:\n\n📅 *Terça* — 14h ou 16h30\n📅 *Quinta* — 9h ou 11h\n\nQual prefere?" },
      { type: "u", text: "Quinta às 9h" },
      { type: "b", text: "✅ *Consulta confirmada!*\n\n👨‍⚕️ Dr. Silva\n📅 Quinta, 9h00\n📍 Clínica Saúde+\n\nVocê receberá um lembrete 24h antes. Posso ajudar em mais alguma coisa?" },
    ],
    narration: "A Maria agenda consultas em segundos — direto no WhatsApp, sem o paciente precisar ligar ou esperar.",
  },
  {
    id: "confirmacao",
    label: "Confirmação",
    icon: "✅",
    messages: [
      { type: "b", text: "Olá, Ana! 👋\n\nLembrete: você tem consulta *amanhã, quinta às 9h* com o Dr. Silva.\n\nVocê confirma presença?" },
      { type: "u", text: "Sim, confirmo!" },
      { type: "b", text: "Perfeito! ✅ Consulta confirmada.\n\nAté amanhã, Ana. Caso precise remarcar, é só me chamar aqui. 😊" },
    ],
    narration: "Reduz faltas em até 40% com lembretes automáticos e confirmação via WhatsApp — zero trabalho para a recepção.",
  },
  {
    id: "informacoes",
    label: "Informações",
    icon: "💬",
    messages: [
      { type: "u", text: "Vocês aceitam plano Unimed?" },
      { type: "b", text: "Sim! 😊 Trabalhamos com os seguintes convênios:\n\n✅ Unimed\n✅ Bradesco Saúde\n✅ SulAmérica\n✅ Amil\n\nPrecisa agendar uma consulta?" },
      { type: "u", text: "Sim! Qual o valor da consulta particular?" },
      { type: "b", text: "A consulta particular é *R$ 250,00*.\n\nPosso já verificar os horários disponíveis para você? 📅" },
    ],
    narration: "Responde dúvidas frequentes 24h por dia — convênios, valores, endereço — sem precisar de atendente.",
  },
  {
    id: "documento",
    label: "Documentos",
    icon: "📄",
    messages: [
      { type: "u", text: "Preciso do meu laudo médico" },
      { type: "b", text: "Claro! Para localizar seu documento, me informe seu *CPF* por favor." },
      { type: "u", text: "123.456.789-00" },
      { type: "b", text: "Encontrei! 🎉\n\nSeu laudo da consulta de *15/03/2025* está disponível.\n\n📎 *laudo_ana_silva_03_2025.pdf*\n\nDeseja que eu envie agora?" },
    ],
    narration: "Envia laudos, receitas e documentos direto no WhatsApp — o paciente recebe na hora, sem filas.",
  },
];

function useTyping(text, active, speed = 18) {
  const [displayed, setDisplayed] = useState("");
  const timer = useRef(null);

  useEffect(() => {
    if (!active) { setDisplayed(""); return; }
    setDisplayed("");
    let i = 0;
    timer.current = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(timer.current);
    }, speed);
    return () => clearInterval(timer.current);
  }, [text, active, speed]);

  return displayed;
}

function Bubble({ text, type, visible, typing }) {
  const isUser = type === "u";
  if (!visible) return null;
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2 animate-fadeIn`}>
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 mt-1">
          M
        </div>
      )}
      <div
        className={`max-w-[80%] px-3 py-2 rounded-2xl text-[12.5px] leading-relaxed whitespace-pre-line shadow-sm ${
          isUser
            ? "bg-[#005c4b] text-white rounded-tr-sm"
            : "bg-[#2a3942] text-white rounded-tl-sm"
        }`}
      >
        {typing ? (
          <>
            {text}
            <span className="inline-block w-0.5 h-3 bg-green-400 ml-0.5 animate-blink" />
          </>
        ) : (
          text
        )}
        <div className={`text-[10px] mt-1 text-right ${isUser ? "text-green-300/60" : "text-gray-500"}`}>
          {isUser ? "✓✓" : ""} {new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    </div>
  );
}

function TypingIndicator({ visible }) {
  if (!visible) return null;
  return (
    <div className="flex items-center gap-2 mb-2 animate-fadeIn">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
        M
      </div>
      <div className="bg-[#202c33] px-4 py-3 rounded-2xl rounded-tl-sm">
        <div className="flex gap-1 items-center">
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}

export default function MariaDemo() {
  const [activeScene, setActiveScene] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [typingIndex, setTypingIndex] = useState(null);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const [currentTypingText, setCurrentTypingText] = useState("");
  const [isTypingActive, setIsTypingActive] = useState(false);
  const chatRef = useRef(null);
  const sequenceRef = useRef(null);

  const typedText = useTyping(currentTypingText, isTypingActive);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    }, 50);
  }, []);

  const runScene = useCallback((sceneIndex) => {
    const scene = SCENES[sceneIndex];
    setVisibleMessages([]);
    setTypingIndex(null);
    setShowTypingIndicator(false);
    setCurrentTypingText("");
    setIsTypingActive(false);

    let timeout = 600;

    scene.messages.forEach((msg, i) => {
      if (msg.type === "b") {
        sequenceRef.current = setTimeout(() => {
          setShowTypingIndicator(true);
          scrollToBottom();
        }, timeout);
        timeout += 900;
      }

      sequenceRef.current = setTimeout(() => {
        setShowTypingIndicator(false);
        if (msg.type === "b") {
          setCurrentTypingText(msg.text);
          setIsTypingActive(true);
          setTypingIndex(i);
        }
        setVisibleMessages((prev) => [...prev, { ...msg, index: i }]);
        scrollToBottom();
      }, timeout);

      const typingDuration = msg.type === "b" ? msg.text.length * 18 + 300 : 400;
      timeout += msg.type === "b" ? typingDuration : 800;

      if (msg.type === "b") {
        sequenceRef.current = setTimeout(() => {
          setIsTypingActive(false);
          setTypingIndex(null);
        }, timeout - 200);
      }

      timeout += 600;
    });
  }, [scrollToBottom]);

  useEffect(() => {
    runScene(activeScene);
    return () => clearTimeout(sequenceRef.current);
  }, [activeScene, runScene]);

  const handleSceneChange = (index) => {
    clearTimeout(sequenceRef.current);
    setActiveScene(index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
      <div className="absolute top-40 right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1 bg-green-500/20 rounded-full border border-green-500/50">
            <span className="text-green-400 text-sm font-semibold">Demo ao vivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Veja a Maria{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              em ação
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Atendimento automatizado 24h via WhatsApp. Escolha um cenário e veja como funciona.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center">
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 w-full lg:w-auto lg:max-w-[200px] flex-shrink-0">
            {SCENES.map((scene, i) => (
              <button
                key={scene.id}
                onClick={() => handleSceneChange(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 whitespace-nowrap flex-shrink-0 text-left ${
                  activeScene === i
                    ? "bg-green-500/20 border-green-500/60 text-green-300"
                    : "bg-slate-800/40 border-slate-700/50 text-gray-400 hover:border-slate-600 hover:text-gray-300"
                }`}
              >
                <span className="text-xl">{scene.icon}</span>
                <span className="text-sm font-medium">{scene.label}</span>
              </button>
            ))}
          </div>

          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-green-500/10 rounded-[3rem] blur-2xl scale-110 pointer-events-none" />
            <div className="relative w-[300px] sm:w-[320px] rounded-[2.5rem] bg-[#111b21] shadow-2xl shadow-black/60 border border-white/10 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20" />
              <div className="flex justify-between items-center px-6 pt-8 pb-1 bg-[#111b21]">
                <span className="text-white text-[11px] font-medium">9:41</span>
                <div className="flex gap-1 items-center">
                  <div className="flex gap-0.5 items-end">
                    <div className="w-1 h-1.5 bg-white rounded-sm opacity-60" />
                    <div className="w-1 h-2 bg-white rounded-sm opacity-80" />
                    <div className="w-1 h-2.5 bg-white rounded-sm" />
                    <div className="w-1 h-3 bg-white rounded-sm" />
                  </div>
                  <div className="w-5 h-2.5 border border-white/80 rounded-sm ml-1 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[3px] w-0.5 h-1.5 bg-white/80 rounded-r-sm" />
                    <div className="absolute inset-[2px] right-[3px] bg-white rounded-sm" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 bg-[#202c33]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  M
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-semibold">Maria</div>
                  <div className="text-green-400 text-[11px]">● online agora</div>
                </div>
                <div className="flex gap-4 text-gray-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </div>
              </div>

              <div
                ref={chatRef}
                className="h-[380px] overflow-y-auto px-3 py-4 scroll-smooth"
                style={{ background: "#0b141a" }}
              >
                <div className="text-center mb-4">
                  <span className="text-[11px] text-gray-500 bg-[#182229] px-3 py-1 rounded-full">
                    Hoje
                  </span>
                </div>
                {visibleMessages.map((msg) => (
                  <Bubble
                    key={msg.index}
                    text={msg.type === "b" && typingIndex === msg.index ? typedText : msg.text}
                    type={msg.type}
                    visible={true}
                    typing={msg.type === "b" && typingIndex === msg.index && isTypingActive}
                  />
                ))}
                <TypingIndicator visible={showTypingIndicator} />
              </div>

              <div className="flex items-center gap-2 px-3 py-3 bg-[#202c33]">
                <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/>
                  </svg>
                  <span className="text-gray-500 text-xs">Mensagem</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 max-w-xs lg:max-w-sm w-full">
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">
                  {SCENES[activeScene].label}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {SCENES[activeScene].narration}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-green-400">24/7</p>
                <p className="text-gray-500 text-xs mt-1">Disponível</p>
              </div>
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-blue-400">&lt;3s</p>
                <p className="text-gray-500 text-xs mt-1">Resposta</p>
              </div>
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-cyan-400">+40%</p>
                <p className="text-gray-500 text-xs mt-1">Confirmações</p>
              </div>
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-emerald-400">0h</p>
                <p className="text-gray-500 text-xs mt-1">Sem atendente</p>
              </div>
            </div>

            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open('https://wa.me/5561982025951?text=Quero%20ver%20uma%20demo%20da%20Maria');
                }
              }}
              className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 text-sm"
            >
              Quero para minha clínica →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease forwards; }
        .animate-blink { animation: blink 0.8s step-end infinite; }
      `}</style>
    </section>
  );
}
