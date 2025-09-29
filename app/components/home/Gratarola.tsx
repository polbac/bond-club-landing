"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useInViewport } from "../../hooks/useInViewport";
import Marquee from "react-fast-marquee";
function transform(x: number, y: number, percent: number) {
  return {
    transform: `translate(${Number((percent as never) * x)}px, ${Number(
      (percent as never) * y
    )}px)`,
  };
}

export const Gratarola = () => {
  const ref = useRef(null);
  const { elementRef, isInViewport } = useInViewport();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const [posY, setPosY] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    setPosY(current);
  });

  let scale = 1 - (posY / 2);
  if (scale < 0) {
    scale = 0
  }
  return (
    <section className="gratarola block relative" ref={ref}>
      <div ref={elementRef as never}>

        <>
          <div className="wall block relative" style={{ "transform": `scale(${scale})` }}>
            <img
              src="/assets/gratarola/chaboncito.png"
              className="item chaboncito"
              style={{
                ...transform(150, 0, posY as never),
              }}
            />
            <video
              src="/assets/gratarola/mano.mp4"
              muted
              autoPlay
              loop
              className="item mano"
              style={{
                ...transform(150, 0, posY as never),
              }}
            />

            <video
              src="/assets/gratarola/mon.mp4"
              muted
              autoPlay
              loop
              className="item mon"
            />
            <img
              src="/assets/gratarola/skorpion.jpg"
              className="item skorpion"
            />
            <img src="/assets/gratarola/pizza.jpg" className="item pizza" />
            <img
              src="/assets/gratarola/dany.jpg"
              className="item dany"
              style={{ ...transform(80, -20, posY as never) }}
            />
            <img
              src="/assets/gratarola/trampa.png"
              className="item trampa"
              style={{ ...transform(-20, -50, posY as never) }}
            />
            <img
              src="/assets/gratarola/pablo.png"
              className="item pablo"
              style={{ ...transform(-20, -50, posY as never) }}
            />
            <img
              src="/assets/gratarola/banner1.gif"
              className="item banner1"
              style={{ ...transform(100, -50, posY as never) }}
            />

            <img
              src="/assets/gratarola/todopordospesos.jpg"
              className="item todopordospesos"
              style={{ ...transform(10, -80, posY as never) }}
            />
            <img src="/assets/gratarola/roto.png" className="item roto" />
            <img
              src="/assets/gratarola/llame-ya.jpg"
              className="item llame"
            />
            <img
              src="/assets/gratarola/norbert.png"
              className="item norbert"
              style={{
                ...transform(0, 100, posY as never),
              }}
            />

            <img
              src="/assets/gratarola/tetera.png"
              className="item tetera"
              style={{ ...transform(-10, 10, posY as never) }}
            />
            <img
              src="/assets/gratarola/gasoleros.png"
              className="item gasoleros"
            />

            <img
              src="/assets/gratarola/gati.png"
              className="item gati"
              style={{ ...transform(10, -12, posY as never) }}
            />

            <img
              src="/assets/gratarola/linyera.png"
              className="item linyera"
            />

            <img
              src="/assets/gratarola/banner2.gif"
              className="item banner2"
              style={{ ...transform(20, -80, posY as never) }}
            />
            <img
              src="/assets/gratarola/perri.png"
              className="item perri"
              style={{ ...transform(-20, 190, posY as never) }}
            />
            <img src="/assets/gratarola/dog.png" className="item dog" />
            <img
              src="/assets/gratarola/banner3.gif"
              className="item banner3"
              style={{ ...transform(50, 90, posY as never) }}
            />
            <img
              src="/assets/gratarola/banner4.gif"
              className="item banner4"
              style={{ ...transform(-100, 0, posY as never) }}
            />
            <img
              src="/assets/gratarola/alien.png"
              className="item alien"
              style={{ ...transform(560, 172, posY as never) }}
            />
            <img
              src="/assets/gratarola/weed.png"
              className="item weed"
              style={{ ...transform(-10, 170, posY as never) }}
            />
            <img
              src="/assets/gratarola/mila.png"
              className="item mila"
              style={{ ...transform(50, 120, posY as never) }}
            />
            <img
              src="/assets/gratarola/meme.png"
              className="item meme"
              style={{ ...transform(60, -20, posY as never) }}
            />
            <img
              src="/assets/gratarola/emoji.png"
              className="item emoji"
              style={{ ...transform(-80, 70, posY as never) }}
            />
            <img src="/assets/gratarola/waldo.png" className="item waldo" />
            <img
              src="/assets/gratarola/pajaro.png"
              className="item pajaro"
              style={{ ...transform(90, 80, posY as never) }}
            />
            <img
              src="/assets/gratarola/chuck.png"
              className="item chuck"
              style={{ ...transform(-500, 250, posY as never) }}
            />
            <img
              src="/assets/gratarola/pancho.png"
              className="item pancho"
              style={{ ...transform(0, 20, posY as never) }}
            />

            <img
              src="/assets/gratarola/monty.png"
              className="item monty"
              style={{ ...transform(-20, 250, posY as never) }}
            />
            <img
              src="/assets/gratarola/david.png"
              className="item david"
              style={{ ...transform(-10, 120, posY as never) }}
            />
            <img src="/assets/gratarola/dance.gif" className="item dance" />
            <img
              src="/assets/gratarola/agne.png"
              className="item agne"
              style={{ ...transform(0, 20, posY as never) }}
            />
            <img
              src="/assets/gratarola/0800.png"
              className="item ceroochicientos"
              style={{ ...transform(10, 120, posY as never) }}
            />
            <img
              src="/assets/gratarola/free.gif"
              className="item free blink  "
            />
            <img
              src="/assets/gratarola/comunismo.png"
              className="item comunismo"
              style={{ ...transform(-100, 80, posY as never) }}
            />


          </div>

          <div className="gratarola-content">


            <div className="content flex">
              <div className="column">


                <h2 className="neonText font-serif" style={{ transform: `translateY(${-posY * 150}px) scale(${2 - posY})` }}>Gratarola</h2>



                <p className="block pb-5 gratarola-body" style={{ transform: `translateY(${-posY * 120}px) scale(${2 - posY})`, }}>
                  Invitamos a creadorxs a que puedan subir su obra por
                  tiempo limitado hasta que se suban 3083 minutos de obra.
                </p>



              </div>


            </div>


            <div className=" promo-lanzamiento " style={{ marginTop: `-${posY * 400}px` }} >
              <Marquee>
                <span>
                  PROMO LANZAMIENTO
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm-5 6v-2H7v2h2zm6 0v2H9v-2h6zm0 0h2v-2h-2v2z" fill="currentColor" /> </svg>
                </span>
                <span>
                  PROMO LANZAMIENTO
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm-5 6v-2H7v2h2zm6 0v2H9v-2h6zm0 0h2v-2h-2v2z" fill="currentColor" /> </svg>
                </span>
                <span>
                  PROMO LANZAMIENTO
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm-5 6v-2H7v2h2zm6 0v2H9v-2h6zm0 0h2v-2h-2v2z" fill="currentColor" /> </svg>
                </span>
                <span>
                  PROMO LANZAMIENTO
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm-5 6v-2H7v2h2zm6 0v2H9v-2h6zm0 0h2v-2h-2v2z" fill="currentColor" /> </svg>
                </span>
              </Marquee>

            </div>
          </div>
        </>

      </div>
    </section >
  );
};
