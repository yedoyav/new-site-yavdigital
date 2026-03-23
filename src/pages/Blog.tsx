import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';
import { useState } from 'react';
import { blogPosts } from '../data/blog';
import { SEO } from '../components/SEO';

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
      <section className="pt-[130px] pb-[72px] px-5 md:px-[52px] bg-accent relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[60px] -top-[120px] -right-[80px] pointer-events-none opacity-90" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-xl mb-4 font-mono bg-primary/20 text-white/85 border border-primary/35 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/70 mx-auto">
            Blog YAV Digital
          </div>
          <h1 className="text-[clamp(36px,5vw,64px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-white mb-6">
            Insights para otimizar<br />sua operação.
          </h1>
          <p className="text-lg font-light text-white/70 leading-[1.78] max-w-2xl mx-auto">
            Estratégias, tendências e análises profundas sobre eficiência e inteligência no e-commerce e marketplaces.
          </p>
        </div>
      </section>

      <section className="py-12 px-5 md:px-[52px] bg-background border-b border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-text-secondary hover:bg-primary/5 border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
            />
            <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-5 md:px-[52px] bg-background">
        <div className="max-w-7xl mx-auto">
          {featuredPost && (
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="mb-16"
            >
              <Link to={`/blog/${featuredPost.id}`} className="group flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden border border-border transition-all duration-300 hover:shadow-[0_20px_40px_rgba(110,41,246,0.08)] hover:border-primary/30">
                <div className="w-full lg:w-3/5 overflow-hidden aspect-[16/10] lg:aspect-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[12px] font-bold tracking-wider uppercase text-primary bg-primary-light px-3 py-1.5 rounded-lg font-mono">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[13px] text-text-muted font-medium">
                      <Clock className="w-4 h-4" /> {featuredPost.readTime}
                    </div>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight tracking-[-1px] mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-text-secondary font-light leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                    <div className="flex items-center gap-1.5 text-sm text-text-muted font-medium">
                      <Calendar className="w-4 h-4" /> {featuredPost.date}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:text-primary-dark transition-colors">
                      Ler artigo completo <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 28 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="bg-white rounded-2xl overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(110,41,246,0.08)] hover:border-primary/30 group"
                >
                  <Link to={`/blog/${post.id}`} className="block overflow-hidden aspect-[16/10]">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-primary-light px-2.5 py-1 rounded-lg font-mono">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-[12px] text-text-muted font-medium">
                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                      </div>
                    </div>
                    <Link to={`/blog/${post.id}`} className="block mb-3">
                      <h3 className="text-xl font-bold text-text-primary leading-tight tracking-[-0.3px] group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-text-secondary font-light leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                      <div className="flex items-center gap-1.5 text-[12px] text-text-muted font-medium">
                        <Calendar className="w-3.5 h-3.5" /> {post.date}
                      </div>
                      <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-dark transition-colors">
                        Ler artigo <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-text-primary mb-2">Nenhum artigo encontrado</h3>
              <p className="text-text-secondary">Tente ajustar sua busca ou filtro de categoria.</p>
            </div>
          )}

          {regularPosts.length > 0 && (
            <div className="mt-16 text-center">
              <button className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-border bg-white text-text-primary font-semibold text-sm hover:bg-primary/5 hover:border-primary/30 transition-all">
                Carregar mais artigos
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-5 md:px-[52px] bg-accent relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-20" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-[-1px]">Fique por dentro das novidades</h2>
          <p className="text-white/70 mb-10 text-lg font-light">Assine nossa newsletter e receba insights exclusivos sobre e-commerce e marketplaces direto no seu e-mail.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/15 transition-all"
              required
            />
            <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
              Assinar agora
            </button>
          </form>
          <p className="text-white/40 text-xs mt-4 font-light">Prometemos não enviar spam. Você pode cancelar a qualquer momento.</p>
        </div>
      </section>
    </motion.div>
  );
}
