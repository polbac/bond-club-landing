import { MenuColor } from "../components/MenuColor";
import { Multitud } from "../components/Multitud";

export const Hero = () => {
  return (
    <MenuColor color="white">
      <section className="section-hero">
        <Multitud />
        <div className="hero-content">
          <p className="title">estamos creando una multitud</p>
          <p className="text">
            La nueva plataforma blbablablabalbl abl ablabbla ablablba
          </p>
        </div>
      </section>
    </MenuColor>
  );
};
