import perfilEmpresaUrl from '../assets/images/perfil_agua_is_life_v2.jpeg';
import React from 'react';
import { Droplets, Instagram, ArrowUpRight, MessageCircle } from 'lucide-react';
import { openWhatsApp, WHATSAPP_CONFIG } from '../config/whatsapp';

interface FooterProps {
  onNavigate: (page: 'home' | 'products' | 'corporate' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Mission column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-sky-400/30 shadow-sm shrink-0 flex items-center justify-center p-0.5">
                <img
                  src={perfilEmpresaUrl}
                  alt="Foto de perfil oficial Água is life"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                Água <span className="text-sky-400 font-bold">is life</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Distribuidora especializada em água mineral e descartáveis para empresas, canteiros de obras pesadas, órgãos públicos e correspondentes bancários.
            </p>

            {/* Mission statement */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs italic text-sky-200 leading-relaxed">
              "Nossa missão atender o cliente com qualidade e confiança. Mantendo a comunicação e suprimentos como pilares"
            </div>

            <div className="flex items-center gap-3 pt-2 flex-wrap">
              <button
                onClick={() => openWhatsApp()}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 text-xs font-semibold text-emerald-300 hover:text-white transition-colors cursor-pointer"
                title="Conversar no WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {WHATSAPP_CONFIG.displayPhone}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </button>
              <a
                href="https://instagram.com/aguaislife"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram: @aguaislife</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Página 1: Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Página 2: Produtos (Garrafões 20L &amp; Descartáveis)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('corporate');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Página 3: Corporativo (Construtoras &amp; Órgãos Públicos)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Página 4: Cotação &amp; Contato Comercial
                </button>
              </li>
            </ul>
          </div>

          {/* Products Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Linha Fornecida
            </h4>
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="px-2.5 py-1 bg-slate-900 rounded-md border border-slate-800">Garrafões 20L</span>
              <span className="px-2.5 py-1 bg-slate-900 rounded-md border border-slate-800">Copo 200ml</span>
              <span className="px-2.5 py-1 bg-slate-900 rounded-md border border-slate-800">Garrafa 200ml</span>
              <span className="px-2.5 py-1 bg-slate-900 rounded-md border border-slate-800">Garrafa 310ml</span>
              <span className="px-2.5 py-1 bg-slate-900 rounded-md border border-slate-800">Garrafa 330ml</span>
              <span className="px-2.5 py-1 bg-slate-900 rounded-md border border-slate-800">500ml Sem Gás</span>
              <span className="px-2.5 py-1 bg-slate-900 rounded-md border border-slate-800">500ml Com Gás</span>
              <span className="px-2.5 py-1 bg-slate-900 rounded-md border border-slate-800">1,5L Sem Gás</span>
              <span className="px-2.5 py-1 bg-slate-900 rounded-md border border-slate-800">1,5L Com Gás</span>
            </div>
            <p className="text-[11px] text-slate-400 pt-2 leading-relaxed">
              Atendimento faturado para construtoras, órgãos municipais, estaduais e correspondentes bancários autorizados.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Água is life. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Pilares: Comunicação &amp; Suprimentos</span>
            <span aria-hidden="true">·</span>
            <span>Água Mineral Certificada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
