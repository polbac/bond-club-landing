import { FC } from "react";

export const CircleText: FC<{ text: string }> = ({ text }) => (
  <p
    style={{
      display: "inline-block",
      border: "2px solid white",
      borderRadius: "50%",
      textAlign: "center",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      fontSize: "3rem",
    }}
  >
    {text}
  </p>
);
