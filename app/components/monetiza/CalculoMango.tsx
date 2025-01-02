// @ts-nocheck
"use client";
import { useState } from "react";
import Image from "next/image";


export function CalculoMango() {
  return (
    <div style={{ maxWidth: "1020px", margin: "auto" }} className="flex gap-3">
      <div style={{ position: "relative", width: "580px" }}>
        <Image
          src="/assets/monetiza/complex.gif"
          width={600}
          height={600}
          style={{ border: "1px solid black", width: "100%" }}
        />
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            textAlign: "center",
            transform: "translateY(-50%)",
            textShadow: "6px 4px 6px #ffb600",
            width: "100%",
          }}
        >
          ¿Cómo se calcula
          <br />
          el 🥭?
        </h1>
      </div>
      <div
        className="flex-1 flex flex-col"
        style={{ justifyContent: "center" }}
      >
        <div>
          <p
            className="font-condensed text-black  text-2xl	flex text-center mb-5"
            style={{ maxWidth: "360px", margin: "auto", marginBottom: "40px" }}
          >
            Al inicio de cada mes se calcula el nuevo valor siguiendo la
            siguiente fórmula:
          </p>
          <div
            style={{
              width: "380px",
              margin: "auto",
              border: "1px solid black",
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
            className="gradientAnimation"
          >
            <p className="font-serif text-black block text-center text-2xl">
              AR$ recaudados en el mes (*)
            </p>
            <p
              className="font-serif text-black block text-center text-2xl"
              style={{
                borderTop: "1px solid black",
              }}
            >
              total de 🥭 a distribuir en el mes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
