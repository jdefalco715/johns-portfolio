import { SKILL_GROUPS } from "@/data/content";

export default function Capabilities() {
  return (
    <section id="capabilities" className="wrap capabilities-pad">
      <div className="capabilities-header">
        <p className="speclabel">04 — Toolkit</p>
        <h2 className="section-heading">Capabilities</h2>
      </div>

      <div className="hairline-grid capabilities-grid" data-reveal>
        {SKILL_GROUPS.map((group) => (
          <div key={group.num} className="capability-cell">
            <div className="capability-header-row">
              <span className="speclabel capability-letter">{group.num}</span>
              <h3 className="capability-title">{group.name}</h3>
            </div>
            <ul className="capability-list">
              {group.items.map((item) => (
                <li key={item} className="capability-item">
                  <span className="capability-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
