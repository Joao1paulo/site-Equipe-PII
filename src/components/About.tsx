import { Users } from 'lucide-react';

export default function About() {
  return (
    <section className="section about" id="quem-somos">
      <div className="container about-grid">
        <div className="about-copy">
          <div className="section-kicker orange">Quem somos nós?</div>
          <h2>Movidos pela curiosidade,<br /><span>guiados por dados.</span></h2>
          <p>Olá! Somos a <strong>Syncro</strong>, um grupo de estudantes e desenvolvedores apaixonados por tecnologia, originários da Faculdade de Tecnologia de Registro (Fatec).</p>
          <p>Nossa especialização abrange desde o desenvolvimento de sistemas até a aplicação de Inteligência Artificial e Visão Computacional. Acreditamos que a colaboração, o pensamento crítico e a inovação contínua são as chaves para resolver os desafios da sociedade moderna.</p>
          <div className="stats">
            <div><strong>5+</strong><span>Membros especializados</span></div>
            <div><strong>100%</strong><span>Foco em inovação</span></div>
          </div>
        </div>
        <div className="about-visual">
          <div className="visual-corner visual-corner-top" />
          <div className="visual-corner visual-corner-bottom" />
          <Users size={74} strokeWidth={1.4} />
          <strong>SYNCRO</strong>
        </div>
      </div>
    </section>
  );
}
