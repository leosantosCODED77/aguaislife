import perfilEmpresaUrl from '../assets/images/perfil_agua_is_life_v2.jpeg';
import waterHeroUrl from '../assets/images/water_distribution_hero_1793218678552.jpg';
import React, { useState } from 'react';
import { 
  CheckCircle2, 
  MessageSquare, 
  Truck, 
  Building2, 
  Landmark, 
  Briefcase, 
  ArrowRight, 
  ShieldCheck, 
  Droplet, 
  Sparkles,
  Maximize2,
  PhoneCall,
  Star,
  Quote,
  MessageCircle,
  ExternalLink,
  Package,
  Clock,
  Award
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { openWhatsApp } from '../config/whatsapp';

interface HomeViewProps {
  onNavigate: (page: 'home' | 'products' | 'corporate' | 'contact') => void;
  onOpenMascotModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenMascotModal }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Eng. Marcos Silveira",
      role: "Gerente Geral de Obras",
      company: "Consórcio Engenharia & Infraestrutura",
      segment: "Construtora",
      icon: Building2,
      quote: "Em canteiro pesado com mais de 90 operários, água potável gelada é exigência da NR-18 e não pode falhar por uma hora sequer. A Água is life entrega pontualmente toda segunda-feira os garrafões de 20L e as caixas de copo 200ml seladas. Zero dor de cabeça.",
      stats: "Fornecimento contínuo há mais de 14 meses",
      verified: true
    },
    {
      name: "Dra. Valéria Mendes",
      role: "Diretora de Almoxarifado e Suprimentos",
      company: "Secretaria de Administração Pública",
      segment: "Órgão Público",
      icon: Landmark,
      quote: "Processo 100% regular com Nota Fiscal Eletrônica detalhada, aceitação de liquidação por empenho e todas as certidões negativas rigorosamente em dia. Os laudos laboratoriais de pureza sempre acompanham a entrega.",
      stats: "Atendimento a 4 secretarias municipais",
      verified: true
    },
    {
      name: "Juliana F. Braga",
      role: "Supervisora de Atendimento",
      company: "Correspondente Bancário Mais Crédito",
      segment: "Serviços Financeiros",
      icon: Briefcase,
      quote: "Recepcionamos dezenas de clientes diariamente para assinar contratos de crédito. Fornecemos as garrafinhas compactas de 200ml e 330ml com água mineral cristalina bem gelada. O atendimento pelo WhatsApp é instantâneo e muito atencioso.",
      stats: "Reposição semanal programada",
      verified: true
    }
  ];

  const handleQuickWhatsApp = (item?: string) => {
    const text = item 
      ? `Olá! Vim pelo site Água Is Life e gostaria de fazer um pedido para o item: ${item}.`
      : 'Olá! Vim pelo site Água Is Life e gostaria de fazer um pedido.';
    openWhatsApp(text);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Dynamic Announcement Bar */}
      <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-cyan-900 text-white text-xs py-2.5 px-4 font-medium border-b border-sky-700 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-extrabold text-cyan-300 uppercase tracking-wider text-[11px]">
              Rotas Diárias Ativas:
            </span>
            <span className="text-sky-100 hidden sm:inline">
              Abastecimento programado para Construtoras, Órgãos Públicos e Correspondentes Bancários
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <button
              onClick={() => handleQuickWhatsApp()}
              className="text-cyan-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chamar no WhatsApp</span>
            </button>
            <span className="text-sky-400">·</span>
            <a
              href="https://instagram.com/aguaislife"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Instagram @aguaislife</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section: Chamativo, Dinâmico e com Alto Impacto Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-sky-50/70 to-cyan-100/50 border border-sky-200/80 p-6 sm:p-10 lg:p-12 shadow-xl">
          {/* Background Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Headline, Mission & Quick Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-sky-900 bg-cyan-200/60 border border-cyan-300/80 px-3.5 py-1.5 rounded-full shadow-2xs">
                  <Droplet className="w-3.5 h-3.5 text-sky-700 fill-sky-600" />
                  <span>Água Mineral Certificada &amp; Envasamento Seguro</span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1.5 rounded-full">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span>Atendimento Rápido no WhatsApp</span>
                </span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-slate-900 tracking-tight leading-[1.12]">
                Sua empresa sem falta de água. <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-sky-600 to-cyan-600">Suprimento garantido</span> com pontualidade total.
              </h1>

              {/* MISSION STATEMENT CARD */}
              <div className="relative bg-gradient-to-r from-sky-900 via-sky-950 to-slate-950 text-white p-5 sm:p-6 rounded-2xl shadow-lg border border-sky-800">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-600 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Nossa Missão Oficial
                    </span>
                    <blockquote className="text-base sm:text-lg font-bold text-white italic leading-snug">
                      "Nossa missão atender o cliente com qualidade e confiança. Mantendo a comunicação e suprimentos como pilares"
                    </blockquote>
                    <p className="text-xs text-sky-200 pt-0.5">
                      Diretriz fundamental da <strong>Água is life</strong> para construtoras, órgãos públicos e correspondentes bancários.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                Distribuição sob medida de <strong>Garrafões 20L retornáveis</strong> e linha completa de descartáveis: <strong>copos selados 200ml</strong>, <strong>garrafinhas 200ml, 310ml, 330ml</strong> e garrafas de <strong>500ml e 1,5L (com e sem gás)</strong>.
              </p>

              {/* Key Trust Checkpoints */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs font-bold text-slate-800">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/80 border border-sky-100 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Emissão de NF-e</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/80 border border-sky-100 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Empenho &amp; Boleto 30d</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/80 border border-sky-100 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Conformidade NR-18</span>
                </div>
              </div>

              {/* Action Buttons: Direct to WhatsApp and Products */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => handleQuickWhatsApp()}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer group whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Pedir Cotação no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('products')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-sky-50 text-sky-950 border-2 border-sky-300 font-extrabold text-sm rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-xs"
                >
                  <Package className="w-4 h-4 text-sky-600" />
                  <span>Ver Todos os 8 Produtos</span>
                </button>
              </div>
            </div>

            {/* Right Column: Mascote Oficial da Empresa em Alta Nitidez com Badges Dinâmicos */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white p-6 sm:p-7 rounded-3xl border-2 border-sky-300 shadow-2xl overflow-hidden group">
                {/* Floating badge 1: Top Left */}
                <div className="absolute top-4 left-4 z-20 bg-sky-950/90 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-sky-700">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Identidade Oficial</span>
                </div>

                {/* Floating badge 2: Top Right */}
                <button
                  onClick={onOpenMascotModal}
                  className="absolute top-4 right-4 z-20 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-[11px] font-black px-3 py-1 rounded-full shadow-md flex items-center gap-1 cursor-pointer transition-transform hover:scale-105"
                  title="Ver imagem em alta definição e nítida"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Ampliar Nítido</span>
                </button>

                {/* Crisp Mascot Image Container */}
                <div 
                  onClick={onOpenMascotModal}
                  className="relative mt-8 bg-gradient-to-b from-sky-100/70 via-sky-50/40 to-white rounded-2xl p-4 border border-sky-200 shadow-inner flex items-center justify-center cursor-pointer group-hover:border-sky-400 transition-all"
                >
                  <img
                    src={perfilEmpresaUrl}
                    alt="Foto de perfil e logotipo oficial da Água is life Distribuidora de Água Mineral"
                    className="crisp-mascot-img w-full max-h-[380px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Bottom Trust Tag inside Card */}
                <div className="mt-4 pt-3 border-t border-sky-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Entrega Rápida e Uniformizada</span>
                  </div>
                  <a
                    href="https://instagram.com/aguaislife"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black text-sky-800 hover:text-sky-950 flex items-center gap-1 hover:underline"
                  >
                    @aguaislife
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: DEPOIMENTOS EM DESTAQUE NA PRIMEIRA PÁGINA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-sky-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-sky-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-sky-800 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 bg-sky-800/80 px-3.5 py-1 rounded-full mb-3">
                <Quote className="w-3.5 h-3.5" />
                <span>Prova Social dos Nossos Clientes</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white">
                Quem compra e confia na Água is life
              </h2>
              <p className="text-sky-200 text-xs sm:text-sm mt-1 max-w-xl">
                Depoimentos reais de quem gerencia canteiros de obras, almoxarifados de órgãos públicos e correspondentes bancários.
              </p>
            </div>

            {/* Testimonial Nav Tabs */}
            <div className="flex w-full min-w-0 md:w-auto items-center gap-2 bg-sky-950/80 p-1.5 rounded-2xl border border-sky-800 overflow-x-auto md:overflow-visible">
              {testimonials.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeTestimonial === idx
                      ? 'bg-cyan-400 text-slate-950 shadow-sm'
                      : 'text-sky-300 hover:text-white hover:bg-sky-900/60'
                  }`}
                >
                  {item.segment}
                </button>
              ))}
            </div>
          </div>

          {/* Active Testimonial Card Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <span className="text-xs font-bold text-sky-200 ml-2">5.0 · Avaliação Máxima em Pontualidade</span>
              </div>

              <blockquote className="text-lg sm:text-2xl font-semibold text-white leading-relaxed italic">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 flex items-center justify-center font-display font-black text-lg">
                  {testimonials[activeTestimonial].name.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-extrabold text-base text-white">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-xs text-cyan-300 font-medium">
                    {testimonials[activeTestimonial].role} · <strong className="text-white">{testimonials[activeTestimonial].company}</strong>
                  </p>
                  <p className="text-[11px] text-sky-400 mt-0.5">
                    {testimonials[activeTestimonial].stats}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: Quick WhatsApp Contact directly from testimonial */}
            <div className="lg:col-span-4 bg-sky-950/90 rounded-2xl p-6 border border-sky-800 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                Atendimento Imediato
              </span>
              <h4 className="font-display font-bold text-lg text-white">
                Sua empresa também merece esse padrão de entrega
              </h4>
              <p className="text-xs text-sky-200 leading-relaxed">
                Entre em contato direto pelo WhatsApp. Montamos uma proposta personalizada para seu volume de consumo em menos de 10 minutos.
              </p>
              <button
                onClick={() => handleQuickWhatsApp(testimonials[activeTestimonial].segment)}
                className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Pedir Cotação para {testimonials[activeTestimonial].segment}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Showcase dos 4 Produtos Mais Pedidos na Primeira Seção */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Linha em Destaque
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 mt-1">
              Os Produtos Mais Fornecidos para Empresas e Obras
            </h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1 group cursor-pointer"
          >
            <span>Ver catálogo completo com os 8 produtos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: 20L */}
          <div className="bg-white rounded-2xl border-2 border-sky-100 hover:border-sky-300 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-sky-700 uppercase bg-sky-50 px-2 py-0.5 rounded">
                Carro-Chefe B2B
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Garrafão 20 Litros Mineral
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Galões higienizados, lacre inviolável e água mineral pura de fonte certificada. Ideal para bebedouros de alta rotação.
              </p>
            </div>
            <button
              onClick={() => handleQuickWhatsApp('Garrafão 20L')}
              className="mt-5 w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Pedir no WhatsApp</span>
            </button>
          </div>

          {/* Card 2: Copo 200ml */}
          <div className="bg-white rounded-2xl border-2 border-sky-100 hover:border-sky-300 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-cyan-800 uppercase bg-cyan-50 px-2 py-0.5 rounded">
                Frentes de Obra / NR-18
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Água em Copo 200ml Selado
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Caixas com 48 copos hermeticamente lacrados. Zero desperdício e máxima higiene individual nas obras e eventos.
              </p>
            </div>
            <button
              onClick={() => handleQuickWhatsApp('Água Copo 200ml')}
              className="mt-5 w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Pedir no WhatsApp</span>
            </button>
          </div>

          {/* Card 3: 500ml Sem e Com Gás */}
          <div className="bg-white rounded-2xl border-2 border-sky-100 hover:border-sky-300 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-sky-700 uppercase bg-sky-50 px-2 py-0.5 rounded">
                Reuniões &amp; Equipes
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Garrafa 500ml (c/ e s/ gás)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fardos práticos de 12 unidades. Garrafa ergonômica de cristal pet com pH equilibrado para consumo dinâmico.
              </p>
            </div>
            <button
              onClick={() => handleQuickWhatsApp('Garrafa 500ml')}
              className="mt-5 w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Pedir no WhatsApp</span>
            </button>
          </div>

          {/* Card 4: 1,5L */}
          <div className="bg-white rounded-2xl border-2 border-sky-100 hover:border-sky-300 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-cyan-800 uppercase bg-cyan-50 px-2 py-0.5 rounded">
                Refeitórios &amp; Alojamentos
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Garrafa 1,5L (c/ e s/ gás)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fardo com 6 unidades de alto rendimento. Excelente custo-benefício por litro para refeições e copas coletivas.
              </p>
            </div>
            <button
              onClick={() => handleQuickWhatsApp('Garrafa 1,5L')}
              className="mt-5 w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Pedir no WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* Os Dois Pilares: Comunicação e Suprimentos */}
      <section className="bg-sky-50/70 border-y border-sky-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Nossa Base Operacional
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
              Os Dois Pilares Fundamentais da Água is life
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Não vendemos apenas galões; garantimos a tranquilidade da sua gestão diária.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pilar 1: Comunicação */}
            <div className="bg-white p-8 rounded-2xl border border-sky-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                01. Pilar Comunicação
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Canal direto com quem decide e executa. Você não fala com robôs lentos. Confirmamos rotas com antecedência, informamos horários previstos de chegada e mantemos contato direto com o almoxarife, mestre de obras ou compras.
              </p>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Avisos de saída para entrega via WhatsApp corporativo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Flexibilidade de reprogramação de rotas e volumes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Atendimento rápido para pedidos adicionais de urgência</span>
                </li>
              </ul>
            </div>

            {/* Pilar 2: Suprimentos */}
            <div className="bg-white p-8 rounded-2xl border border-sky-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-6">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                02. Pilar Suprimentos
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Estoque regulador e logística confiável para garantir suprimento ininterrupto. Obras e órgãos públicos não podem parar por falta de água potável para os trabalhadores e cidadãos.
              </p>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Garrafões 20L novos, higienizados e com lacre inviolável</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Fardos fechados de copos 200ml, garrafas 310ml, 330ml, 500ml e 1,5L</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                  <span>Logística reversa simplificada para troca de vasilhames</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Público-Alvo Prioritário
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
            Soluções Específicas para Cada Segmento
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Entendemos as particularidades fiscais, operacionais e de consumo da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Construtoras */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-sky-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                Construtoras &amp; Obras
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Canteiros de obras demandam alto volume diário para atender operários e normas NR-18. Entregamos garrafões 20L para alojamentos e copos 200ml lacrados para as frentes de trabalho.
              </p>
              <div className="text-xs text-slate-500 space-y-1">
                <p>· Faturamento quinzenal ou mensal</p>
                <p>· Entrega em canteiros de difícil acesso</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('corporate')}
              className="mt-6 text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1 group cursor-pointer"
            >
              <span>Ver atendimento para Construtoras</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 2. Órgãos Públicos */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-sky-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                Órgãos Públicos &amp; Autarquias
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Fornecimento em conformidade com as regras públicas: nota fiscal eletrônica detalhada, aceitação de empenho, certidões negativas regulares e cumprimento rigoroso dos cronogramas.
              </p>
              <div className="text-xs text-slate-500 space-y-1">
                <p>· Certidão Negativa de Débitos em dia</p>
                <p>· Fornecimento fracionado por demanda</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('corporate')}
              className="mt-6 text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1 group cursor-pointer"
            >
              <span>Ver atendimento para Órgãos Públicos</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 3. Correspondentes Bancários */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-sky-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                Correspondentes Bancários
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Seus clientes de crédito e financiamento merecem conforto e cortesia. Fornecemos garrafinhas 200ml, 310ml e 330ml para mesas de atendimento e garrafas com gás para salas privativas.
              </p>
              <div className="text-xs text-slate-500 space-y-1">
                <p>· Garrafas individuais de alto padrão</p>
                <p>· Bebedouros limpos e sempre abastecidos</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('corporate')}
              className="mt-6 text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1 group cursor-pointer"
            >
              <span>Ver atendimento para Bancos &amp; Escritórios</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Logistics & Fleet Banner Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-sky-100 shadow-md">
          <img
            src={waterHeroUrl}
            alt="Centro de distribuição e frota de entrega de água mineral Água is life"
            className="w-full h-72 sm:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
              Logística &amp; Capacidade de Distribuição
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1 max-w-2xl">
              Agilidade nas entregas com estoque regulador pronto para grandes demandas.
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm max-w-xl mt-2 leading-relaxed">
              Estrutura preparada para carregar frotas e suprir desde pequenas empresas até grandes obras estruturantes e secretarias estaduais e municipais.
            </p>
            <div className="mt-5 flex items-center gap-4 flex-wrap">
              <button
                onClick={() => handleQuickWhatsApp()}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-sm transition-colors cursor-pointer flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Chamar no WhatsApp Agora</span>
              </button>
              <button
                onClick={() => onNavigate('products')}
                className="text-xs font-semibold text-white hover:text-cyan-200 underline cursor-pointer"
              >
                Conhecer embalagens e fardos &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-950 via-sky-900 to-cyan-950 text-white rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-sky-800">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-xs font-black uppercase tracking-wider text-cyan-300">
              Precisa de entrega urgente hoje?
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              Fale direto com a equipe comercial da Água is life
            </h2>
            <p className="text-sky-100 text-sm leading-relaxed">
              Sem burocracia ou formulários lentos: tire dúvidas sobre fardos, garrafões 20L e prazos de rota no seu município em instantes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={() => handleQuickWhatsApp()}
              className="w-full sm:w-auto px-7 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2.5"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Chamar no WhatsApp Comercial</span>
            </button>
            <a
              href="https://instagram.com/aguaislife"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 bg-sky-800 hover:bg-sky-700 text-white font-bold text-sm rounded-xl border border-sky-600 transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Instagram @aguaislife</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
