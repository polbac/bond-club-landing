"use client";
import { ReactP5Wrapper, P5CanvasInstance } from "@p5-wrapper/react";

function sketch(p5: P5CanvasInstance) {
  let font: unknown;

  p5.preload = () => {
    font = p5.loadFont("/assets/fonts/chaney/CHANEY-UltraExtended.ttf");
  };

  p5.setup = () => {
    p5.createCanvas(500, 350, p5.WEBGL);
  };

  let r = Math.random() * 255,
    g = Math.random() * 255,
    b = Math.random() * 255;

  p5.draw = () => {
    p5.clear();
    p5.textFont(font);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.textSize(80);
    p5.rotateX(p5.map(p5.mouseX, 0, p5.width, 0, p5.TWO_PI));
    p5.rotateY(p5.map(p5.mouseY, 0, p5.height, 0, p5.TWO_PI));
    p5.rotateZ(p5.map(p5.frameCount, 0, 600, 0, p5.TWO_PI));
    // fill('#8C53D5');
    p5.push();
    for (let i = 0; i < 100; i++) {
      p5.fill(r, g, b);
      p5.translate(0, 0, 0.5);
      p5.text("FAQS", 0, 0);
    }
    r += 1;
    g += 1;
    b += 1;
    if (r === 255) {
      r = Math.random() * 255;
    }
    if (g === 255) {
      g = Math.random() * 255;
    }
    if (b === 255) {
      b = Math.random() * 255;
    }
    p5.pop();
  };
}

export const FaqsTitle = () => {
  return <ReactP5Wrapper sketch={sketch} />;
};
