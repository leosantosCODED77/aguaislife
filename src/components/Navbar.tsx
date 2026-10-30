import perfilEmpresaUrl from '../assets/images/perfil_agua_is_life_v2.jpeg';
import React, { useState } from 'react';
import { Droplets, Menu, X, ArrowUpRight } from 'lucide-react';
import { openWhatsApp } from '../config/whatsapp';

interface NavbarProps {
  currentPage: 'home' | 'products' | 'corporate' | 'contact';
  onNavigate: (page: 'home' | 'products' | 'corporate' | 'contact') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: 'home' | 'products' | 'corporate' | 'contact') => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand wordmark (single text element) */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 text-left text-sky-950 hover:text-sky-700 transition-colors cursor-pointer group shrink-0"
            aria-label="Ir para a página inicial da Água is life"
          >
            <div className="w-11 h-11 rounded-xl overflow-hidden bg-white border border-sky-200 shadow-sm group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center p-0.5">
              <img
                src={perfilEmpresaUrl}
                alt="Foto de perfil oficial Água is life"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight leading-none text-sky-950">
                Água <span className="text-sky-600 font-bold">is life</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                Distribuidora Mineral &amp; B2B
              </span>
            </div>
          </button>

          {/* Zone 2: 4 clean single-line text links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <button
              onClick={() => handleNav('home')}
              className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
                currentPage === 'home'
                  ? 'text-sky-700 border-sky-600'
                  : 'border-transparent hover:text-sky-800'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => handleNav('products')}
              className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
                currentPage === 'products'
                  ? 'text-sky-700 border-sky-600'
                  : 'border-transparent hover:text-sky-800'
              }`}
            >
              Produtos &amp; Catálogo
            </button>
            <button
              onClick={() => handleNav('corporate')}
              className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
                currentPage === 'corporate'
                  ? 'text-sky-700 border-sky-600'
                  : 'border-transparent hover:text-sky-800'
              }`}
            >
              Corporativo &amp; Órgãos Públicos
            </button>
            <button
              onClick={() => handleNav('contact')}
              className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
                currentPage === 'contact'
                  ? 'text-sky-700 border-sky-600'
                  : 'border-transparent hover:text-sky-800'
              }`}
            >
              Cotação &amp; Contato
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => openWhatsApp()}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Chamar no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-sky-700 rounded-lg hover:bg-sky-50 focus:outline-none"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-sky-100 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <button
            onClick={() => handleNav('home')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentPage === 'home' ? 'bg-sky-50 text-sky-800' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            1. Início
          </button>
          <button
            onClick={() => handleNav('products')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentPage === 'products' ? 'bg-sky-50 text-sky-800' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            2. Produtos &amp; Catálogo (20L e Descartáveis)
          </button>
          <button
            onClick={() => handleNav('corporate')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentPage === 'corporate' ? 'bg-sky-50 text-sky-800' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            3. Soluções B2B (Construtoras, Órgãos Públicos e Bancos)
          </button>
          <button
            onClick={() => handleNav('contact')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentPage === 'contact' ? 'bg-sky-50 text-sky-800' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            4. Cotação &amp; Contato
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp();
              }}
              className="w-full py-2.5 px-4 text-center text-xs font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-sm cursor-pointer"
            >
              Chamar no WhatsApp Agora
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
