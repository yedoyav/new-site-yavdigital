import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export function Layout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen flex flex-col relative">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1001] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Pular para o conteúdo principal
      </a>

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-[#9B5BFF] origin-left z-[1000]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />

      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[99] grain-overlay opacity-35" />
    </div>
  );
}
