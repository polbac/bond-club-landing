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
    <div className="section-que-es" ref={container as never}>
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="tt-3 tt">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="tt-4 tt">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="tt-5 tt">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="tt-6 tt">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="tt-7 tt">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="tt-8 tt">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};
