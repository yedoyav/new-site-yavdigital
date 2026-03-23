import { motion } from 'motion/react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Target, Zap, TrendingUp, Building2, Layers } from 'lucide-react';
import { casesData } from '../data/cases';
import { SEO } from '../components/SEO';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

export function CaseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const caseItem = casesData.find(c => c.slug === slug);

  if (!caseItem) {
    return (
      <div className="min-h-screen pt-[130px] px-5 md:px-[52px] bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-text-primary mb-4">Case não encontrado</h1>
          <Link to="/cases" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Cases
          </Link>
        </div>
      </div>
    );
  }

  const caseSchema = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "name": caseItem.title,
    "description": caseItem.subtitle,
    "about": {
      "@type": "Thing",
      "name": caseItem.industry
    },
    "abstract": caseItem.introduction
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
    >
      <SEO 
        title={`${caseItem.title} | YAV Digital`}
        description={caseItem.subtitle}
        schema={caseSchema}
      />

      {/* Hero Section */}
      <section className="pt-[130px] pb-[72px] px-5 md:px-[52px] bg-[#0C0B16] relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[60px] -top-[120px] -right-[80px] pointer-events-none opacity-90" />
        <div className="absolute w-[320px] h-[320px] bg-[#9B5BFF]/10 rounded-full blur-[60px] -bottom-[60px] -left-[40px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10 max-w-[900px]">
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg bg-primary/20 text-white border border-primary/35">
              <Building2 className="w-3.5 h-3.5" />
              {caseItem.industry}
            </div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg bg-white/10 text-white/70 border border-white/15">
              <Layers className="w-3.5 h-3.5" />
              {caseItem.scope}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(28px,4vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-white mb-4">
            {caseItem.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl font-light text-white/75 leading-[1.7] max-w-[720px]">
            {caseItem.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 px-5 md:px-[52px] bg-background">
        <div className="max-w-[900px] mx-auto">
          {/* Introduction */}
          <motion.div 
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <h2 className="text-sm font-bold tracking-[0.12em] uppercase text-primary mb-4">Introdução</h2>
            <p className="text-base md:text-lg text-text-secondary leading-[1.8] whitespace-pre-line">
              {caseItem.introduction}
            </p>
          </motion.div>

          {/* Challenge */}
          <motion.div 
            className="mb-12 p-6 md:p-8 bg-gradient-to-br from-[#F8F5FF] to-white rounded-2xl border border-border"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-text-primary">O Desafio</h2>
            </div>
            <p className="text-base text-text-secondary leading-[1.8] whitespace-pre-line">
              {caseItem.challenge}
            </p>
          </motion.div>

          {/* Strategy */}
          <motion.div 
            className="mb-12 p-6 md:p-8 bg-gradient-to-br from-[#F0F7FF] to-white rounded-2xl border border-border"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#0EA5E9]" />
              </div>
              <h2 className="text-xl font-bold text-text-primary">A Estratégia</h2>
            </div>
            <p className="text-base text-text-secondary leading-[1.8] whitespace-pre-line">
              {caseItem.strategy}
            </p>
          </motion.div>

          {/* Results */}
          <motion.div 
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              <h2 className="text-xl font-bold text-text-primary">Resultados</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseItem.results.map((result, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-text-primary leading-[1.6]">{result}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div 
            className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-[#9B5BFF]/5 rounded-2xl border border-primary/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <h2 className="text-sm font-bold tracking-[0.12em] uppercase text-primary mb-4">Conclusão</h2>
            <p className="text-base text-text-secondary leading-[1.8] whitespace-pre-line">
              {caseItem.conclusion}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation & CTA */}
      <section className="bg-gradient-to-br from-primary to-[#9B5BFF] py-[60px] md:py-16 px-5 md:px-[52px] relative overflow-hidden">
        <div className="absolute -top-[60px] -right-[60px] w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none" />
        
        <div className="max-w-[900px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <Link 
              to="/cases"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Ver todos os cases
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-[clamp(22px,3vw,36px)] font-extrabold text-white tracking-[-0.8px] leading-[1.1] mb-2">
                Quer resultados similares?
              </h2>
              <p className="text-white/75 text-sm md:text-base max-w-[480px]">
                Vamos conversar sobre como podemos transformar sua operação digital.
              </p>
            </div>
            <Link 
              to="/contato"
              className="inline-flex items-center gap-2 bg-accent text-white px-7 py-[13px] rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5 shrink-0"
            >
              Falar com um especialista
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
