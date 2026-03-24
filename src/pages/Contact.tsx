import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Mail, Calendar, CheckCircle2, AlertCircle, ShieldCheck, Clock, Zap } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
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

    try {
      // Substitua 'SEU_ID_DO_FORMSPREE' pelo ID do seu formulário no Formspree
      // Exemplo: https://formspree.io/f/xabcdefg
      const formspreeUrl = 'https://formspree.io/f/SEU_ID_DO_FORMSPREE'; 
      
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 8000);
      } else {
        // Se a URL for inválida (como o placeholder), simulamos o sucesso para não quebrar a UI durante o desenvolvimento
        if (formspreeUrl.includes('SEU_ID_DO_FORMSPREE')) {
          console.warn('Por favor, configure sua URL do Formspree em src/pages/Contact.tsx');
          setTimeout(() => {
            setStatus('success');
            form.reset();
            setTimeout(() => setStatus('idle'), 8000);
          }, 1000);
        } else {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
        }
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
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
      <section className="pt-[140px] pb-[100px] px-5 md:px-[52px] bg-accent relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -top-[150px] -right-[100px] pointer-events-none opacity-90" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 lg:gap-24 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <div className="mb-8">
              <Breadcrumbs items={[
                { label: 'Contato' }
              ]} />
            </div>
            <div className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] uppercase px-4 py-2 rounded-xl mb-8 font-mono bg-primary/20 text-white border border-primary/30">
              <Zap className="w-3 h-3 text-primary" /> Fale com a YAV
            </div>
            <h1 className="text-[clamp(40px,6vw,72px)] font-black tracking-[-3px] leading-[1] text-white mb-8">
              Vamos conversar<br />sobre o seu negócio.
            </h1>
            <p className="text-xl font-light text-white/70 leading-relaxed max-w-2xl mb-12">
              Sem compromisso. Uma conversa de 30 minutos pode revelar oportunidades que você ainda não viu na sua operação digital.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                { icon: MessageCircle, color: 'text-primary', title: 'WhatsApp', desc: 'Resposta em até 2h' },
                { icon: Mail, color: 'text-primary', title: 'E-mail', desc: 'contato@yavdigital.com.br' },
                { icon: Calendar, color: 'text-primary', title: 'Agendar reunião', desc: 'Conversa estratégica' },
                { icon: Clock, color: 'text-primary', title: 'Horário', desc: 'Seg-Sex: 09h às 18h' }
              ].map((ch, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:border-primary/40 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <ch.icon className={twMerge("w-5 h-5", ch.color)} />
                  </div>
                  <div>
                    <h5 className="text-sm font-black text-white mb-1 uppercase tracking-wider">{ch.title}</h5>
                    <p className="text-sm text-white/60 font-light">{ch.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
              <h5 className="text-sm font-black text-white mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" /> O que acontece depois?
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Conversa', desc: 'Reunião estratégica de 30 min' },
                  { title: 'Proposta', desc: 'Escopo e valores personalizados' },
                  { title: 'Kick-off', desc: 'Início em até 7 dias úteis' }
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="text-4xl font-black text-primary/20 mb-2 font-mono">0{i + 1}</div>
                    <h6 className="text-white font-bold mb-1">{step.title}</h6>
                    <p className="text-sm text-white/60 font-light leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeRight}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-white rounded-[40px] p-8 md:p-12 border border-border shadow-2xl relative"
              noValidate
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white rotate-12 shadow-xl hidden md:flex">
                <div className="text-center">
                  <div className="text-[10px] font-black uppercase tracking-tighter leading-none">Grátis</div>
                  <div className="text-lg font-black leading-none">30min</div>
                </div>
              </div>

              <h3 className="text-2xl font-black text-text-primary mb-2 tracking-tight">
                Solicitar conversa estratégica
              </h3>
              <p className="text-sm text-text-muted font-light mb-8">
                Preencha e nossa equipe entra em contato em até 1 dia útil.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-[11px] font-black text-text-muted mb-2 tracking-[0.1em] uppercase font-mono">
                      Nome <span className="text-error">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      autoComplete="name"
                      placeholder="Seu nome" 
                      className={twMerge(
                        "w-full p-4 border-2 rounded-2xl font-sans text-sm text-text-primary bg-background transition-all duration-300 outline-none",
                        errors.name ? "border-error" : "border-border focus:border-primary focus:shadow-[0_0_0_4px_rgba(110,41,246,0.1)]"
                      )}
                      onChange={() => setErrors(e => ({ ...e, name: '' }))}
                    />
                    {errors.name && <span className="text-[11px] text-error mt-1 font-bold">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="company" className="text-[11px] font-black text-text-muted mb-2 tracking-[0.1em] uppercase font-mono">
                      Empresa <span className="text-error">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      autoComplete="organization"
                      placeholder="Nome da empresa" 
                      className={twMerge(
                        "w-full p-4 border-2 rounded-2xl font-sans text-sm text-text-primary bg-background transition-all duration-300 outline-none",
                        errors.company ? "border-error" : "border-border focus:border-primary focus:shadow-[0_0_0_4px_rgba(110,41,246,0.1)]"
                      )}
                      onChange={() => setErrors(e => ({ ...e, company: '' }))}
                    />
                    {errors.company && <span className="text-[11px] text-error mt-1 font-bold">{errors.company}</span>}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[11px] font-black text-text-muted mb-2 tracking-[0.1em] uppercase font-mono">
                    E-mail <span className="text-error">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    autoComplete="email"
                    placeholder="seu@email.com.br" 
                    className={twMerge(
                      "w-full p-4 border-2 rounded-2xl font-sans text-sm text-text-primary bg-background transition-all duration-300 outline-none",
                      errors.email ? "border-error" : "border-border focus:border-primary focus:shadow-[0_0_0_4px_rgba(110,41,246,0.1)]"
                    )}
                    onChange={() => setErrors(e => ({ ...e, email: '' }))}
                  />
                  {errors.email && <span className="text-[11px] text-error mt-1 font-bold">{errors.email}</span>}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-[11px] font-black text-text-muted mb-2 tracking-[0.1em] uppercase font-mono">
                    WhatsApp <span className="text-error">*</span>
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    autoComplete="tel"
                    placeholder="(11) 99999-9999" 
                    className={twMerge(
                      "w-full p-4 border-2 rounded-2xl font-sans text-sm text-text-primary bg-background transition-all duration-300 outline-none",
                      errors.phone ? "border-error" : "border-border focus:border-primary focus:shadow-[0_0_0_4px_rgba(110,41,246,0.1)]"
                    )}
                    onChange={(e) => {
                      handlePhoneInput(e);
                      setErrors(err => ({ ...err, phone: '' }));
                    }}
                  />
                  {errors.phone && <span className="text-[11px] text-error mt-1 font-bold">{errors.phone}</span>}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="service" className="text-[11px] font-black text-text-muted mb-2 tracking-[0.1em] uppercase font-mono">
                    Serviço de interesse
                  </label>
                  <div className="relative">
                    <select 
                      id="service" 
                      name="service" 
                      className="w-full p-4 border-2 border-border rounded-2xl font-sans text-sm text-text-primary bg-background transition-all duration-300 outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(110,41,246,0.1)] appearance-none pr-12"
                    >
                      <option value="">Selecione...</option>
                      <option>Implementação de E-commerce</option>
                      <option>Gestão de Marketplace</option>
                      <option>Gestão de E-commerce</option>
                      <option>Gestão de ADS</option>
                      <option>Cadastro de Produtos</option>
                      <option>Mais de um serviço (Combo)</option>
                      <option>Ainda não sei — quero orientação</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="challenge" className="text-[11px] font-black text-text-muted mb-2 tracking-[0.1em] uppercase font-mono">
                    Qual é o seu principal desafio?
                  </label>
                  <textarea 
                    id="challenge" 
                    name="challenge" 
                    placeholder="O que está travando sua operação?" 
                    className="w-full p-4 border-2 border-border rounded-2xl font-sans text-sm text-text-primary bg-background transition-all duration-300 outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(110,41,246,0.1)] min-h-[100px] resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-5 rounded-2xl font-black text-base transition-all duration-300 hover:bg-primary-dark hover:-translate-y-1 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
                >
                  {status === 'loading' ? (
                    <>
                      <span>Enviando</span>
                      <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      Agendar conversa estratégica
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-4 bg-success/10 border border-success/20 rounded-2xl text-success text-sm font-bold flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Recebemos sua solicitação!
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-4 bg-error/10 border border-error/20 rounded-2xl text-error text-sm font-bold flex items-center justify-center gap-2"
                  >
                    <AlertCircle className="w-5 h-5" />
                    Ocorreu um erro. Tente novamente.
                  </motion.div>
                )}

                <p className="text-[11px] text-text-muted text-center font-light flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3 h-3" /> Seus dados estão seguros com a YAV Digital.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
