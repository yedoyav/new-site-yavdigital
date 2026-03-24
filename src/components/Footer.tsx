import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent px-5 md:px-[52px] pt-16 pb-9">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-11 mb-11">
        <div>
          <img
            src="https://yavdigital.com.br/wp-content/uploads/2025/02/yav-logo-1.webp"
            alt="YAV Digital"
            className="h-6 mb-3 brightness-0 invert opacity-90"
          />
          <p className="text-[13px] text-white/60 leading-relaxed max-w-[250px]">
            Especialistas em e-commerce e marketplaces. Participamos da estratégia, atuamos no tático e executamos a operação para marcas que buscam inteligência e eficiência.
          </p>
        </div>
        
        <div className="flex flex-col">
          <h5 className="text-[12px] font-bold tracking-[0.18em] uppercase text-white/40 mb-3 font-mono">Serviços</h5>
          <ul className="flex flex-col gap-2">
            <li><Link to="/servicos/implantacao-ecommerce" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Implementação E-commerce</Link></li>
            <li><Link to="/servicos/gestao-marketplace" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Gestão de Marketplace</Link></li>
            <li><Link to="/servicos/gestao-ecommerce" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Gestão de E-commerce</Link></li>
            <li><Link to="/servicos/gestao-ads" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Gestão de ADS</Link></li>
            <li><Link to="/servicos/cadastro-produtos" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Cadastro de Produtos</Link></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h5 className="text-[12px] font-bold tracking-[0.18em] uppercase text-white/40 mb-3 font-mono">Plataformas</h5>
          <ul className="flex flex-col gap-2">
            <li><Link to="/plataformas" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Shopify</Link></li>
            <li><Link to="/plataformas" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">VTEX</Link></li>
            <li><Link to="/plataformas" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Wake</Link></li>
            <li><Link to="/plataformas" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Tray / Nuvemshop</Link></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h5 className="text-[12px] font-bold tracking-[0.18em] uppercase text-white/40 mb-3 font-mono">YAV Digital</h5>
          <ul className="flex flex-col gap-2">
            <li><Link to="/metodologia" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Como trabalhamos</Link></li>
            <li><Link to="/cases" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Cases de Sucesso</Link></li>
            <li><Link to="/plataformas" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Plataformas</Link></li>
            <li><Link to="/contato" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Contato</Link></li>
            <li><Link to="/contato" className="text-[13px] text-white/60 hover:text-white/85 transition-colors">Conversa estratégica</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-white/5 text-[12px] text-white/45 gap-4 md:gap-0">
        <div className="flex items-center gap-6">
          <span>© {currentYear} YAV Digital. Todos os direitos reservados.</span>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/yavdigital/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Siga a YAV Digital no Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/yav-digital/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Siga a YAV Digital no LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="flex gap-[18px]">
          <Link to="#" className="hover:text-white/65 transition-colors">Privacidade</Link>
          <Link to="#" className="hover:text-white/65 transition-colors">Termos</Link>
        </div>
      </div>
    </footer>
  );
}
