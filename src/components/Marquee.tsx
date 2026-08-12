import { MARQUEE } from "@/data/content";

function MarqueeRow({ hidden }: { hidden?: boolean }) {
  return (
    <div className="marquee-row" aria-hidden={hidden}>
      {MARQUEE.map((item) => (
        <span key={item}>
          {item} <span className="marquee-plus">+</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <MarqueeRow />
        <MarqueeRow hidden />
      </div>
    </div>
  );
}
