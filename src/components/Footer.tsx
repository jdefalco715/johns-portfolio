import { PROFILE } from "@/data/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer-inner">
        <p className="speclabel" style={{ margin: 0 }}>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <p className="speclabel" style={{ margin: 0 }}>
          Built with Next.js · Designed in the open
        </p>
        <a href="#top" className="navlink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
