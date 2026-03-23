import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { servicesData } from '../data/services';
import { SEO } from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
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
        description="Conheça nossos serviços de implantação de e-commerce, gestão de marketplaces, gestão de ADS e cadastro de produtos." 
      />
      <section className="pt-[130px] pb-[72px] px-5 md:px-[52px] bg-accent grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-14 items-center relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[60px] -top-[120px] -right-[80px] pointer-events-none opacity-90" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-4 font-mono bg-primary/20 text-white/85 border border-primary/35 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/70">
            Nossos serviços
          </div>
          <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-white mb-3.5">
            Do zero à eficiência —<br />em todos os canais.
          </h1>
          <p className="text-base font-light text-white/70 leading-[1.78] max-w-[540px]">
            5 serviços para cobrir toda a jornada digital. Contrate um isolado, combine ou integre o pacote Full.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[20px] p-[26px] relative z-10">
          <p className="text-[12px] font-bold tracking-[0.16em] uppercase text-white/50 mb-3 font-mono">
            Contratação flexível
          </p>
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-white/5 mb-1.5 text-[13px] text-white/60 border border-transparent">
            <Check className="w-3.5 h-3.5 opacity-70 shrink-0" />
            Um serviço isolado
          </div>
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-white/5 mb-1.5 text-[13px] text-white/60 border border-transparent">
            <Check className="w-3.5 h-3.5 opacity-70 shrink-0" />
            Dois ou mais serviços combinados
          </div>
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] bg-primary/20 text-white border border-primary/40 mb-1.5 text-[13px]">
            <Check className="w-3.5 h-3.5 shrink-0" />
            Pacote Full — todos integrados
          </div>
          <p className="text-[12px] text-white/40 mt-3 leading-[1.6]">
            Um projeto por cliente. Reporte e reunião mensais unificados.
          </p>
        </div>
      </section>

      <section className="py-14 px-5 md:px-[52px] bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((svc, i) => (
            <motion.div
              key={svc.id}
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
                className="group flex flex-col h-full bg-white rounded-2xl p-[30px] border border-border relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(110,41,246,0.1)] hover:border-primary/30"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-[#9B5BFF] to-[#C084FC] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[28px] font-black text-primary/20 leading-none tracking-[-1px] font-mono group-hover:text-primary transition-colors duration-300">
                    {svc.num}
                  </div>
                  <div className="text-[11px] font-bold tracking-wider uppercase text-primary bg-primary-light px-2.5 py-1 rounded-lg font-mono">
                    {svc.type}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-3 tracking-[-0.2px] leading-[1.22] group-hover:text-primary transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-text-secondary leading-[1.65] mb-6 font-light flex-grow">
                  {svc.desc}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {svc.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-bold px-2 py-1 rounded-lg bg-background text-text-muted tracking-[0.04em]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-sm font-bold text-primary group-hover:text-primary-dark transition-colors">
                  Ver detalhes do serviço
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-[#9B5BFF] py-[60px] md:py-20 px-5 md:px-[52px] flex flex-col md:flex-row items-center justify-between gap-9 relative overflow-hidden text-center md:text-left">
        <div className="absolute -top-[60px] -right-[60px] w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none" />
        <h2 className="text-[clamp(22px,3vw,40px)] font-extrabold text-white tracking-[-0.8px] leading-[1.08] max-w-[500px] relative">
          Qual serviço faz mais sentido para o seu momento?
        </h2>
        <Link to="/contato" className="inline-flex items-center gap-2 bg-accent text-white px-7 py-[13px] rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5">
          Descobrir juntos <ArrowRight className="w-3 h-3" />
        </Link>
      </section>
    </motion.div>
  );
}
