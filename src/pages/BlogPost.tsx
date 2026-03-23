import { motion } from 'motion/react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blog';

import { SEO } from '../components/SEO';

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
      <section className="pt-[130px] pb-[72px] px-5 md:px-[52px] bg-accent relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[60px] -top-[120px] -right-[80px] pointer-events-none opacity-90" />
        <div className="absolute inset-0 pointer-events-none z-0 grain-overlay opacity-35" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Voltar para o Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-primary-light px-2.5 py-1 rounded-lg font-mono">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-[13px] text-white/60 font-medium">
              <Calendar className="w-4 h-4" /> {post.date}
            </div>
            <div className="flex items-center gap-1.5 text-[13px] text-white/60 font-medium">
              <Clock className="w-4 h-4" /> {post.readTime}
            </div>
          </div>
          
          <h1 className="text-[clamp(36px,5vw,64px)] font-extrabold tracking-[-1.5px] leading-[1.06] text-white mb-6">
            {post.title}
          </h1>
          <p className="text-lg font-light text-white/70 leading-[1.78]">
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-5 md:px-[52px] bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="rounded-2xl overflow-hidden mb-12 shadow-lg"
          >
            <img src={post.image} alt={post.title} className="w-full aspect-[21/9] object-cover" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-text-secondary prose-p:font-light prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:font-bold prose-strong:text-text-primary"
          >
            {/* Simple markdown parsing for the mock content */}
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={i}>{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.match(/^\d+\.\s/)) {
                const items = paragraph.split('\n').map(item => item.replace(/^\d+\.\s/, ''));
                return (
                  <ol key={i} className="list-decimal pl-5 space-y-2">
                    {items.map((item, j) => {
                      const match = item.match(/\*\*(.*?)\*\*(.*)/);
                      if (match) {
                        return <li key={j}><strong>{match[1]}</strong>{match[2]}</li>;
                      }
                      return <li key={j}>{item}</li>;
                    })}
                  </ol>
                );
              }
              return <p key={i}>{paragraph}</p>;
            })}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
