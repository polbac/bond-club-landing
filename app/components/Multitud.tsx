"use client";

import { ReactP5Wrapper, P5CanvasInstance } from "@p5-wrapper/react";

let counter = 0;

const VIDEOS = [
  {
    file: "forma2.mp4",
    width: 200,
    height: 200,
  },
  {
    file: "forma3.mp4",
    width: 200,
    height: 200,
  },
  {
    file: "forma4.mp4",
    width: 200,
    height: 200,
  },
  {
    file: "forma5.mp4",
    width: 200,
    height: 200,
  },
  {
    file: "forma6.mp4",
    width: 200,
    height: 200,
  },
  {
    file: "forma7.mp4",
    width: 200,
    height: 200,
  },
];

interface Video {
  __width: number;
  __height: number;
  __x: number;
  __y: number;
  __speed: number;
}

const videos: Array<Video> = [];

function sketch(p5: P5CanvasInstance) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  p5.setup = () => {
    p5.createCanvas(width, height, p5.WEBGL);

    VIDEOS.forEach((v) => {
      const video = p5.createVideo(`/assets/videos/generos/${v.file}`);

      video.size(v.width, v.height);
      video.loop();
      video.volume(0);
      video.autoplay("autoplay");
      video.__width = v.width;
      video.__height = v.height;
      video.__x = width * Math.random();
      video.__y = height * Math.random();
      video.__speed = Math.random() * 10;
      videos.push(video);
    });
  };

  function mapCoordinate(video: Video): { x: number; y: number } {
    return {
      x: video.__x - window.innerWidth / 2,
      y: video.__y - window.innerHeight / 2,
    };
  }

  function isOutsideVidePort(video: Video): boolean {
    const { x } = mapCoordinate(video);

    return x > window.innerWidth;
  }

  function render() {
    videos.forEach((video, index) => {
      video.__x += video.__speed;
      video.__y += Math.sin(counter) * 10;

      if (isOutsideVidePort(video)) {
        video.__x = -video.__width;
        video.__y = window.innerHeight * Math.random();
      }

      videos[index] = video;
    });

    counter += 0.1;
  }

  p5.draw = () => {
    //p5.background(0);
    //p5.normalMaterial();

    videos.forEach((video) => {
      const { x, y } = mapCoordinate(video);
      p5.image(video, x, y, video.__width, video.__height);
    });

    render();
  };
}

export const Multitud = () => {
  return (
    <div className="">
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};
