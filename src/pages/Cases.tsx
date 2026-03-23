import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, TrendingUp, Users, Target, BarChart2 } from 'lucide-react';
import { SEO } from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

const cases = [
  {
    id: 'ckamura',
    name: 'C.Kamura',
    url: 'https://www.ckamura.com.br/',
    logo: 'CK',
    industry: 'Moda & Acessórios',
    description: 'Marca consolidada no segmento de moda feminina, com forte presença em marketplaces e e-commerce próprio.',
    challenge: 'Expandir a operação para múltiplos marketplaces mantendo a consistência da marca e otimizando processos operacionais.',
    solution: 'Implementação de gestão completa de marketplaces (Mercado Livre, Shopee, Amazon) com foco em saúde da conta, precificação estratégica e gestão de anúncios.',
    results: [
      { metric: '+145%', label: 'Crescimento GMV' },
      { metric: '-32%', label: 'Redução de Custos' },
      { metric: '98.5%', label: 'Satisfação do Cliente' },
    ],
    testimonial: {
      text: 'A YAV Digital transformou nossa operação. Em poucos meses conseguimos escalar nossa presença nos marketplaces com eficiência e profissionalismo.',
      author: 'Diretoria C.Kamura',
      role: 'E-commerce Director'
    },
    platforms: ['Mercado Livre', 'Shopee', 'Amazon', 'Shopify'],
    delay: 0.08
  },
  {
    id: 'arantz',
    name: 'Arantz',
    url: 'https://www.arantz.com.br/',
    logo: 'AR',
    industry: 'Esportes & Outdoor',
    description: 'Marca especializada em equipamentos e vestuário para esportes ao ar livre e aventuras.',
    challenge: 'Estruturar operação omnichannel integrando e-commerce próprio com marketplaces, garantindo experiência consistente ao cliente.',
    solution: 'Gestão integrada de e-commerce (Shopify) e marketplaces, com implementação de CRO, SEO técnico e gestão de tráfego pago nos canais.',
    results: [
      { metric: '+210%', label: 'Receita Online' },
      { metric: '+87%', label: 'Tráfego Orgânico' },
      { metric: '3.2x', label: 'ROI em Ads' },
    ],
    testimonial: {
      text: 'Parceria estratégica que nos permitiu focar no produto enquanto a YAV cuidava de toda a operação digital com excelência.',
      author: 'Fundador Arantz',
      role: 'CEO & Founder'
    },
    platforms: ['Shopify', 'Mercado Livre', 'Amazon', 'Magalu'],
    delay: 0.16
  },
  {
    id: 'bayard',
    name: 'Bayard Esportes',
    url: 'https://www.bayardesportes.com.br/',
    logo: 'BY',
    industry: 'Artigos Esportivos',
    description: 'Referência em artigos esportivos com ampla variedade de produtos para diferentes modalidades.',
    challenge: 'Modernizar a operação de e-commerce e expandir para novos canais de venda digitais de forma escalável.',
    solution: 'Migração de plataforma, implantação de marketplace hub e gestão recorrente de múltiplos canais com reporte mensal de performance.',
    results: [
      { metric: '+178%', label: 'Conversão E-commerce' },
      { metric: '+5', label: 'Novos Canais' },
      { metric: '-45%', label: 'Tempo de Processamento' },
    ],
    testimonial: {
      text: 'A expertise da YAV em marketplaces foi fundamental para nossa expansão. Hoje operamos em todos os principais canais com tranquilidade.',
      author: 'Gerente Comercial Bayard',
      role: 'Commercial Manager'
    },
    platforms: ['VTEX', 'Mercado Livre', 'Shopee', 'Amazon', 'TikTok Shop'],
    delay: 0.24
  },
];

export function Cases() {
  const caseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Casos de Sucesso - YAV Digital",
    "description": "Conheça os resultados de marcas que transformaram suas operações de e-commerce e marketplaces com a YAV Digital.",
    "numberOfItems": cases.length,
    "itemListElement": cases.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Organization",
        "name": c.name,
        "url": c.url,
        "description": c.description
      }
    }))
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
    >
      <SEO 
        title="Casos de Sucesso | YAV Digital"
        description="Descubra como marcas como C.Kamura, Arantz e Bayard Esportes transformaram suas operações de e-commerce e marketplaces com a YAV Digital. Resultados reais, métricas concretas."
        keywords="casos de sucesso, cases, resultados, e-commerce, marketplace, C.Kamura, Arantz, Bayard, transformação digital"
        schema={caseSchema}
      />

      {/* Hero Section */}
      <section className="min-h-[60vh] pt-[120px] pb-20 px-5 md:px-[52px] bg-[#0C0B16] relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[80px] -top-[150px] -right-[100px] pointer-events-none" />
        <div className="absolute w-[400px] h-[400px] bg-[#9B5BFF]/10 rounded-full blur-[60px] -bottom-[80px] -left-[60px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-white/85 text-[13px] font-medium px-3.5 py-1.5 rounded-xl mb-5">
              <TrendingUp className="w-3.5 h-3.5" />
              Casos de Sucesso
            </div>
            <h1 className="text-[clamp(42px,5.5vw,72px)] font-black leading-[1.02] tracking-[-2.5px] text-white mb-6">
              Resultados que<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B5BFF] to-[#C084FC]">
                falam por si
              </span>
            </h1>
            <p className="text-lg text-white/75 font-light leading-[1.8] max-w-[680px] mx-auto">
              Conheça histórias reais de marcas que transformaram suas operações digitais com a YAV Digital. 
              Métricas concretas, desafios superados e parcerias de longo prazo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 px-5 md:px-[52px] bg-primary border-y border-primary-dark">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '50+', label: 'Clientes Atendidos' },
            { value: 'R$ 100Mi+', label: 'GMV Gerenciado' },
            { value: '10+', label: 'Marketplaces' },
            { value: '98%', label: 'Satisfação' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }
              }}
            >
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/70 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-[80px] md:py-[120px] px-5 md:px-[52px] bg-background">
        <div className="max-w-[1200px] mx-auto">
          {cases.map((c, index) => (
            <motion.div
              key={c.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className={`mb-24 last:mb-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} flex flex-col md:flex-row gap-10 md:gap-16 items-center`}
            >
              {/* Case Preview Card */}
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-3xl overflow-hidden border border-border shadow-lg hover:shadow-[0_24px_60px_rgba(110,41,246,0.12)] transition-shadow duration-300">
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent relative overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-5xl font-black text-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        {c.logo}
                      </div>
                    </div>
                    <div className="absolute top-5 right-5">
                      <a 
                        href={c.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold text-primary hover:bg-white transition-colors"
                      >
                        Visitar site <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {c.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-text-primary mb-3">{c.name}</h3>
                    <p className="text-text-secondary leading-relaxed mb-6">{c.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {c.platforms.map((p) => (
                        <span key={p} className="text-xs font-medium px-3 py-1 rounded-lg bg-border text-text-muted">
                          {p}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={c.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                    >
                      Conhecer projeto <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Case Details */}
              <div className="w-full md:w-1/2">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Desafio
                    </h4>
                    <p className="text-text-secondary leading-relaxed">{c.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Solução
                    </h4>
                    <p className="text-text-secondary leading-relaxed">{c.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                      <BarChart2 className="w-5 h-5 text-primary" />
                      Resultados
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {c.results.map((r, i) => (
                        <div key={i} className="bg-white rounded-xl p-4 border border-border text-center">
                          <div className="text-2xl font-black text-primary mb-1">{r.metric}</div>
                          <div className="text-xs text-text-muted font-medium">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-lg font-bold text-primary">{c.testimonial.author.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-text-secondary italic leading-relaxed mb-3">"{c.testimonial.text}"</p>
                        <div>
                          <div className="text-sm font-bold text-text-primary">{c.testimonial.author}</div>
                          <div className="text-xs text-text-muted">{c.testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[80px] md:py-[100px] px-5 md:px-[52px] bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-white mb-5">
              Pronto para escrever<br />seu caso de sucesso?
            </h2>
            <p className="text-lg font-light text-white/75 leading-[1.8] mb-8 max-w-[600px] mx-auto">
              Agende um diagnóstico gratuito e descubra como podemos transformar sua operação de e-commerce e marketplaces.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contato" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-[14px] rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(110,41,246,0.32)]">
                Agendar diagnóstico gratuito
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/servicos" className="inline-flex items-center gap-2 bg-transparent text-white border-[1.5px] border-white/50 px-8 py-[14px] rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-white/10 hover:border-white hover:-translate-y-0.5">
                Ver serviços
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
