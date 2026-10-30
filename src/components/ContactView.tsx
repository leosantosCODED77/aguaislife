import perfilEmpresaUrl from '../assets/images/perfil_agua_is_life_v2.jpeg';
import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { 
  MessageCircle, 
  Instagram, 
  Phone, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Maximize2,
  ArrowRight,
  ExternalLink,
  Send
} from 'lucide-react';
import { openWhatsApp, WHATSAPP_CONFIG } from '../config/whatsapp';

interface ContactViewProps {
  selectedItems: Record<string, number>;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onOpenMascotModal: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ 
  selectedItems, 
  onUpdateQuantity,
  onOpenMascotModal 
}) => {
  // Form fields to generate the WhatsApp direct message
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [segment, setSegment] = useState('construtora');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [frequency, setFrequency] = useState('semanal');
  const [notes, setNotes] = useState('');

  const buildWhatsAppMessage = () => {
    const itemsList = Object.entries(selectedItems)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => {
        const prod = PRODUCTS.find((p) => p.id === id);
        return `• ${prod ? prod.name : id}: ${qty} unidades`;
      })
      .join('\n');

    return `Olá! Vim pelo site Água Is Life e gostaria de fazer um pedido.\n\n` +
      `*Dados do Pedido / Cotação:*\n` +
      `🏢 *Empresa / Solicitante:* ${companyName || 'A combinar'}\n` +
      `👤 *Responsável:* ${contactName || 'A combinar'}\n` +
      `📍 *Segmento:* ${
        segment === 'construtora'
          ? 'Construtora / Canteiro de Obras'
          : segment === 'orgao-publico'
          ? 'Órgão Público / Secretaria'
          : segment === 'correspondente-bancario'
          ? 'Correspondente Bancário / Serviços Financeiros'
          : segment === 'escritorio'
          ? 'Escritório Corporativo'
          : 'Outro Segmento'
      }\n` +
      `🚚 *Local / Cidade de Entrega:* ${deliveryAddress || 'A informar no chat'}\n` +
      `🗓️ *Frequência de Entrega:* ${
        frequency === 'semanal'
          ? 'Semanal Programada'
          : frequency === 'quinzenal'
          ? 'Quinzenal Programada'
          : frequency === 'mensal'
          ? 'Mensal por Lote'
          : 'Sob Demanda / Pontual'
      }\n\n` +
      `📦 *Produtos Selecionados:*\n${itemsList || '• Garrafões 20L e descartáveis a combinar'}\n\n` +
      (notes ? `💬 *Observações:* ${notes}\n\n` : '') +
      `_"Nossa missão atender o cliente com qualidade e confiança. Mantendo a comunicação e suprimentos como pilares."_`;
  };

  const handleOpenWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const message = buildWhatsAppMessage();
    openWhatsApp(message);
  };

  const handleDirectWhatsAppQuick = () => {
    openWhatsApp();
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-sky-100/60 to-white pt-12 pb-8 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Contato Direto · Sem Burocracia
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2">
              Fale Conosco pelo WhatsApp ou Instagram
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Aqui você não perde tempo preenchendo cadastros demorados que ficam presos em banco de dados. Você escolhe os produtos e fala <strong>direto com quem atende e entrega</strong> pelo WhatsApp ou Instagram oficial.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fast Action Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: WhatsApp Direto */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-white fill-white/20" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                Atendimento Rápido
              </span>
              <h3 className="font-display font-extrabold text-2xl text-white">
                Falar Agora pelo WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed">
                Tire dúvidas sobre galões 20L, fardos de descartáveis, condições para canteiros de obras, órgãos públicos e correspondentes bancários.
              </p>
            </div>

            <button
              onClick={handleDirectWhatsAppQuick}
              className="mt-6 w-full py-3.5 px-6 bg-white hover:bg-emerald-50 text-emerald-900 font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Abrir Conversa no WhatsApp</span>
              <ExternalLink className="w-4 h-4 text-emerald-700" />
            </button>
          </div>

          {/* Card 2: Instagram Oficial */}
          <div className="bg-gradient-to-br from-pink-600 via-purple-600 to-sky-700 text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <Instagram className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-pink-200">
                Rede Social Oficial
              </span>
              <h3 className="font-display font-extrabold text-2xl text-white">
                Instagram: @aguaislife
              </h3>
              <p className="text-xs sm:text-sm text-pink-50 leading-relaxed">
                Conheça nossos bastidores, rotas diárias de entrega, novidades sobre água mineral e fale conosco diretamente pelo Direct Message.
              </p>
            </div>

            <a
              href="https://instagram.com/aguaislife"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-3.5 px-6 bg-white hover:bg-pink-50 text-purple-900 font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-center"
            >
              <span>Acessar Instagram @aguaislife</span>
              <ExternalLink className="w-4 h-4 text-purple-700" />
            </a>
          </div>
        </div>

        {/* Gerador de Mensagem Personalizada para WhatsApp */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Instant WhatsApp Order Builder */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-sky-100 px-3 py-1 rounded-full mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  <span>Gerador de Pedido Direto para WhatsApp</span>
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Monte sua mensagem e envie com 1 clique
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Selecione os itens e dados da sua empresa. Ao clicar no botão, o WhatsApp abrirá com sua mensagem já digitada e pronta para enviar.
                </p>
              </div>

              {/* Form fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nome da Empresa / Solicitante
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Construtora Exemplo Ltda"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pessoa de Contato
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Maria Santos (Almoxarifado)"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Segmento
                  </label>
                  <select
                    value={segment}
                    onChange={(e) => setSegment(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all cursor-pointer"
                  >
                    <option value="construtora">Construtora / Canteiro de Obras</option>
                    <option value="orgao-publico">Órgão Público / Secretaria</option>
                    <option value="correspondente-bancario">Correspondente Bancário</option>
                    <option value="escritorio">Escritório / Comércio</option>
                    <option value="outro">Outro Segmento</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Frequência Prevista
                  </label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all cursor-pointer"
                  >
                    <option value="semanal">Semanal Programada</option>
                    <option value="quinzenal">Quinzenal Programada</option>
                    <option value="mensal">Mensal por Lote</option>
                    <option value="sob-demanda">Sob Demanda / Pontual</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Bairro ou Cidade de Entrega
                </label>
                <input
                  type="text"
                  placeholder="Ex: Canteiro de Obras Setor Norte - Cidade"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
              </div>

              {/* Products selection list */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-700">
                    Ajuste as Quantidades para a Mensagem:
                  </label>
                  <span className="text-[11px] text-slate-500">
                    Clique em + ou - para somar unidades
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-1">
                  {PRODUCTS.map((prod) => {
                    const qty = selectedItems[prod.id] || 0;
                    return (
                      <div
                        key={prod.id}
                        className={`p-3 rounded-xl border text-xs flex items-center justify-between gap-2 transition-all ${
                          qty > 0
                            ? 'bg-sky-50/80 border-sky-300 text-sky-950 font-medium'
                            : 'bg-slate-50/50 border-slate-200 text-slate-600'
                        }`}
                      >
                        <div className="flex-1 truncate">
                          <p className="font-semibold truncate">{prod.name}</p>
                          <p className="text-[10px] text-slate-500">{prod.volume}</p>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(prod.id, Math.max(0, qty - 5))}
                            className="w-6 h-6 rounded bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 flex items-center justify-center font-bold"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-mono font-bold text-sky-900 tabular-nums">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(prod.id, qty + 5)}
                            className="w-6 h-6 rounded bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 flex items-center justify-center font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Observação adicional (opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Preciso de nota para faturamento 30 dias / suporte de galão"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
              </div>

              {/* Big Direct WhatsApp CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleOpenWhatsApp}
                  className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Enviar Pedido pelo WhatsApp Agora</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2">
                  Abrirá o WhatsApp diretamente com todos os itens pré-formatados, sem cadastro e sem espera.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Identity & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Identity Mascot Card */}
            <div className="bg-white rounded-3xl border border-sky-200/90 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-sky-900 uppercase tracking-wider">
                  Identidade Visual Água is life
                </span>
                <button
                  type="button"
                  onClick={onOpenMascotModal}
                  className="text-xs text-sky-700 hover:text-sky-900 font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Ver Nítido</span>
                </button>
              </div>

              <div 
                onClick={onOpenMascotModal}
                className="bg-gradient-to-b from-sky-50 to-white rounded-2xl p-4 border border-sky-100 flex items-center justify-center cursor-pointer group"
              >
                <img
                  src={perfilEmpresaUrl}
                  alt="Foto de perfil oficial Água is life em alta nitidez"
                  className="crisp-mascot-clean max-h-52 object-contain transition-transform group-hover:scale-105"
                />
              </div>

              <p className="text-xs text-slate-600 mt-3 text-center leading-relaxed">
                Foto de perfil e logotipo oficial da Água is life. Entrega direta, confiável e com procedência mineral garantida.
              </p>
            </div>

            {/* Direct Channels Card */}
            <div className="bg-sky-950 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-lg">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Canais Oficiais
                </span>
                <h3 className="font-display font-bold text-xl text-white mt-1">
                  Água is life Distribuição
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                {/* Instagram Button */}
                <a
                  href="https://instagram.com/aguaislife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-sky-900/80 hover:bg-sky-800 transition-colors border border-sky-700/60 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-pink-600/30 text-pink-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                      @aguaislife no Instagram
                    </p>
                    <p className="text-sky-300 text-[11px]">
                      Acompanhe novidades e fale pelo Direct
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-sky-400 group-hover:text-white" />
                </a>

                {/* WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleDirectWhatsAppQuick}
                  className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-sky-900/80 hover:bg-sky-800 transition-colors border border-sky-700/60 text-left group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-600/30 text-emerald-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                      WhatsApp: {WHATSAPP_CONFIG.displayPhone}
                    </p>
                    <p className="text-sky-300 text-[11px]">
                      Atendimento rápido e pedidos em rota
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-sky-400 group-hover:text-white" />
                </button>

                {/* Horários */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-sky-900/80 border border-sky-700/60">
                  <div className="w-10 h-10 rounded-lg bg-cyan-600/30 text-cyan-300 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Horário de Expedição</p>
                    <p className="text-sky-300 text-[11px]">
                      Segunda a Sexta: 07h às 18h | Sábados: 07h às 13h
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality & Pillar quote badge */}
              <div className="pt-2 border-t border-sky-800/80">
                <blockquote className="text-[11px] text-sky-200 italic leading-relaxed">
                  "Nossa missão atender o cliente com qualidade e confiança. Mantendo a comunicação e suprimentos como pilares"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
