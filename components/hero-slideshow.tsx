"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";

const SLIDE_MS = 2000;

export function HeroSlideshow({
  images,
}: {
  images: { src: StaticImageData; alt: string }[];
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (paused || prefersReduced || images.length < 2) return;

    const id = setInterval(() => {
      if (document.visibilityState === "visible") {
        setActive((i) => (i + 1) % images.length);
      }
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [paused, images.length]);

  return (
    <div
      className="photo-elegant relative aspect-[16/9] w-full overflow-hidden rounded-card bg-ink shadow-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((img, i) => (
        <Image
          key={img.alt}
          src={img.src}
          alt={img.alt}
          placeholder="blur"
          priority={i === 0}
          fill
          sizes="(max-width: 1024px) 100vw, 46vw"
          className={`object-cover ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {images.length > 1 && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
            {images.map((img, i) => (
              <button
                key={img.alt}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1} of ${images.length}`}
                aria-current={i === active}
                className={`h-1.5 rounded-full transition-all duration-300 ease-out ${
                  i === active
                    ? "w-5 bg-on-ink"
                    : "w-1.5 bg-on-ink/40 hover:bg-on-ink/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
