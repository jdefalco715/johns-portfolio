import { Fragment } from "react";
import { HERO_INTRO, PROFILE, SPEC_SHEET } from "@/data/content";
import Blueprint from "./Blueprint";

const rise = (duration: string, delay: string): React.CSSProperties => ({
  ["--rise-duration" as string]: duration,
  ["--rise-delay" as string]: delay,
});

export default function Hero() {
  return (
    <section id="top" className="hero wrap">
      <div>
        <p className="speclabel hero-availability hero-anim" style={rise(".7s", "0s")}>
          <span className="hero-dot" />
          {PROFILE.location} — {PROFILE.availability}
        </p>

        <h1 className="hero-heading">
          <span className="hero-anim" style={rise(".8s", ".08s")}>Front end</span>
          <span className="accent hero-anim" style={rise(".8s", ".18s")}>developer</span>
        </h1>

        <div className="hero-divider" />

        <p className="hero-intro hero-anim" style={rise(".8s", ".38s")}>
          {HERO_INTRO}
        </p>

        <div className="hero-actions hero-anim" style={rise(".8s", ".46s")}>
          <Blueprint
            as="a"
            href="#projects"
            className="btn btn-primary"
            style={{ padding: "11px 22px", letterSpacing: ".08em", textTransform: "uppercase" }}
          >
            View projects
          </Blueprint>
          <a
            href="#contact"
            className="btn btn-secondary"
            style={{ padding: "11px 22px", letterSpacing: ".08em", textTransform: "uppercase" }}
          >
            Get in touch
          </a>
        </div>
      </div>

      <Blueprint className="spec-sheet hero-anim" style={rise(".9s", ".5s")}>
        <p className="speclabel spec-sheet-title">Spec sheet</p>
        <dl>
          {SPEC_SHEET.map(([key, value]) => (
            <Fragment key={key}>
              <dt className="speclabel">{key}</dt>
              <dd>{value}</dd>
            </Fragment>
          ))}
        </dl>
        <div className="spec-sheet-divider" />
        <div className="spec-sheet-links">
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`mailto:${PROFILE.email}`}>Email</a>
        </div>
      </Blueprint>
    </section>
  );
}
