import { useEffect } from 'react';
import { trackButtonClick, trackSectionView } from '../utils/analytics';

const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@BTechsouto';
const YOUTUBE_EMBED_URL =
  'https://www.youtube.com/embed?listType=user_uploads&list=BTechsouto&rel=0';

export default function DemoVideo() {
  useEffect(() => {
    trackSectionView('demo_video');
  }, []);

  const handleChannelClick = () => {
    trackButtonClick('demo_video_channel');
    window.open(YOUTUBE_CHANNEL_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-6">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              <span className="text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em]">
                Vídeo Demo
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Veja a automação em ação antes de falar com a equipe
            </h2>

            <p className="mt-6 text-lg text-slate-300 leading-8 max-w-xl">
              O vídeo mostra como a IA conduz o atendimento no WhatsApp, oferece
              horários, confirma a consulta e devolve tempo para a recepção.
            </p>

            <div className="mt-8 grid gap-4 text-sm sm:text-base">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-green-400" />
                <p className="text-slate-200">
                  Demonstração prática do fluxo de agendamento e confirmação.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400" />
                <p className="text-slate-200">
                  Canal oficial com outros conteúdos da BTech para clínicas.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleChannelClick}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 text-white font-semibold hover:shadow-lg hover:shadow-red-500/30 transition duration-300 hover:-translate-y-0.5"
              >
                Abrir canal no YouTube
              </button>
              <a
                href="#faq"
                className="px-7 py-3 rounded-xl border border-slate-700 text-slate-200 font-semibold hover:border-cyan-400 hover:text-cyan-300 transition duration-300 text-center"
              >
                Ver dúvidas frequentes
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-emerald-500/20 blur-2xl" />
            <div className="relative rounded-[28px] border border-slate-700 bg-slate-900/90 p-3 shadow-2xl shadow-cyan-950/40">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
                <div>
                  <p className="text-white font-semibold">Demonstração BTech</p>
                  <p className="text-slate-400 text-sm">Canal @BTechsouto</p>
                </div>
                <button
                  onClick={handleChannelClick}
                  className="text-xs sm:text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition"
                >
                  Ver no YouTube
                </button>
              </div>
              <div className="aspect-video overflow-hidden rounded-[20px] bg-slate-950">
                <iframe
                  className="h-full w-full"
                  src={YOUTUBE_EMBED_URL}
                  title="Vídeo demo da automação BTech no YouTube"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
