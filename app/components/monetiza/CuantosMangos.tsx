import { getColor } from "@/app/styles/colors";
import { Transition } from "../Transition";
import * as pricingData from "@/data/pricingConfiguration.json";
const DATA = [
  {
    count: pricingData.mangos.perPlay,
    title: "reproducción",
    description: "Se contabilizan reproducciones únicas de usuarios únicos",
  },

  {
    count: pricingData.mangos.perRent,
    title: "alquiler",
    description: "Cada vez que un espectador alquile tu obra",
  },

  {
    count: pricingData.mangos.perDonation,
    title: "donación",
    description: "Cada vez que un espectador done a tu perfil",
  },

  {
    count: pricingData.mangos.perReferrer,
    title: "usuarix referido",
    description:
      "Cada vez que un usuario se registre con tu código de referido",
  },

  {
    count: pricingData.mangos.perUpload,
    title: "x subir obra",
    description: "Cada vez que subas una nueva obra",
  },
];

export const CuantosMangos = () => (
  <>
    <div
      className="max-w-4xl  text-black text-center  "
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10rem",
        marginBottom: "10rem",
      }}
    >
      <Transition>
        <h1 className=" text-center" style={{ color: "#47966a" }}>
          ¿Cuántos mangos voy a cobrar por mes? 🤔
        </h1>
      </Transition>

      <p className="text-xl text-center block mt-5 block mb-10">
        Va a depender de la actividad que tengas en el mes:
      </p>
      <Transition>
        <div className="flex gap-5">
          {DATA.map((dat) => (
            <div
              className="text-left block rounded  shadow-lg text-gray-900 bg-white p-3  border-black border"
              style={{
                border: "1px solid black",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
                width: "20%",
                background: "rgb(237, 233, 217)",
              }}
            >
              <p className="text-4xl font-condensed block text-left">
                {dat.count} 🥭
              </p>
              <p
                className="text-1xl uppercase font-condensed block text-left"
                style={{ color: getColor(3) }}
              >
                {dat.title}
              </p>
              <p className="font-serif">{dat.description}</p>
            </div>
          ))}
        </div>
      </Transition>
    </div>
  </>
);
