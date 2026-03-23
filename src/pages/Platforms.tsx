import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Store, Zap, Waves, Building2, RefreshCw, Package, Heart, Box, Building, Music, Sparkles, CircleDot, Link as LinkIcon, BarChart2, Tag, MousePointerClick, Mail, Database, Share2, MessageCircle, Star } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SEO } from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

export function Platforms() {
  const sections = [
    {
      title: 'Plataformas de loja virtual — Implantação',
      items: [
        { icon: ShoppingCart, bg: 'bg-[#E8F5E9]', title: 'Tray / Nuvemshop', desc: 'Crescimento inicial rápido' },
        { icon: Store, bg: 'bg-[#EBF5FB]', title: 'Shopify', desc: 'Escalabilidade global' },
        { icon: Zap, bg: 'bg-[#FEF9EC]', title: 'VTEX', desc: 'Enterprise e marketplace próprio' },
        { icon: Waves, bg: 'bg-[#F5EEF8]', title: 'Wake', desc: 'Alto desempenho, made in Brazil' },
        { icon: Building2, bg: 'bg-[#FEF3E2]', title: 'Marketplace In (VTEX)', desc: 'Transforme a loja em marketplace' },
        { icon: RefreshCw, bg: 'bg-[#EEF2FF]', title: 'Migração de Plataforma', desc: 'SEO e histórico preservados' }
      ]
    },
    {
      title: 'Marketplaces — Gestão e ADS',
      items: [
        { icon: Package, bg: 'bg-[#FEFCE8]', title: 'Mercado Livre', desc: 'Anúncios, FULL e reputação' },
        { icon: Heart, bg: 'bg-[#FFF7ED]', title: 'Shopee', desc: 'Lives, cupons e datas duplas' },
        { icon: Box, bg: 'bg-[#F0FFF4]', title: 'Amazon Brasil', desc: 'Buy Box, FBA e Sponsored' },
        { icon: Building, bg: 'bg-[#EFF6FF]', title: 'Magalu', desc: 'Catálogo e campanhas' },
        { icon: Music, bg: 'bg-[#FFF0F6]', title: 'TikTok Shop', desc: 'Social commerce e criativos' },
        { icon: Sparkles, bg: 'bg-[#FAF0FE]', title: 'Shein', desc: 'Entrada, cadastro e gestão' },
        { icon: CircleDot, bg: 'bg-[#FFF7ED]', title: 'Americanas', desc: 'Varejo nacional massivo' },
        { icon: LinkIcon, bg: 'bg-[#F0FFF4]', title: 'Outros canais', desc: 'Via hubs de integração' }
      ]
    },
    {
      title: 'Ferramentas & integrações que utilizamos',
      items: [
        { icon: BarChart2, bg: 'bg-[#EFF6FF]', title: 'Google Analytics 4', desc: 'Rastreamento e funil de compra' },
        { icon: Tag, bg: 'bg-[#F0FFF4]', title: 'Google Tag Manager', desc: 'Pixels, tags e eventos' },
        { icon: MousePointerClick, bg: 'bg-[#FFF7ED]', title: 'Hotjar / Clarity', desc: 'Heatmaps e gravação de sessões' },
        { icon: Mail, bg: 'bg-[#FFF0F6]', title: 'Klaviyo / RD Station', desc: 'E-mail e automações' },
        { icon: Database, bg: 'bg-[#EFF6FF]', title: 'Bling / Tiny (ERP)', desc: 'Estoque, pedidos e cadastros' },
        { icon: Share2, bg: 'bg-[#F0FFF4]', title: 'Anymarket / Plugg', desc: 'Hubs para múltiplos canais' },
        { icon: MessageCircle, bg: 'bg-[#FFF7ED]', title: 'WhatsApp Business', desc: 'Atendimento e notificações' },
        { icon: Star, bg: 'bg-[#FEFCE8]', title: 'Trustvox / Reclame Aqui', desc: 'Reviews e reputação' }
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
        description="Trabalhamos com as melhores tecnologias do mercado: VTEX, Shopify, Mercado Livre, Amazon, Shopee e muito mais." 
      />
      <section className="pt-[110px] md:pt-[130px] pb-14 md:pb-[72px] px-5 md:px-[52px] bg-accent text-center relative overflow-hidden">
        <div className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-[radial-gradient(ellipse,rgba(110,41,246,0.14)_0%,transparent_65%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-4 font-mono bg-primary/20 text-white/85 border border-primary/35 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/70 mx-auto">
            Plataformas & Canais
          </div>
          <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-white mb-3.5">
            Sua operação integrada<br />nos melhores canais.
          </h1>
          <p className="text-base font-light text-white/70 leading-[1.78] max-w-[540px] mx-auto">
            Dominamos as principais plataformas e marketplaces. Conectamos sua marca às principais plataformas com inteligência e controle.
          </p>
        </div>
      </section>

      <div className="bg-background">
        {sections.map((sec, i) => (
          <section key={i} className="py-11 md:py-16 px-5 md:px-[52px] border-b border-border last:border-b-0 last:pb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <div className="text-[12px] font-bold tracking-[0.18em] uppercase text-primary font-mono mb-3.5 pb-2.5 border-b border-border">
                {sec.title}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                {sec.items.map((item, j) => (
                  <div 
                    key={j}
                    className="bg-white border border-border rounded-[10px] p-4 flex items-center gap-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(110,41,246,0.07)] hover:border-primary/20"
                  >
                    <div className={twMerge("w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0", item.bg)}>
                      <item.icon className="w-4 h-4 text-text-primary" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-text-primary mb-0.5 leading-tight">{item.title}</h4>
                      <p className="text-[12px] text-text-secondary font-light leading-[1.4]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        ))}
      </div>

      <section className="bg-gradient-to-br from-primary to-[#9B5BFF] py-[60px] md:py-20 px-5 md:px-[52px] flex flex-col md:flex-row items-center justify-between gap-9 relative overflow-hidden text-center md:text-left">
        <div className="absolute -top-[60px] -right-[60px] w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none" />
        <h2 className="text-[clamp(22px,3vw,40px)] font-extrabold text-white tracking-[-0.8px] leading-[1.08] max-w-[500px] relative">
          Não encontrou sua plataforma? Fale com a gente.
        </h2>
        <Link to="/contato" className="inline-flex items-center gap-2 bg-accent text-white px-7 py-[13px] rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5">
          Conversar <ArrowRight className="w-3 h-3" />
        </Link>
      </section>
    </motion.div>
  );
}
