import { getColor } from "@/app/styles/colors";
import Image from "next/image";
import { Transition } from "../Transition";

const STEPS = [
  {
    imagen: "step1.jpg",
    title: "Te registras como usuario creadxr",
    description: "lorem ipsum dolor",
  },

  {
    imagen: "step-upload.jpg",
    title: "Subis tu obra",
    description:
      "Llenas el formulario con la información necesaria. Aquí podras elegir las etiquetas, los géneros que consideres más presentes en tu obra. Tambien cargaras los creditos. Podes elegir el precio de PPV (alquiler)",
  },

  {
    imagen: "step-curaduria.jpg",
    title: "Curaduría",
    description:
      "El equipo de Bond Club revisará tu obra (puede tardar hasta 7 días). Recibirás una notificación con la confirmación",
  },

  {
    imagen: "step-pagas.jpg",
    title: "Pagas el derecho de publicación de obra",
    description:
      "Una vez aprobada recibirás un link para poder abonar el derecho de publicación",
  },

  {
    imagen: "step-publicar.jpg",
    title: "Publicación de tu obra",
    description:
      "Tu obra estará disponible para su reproducción (de suscriptores) o alquiler PPV",
  },

  {
    imagen: "step-monetiza.jpg",
    title: "Monetización",
    description: (
      <span>
        A cada mes vencido recibirá los mangos correspondientes a:
        <ul>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
            Cantidad de (alquileres)
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
            Cantidad de reproducciones únicas durante el mes
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
            Cantidad de donaciones que hayas recibido durante el mes
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
            Cantidad de suscriptores nuevos que hayas traido a la plataforma
            este mes
          </li>
        </ul>
      </span>
    ),
  },
  {
    imagen: "step-money.jpg",
    title: "Retirá tus fondos",
    description:
      "Una vez que cuentes con tus mangos vas a poder retirarlos a un CBU ",
  },
];

export const Timeline = () => (
  <div className="my-10">
    {STEPS.map((step, index) => (
      <div
        className="flex max-w-6xl "
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="w-1/2 relative mb-20">
          <Transition>
            <div
              style={{
                border: "1px solid black",
                margin: "20px",
                width: "80%",
              }}
              className="relative before:absolute before:top-0 before:left-0 before:w-full
     before:h-full before:content-[''] before:opacity-[0.15] before:z-10 before:pointer-events-none
     before:bg-[url('/assets/noise.webp')]"
            >
              <Image
                src={`/assets/monetiza/${step.imagen}`}
                loading={"lazy"}
                width={500}
                height={500}
                alt="a"
              />
            </div>
          </Transition>
          <span
            style={{
              width: "30px",
              height: "30px",
              lineHeight: "30px",
              top: "0",
              position: "absolute",
              right: "-17px",
              background: getColor(0),
              borderRadius: "50%",
              textAlign: "center",
              filter: `drop-shadow(0 0 10px ${getColor(0)})`,
              boxShadow: `0 0 35px ${getColor(0)}`,
              color: "white",
            }}
          >
            {index + 1}
          </span>
        </div>
        <div
          className="w-1/2"
          style={{
            borderLeft: "4px ridge rgb(255 255 255 / 60%)",
            paddingLeft: "2rem",
          }}
        >
          <Transition>
            <div>
              <h2
                className="font-condensed text-black text-4xl	"
                style={{ color: getColor(0) }}
              >
                {step.title}
              </h2>
              <p className="font-serif text-black text-xl	">
                {step.description}
              </p>
            </div>
          </Transition>
        </div>
      </div>
    ))}
  </div>
);
