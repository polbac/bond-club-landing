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
    name: "Suscripción",
    link: "/suscripcion",
    color: "#D8C8E4"
  },
  {
    name: "Creadorxs",
    color: "#B0CDE3",
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
    color: "#FE583B",
  },
  {
    name: "Subir obra",
    color: "#39835B",
    link: process.env.NEXT_PUBLIC_PLAY_APP_URL + "/upload",
    external: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="Entertainment-Events-Hobbies-Film-Roll--Streamline-Pixel"
        height="24"
        width="24"
      >
        <desc>
          Entertainment Events Hobbies Film Roll Streamline Icon:
          https://streamlinehq.com
        </desc>
        <title>entertainment-events-hobbies-film-roll</title>
        <g>
          <path
            d="M21.7125 20.572499999999998H24v1.1400000000000001h-2.2874999999999996Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M20.565 21.7125h1.1475v1.1475h-1.1475Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M20.565 5.715h1.1475v10.2825h-1.1475Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M19.424999999999997 15.997499999999999h1.1400000000000001v2.2874999999999996H19.424999999999997Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M19.424999999999997 3.4275h1.1400000000000001v2.2874999999999996H19.424999999999997Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M18.285 22.86h2.2800000000000002V24h-2.2800000000000002Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M18.285 18.285h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M18.285 2.2874999999999996h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="m18.285 19.424999999999997 -2.2874999999999996 0 0 1.1475 1.1400000000000001 0 0 2.2874999999999996 1.1475 0 0 -3.435z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="m17.137500000000003 15.997499999999999 1.1475 0 0 -2.2800000000000002 -1.1475 0 0 -1.1475 -2.2874999999999996 0 0 1.1475 -1.1400000000000001 0 0 2.2800000000000002 1.1400000000000001 0 0 1.1475 2.2874999999999996 0 0 -1.1475z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M15.997499999999999 1.1400000000000001h2.2874999999999996v1.1475h-2.2874999999999996Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="m14.850000000000001 9.1425 2.2874999999999996 0 0 -1.1400000000000001 1.1475 0 0 -2.2874999999999996 -1.1475 0 0 -1.1400000000000001 -2.2874999999999996 0 0 1.1400000000000001 -1.1400000000000001 0 0 2.2874999999999996 1.1400000000000001 0 0 1.1400000000000001z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M5.7075000000000005 20.572499999999998h10.290000000000001v1.1400000000000001H5.7075000000000005Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M9.1425 9.1425h3.4275v3.4275h-3.4275Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M5.7075000000000005 0h10.290000000000001v1.1400000000000001H5.7075000000000005Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="m6.855 12.57 -2.2874999999999996 0 0 1.1475 -1.1400000000000001 0 0 2.2800000000000002 1.1400000000000001 0 0 1.1475 2.2874999999999996 0 0 -1.1475 1.1400000000000001 0 0 -2.2800000000000002 -1.1400000000000001 0 0 -1.1475z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="m6.855 4.574999999999999 -2.2874999999999996 0 0 1.1400000000000001 -1.1400000000000001 0 0 2.2874999999999996 1.1400000000000001 0 0 1.1400000000000001 2.2874999999999996 0 0 -1.1400000000000001 1.1400000000000001 0 0 -2.2874999999999996 -1.1400000000000001 0 0 -1.1400000000000001z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M3.4275 19.424999999999997h2.2800000000000002v1.1475H3.4275Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M3.4275 1.1400000000000001h2.2800000000000002v1.1475H3.4275Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M2.2800000000000002 18.285h1.1475v1.1400000000000001H2.2800000000000002Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M2.2800000000000002 2.2874999999999996h1.1475v1.1400000000000001H2.2800000000000002Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M1.1400000000000001 15.997499999999999h1.1400000000000001v2.2874999999999996H1.1400000000000001Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M1.1400000000000001 3.4275h1.1400000000000001v2.2874999999999996H1.1400000000000001Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
          <path
            d="M0 5.715h1.1400000000000001v10.2825H0Z"
            fill="#000000"
            stroke-width="0.75"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "Play Bond",
    link: process.env.NEXT_PUBLIC_PLAY_APP_URL,
    external: true,
    color: "#F49B28",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="Entertainment-Events-Hobbies-Popcorn--Streamline-Pixel"
        height={24}
        width={24}
      >
        <desc>
          {
            "Entertainment Events Hobbies Popcorn Streamline Icon: https://streamlinehq.com"
          }
        </desc>
        <title>{"entertainment-events-hobbies-popcorn"}</title>
        <g>
          <path
            d="M21.708750000000002 5.715h1.1475v3.4275h-1.1475Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M20.56875 9.1425h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M18.28125 4.574999999999999h3.4275v1.1400000000000001h-3.4275Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="m17.14125 10.2825 0 1.1475 1.1400000000000001 0 0 6.855 -1.1400000000000001 0 0 4.574999999999999 -1.1475 0 0 -10.290000000000001 1.1475 0 0 -1.1400000000000001 -4.574999999999999 0 0 1.1400000000000001 1.1475 0 0 10.290000000000001 -2.2874999999999996 0 0 -11.43 -1.1400000000000001 0 0 -1.1475 -2.2874999999999996 0 0 1.1475 1.1400000000000001 0 0 11.43 -1.1400000000000001 0 0 -4.574999999999999 -1.1475 0 0 -5.715 1.1475 0 0 -1.1400000000000001 -2.2874999999999996 0 0 -2.2874999999999996 -2.2874999999999996 0 0 1.1400000000000001 1.1475 0 0 8.0025 1.1400000000000001 0 0 4.574999999999999 1.1400000000000001 0 0 1.1400000000000001 11.43 0 0 -1.1400000000000001 1.1475 0 0 -4.574999999999999 1.1400000000000001 0 0 -8.0025 -3.4275 0z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M18.28125 8.0025h1.1475v1.1400000000000001h-1.1475Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M17.14125 5.715h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M15.993749999999999 3.4275h1.1475v2.2874999999999996h-1.1475Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M14.85375 6.855h1.1400000000000001v1.1475h-1.1400000000000001Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M14.85375 2.2874999999999996h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M12.56625 1.1400000000000001h2.2874999999999996v1.1475h-2.2874999999999996Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M12.56625 8.0025h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M11.42625 10.2825h1.1400000000000001v1.1475h-1.1400000000000001Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M11.42625 6.855h1.1400000000000001v1.1475h-1.1400000000000001Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M11.42625 2.2874999999999996h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M10.286249999999999 1.1400000000000001h1.1400000000000001v1.1475h-1.1400000000000001Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M7.998749999999999 4.574999999999999h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M6.85125 0h3.435v1.1400000000000001h-3.435Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M6.85125 8.0025h1.1475v1.1400000000000001h-1.1475Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M5.71125 3.4275h2.2874999999999996V4.574999999999999h-2.2874999999999996Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M4.57125 1.1400000000000001h2.2800000000000002v1.1475h-2.2800000000000002Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M4.57125 4.574999999999999h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M2.28375 2.2874999999999996h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M2.28375 6.855h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
            fill="#000000"
            strokeWidth={0.75}
          />
          <path
            d="M1.1437499999999998 3.4275h1.1400000000000001v3.4275h-1.1400000000000001Z"
            fill="#000000"
            strokeWidth={0.75}
          />
        </g>
      </svg>
    ),
  },
];

export const Header = () => {


  return (
    <header className={`h-14 fixed flex white`}>
      <div className="brand-container">
        <Link href={"/"}>
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
        </Link>
      </div>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
          {MENU.map((menu) => (
            <>
              {menu.items ? (
                <NavigationMenu.Item >
                  <NavigationMenu.Trigger className="NavigationMenuTrigger">
                    <span style={{ color: menu.color }}>
                      {menu.name}</span>
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
                      className={menu.external ? "cta-button font-serif" : ""}
                    >
                      <span className="flex gap-1 block items-center" style={{ color: menu.color }}>
                        {menu.icon}
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
