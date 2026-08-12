import { PROFILE, PROJECTS } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="wrap projects-pad">
      <div data-reveal>
        <div className="projects-header">
          <div>
            <p className="speclabel">05 — Selected work</p>
            <h2 className="section-heading">Projects</h2>
          </div>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            style={{ letterSpacing: ".08em", textTransform: "uppercase" }}
          >
            All repositories →
          </a>
        </div>

        <div className="projects-list">
          {PROJECTS.map((project) => (
            <article key={project.num} className="projrow">
              <span className="speclabel projrow-index">{project.num}</span>
              <div className="projrow-titleblock">
                <h3 className="projrow-title">{project.name}</h3>
                <p className="speclabel projrow-status">{project.status}</p>
              </div>
              <div className="projrow-body">
                <p className="projrow-desc">{project.desc}</p>
                <div className="projrow-tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag tag-neutral">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary projrow-action"
              >
                Code →
              </a>
            </article>
          ))}

          <div className="text-muted projects-footer-row">
            <span className="projects-footer-label">More in progress</span>
            <span className="projects-footer-divider" />
          </div>
        </div>
      </div>
    </section>
  );
}
