"use client";
import FloatingMangos from "../FloatingMangos";
import {
  motion,
  MotionValue,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const Monetizacion = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const [posY, setPosY] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    setPosY(current);
  });

  return (
    <div className="monetizacion" ref={ref}>
      <div>
        <FloatingMangos />
      </div>
      <div
        className="block-content"
        style={{ transform: `translate3d(0,${posY * 100}px),0` }}
      >
        <p>[NO SOMOS COMO LAS OTRAS PLATAFORMAS]</p>
        <h1 className="font-serif">
          Conocé nuestro revolucionario sistema de Monetización.
        </h1>
        <Link href={"/monetizacion"} className="home-button">
          <span>CONOCER MÁS</span>
        </Link>
        <video
          src="/assets/home/video-monetizacion.mp4?2"
          muted
          loop
          autoPlay
        />
      </div>

      <div
        className="atributo "
        style={{ transform: `rotate(${posY * -10}deg)` }}
      >
        Descentralizado
      </div>

      <div
        className="atributo "
        style={{ transform: `rotate(${posY * 15}deg)` }}
      >
        Transparente
      </div>

      <div
        className="atributo "
        style={{ transform: `rotate(${posY * -5}deg)` }}
      >
        Accesible
      </div>
    </div>
  );
};
