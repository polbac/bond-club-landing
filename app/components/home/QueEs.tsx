"use client";
import { Transition } from "../Transition";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
function Image({ image, body }: { image: string; body: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  return (
    <section
      className="img-container"
      style={{ backgroundImage: `url(/assets/home/${image})` }}
    >
      <div ref={ref}></div>
      <motion.p
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className={"main-body"}
      >
        {body}
      </motion.p>
    </section>
  );
}

const DATA = [
  {
    image: "que-es-produccion.jpg",
    body: "B.O.N.D no es solo una plataforma de streaming, es un enclave dentro de la produccion audiovisual. ",
  },
  {
    image: "que-es-multitud.jpg",
    body: "B.O.N.D no es solo una multitud, es un accidente audiovisual en curso. Somos una plataforma de streaming que busca desplazar la idea que tenemos sobre lo cinematográfico. ",
  },
];

export const QueEs = () => {
  return (
    <div className="que-es">
      <h1 className="text-center relative">
        <Transition>
          <>¿QUÉ ES?</>
        </Transition>
      </h1>
      {DATA.map((item) => (
        <Image key={item.image} image={item.image} body={item.body} />
      ))}
    </div>
  );
};
