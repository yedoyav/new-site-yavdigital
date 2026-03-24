export interface Case {
  id: string;
  client: string;
  title: string;
  subtitle: string;
  industry: string;
  scope: string;
  introduction: string;
  challenge: string;
  strategy: string;
  results: string[];
  conclusion: string;
  image: string;
  category: string;
  imageFit?: 'cover' | 'contain';
  stats: {
    label: string;
    value: string;
  }[];
  tags: string[];
}

export const casesData: Case[] = [
  {
    id: 'arantz',
    client: 'Arantz',
    title: 'Arquitetura digital acelera lançamento do e-commerce Arantz',
    subtitle: 'Estrutura integrada de e-commerce, ERP e logística permitiu lançar a operação em menos de 60 dias.',
    industry: 'Óptico',
    scope: 'Implantação de E-commerce',
    introduction: 'A Arantz é uma marca premium de óculos de sol e grau idealizada pelo empreendedor e ator Rômulo Arantes Neto. A empresa atua no segmento de varejo de moda e óptica, com foco em qualidade de produto e experiência digital. Para viabilizar sua entrada no comércio eletrônico, a marca precisava estruturar rapidamente uma operação digital robusta, capaz de sustentar o crescimento da marca desde o primeiro momento.',
    challenge: 'O principal desafio da Arantz era lançar uma operação de e-commerce do zero em um prazo extremamente curto, sem comprometer a solidez da infraestrutura tecnológica. Antes do projeto, a empresa precisava garantir que todos os sistemas críticos da operação, vendas, logística, pagamentos e gestão financeira, funcionassem de forma integrada desde o lançamento. Sem essa estrutura, o risco seria criar uma operação dependente de processos manuais e com baixa capacidade de escala.',
    strategy: 'A YAV Digital estruturou o ecossistema digital da Arantz combinando consultoria tecnológica e implementação operacional. O projeto envolveu a definição da stack tecnológica ideal, com plataforma de e-commerce, gateway logístico e ERP integrados, garantindo uma operação conectada desde o início. Também foi realizada a integração entre vendas, logística e gestão financeira para automatizar processos e reduzir tarefas manuais.',
    results: [
      'Lançamento do e-commerce em menos de 60 dias;',
      '100% de integração entre ERP, logística e pagamentos;',
      'Operação digital preparada para expansão em marketplaces;',
      'Estrutura tecnológica capaz de sustentar uma operação enxuta e escalável.'
    ],
    conclusion: 'O projeto demonstrou como uma arquitetura digital integrada pode reduzir o tempo de lançamento de um e-commerce sem comprometer escalabilidade ou eficiência operacional. Com uma base tecnológica sólida e sistemas totalmente conectados, a Arantz iniciou sua operação online preparada para crescer de forma estruturada e expandir sua presença digital.',
    image: 'https://arantz.vtexassets.com/assets/vtex.file-manager-graphql/images/f8dbe747-5765-4b51-899a-f7eae097b37e___6c6d7790dea66d1939cf654913f5da25.jpg',
    category: 'Óptico',
    imageFit: 'contain',
    stats: [
      { label: 'Time-to-market', value: '< 60 dias' },
      { label: 'Integração', value: '100%' },
      { label: 'Escalabilidade', value: 'Pronta' }
    ],
    tags: ['E-commerce', 'ERP', 'Logística']
  },
  {
    id: 'ckamura',
    client: 'C.Kamura',
    title: 'Experiência de luxo e curadoria técnica no e-commerce C.Kamura',
    subtitle: 'Digitalização da expertise de um dos maiores beauty artists do Brasil para o varejo online.',
    industry: 'Beleza & Cosméticos',
    scope: 'Gestão de E-commerce & Performance',
    introduction: 'C.Kamura é uma das marcas mais prestigiadas do Brasil no segmento de beleza, liderada pelo renomado beauty artist Celso Kamura. Com salões de luxo e uma linha de produtos profissionais, a marca buscou a YAV para profissionalizar sua presença no varejo digital e expandir seu alcance para além dos salões físicos.',
    challenge: 'O desafio central era transpor a experiência de luxo e o conhecimento técnico dos salões para o ambiente digital. A marca precisava garantir que o consumidor final tivesse acesso aos produtos com a mesma curadoria e orientação técnica encontrada nos salões, superando a barreira da compra de produtos profissionais sem auxílio presencial.',
    strategy: 'Implementamos uma estratégia de SEO focada em termos técnicos de beleza e "hair care" profissional. Revisamos toda a jornada de compra, criando filtros inteligentes por tipo de cabelo e necessidade, simulando a consultoria de um especialista. Além disso, assumimos a gestão ativa de campanhas de performance com foco em público de alto padrão.',
    results: [
      'Aumento expressivo na taxa de conversão da loja virtual;',
      'Melhoria no posicionamento orgânico para termos estratégicos de beleza;',
      'Expansão da base de clientes recorrentes através de réguas de CRM;',
      'Consolidação da marca como referência em produtos profissionais online.'
    ],
    conclusion: 'A digitalização da expertise de Celso Kamura permitiu que a marca escalasse suas vendas mantendo o posicionamento premium e a autoridade técnica que a consagrou nos salões de beleza.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200',
    category: 'Beleza',
    stats: [
      { label: 'Conversão', value: '+45%' },
      { label: 'SEO', value: 'Top 3' },
      { label: 'Recompra', value: '+30%' }
    ],
    tags: ['Beleza', 'SEO', 'UX/UI']
  },
  {
    id: 'bayard',
    client: 'Bayard Esportes',
    title: 'Escala e eficiência em Marketplaces para a Bayard Esportes',
    subtitle: 'Gestão de Ads e operação em múltiplos canais para uma das maiores redes esportivas do país.',
    industry: 'Esportes',
    scope: 'Gestão de Marketplaces & Ads',
    introduction: 'A Bayard Esportes é uma rede tradicional de artigos esportivos premium with mais de 65 anos de história. Com a necessidade de escalar vendas sem depender exclusivamente do fluxo das lojas físicas, a marca focou na expansão agressiva e estruturada via marketplaces.',
    challenge: 'Gerenciar um catálogo vasto e dinâmico em múltiplos marketplaces (Mercado Livre, Amazon, Centauro) mantendo a saúde das contas e a rentabilidade. O desafio era crescer o volume de vendas sem que o custo de aquisição (Ads) corroesse as margens de lucro.',
    strategy: 'Estruturamos um hub de integração robusto para centralizar estoque e pedidos. Implementamos uma gestão de Ads focada em ROAS, utilizando algoritmos de lances inteligentes e negativação de termos ineficientes. Também atuamos na gestão de reputação para garantir as melhores medalhas em cada canal.',
    results: [
      'Crescimento exponencial nas vendas via marketplaces;',
      'Redução significativa do ACOS em campanhas de Ads;',
      'Conquista de selos de excelência (Mercado Líder Platinum);',
      'Operação logística otimizada para os padrões de cada marketplace.'
    ],
    conclusion: 'A estratégia de marketplaces transformou a Bayard em um player dominante no digital, provando que marcas tradicionais podem liderar novos canais com a gestão correta de dados e mídia.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1200',
    category: 'Esportes',
    stats: [
      { label: 'ROAS', value: '8x' },
      { label: 'Marketplaces', value: '+120%' },
      { label: 'ACOS', value: '-15%' }
    ],
    tags: ['Marketplace', 'Ads', 'Esportes']
  },
  {
    id: 'yogini',
    client: 'Yogini',
    title: 'Equilíbrio e performance: a jornada digital da Yogini',
    subtitle: 'Otimização de conversão e retenção para a primeira marca brasileira inspirada no yoga.',
    industry: 'Moda & Bem-estar',
    scope: 'Gestão de E-commerce & CRM',
    introduction: 'Yogini é a primeira marca brasileira de moda inspirada no yoga, focada em conforto, sofisticação e bem-estar. A marca buscava equilibrar sua essência zen e propósitos de sustentabilidade com uma operação digital eficiente e escalável.',
    challenge: 'O principal desafio era aumentar o Lifetime Value (LTV) dos clientes e reduzir o custo de aquisição (CAC). A marca precisava de uma operação mais inteligente, que não apenas atraísse novos clientes, mas que fidelizasse a base atual através de uma experiência de compra impecável.',
    strategy: 'Implementamos réguas de e-mail marketing automatizadas baseadas no comportamento de compra. Realizamos auditorias de CRO (Conversion Rate Optimization) para remover fricções no checkout mobile e integramos o estoque para permitir uma experiência omnichannel real.',
    results: [
      'Aumento significativo na taxa de recompra da base de clientes;',
      'Melhoria na performance de conversão em dispositivos móveis;',
      'Crescimento sustentável da receita digital mês a mês;',
      'Redução do abandono de carrinho através de automações inteligentes.'
    ],
    conclusion: 'Ao unir a essência da marca com inteligência de dados e CRM, a Yogini consolidou sua presença digital como um canal de vendas altamente rentável e fiel aos seus valores.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200',
    category: 'Moda',
    stats: [
      { label: 'LTV', value: '+25%' },
      { label: 'Mobile Conv', value: '+40%' },
      { label: 'Recompra', value: '+35%' }
    ],
    tags: ['Moda', 'CRM', 'CRO']
  },
  {
    id: 'algar-telecom',
    client: 'Algar Telecom',
    title: 'Digitalização e UX na contratação de serviços Algar Telecom',
    subtitle: 'Simplificação da jornada de compra e aumento de performance em vendas digitais.',
    industry: 'Telecomunicações',
    scope: 'Consultoria de Vendas Digitais',
    introduction: 'A Algar Telecom é um dos principais players de telecomunicações do Brasil, atendendo tanto o mercado B2B quanto B2C. O desafio era digitalizar a venda de serviços complexos (internet, telefonia, TV) de forma tão fluída quanto um e-commerce de produtos físicos.',
    challenge: 'A jornada de contratação de planos de telecomunicações costuma ser complexa e cheia de fricções. O desafio era reduzir o abandono no fluxo de vendas online e aumentar a taxa de conclusão de pedidos, garantindo uma experiência intuitiva para o usuário.',
    strategy: 'Realizamos uma consultoria profunda de UX/UI focada no funil de vendas. Implementamos ferramentas de análise comportamental (heatmaps) para identificar gargalos e otimizamos landing pages com foco em conversão direta, além de ajustar a comunicação para ser mais clara e objetiva.',
    results: [
      'Redução expressiva na taxa de abandono do carrinho de contratação;',
      'Aumento na venda de serviços adicionais (upsell) durante a jornada;',
      'Melhoria na percepção de facilidade de uso pelos clientes;',
      'Crescimento na receita gerada diretamente pelos canais digitais.'
    ],
    conclusion: 'A aplicação de princípios de e-commerce no setor de serviços permitiu à Algar Telecom modernizar sua porta de entrada digital e converter mais clientes com menor custo operacional.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    category: 'Telecom',
    stats: [
      { label: 'Abandono', value: '-20%' },
      { label: 'Vendas', value: '+15%' },
      { label: 'UX Score', value: '+30%' }
    ],
    tags: ['Telecom', 'UX/UI', 'Consultoria']
  },
  {
    id: 'chocolat-du-jour',
    client: 'Chocolat du Jour',
    title: 'Logística de luxo e performance sazonal na Chocolat du Jour',
    subtitle: 'Gestão de e-commerce e canais de Last Mile para uma marca de chocolates premium.',
    industry: 'Alimentos Premium',
    scope: 'Gestão de E-commerce & Last Mile',
    introduction: 'Chocolat du Jour é sinônimo de chocolate de luxo no Brasil, com diversos prêmios internacionais. A marca precisava de uma operação digital e logística que fizesse jus à delicadeza e exclusividade de seus produtos, especialmente em datas de pico.',
    challenge: 'O maior desafio era garantir a entrega perfeita de produtos extremamente sensíveis ao calor e impacto em prazos curtíssimos. Além disso, a marca precisava escalar sua operação digital para suportar o volume massivo de vendas em datas como Páscoa e Natal.',
    strategy: 'Assumimos a gestão da operação em aplicativos de entrega rápida (Rappi/iFood) integrada ao estoque central. Otimizamos a loja virtual para alta performance em períodos sazonais e implementamos estratégias de SEO local para potencializar as vendas por região.',
    results: [
      'Recorde histórico de vendas em datas sazonais (Páscoa e Natal);',
      'Expansão bem-sucedida do raio de entrega rápida (Last Mile);',
      'Manutenção de altos índices de satisfação do cliente (NPS);',
      'Integração fluída entre canais de conveniência e e-commerce oficial.'
    ],
    conclusion: 'Transformamos a logística sensível em um diferencial competitivo, garantindo que a experiência de luxo da Chocolat du Jour chegasse intacta à casa do cliente em tempo recorde.',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=1200',
    category: 'Alimentos',
    stats: [
      { label: 'Sazonal', value: '+60%' },
      { label: 'Last Mile', value: '100%' },
      { label: 'NPS', value: '95' }
    ],
    tags: ['Luxo', 'Logística', 'E-commerce']
  },
  {
    id: 'amobeleza',
    client: 'Amo Beleza',
    title: 'Dominância em Marketplaces e escala para Amo Beleza',
    subtitle: 'Gestão de performance e Ads para um dos maiores e-commerces de cosméticos do país.',
    industry: 'Beleza & Cosméticos',
    scope: 'Gestão de Marketplace & Performance',
    introduction: 'Amo Beleza é um e-commerce multimarcas de cosméticos que atua em um dos nichos mais competitivos do digital. Para escalar, a marca precisava de uma presença dominante e eficiente nos grandes marketplaces nacionais.',
    challenge: 'Competir por visibilidade e "buy box" em marketplaces saturados, mantendo margens de lucro saudáveis. O desafio era gerenciar milhares de SKUs com preços dinâmicos e campanhas de Ads de alta intensidade.',
    strategy: 'Implementamos uma gestão de Ads agressiva em Mercado Livre e Amazon, focada em produtos de curva A. Utilizamos ferramentas de precificação dinâmica para reagir ao mercado em tempo real e otimizamos todo o catálogo (títulos, fotos e atributos) para máxima conversão.',
    results: [
      'Consolidação como Platinum Seller no Mercado Livre;',
      'Aumento significativo no share de mercado dentro das plataformas;',
      'Eficiência recorde em campanhas de Ads (ROAS de dois dígitos);',
      'Escala operacional para processar milhares de pedidos diários.'
    ],
    conclusion: 'A inteligência aplicada na gestão de marketplaces permitiu que a Amo Beleza escalasse seu faturamento de forma acelerada, tornando-se referência de performance no segmento de beleza.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200',
    category: 'Beleza',
    stats: [
      { label: 'Share', value: '+20%' },
      { label: 'ROAS', value: '10x' },
      { label: 'Pedidos', value: '+80%' }
    ],
    tags: ['Marketplace', 'Ads', 'Beleza']
  },
  {
    id: 'ricardoeletro',
    client: 'Ricardo Eletro',
    title: 'Reestruturação e modelo Marketplace First na Ricardo Eletro',
    subtitle: 'Consultoria estratégica para a retomada digital de uma gigante do varejo.',
    industry: 'Varejo & Eletro',
    scope: 'Reestruturação de Canal Digital',
    introduction: 'A Ricardo Eletro, uma das marcas mais icônicas do varejo brasileiro, passou por um profundo processo de reestruturação focado em um modelo de negócio mais leve, digital e focado em marketplace.',
    challenge: 'O desafio era retomar a relevância da marca no ambiente online através de um modelo "Marketplace First", atraindo novos sellers parceiros e recuperando a confiança do consumidor em uma nova infraestrutura tecnológica.',
    strategy: 'Atuamos na consultoria estratégica para o novo modelo de negócio, definindo critérios de curadoria de sellers e implementando processos de qualidade operacional. Ajudamos a desenhar a nova jornada do cliente focada em transparência e eficiência.',
    results: [
      'Lançamento bem-sucedido do novo portal de e-commerce;',
      'Atração de centenas de sellers parceiros em tempo recorde;',
      'Retomada da operação de vendas em escala nacional;',
      'Implementação de modelo de negócio asset-light e escalável.'
    ],
    conclusion: 'A transição para um modelo de marketplace permitiu à Ricardo Eletro ressurgir no digital com uma estrutura moderna, eficiente e preparada para os novos desafios do varejo.',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1200',
    category: 'Varejo',
    stats: [
      { label: 'Sellers', value: '+300' },
      { label: 'Alcance', value: 'Nacional' },
      { label: 'Modelo', value: 'Asset-light' }
    ],
    tags: ['Varejo', 'Marketplace', 'Consultoria']
  },
  {
    id: 'conecta-ag',
    client: 'Conecta.ag',
    title: 'Transformação digital no campo com a Conecta.ag',
    subtitle: 'Implantação de plataforma e-commerce B2B para o ecossistema do agronegócio.',
    industry: 'Agronegócio & Tecnologia',
    scope: 'Implantação de Plataforma B2B',
    introduction: 'Conecta.ag é uma plataforma inovadora que conecta produtores rurais a fornecedores de insumos e serviços, levando a transformação digital para um dos setores mais vitais da economia brasileira.',
    challenge: 'Criar uma plataforma B2B complexa que atendesse às particularidades do agronegócio, como fluxos de aprovação multinível, condições de pagamento específicas (safra/crédito) e logística para áreas rurais.',
    strategy: 'Implementamos uma plataforma e-commerce B2B customizada, com integrações profundas com sistemas de crédito agrícola. Desenvolvemos uma interface focada na usabilidade do produtor rural, simplificando processos que antes eram 100% offline.',
    results: [
      'Digitalização de transações complexas do agronegócio;',
      'Maior transparência e agilidade na cadeia de suprimentos;',
      'Alta taxa de retenção e recorrência de produtores na plataforma;',
      'Eficiência operacional na originação de novos negócios.'
    ],
    conclusion: 'A Conecta.ag provou que a tecnologia de e-commerce, quando adaptada às necessidades reais do setor, pode revolucionar a forma como o agronegócio faz negócios no Brasil.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1200',
    category: 'Agro',
    stats: [
      { label: 'Transações', value: '+50%' },
      { label: 'Retenção', value: '90%' },
      { label: 'Eficiência', value: '+35%' }
    ],
    tags: ['B2B', 'Agro', 'Implantação']
  }
];
