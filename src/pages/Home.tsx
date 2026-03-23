import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, X, ArrowUpRight, Target, BarChart2, Link as LinkIcon, Zap, Shield, Rocket, Hexagon, Triangle, Circle, Box, Cloud, Feather, TrendingUp } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';
import { blogPosts } from '../data/blog';
import { casesData } from '../data/cases';
import { SEO } from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "YAV Digital",
    "alternateName": "YAV",
    "url": "https://yavdigital.com.br",
    "logo": "https://yavdigital.com.br/logo.png",
    "description": "Especialistas em operação de e-commerce e marketplaces. Implantação, gestão e inteligência para VTEX, Shopify, Mercado Livre e Amazon.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressLocality": "São Paulo",
      "addressRegion": "SP"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-99999-9999",
      "contactType": "sales",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://www.instagram.com/yavdigital",
      "https://www.linkedin.com/company/yavdigital"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de E-commerce e Marketplace",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Implantação de E-commerce",
          "description": "Projeto pontual do planejamento ao go-live em plataformas como VTEX, Shopify e Tray."
        },
        {
          "@type": "Service",
          "name": "Gestão de Marketplace",
          "description": "Operação completa em canais como Mercado Livre, Shopee e Amazon."
        },
        {
          "@type": "Service",
          "name": "Gestão de E-commerce",
          "description": "CRO, SEO, e-mail marketing e evolução contínua da loja virtual."
        },
        {
          "@type": "Service",
          "name": "Gestão de ADS em Marketplaces",
          "description": "Estratégia e otimização de anúncios em Mercado Livre Ads, Amazon Ads e Shopee Ads."
        },
        {
          "@type": "Service",
          "name": "Cadastro de Produtos",
          "description": "Cadastro em massa otimizado para SEO e conversão em múltiplos canais."
        }
      ]
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
    >
      <SEO 
        schema={homeSchema}
      />
      {/* Hero Section */}
      <section className="min-h-screen pt-[100px] pb-20 px-5 md:px-[52px] bg-[#0C0B16] grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative overflow-hidden">
        <div className="absolute -bottom-10 -left-5 text-[clamp(100px,22vw,340px)] font-black text-primary/5 leading-[0.85] tracking-[-10px] pointer-events-none select-none animate-[drift_16s_ease-in-out_infinite_alternate]">
          YAV
        </div>
        
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[60px] -top-[120px] -right-[80px] pointer-events-none" />
        <div className="absolute w-[320px] h-[320px] bg-[#9B5BFF]/10 rounded-full blur-[60px] -bottom-[60px] -left-[40px] pointer-events-none" />
        <div className="absolute w-[220px] h-[220px] bg-primary/10 rounded-full blur-[60px] top-[40%] left-[32%] pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-white/85 text-[13px] font-medium px-3.5 py-1.5 rounded-xl mb-5">
            <span className="w-1.5 h-1.5 bg-success rounded-full animate-[blink_2.2s_ease-in-out_infinite]" />
            Especialistas em E-commerce & Marketplaces
          </div>
          <h1 className="text-[clamp(46px,6.5vw,84px)] font-black leading-[0.98] tracking-[-3px] text-white mb-5">
            Sua operação<br />digital com<br />inteligência<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B5BFF] to-[#C084FC]">
              e eficiência.
            </span>
          </h1>
          <p className="text-[17px] text-white/75 font-light leading-[1.82] max-w-[460px] mb-9">
            Gestão completa de e-commerces e marketplaces — da estratégia à execução. Especialistas por canal, reporte mensal e operação hands-on que gera economia e aprendizado contínuo.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/contato" className="inline-flex items-center gap-2 bg-primary text-white px-7 py-[13px] rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(110,41,246,0.32)]">
              Agendar diagnóstico gratuito
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link to="/servicos" className="inline-flex items-center gap-2 bg-transparent text-white border-[1.5px] border-white/50 px-7 py-[13px] rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-white/10 hover:border-white hover:-translate-y-0.5">
              Ver serviços
            </Link>
          </div>
        </div>

        <div className="relative z-10 bg-white/5 border border-white/10 rounded-[20px] p-5 md:p-[30px] backdrop-blur-md">
          <div className="text-[12px] font-semibold text-white/50 tracking-[0.16em] uppercase font-mono mb-4">
            Nossos serviços
          </div>
          <div className="flex flex-col gap-[7px] mb-5">
            {[
              { color: '#00D48A', name: 'Implantação de E-commerce', slug: 'implantacao-ecommerce' },
              { color: '#6E29F6', name: 'Consultoria & Gestão de Marketplace', slug: 'gestao-marketplace' },
              { color: '#9B5BFF', name: 'Consultoria & Gestão de E-commerce', slug: 'gestao-ecommerce' },
              { color: '#F59E0B', name: 'Gestão de ADS em Marketplaces', slug: 'gestao-ads' },
              { color: '#F87171', name: 'Cadastro de Produtos', slug: 'cadastro-produtos' },
            ].map((svc) => (
              <Link key={svc.name} to={`/servicos/${svc.slug}`} className="flex items-center gap-[11px] bg-white/5 border border-white/5 rounded-[10px] px-3.5 py-[11px] transition-all duration-200 hover:bg-white/10 hover:border-primary/30 hover:translate-x-1">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: svc.color }} />
                <span className="text-[13px] text-white/75 font-normal">{svc.name}</span>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/5 rounded-[10px] p-3 md:p-3.5">
              <div className="text-2xl font-black text-white leading-none mb-0.5 tracking-[-0.5px] font-mono">
                10<em className="text-[#9B5BFF] not-italic">+</em>
              </div>
              <div className="text-[12px] text-white/55 uppercase tracking-[0.1em]">Marketplaces Globais</div>
            </div>
            <div className="bg-white/5 rounded-[10px] p-3 md:p-3.5">
              <div className="text-2xl font-black text-white leading-none mb-0.5 tracking-[-0.5px] font-mono">
                6<em className="text-[#9B5BFF] not-italic">+</em>
              </div>
              <div className="text-[12px] text-white/55 uppercase tracking-[0.1em]">Plataformas de Elite</div>
            </div>
            <div className="bg-white/5 rounded-[10px] p-3 md:p-3.5">
              <div className="text-2xl font-black text-white leading-none mb-0.5 tracking-[-0.5px] font-mono">
                360<em className="text-[#9B5BFF] not-italic">°</em>
              </div>
              <div className="text-[12px] text-white/55 uppercase tracking-[0.1em]">Visão Estratégica</div>
            </div>
            <div className="bg-white/5 rounded-[10px] p-3 md:p-3.5">
              <div className="text-2xl font-black text-white leading-none mb-0.5 tracking-[-0.5px] font-mono">
                Full<em className="text-[#9B5BFF] not-italic text-lg">✓</em>
              </div>
              <div className="text-[12px] text-white/55 uppercase tracking-[0.1em]">Operação Hands-on</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-primary py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-[mq_36s_linear_infinite] hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="inline-flex items-center">
              <span className="inline-flex items-center gap-[9px] px-[22px] text-[12px] font-bold tracking-[0.12em] uppercase text-white font-mono">Mercado Livre</span><span className="text-white/20 px-1">·</span>
              <span className="inline-flex items-center gap-[9px] px-[22px] text-[12px] font-bold tracking-[0.12em] uppercase text-white/55 font-mono">Shopee</span><span className="text-white/20 px-1">·</span>
              <span className="inline-flex items-center gap-[9px] px-[22px] text-[12px] font-bold tracking-[0.12em] uppercase text-white/55 font-mono">Amazon</span><span className="text-white/20 px-1">·</span>
              <span className="inline-flex items-center gap-[9px] px-[22px] text-[12px] font-bold tracking-[0.12em] uppercase text-white/55 font-mono">Magalu</span><span className="text-white/20 px-1">·</span>
              <span className="inline-flex items-center gap-[9px] px-[22px] text-[12px] font-bold tracking-[0.12em] uppercase text-white/55 font-mono">TikTok Shop</span><span className="text-white/20 px-1">·</span>
              <span className="inline-flex items-center gap-[9px] px-[22px] text-[12px] font-bold tracking-[0.12em] uppercase text-white font-mono">Shopify</span><span className="text-white/20 px-1">·</span>
              <span className="inline-flex items-center gap-[9px] px-[22px] text-[12px] font-bold tracking-[0.12em] uppercase text-white/55 font-mono">VTEX</span><span className="text-white/20 px-1">·</span>
              <span className="inline-flex items-center gap-[9px] px-[22px] text-[12px] font-bold tracking-[0.12em] uppercase text-white/55 font-mono">Wake</span><span className="text-white/20 px-1">·</span>
              <span className="inline-flex items-center gap-[9px] px-[22px] text-[12px] font-bold tracking-[0.12em] uppercase text-white/55 font-mono">Tray</span><span className="text-white/20 px-1">·</span>
              <span className="inline-flex items-center gap-[9px] px-[22px] text-[12px] font-bold tracking-[0.12em] uppercase text-white/55 font-mono">Nuvemshop</span><span className="text-white/20 px-1">·</span>
              <span className="inline-flex items-center gap-[9px] px-[22px] text-[12px] font-bold tracking-[0.12em] uppercase text-white font-mono">Shein</span><span className="text-white/20 px-1">·</span>
              <span className="inline-flex items-center gap-[9px] px-[22px] text-[12px] font-bold tracking-[0.12em] uppercase text-white/55 font-mono">Americanas</span><span className="text-white/20 px-1">·</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tagline Section */}
      <section className="bg-background pt-10 md:pt-16 px-5 md:px-[52px] border-b border-border">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-5 md:gap-0 border-t border-border py-8 md:py-12 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="text-[clamp(64px,8vw,112px)] font-black tracking-[-4px] leading-[0.92] text-text-primary shrink-0 md:pr-10 md:border-r border-b md:border-b-0 border-border md:mr-10 pb-5 md:pb-0 mb-1 md:mb-0">
            Não somos<br />uma agência.<br />
            <em className="text-primary not-italic">Somos o seu<br />time.</em>
          </div>
          <div className="max-w-[540px]">
            <p className="text-lg font-light text-text-secondary leading-[1.8] mb-5">
              A YAV Digital opera como extensão real da sua equipe — com especialistas dedicados por canal, processos estruturados e tecnologia em cada etapa. Do planejamento estratégico ao reporte mensal, tudo integrado num único time focado em acelerar sua curva de aprendizado e gerar eficiência real.
            </p>
            <Link to="/servicos" className="inline-flex items-center gap-2 bg-primary text-white px-7 py-[13px] rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(110,41,246,0.32)]">
              Conhecer os serviços <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-[60px] md:py-[96px] px-5 md:px-[52px]">
        <motion.div 
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-4 font-mono bg-primary-light text-primary before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary">
            O que fazemos
          </div>
          <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-text-primary max-w-[520px]">
            5 serviços. Uma operação digital completa.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3.5">
          {[
            {
              num: '01 — Implantação',
              title: 'Implantação de E-commerce',
              desc: 'Do planejamento ao go-live, sem escopo aberto e sem surpresas. Criamos ou migramos sua loja com layout, integrações, produtos e analytics configurados — pronta para operar com excelência.',
              tags: ['Tray', 'Shopify', 'VTEX', 'Wake', 'Marketplace In'],
              delay: 0.08,
              slug: 'implantacao-ecommerce'
            },
            {
              num: '02 — Recorrente',
              title: 'Gestão de Marketplace',
              desc: 'Operação completa dos canais mês a mês. Cadastros, precificação, saúde da conta, ADS e reporte consolidado. Você foca no negócio — a gente assume a operação.',
              tags: ['ML', 'Shopee', 'Amazon', 'Magalu', 'TikTok Shop'],
              delay: 0.16,
              slug: 'gestao-marketplace'
            },
            {
              num: '03 — Recorrente',
              title: 'Gestão de E-commerce',
              desc: 'CRO, SEO, e-mail marketing, conteúdo e integrações. Inteligência aplicada, processos estruturados e evolução contínua da sua loja.',
              tags: ['CRO', 'SEO', 'E-mail', 'Analytics'],
              delay: 0.24,
              slug: 'gestao-ecommerce'
            },
            {
              num: '04 — Standalone',
              title: 'Gestão de ADS',
              desc: 'Gestão de mídia com foco em eficiência. Estratégia, execução e otimização contínua para gerar inteligência e economia nos seus investimentos.',
              tags: ['ML Ads', 'Amazon Ads', 'Shopee Ads'],
              delay: 0.32,
              slug: 'gestao-ads'
            },
            {
              num: '05 — Standalone',
              title: 'Cadastro de Produtos',
              desc: 'Cadastros completos com automação e expertise. Títulos otimizados, descrições persuasivas e categorização correta para SEO e conversão.',
              tags: ['Bling', 'Tiny', 'SEO', 'Copywriting'],
              delay: 0.40,
              slug: 'cadastro-produtos'
            }
          ].map((svc, i) => (
            <motion.div
              key={i}
              className={i < 3 ? "md:col-span-1 lg:col-span-2" : i === 4 ? "md:col-span-2 lg:col-span-3" : "md:col-span-1 lg:col-span-3"}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: svc.delay, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <Link to={`/servicos/${svc.slug}`} className="group block bg-white rounded-2xl p-[30px] border border-border relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(110,41,246,0.1)] h-full flex flex-col">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-[#9B5BFF] to-[#C084FC] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0" />
                <div className="absolute inset-[1.5px] rounded-[calc(20px-1.5px)] bg-white z-0" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-[12px] font-bold tracking-[0.2em] text-primary uppercase font-mono mb-3">
                    {svc.num}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 tracking-[-0.2px] leading-[1.22]">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-[1.65] mb-4 font-light flex-grow">
                    {svc.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {svc.tags.map(tag => (
                      <span key={tag} className="text-[12px] font-bold px-2.5 py-1 rounded-xl bg-primary-light text-primary tracking-[0.04em]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Counters */}
      <section className="bg-white py-12 md:py-16 px-5 md:px-[52px] grid grid-cols-2 md:grid-cols-4 border-y border-border">
        {[
          { n: '250', suf: '+', l: 'Projetos atendidos', delay: 0 },
          { n: '500', suf: 'M+', l: 'Faturamento de clientes', delay: 0.08 },
          { n: '7', suf: '+', l: 'Anos de experiência', delay: 0.16 },
          { n: '15', suf: '+', l: 'Canais integrados', delay: 0.24 }
        ].map((cnt, i) => (
          <motion.div 
            key={i}
            className={twMerge(
              "text-center px-4 border-border",
              i % 2 === 0 ? "border-r" : "",
              i < 2 ? "md:border-r border-b md:border-b-0 pb-8 md:pb-0 mb-8 md:mb-0" : "",
              i === 2 ? "md:border-r" : ""
            )}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: cnt.delay, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <div className="text-[clamp(44px,5.5vw,66px)] font-black text-text-primary leading-none mb-1.5 tracking-[-2.5px] font-mono">
              {cnt.n}<em className="text-primary not-italic">{cnt.suf}</em>
            </div>
            <div className="text-[12px] text-text-muted uppercase tracking-[0.1em] font-semibold">
              {cnt.l}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Social Proof & Clients */}
      <section className="py-16 md:py-24 px-5 md:px-[52px] bg-background border-b border-border overflow-hidden">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-4 font-mono bg-primary-light text-primary before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary mx-auto">
            Nossos Clientes
          </div>
          <h2 className="text-[clamp(36px,5vw,64px)] font-black tracking-[-2px] leading-[1.06] text-text-primary mb-5">
            Marcas incríveis que<br />
            <em className="text-primary not-italic">evoluem com a YAV</em>
          </h2>
          <p className="text-lg font-light text-text-secondary leading-[1.78] max-w-[600px] mx-auto">
            Operações reais, resultados concretos. Temos orgulho de impulsionar o crescimento de grandes marcas no ecossistema digital.
          </p>
        </motion.div>

        {/* Client Logos Infinite Marquee */}
        <div className="mb-24 relative w-full max-w-[1200px] mx-auto">
          {/* Gradient masks for smooth fade on edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex overflow-hidden">
            <div className="flex whitespace-nowrap animate-[mq_30s_linear_infinite] items-center gap-16 md:gap-24 w-max">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-16 md:gap-24 px-8">
                  {/* Simulated Logos */}
                  <div className="text-2xl md:text-3xl font-black text-text-muted/30 uppercase tracking-tighter flex items-center gap-3 hover:text-primary/40 transition-colors duration-300"><Hexagon className="w-10 h-10"/> LUMINA</div>
                  <div className="text-2xl md:text-3xl font-black text-text-muted/30 uppercase tracking-widest flex items-center gap-3 hover:text-primary/40 transition-colors duration-300"><Triangle className="w-10 h-10"/> VERTEX</div>
                  <div className="text-2xl md:text-3xl font-black text-text-muted/30 uppercase tracking-tight flex items-center gap-3 hover:text-primary/40 transition-colors duration-300"><Circle className="w-10 h-10"/> OMNIA</div>
                  <div className="text-2xl md:text-3xl font-black text-text-muted/30 uppercase tracking-wide flex items-center gap-3 hover:text-primary/40 transition-colors duration-300"><Box className="w-10 h-10"/> NEXUS</div>
                  <div className="text-2xl md:text-3xl font-black text-text-muted/30 uppercase tracking-tighter flex items-center gap-3 hover:text-primary/40 transition-colors duration-300"><Cloud className="w-10 h-10"/> AURA</div>
                  <div className="text-2xl md:text-3xl font-black text-text-muted/30 uppercase tracking-widest flex items-center gap-3 hover:text-primary/40 transition-colors duration-300"><Feather className="w-10 h-10"/> ZEPHYR</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1200px] mx-auto">
          {[
            {
              q: "A YAV transformou nossa operação de marketplace. Em 3 meses reduzimos nossos custos operacionais e ganhamos uma eficiência absurda com a gestão deles.",
              av: "R", name: "Ricardo M.", role: "Diretor E-commerce · Moda", delay: 0.08
            },
            {
              q: "O checkin semanal e o reporte mensal nos dão segurança total. Nunca tivemos essa visibilidade na operação digital.",
              av: "C", name: "Camila S.", role: "CMO · Cosméticos", delay: 0.16
            },
            {
              q: "Saímos de zero para 5 marketplaces funcionando em menos de 60 dias. A implantação foi impecável.",
              av: "F", name: "Fernando L.", role: "CEO · Eletrônicos", delay: 0.24
            }
          ].map((t, i) => (
            <motion.div 
              key={i}
              className="bg-white rounded-2xl p-8 border border-border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(110,41,246,0.08)] hover:border-primary/20 flex flex-col h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: t.delay, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, starIdx) => (
                  <svg key={starIdx} className="w-4 h-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <q className="text-[15px] text-text-secondary font-light leading-[1.8] block mb-6 italic flex-grow">
                "{t.q}"
              </q>
              <div className="flex items-center gap-3 mt-auto pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                  {t.av}
                </div>
                <div>
                  <strong className="text-[14px] text-text-primary block leading-[1.3]">{t.name}</strong>
                  <span className="text-[12px] text-text-muted">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-[#070612] py-[60px] md:py-[96px] px-5 md:px-[52px] relative overflow-hidden">
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(110,41,246,0.12)_0%,transparent_65%)] pointer-events-none" />
        
        <motion.div 
          className="text-center mb-[52px] relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-3.5 font-mono bg-primary/20 text-white/85 border border-primary/35 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/70 mx-auto">
            Eficiência Operacional
          </div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black text-white leading-[1.06] tracking-[-1.5px] mb-3">
            A matemática do <em className="text-[#9B5BFF] italic">Crescimento Escalável.</em>
          </h2>
          <p className="text-sm text-white/70 font-light max-w-[540px] mx-auto leading-[1.7]">
            Montar um time interno sênior exige investimento alto, meses de adaptação e risco de perder profissionais-chave. Com a YAV, você tem uma equipe pronta e especializada desde o primeiro dia — com custo previsível e resultado mensurável.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          <motion.div 
            className="bg-[#100E22] rounded-2xl overflow-hidden border border-white/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeLeft}
          >
            <div className="flex items-center gap-3 p-[22px_26px_18px] border-b border-white/5">
              <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center text-lg shrink-0 bg-[#F04438]/15">
                <X className="w-5 h-5 text-[#F04438]/70" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-0.5">Time Interno (Sênior)</h3>
                <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#F04438]/70">MODELO TRADICIONAL — ALTO RISCO</span>
              </div>
            </div>
            <div className="py-1">
              {[
                { l: 'Custos iniciais', v: 'Recrutamento, Setup & Equip.', c: 'text-[#FDA29B]' },
                { l: 'Encargos trabalhistas', v: 'CLT, Férias, 13º, Benefícios', c: 'text-[#FDA29B]' },
                { l: 'Curva de aprendizado', v: '3–6 meses de Ramp-Up', c: 'text-[#FEC84B]' },
                { l: 'Ferramentas tech', v: 'Assinaturas avulsas ($$$)', c: 'text-[#FEC84B]' },
                { l: 'Especialização', v: 'Generalista ou 1 canal', c: 'text-[#FEC84B]' },
                { l: 'Risco de turnover', v: 'Perda crítica de conhecimento', c: 'text-[#FDA29B]' },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between p-[13px_26px] border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors">
                  <span className="text-[13px] text-white/70 font-normal">{r.l}</span>
                  <span className={twMerge("text-[12px] font-bold font-mono", r.c)}>{r.v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#100E22] rounded-2xl overflow-hidden border-2 border-primary relative shadow-[0_0_40px_rgba(110,41,246,0.15)] transform md:-translate-y-2 z-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeRight}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9B5BFF] to-[#C084FC]" />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-3 p-[22px_26px_18px] border-b border-white/5 relative z-10">
              <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center text-lg shrink-0 bg-primary/20">
                <ArrowUpRight className="w-5 h-5 text-primary/80" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-0.5">Squad Especializada YAV</h3>
                <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-primary/80">MAXIMIZAÇÃO DO LUCRO LÍQUIDO</span>
              </div>
            </div>
            <div className="py-1">
              {[
                { l: 'Custos iniciais', v: 'Zero encargos e infraestrutura', c: 'text-[#6CE9A6]' },
                { l: 'Modelo financeiro', v: 'Fixo mensal previsível (OPEX)', c: 'text-[#6CE9A6]' },
                { l: 'Curva de aprendizado', v: 'Operacionais no Day 1', c: 'text-[#6CE9A6]' },
                { l: 'Ferramentas tech', v: 'Incluídas no serviço', c: 'text-[#6CE9A6]' },
                { l: 'Inteligência aplicada', v: 'Know-how de dezenas de operações', c: 'text-[#BDB4FE]' },
                { l: 'Foco', v: 'Retorno Sobre o Investimento', c: 'bg-primary/20 border border-primary/45 text-[#C4B5FD] px-2.5 py-0.5 rounded-xl' },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between p-[13px_26px] border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors">
                  <span className="text-[13px] text-white/70 font-normal">{r.l}</span>
                  <span className={twMerge("text-[12px] font-bold font-mono", r.c)}>{r.v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-[60px] md:py-[96px] px-5 md:px-[52px]">
        <motion.div 
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-4 font-mono bg-primary-light text-primary before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary">
            Por que a YAV
          </div>
          <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-text-primary max-w-[560px] mb-3.5">
            O que nos separa de uma agência comum
          </h2>
          <p className="text-base font-light text-text-secondary leading-[1.78] max-w-[540px]">
            Não fazemos entregas avulsas. Construímos operações digitais com método, cadência e accountability em cada ponto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {[
            { icon: Target, bg: 'bg-primary-light', title: 'Método comprovado', desc: 'Projeto com módulos, etapas, responsáveis e prazos. Checkin semanal — nenhuma tarefa parada por mais de 7 dias.', delay: 0.08 },
            { icon: BarChart2, bg: 'bg-[#E6FAF2]', title: 'Dados, não achismo', desc: 'Relatório mensal consolidado por canal, reunião de análise e planejamento orientado a resultado real.', delay: 0.16 },
            { icon: LinkIcon, bg: 'bg-primary-light', title: 'Visão 360° integrada', desc: 'Loja própria, marketplaces e ADS num único time. Estratégia coesa — não silos que não se conversam.', delay: 0.24 },
            { icon: Zap, bg: 'bg-[#FEF9EC]', title: 'Especialista por canal', desc: 'Cada plataforma tem um especialista dedicado. Algoritmos, sazonalidade e oportunidades dominados.', delay: 0.08 },
            { icon: Shield, bg: 'bg-primary-light', title: 'Transparência total', desc: 'O cliente acessa tarefas, status e entregas em tempo real. Zero surpresas, zero decisões sem alinhamento.', delay: 0.16 },
            { icon: Rocket, bg: 'bg-[#E6FAF2]', title: 'Escala sem reconstruir', desc: 'Novos canais ou mais volume — o modelo cresce com você sem precisar recomeçar a operação do zero.', delay: 0.24 },
          ].map((df, i) => (
            <motion.div 
              key={i}
              className="bg-white rounded-[10px] p-[26px] border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(110,41,246,0.08)] hover:border-primary/20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: df.delay, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <div className={twMerge("w-[42px] h-[42px] rounded-[10px] flex items-center justify-center mb-3", df.bg)}>
                <df.icon className="w-5 h-5 text-text-primary" />
              </div>
              <h4 className="text-sm font-bold text-text-primary mb-1.5 tracking-[-0.15px]">{df.title}</h4>
              <p className="text-[13px] text-text-secondary leading-[1.65] font-light">{df.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process (dark) */}
      <section className="bg-accent py-[60px] md:py-[96px] px-5 md:px-[52px]">
        <motion.div 
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-4 font-mono bg-primary/20 text-white/85 border border-primary/35 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/70">
            Metodologia
          </div>
          <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-white max-w-[500px] mb-2.5">
            Do diagnóstico à eficiência contínua
          </h2>
          <p className="text-base font-light text-white/70 leading-[1.78] max-w-[540px]">
            Fases claras, entregas definidas, responsabilidades alinhadas em cada projeto.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-0 relative">
          <div className="hidden md:block absolute top-7 left-11 right-11 h-px bg-white/10 z-0" />
          {[
            { n: '01', title: 'Diagnóstico', desc: 'Análise profunda do negócio, canais, dados e concorrência.', delay: 0.08 },
            { n: '02', title: 'Planejamento', desc: 'Metas, KPIs e roadmap definidos com o cliente.', delay: 0.16 },
            { n: '03', title: 'Execução', desc: 'Time dedicado com checkin semanal e rastreabilidade total.', delay: 0.24 },
            { n: '04', title: 'Crescimento', desc: 'Reporte mensal, análise e expansão contínua dos canais.', delay: 0.32 },
          ].map((st, i) => (
            <motion.div 
              key={i}
              className="relative z-10 text-center px-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: st.delay, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <div className={twMerge(
                "w-14 h-14 rounded-full flex items-center justify-center text-[15px] font-extrabold text-white mx-auto mb-4 font-mono",
                i === 0 ? "bg-primary border border-primary" : "bg-white/5 border border-white/10"
              )}>
                {st.n}
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">{st.title}</h4>
              <p className="text-[13px] text-white/70 font-light leading-[1.6]">{st.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/metodologia" className="inline-flex items-center gap-2 bg-transparent text-white border-[1.5px] border-white/50 px-7 py-[13px] rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-white/10 hover:border-white hover:-translate-y-0.5">
            Ver metodologia completa
          </Link>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-[60px] md:py-[96px] px-5 md:px-[52px] bg-background border-t border-border">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div>
            <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-4 font-mono bg-primary-light text-primary before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary">
              Cases de Sucesso
            </div>
            <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-text-primary max-w-[560px]">
              Resultados reais, impacto mensurável
            </h2>
          </div>
          <Link to="/cases" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
            Ver todos os cases <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {casesData.slice(0, 1).map((caseItem, i) => (
            <motion.div
              key={caseItem.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <Link to={`/cases/${caseItem.slug}`} className="group block bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(110,41,246,0.08)] hover:border-primary/30">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-[320px] h-[220px] md:h-auto overflow-hidden relative shrink-0">
                    {caseItem.image ? (
                      <img src={caseItem.image} alt={caseItem.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-[#9B5BFF]/10 flex items-center justify-center">
                        <TrendingUp className="w-12 h-12 text-primary/30" />
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-primary-light px-2.5 py-1 rounded-lg font-mono">
                        {caseItem.industry}
                      </span>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-text-muted bg-background px-2.5 py-1 rounded-lg">
                        {caseItem.scope}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 leading-tight group-hover:text-primary transition-colors">
                      {caseItem.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
                      {caseItem.subtitle}
                    </p>
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 mb-3">
                        <Check className="w-4 h-4 text-success" />
                        <span className="text-xs font-bold text-text-primary uppercase tracking-wide">Principais Resultados</span>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {caseItem.results.slice(0, 4).map((result, idx) => (
                          <li key={idx} className="text-xs text-text-secondary flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 shrink-0" />
                            <span className="line-clamp-1">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 text-primary font-semibold text-sm">
                      Ver case completo <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-[60px] md:py-[96px] px-5 md:px-[52px] bg-background border-t border-border">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div>
            <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-4 font-mono bg-primary-light text-primary before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary">
              Blog
            </div>
            <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-text-primary max-w-[560px]">
              Insights para o seu e-commerce
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
            Ver todos os artigos <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post, i) => (
            <motion.div
              key={post.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <Link to={`/blog/${post.id}`} className="group block bg-white rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(110,41,246,0.08)] h-full flex flex-col">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase text-primary">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-[13px] text-text-muted mb-3 font-medium">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary font-semibold text-[13px] mt-auto">
                    Ler artigo <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[60px] md:py-[96px] px-5 md:px-[52px] bg-white border-t border-border">
        <motion.div 
          className="text-center mb-11"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-4 font-mono bg-primary-light text-primary before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary mx-auto">
            Dúvidas frequentes
          </div>
          <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-text-primary mb-3.5">
            Perguntas frequentes
          </h2>
          <p className="text-base font-light text-text-secondary leading-[1.78] max-w-[540px] mx-auto">
            Respostas rápidas para as dúvidas mais comuns sobre nossos serviços, plataformas e metodologia.
          </p>
        </motion.div>

        <div className="max-w-[800px] mx-auto flex flex-col gap-1.5">
          {[
            {
              q: "O que a YAV Digital faz?",
              a: "A YAV Digital é especialista em e-commerce e marketplaces. Oferecemos 5 serviços: implantação de e-commerce (Shopify, VTEX, Wake, Tray), gestão de marketplaces (Mercado Livre, Shopee, Amazon, Magalu, TikTok Shop), gestão de e-commerce (CRO, SEO, e-mail marketing), gestão de ADS em marketplaces e cadastro de produtos em escala.",
              delay: 0.08
            },
            {
              q: "Quais marketplaces vocês gerenciam?",
              a: "Gerenciamos os principais marketplaces do Brasil: Mercado Livre, Shopee, Amazon, Magalu, TikTok Shop, Shein, Americanas e outros canais via hubs de integração como Anymarket e Plugg.to.",
              delay: 0.16
            },
            {
              q: "Quais plataformas de e-commerce vocês trabalham?",
              a: "Trabalhamos com Shopify, VTEX (incluindo Marketplace In), Wake, Tray e Nuvemshop. Também realizamos migração entre plataformas preservando SEO e histórico de dados.",
              delay: 0.24
            },
            {
              q: "Preciso contratar todos os serviços juntos?",
              a: "Não. Nossos serviços são modulares: contrate um serviço isolado (como apenas gestão de marketplace), combine dois ou mais, ou integre o pacote Full com todos os serviços num único time e reporte unificado.",
              delay: 0.08
            },
            {
              q: "Como funciona o diagnóstico gratuito?",
              a: "É uma reunião de 30 minutos, sem custo e sem compromisso. Analisamos sua operação digital, identificamos oportunidades e gargalos, e apresentamos recomendações práticas. Em seguida, enviamos uma proposta personalizada com escopo, prazos e valores.",
              delay: 0.16
            }
          ].map((faq, i) => (
            <motion.div 
              key={i}
              className={twMerge(
                "border border-border rounded-[10px] overflow-hidden transition-all duration-200",
                openFaq === i ? "border-primary/20 shadow-[0_4px_16px_rgba(110,41,246,0.06)]" : "hover:border-primary/20"
              )}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: faq.delay, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <button 
                className={twMerge(
                  "flex items-center justify-between gap-4 w-full p-[16px_18px] md:p-[18px_22px] bg-white border-none cursor-pointer font-sans text-[14px] md:text-[15px] font-semibold text-left leading-[1.4] tracking-[-0.15px] transition-colors duration-150",
                  openFaq === i ? "text-primary bg-primary/5" : "text-text-primary hover:bg-primary/5 hover:text-primary"
                )}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.q}
                <span className={twMerge(
                  "w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                  openFaq === i ? "bg-primary" : "bg-primary-light"
                )}>
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={twMerge(
                      "w-3 h-3 transition-transform duration-300",
                      openFaq === i ? "rotate-180 text-white" : "text-primary"
                    )}
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </span>
              </button>
              <div 
                className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ maxHeight: openFaq === i ? '300px' : '0' }}
              >
                <div className="px-[18px] md:px-[22px] pb-[18px] md:pb-5">
                  <p className="text-sm text-text-secondary font-light leading-[1.72] border-t border-border pt-3.5">
                    {faq.a}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-gradient-to-br from-primary to-[#9B5BFF] py-[60px] md:py-20 px-5 md:px-[52px] flex flex-col md:flex-row items-center justify-between gap-9 relative overflow-hidden text-center md:text-left">
        <div className="absolute -top-[60px] -right-[60px] w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none" />
        <motion.h2 
          className="text-[clamp(22px,3vw,40px)] font-extrabold text-white tracking-[-0.8px] leading-[1.08] max-w-[500px] relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          Sua marca precisa de uma operação<br />digital inteligente e estruturada.
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <Link to="/contato" className="inline-flex items-center gap-2 bg-accent text-white px-7 py-[13px] rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5">
            Falar com especialista <ArrowRight className="w-3 h-3" />
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
