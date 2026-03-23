import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Zap, CheckCircle } from 'lucide-react';
import { casesData } from '../data/cases';
import { SEO } from '../components/SEO';

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
        description="Conheça os resultados que entregamos para nossos clientes. Veja como transformamos operações digitais com estratégia e tecnologia." 
      />
      
      {/* Hero Section */}
      <section className="pt-[130px] pb-[72px] px-5 md:px-[52px] bg-[#0C0B16] relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[60px] -top-[120px] -right-[80px] pointer-events-none opacity-90" />
        <div className="absolute w-[320px] h-[320px] bg-[#9B5BFF]/10 rounded-full blur-[60px] -bottom-[60px] -left-[40px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10 max-w-[720px]">
          <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-4 font-mono bg-primary/20 text-white/85 border border-primary/35 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/70">
            Cases de Sucesso
          </div>
          <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-white mb-3.5">
            Resultados reais,<br />impacto mensurável.
          </h1>
          <p className="text-base font-light text-white/70 leading-[1.78] max-w-[540px]">
            Conheça as histórias de transformação digital que construímos junto com nossos clientes. Cada case é único, mas todos compartilham o mesmo DNA: estratégia, execução e resultados.
          </p>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-14 px-5 md:px-[52px] bg-background">
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {casesData.map((caseItem, i) => (
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
              <Link 
                to={`/cases/${caseItem.slug}`} 
                className="group flex flex-col md:flex-row gap-6 bg-white rounded-2xl p-6 md:p-8 border border-border relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(110,41,246,0.1)] hover:border-primary/30"
              >
                {/* Featured Badge */}
                {caseItem.featured && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-[11px] font-bold px-3 py-1.5 rounded-bl-xl">
                    Em Destaque
                  </div>
                )}

                {/* Image */}
                <div className="w-full md:w-[280px] h-[200px] md:h-[220px] rounded-xl overflow-hidden shrink-0 bg-gradient-to-br from-primary/10 to-[#9B5BFF]/10">
                  {caseItem.image ? (
                    <img 
                      src={caseItem.image} 
                      alt={caseItem.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <TrendingUp className="w-12 h-12 text-primary/30" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-primary-light px-2.5 py-1 rounded-lg font-mono">
                      {caseItem.industry}
                    </span>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-text-muted bg-background px-2.5 py-1 rounded-lg">
                      {caseItem.scope}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 tracking-[-0.2px] leading-[1.22] group-hover:text-primary transition-colors">
                    {caseItem.title}
                  </h3>
                  
                  <p className="text-sm text-text-secondary leading-[1.65] mb-4 line-clamp-2">
                    {caseItem.subtitle}
                  </p>

                  {/* Key Results Preview */}
                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-4 h-4 text-success" />
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

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-primary group-hover:text-primary-dark transition-colors">
                    Ver case completo
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-[#9B5BFF] py-[60px] md:py-20 px-5 md:px-[52px] flex flex-col md:flex-row items-center justify-between gap-9 relative overflow-hidden text-center md:text-left">
        <div className="absolute -top-[60px] -right-[60px] w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none" />
        <h2 className="text-[clamp(22px,3vw,40px)] font-extrabold text-white tracking-[-0.8px] leading-[1.08] max-w-[500px] relative">
          Quer transformar sua operação digital também?
        </h2>
        <Link to="/contato" className="inline-flex items-center gap-2 bg-accent text-white px-7 py-[13px] rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5">
          Falar com um especialista <ArrowRight className="w-3 h-3" />
        </Link>
      </section>
    </motion.div>
  );
}
