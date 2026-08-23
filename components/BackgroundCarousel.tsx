"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function BackgroundCarousel({
  images,
  intervalMs = 5000,
}: {
  images: string[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images.length;

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, count, intervalMs]);

  if (count === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <div
      className="hero-bg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <div
          key={src}
          className={`hero-bg-slide${i === index ? " active" : ""}`}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="760px"
            priority={i === 0}
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
      <div className="hero-overlay" />

      {count > 1 && (
        <>
          <button
            className="hero-arrow hero-arrow-prev"
            onClick={prev}
            aria-label="Previous photo"
          >
            &#8249;
          </button>
          <button
            className="hero-arrow hero-arrow-next"
            onClick={next}
            aria-label="Next photo"
          >
            &#8250;
          </button>
          <div className="hero-dots">
            {images.map((src, i) => (
              <button
                key={src}
                className={`hero-dot${i === index ? " active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
