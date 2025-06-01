"use client";
import { HeaderContext } from "./context/HeaderContext";
import { useEffect, useContext } from "react";
import { Hero } from "./components/home/Hero";
import { QueEs } from "./components/home/QueEs";
import { EstoEsCine } from "./components/home/EstoEsCine";
import { MenuColor } from "./components/MenuColor";
import { Gratarola } from "./components/home/Gratarola";
import { Monetizacion } from "./components/home/Monetizacion";
import { Catalogo } from "./components/home/Catalogo";

export default function Home() {
  const { setColor } = useContext(HeaderContext);
  useEffect(() => {
    setColor("white");
  }, []);
  return (
    <main>
      <MenuColor color="white">
        <Hero />
      </MenuColor>
      <MenuColor color="black">
        <QueEs />
      </MenuColor>
      <MenuColor color="white">
        <Monetizacion />
      </MenuColor>
      <MenuColor color="white">
        <Catalogo />
      </MenuColor>
      <MenuColor color="white">
        <Gratarola />
      </MenuColor>
      <MenuColor color="white">
        <EstoEsCine />
      </MenuColor>
    </main>
  );
}
