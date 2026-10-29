export interface Product {
  id: string;
  name: string;
  category: 'garrafao' | 'descartavel-pequeno' | 'descartavel-medio' | 'descartavel-grande';
  volume: string;
  type: 'still' | 'sparkling' | 'both';
  packaging: string;
  description: string;
  targetFit: string;
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'garrafao-20l',
    name: 'Garrafão 20 Litros Mineral',
    category: 'garrafao',
    volume: '20 Litros',
    type: 'still',
    packaging: 'Galão Retornável de Policarbonato / PET Livre de BPA',
    description: 'Pilar do abastecimento corporativo. Água mineral pura de fonte natural selecionada, ideal para suportes refrigerados e bebedouros de alta vazão.',
    targetFit: 'Perfeito para canteiros de obras, secretarias públicas, correspondentes bancários e escritórios.',
    features: [
      'Lacre termocontrátil de máxima segurança',
      'Galões higienizados e inspecionados rigorosamente',
      'Reposição contínua e logística reversa de vasilhames',
      'Compatível com qualquer suporte ou bebedouro'
    ]
  },
  {
    id: 'copo-200ml',
    name: 'Água Mineral em Copo 200ml',
    category: 'descartavel-pequeno',
    volume: '200 ml',
    type: 'still',
    packaging: 'Copo descartável selado em caixas com 48 unidades',
    description: 'Solução mais higiênica e prática para distribuição individual. Elimina desperdício e garante vedação estéril até o consumo.',
    targetFit: 'Essencial para frentes de obra (NR-18), salas de espera, eventos públicos e atendimento ao cliente.',
    features: [
      'Tampa com selagem hermética inviolável',
      'Consumo rápido e sem sobra',
      'Caixa de papelão reforçada para empilhamento',
      'Homologado para conformidade com normas de saúde e segurança'
    ]
  },
  {
    id: 'garrafinha-200ml',
    name: 'Água Mineral Garrafa 200ml',
    category: 'descartavel-pequeno',
    volume: '200 ml',
    type: 'still',
    packaging: 'Mini garrafa PET ergonômica em fardo',
    description: 'Versão em garrafinha compacta para quem prefere tampa de rosca com portabilidade total. Excelente acabamento visual.',
    targetFit: 'Salas de reuniões de construtoras e atendimento vip em correspondentes bancários.',
    features: [
      'Tampa rosqueável que permite fechar e guardar',
      'Design anatômico fácil de transportar no bolso ou mochila',
      'Plástico 100% reciclável'
    ]
  },
  {
    id: 'garrafa-310ml',
    name: 'Água Mineral 310ml',
    category: 'descartavel-pequeno',
    volume: '310 ml',
    type: 'still',
    packaging: 'Garrafa PET cristalina compacta',
    description: 'Equilíbrio exato entre volume e praticidade. Excelente apresentação estética para recepção corporativa.',
    targetFit: 'Reuniões executivas, secretarias municipais e balcões de financiamento bancário.',
    features: [
      'Formato sofisticado e moderno',
      'Leve e econômica',
      'Ideal para consumo único individual'
    ]
  },
  {
    id: 'garrafa-330ml',
    name: 'Água Mineral 330ml',
    category: 'descartavel-pequeno',
    volume: '330 ml',
    type: 'still',
    packaging: 'Garrafa PET premium com tampa com lacre',
    description: 'Tamanho clássico do setor de hospitalidade e eventos corporativos. Hidratação sob medida com pureza mineral certificada.',
    targetFit: 'Gabinete de órgãos públicos, treinamentos corporativos e mesas de negócios.',
    features: [
      'Volume tradicional de apresentação',
      'Água límpida e equilibrada em sais minerais',
      'Fardos plásticos termoencolhidos reforçados'
    ]
  },
  {
    id: 'garrafa-500ml-sem-gas',
    name: 'Água Mineral 500ml Sem Gás',
    category: 'descartavel-medio',
    volume: '500 ml',
    type: 'still',
    packaging: 'Garrafa PET cristal em fardo com 12 unidades',
    description: 'O produto descartável mais vendido no mercado brasileiro. Praticidade absoluta para colaboradores em deslocamento ou postos de trabalho.',
    targetFit: 'Engenheiros fiscais, operadores de campo, técnicos e equipes em trânsito.',
    features: [
      'Fardo de 12 unidades prático para estocar',
      'Design texturizado com pegada firme',
      'pH equilibrado e baixa taxa de sódio'
    ]
  },
  {
    id: 'garrafa-500ml-com-gas',
    name: 'Água Mineral 500ml Com Gás',
    category: 'descartavel-medio',
    volume: '500 ml',
    type: 'sparkling',
    packaging: 'Garrafa PET reforçada para gaseificação',
    description: 'Gaseificação natural e equilibrada com borbulhas finas e refrescância duradoura. Perfeita para eventos e salas de diretoria.',
    targetFit: 'Copas de diretorias, eventos solenes e salas de reunião de parceiros bancários.',
    features: [
      'Gaseificação estável e refrescante',
      'Sensação crocante ao paladar sem agressividade',
      'Fardo resistente para transporte seguro'
    ]
  },
  {
    id: 'garrafa-15l-sem-gas',
    name: 'Água Mineral 1,5 Litro Sem Gás',
    category: 'descartavel-grande',
    volume: '1,5 Litro',
    type: 'still',
    packaging: 'Garrafa PET 1,5L em fardo com 6 unidades',
    description: 'Excelente custo-benefício para equipes que precisam de suprimento individual estendido ou para cozinhas e refeitórios de alojamentos.',
    targetFit: 'Refeitórios de obras, cozinhas de órgãos públicos e abastecimento de frentes de trabalho.',
    features: [
      'Rendimento prolongado de hidratação',
      'Alça ergonômica ou gargalo reforçado',
      'Economia substancial no valor por litro'
    ]
  },
  {
    id: 'garrafa-15l-com-gas',
    name: 'Água Mineral 1,5 Litro Com Gás',
    category: 'descartavel-grande',
    volume: '1,5 Litro',
    type: 'sparkling',
    packaging: 'Garrafa PET rígida especial para pressão',
    description: 'Versão tamanho família gaseificada para refeições corporativas, eventos comemorativos e abastecimento de áreas de convivência.',
    targetFit: 'Confraternizações, coffee breaks em órgãos públicos e reuniões estendidas.',
    features: [
      'Mantém o gás por horas após a abertura',
      'Fardo compacto com 6 unidades',
      'Máxima refrescância para grandes equipes'
    ]
  }
];
