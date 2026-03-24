import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Search, Sparkles, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { blogPosts } from '../data/blog';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

export function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const regularPosts = filteredPosts.slice(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
    >
      <SEO 
        title="Blog" 
        description="Insights, estratégias e novidades sobre e-commerce, marketplaces e tecnologia para o seu negócio." 
      />
      
      <section className="pt-[140px] pb-[80px] px-5 md:px-[52px] bg-accent relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -top-[150px] -right-[100px] pointer-events-none opacity-90" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10 max-w-[800px] mx-auto">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Blog' }
            ]} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-6 font-mono bg-primary/20 text-white/85 border border-primary/35 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/70 mx-auto">
              Insights & Estratégia
            </div>
            <h1 className="text-[clamp(36px,5vw,64px)] font-extrabold tracking-[-2px] leading-[1.02] text-white mb-6">
              Conhecimento para <em className="text-primary not-italic text-glow">acelerar</em> seu negócio.
            </h1>
            <p className="text-lg font-light text-white/70 leading-relaxed max-w-2xl mx-auto">
              Estratégias, tendências e análises profundas sobre eficiência e inteligência no e-commerce e marketplaces.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-5 md:px-[52px] bg-background border-b border-border sticky top-[72px] z-30 backdrop-blur-md bg-white/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                    : 'bg-white text-text-secondary hover:bg-primary/5 border border-border hover:border-primary/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-border bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-sm font-medium"
            />
            <Search className="w-4 h-4 text-text-muted absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-5 md:px-[52px] bg-background">
        <div className="max-w-7xl mx-auto">
          {featuredPost && selectedCategory === 'Todos' && !searchTerm && (
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="mb-24"
            >
              <Link to={`/blog/${featuredPost.id}`} className="group flex flex-col lg:flex-row bg-white rounded-[40px] overflow-hidden border border-border transition-all duration-500 hover:shadow-[0_32px_80px_rgba(0,0,0,0.08)] hover:border-primary/30">
                <div className="w-full lg:w-3/5 overflow-hidden aspect-[16/10] lg:aspect-auto relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-6 left-6">
                    <div className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl shadow-xl flex items-center gap-2">
                      <Sparkles className="w-3 h-3" />
                      Destaque
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-2/5 p-8 lg:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-[11px] font-black tracking-[0.2em] uppercase text-primary bg-primary-light px-3 py-1.5 rounded-xl font-mono">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-2 text-[13px] text-text-muted font-bold">
                      <Clock className="w-4 h-4" /> {featuredPost.readTime}
                    </div>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-black text-text-primary leading-[1.1] tracking-[-2px] mb-6 group-hover:text-primary transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-text-secondary font-light leading-relaxed mb-10">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-text-muted font-bold">
                      <Calendar className="w-4 h-4" /> {featuredPost.date}
                    </div>
                    <span className="inline-flex items-center gap-2 text-base font-black text-primary group-hover:translate-x-2 transition-transform duration-300">
                      Ler agora <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
              {(featuredPost && selectedCategory === 'Todos' && !searchTerm ? regularPosts : filteredPosts).map((post, i) => (
                <motion.article
                  key={post.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 28 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="bg-white rounded-[32px] overflow-hidden border border-border flex flex-col transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_32px_64px_rgba(0,0,0,0.06)] hover:border-primary/30 group"
                >
                  <Link to={`/blog/${post.id}`} className="block overflow-hidden aspect-[16/10] relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] font-black tracking-[0.2em] uppercase text-primary bg-primary-light px-3 py-1.5 rounded-xl font-mono">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-[12px] text-text-muted font-bold">
                        <Clock className="w-4 h-4" /> {post.readTime}
                      </div>
                    </div>
                    <Link to={`/blog/${post.id}`} className="block mb-4">
                      <h3 className="text-2xl font-black text-text-primary leading-tight tracking-tight group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-[15px] text-text-secondary font-light leading-relaxed mb-8 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                      <div className="flex items-center gap-2 text-[12px] text-text-muted font-bold">
                        <Calendar className="w-4 h-4" /> {post.date}
                      </div>
                      <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-sm font-black text-primary group-hover:translate-x-1.5 transition-transform duration-300">
                        Ler <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-32">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-primary/30" />
              </div>
              <h3 className="text-3xl font-black text-text-primary mb-3 tracking-tight">Nenhum artigo encontrado</h3>
              <p className="text-text-secondary text-lg font-light">Tente ajustar sua busca ou filtro de categoria para encontrar o que procura.</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('Todos'); }}
                className="mt-8 text-primary font-bold hover:underline"
              >
                Limpar todos os filtros
              </button>
            </div>
          )}

          {filteredPosts.length > 6 && (
            <div className="mt-20 text-center">
              <button className="inline-flex items-center justify-center px-10 py-4 rounded-2xl border-2 border-border bg-white text-text-primary font-black text-base hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-xl hover:shadow-primary/20">
                Carregar mais artigos
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-5 md:px-[52px] bg-accent relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[48px] p-10 md:p-20 text-center">
            <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-primary/40 rotate-3">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-[-2px] leading-tight">
              Insights direto na sua <em className="text-primary not-italic">caixa de entrada.</em>
            </h2>
            <p className="text-xl text-white/70 mb-12 text-lg font-light max-w-2xl mx-auto">
              Assine nossa newsletter e receba estratégias exclusivas sobre e-commerce e marketplaces que não compartilhamos em nenhum outro lugar.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-grow">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="w-full px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-4 focus:ring-primary/30 focus:bg-white/15 transition-all text-lg font-medium"
                  required
                />
              </div>
              <button className="px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 group">
                Assinar agora
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
            <p className="text-white/30 text-sm mt-8 font-medium">
              Zero spam. Apenas conteúdo de valor. Cancele quando quiser.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
