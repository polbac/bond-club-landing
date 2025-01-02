import React, { FC } from "react";

export const NoiseBackground: FC<{ video: string }> = ({ video }) => {
  return (
    <div
      className="grain"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "200%",
        height: "100%",
        pointerEvents: "none",
        mixBlendMode: "screen",
        overflow: "hidden",
      }}
    >
      <video
        src={`/assets/videos/${video}`}
        autoPlay
        muted
        loop
        style={{ position: "absolute", width: "100%" }}
      />
    </div>
  );
};
