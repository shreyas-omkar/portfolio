"use client";

import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

// False on the server and for people who ask for reduced motion, so both get
// the plain scrollable list with a single copy of the rows.
const getSnapshot = () => !window.matchMedia(REDUCED_MOTION).matches;
const getServerSnapshot = () => false;

/**
 * A scrollable list that drifts upward on its own and loops seamlessly.
 * The rows are rendered twice; once the first copy has scrolled out, the
 * scroll position jumps back by exactly one copy. Hover, focus and touch
 * pause the drift so links stay easy to click, and it only runs while the
 * list is on screen.
 */
export function AutoScrollList({
  children,
  speed = 28,
}: {
  children: ReactNode;
  speed?: number;
}) {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const listRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const first = firstRef.current;
    if (!enabled || !list || !first) return;

    let raf = 0;
    let last = 0;
    let pos = list.scrollTop;
    let hovering = false;
    let touching = false;
    let visible = false;
    let resumeTimer: ReturnType<typeof setTimeout> | undefined;

    const frame = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
      last = now;
      if (hovering || touching || !visible) {
        pos = list.scrollTop;
      } else {
        pos += speed * dt;
        const loop = first.offsetHeight;
        if (loop > 0 && pos >= loop) pos -= loop;
        list.scrollTop = pos;
      }
      raf = requestAnimationFrame(frame);
    };

    const onEnter = () => (hovering = true);
    const onLeave = () => (hovering = false);
    const onTouchStart = () => {
      touching = true;
      clearTimeout(resumeTimer);
    };
    const onTouchEnd = () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => (touching = false), 2500);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      last = 0;
    });
    io.observe(list);

    list.addEventListener("mouseenter", onEnter);
    list.addEventListener("mouseleave", onLeave);
    list.addEventListener("focusin", onEnter);
    list.addEventListener("focusout", onLeave);
    list.addEventListener("touchstart", onTouchStart, { passive: true });
    list.addEventListener("touchend", onTouchEnd, { passive: true });
    list.addEventListener("touchcancel", onTouchEnd, { passive: true });
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resumeTimer);
      io.disconnect();
      list.removeEventListener("mouseenter", onEnter);
      list.removeEventListener("mouseleave", onLeave);
      list.removeEventListener("focusin", onEnter);
      list.removeEventListener("focusout", onLeave);
      list.removeEventListener("touchstart", onTouchStart);
      list.removeEventListener("touchend", onTouchEnd);
      list.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [enabled, speed]);

  return (
    <div className="contrib-list" ref={listRef}>
      <div ref={firstRef}>{children}</div>
      {enabled && (
        <div aria-hidden="true" inert>
          {children}
        </div>
      )}
    </div>
  );
}
