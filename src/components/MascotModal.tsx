import perfilEmpresaUrl from '../assets/images/perfil_agua_is_life_v2.jpeg';
import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface MascotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MascotModal: React.FC<MascotModalProps> = ({ isOpen, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-sky-100 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-sky-50/70">
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sky-600" />
              Identidade Visual Oficial — Água is life
            </h3>
            <p className="text-xs text-slate-500">
              Foto de perfil e logotipo oficial de entrega, confiança e pureza mineral
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar visualização"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content & Image Display with crisp filter and zoom */}
        <div className="flex-1 overflow-auto p-6 flex flex-col items-center justify-center bg-radial from-white via-sky-50/40 to-slate-100">
          <div className="relative overflow-hidden rounded-xl border border-sky-200/60 bg-white/80 p-6 shadow-inner flex items-center justify-center min-h-[360px] w-full">
            <img
              src={perfilEmpresaUrl}
              alt="Foto de perfil e logotipo oficial Água is life"
              className="crisp-mascot-img object-contain transition-transform duration-200"
              style={{
                transform: `scale(${zoomLevel})`,
                maxHeight: '400px',
                imageRendering: '-webkit-optimize-contrast',
              }}
            />
          </div>

          {/* Zoom controls */}
          <div className="flex items-center gap-3 mt-4 bg-white px-4 py-2 rounded-xl shadow-xs border border-slate-200">
            <span className="text-xs font-semibold text-slate-600">Zoom Nítido:</span>
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.8, Number((z - 0.25).toFixed(2))))}
              className="p-1.5 text-slate-600 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-colors"
              title="Diminuir Zoom"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold text-sky-800 w-12 text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(2.0, Number((z + 0.25).toFixed(2))))}
              className="p-1.5 text-slate-600 hover:text-sky-700 hover:bg-sky-50 rounded-md transition-colors"
              title="Aumentar Zoom"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="ml-2 text-xs text-sky-700 hover:underline font-medium"
            >
              Redefinir
            </button>
          </div>
        </div>

        {/* Description & Mission footer */}
        <div className="px-6 py-4 bg-white border-t border-slate-100">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-slate-900">
                Padrão de Qualidade &amp; Entrega Confiável
              </p>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Logotipo e perfil oficial "Água is life", representando o profissionalismo no fornecimento de galões 20L e linha completa de descartáveis para canteiros, secretarias e bancos.
              </p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              Imagem otimizada com alta fidelidade de contornos
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-sky-700 text-white rounded-lg text-xs font-semibold hover:bg-sky-800 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
