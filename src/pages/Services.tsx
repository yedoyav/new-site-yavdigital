import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Rocket, Target, BarChart2, Zap, Box, CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { servicesData } from '../data/services';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

const serviceIcons: Record<string, any> = {
  'implantacao-ecommerce': Rocket,
  'gestao-marketplace': Target,
  'gestao-ecommerce': BarChart2,
  'gestao-ads': Zap,
  'cadastro-produtos': Box,
};

export function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
    >
      <SEO 
        title="Serviços" 
        description="Conheça nossos serviços de implementação de e-commerce, gestão de marketplaces, gestão de ADS e cadastro de produtos." 
      />
      <section className="pt-[140px] pb-[80px] px-5 md:px-[52px] bg-accent grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -top-[150px] -right-[100px] pointer-events-none opacity-90" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Serviços' }
            ]} />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-6 font-mono bg-primary/20 text-white/85 border border-primary/35 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/70">
              Nossos serviços
            </div>
            <h1 className="text-[clamp(36px,5vw,64px)] font-extrabold tracking-[-2px] leading-[1.02] text-white mb-6">
              Do zero à eficiência —<br />em todos os canais.
            </h1>
            <p className="text-lg font-light text-white/70 leading-relaxed max-w-[580px]">
              5 serviços especializados para cobrir toda a jornada digital do seu e-commerce. Contrate um serviço isolado, combine soluções ou integre o pacote Full para uma operação completa.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[32px] p-8 md:p-10 relative z-10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 font-mono">
              Contratação flexível
            </p>
          </div>
          
          <div className="space-y-3">
            {[
              { text: 'Um serviço isolado para demandas pontuais', active: false },
              { text: 'Dois ou mais serviços combinados estrategicamente', active: false },
              { text: 'Pacote Full — todos os serviços integrados (Recomendado)', active: true },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={twMerge(
                  "flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 border",
                  item.active 
                    ? "bg-primary/20 text-white border-primary/40 shadow-[0_0_20px_rgba(110,41,246,0.2)]" 
                    : "bg-white/5 text-white/60 border-transparent hover:bg-white/10 hover:border-white/10"
                )}
              >
                <CheckCircle2 className={twMerge("w-5 h-5 shrink-0", item.active ? "text-primary" : "opacity-40")} />
                <span className="text-[14px] font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 flex items-start gap-3">
            <div className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />
            <p className="text-[12px] text-white/40 leading-relaxed italic">
              Um projeto por cliente. Reporte unificado e reunião estratégica mensal com especialistas dedicados.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-20 md:py-32 px-5 md:px-[52px] bg-background">
        <div className="flex flex-wrap justify-center gap-8">
          {servicesData.map((svc, i) => {
            const Icon = serviceIcons[svc.id] || Rocket;
            return (
              <motion.div
                key={svc.id}
                className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <Link 
                  to={`/servicos/${svc.id}`} 
                  className="group flex flex-col h-full bg-white rounded-[32px] p-10 border border-border relative overflow-hidden transition-all duration-500 hover:shadow-[0_32px_80px_rgba(0,0,0,0.06)] hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                    <div className="scale-[5] origin-top-right">
                      <Icon />
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary bg-primary-light px-3 py-1.5 rounded-xl font-mono">
                        {svc.type}
                      </div>
                    </div>

                    <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-muted mb-3 font-mono">
                      {svc.num}
                    </div>

                    <h3 className="text-2xl font-bold text-text-primary mb-4 tracking-tight leading-tight group-hover:text-primary transition-colors">
                      {svc.title}
                    </h3>
                    
                    <p className="text-[15px] text-text-secondary leading-relaxed mb-8 font-light flex-grow">
                      {svc.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-10">
                      {svc.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-background text-text-muted border border-border group-hover:border-primary/20 group-hover:text-primary/70 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-border flex items-center justify-between text-[13px] font-bold text-text-primary group-hover:text-primary transition-colors">
                      Ver detalhes do serviço
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-accent py-24 px-5 md:px-[52px] relative overflow-hidden">
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(110,41,246,0.12)_0%,transparent_65%)] pointer-events-none" />
        
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <h2 className="text-[clamp(28px,4vw,48px)] font-black text-white leading-[1.06] tracking-[-1.5px] mb-6">
            Qual serviço faz mais sentido para o seu <em className="text-primary not-italic text-glow">momento?</em>
          </h2>
          <p className="text-lg text-white/70 font-light mb-10 max-w-[600px] mx-auto">
            Agende uma conversa estratégica e descubra como nossa squad pode acelerar sua operação digital.
          </p>
          <Link 
            to="/contato" 
            className="inline-flex items-center gap-2 bg-primary text-white px-9 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(110,41,246,0.32)]"
          >
            Descobrir juntos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
