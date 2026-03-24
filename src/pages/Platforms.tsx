import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Settings, Zap, CheckCircle2, ShoppingBag } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

export function Platforms() {
  const categories = [
    {
      title: 'E-commerce',
      icon: ShoppingBag,
      color: 'text-primary',
      bg: 'bg-primary/10',
      platforms: [
        'VTEX (IO & Legacy)',
        'Tray',
        'Tray Corp',
        'Nuvemshop',
        'Shopify',
        'Wake',
        'Linx',
        'Magento (Adobe Commerce)',
        'WooCommerce'
      ]
    },
    {
      title: 'Marketplaces',
      icon: Globe,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      platforms: [
        'Mercado Livre',
        'Amazon',
        'Magalu',
        'Shopee',
        'Americanas / B2W',
        'Casas Bahia / Via',
        'Netshoes',
        'Dafiti'
      ]
    },
    {
      title: 'Ferramentas & Integrações',
      icon: Settings,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
      platforms: [
        'Bling / Tiny (ERP)',
        'RD Station / Hubspot (CRM)',
        'Klaviyo / Mailchimp',
        'Google Analytics 4',
        'Meta Ads / Google Ads',
        'Enviou / Mailbiz',
        'Melhor Envio / Frenet',
        'PagSeguro / Mercado Pago'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
    >
      <SEO 
        title="Plataformas" 
        description="Trabalhamos com as principais tecnologias do mercado de e-commerce e marketing digital." 
      />
      
      <section className="pt-[140px] pb-[80px] px-5 md:px-[52px] bg-accent relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -top-[150px] -left-[100px] pointer-events-none opacity-90" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="max-w-[800px] relative z-10">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Plataformas' }
            ]} />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-6 font-mono bg-primary/20 text-white/85 border border-primary/35 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/70">
              Ecossistema
            </div>
            <h1 className="text-[clamp(36px,5vw,64px)] font-extrabold tracking-[-2px] leading-[1.02] text-white mb-6">
              Tecnologia de ponta para o seu <em className="text-primary not-italic text-glow">crescimento.</em>
            </h1>
            <p className="text-lg font-light text-white/70 leading-relaxed max-w-[600px]">
              Não somos reféns de uma única ferramenta. Dominamos as principais plataformas do mercado para entregar a melhor solução para o seu momento de negócio.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-5 md:px-[52px] bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                className="bg-white border border-border rounded-[32px] p-8 md:p-10 shadow-sm hover:shadow-[0_24px_64px_rgba(0,0,0,0.06)] transition-all duration-500 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${cat.bg} flex items-center justify-center ${cat.color} transition-transform group-hover:scale-110 duration-500`}>
                    <cat.icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary tracking-tight">
                    {cat.title}
                  </h2>
                </div>

                <ul className="space-y-4">
                  {cat.platforms.map((plat, j) => (
                    <li key={j} className="flex items-center gap-3 text-text-secondary group/item">
                      <CheckCircle2 className={`w-4 h-4 ${cat.color} opacity-40 group-hover/item:opacity-100 transition-opacity`} />
                      <span className="text-[15px] font-medium group-hover/item:text-text-primary transition-colors">{plat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-20 p-8 md:p-12 bg-accent rounded-[40px] relative overflow-hidden group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(110,41,246,0.15),transparent_50%)]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-[600px]">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-4 font-mono">
                  <Zap className="w-4 h-4" />
                  Especialistas VTEX
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                  Sua loja em uma das maiores plataformas do mundo.
                </h3>
                <p className="text-white/60 font-light text-lg">
                  Somos parceiros especialistas no ecossistema VTEX, prontos para implementar, evoluir e escalar sua operação com o que há de mais moderno em tecnologia para e-commerce.
                </p>
              </div>
              <Link 
                to="/contato" 
                className="shrink-0 bg-white text-accent px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                Falar com especialista
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-5 md:px-[52px] bg-background border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-8 tracking-tight">
            Não encontrou sua plataforma?
          </h2>
          <p className="text-xl text-text-secondary font-light mb-12">
            Nosso time técnico tem experiência com dezenas de outras ferramentas e integrações customizadas via API. Vamos conversar sobre o seu cenário específico.
          </p>
          <Link 
            to="/contato" 
            className="inline-flex items-center gap-2 text-primary font-bold text-lg group"
          >
            Entrar em contato agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
