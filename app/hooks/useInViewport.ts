"use client";
import { useState, useEffect, useRef } from "react";

export function useInViewport(options = {}) {
  const [isInViewport, setIsInViewport] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsInViewport(isVisible);

        // Una vez visible, mantener el estado (útil para componentes que no deben desmontarse)
        if (isVisible && !hasBeenVisible) {
          setHasBeenVisible(true);
        }
      },
      {
        rootMargin: "100px", // Cargar 100px antes de que sea visible
        threshold: 0.1, // Activar cuando 10% sea visible
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasBeenVisible, options]);

  return { elementRef, isInViewport, hasBeenVisible };
}
