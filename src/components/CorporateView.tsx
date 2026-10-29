import corporatePhotoUrl from '../assets/images/corporate_b2b_delivery_1793218679055.jpg';
import React from 'react';
import { 
  Building2, 
  Landmark, 
  Briefcase, 
  FileCheck2, 
  Truck, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { openWhatsApp } from '../config/whatsapp';

interface CorporateViewProps {
  onNavigate: (page: 'home' | 'products' | 'corporate' | 'contact') => void;
}

export const CorporateView: React.FC<CorporateViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-sky-100/60 to-white pt-12 pb-8 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Contratos Corporativos &amp; Institucionais
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2">
              Fornecimento Estruturado para Construtoras, Órgãos Públicos e Bancos
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Sabemos que empresas e repartições não podem lidar com atrasos ou notas fiscais incorretas. Desenvolvemos fluxos dedicados para compras corporativas e licitações.
            </p>
          </div>
        </div>
      </div>

      {/* Main Photographic Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-sky-200/80 p-6 sm:p-8 shadow-sm">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-800 bg-sky-100 px-3 py-1 rounded-full">
              <Truck className="w-3.5 h-3.5 text-sky-600" />
              <span>Logística Especializada em Rotas Empresariais</span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Entrega direta no almoxarifado, canteiro ou copa do seu prédio
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Nossos entregadores não deixam a carga na calçada. O descarregamento é feito de forma segura e organizada, posicionando os garrafões 20L no local de armazenagem e efetuando a conferência imediata dos vasilhames retornáveis.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-slate-700 pt-2">
              <div className="p-3 bg-sky-50/60 rounded-xl border border-sky-100">
                <p className="font-bold text-sky-900">Conformidade NR-18</p>
                <p className="text-slate-500 mt-1">Garantia de água fresca e potável em condições higiênicas adequadas para equipes de obras.</p>
              </div>
              <div className="p-3 bg-sky-50/60 rounded-xl border border-sky-100">
                <p className="font-bold text-sky-900">Gestão de Vasilhames</p>
                <p className="text-slate-500 mt-1">Controle de saldo de vasilhames 20L por recibo assinado, sem cobranças indevidas.</p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 flex-wrap">
              <button
                onClick={() => openWhatsApp('Olá! Vim pelo site Água Is Life e gostaria de fazer um pedido para fornecimento corporativo.')}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Falar no WhatsApp B2B</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold text-xs rounded-xl border border-sky-200 transition-colors cursor-pointer"
              >
                <span>Montar Pedido Personalizado</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={corporatePhotoUrl}
                alt="Entrega corporativa da Água is life em canteiro de obras e escritórios empresariais"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Detailed Target Verticals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Segmentos Atendidos
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
            Como Operamos para Cada Tipo de Cliente
          </h2>
        </div>

        <div className="space-y-6">
          {/* Vertical 1: Construtoras */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-800 flex items-center justify-center shrink-0">
              <Building2 className="w-7 h-7 text-amber-700" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Construtoras, Empreiteiras &amp; Canteiros de Obras
                </h3>
                <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Alto Volume &amp; Rigor NR-18
                </span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                As frentes de trabalho civil necessitam de hidratação contínua e sem falhas. Oferecemos remessas regulares de garrafões 20L para alojamentos e áreas de vivência, além de caixas de água em copo de 200ml seladas para operários nas lajes e escavações.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Entrega em frentes de obra e portarias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Faturamento por quinzena ou medição</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Copos 200ml higiênicos individuais</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical 2: Órgãos Públicos */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/10 text-sky-800 flex items-center justify-center shrink-0">
              <Landmark className="w-7 h-7 text-sky-700" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Órgãos Públicos, Autarquias &amp; Secretarias
                </h3>
                <span className="text-xs font-semibold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                  Licitações &amp; Empenhos
                </span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Atendemos prefeituras, fóruns, delegacias, postos de saúde e secretarias de estado. Nossa documentação fiscal é rigorosamente mantida atualizada com Certidões Negativas da Receita Federal, FGTS e Justiça do Trabalho.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Aceite de Nota de Empenho</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Laudos de potabilidade anexados às NFs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Entrega fracionada conforme requisição</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical 3: Correspondentes Bancários */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-800 flex items-center justify-center shrink-0">
              <Briefcase className="w-7 h-7 text-emerald-700" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Correspondentes Bancários &amp; Escritórios de Financiamento
                </h3>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Recepção &amp; Atendimento Premium
                </span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Proporcione aos clientes que vêm negociar empréstimos e investimentos uma recepção impecável. Fornecemos garrafas individuais compactas de 200ml, 310ml e 330ml para as mesas de atendimento e garrafas com gás para eventos corporativos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Apresentação visual elegante e higiênica</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Opções de água com gás para salas de diretoria</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Substituição semanal pré-agendada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modalities of Delivery / Supply Program */}
      <section className="bg-sky-50/70 border-y border-sky-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Cronograma &amp; Frequência
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
              Escolha o Formato Ideal para a Rotina da sua Empresa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-2xs space-y-3">
              <span className="text-xs font-bold text-sky-700 uppercase">Plano A</span>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Entrega Semanal Programada
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dia fixo da semana pré-determinado para visita do caminhão. Substituição dos galões vazios e reposição de descartáveis sem necessidade de ligar pedindo.
              </p>
              <div className="text-[11px] font-semibold text-slate-500 pt-2">
                Ideal para: Correspondentes bancários e escritórios.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-2xs space-y-3">
              <span className="text-xs font-bold text-sky-700 uppercase">Plano B</span>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Abastecimento Quinzenal de Lote
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Remessas de volumes maiores para empresas com espaço de armazenamento e frentes de obras com rotatividade moderada.
              </p>
              <div className="text-[11px] font-semibold text-slate-500 pt-2">
                Ideal para: Canteiros de porte médio e secretarias setoriais.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-2xs space-y-3">
              <span className="text-xs font-bold text-sky-700 uppercase">Plano C</span>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Contrato Sob Medida / Demanda
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reposição flexível através de chamados pelo WhatsApp corporativo com prazo de atendimento priorizado em até 24h ou no mesmo dia conforme a região.
              </p>
              <div className="text-[11px] font-semibold text-slate-500 pt-2">
                Ideal para: Grandes empreendimentos e eventos públicos.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-100 px-3 py-1 rounded-full mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dúvidas Frequentes B2B</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
            Perguntas Comuns de Compras e Almoxarifado
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <h4 className="font-display font-bold text-sm text-slate-900">
              Como funciona o faturamento para empresas e órgãos públicos?
            </h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Trabalhamos com faturamento mediante cadastro prévio do CNPJ. O pagamento pode ser feito via boleto bancário (com prazos a combinar, como 15 ou 30 dias), PIX corporativo ou liquidação por nota de empenho no caso de órgãos estatais.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <h4 className="font-display font-bold text-sm text-slate-900">
              Minha empresa ainda não possui vasilhames vazios de 20L. É possível comprar o primeiro lote com vasilhame?
            </h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Sim! Fornecemos os galões completos (líquido + vasilhame novo certificado) para início de fornecimento. Para volumes recorrentes a partir de certo patamar, podemos analisar regime de comodato ou bonificação de vasilhames.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <h4 className="font-display font-bold text-sm text-slate-900">
              Vocês fornecem laudos de pureza e qualidade da água?
            </h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Com certeza. Todas as nossas remessas possuem laudo analítico e físico-químico da fonte envasadora, emitido por laboratórios acreditados e em total harmonia com os parâmetros do Ministério da Saúde e ANVISA.
            </p>
          </div>
        </div>

        <div className="pt-6 text-center">
          <button
            onClick={() => openWhatsApp('Olá! Vim pelo site Água Is Life e gostaria de fazer um pedido e tirar dúvidas corporativas.')}
            className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <span>Falar com Consultor no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
