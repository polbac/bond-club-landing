"use client";

import { useContext, useEffect, useRef } from "react";
import { HeaderContext } from "../context/HeaderContext";

export const MenuColor = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { setColor } = useContext(HeaderContext);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        if (rect.top < 0 && rect.bottom > 0) {
          setColor(color);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check on component mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef, setColor]);

  useEffect(() => {
    setColor(color);
  }, []);

  return <div ref={elementRef}>{children}</div>;
};
