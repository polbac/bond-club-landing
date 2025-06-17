"use client";
/* tslint:disable */
import { times } from "lodash";
import { useInViewport } from "../../hooks/useInViewport";
import { Jarron } from "../../shapes/jarron";
import { Estrella } from "../../shapes/estrella";
import { Manojo } from "../../shapes/manojo";
import { Manos4 } from "../../shapes/4manos";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const TOTAL_ELEMENTS = 100;
export const Hero = () => {
  const { elementRef, isInViewport } = useInViewport();

  const container = useRef();

  useGSAP(
    () => {
      function move1() {
        gsap.to(".shape-1", {
          x: -20 + Math.random() * 10,
          y: -20 + Math.random() * 10,
          rotate: -20 + Math.random() * 40,
          duration: 1 + Math.random() * 6,
          onComplete: move1,
          ease: "back.in",
        });
      }
      function move2() {
        gsap.to(".shape-2", {
          scale: 0.5 + Math.random() * 1,
          rotate: Math.random() * 360,
          duration: 2,
          onComplete: move2,
          ease: "expo",
        });
      }
      function move3() {
        gsap.to(".shape-3", {
          x: -20 + Math.random() * 10,
          y: -20 + Math.random() * 10,
          rotate: -20 + Math.random() * 40,
          duration: 1 + Math.random() * 6,
          onComplete: move3,
          ease: "back.in",
        });
      }
      function move4() {
        gsap.to(".shape-4", {
          x: -20 + Math.random() * 10,
          y: -20 + Math.random() * 10,
          rotate: -20 + Math.random() * 40,
          duration: 1 + Math.random() * 6,
          onComplete: move4,
          ease: "back.in",
        });
      }
      gsap.set(".shape", {
        scale: 0,
      });
      gsap.to(".shape-1", {
        scale: 1,
        y: 0,
        delay: 1.5,
        opacity: 1,
        onComplete: move1,
      });
      gsap.to(".shape-2", {
        scale: 1,
        y: 0,
        delay: 1.6,
        opacity: 1,
        onComplete: move2,
      });
      gsap.to(".shape-3", {
        scale: 1,
        y: 0,
        delay: 1.7,
        opacity: 1,
        onComplete: move3,
      });
      gsap.to(".shape-4", {
        scale: 1,
        x: -200 + Math.random() * 400,
        y: -200 + Math.random() * 400,
        rotate: -20 + Math.random() * 40,
        delay: 1.8,
        opacity: 1,
        onComplete: move4,
      });
      gsap.set(".busqueda", { x: -4000 });
      gsap.to(".busqueda", {
        opacity: 0.6,
        x: "20vw",
        duration: 2,
        ease: "expo.out",
      });

      gsap.set(".organizada", { x: 4000 });
      gsap.to(".organizada", {
        opacity: 0.6,
        x: 0,
        duration: 2,
        ease: "expo.out",
      });

      gsap.set(".narraciones", { x: -4000 });
      gsap.to(".narraciones", {
        opacity: 0.6,
        x: "20vw",
        duration: 2,
        ease: "expo.out",
      });

      gsap.set(".diversas", { x: 4000 });
      gsap.to(".diversas", {
        opacity: 0.6,
        x: 0,
        duration: 2,
        ease: "expo.out",
      });

      gsap.to(
        ".diversas:not(.diversas-0),.busqueda:not(.busqueda-0),.organizada:not(.organizada-0),.narraciones:not(.narraciones-0)",
        {
          opacity: 0,
          duration: 0.5,
          delay: 2,
        }
      );
      gsap.to(".diversas-0,.busqueda-0,.organizada-0,.narraciones-0", {
        opacity: 1,
        duration: 0.5,
        delay: 2,
      });

      gsap.to(".shape-1 ", {
        scrollTrigger: {
          trigger: ".hero",
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
        top: "-100px",
        right: "-20vw",
      });

      gsap.to(".shape-2 ", {
        scrollTrigger: {
          trigger: ".hero",
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
        top: "-500px",
        scale: 3,
        left: "-20vw",
      });

      gsap.to(".shape-3 ", {
        scrollTrigger: {
          trigger: ".hero",
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
        top: "-10px",
        right: "-5vw",
      });
      gsap.to(".shape-4 ", {
        scrollTrigger: {
          trigger: ".hero",
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
        top: "500px",
        scale: 3,
        left: "-20vw",
      });

      return () => {
        gsap.killTweensOf(".shape");
      };
    },
    { scope: container }
  );

  return (
    <section className="hero" ref={elementRef as never}>
      <div ref={container as never}>
        {times(TOTAL_ELEMENTS).map((index) => (
          <>
            <h1
              className={`busqueda busqueda-${index}`}
              style={{ left: `${index * 80 + 10}vh` }}
            >
              Búsqueda
            </h1>
            <h1
              className={`organizada organizada-${index}`}
              style={{ right: `${index * 80 + 35}vh` }}
            >
              Organizada
            </h1>
            <h1
              className={`narraciones narraciones-${index}`}
              style={{ left: `${index * 84}vh` }}
            >
              Narraciones
            </h1>
            <h1
              className={`diversas diversas-${index}`}
              style={{ right: `${index * 60 + 40}vh` }}
            >
              Diversas
            </h1>
          </>
        ))}
        <div className="shape shape-1">
          <Jarron />
        </div>
        <div className="shape shape-2">
          <Estrella />
        </div>
        <div className="shape shape-3">
          <Manos4 />
        </div>
        <div className="shape shape-4">
          <Manojo />
        </div>
      </div>
    </section>
  );
};
