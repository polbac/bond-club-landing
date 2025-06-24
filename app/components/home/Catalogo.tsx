"use client";

import { Manojo } from "../../shapes/manojo";

export const Catalogo = () => {
  return (
    <div className="section-catalogo">
      <div className="container-scroll flex">
        <div className="block-1 ">
          <div className="chip cartelera">cartelera</div>
          <div className="chip movil">móvil</div>
          <h1>
            con qué
            <br /> te vas
            <br />a encontrar
          </h1>
        </div>
        <div className="block-2">
          <div className="manojo-container">
            <Manojo />
          </div>
        </div>
      </div>
    </div>
  );
};
