"use client";
import { AnimatedBeam } from "../../../components/ui/animated-beam";
import * as pricingData from "../../../data/pricingConfiguration.json";
import React, { useRef, FC, ReactElement, useState, useEffect } from "react";
import type { ConfettiRef } from "@/components/ui/confetti";
import Confetti from "@/components/ui/confetti";

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const confettiRef = useRef<ConfettiRef>(null);

  const [config, setConfig] = useState<{
    plays: number;
    donations: number;
    uploads: number;
    rents: number;
    referral: number;
  }>({
    plays: 0,
    donations: 0,
    uploads: 0,
    rents: 0,
    referral: 0,
  });

  const [dia, setDia] = useState(1);
  const [saldo, setSaldo] = useState(0);
  const [precioMango, setPrecioMango] = useState(
    Math.floor(Math.random() * 20)
  );

  useEffect(() => {
    const intervalIndex = setInterval(() => {
      setConfig((s) => ({
        plays: s.plays + Math.floor(Math.random() * 3),
        donations: s.donations + Math.floor(Math.random() * 2),
        uploads: s.uploads + Math.floor(Math.random() * 2),
        rents: s.rents + Math.floor(Math.random() * 2),
        referral: s.referral + Math.floor(Math.random() * 2),
      }));
    }, 1000);

    const intervalMango = setInterval(() => {
      setPrecioMango(Math.floor(Math.random() * 100));
    }, 300);

    return () => {
      clearInterval(intervalIndex);
      clearInterval(intervalMango);
    };
  }, [setConfig, setPrecioMango]);

  useEffect(() => {
    const intervalDia = setInterval(() => {
      setDia((d) => {
        if (d >= 31) {
          return 1;
        }

        return d + 1;
      });
    }, 250);

    return () => {
      clearInterval(intervalDia);
    };
  }, [setDia]);

  useEffect(() => {
    if (dia === 31) {
      if (confettiRef.current)
        confettiRef.current.fire({
          particleCount: 50,
          scalar: 1.2,
          shapes: ["star"],
        });
      const totalMangos =
        pricingData.mangos.perPlay * config.plays +
        pricingData.mangos.perRent * config.rents +
        pricingData.mangos.perUpload * config.uploads +
        pricingData.mangos.perReferrer * config.referral +
        pricingData.mangos.perDonation * config.donations;
      setSaldo((s) => s + totalMangos * precioMango);

      setConfig((s) => ({
        plays: 0,
        donations: 0,
        uploads: 0,
        rents: 0,
        referral: 0,
      }));
    }
  }, [dia, confettiRef.current, pricingData, setSaldo]);

  return (
    <div
      className="relative flex h-[550px] w-full items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <div ref={div1Ref}>
            <Card
              x={-80}
              y={-10}
              title={"Reproducciones"}
              value={config.plays}
              icon={"▶️"}
            />
          </div>
          <div ref={div5Ref}>
            <Card
              x={-60}
              y={-10}
              title={"Obras subidas"}
              value={config.uploads}
              icon={"🆙"}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div ref={div2Ref}> </div>
          <div ref={div4Ref}>
            <div style={{ position: "relative", zIndex: 99, top: "-110px" }}>
              <img
                src="/assets/monetiza/gato.png"
                width={200}
                style={{ position: "relative" }}
              />
              <Card
                x={0}
                y={0}
                title={"Mangos"}
                value={
                  pricingData.mangos.perPlay * config.plays +
                  pricingData.mangos.perRent * config.rents +
                  pricingData.mangos.perUpload * config.uploads +
                  pricingData.mangos.perReferrer * config.referral +
                  pricingData.mangos.perDonation * config.donations
                }
                icon={"🥭"}
              />
            </div>
          </div>
          <div ref={div6Ref}>
            <Card
              x={-30}
              y={-20}
              title={"Alquileres"}
              value={config.rents}
              icon={"⏱️"}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div ref={div3Ref}>
            <Card
              x={-80}
              y={-40}
              title={"Donaciones"}
              value={config.donations}
              icon={"💸"}
            />
          </div>
          <div ref={div7Ref}>
            <Card
              x={-100}
              y={-20}
              title={"Referidos"}
              value={config.referral}
              icon={"🤑"}
            />
          </div>
        </div>

        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-0 size-full"
          style={{ zIndex: 99999 }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginLeft: "-100px",
              marginTop: "100px",
            }}
          >
            <Card
              x={-30}
              y={0}
              title={"Saldo"}
              value={`AR$ ${new Intl.NumberFormat("es-AR").format(saldo)}`}
              icon={"💰"}
              background={"#8e99e4"}
              color={"#fff"}
              width={210}
            />
          </div>
        </Confetti>

        <p
          className="font-condensed"
          style={{
            zIndex: 99999,
            position: "absolute",
            bottom: "10px",
            width: "100%",
            textAlign: "center",
            color: "#7d7968",
            fontSize: "1.5rem",
            left: 0,
          }}
        >
          <span
            style={{
              
              paddingTop: "2px",
              paddingBottom: "2px",
              paddingLeft: "6px",
              paddingRight: "6px",
              borderRadius: "10px",
              
              color: "black",
            }}
          >
            🥭 AR$ {precioMango < 10 ? "0" : ""}
            {new Intl.NumberFormat("es-AR").format(precioMango)}
          </span>
          {"    "}|{"    "}DIA {dia} DEL MES
        </p>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Card: FC<{
  x: number;
  y: number;
  width?: number;
  title: string;
  value: number | string;
  icon: ReactElement | string;
  background?: string;
  color?: string;
}> = ({ title, icon, value, x, y, background, color,width }) => (
  <div style={{ position: "absolute" }}>
    <div
      className="block rounded shadow-lg text-gray-900 bg-white p-3 flex justify-between border-black border"
      style={{
        width: width?`${width}px`:"150px",
        background: background || "#ede9d9",
        color: color || "#000",
        position: "relative",
        zIndex: 99,
        top: `${y}px`,
        left: `${x}px`,
      }}
    >
      <div>
        <div className={"font-condensed  text-xs uppercase"}>{title}</div>
        <div className={"text-2xl"}>{value}</div>
      </div>
      <div className={""} style={{ fontSize: "24px",position:"relative",top:"-5px" }}>
        {icon}
      </div>
    </div>
  </div>
);
