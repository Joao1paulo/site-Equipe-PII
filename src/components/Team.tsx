import { members } from './siteData';

export default function Team() {
  return (
    <section className="section team" id="equipe">
      <div className="team-pattern" />
      <div className="container">
        <div className="section-heading centered">
          <div className="section-kicker orange">Nossa equipe</div>
          <h2>Conheça as mentes por trás da <span>Syncro</span></h2>
        </div>
        <div className="member-grid">
          {members.map((member, index) => (
            <article className={`member-card member-${member.theme} ${index % 2 === 1 ? 'member-offset' : ''}`} key={member.name}>
              <div className="member-initials">{member.initials}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
