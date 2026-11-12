"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

interface GsapAnimationsProps {
  children: ReactNode;
}

export function GsapAnimations({ children }: GsapAnimationsProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Hero entrance timeline
      const heroItems = root.querySelectorAll(".hero-animate");
      if (heroItems.length > 0) {
        gsap.fromTo(
          heroItems,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "transform,opacity",
          }
        );
      }

      // Subtle hero background scale settle
      const heroMedia = root.querySelector(".hero-media");
      if (heroMedia) {
        gsap.fromTo(
          heroMedia,
          { scale: 1.05 },
          {
            scale: 1,
            duration: 1.4,
            ease: "power2.out",
            clearProps: "transform",
          }
        );
      }

      // Generic section reveal blocks using immediateRender: false so fast/mobile scrolling never traps elements invisible
      const revealBlocks = gsap.utils.toArray<HTMLElement>(".reveal-up", root);
      revealBlocks.forEach((el) => {
        gsap.from(el, {
          y: 22,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            once: true,
          },
        });
      });

      // Staggered card grids
      const grids = gsap.utils.toArray<HTMLElement>(".stagger-grid", root);
      grids.forEach((grid) => {
        const cards = grid.querySelectorAll(".stagger-card");
        if (cards.length === 0) return;

        gsap.from(cards, {
          y: 20,
          opacity: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: grid,
            start: "top 94%",
            once: true,
          },
        });
      });

      // Subtle image scale reveal
      const imageReveals = gsap.utils.toArray<HTMLElement>(
        ".image-reveal img",
        root
      );
      imageReveals.forEach((img) => {
        gsap.from(img, {
          scale: 1.05,
          duration: 1,
          ease: "power2.out",
          immediateRender: false,
          clearProps: "transform",
          scrollTrigger: {
            trigger: img,
            start: "top 95%",
            once: true,
          },
        });
      });

      ScrollTrigger.refresh();
    });

    return () => {
      mm.revert();
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
