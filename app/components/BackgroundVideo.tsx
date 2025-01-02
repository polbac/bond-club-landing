import { FC } from "react";

export const BackgroundVideo: FC<{ src: string }> = ({ src }) => (
  <div className="background-video">
    <video src={src} autoPlay muted loop />
  </div>
);
