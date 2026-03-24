import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, ClipboardList, RefreshCw, BarChart2, ShieldCheck, Search, Map, PlayCircle, LineChart, TrendingUp, CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

export function Methodology() {
  const principles = [
    { icon: Target, bg: 'bg-primary/25', text: 'Prioridade baseada em impacto real' },
    { icon: ClipboardList, bg: 'bg-emerald-500/15', text: 'Toda tarefa tem responsável e prazo' },
    { icon: RefreshCw, bg: 'bg-primary/20', text: 'Checkin semanal em todos os projetos' },
    { icon: BarChart2, bg: 'bg-amber-500/15', text: 'Reporte mensal com dados e análise real' },
    { icon: ShieldCheck, bg: 'bg-primary/20', text: 'Transparência total com o cliente' }
  ];

  const phases = [
    {
      num: '01',
      icon: Search,
      title: 'Imersão',
      desc: 'Antes de qualquer ação, entendemos profundamente o negócio: canais existentes, tecnologia, dados históricos, posicionamento e concorrência. A imersão elimina o achismo e cria a base para decidir onde investir energia.',
      chips: ['Análise de canais', 'Auditoria técnica', 'Mapeamento de dados', 'Análise de concorrência']
    },
    {
      num: '02',
      icon: Map,
      title: 'Planejamento estratégico',
      desc: 'Com a imersão concluída, definimos metas, KPIs, roadmap e prioridades com o cliente. Tudo documentado, com critérios de sucesso claros antes de executar qualquer coisa. Nada começa sem aprovação e alinhamento total.',
      chips: ['Definição de KPIs', 'Roadmap de ações', 'Priorização P1/P2/P3', 'Alinhamento de expectativas']
    },
    {
      num: '03',
      icon: PlayCircle,
      title: 'Execução estruturada',
      desc: 'O time executa com base em projeto organizado por módulos — cada tarefa com responsável, prazo e etapa definidos. Checkin semanal garante que nada fique parado por mais de 7 dias. Bloqueadores são resolvidos proativamente, não escondidos.',
      chips: ['Kanban por módulos', 'Checkin semanal', 'Rastreabilidade total', 'Gestão de bloqueadores']
    },
    {
      num: '04',
      icon: LineChart,
      title: 'Reporte e análise mensal',
      desc: 'Todo mês: relatório consolidado por canal, reunião de alinhamento e plano para o próximo mês. Não entregamos só o que aconteceu — entregamos o que fazer a seguir, com dados concretos para embasar cada decisão.',
      chips: ['Reporte consolidado', 'Reunião mensal', 'Planejamento do próximo mês']
    },
    {
      num: '05',
      icon: TrendingUp,
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
      <section className="pt-[140px] pb-[80px] px-5 md:px-[52px] bg-accent grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -top-[150px] -right-[100px] pointer-events-none opacity-90" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Metodologia' }
            ]} />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-6 font-mono bg-primary/20 text-white/85 border border-primary/35 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/70">
              Metodologia
            </div>
            <h1 className="text-[clamp(36px,5vw,64px)] font-extrabold tracking-[-2px] leading-[1.02] text-white mb-6">
              Sem achismo. Cada ação tem razão e rastreabilidade.
            </h1>
            <p className="text-lg font-light text-white/70 leading-relaxed max-w-[580px]">
              Nossa metodologia de 5 fases foi construída para garantir execução impecável, resultados mensuráveis e eficiência contínua em qualquer serviço.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[32px] p-8 md:p-10 relative z-10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 mb-6 font-mono">
            Princípios que guiam o trabalho
          </p>
          <div className="space-y-4">
            {principles.map((pr, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-b-0 group">
                <div className={twMerge("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110", pr.bg)}>
                  <pr.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-[14px] text-white/80 font-medium">{pr.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 md:py-32 px-5 md:px-[52px] bg-background">
        <div className="max-w-[1000px] mx-auto">
          <motion.div 
            className="mb-16 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-text-primary mb-4">
              As 5 fases da nossa metodologia
            </h2>
            <p className="text-lg text-text-secondary font-light max-w-[600px]">
              Um processo cíclico focado em evolução constante e transparência total.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-[44px] top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12 md:space-y-20">
              {phases.map((ph, i) => (
                <motion.div 
                  key={i}
                  className="relative grid grid-cols-1 md:grid-cols-[88px_1fr] gap-6 md:gap-12 items-start group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                >
                  {/* Phase Number & Icon */}
                  <div className="relative z-10 flex flex-col items-center md:items-start">
                    <div className="w-[88px] h-[88px] rounded-[32px] bg-white border border-border flex items-center justify-center text-primary shadow-sm group-hover:border-primary group-hover:shadow-[0_20px_48px_rgba(110,41,246,0.1)] transition-all duration-500">
                      <ph.icon className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-4 -left-4 text-[64px] font-black text-primary/5 leading-none tracking-[-4px] font-mono pointer-events-none select-none">
                      {ph.num}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary font-mono bg-primary-light px-3 py-1 rounded-lg w-fit">
                        Fase {ph.num}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">
                        {ph.title}
                      </h3>
                    </div>
                    
                    <p className="text-[16px] text-text-secondary font-light leading-relaxed max-w-[700px] mb-6">
                      {ph.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {ph.chips.map((chip, j) => (
                        <span key={j} className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-background text-text-muted border border-border group-hover:border-primary/20 group-hover:text-primary/70 transition-colors font-mono uppercase tracking-wider">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-24 px-5 md:px-[52px] relative overflow-hidden">
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(110,41,246,0.12)_0%,transparent_65%)] pointer-events-none" />
        
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <h2 className="text-[clamp(28px,4vw,48px)] font-black text-white leading-[1.06] tracking-[-1.5px] mb-6">
            Quer ver esse método funcionando na <em className="text-primary not-italic text-glow">prática?</em>
          </h2>
          <p className="text-lg text-white/70 font-light mb-10 max-w-[600px] mx-auto">
            Agende uma conversa estratégica e descubra como nossa squad pode acelerar sua operação digital com método e cadência.
          </p>
          <Link 
            to="/contato" 
            className="inline-flex items-center gap-2 bg-primary text-white px-9 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(110,41,246,0.32)]"
          >
            Agendar conversa agora
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
