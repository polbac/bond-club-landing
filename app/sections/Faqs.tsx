import { FaqList } from "../components/FaqList";
import { NoiseBackground } from "../components/NoiseBackground";
import { FC } from "react";
import { Parr } from "../components/Parraph";
import { MenuColor } from "../components/MenuColor";

export const Faqs: FC<{
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
}> = async ({ faqs }) => {
  if (!faqs) {
    return undefined;
  }

  return (
    <MenuColor color="white">
      <section
        className="faqs"
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <FaqList faqs={faqs} />

        <NoiseBackground video={"noise1.mp4"} />
      </section>
    </MenuColor>
  );
};
