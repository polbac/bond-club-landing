"use client";

import { createContext, useState } from "react";

export const HeaderContext = createContext<{
  color: string;
  setColor: (s: string) => void;
}>({
  color: "white",
  setColor: () => {},
});

export function HeaderContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [color, setColor] = useState("white");

  return (
    <HeaderContext.Provider value={{ color, setColor }}>
      {children}
    </HeaderContext.Provider>
  );
}
