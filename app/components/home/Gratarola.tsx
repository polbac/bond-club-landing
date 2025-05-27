"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { Transition } from "../../components/Transition";

function transform(x: number, y: number, percent: number) {
  return {
    transform: `translate(${Number((percent as never) * x)}px, ${Number(
      (percent as never) * y
    )}px)`,
  };
}

export const Gratarola = () => {
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
    <section className="gratarola block relative" ref={ref}>
      <div className="wall block relative">
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
        <img src="/assets/gratarola/skorpion.jpg" className="item skorpion" />
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
        <img src="/assets/gratarola/llame-ya.jpg" className="item llame" />
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
        <img src="/assets/gratarola/gasoleros.png" className="item gasoleros" />

        <img
          src="/assets/gratarola/gati.png"
          className="item gati"
          style={{ ...transform(10, -12, posY as never) }}
        />

        <img src="/assets/gratarola/linyera.png" className="item linyera" />

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
          style={{ ...transform(60, -72, posY as never) }}
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
          style={{ ...transform(-10, 250, posY as never) }}
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
        <img src="/assets/gratarola/free.gif" className="item free blink  " />
        <img
          src="/assets/gratarola/comunismo.png"
          className="item comunismo"
          style={{ ...transform(-100, 80, posY as never) }}
        />

        <h1 className="gratarola-title">GRATAROLA</h1>
      </div>

      <div className="gratarola-content">
        <div className="content flex">
          <div className="column">
            <p className="blink promo-lanzamiento">PROMO LANZAMIENTO</p>
            <Transition>
              <h2>3803 MINUTOS GRATAROLA</h2>
            </Transition>

            <Transition>
              <p className="font-serif block pb-5">
                Invitamos a creadorxs a que puedan subir su obra por tiempo
                limitado hasta que se suban 3083 minutos de obra.
              </p>
            </Transition>

            <div style={{ position: "relative" }}>
              <Transition>
                <Link href="#" className={"cta-button inline-block "}>
                  <span className="flex gap-1 block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="Interface-Essential-Clock--Streamline-Pixel"
                      height={24}
                      width={24}
                    >
                      <desc>
                        {
                          "\n    Interface Essential Clock Streamline Icon: https://streamlinehq.com\n  "
                        }
                      </desc>
                      <title>{"interface-essential-clock"}</title>
                      <g>
                        <path
                          d="M22.8525 9.1425H24v5.715h-1.1475Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M21.7125 14.857499999999998h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M21.7125 6.855h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M20.572499999999998 17.145h1.1400000000000001v2.2800000000000002h-1.1400000000000001Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M20.572499999999998 4.574999999999999h1.1400000000000001v2.2800000000000002h-1.1400000000000001Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M19.424999999999997 19.424999999999997h1.1475v1.1475H19.424999999999997Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M19.424999999999997 3.4275h1.1475V4.574999999999999H19.424999999999997Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M17.137500000000003 20.572499999999998h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M17.137500000000003 2.2874999999999996h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="m10.2825 13.7175 1.1475 0 0 1.1400000000000001 1.1400000000000001 0 0 -1.1400000000000001 1.1400000000000001 0 0 -1.1475 4.574999999999999 0 0 -1.1400000000000001 -4.574999999999999 0 0 -1.1475 -1.1400000000000001 0 0 -6.855 -1.1400000000000001 0 0 6.855 -1.1475 0 0 1.1475 -1.1400000000000001 0 0 1.1400000000000001 1.1400000000000001 0 0 1.1475z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M14.857499999999998 21.7125h2.2800000000000002v1.1475h-2.2800000000000002Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M14.857499999999998 1.1400000000000001h2.2800000000000002v1.1475h-2.2800000000000002Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M9.1425 22.86h5.715V24h-5.715Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M9.1425 0h5.715v1.1400000000000001h-5.715Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M6.855 21.7125h2.2874999999999996v1.1475H6.855Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M6.855 1.1400000000000001h2.2874999999999996v1.1475H6.855Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M4.5675 20.572499999999998h2.2874999999999996v1.1400000000000001H4.5675Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M4.5675 2.2874999999999996h2.2874999999999996v1.1400000000000001H4.5675Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M3.4275 19.424999999999997h1.1400000000000001v1.1475H3.4275Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M3.4275 3.4275h1.1400000000000001V4.574999999999999H3.4275Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M2.2874999999999996 17.145h1.1400000000000001v2.2800000000000002H2.2874999999999996Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M2.2874999999999996 4.574999999999999h1.1400000000000001v2.2800000000000002H2.2874999999999996Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M1.1400000000000001 14.857499999999998h1.1475v2.2874999999999996H1.1400000000000001Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M1.1400000000000001 6.855h1.1475v2.2874999999999996H1.1400000000000001Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                        <path
                          d="M0 9.1425h1.1400000000000001v5.715H0Z"
                          fill="#000000"
                          strokeWidth={0.75}
                        />
                      </g>
                    </svg>
                    Más info
                  </span>
                </Link>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
