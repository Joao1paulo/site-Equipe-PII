import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/syncro-logo.svg';
import { scrollToSection } from './siteData';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <button className="brand-button" onClick={() => navigate('home')} aria-label="Voltar ao início">
          <img src={logo} alt="Syncro" />
        </button>
        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
          <button onClick={() => navigate('quem-somos')}>Quem somos?</button>
          <button onClick={() => navigate('equipe')}>Equipe</button>
          <button onClick={() => navigate('tecnologias')}>Tecnologias</button>
          <button className="nav-cta" onClick={() => navigate('projeto')}>Projeto</button>
        </nav>
        <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
