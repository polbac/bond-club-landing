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
    name: "Multitud",
    link: "/",
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
      {
        link: "/subir-obra",
        title: "Subir Obra",
        descripcion: "Subí tu obra y empezá a ganarte unos mangos",
        icon: "🆙",
      },
    ],
  },
  {
    name: "Espectadorxs",
    link: "/espectadorxs",
  },
  {
    name: "FAQs",
    link: "/faqs",
  },
  {
    name: "Contacto",
    link: "/contacto",
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
                    <Link href={menu.link}>{menu.name}</Link>
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
}> = React.forwardRef(
  ({ className, children, icon, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef as unknown as LegacyRef<HTMLAnchorElement>}
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
