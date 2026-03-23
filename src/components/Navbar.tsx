import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { servicesData } from '../data/services';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos', hasDropdown: true },
    { name: 'Como Trabalhamos', path: '/metodologia' },
    { name: 'Cases', path: '/cases' },
    { name: 'Plataformas', path: '/plataformas' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      <nav
        className={twMerge(
          'fixed top-0 left-0 right-0 h-[68px] z-[800] flex items-center justify-between px-5 md:px-[52px] transition-all duration-300',
          isScrolled && 'bg-accent/95 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.06)]'
        )}
      >
        <Link to="/" className="hover:opacity-75 transition-opacity">
          <img
            src="https://yavdigital.com.br/wp-content/uploads/2025/02/yav-logo-1.webp"
            alt="YAV Digital"
            className="h-7 transition-all duration-300 brightness-0 invert opacity-90"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-[30px]">
          {navLinks.map((link) => (
            <li key={link.path} className={link.hasDropdown ? "relative group" : ""}>
              <Link
                to={link.path}
                className={twMerge(
                  'text-sm font-medium tracking-[0.01em] relative transition-colors duration-200 flex items-center gap-1 text-white hover:text-white/80',
                  'after:content-[""] after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300',
                  'hover:after:scale-x-100',
                  location.pathname === link.path && 'text-white after:scale-x-100'
                )}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />}
              </Link>
              
              {link.hasDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 w-[320px]">
                  <div className="bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-border p-2.5 flex flex-col gap-1 relative before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
                    {servicesData.map((svc) => (
                      <Link
                        key={svc.id}
                        to={`/servicos/${svc.id}`}
                        className="flex flex-col p-3 rounded-xl hover:bg-background transition-colors group/item"
                      >
                        <span className="text-sm font-bold text-text-primary group-hover/item:text-primary transition-colors mb-0.5">
                          {svc.title}
                        </span>
                        <span className="text-[12px] text-text-muted line-clamp-1">
                          {svc.subtitle}
                        </span>
                      </Link>
                    ))}
                    <div className="h-px bg-border my-1 mx-2" />
                    <Link
                      to="/servicos"
                      className="flex items-center justify-center gap-1.5 p-2.5 text-[13px] font-bold text-primary hover:bg-primary/5 rounded-xl transition-colors"
                    >
                      Ver todos os serviços <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </li>
          ))}
          <li>
            <Link
              to="/contato"
              className="inline-flex items-center gap-[7px] bg-primary text-white px-5 py-[9px] rounded-xl font-semibold text-[13px] transition-all duration-200 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(110,41,246,0.32)]"
            >
              Entre em contato
              <ArrowRight className="w-3 h-3" />
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden p-2 relative z-[801] text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={twMerge(
          'fixed inset-0 bg-accent z-[700] flex flex-col items-center justify-center gap-6 transition-all duration-500 overflow-y-auto py-20',
          isMobileMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'
        )}
      >
        {navLinks.map((link) => (
          <div key={link.path} className="flex flex-col items-center w-full px-8">
            {link.hasDropdown ? (
              <div className="flex flex-col items-center w-full">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-[26px] font-extrabold text-white hover:text-primary-light transition-colors tracking-tight flex items-center gap-2"
                >
                  {link.name}
                  <ChevronDown className={twMerge("w-6 h-6 transition-transform duration-300", isServicesOpen && "rotate-180")} />
                </button>
                <div 
                  className={twMerge(
                    "flex flex-col items-center gap-4 overflow-hidden transition-all duration-300 w-full",
                    isServicesOpen ? "max-h-[500px] mt-6 opacity-100" : "max-h-0 mt-0 opacity-0"
                  )}
                >
                  {servicesData.map((svc) => (
                    <Link
                      key={svc.id}
                      to={`/servicos/${svc.id}`}
                      className="text-base font-medium text-white/70 hover:text-white text-center"
                    >
                      {svc.title}
                    </Link>
                  ))}
                  <Link
                    to="/servicos"
                    className="text-sm font-bold text-primary mt-2"
                  >
                    Ver todos os serviços
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                to={link.path}
                className="text-[26px] font-extrabold text-white hover:text-primary-light transition-colors tracking-tight"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
        <Link
          to="/contato"
          className="inline-flex items-center gap-2 bg-primary text-white px-9 py-3.5 rounded-xl text-base font-bold mt-4 hover:bg-primary-dark transition-colors"
        >
          Entre em contato <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </>
  );
}
