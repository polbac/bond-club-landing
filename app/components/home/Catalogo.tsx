"use client";
import { Transition } from "../Transition";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export const Catalogo = () => {
  return (
    <div className="section-catalogo">
      <h1 className="text-center font-serif">
        <>Catalogo</>
      </h1>
    </div>
  );
};
