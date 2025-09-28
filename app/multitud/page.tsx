"use client";

import { useContext, useState, useEffect } from "react";
import { MenuColor } from "../components/MenuColor";
import { SplitText } from "../components/SplitText";

import { Transition } from "../components/Transition";
import { HeaderContext } from "../context/HeaderContext";

export default function Multitud() {
  const { setColor } = useContext(HeaderContext);

  const [multitud, setMultitud] = useState(0);
  const [textColor, setTextColor] = useState("black");

  useEffect(() => {
    setColor("white");
  }, []);

  return (
    <main className="multitud">
      <MenuColor color="white">
        <section className="multitud pb-20">
          <h1 className="text-center relative" style={{ color: textColor }}>
            <Transition>
              <div className="">MANIFIESTO</div>
            </Transition>
          </h1>
          <div className="video-wrapper">
            <video
              src={`/assets/multitud/video${multitud + 1}.mp4`}
              muted
              autoPlay
              loop
            />
          </div>
          {multitud === 0 && (
            <article className="multitud-block font-serif">
              La multitud es un paisaje humano que no se domina. Confiamos en la
              pulsión inmanente de la singularidad de cada observador apasionado
              que recorre con ojos sensibles la contingencia que los une.
              Adentro de este club heterogéneo, no queremos hablar de lo
              audiovisual, sino ante lo audiovisual. Saltamos de la idea al acto
              y volvemos a empezar, podemos pasar por bocones, delirantes,
              provocadores y tercos. Nos sentimos infoactivistas, tecno
              paseantes, simpatizantes del quehacer cultural, nos gusta tanto el
              saber, como el sentir y a veces todo junto. Producir en estos
              tiempos nos provoca cosas, nos sacude los cables y pensamos,
              bastante seguido, que algo hay que hacer, por eso empezamos esto.
            </article>
          )}

          {multitud === 1 && (
            <article className="multitud-block font-serif" style={{ color: "white" }}>
              Te estamos buscando para inventar una manera de exorcizar el
              estancamiento, armar un kit de superviviencia creativa para
              expandirnos. B.O.N.D quiere problematizar la nocion de obra,
              integrar el remix y la mezcla, volcarnos hacia interacciones mas
              colaborativas que impulsen montajes novedosos y cruces entre
              creadorxs. Frenar el rastro del algoritmo para sacar la cabeza del
              aturdimiento digital. Nos gustan las voces del callejon, la
              potencia de lo insurgente y mantenernos al margen, bien al
              costadito.
            </article>
          )}
          {multitud === 2 && (
            <article className="multitud-block font-serif" style={{ color: "white" }}>
              ¿Cual es la forma de todo esto? Dinámica, con el movimiento
              necesario que da el intercambio. Seguramente algo descuadriculada,
              descategorizada, un nuevo cuerpo viviente que en conjunto con
              otros cuerpos, pueda salir del adiestramiento productivo y se
              permita explorar otros devenires en la realización audiovisual. De
              lo masivo corremos y hacia la ternura vamos (te esperamos),
              confiamos en la prueba como terreno fértil contagioso y vital. En
              tiempos enamorados del ombligo y su posición inmóvil, no queda más
              que fortalecer el vínculo, preservar el margen espiritual y
              establecer un recorrido afectivo de creación.
            </article>
          )}
          <div
            className="multitud-area-1 multitud-area"
            onMouseEnter={() => {
              setMultitud(0);
              setTextColor("black");
            }}
          ></div>
          <div
            className="multitud-area-2 multitud-area"
            onMouseEnter={() => {
              setMultitud(1);
              setTextColor("white");
            }}
          ></div>
          <div
            className="multitud-area-3 multitud-area"
            onMouseEnter={() => {
              setMultitud(2);
              setTextColor("white");
            }}
          ></div>
        </section>
      </MenuColor>
    </main>
  );
}
