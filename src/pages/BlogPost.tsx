import { motion } from 'motion/react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Bookmark, MessageCircle } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
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
    },
    "datePublished": "2024-01-01T00:00:00Z" // Placeholder, ideally from post data
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
    >
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        ogImage={post.image}
      />
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      
      <section className="pt-[140px] pb-[80px] px-5 md:px-[52px] bg-accent relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -top-[150px] -right-[100px] pointer-events-none opacity-90" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <Breadcrumbs items={[
              { label: 'Blog', path: '/blog' },
              { label: post.title }
            ]} />
          </div>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] font-black tracking-[0.2em] uppercase text-primary bg-primary-light px-3 py-1.5 rounded-xl font-mono">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-[13px] text-white/60 font-bold">
              <Calendar className="w-4 h-4" /> {post.date}
            </div>
            <div className="flex items-center gap-2 text-[13px] text-white/60 font-bold">
              <Clock className="w-4 h-4" /> {post.readTime}
            </div>
          </div>
          
          <h1 className="text-[clamp(36px,5vw,72px)] font-black tracking-[-3px] leading-[1] text-white mb-8">
            {post.title}
          </h1>
          <p className="text-xl font-light text-white/70 leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 px-5 md:px-[52px] bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="rounded-[40px] overflow-hidden mb-20 shadow-2xl border border-border"
          >
            <img src={post.image} alt={post.title} className="w-full aspect-[21/9] object-cover" loading="lazy" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_80px] gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="prose prose-xl max-w-none prose-headings:font-black prose-headings:tracking-tight prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-p:text-text-secondary prose-p:font-light prose-p:leading-relaxed prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-strong:font-black prose-strong:text-text-primary prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:p-8 prose-blockquote:rounded-2xl prose-blockquote:italic prose-img:rounded-3xl"
            >
              {/* Simple markdown parsing for the mock content */}
              {post.content.split('\n\n').map((paragraph, i) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={i} className="text-text-primary">{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.match(/^\d+\.\s/)) {
                  const items = paragraph.split('\n').map(item => item.replace(/^\d+\.\s/, ''));
                  return (
                    <ol key={i} className="list-decimal pl-6 space-y-4 my-8">
                      {items.map((item, j) => {
                        const match = item.match(/\*\*(.*?)\*\*(.*)/);
                        if (match) {
                          return <li key={j} className="text-text-secondary font-light"><strong>{match[1]}</strong>{match[2]}</li>;
                        }
                        return <li key={j} className="text-text-secondary font-light">{item}</li>;
                      })}
                    </ol>
                  );
                }
                return <p key={i} className="text-text-secondary font-light leading-relaxed mb-6">{paragraph}</p>;
              })}
            </motion.div>

            {/* Sticky Social Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-32 flex flex-col gap-4">
                <button className="w-14 h-14 rounded-2xl border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all duration-300 group">
                  <Share2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
                <button className="w-14 h-14 rounded-2xl border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all duration-300 group">
                  <Bookmark className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
                <button className="w-14 h-14 rounded-2xl border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all duration-300 group">
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-16 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-xl">
                  Y
                </div>
                <div>
                  <div className="text-sm font-bold text-text-muted uppercase tracking-widest mb-1">Escrito por</div>
                  <div className="text-xl font-black text-text-primary tracking-tight">Time YAV Digital</div>
                </div>
              </div>
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-primary font-black text-lg hover:translate-x-2 transition-transform"
              >
                Ver mais artigos <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
