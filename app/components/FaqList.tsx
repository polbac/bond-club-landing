"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { Parr, Parraph } from "./Parraph";
import { FaqsTitle } from "./FaqsTitle";

export const FaqList: FC<{
  faqs: {
    data: {
      faqList: {
        listCollection: {
          items: Array<{
            cuerpo: Parr;
            titulo: string;
            imagen: { url: string };
          }>;
        };
      };
    };
  };
}> = ({ faqs }) => {
  const [show, setShow] = useState<null | number>(null);

  return (
    <div style={{ display: "flex", maxWidth: "1200px", margin: "auto" }}>
      <div style={{ width: "40%" }}>
        {show !== null ? (
          faqs.data.faqList.listCollection.items[show].imagen?.url && (
            <Image
              priority
              src={faqs.data.faqList.listCollection.items[show].imagen.url}
              width={300}
              height={300}
              alt=""
            />
          )
        ) : (
          <FaqsTitle />
        )}
      </div>
      <ul style={{ width: "60%" }}>
        {faqs.data.faqList.listCollection.items.map((faq, index) => (
          <li
            key={`key${index}`}
            className={`m-4 cursor`}
            style={{
              paddingBottom: 10,
              borderBottom:
                index < faqs.data.faqList.listCollection.items.length - 1
                  ? "1px solid gray"
                  : "",
            }}
          >
            <p className="flex align-top">
              <div style={{ width: "45px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <strong
                style={{ flex: 1 }}
                onClick={() => setShow(index)}
                className={"cursor-pointer text-lg uppercase  font-bold"}
              >
                {faq.titulo}
              </strong>
            </p>
            {index === show && (
              <div className="flex">
                <div style={{ width: "45px" }}></div>
                <div style={{ flex: 1 }}>
                  <Parraph value={faq.cuerpo} />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
