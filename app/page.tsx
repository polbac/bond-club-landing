"use client";
import { HeaderContext } from "./context/HeaderContext";
import { useEffect, useContext } from "react";
import { Hero } from "./components/home/Hero";
import { QueEs } from "./components/home/QueEs";
import { SumateMultitud } from "./components/home/SumateMultitud";
import { EstoEsCine } from "./components/home/EstoEsCine";
import { Gratarola } from "./components/home/Gratarola";
import { Monetizacion } from "./components/home/Monetizacion";
import { Catalogo } from "./components/home/Catalogo";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gsap from "gsap";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { setColor } = useContext(HeaderContext);
  useEffect(() => {
    setColor("white");
  }, []);
  return (
    <main>

      <Hero />

      <QueEs />


      <EstoEsCine />

      <Catalogo />

      <SumateMultitud />

      <Monetizacion />



      <Gratarola />



    </main>
  );
}
