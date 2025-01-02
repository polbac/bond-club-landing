"use client";
import { ReactP5Wrapper, P5CanvasInstance } from "@p5-wrapper/react";
import { useEffect } from "react";

let rotateX = 0;
let rotateY = 0;
let scale = 0;
let currentScale = 0;
let color = "black";
let showElement = false;
let currentYPos = 600;
let currentRotate = 600;

function sketch(p5: P5CanvasInstance) {
  let font: unknown;

  p5.preload = () => {
    font = p5.loadFont("/assets/fonts/chaney/CHANEY-UltraExtended.ttf");
  };

  p5.setup = () => {
    const canvas = p5.createCanvas(500, 150, p5.WEBGL);
    p5.angleMode(p5.DEGREES);
    p5.normalMaterial();
    p5.textFont(font);
    p5.textSize(22);
    p5.textAlign(p5.CENTER, p5.CENTER);
    canvas.mouseOver(mouseOver);
    canvas.mouseOut(mouseOut);
  };

  function mouseOver() {
    scale = 30;
    color = "magenta";
  }
  function mouseOut() {
    scale = 0;
    color = "black";
  }

  p5.draw = () => {
    p5.clear();

    p5.push();
    rotateWithFrameCount();

    const fY = showElement ? 0 : 300;
    const r = showElement ? 0 : -10;
    currentYPos += (fY - currentYPos) / 15;
    currentRotate += (r - currentRotate) / 20;

    // p5.rotateX(currentRotate);
    p5.translate(0, currentYPos, 0);

    currentScale += (scale - currentScale) / 10;

    p5.translate(0, 0, currentScale);

    p5.fill(color);
    p5.box(270, 50, 20);
    p5.translate(0, -4, currentScale + 13);
    p5.fill("white");
    p5.text("SUBIR OBRA", 0, 0);

    p5.pop();
  };

  function rotateWithFrameCount() {
    p5.rotateX(rotateX);
    p5.rotateY(-rotateY);
  }
}

export const SubirObra = () => {
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const midX = window.innerWidth / 2;
      const midY = window.innerHeight * 0.9;

      rotateY = (midX - event.clientX) / 30;
      rotateX = (midY - event.clientY) / 30;
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        showElement = true;
      } else {
        showElement = false;
      }
    });
  }, [document]);
  return (
    <div className="cta">
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};
