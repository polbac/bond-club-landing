"use client";

import { animate, stagger } from "framer-motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export function SplitText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current.querySelector(".sp")!);

      // Animate the words in the h1
      animate(
        words,
        { opacity: [0, 1], y: [2, 0] },
        {
          type: "spring",
          duration: 1,
          bounce: 0,
          delay: stagger(0.15),
        }
      );
    });
  }, [text]);

  return (
    <div className="split-container" ref={containerRef}>
      <p className="sp">{text}</p>
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
            .split-container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
  );
}
