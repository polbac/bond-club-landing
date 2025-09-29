"use client";

import { useRef } from "react";
import Marquee from "react-fast-marquee";
import { Ojo } from "../../shapes/ojo";
import { Surfer } from "../../shapes/surfer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const QueEs = () => {
  const container = useRef();

  useGSAP(
    () => {
      [1, 2, 3, 4, 5, 6].map((item) => {
        gsap.to(`.tt-${item}`, {
          opacity: 1,
          duration: 0.2 * 3,

          scrollTrigger: {
            trigger: `.cont`,
            start: `top ${100 - item * 15}%`,
            end: `bottom`,
            scrub: 1,
          },
        });
      });

      gsap.to(`.surfer`, {
        opacity: 1,
        duration: 1,
        right: "900px",
        top: "50%",
        scrollTrigger: {
          trigger: `.cont`,
          start: `top 90%`,
          end: `bottom`,
          scrub: 1,
        },
        rotate: 20,
      });

    },
    { scope: container }
  );

  return (
    <div className="section-que-es" ref={container as never} style={{ overflow: "hidden" }}>
      <div className="cont">
        <div className="marqueeee">
          <Marquee>
            <p className="text-center font-serif marquee flex">
              <>¿Qué es todo esto ?</>
              <Ojo />
            </p>
            <p className="text-center font-serif marquee flex">
              <>¿Qué es todo esto ?</>
              <Ojo />
            </p>
          </Marquee>
        </div>
        <div className="surfer">
          <Surfer />
        </div>
        <div className="que-es-text">
          <p className="tt-2 tt">
            Creemos en expandir la nocion de obra,
          </p>
          <p className="tt-2 tt">
            de espectador y de autor.
          </p>
          <p className="tt-3 tt">
            Buscamos lo multiple
          </p>
          <p className="tt-3 tt">
            y diverso dentro de los formatos de creacion,
          </p>
          <p className="tt-4 tt">
            poder establacer una resistencia novedosa
          </p>
          <p className="tt-4 tt">
            entre la imagen y la idea.
          </p>

        </div>

      </div>
    </div>
  );
};
