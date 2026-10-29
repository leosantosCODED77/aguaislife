import productsPhotoUrl from '../assets/images/mineral_water_lineup_1793218678960.jpg';
import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { 
  Calculator, 
  Check, 
  Sparkles, 
  Package, 
  Droplet, 
  Building, 
  Landmark, 
  Briefcase, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { openWhatsApp } from '../config/whatsapp';

interface ProductsViewProps {
  onSelectForQuote: (productId: string, quantity: number) => void;
  onNavigate: (page: 'home' | 'products' | 'corporate' | 'contact') => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({ onSelectForQuote, onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'garrafao' | 'descartavel-pequeno' | 'descartavel-medio' | 'descartavel-grande'>('all');
  
  // Interactive Calculator State
  const [sectorType, setSectorType] = useState<'obra' | 'orgao' | 'escritorio'>('obra');
  const [teamSize, setTeamSize] = useState<number>(30);
  const [includeDisposables, setIncludeDisposables] = useState<boolean>(true);

  // Filtered products list
  const filteredProducts = PRODUCTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  // Calculate monthly requirements based on hydration standards (approx 2L/day per person for construction, 1.5L for office)
  const litersPerPersonPerDay = sectorType === 'obra' ? 2.5 : sectorType === 'orgao' ? 1.8 : 1.5;
  const workingDaysPerMonth = 22;
  const totalLitersPerMonth = Math.round(teamSize * litersPerPersonPerDay * workingDaysPerMonth);
  const estimated20LCarboys = Math.ceil(totalLitersPerMonth / 20);
  const estimatedBoxesCops = Math.ceil((teamSize * 2 * workingDaysPerMonth) / 48); // 48 cups per box
  const estimatedBottles500ml = Math.ceil((teamSize * 1 * workingDaysPerMonth) / 12); // 12 per pack

  const handleApplyCalculatorToQuote = () => {
    // Select 20L carboy with calculated estimate
    onSelectForQuote('garrafao-20l', estimated20LCarboys);
    if (includeDisposables) {
      if (sectorType === 'obra') {
        onSelectForQuote('copo-200ml', estimatedBoxesCops);
      } else {
        onSelectForQuote('garrafa-500ml-sem-gas', estimatedBottles500ml);
      }
    }
    onNavigate('contact');
  };

  const handleDirectWhatsAppCalculator = () => {
    const sectorName =
      sectorType === 'obra'
        ? 'Construtora / Canteiro de Obras'
        : sectorType === 'orgao'
        ? 'Órgão Público / Secretaria'
        : 'Correspondente Bancário / Escritório';

    const message =
      `Olá! Vim pelo site Água Is Life e gostaria de fazer um pedido.\n\n` +
      `*Simulação de Consumo:*\n` +
      `🏢 *Setor:* ${sectorName}\n` +
      `👥 *Pessoas atendidas:* ${teamSize} colaboradores/dia\n` +
      `💧 *Garrafões 20L estimados:* ${estimated20LCarboys} galões/mês\n` +
      (includeDisposables
        ? `📦 *Descartáveis complementares:* ${
            sectorType === 'obra'
              ? `${estimatedBoxesCops} caixas de copo 200ml (48 un cada)`
              : `${estimatedBottles500ml} fardos de garrafa 500ml (12 un cada)`
          }/mês\n`
        : '') +
      `\n_Gostaria de saber os valores e prazos de entrega para nossa região._`;

    openWhatsApp(message);
  };

  const handleProductDirectWhatsApp = (product: Product) => {
    const message = `Olá! Vim pelo site Água Is Life e gostaria de fazer um pedido.\n\n` +
      `💧 *Produto:* ${product.name} (${product.volume})\n` +
      `📦 *Embalagem:* ${product.packaging}\n\n` +
      `_Poderiam me informar preço e pedido mínimo para entrega?_`;
    openWhatsApp(message);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-sky-100/60 to-white pt-12 pb-8 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Catálogo Completo &amp; Especificações
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2">
              Linha Completa de Água Mineral Água is life
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Trabalhamos com garrafões 20L retornáveis e linha completa de descartáveis: copos selados de 200ml, garrafinhas de 200ml, 310ml, 330ml, e garrafas de 500ml e 1,5L com gás e sem gás.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Studio Packshot Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-sky-200/80 bg-white shadow-md">
          <img
            src={productsPhotoUrl}
            alt="Linha completa de garrafão 20L e descartáveis 200ml, 500ml e 1,5L Água is life"
            className="w-full h-64 sm:h-80 md:h-96 object-cover object-center"
          />
          <div className="p-6 bg-gradient-to-r from-sky-950 via-sky-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-display font-bold text-lg text-white">
                Pureza e Envasamento com Laudo Microbiológico Atualizado
              </p>
              <p className="text-xs text-sky-200 mt-1">
                Fontes minerais selecionadas com baixo teor de sódio, lacre de proteção e conformidade integral com a ANVISA.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-xl shadow-xs shrink-0 cursor-pointer transition-colors"
            >
              Pedir Cotação de Fardos
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Water Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sky-900 via-sky-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-sky-800">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 bg-sky-800/80 px-3 py-1 rounded-full mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Simulador de Demanda Corporativa</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Calcule a quantidade exata de água para sua empresa ou obra
            </h2>
            <p className="text-sky-200 text-xs sm:text-sm mt-1">
              Evite desperdícios ou falta de água potável. Nossa ferramenta calcula a estimativa de consumo mensal recomendada por normas de segurança do trabalho.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Calculator Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Sector selector */}
              <div>
                <label className="block text-xs font-semibold text-sky-200 mb-2">
                  Tipo de Operação:
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setSectorType('obra')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      sectorType === 'obra'
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 ring-1 ring-cyan-400'
                        : 'bg-sky-800/40 border-sky-700/60 text-slate-300 hover:bg-sky-800/80'
                    }`}
                  >
                    <Building className="w-4 h-4" />
                    <span>Construtora / Obra</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSectorType('orgao')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      sectorType === 'orgao'
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 ring-1 ring-cyan-400'
                        : 'bg-sky-800/40 border-sky-700/60 text-slate-300 hover:bg-sky-800/80'
                    }`}
                  >
                    <Landmark className="w-4 h-4" />
                    <span>Órgão Público</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSectorType('escritorio')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      sectorType === 'escritorio'
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 ring-1 ring-cyan-400'
                        : 'bg-sky-800/40 border-sky-700/60 text-slate-300 hover:bg-sky-800/80'
                    }`}
                  >
                    <Briefcase className="w-4 h-4" />
                    <span>Correspondente / Escritório</span>
                  </button>
                </div>
              </div>

              {/* Team Size Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-sky-200 mb-2">
                  <span>Colaboradores / Pessoas atendidas por dia:</span>
                  <span className="font-mono text-cyan-300 font-bold text-sm tabular-nums">
                    {teamSize} pessoas
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="250"
                  step="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-sky-950 rounded-lg cursor-pointer h-2"
                />
                <div className="flex justify-between text-[10px] text-sky-400 font-mono mt-1">
                  <span>5 pessoas</span>
                  <span>50</span>
                  <span>100</span>
                  <span>150</span>
                  <span>250+ pessoas</span>
                </div>
              </div>

              {/* Include Disposables Toggle */}
              <div className="flex items-center gap-3 pt-1">
                <input
                  type="checkbox"
                  id="includeDisposables"
                  checked={includeDisposables}
                  onChange={(e) => setIncludeDisposables(e.target.checked)}
                  className="w-4 h-4 accent-cyan-400 rounded cursor-pointer"
                />
                <label htmlFor="includeDisposables" className="text-xs text-sky-100 cursor-pointer">
                  Incluir também embalagens descartáveis complementares (copos 200ml ou garrafas 500ml)
                </label>
              </div>
            </div>

            {/* Calculated Output Card */}
            <div className="lg:col-span-5 bg-sky-800/60 backdrop-blur-md p-6 rounded-2xl border border-sky-700/80 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                Estimativa Mensal Recomendada
              </span>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-sky-900/80 border border-sky-700/50">
                  <div className="flex items-center gap-2.5">
                    <Droplet className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-medium text-slate-200">Garrafões 20 Litros:</span>
                  </div>
                  <span className="font-mono font-bold text-lg text-white tabular-nums">
                    {estimated20LCarboys} galões/mês
                  </span>
                </div>

                {includeDisposables && (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-sky-900/80 border border-sky-700/50">
                    <div className="flex items-center gap-2.5">
                      <Package className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-medium text-slate-200">
                        {sectorType === 'obra' ? 'Caixas Copo 200ml (48 un):' : 'Fardos Garrafa 500ml (12 un):'}
                      </span>
                    </div>
                    <span className="font-mono font-bold text-lg text-white tabular-nums">
                      {sectorType === 'obra' ? estimatedBoxesCops : estimatedBottles500ml} {sectorType === 'obra' ? 'cx' : 'fardos'}/mês
                    </span>
                  </div>
                )}

                <div className="p-3 text-[11px] text-sky-200 bg-sky-950/40 rounded-xl leading-relaxed">
                  Consumo estimado total de aproximadamente <strong className="text-cyan-300 font-mono tabular-nums">{totalLitersPerMonth} litros/mês</strong> em 22 dias úteis de trabalho.
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleDirectWhatsAppCalculator}
                  className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Pedir esta Estimativa via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleApplyCalculatorToQuote}
                  className="w-full py-2.5 px-4 bg-sky-900/90 hover:bg-sky-900 text-sky-200 border border-sky-700 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Personalizar itens antes de enviar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid with Functional Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="font-display font-bold text-2xl text-slate-900">
              Produtos Disponíveis para Entrega
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Clique em qualquer item para adicionar à cotação ou solicitar detalhes.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-sky-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setFilter('garrafao')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'garrafao'
                  ? 'bg-white text-sky-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Garrafões 20L
            </button>
            <button
              onClick={() => setFilter('descartavel-pequeno')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'descartavel-pequeno'
                  ? 'bg-white text-sky-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              200ml a 330ml
            </button>
            <button
              onClick={() => setFilter('descartavel-medio')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'descartavel-medio'
                  ? 'bg-white text-sky-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              500ml (c/ e s/ gás)
            </button>
            <button
              onClick={() => setFilter('descartavel-grande')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'descartavel-grande'
                  ? 'bg-white text-sky-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1,5L (c/ e s/ gás)
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-sky-300 hover:shadow-sm transition-all"
            >
              <div className="space-y-4">
                {/* Volume & Type metadata unboxed */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-bold text-sky-800">{product.volume}</span>
                  <div className="flex items-center gap-1.5">
                    <span>{product.type === 'sparkling' ? 'Com Gás' : product.type === 'still' ? 'Sem Gás' : 'Com / Sem Gás'}</span>
                    <span aria-hidden="true">·</span>
                    <span>{product.packaging}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 leading-snug">
                  {product.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Target Fit Note */}
                <div className="p-2.5 rounded-lg bg-sky-50/60 border border-sky-100 text-[11px] text-sky-900 leading-tight">
                  <strong className="font-semibold">Recomendado para: </strong>
                  {product.targetFit}
                </div>

                {/* Feature checklist */}
                <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleProductDirectWhatsApp(product)}
                  className="w-full sm:flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Pedir no WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSelectForQuote(product.id, 10);
                    onNavigate('contact');
                  }}
                  className="w-full sm:w-auto py-2.5 px-3 bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold text-xs rounded-xl border border-sky-200/80 transition-colors flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
                  title="Personalizar quantidades e local de entrega"
                >
                  <span>+ Itens</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
