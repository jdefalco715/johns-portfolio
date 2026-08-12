import { ABOUT, ABOUT_ASIDE } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="wrap section-pad">
      <div className="section-grid" data-reveal>
        <div>
          <p className="speclabel">01 — About</p>
          <h2 className="section-heading">Who I am</h2>
        </div>
        <div className="about-body">
          {ABOUT.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="text-muted about-aside">{ABOUT_ASIDE}</p>
        </div>
      </div>
    </section>
  );
}
