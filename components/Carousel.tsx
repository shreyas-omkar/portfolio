"use client";

import { useEffect, useState, type ReactNode } from "react";

export function Carousel({
  slides,
  autoPlayMs = 6000,
}: {
  slides: ReactNode[];
  autoPlayMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, autoPlayMs);
    return () => clearInterval(id);
  }, [paused, count, autoPlayMs]);

  if (count === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="carousel-slide" key={i}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className="carousel-controls">
          <button
            className="carousel-arrow"
            onClick={prev}
            aria-label="Previous"
          >
            &#8249;
          </button>
          <div className="carousel-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === index ? " active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button className="carousel-arrow" onClick={next} aria-label="Next">
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}
