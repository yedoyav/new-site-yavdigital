import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export function Layout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-[#9B5BFF] origin-left z-[1000]"
        style={{ scaleX }}
      />

      {/* Custom Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full bg-primary mix-blend-normal opacity-70 hidden md:block"
        animate={{
          x: mousePosition.x - (isHovering ? 2.5 : 5),
          y: mousePosition.y - (isHovering ? 2.5 : 5),
          width: isHovering ? 5 : 10,
          height: isHovering ? 5 : 10,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full border-[1.5px] border-primary hidden md:block"
        animate={{
          x: mousePosition.x - (isHovering ? 25 : 17),
          y: mousePosition.y - (isHovering ? 25 : 17),
          width: isHovering ? 50 : 34,
          height: isHovering ? 50 : 34,
          opacity: isHovering ? 0.45 : 0.3,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.35 }}
      />

      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[99] grain-overlay opacity-35" />
    </div>
  );
}
