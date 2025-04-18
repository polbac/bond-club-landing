"use client";
import { HeaderContext } from "./context/HeaderContext";
import { useEffect, useContext } from "react";
import { Hero } from "./components/home/Hero";
import { QueEs } from "./components/home/QueEs";
import { EstoEsCine } from "./components/home/EstoEsCine";
import { MenuColor } from "./components/MenuColor";
export default function Home() {
  const { setColor } = useContext(HeaderContext);
  useEffect(() => {
    setColor("black");
  }, []);
  return (
    <main>
      <MenuColor color="black">
        <Hero />
      </MenuColor>
      <MenuColor color="white">
        <QueEs />
      </MenuColor>
      <MenuColor color="white">
        <EstoEsCine />
      </MenuColor>
    </main>
  );
}
