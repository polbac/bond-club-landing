import { Faqs } from "./sections/Faqs";
import { Generos } from "./sections/Generos";
import { QueEs } from "./sections/QueEs";
import { SubirObra } from "./components/SubirObra";
import { Hero } from "./sections/Hero";
import { getContent } from "./services/content";

export default async function Home() {
  const faqs = await getContent("1OIbOz0kdvM5cHPk7zqUpI");

  return (
    <main>
      <SubirObra />

      <Hero />

      <QueEs />
      <Generos />
      {faqs && <Faqs faqs={faqs} />}
    </main>
  );
}
