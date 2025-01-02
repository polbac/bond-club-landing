"use client";
import { useInView } from "framer-motion";

import { FC, useRef } from "react";

export const Transition: FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={`transition ${isInView ? "show" : ""}`}>
      {children}
      <div className="mask"></div>
    </div>
  );
};
