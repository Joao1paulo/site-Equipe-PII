import { technologies } from './siteData';

export default function Technologies() {
  return (
    <section className="section technologies" id="tecnologias">
      <div className="container">
        <div className="section-heading centered">
          <div className="section-kicker blue">Nosso arsenal</div>
          <h2>Tecnologias que dominamos</h2>
        </div>
        <div className="tech-grid">
          {technologies.map(({ icon: Icon, name, description }) => (
            <article className="tech-card" key={name}>
              <div className="tech-icon"><Icon size={28} /></div>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
