// @ts-nocheck
"use client";
import { Transition } from "../Transition";
import { BackgroundVideo } from "../BackgroundVideo";
import Link from "next/link";

export function Convertite() {
  return (
    <div className="relative cta-button-block mt-20">
      <BackgroundVideo src="/assets/monetiza/vhs.mp4" />
      <div className="center-block relative" style={{ zIndex: 99 }}>
        <h1
          className="font-condensed relative mb-5"
          style={{ color: "yellow" }}
        >
          Desempolvá esas pelis del cajón
        </h1>
        <Link href="" className="button-white mt-5">
          <span>Publicar obra</span>
        </Link>
      </div>
    </div>
  );
}
