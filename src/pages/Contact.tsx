import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Mail, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SEO } from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const newErrors: Record<string, string> = {};
    if (!data.name || (data.name as string).trim().length < 2) newErrors.name = 'Por favor, informe seu nome.';
    if (!data.company || (data.company as string).trim().length < 2) newErrors.company = 'Por favor, informe sua empresa.';
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email as string)) newErrors.email = 'Por favor, informe um e-mail válido.';
    if (!data.phone || (data.phone as string).replace(/\D/g, '').length < 10) newErrors.phone = 'Por favor, informe seu WhatsApp.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 8000);
    }, 1500);
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 6) {
      e.target.value = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
    } else if (v.length > 2) {
      e.target.value = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    } else if (v.length > 0) {
      e.target.value = `(${v}`;
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
        title="Contato" 
        description="Entre em contato com a YAV Digital e descubra como podemos otimizar sua operação de e-commerce e marketplaces." 
      />
      <section className="pt-[110px] md:pt-[130px] pb-[60px] md:pb-[96px] px-5 md:px-[52px] bg-accent grid grid-cols-1 md:grid-cols-[1fr_420px] gap-8 md:gap-[68px] items-start relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-4 font-mono bg-primary/20 text-white/85 border border-primary/35 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/70">
              Fale com a YAV
            </div>
            <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-white mb-3.5">
              Vamos conversar<br />sobre o seu negócio.
            </h1>
            <p className="text-base font-light text-white/70 leading-[1.78] max-w-[540px] mb-7">
              Sem compromisso. Uma conversa de 30 minutos pode revelar oportunidades que você ainda não viu na sua operação digital.
            </p>

            <div className="flex flex-col gap-2.5 mb-6">
              {[
                { icon: MessageCircle, bg: 'bg-[#E8F5E9]', title: 'WhatsApp', desc: 'Resposta em até 2h em horário comercial' },
                { icon: Mail, bg: 'bg-primary-light', title: 'E-mail', desc: 'contato@yavdigital.com.br' },
                { icon: Calendar, bg: 'bg-[#FFF0F6]', title: 'Agendar reunião', desc: 'Diagnóstico gratuito de 30 minutos' }
              ].map((ch, i) => (
                <div key={i} className="flex items-center gap-3.5 bg-white/5 border border-white/10 rounded-[10px] p-[14px_16px] transition-all duration-200 hover:translate-x-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:border-primary/40">
                  <div className={twMerge("w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0", ch.bg)}>
                    <ch.icon className="w-4 h-4 text-text-primary" />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold text-white mb-0.5">{ch.title}</h5>
                    <p className="text-[12px] text-white/60 font-light">{ch.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-[10px] p-5 border border-white/10">
              <h5 className="text-[12px] font-bold text-white mb-3">O que acontece depois?</h5>
              <ol className="flex flex-col gap-2">
                {[
                  'Reunião de diagnóstico (30 min, sem custo)',
                  'Proposta personalizada com escopo e valores',
                  'Kick-off — primeiras entregas em até 7 dias'
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[13px] text-white/70 font-light">
                    <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[12px] font-extrabold shrink-0 font-mono">
                      {i + 1}
                    </div>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeRight}
        >
          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-[20px] p-6 md:p-[34px] border border-border shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            noValidate
          >
            <h3 className="text-[19px] font-extrabold text-text-primary mb-1 tracking-[-0.3px]">
              Solicitar diagnóstico gratuito
            </h3>
            <p className="text-[13px] text-text-muted font-light mb-5">
              Preencha e nossa equipe entra em contato em até 1 dia útil.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-[12px] font-bold text-text-secondary mb-1.5 tracking-[0.04em] uppercase font-mono">
                  Nome <span className="text-error">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Seu nome" 
                  className={twMerge(
                    "w-full p-[10px_14px] border-[1.5px] rounded-xl font-sans text-sm text-text-primary bg-background transition-all duration-200 outline-none",
                    errors.name ? "border-error" : "border-black/10 focus:border-primary focus:shadow-[0_0_0_3px_rgba(110,41,246,0.08)]"
                  )}
                  onChange={() => setErrors(e => ({ ...e, name: '' }))}
                />
                {errors.name && <span className="text-[12px] text-error mt-1">{errors.name}</span>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="company" className="text-[12px] font-bold text-text-secondary mb-1.5 tracking-[0.04em] uppercase font-mono">
                  Empresa <span className="text-error">*</span>
                </label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  placeholder="Nome da empresa" 
                  className={twMerge(
                    "w-full p-[10px_14px] border-[1.5px] rounded-xl font-sans text-sm text-text-primary bg-background transition-all duration-200 outline-none",
                    errors.company ? "border-error" : "border-black/10 focus:border-primary focus:shadow-[0_0_0_3px_rgba(110,41,246,0.08)]"
                  )}
                  onChange={() => setErrors(e => ({ ...e, company: '' }))}
                />
                {errors.company && <span className="text-[12px] text-error mt-1">{errors.company}</span>}
              </div>
            </div>

            <div className="flex flex-col mb-2.5">
              <label htmlFor="email" className="text-[12px] font-bold text-text-secondary mb-1.5 tracking-[0.04em] uppercase font-mono">
                E-mail <span className="text-error">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="seu@email.com.br" 
                className={twMerge(
                  "w-full p-[10px_14px] border-[1.5px] rounded-xl font-sans text-sm text-text-primary bg-background transition-all duration-200 outline-none",
                  errors.email ? "border-error" : "border-black/10 focus:border-primary focus:shadow-[0_0_0_3px_rgba(110,41,246,0.08)]"
                )}
                onChange={() => setErrors(e => ({ ...e, email: '' }))}
              />
              {errors.email && <span className="text-[12px] text-error mt-1">{errors.email}</span>}
            </div>

            <div className="flex flex-col mb-2.5">
              <label htmlFor="phone" className="text-[12px] font-bold text-text-secondary mb-1.5 tracking-[0.04em] uppercase font-mono">
                WhatsApp <span className="text-error">*</span>
              </label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="(11) 99999-9999" 
                className={twMerge(
                  "w-full p-[10px_14px] border-[1.5px] rounded-xl font-sans text-sm text-text-primary bg-background transition-all duration-200 outline-none",
                  errors.phone ? "border-error" : "border-black/10 focus:border-primary focus:shadow-[0_0_0_3px_rgba(110,41,246,0.08)]"
                )}
                onChange={(e) => {
                  handlePhoneInput(e);
                  setErrors(err => ({ ...err, phone: '' }));
                }}
              />
              {errors.phone && <span className="text-[12px] text-error mt-1">{errors.phone}</span>}
            </div>

            <div className="flex flex-col mb-2.5">
              <label htmlFor="service" className="text-[12px] font-bold text-text-secondary mb-1.5 tracking-[0.04em] uppercase font-mono">
                Serviço de interesse
              </label>
              <div className="relative">
                <select 
                  id="service" 
                  name="service" 
                  className="w-full p-[10px_14px] border-[1.5px] border-black/10 rounded-xl font-sans text-sm text-text-primary bg-background transition-all duration-200 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(110,41,246,0.08)] appearance-none pr-9"
                >
                  <option value="">Selecione...</option>
                  <option>Implantação de E-commerce</option>
                  <option>Gestão de Marketplace</option>
                  <option>Gestão de E-commerce</option>
                  <option>Gestão de ADS</option>
                  <option>Cadastro de Produtos</option>
                  <option>Mais de um serviço (Combo)</option>
                  <option>Ainda não sei — quero orientação</option>
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3D3B52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-2.5">
              <label htmlFor="platform" className="text-[12px] font-bold text-text-secondary mb-1.5 tracking-[0.04em] uppercase font-mono">
                Plataforma / Canal atual
              </label>
              <input 
                type="text" 
                id="platform" 
                name="platform" 
                placeholder="Ex: VTEX, Mercado Livre, Shopify..." 
                className="w-full p-[10px_14px] border-[1.5px] border-black/10 rounded-xl font-sans text-sm text-text-primary bg-background transition-all duration-200 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(110,41,246,0.08)]"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="challenge" className="text-[12px] font-bold text-text-secondary mb-1.5 tracking-[0.04em] uppercase font-mono">
                Qual é o seu principal desafio?
              </label>
              <textarea 
                id="challenge" 
                name="challenge" 
                placeholder="O que está travando a eficiência da sua operação?" 
                className="w-full p-[10px_14px] border-[1.5px] border-black/10 rounded-[10px] font-sans text-sm text-text-primary bg-background transition-all duration-200 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(110,41,246,0.08)] min-h-[80px] resize-y"
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-[13px] rounded-xl font-semibold text-[15px] transition-all duration-200 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(110,41,246,0.32)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mb-1"
            >
              {status === 'loading' ? (
                <>
                  <span>Enviando</span>
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin ml-1" />
                </>
              ) : (
                <>
                  Solicitar diagnóstico gratuito
                  <ArrowRight className="w-3 h-3" />
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-3.5 bg-success/10 border border-success/25 rounded-[10px] text-[#00965F] text-sm font-bold mt-1 flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                Recebemos seu diagnóstico!
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-3.5 bg-error/10 border border-error/20 rounded-[10px] text-error text-sm font-bold mt-1 flex items-center justify-center gap-2"
              >
                <AlertCircle className="w-4 h-4" />
                Ocorreu um erro. Tente novamente.
              </motion.div>
            )}

            <p className="text-[12px] text-text-muted text-center mt-2 font-light">
              Sem spam. Seus dados ficam apenas com a YAV Digital.
            </p>
          </form>
        </motion.div>
      </section>
    </motion.div>
  );
}
