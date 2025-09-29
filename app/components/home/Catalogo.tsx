"use client";
import { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Manojo } from "../../shapes/manojo";

export const Catalogo = () => {
  const container = useRef();
  useGSAP(
    () => {


      gsap.to(`.manojo-con`, {
        opacity: 1,
        duration: 1,

        scrollTrigger: {
          trigger: `.block-1`,
          start: `top 90%`,
          end: `bottom`,
          scrub: 1,
        },
        x: "-1000px",
        rotate: 50,
        y: -100
      });

      gsap.to(`.icon-flotante-1`, {
        opacity: 1,
        duration: 1,

        scrollTrigger: {
          trigger: `.block-1`,
          start: `top 90%`,
          end: `bottom`,
          scrub: 1,
        },
        x: "-900px",
        rotate: -90,
        y: -300
      });



      gsap.to(`.frases-flotantes-1`, {
        opacity: 1,
        duration: 1,

        scrollTrigger: {
          trigger: `.container-scroll`,
          start: `top 100%`,
          end: `bottom`,
          scrub: 1,
        },
        x: "-2500px",
        y: 200,
        rotate: -1
      });
      gsap.to(`.frases-flotantes-2`, {
        opacity: 1,
        duration: 1,

        scrollTrigger: {
          trigger: `.container-scroll`,
          start: `top 100%`,
          end: `bottom`,
          scrub: 1,
        },
        x: "-2000px",
        y: -100
      });

      gsap.to(`.frases-flotantes-3`, {
        opacity: 1,
        duration: 1,

        scrollTrigger: {
          trigger: `.container-scroll`,
          start: `top 100%`,
          end: `bottom`,
          scrub: 1,
        },
        x: "-2100px",
        y: 400
      });


      gsap.to(`.frases-flotantes-4`, {
        opacity: 1,
        duration: 1,

        scrollTrigger: {
          trigger: `.container-scroll`,
          start: `top 100%`,
          end: `bottom`,
          scrub: 1,
        },
        x: "-2100px",
        y: 400
      });

      gsap.to(`.block-1`, {
        duration: 1,

        scrollTrigger: {
          trigger: `.block-1`,
          start: `top 90%`,
          end: `bottom`,
          scrub: 1,
        },
        y: "-500px",
        opacity: 0,
        rotation: -20
      });

    },
    { scope: container }
  );
  return (
    <div className="section-catalogo" ref={container as never}>
      <div className="container-scroll flex">
        <div className="block-1 ">
          <div className="chip cartelera">cartelera</div>
          <div className="chip movil">móvil</div>
          <h1>
            con qué
            <br /> te vas
            <br />a encontrar
          </h1>
        </div>
        <div className="block-2">
          <div className="manojo-container">
            <div className='manojo-con'>
              <Manojo />
            </div>

            <img className="icon-flotante-1" src="/assets/shapes/persona_azul.svg" />

            <img className="frases-flotantes frases-flotantes-1" src="/assets/catalogo/genero.svg" />
            <img className="frases-flotantes frases-flotantes-2" src="/assets/catalogo/duracion.svg" />
            <img className="frases-flotantes frases-flotantes-3" src="/assets/catalogo/formato.svg" />
            <img className="frases-flotantes frases-flotantes-4" src="/assets/catalogo/lanzamiento.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
