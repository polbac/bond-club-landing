import { Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10">
      <div className="max-width">
        <div className="flex justify-between">
          <ul className="block">
            <li>
              <a href={"/"}>Somos Multitud</a>
            </li>
            <li>
              <a href={"/monetiza"}>Monetizá con tu obra</a>
            </li>

            <li>
              <a href={"/precios"}>Precios</a>
            </li>

            <li>
              <a href={"/subir-obra"}>Subir Obra</a>
            </li>

            <li>
              <a href={"/espectadorxs"}>Espectadorxs</a>
            </li>
          </ul>

          <ul className="block">
            <li>
              <a href={"/equipo"}>Equipo Bond</a>
            </li>

            <li>
              <a href={"/brand-kit"}>Brand Kit</a>
            </li>

            <li>
              <a href={"/faqs"}>F.A.Q.S</a>
            </li>

            <li>
              <a href={"/terminos-y-condiciones"}>Términos y condiciones</a>
            </li>

            <li>
              <a href={"/Contacto"}>Contacto</a>
            </li>
          </ul>

          <div className="block flex gap-2 last-block justify-end">
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>

      <div className="max-width flex justify-between mt-12  pt-8">
        <div className="block">
          <p>&copy; {new Date().getFullYear()}</p>
        </div>

        <div className="block">
          <p>
            Desde BsAs / Argentina apostando <br />
            al cine para todo Latinoamérica 🖤
          </p>
        </div>

        <div className="block flex gap-2 last-block"></div>
      </div>

      <p className="multitud">MULTITUD</p>
    </footer>
  );
}
