import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, ClipboardList, RefreshCw, BarChart2, ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SEO } from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

export function Methodology() {
  const principles = [
    { icon: Target, bg: 'bg-primary/25', text: 'Prioridade baseada em impacto real' },
    { icon: ClipboardList, bg: 'bg-success/15', text: 'Toda tarefa tem responsável e prazo' },
    { icon: RefreshCw, bg: 'bg-primary/20', text: 'Checkin semanal em todos os projetos' },
    { icon: BarChart2, bg: 'bg-warning/15', text: 'Reporte mensal com dados e análise real' },
    { icon: ShieldCheck, bg: 'bg-primary/20', text: 'Transparência total com o cliente' }
  ];

  const phases = [
    {
      num: '01',
      title: 'Diagnóstico',
      desc: 'Antes de qualquer ação, entendemos profundamente o negócio: canais existentes, tecnologia, dados históricos, posicionamento e concorrência. O diagnóstico elimina o achismo e cria a base para decidir onde investir energia.',
      chips: ['Análise de canais', 'Auditoria técnica', 'Mapeamento de dados', 'Análise de concorrência']
    },
    {
      num: '02',
      title: 'Planejamento estratégico',
      desc: 'Com o diagnóstico em mãos, definimos metas, KPIs, roadmap e prioridades com o cliente. Tudo documentado, com critérios de sucesso claros antes de executar qualquer coisa. Nada começa sem aprovação e alinhamento total.',
      chips: ['Definição de KPIs', 'Roadmap de ações', 'Priorização P1/P2/P3', 'Alinhamento de expectativas']
    },
    {
      num: '03',
      title: 'Execução estruturada',
      desc: 'O time executa com base em projeto organizado por módulos — cada tarefa com responsável, prazo e etapa definidos. Checkin semanal garante que nada fique parado por mais de 7 dias. Bloqueadores são resolvidos proativamente, não escondidos.',
      chips: ['Kanban por módulos', 'Checkin semanal', 'Rastreabilidade total', 'Gestão de bloqueadores']
    },
    {
      num: '04',
      title: 'Reporte e análise mensal',
      desc: 'Todo mês: relatório consolidado por canal, reunião de alinhamento e plano para o próximo mês. Não entregamos só o que aconteceu — entregamos o que fazer a seguir, com dados concretos para embasar cada decisão.',
      chips: ['Reporte consolidado', 'Reunião mensal', 'Planejamento do próximo mês']
    },
    {
      num: '05',
      title: 'Crescimento contínuo',
      desc: 'A YAV é parceira de longo prazo. Revisamos estratégia, expandimos canais e escalamos a operação conforme o negócio evolui. O trabalho não termina quando a loja vai ao ar — ele se aprofunda e se transforma.',
      chips: ['Expansão de canais', 'Revisão estratégica', 'Escala estruturada']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
    >
      <SEO 
        title="Metodologia" 
        description="Conheça o Método YAV: 5 fases construídas para garantir execução, resultado e eficiência contínua." 
      />
      <section className="pt-[130px] pb-[72px] px-5 md:px-[52px] bg-accent grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-14 items-center relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[60px] -top-[120px] -right-[80px] pointer-events-none opacity-90" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-4 font-mono bg-primary/20 text-white/85 border border-primary/35 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/70">
            Metodologia
          </div>
          <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-white mb-3.5">
            Sem achismo. Cada ação tem razão e rastreabilidade.
          </h1>
          <p className="text-base font-light text-white/70 leading-[1.78] max-w-[540px]">
            5 fases construídas para garantir execução, resultado e eficiência contínua — em qualquer serviço contratado.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[20px] p-[26px] relative z-10">
          <p className="text-[12px] font-bold tracking-[0.16em] uppercase text-white/50 mb-3 font-mono">
            Princípios que guiam o trabalho
          </p>
          {principles.map((pr, i) => (
            <div key={i} className="flex items-center gap-[11px] py-[9px] border-b border-white/5 last:border-b-0">
              <div className={twMerge("w-[30px] h-[30px] rounded-lg flex items-center justify-center shrink-0", pr.bg)}>
                <pr.icon className="w-3.5 h-3.5 text-white/90" />
              </div>
              <span className="text-[13px] text-white/70 font-normal">{pr.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-5 md:px-[52px] bg-background">
        <motion.h2 
          className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-text-primary mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          As 5 fases da nossa metodologia
        </motion.h2>

        <div className="flex flex-col">
          {phases.map((ph, i) => (
            <motion.div 
              key={i}
              className="grid grid-cols-[52px_1fr] md:grid-cols-[88px_1fr] gap-4 md:gap-7 py-7 md:py-9 border-b border-border items-start transition-all duration-300 hover:translate-x-1.5 last:border-b-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <div className="text-[36px] md:text-[52px] font-black text-primary/10 leading-none tracking-[-4px] text-right font-mono">
                {ph.num}
              </div>
              <div>
                <h3 className="text-[21px] font-bold text-text-primary tracking-[-0.3px] mb-2">
                  {ph.title}
                </h3>
                <p className="text-sm text-text-secondary font-light leading-[1.78] max-w-[580px] mb-3">
                  {ph.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {ph.chips.map((chip, j) => (
                    <span key={j} className="text-[12px] font-bold px-2.5 py-1 rounded-xl bg-primary-light text-primary font-mono tracking-[0.04em]">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-[#9B5BFF] py-[60px] md:py-20 px-5 md:px-[52px] flex flex-col md:flex-row items-center justify-between gap-9 relative overflow-hidden text-center md:text-left">
        <div className="absolute -top-[60px] -right-[60px] w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none" />
        <h2 className="text-[clamp(22px,3vw,40px)] font-extrabold text-white tracking-[-0.8px] leading-[1.08] max-w-[500px] relative">
          Quer ver esse método funcionando na prática?
        </h2>
        <Link to="/contato" className="inline-flex items-center gap-2 bg-accent text-white px-7 py-[13px] rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5">
          Agendar diagnóstico <ArrowRight className="w-3 h-3" />
        </Link>
      </section>
    </motion.div>
  );
}
