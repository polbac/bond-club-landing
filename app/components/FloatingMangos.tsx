"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MangoProps {
  index: number;
  mousePosition: { x: number; y: number };
}

export function FloatingMango({ index, mousePosition }: MangoProps) {
  const generateRandomPosition = () => {
    const margin = 0;
    return {
      x: margin + Math.random() * (window.innerWidth - margin * 2),
      y: margin + Math.random() * (window.innerHeight - margin * 2),
    };
  };

  const [initialPosition] = useState(() => generateRandomPosition());
  const [baseTarget, setBaseTarget] = useState(() => generateRandomPosition());
  const [currentPosition, setCurrentPosition] = useState(initialPosition);

  // Velocidad más rápida (entre 3-8 segundos)
  const speed = 3 + Math.random() * 5;

  // Calcular repulsión del mouse
  const calculateRepulsion = () => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - currentPosition.x, 2) +
        Math.pow(mousePosition.y - currentPosition.y, 2)
    );

    const repulsionRadius = 120; // Radio de repulsión

    if (distance < repulsionRadius && distance > 0) {
      // Calcular dirección opuesta al mouse
      const angle = Math.atan2(
        currentPosition.y - mousePosition.y,
        currentPosition.x - mousePosition.x
      );

      // Fuerza de repulsión (más fuerte cuando está más cerca)
      const repulsionForce =
        ((repulsionRadius - distance) / repulsionRadius) * 80;

      const repulsionX = Math.cos(angle) * repulsionForce;
      const repulsionY = Math.sin(angle) * repulsionForce;

      // Asegurar que no salga de los límites
      const margin = 60;
      const newX = Math.max(
        margin,
        Math.min(window.innerWidth - margin, baseTarget.x + repulsionX)
      );
      const newY = Math.max(
        margin,
        Math.min(window.innerHeight - margin, baseTarget.y + repulsionY)
      );

      return { x: newX, y: newY };
    }

    return baseTarget;
  };

  const finalTarget = calculateRepulsion();

  const handleAnimationComplete = () => {
    setBaseTarget(generateRandomPosition());
  };

  // Actualizar posición actual para cálculos de repulsión
  useEffect(() => {
    setCurrentPosition(finalTarget);
  }, [finalTarget]);

  return (
    <motion.div
      className="absolute text-4xl select-none z-10"
      initial={initialPosition}
      animate={finalTarget}
      transition={{
        duration: speed,
        ease: "easeOut",
      }}
      onAnimationComplete={handleAnimationComplete}
      whileHover={{ scale: 1.3, rotate: 15 }}
      style={{
        filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))",
      }}
    >
      🥭
    </motion.div>
  );
}

export default function Component() {
  const [mangoCount] = useState(() => Math.floor(Math.random() * 6) + 10);
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Trackear posición del mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mangos-floating absolute ">
      {/* Mangos flotantes */}
      {Array.from({ length: mangoCount }, (_, index) => (
        <FloatingMango
          key={index}
          index={index}
          mousePosition={mousePosition}
        />
      ))}
    </div>
  );
}
