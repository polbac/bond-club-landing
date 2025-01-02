"use client";

import Data from "../../data/artConfiguration.json";
import { useContext, useState, useEffect } from "react";
import { MenuColor } from "../components/MenuColor";

import { RainbowButton } from "../../components/ui/rainbow-button";
import Link from "next/link";
import { Transition } from "../components/Transition";
import { HeaderContext } from "../context/HeaderContext";

export default function Precios() {
  const [activeIndex, setActiveIndex] = useState<
    "3_months" | "6_months" | "12_months"
  >("3_months");
  const { setColor } = useContext(HeaderContext);

  useEffect(() => {
    setColor("black");
  }, []);

  return (
    <main className="precios">
      <MenuColor color="black">
        <section className="precios pb-20">
          <h1 className="text-center">
            <Transition>
              <>
                Precios de publicación
                <br />
                de obras
              </>
            </Transition>
          </h1>
          <Transition>
            <>
              <div className="flex justify-center">
                <p>Duración en la plataforma</p>
              </div>

              <div className="flex justify-center gap-2">
                <div
                  onClick={() => setActiveIndex("3_months")}
                  className={`font-serif	chip ${
                    activeIndex === "3_months" && "active"
                  }`}
                >
                  3 meses
                </div>
                <div
                  onClick={() => setActiveIndex("6_months")}
                  className={`font-serif	chip ${
                    activeIndex === "6_months" && "active"
                  }`}
                >
                  6 meses
                </div>
                <div
                  onClick={() => setActiveIndex("12_months")}
                  className={`font-serif	chip ${
                    activeIndex === "12_months" && "active"
                  }`}
                >
                  1 año
                </div>
              </div>
            </>
          </Transition>
          <div className="columns-size-pricing flex justify-center gap-5">
            <div className="card-pricing corto">
              <Transition>
                <>
                  <p className=" size">Corto.</p>
                  <p className="font-serif pricing">
                    AR$ {Data.pricing[activeIndex].short}
                  </p>
                  <p>
                    De {Data.duration.short.from} a {Data.duration.short.to}{" "}
                    minutos
                  </p>
                  <p>
                    <Link href={"/subir-obra"}>
                      <RainbowButton className="rainbow-button mt-5">
                        Subir corto
                      </RainbowButton>
                    </Link>
                  </p>
                </>
              </Transition>
            </div>

            <div className="card-pricing medio">
              <Transition>
                <>
                  <p className=" size">Medio.</p>
                  <p className="font-serif pricing">
                    AR$ {Data.pricing[activeIndex].mid}
                  </p>
                  <p>
                    De {Data.duration.mid.from} a {Data.duration.mid.to} minutos
                  </p>
                  <p>
                    <Link href={"/subir-obra"}>
                      <RainbowButton className="rainbow-button mt-5">
                        Subir medio
                      </RainbowButton>
                    </Link>
                  </p>
                </>
              </Transition>
            </div>

            <div className="card-pricing largo">
              <Transition>
                <>
                  <p className=" size">Largo.</p>
                  <p className="font-serif pricing">
                    AR$ {Data.pricing[activeIndex].large}
                  </p>
                  <p>A partir de {Data.duration.large.from} minutos</p>
                  <p>
                    <Link href={"/subir-obra"}>
                      <RainbowButton className="rainbow-button mt-5">
                        Subir largo
                      </RainbowButton>
                    </Link>
                  </p>
                </>
              </Transition>
            </div>
          </div>
        </section>
      </MenuColor>
    </main>
  );
}
