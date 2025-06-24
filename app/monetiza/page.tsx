import { BackgroundVideo } from "../components/BackgroundVideo";
import { MenuColor } from "../components/MenuColor";
import { Highlights } from "../components/monetiza/Highlights";
import { Stats } from "../components/monetiza/Stats";
import { Timeline } from "../components/monetiza/Timeline";
import { Convertite } from "../components/monetiza/Convertite";
import { CalculoMango } from "../components/monetiza/CalculoMango";
import { CuantosMangos } from "../components/monetiza/CuantosMangos";
import { Estrella2 } from "../shapes/estrella2";
import { title, description } from "../utils/metadata";

import { Transition } from "../components/Transition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: title("Monetizá"),
  description,
};

export default async function Monetiza() {
  return (
    <>
      <main className="monetiza">
        <MenuColor color="black">
          <section className="heroblock">
            <BackgroundVideo src="/assets/videos/monetizar/mangos.mp4" />
            <h1 className="center-block ">
              <Transition>
                <span>
                  ¿Querés ganarte
                  <br />
                  unos mangos?
                </span>
              </Transition>
            </h1>
            <p className="bottom-block font-serif">
              <Transition>
                <span>
                  Te contamos como hacerlo
                  <br />
                  <i className="icono-arrow1-down"></i>
                </span>
              </Transition>
            </p>
          </section>
          <section className="block">
            <Transition>
              <h1 className="text-black text-center pt-20 ">
                Convertite en Creadxr
              </h1>
            </Transition>
            <Transition>
              <p className="text-center text-black font-serif text-xl small-block">
                Acompañamos a creadores independientes a monetizar sus obras y a
                generar lazos en la multitud para sus futuras creaciones.
              </p>
            </Transition>
            <Transition>
              <Stats />
            </Transition>
            <Highlights />
          </section>

          <section className="block">
            <div className="shape-1">
              <Estrella2 />
            </div>
            <Transition>
              <h1 className="text-black text-center pt-20 mb-5">
                ¿Cómo me vuelvo un creadxr??
              </h1>
            </Transition>
            <Transition>
              <p className="text-center text-black font-serif text-xl small-block pb-10  mb-10 block">
                Comprendemos el valor y potencial que hay en los contenidos
                independientes, es por eso, que lo primero que vas a recibir en
                Bond Club es un abrazo. De ahí en más nuestra misión es
                acompañarte.
              </p>
            </Transition>
          </section>

          <Timeline />

          <CuantosMangos />
          <CalculoMango />
          <Convertite />
        </MenuColor>
      </main>
    </>
  );
}
