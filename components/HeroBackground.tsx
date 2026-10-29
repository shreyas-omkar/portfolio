import Image from "next/image";

// A single photo behind the splash intro: a tighter crop for narrow
// screens, a wider one once there's room for it. Swapped with a CSS media
// query (see .hero-bg-mobile / .hero-bg-desktop in globals.css), not JS,
// since it's a fixed pair, not a carousel.
export function HeroBackground({
  mobileSrc,
  desktopSrc,
}: {
  mobileSrc: string;
  desktopSrc: string;
}) {
  return (
    <div className="hero-bg">
      <div className="hero-bg-slide hero-bg-mobile">
        <Image
          src={mobileSrc}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 0px"
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-bg-slide hero-bg-desktop">
        <Image
          src={desktopSrc}
          alt=""
          fill
          sizes="(min-width: 641px) 100vw, 0px"
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-overlay" />
    </div>
  );
}
