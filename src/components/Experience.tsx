import { EDUCATION, ROLES } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="wrap experience-pad">
      <div className="section-grid" data-reveal>
        <div>
          <p className="speclabel">02 — Track record</p>
          <h2 className="section-heading">Experience</h2>
          <p className="text-muted roles-note">
            Five years building customer-facing commerce interfaces.
          </p>
        </div>

        <ol className="roles-list">
          {ROLES.map((role) => (
            <li key={role.title} className="role-item">
              <div className="role-title-row">
                <h3 className="role-title">{role.title}</h3>
                <span className="role-title-spacer" />
                <span className="speclabel role-years">{role.years}</span>
              </div>
              <div className="role-tags">
                {role.brands.map((brand) => (
                  <span key={brand} className="tag tag-outline">
                    {brand}
                  </span>
                ))}
              </div>
              <ul className="role-bullets">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="role-bullet">
                    <span className="role-bullet-dash" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <div className="section-grid education-block" data-reveal>
        <div>
          <p className="speclabel">03 — Credentials</p>
          <h2 className="section-heading">Education</h2>
        </div>

        <div className="hairline-grid education-grid">
          {EDUCATION.map((entry) => (
            <div key={entry.title} className="education-cell">
              <p className="speclabel" style={{ letterSpacing: ".12em" }}>
                {entry.when}
              </p>
              <h4>{entry.title}</h4>
              <p>{entry.body}</p>
              {entry.note && <p className="text-muted education-note">{entry.note}</p>}
              {entry.link && (
                <a
                  className="education-link"
                  href={entry.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {entry.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
