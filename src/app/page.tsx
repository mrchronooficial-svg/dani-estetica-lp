import StickyHeader from "@/components/ui/StickyHeader";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SectionDivider, { OrnamentDivider } from "@/components/ui/SectionDivider";

import Hero from "@/components/sections/Hero";
import Dores from "@/components/sections/Dores";
import Storytelling from "@/components/sections/Storytelling";
import Produto from "@/components/sections/Produto";
import ProvaSocial from "@/components/sections/ProvaSocial";
import Diferenciacao from "@/components/sections/Diferenciacao";
import Modulos from "@/components/sections/Modulos";
import Bonus from "@/components/sections/Bonus";
import Ancoragem from "@/components/sections/Ancoragem";
import ParaQuemE from "@/components/sections/ParaQuemE";
import SobreDani from "@/components/sections/SobreDani";
import Garantia from "@/components/sections/Garantia";
import FAQ from "@/components/sections/FAQ";
import OfertaFinal from "@/components/sections/OfertaFinal";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <StickyHeader />
      <WhatsAppButton />
      <main className="min-h-screen">
        <Hero />
        <OrnamentDivider />
        <Dores />
        <SectionDivider />
        <Storytelling />
        <OrnamentDivider />
        <Produto />
        <SectionDivider />
        <ProvaSocial />
        <OrnamentDivider />
        <Diferenciacao />
        <SectionDivider />
        <Modulos />
        <SectionDivider />
        <Bonus />
        <OrnamentDivider />
        <Ancoragem />
        <SectionDivider />
        <ParaQuemE />
        <OrnamentDivider />
        <SobreDani />
        <SectionDivider />
        <Garantia />
        <OrnamentDivider />
        <FAQ />
        <SectionDivider />
        <OfertaFinal />
      </main>
      <Footer />
    </>
  );
}
