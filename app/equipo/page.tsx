import { BackgroundVideo } from "../components/BackgroundVideo";
import { MenuColor } from "../components/MenuColor";

import { title, description } from "../utils/metadata";

import { Transition } from "../components/Transition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: title("Equipo"),
  description,
};

const TEAM = [
  {
    name: "Agustin 'El Compadre' Suarez",
    rol: "Presidente Electo",
    image: "agus.png",
  },
  {
    name: "Pablo 'El tirano' Bacchetta",
    rol: "Hacker",
    image: "pol.jpeg",
  },
  {
    name: "Elena 'La araña' Cohen",
    rol: "La CM",
    image: "elena.png",
  },
];

export default async function Equipo() {
  return (
    <>
      <main className="equipo padding-top">
        <MenuColor color="black">
          <h1 className="text-center font-condensed">
            <Transition>
              <span className="text-black">Equipo B.O.N.D</span>
            </Transition>
          </h1>

          <div className=" text-black center-text text-justify">
            <Transition>
              <div>
                <p>
                  Somos un grupo pequeño pero apasionado, unidos por una visión
                  común: transformar la manera en que el cine alternativo
                  conecta con las personas. Creemos que detrás de cada obra hay
                  una historia que merece ser vista, escuchada y compartida.
                </p>

                <p>
                  Nuestra misión es crear un círculo virtuoso donde creadores y
                  espectadores puedan encontrarse, inspirarse mutuamente y
                  crecer juntos. Queremos que este espacio sea más que una
                  plataforma: un movimiento que impulsa el arte independiente y
                  fortalece las comunidades alrededor del mundo.
                </p>
              </div>
            </Transition>
          </div>

          <div className="flex gap-6 pt-10 pb-10 justify-center	">
            {TEAM.map((people) => (
              <div className="text-black text-center">
                <Transition>
                  <div
                    className="relative before:absolute before:top-0 before:left-0 before:w-full
     before:h-full before:content-[''] before:opacity-[0.15] before:z-10 before:pointer-events-none
     before:bg-[url('/assets/noise.webp')]"
                    style={{
                      backgroundImage: `url(/assets/equipo/${people.image})`,
                      width: "300px",
                      height: "300px",
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      border: "1px solid black",
                    }}
                  ></div>
                  <p
                    className="block mt-2 font-serif"
                    style={{ fontSize: "1.5rem" }}
                  >
                    {people.name}
                  </p>
                  <p
                    className="font-condensed"
                    style={{
                      fontSize: "1.5rem",
                      color: "#48676f",
                    }}
                  >
                    {people.rol}
                  </p>
                </Transition>
              </div>
            ))}
            <div></div>
          </div>
        </MenuColor>
      </main>
    </>
  );
}
