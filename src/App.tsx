/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ProductsView } from './components/ProductsView';
import { CorporateView } from './components/CorporateView';
import { ContactView } from './components/ContactView';
import { MascotModal } from './components/MascotModal';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { openWhatsApp } from './config/whatsapp';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'corporate' | 'contact'>('home');
  const [isMascotModalOpen, setIsMascotModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({
    'garrafao-20l': 20,
    'copo-200ml': 5,
    'garrafa-500ml-sem-gas': 10
  });

  const handleSelectForQuote = (productId: string, quantity: number) => {
    setSelectedItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + quantity
    }));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setSelectedItems((prev) => ({
      ...prev,
      [productId]: quantity
    }));
  };

  const handleNavigate = (page: 'home' | 'products' | 'corporate' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-200 selection:text-sky-950">
      {/* Top Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main View Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenMascotModal={() => setIsMascotModalOpen(true)}
          />
        )}

        {currentPage === 'products' && (
          <ProductsView
            onSelectForQuote={handleSelectForQuote}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'corporate' && (
          <CorporateView onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactView
            selectedItems={selectedItems}
            onUpdateQuantity={handleUpdateQuantity}
            onOpenMascotModal={() => setIsMascotModalOpen(true)}
          />
        )}
      </main>

      {/* Floating Fast WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => openWhatsApp()}
          className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105"
          title="Falar direto no WhatsApp com a Água is life (71) 99339-9565"
          aria-label="Falar com a Água is life pelo WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
          <span className="hidden sm:inline">WhatsApp Água is life</span>
        </button>
      </div>

      {/* Mascot Inspection Modal for High Clarity */}
      <MascotModal
        isOpen={isMascotModalOpen}
        onClose={() => setIsMascotModalOpen(false)}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
