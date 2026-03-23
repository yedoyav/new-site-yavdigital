import { motion } from 'motion/react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Check, ArrowLeft, HelpCircle, Target, TrendingUp } from 'lucide-react';
import { servicesData } from '../data/services';
import { SEO } from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find(s => s.id === slug);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
    >
      <SEO 
        title={`${service.title} | Serviços`}
        description={service.subtitle}
      />
      <section className="pt-[130px] pb-[72px] px-5 md:px-[52px] bg-accent relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[60px] -top-[120px] -right-[80px] pointer-events-none opacity-90" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <Link to="/servicos" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Voltar para Serviços
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="text-[32px] font-black text-primary/40 leading-none tracking-[-2px] font-mono">
              {service.num}
            </div>
            <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl font-mono bg-primary/20 text-white/85 border border-primary/35">
              {service.type}
            </div>
          </div>
          
          <h1 className="text-[clamp(36px,5vw,64px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-white mb-6">
            {service.title}
          </h1>
          <p className="text-lg font-light text-white/70 leading-[1.78] max-w-2xl">
            {service.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-5 md:px-[52px] bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-6 tracking-[-0.5px]">O que está incluído</h2>
              <ul className="flex flex-col gap-4">
                {service.includes.map((item, j) => (
                  <li key={j} className="flex gap-3 text-text-secondary font-light leading-relaxed">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold text-text-primary mb-6 tracking-[-0.5px]">Plataformas & Canais</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.platforms.map((item, j) => (
                  <span key={j} className="px-4 py-2 bg-white border border-border rounded-xl text-sm text-text-secondary font-medium shadow-sm">
                    {item}
                  </span>
                ))}
              </div>

              <div className="bg-primary-light border-l-4 border-primary rounded-r-2xl p-6">
                <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-widest font-mono">Nota do Serviço</h4>
                <p className="text-sm text-text-secondary leading-relaxed font-medium">
                  {service.note}
                </p>
              </div>
            </motion.div>
          </div>

          {service.howItWorks && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-text-primary tracking-[-1px]">Como Funciona</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.howItWorks.map((step, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-border shadow-sm relative overflow-hidden group hover:border-primary/30 transition-colors">
                    <div className="text-4xl font-black text-primary/5 mb-4 group-hover:text-primary/10 transition-colors font-mono">{step.step}</div>
                    <h3 className="text-lg font-bold text-text-primary mb-3">{step.title}</h3>
                    <p className="text-sm text-text-secondary font-light leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {service.expectedResults && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-text-primary tracking-[-1px]">Resultados Esperados</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.expectedResults.map((result, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-border shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-text-secondary font-medium leading-relaxed">{result}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {service.faq && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-text-primary tracking-[-1px]">Dúvidas Frequentes</h2>
              </div>
              <div className="flex flex-col gap-4">
                {service.faq.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                    <h3 className="text-lg font-bold text-text-primary mb-3">{item.q}</h3>
                    <p className="text-text-secondary font-light leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="pt-16 border-t border-border"
          >
            <h2 className="text-2xl font-bold text-text-primary mb-8 tracking-[-0.5px]">Outros Serviços</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {servicesData.filter(s => s.id !== service.id).slice(0, 4).map((s) => (
                <Link 
                  key={s.id} 
                  to={`/servicos/${s.id}`}
                  className="p-5 bg-white border border-border rounded-2xl hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="text-xs font-bold text-primary/40 mb-2 font-mono">{s.num}</div>
                  <h3 className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-1">{s.title}</h3>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-[#9B5BFF] py-[60px] md:py-20 px-5 md:px-[52px] flex flex-col md:flex-row items-center justify-between gap-9 relative overflow-hidden text-center md:text-left">
        <div className="absolute -top-[60px] -right-[60px] w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none" />
        <h2 className="text-[clamp(22px,3vw,40px)] font-extrabold text-white tracking-[-0.8px] leading-[1.08] max-w-[500px] relative">
          Pronto para escalar sua operação com este serviço?
        </h2>
        <Link to="/contato" className="inline-flex items-center gap-2 bg-accent text-white px-7 py-[13px] rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5">
          Falar com especialista <ArrowRight className="w-3 h-3" />
        </Link>
      </section>
    </motion.div>
  );
}
