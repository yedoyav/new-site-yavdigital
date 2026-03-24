import { motion } from 'motion/react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Check, ArrowLeft, HelpCircle, Target, TrendingUp, Zap, ShieldCheck, Sparkles } from 'lucide-react';
import { servicesData } from '../data/services';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

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

  const faqSchema = service.faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  } : null;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.subtitle,
    "provider": {
      "@type": "Organization",
      "name": "YAV Digital",
      "url": "https://yavdigital.com.br"
    },
    "serviceType": service.type
  };

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
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      <section className="pt-[140px] pb-[80px] px-5 md:px-[52px] bg-accent relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -top-[150px] -right-[100px] pointer-events-none opacity-90" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Serviços', path: '/servicos' },
              { label: service.title }
            ]} />
          </div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="text-4xl font-black text-primary/40 leading-none tracking-[-3px] font-mono">
              {service.num}
            </div>
            <div className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] uppercase px-4 py-2 rounded-xl font-mono bg-primary/20 text-white border border-primary/30">
              <Zap className="w-3 h-3 text-primary" /> {service.type}
            </div>
          </div>
          
          <h1 className="text-[clamp(40px,6vw,72px)] font-black tracking-[-3px] leading-[1] text-white mb-8">
            {service.title}
          </h1>
          <p className="text-xl font-light text-white/70 leading-relaxed max-w-3xl">
            {service.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 px-5 md:px-[52px] bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 mb-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <h2 className="text-3xl font-black text-text-primary mb-10 tracking-tight flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-primary" /> O que está incluído
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {service.includes.map((item, j) => (
                  <div key={j} className="flex gap-4 p-6 bg-white border border-border rounded-3xl hover:border-primary/30 transition-all group">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-text-secondary font-light leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="space-y-12"
            >
              <div>
                <h2 className="text-sm font-black text-text-muted mb-6 uppercase tracking-[0.2em]">Plataformas & Canais</h2>
                <div className="flex flex-wrap gap-3">
                  {service.platforms.map((item, j) => (
                    <span key={j} className="px-5 py-2.5 bg-white border border-border rounded-2xl text-sm text-text-secondary font-bold shadow-sm hover:border-primary/30 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 border-2 border-primary/10 rounded-[40px] p-10 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <h4 className="text-[11px] font-black text-primary mb-4 uppercase tracking-[0.2em] font-mono flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Nota do Serviço
                </h4>
                <p className="text-lg text-text-primary leading-relaxed font-medium italic">
                  "{service.note}"
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
              className="mb-32"
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-4xl font-black text-text-primary tracking-tight">Como Funciona</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {service.howItWorks.map((step, i) => (
                  <div key={i} className="bg-white p-8 rounded-[40px] border-2 border-border shadow-sm relative overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                    <div className="text-6xl font-black text-primary/5 mb-6 group-hover:text-primary/10 transition-colors font-mono tracking-tighter">{step.step}</div>
                    <h3 className="text-xl font-black text-text-primary mb-4 tracking-tight">{step.title}</h3>
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
              className="mb-32"
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-4xl font-black text-text-primary tracking-tight">Resultados Esperados</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.expectedResults.map((result, i) => (
                  <div key={i} className="flex items-start gap-5 bg-white p-8 rounded-[40px] border-2 border-border shadow-sm hover:border-success/30 transition-colors group">
                    <div className="w-10 h-10 rounded-2xl bg-success/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Check className="w-5 h-5 text-success" />
                    </div>
                    <p className="text-lg text-text-secondary font-bold leading-relaxed">{result}</p>
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
              className="mb-32"
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-4xl font-black text-text-primary tracking-tight">Dúvidas Frequentes</h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {service.faq.map((item, i) => (
                  <div key={i} className="bg-white p-10 rounded-[40px] border-2 border-border shadow-sm hover:border-primary/30 transition-colors">
                    <h3 className="text-xl font-black text-text-primary mb-4 tracking-tight">{item.q}</h3>
                    <p className="text-lg text-text-secondary font-light leading-relaxed">{item.a}</p>
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
            className="pt-24 border-t border-border"
          >
            <h2 className="text-sm font-black text-text-muted mb-12 uppercase tracking-[0.2em]">Outros Serviços</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData.filter(s => s.id !== service.id).slice(0, 4).map((s) => (
                <Link 
                  key={s.id} 
                  to={`/servicos/${s.id}`}
                  className="p-8 bg-white border-2 border-border rounded-[40px] hover:border-primary/30 hover:shadow-2xl transition-all group hover:-translate-y-2"
                >
                  <div className="text-2xl font-black text-primary/20 mb-4 font-mono tracking-tighter">{s.num}</div>
                  <h3 className="text-lg font-black text-text-primary group-hover:text-primary transition-colors line-clamp-2 leading-tight">{s.title}</h3>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-accent py-24 md:py-32 px-5 md:px-[52px] relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -bottom-[400px] -left-[200px] pointer-events-none" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-[clamp(32px,5vw,56px)] font-black text-white tracking-[-2px] leading-[1] mb-8">
              Pronto para escalar sua operação com este serviço?
            </h2>
            <p className="text-xl text-white/60 font-light">
              Nossos especialistas estão prontos para desenhar a melhor estratégia para o seu negócio.
            </p>
          </div>
          <Link to="/contato" className="inline-flex items-center gap-3 bg-primary text-white px-10 py-6 rounded-2xl font-black text-lg transition-all duration-300 hover:bg-primary-dark hover:-translate-y-1 hover:shadow-2xl group">
            Falar com especialista <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
