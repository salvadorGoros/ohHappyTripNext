import Hero from "./hero";
import Navbar from "./navbar";
import Footer from "./footer";
import Destinos from "./destinos";
import Promociones from "./promociones";
import Nosotros from "./nosotros";
import Testimonios from "./testimonios";
import Cotizar from "./cotizar";

export default function Home() {
  return (
    <div id="top"className="flex flex-col flex-1 items-center justify-center font-sans">
      <Navbar />
      <Hero />
      <Destinos/>
      <Promociones/>
      <Nosotros />
      <Testimonios />
      <Cotizar />
      <Footer />
    </div>
  );
}
