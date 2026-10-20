import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { scrollToSection } from './siteData';

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-glow hero-glow-blue" />
      <div className="hero-glow hero-glow-orange" />
      <div className="hero-glow hero-glow-navy" />
      <div className="container hero-content">
        <div className="eyebrow pill"><Sparkles size={15} /> Inovação e Tecnologia</div>
        <h1>Nós somos a <span>Syncro</span></h1>
        <p>Uma equipe dedicada a transformar ideias complexas em soluções tecnológicas inteligentes e escaláveis para o mundo real.</p>
        <div className="hero-actions">
          <button className="button button-dark" onClick={() => scrollToSection('equipe')}>Conheça a equipe <ArrowRight size={18} /></button>
          <button className="button button-outline" onClick={() => scrollToSection('projeto')}>Ver projetos</button>
        </div>
      </div>
      <button className="scroll-cue" onClick={() => scrollToSection('quem-somos')} aria-label="Ir para quem somos"><ChevronDown /></button>
    </section>
  );
}
