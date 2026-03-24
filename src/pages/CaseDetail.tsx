import { motion } from 'motion/react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Target, Lightbulb, TrendingUp, Zap, Sparkles, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/SEO';
import { casesData } from '../data/cases';
import { Breadcrumbs } from '../components/Breadcrumbs';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

export function CaseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const caseItem = casesData.find(c => c.id === slug);

  if (!caseItem) {
    return <Navigate to="/cases" replace />;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseItem.title,
    "description": caseItem.subtitle,
    "image": caseItem.image,
    "author": {
      "@type": "Organization",
      "name": "YAV Digital"
    },
    "publisher": {
      "@type": "Organization",
      "name": "YAV Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yavdigital.com.br/logo.png"
      }
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
        title={`${caseItem.client} | Case de Sucesso`}
        description={caseItem.subtitle}
        keywords={`${caseItem.tags.join(', ')}, case e-commerce, resultado digital, yav digital`}
        ogImage={caseItem.image}
      />
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      
      <section className="pt-[140px] pb-[80px] px-5 md:px-[52px] bg-accent relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -top-[150px] -right-[100px] pointer-events-none opacity-90" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Cases', path: '/cases' },
              { label: caseItem.client }
            ]} />
          </div>
          
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] uppercase px-4 py-2 rounded-xl font-mono bg-primary/20 text-white border border-primary/30">
              <Zap className="w-3 h-3 text-primary" /> {caseItem.industry}
            </div>
            <div className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] uppercase px-4 py-2 rounded-xl font-mono bg-white/10 text-white/80 border border-white/20">
              {caseItem.scope}
            </div>
          </div>
          
          <h1 className="text-[clamp(36px,6vw,64px)] font-black tracking-[-3px] leading-[1.1] text-white mb-8">
            {caseItem.title}
          </h1>
          <p className="text-xl font-light text-white/70 leading-relaxed max-w-3xl">
            {caseItem.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 px-5 md:px-[52px] bg-background">
        <div className="max-w-5xl mx-auto">
          {/* Main Image */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="aspect-[21/9] rounded-[40px] overflow-hidden mb-24 border border-border shadow-2xl bg-gray-50"
          >
            <img 
              src={caseItem.image} 
              alt={caseItem.client} 
              className={`w-full h-full ${caseItem.imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'}`}
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24 mb-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="space-y-16"
            >
              <div>
                <h2 className="text-2xl font-black text-text-primary mb-6 tracking-tight flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-primary" /> Introdução
                </h2>
                <p className="text-lg text-text-secondary font-light leading-relaxed">
                  {caseItem.introduction}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-text-primary mb-6 tracking-tight flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" /> O Desafio
                </h2>
                <p className="text-lg text-text-secondary font-light leading-relaxed">
                  {caseItem.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-text-primary mb-6 tracking-tight flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-primary" /> A Estratégia
                </h2>
                <p className="text-lg text-text-secondary font-light leading-relaxed">
                  {caseItem.strategy}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="space-y-12"
            >
              {/* Results Sidebar */}
              <div className="bg-white rounded-[40px] p-10 border-2 border-border shadow-sm sticky top-24">
                <h3 className="text-[11px] font-black text-primary mb-8 uppercase tracking-[0.2em] font-mono flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Resultados Chave
                </h3>
                <ul className="space-y-6 mb-10">
                  {caseItem.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm text-text-secondary leading-relaxed font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      {result}
                    </li>
                  ))}
                </ul>

                <div className="space-y-8 pt-10 border-t border-border">
                  {caseItem.stats.map((stat, idx) => (
                    <div key={idx} className="group">
                      <div className="text-4xl font-black text-primary font-mono group-hover:scale-105 transition-transform origin-left">{stat.value}</div>
                      <div className="text-[10px] text-text-muted uppercase tracking-widest font-black mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Conclusion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="bg-primary/5 border-2 border-primary/10 rounded-[40px] p-12 relative overflow-hidden mb-32"
          >
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <h4 className="text-[11px] font-black text-primary mb-6 uppercase tracking-[0.2em] font-mono flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Conclusão Estratégica
            </h4>
            <p className="text-2xl text-text-primary leading-relaxed font-medium italic">
              "{caseItem.conclusion}"
            </p>
          </motion.div>

          {/* Other Cases */}
          <div className="pt-24 border-t border-border">
            <h2 className="text-sm font-black text-text-muted mb-12 uppercase tracking-[0.2em]">Outros Cases de Sucesso</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {casesData.filter(c => c.id !== caseItem.id).slice(0, 3).map((c) => (
                <Link 
                  key={c.id} 
                  to={`/cases/${c.id}`}
                  className="group bg-white border-2 border-border rounded-[40px] overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={c.image} 
                      alt={c.client} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-3 font-mono">{c.industry}</div>
                    <h3 className="text-xl font-black text-text-primary group-hover:text-primary transition-colors line-clamp-2 leading-tight mb-4">{c.client}</h3>
                    <div className="flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver case <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-24 md:py-32 px-5 md:px-[52px] relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -bottom-[400px] -left-[200px] pointer-events-none" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-[clamp(32px,5vw,56px)] font-black text-white tracking-[-2px] leading-[1] mb-8">
              Pronto para ser o nosso próximo case?
            </h2>
            <p className="text-xl text-white/60 font-light">
              Agende uma conversa estratégica e descubra como nossa squad pode acelerar sua operação digital.
            </p>
          </div>
          <Link to="/contato" className="inline-flex items-center gap-3 bg-primary text-white px-10 py-6 rounded-2xl font-black text-lg transition-all duration-300 hover:bg-primary-dark hover:-translate-y-1 hover:shadow-2xl group">
            Agendar conversa <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
