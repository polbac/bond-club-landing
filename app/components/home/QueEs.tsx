"use client";
import { Transition } from "../Transition";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export const QueEs = () => {
  return (
    <div className="section-que-es">
      <h1 className="text-center font-serif">
        <>¿Qué es todo esto ?</>
      </h1>
    </div>
  );
};
