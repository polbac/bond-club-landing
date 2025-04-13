"use client";
import { FC, LegacyRef, useContext } from "react";
import { HeaderContext } from "../context/HeaderContext";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import "./Header.css";
import classNames from "classnames";

const MENU = [
  {
    name: "Suscribite",
    link: "/suscribite",
  },
  {
    name: "Creadorxs",
    image: "/assets/menu/filmaker.png",
    items: [
      {
        link: "/monetiza",
        title: "Monetizción",
        descripcion: "Te explicamos como podes ganarte unos mangos con tu obra",
        icon: "🥭",
      },
      {
        link: "/precios",
        title: "Precios",
        descripcion: "¿Cuánto sale subir un corto, un medio o un largo?",
        icon: "💰",
      },
    ],
  },
  {
    name: "Multitud",
    link: "/multitud",
  },
  {
    name: "Subir obra",
    link: process.env.NEXT_PUBLIC_PLAY_APP_URL,
    external: true,
  },
  {
    name: "Play Bond",
    link: process.env.NEXT_PUBLIC_PLAY_APP_URL,
    external: true,
  },
];

export const Header = () => {
  const { color } = useContext(HeaderContext);

  return (
    <header className={`h-14 fixed flex ${color}`}>
      <div className="brand-container">
        <Image
          className="brand-white"
          src="/assets/brand-white.svg"
          width="150"
          alt="image"
          height="20"
        />
        <Image
          className="brand-black"
          src="/assets/brand.svg"
          width="150"
          alt="image"
          height="20"
        />
      </div>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
          {MENU.map((menu) => (
            <>
              {menu.items ? (
                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="NavigationMenuTrigger">
                    {menu.name}
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="NavigationMenuContent ">
                    <ul className="List one">
                      {menu.items.map((item, index) => (
                        <li style={{ gridRow: "span 3" }} key={`${index}-item`}>
                          <ListItem
                            href={item.link}
                            icon={item.icon}
                            title={item.title}
                            key={item.title}
                          >
                            <>{item.descripcion}</>
                          </ListItem>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              ) : (
                <NavigationMenu.Item>
                  <NavigationMenu.Link asChild className="NavigationMenuLink">
                    <Link
                      href={menu.link || ""}
                      target={menu.external ? "_blank" : "_self"}
                      className={menu.external ? "cta-button" : ""}
                    >
                      <span className="flex gap-1 block">
                        {menu.external ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                            />
                          </svg>
                        ) : null}
                        {menu.name}
                      </span>
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              )}
            </>
          ))}
        </NavigationMenu.List>

        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>
    </header>
  );
};

const ListItem: FC<{
  className?: string;
  children: React.ReactElement;
  icon: string;
  href: string;
  title: string;
  external?: boolean;
}> = React.forwardRef(
  ({ className, children, icon, title, external, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef as unknown as LegacyRef<HTMLAnchorElement>}
          target={external ? "_blank" : "_self"}
        >
          <div className="flex gap-2 ">
            <div>{icon}</div>
            <div className="">
              <div className="ListItemHeading">{title}</div>
              <p className="ListItemText">{children}</p>
            </div>
          </div>
        </Link>
      </NavigationMenu.Link>
    </li>
  )
);
