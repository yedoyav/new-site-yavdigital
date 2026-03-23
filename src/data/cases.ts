export interface CaseData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  scope: string;
  introduction: string;
  challenge: string;
  strategy: string;
  results: string[];
  conclusion: string;
  featured: boolean;
  image?: string;
  // English version
  titleEn: string;
  subtitleEn: string;
  industryEn: string;
  scopeEn: string;
  introductionEn: string;
  challengeEn: string;
  strategyEn: string;
  resultsEn: string[];
  conclusionEn: string;
}

export const casesData: CaseData[] = [
  {
    id: 'arantz',
    slug: 'arantz',
    title: 'Arquitetura digital acelera lançamento do e-commerce Arantz',
    subtitle: 'Estrutura integrada de e-commerce, ERP e logística permitiu lançar a operação em menos de 60 dias.',
    industry: 'Óptico',
    scope: 'Implantação de tecnologias',
    introduction: `A Arantz é uma marca premium de óculos de sol e grau idealizada pelo empreendedor e ator Rômulo Arantes Neto. A empresa atua no segmento de varejo de moda e óptica, com foco em qualidade de produto e experiência digital.

Para viabilizar sua entrada no comércio eletrônico, a marca precisava estruturar rapidamente uma operação digital robusta, capaz de sustentar o crescimento da marca desde o primeiro momento.`,
    challenge: `O principal desafio da Arantz era lançar uma operação de e-commerce do zero em um prazo extremamente curto, sem comprometer a solidez da infraestrutura tecnológica.

Antes do projeto, a empresa precisava garantir que todos os sistemas críticos da operação, vendas, logística, pagamentos e gestão financeira, funcionassem de forma integrada desde o lançamento.

Sem essa estrutura, o risco seria criar uma operação dependente de processos manuais e com baixa capacidade de escala.`,
    strategy: `A YAV Digital estruturou o ecossistema digital da Arantz combinando consultoria tecnológica e implementação operacional.

O projeto envolveu a definição da stack tecnológica ideal, com plataforma de e-commerce, gateway logístico e ERP integrados, garantindo uma operação conectada desde o início.

Também foi realizada a integração entre vendas, logística e gestão financeira para automatizar processos e reduzir tarefas manuais.`,
    results: [
      'Lançamento do e-commerce em menos de 60 dias',
      '100% de integração entre ERP, logística e pagamentos',
      'Operação digital preparada para expansão em marketplaces',
      'Estrutura tecnológica capaz de sustentar uma operação enxuta e escalável'
    ],
    conclusion: `O projeto demonstrou como uma arquitetura digital integrada pode reduzir o tempo de lançamento de um e-commerce sem comprometer escalabilidade ou eficiência operacional.

Com uma base tecnológica sólida e sistemas totalmente conectados, a Arantz iniciou sua operação online preparada para crescer de forma estruturada e expandir sua presença digital.`,
    featured: true,
    image: 'https://images.unsplash.com/photo-1570222094114-28a9d88a27e6?w=800&q=80',
    // English version
    titleEn: 'Digital Architecture Accelerates Arantz E-commerce Launch',
    subtitleEn: 'An integrated e-commerce, ERP, and logistics structure enabled the operation to go live in under 60 days.',
    industryEn: 'Optical',
    scopeEn: 'Technology Implementation',
    introductionEn: `Arantz is a premium eyewear brand—both sunglasses and prescription—founded by entrepreneur and actor Rômulo Arantes Neto. The company operates at the intersection of fashion retail and optical products, with a strong focus on product quality and digital experience.

To support its entry into e-commerce, the brand needed to quickly build a robust digital operation capable of sustaining growth from day one.`,
    challengeEn: `Arantz's main challenge was launching a fully operational e-commerce business from scratch within a very short timeframe—without compromising the strength of its technology infrastructure.

Before going live, the company needed to ensure that all critical systems—sales, logistics, payments, and financial management—were fully integrated.

Without this foundation, the risk would be a fragmented operation, heavily dependent on manual processes and lacking scalability.`,
    strategyEn: `YAV Digital structured Arantz's digital ecosystem by combining technology consulting with hands-on implementation.

The project included defining the ideal tech stack, integrating the e-commerce platform, logistics gateway, and ERP to ensure a fully connected operation from the start.

Sales, logistics, and financial management systems were also integrated to automate workflows and reduce manual tasks.`,
    resultsEn: [
      'E-commerce launch completed in under 60 days',
      '100% integration across ERP, logistics, and payments',
      'Digital operation ready for marketplace expansion',
      'Scalable technology foundation supporting a lean operation'
    ],
    conclusionEn: `This project demonstrates how an integrated digital architecture can significantly reduce time-to-market without compromising scalability or operational efficiency.

With a solid technology foundation and fully connected systems, Arantz launched its online operation ready to scale in a structured and sustainable way.`
  }
];
