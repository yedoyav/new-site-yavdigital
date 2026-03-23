import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-accent px-5 md:px-[52px] pt-16 pb-9" role="contentinfo">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-11 mb-11">
        <div>
          <img
            src="https://yavdigital.com.br/wp-content/uploads/2025/02/yav-logo-1.webp"
            alt="YAV Digital — Especialistas em E-commerce e Marketplaces"
            className="h-6 mb-3 brightness-0 invert opacity-90"
            width="120"
            height="32"
            loading="lazy"
          />
          <p className="text-[13px] text-white/60 leading-relaxed max-w-[250px]">
            Especialistas em e-commerce e marketplaces. Participamos da estratégia, atuamos no tático e executamos a operação para marcas que buscam inteligência e eficiência.
          </p>
          <div className="flex gap-3 mt-4">
            <a 
              href="https://www.instagram.com/yavdigital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/80 transition-colors"
              aria-label="Siga-nos no Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/yavdigital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/80 transition-colors"
              aria-label="Conecte-se conosco no LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col">
          <h5 className="text-[12px] font-bold tracking-[0.18em] uppercase text-white/40 mb-3 font-mono">Serviços</h5>
          <ul className="flex flex-col gap-2" role="list">
            <li><Link to="/servicos/implantacao-ecommerce" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Implantação E-commerce</Link></li>
            <li><Link to="/servicos/gestao-marketplace" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Gestão de Marketplace</Link></li>
            <li><Link to="/servicos/gestao-ecommerce" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Gestão de E-commerce</Link></li>
            <li><Link to="/servicos/gestao-ads" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Gestão de ADS</Link></li>
            <li><Link to="/servicos/cadastro-produtos" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Cadastro de Produtos</Link></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h5 className="text-[12px] font-bold tracking-[0.18em] uppercase text-white/40 mb-3 font-mono">Plataformas</h5>
          <ul className="flex flex-col gap-2" role="list">
            <li><Link to="/plataformas" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Shopify</Link></li>
            <li><Link to="/plataformas" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">VTEX</Link></li>
            <li><Link to="/plataformas" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Wake</Link></li>
            <li><Link to="/plataformas" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Tray / Nuvemshop</Link></li>
            <li><Link to="/plataformas" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Mercado Livre</Link></li>
            <li><Link to="/plataformas" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Amazon</Link></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h5 className="text-[12px] font-bold tracking-[0.18em] uppercase text-white/40 mb-3 font-mono">YAV Digital</h5>
          <ul className="flex flex-col gap-2" role="list">
            <li><Link to="/" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Início</Link></li>
            <li><Link to="/cases" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Cases de Sucesso</Link></li>
            <li><Link to="/metodologia" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Como trabalhamos</Link></li>
            <li><Link to="/plataformas" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Plataformas</Link></li>
            <li><Link to="/blog" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Blog</Link></li>
            <li><Link to="/contato" className="text-[13px] text-white/60 hover:text-white/85 transition-colors font-semibold text-primary">Diagnóstico gratuito</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-white/5 text-[12px] text-white/45 gap-2 md:gap-0">
        <span>© {currentYear} YAV Digital. Todos os direitos reservados.</span>
        <div className="flex gap-[18px]">
          <Link to="/privacidade" className="hover:text-white/65 transition-colors">Política de Privacidade</Link>
          <Link to="/termos" className="hover:text-white/65 transition-colors">Termos de Uso</Link>
        </div>
      </div>
    </footer>
  );
}
