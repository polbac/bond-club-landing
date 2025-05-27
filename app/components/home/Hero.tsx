"use client";
/* tslint:disable */
import Marquee from "react-fast-marquee";

import { Transition } from "../../components/Transition";

const shapes = [
  {
    svg: {
      file: "mano.svg",
      width: 268,
      height: 299,
    },
    video: {
      file: "forma1.mp4",
      width: 300,
      height: 300,
    },
    top: -5,
    left: 0,
    transition: "float1",
  },
  {
    svg: {
      file: "bota.svg",
      width: 268,
      height: 299,
    },
    video: {
      file: "forma2.mp4",
      width: 300,
      height: 300,
    },
    top: 60,
    left: 80,
    transition: "float2",
  },
  {
    svg: {
      file: "jarro.svg",
      width: 268,
      height: 299,
    },
    video: {
      file: "forma3.mp4",
      width: 300,
      height: 300,
    },
    top: 10,
    left: 80,
    transition: "float1",
  },
  {
    svg: {
      file: "huevo.svg",
      width: 209,
      height: 209,
    },
    video: {
      file: "forma4.mp4",
      width: 300,
      height: 300,
    },
    top: 60,
    left: 30,
    transition: "float2",
  },
  {
    svg: {
      file: "cara.svg",
      width: 300,
      height: 300,
    },
    video: {
      file: "forma5.mp4",
      width: 300,
      height: 300,
    },
    top: 55,
    left: 2,
    transition: "float1",
  },
  {
    svg: {
      file: "pija.svg",
      width: 400,
      height: 200,
    },
    video: {
      file: "forma5.mp4",
      width: 400,
      height: 400,
    },
    top: -15,
    left: 30,
    transition: "float2",
  },
  {
    svg: {
      file: "cuerpo.svg",
      width: 210,
      height: 400,
    },
    video: {
      file: "forma6.mp4",
      width: 400,
      height: 400,
    },
    top: 60,
    left: 0,
    transition: "float1 shape-6",
  },
];

const PHRASES = [
  "Unxs agitadores de la produccion audiovisual",
  "un Espacio de segundeo creativo",
  "El hibridaje de obras y las singularidades que las llevan a cabo",
  "Donde intercambiamos visiones sobre el mundo",
];

// const COLORS = ["#ffcfd2", "#003f88", "#40916c", "#ffcfd2"];

export const Hero = () => {
  return (
    <section className="hero">
      <h1 className="big-title">
        <Transition>
          <Marquee>
            <>
              BUSQUEDA <span>x</span> ORGANIZADA <span>x</span> NARRACIONES{" "}
              <span>x</span>
              DIVERSAS
            </>
          </Marquee>
        </Transition>
      </h1>

      <section className="section-generos">
        {shapes.map((m, index) => (
          <div
            key={`genero-${index}`}
            className={`shape ${m.transition}`}
            style={{
              width: m.svg.width,
              maskImage: `url(/assets/shapes/${m.svg.file})`,
              maskSize: `${m.svg.width}px ${m.svg.height}px`,
              top: `${m.top}%`,
              left: `${m.left}%`,
            }}
          >
            <video
              src={`/assets/videos/generos/${m.video.file}`}
              muted
              autoPlay
              loop
              height={m.video.height}
              width={m.video.width}
            />
          </div>
        ))}
      </section>

      <p className="bottom-block font-serif text-white">
        <Transition>
          <span>
            Seguí scrolleando
            <br />
            <i className="icono-arrow1-down"></i>
          </span>
        </Transition>
      </p>
    </section>
  );
};
