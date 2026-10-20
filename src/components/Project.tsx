import { ArrowRight, Globe2 } from 'lucide-react';

export default function Project() {
  return (
    <section className="section project" id="projeto">
      <div className="container">
        <div className="project-card">
          <div className="project-accent" />
          <div className="project-image">
            <div className="project-overlay" />
            <div className="project-labels"><span>IoT</span><span>YOLO</span></div>
            <strong>SmarTraffic</strong>
          </div>
          <div className="project-copy">
            <div className="project-title"><Globe2 size={25} /><h2>Projeto em destaque</h2></div>
            <p>Nosso projeto atual, o <strong>SmarTraffic</strong>, propõe um sistema inteligente para cruzamentos urbanos orientado por visão computacional.</p>
            <p>Diferente dos semáforos tradicionais com temporizadores fixos, utilizamos câmeras e <em>Edge Computing</em> para detectar e contar veículos em tempo real. Os dados ajustam dinamicamente os tempos dos semáforos, reduzindo filas, tempo de espera e emissão de gases poluentes nas cidades.</p>
            <button className="button button-blue">Detalhes do projeto <ArrowRight size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
