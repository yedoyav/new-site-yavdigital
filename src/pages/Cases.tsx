import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { SEO } from '../components/SEO';
import { casesData } from '../data/cases';
import { Breadcrumbs } from '../components/Breadcrumbs';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

export function Cases() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
    >
      <SEO 
        title="Cases de Sucesso" 
        description="Confira os resultados reais que a YAV Digital gera para seus clientes em e-commerce e marketplaces." 
        keywords="cases e-commerce, resultados marketplace, sucesso vtex, sucesso shopify, mercado livre ads cases"
      />
      
      <section className="pt-[130px] pb-[72px] px-5 md:px-[52px] bg-accent relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[60px] -top-[120px] -right-[80px] pointer-events-none opacity-90" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10 max-w-[800px] mx-auto">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Cases' }
            ]} />
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-4 font-mono bg-primary/20 text-white/85 border border-primary/35 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/70 mx-auto">
              Resultados Reais
            </div>
            <h1 className="text-[clamp(32px,5vw,64px)] font-extrabold tracking-[-2px] leading-[1.06] text-white mb-5">
              Cases de Sucesso
            </h1>
            <p className="text-lg font-light text-white/70 leading-[1.78]">
              Transformamos operações digitais em máquinas de escala. Conheça as histórias das marcas que evoluem com a metodologia YAV.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-5 md:px-[52px] bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casesData.map((caseItem, i) => (
              <motion.div
                key={caseItem.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="group flex flex-col h-full bg-white border-2 border-border rounded-[40px] overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Link to={`/cases/${caseItem.id}`} className="block aspect-[16/10] overflow-hidden relative bg-gray-50">
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.client} 
                    className={`w-full h-full ${caseItem.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'} group-hover:scale-110 transition-transform duration-700`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
                
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="text-[10px] font-black tracking-widest uppercase text-primary bg-primary/10 px-3 py-1.5 rounded-xl font-mono">
                      {caseItem.industry}
                    </span>
                    <span className="text-[10px] font-black tracking-widest uppercase text-text-muted bg-background px-3 py-1.5 rounded-xl font-mono border border-border">
                      {caseItem.scope}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-black text-text-primary mb-4 tracking-tight group-hover:text-primary transition-colors leading-tight">
                    {caseItem.client}
                  </h2>
                  
                  <p className="text-text-secondary font-light leading-relaxed mb-8 line-clamp-3">
                    {caseItem.subtitle}
                  </p>
                  
                  <div className="mt-auto pt-8 border-t border-border flex items-center justify-between">
                    <div className="flex gap-4">
                      {caseItem.stats.slice(0, 2).map((stat, idx) => (
                        <div key={idx}>
                          <div className="text-lg font-black text-primary font-mono leading-none">{stat.value}</div>
                          <div className="text-[9px] text-text-muted uppercase tracking-wider font-bold mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/cases/${caseItem.id}`}
                      className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-20 px-5 md:px-[52px] relative overflow-hidden">
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(110,41,246,0.12)_0%,transparent_65%)] pointer-events-none" />
        
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <h2 className="text-[clamp(28px,4vw,48px)] font-black text-white leading-[1.06] tracking-[-1.5px] mb-6">
            Sua marca pode ser o <em className="text-primary not-italic">próximo case.</em>
          </h2>
          <p className="text-lg text-white/70 font-light mb-10">
            Agende uma conversa estratégica e descubra como nossa squad pode acelerar sua operação digital.
          </p>
          <Link 
            to="/contato" 
            className="inline-flex items-center gap-2 bg-primary text-white px-9 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(110,41,246,0.32)]"
          >
            Agendar conversa estratégica
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
