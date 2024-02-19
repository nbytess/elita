import { Header } from "./header";
import { FooterSimple } from "./footer";
import { Hero } from "./hero";
import { OfferCards } from "./offerCards";
import { TablePrices } from "./table";
import { Contact } from "./contact";

export default function Home() {
  return (
     <main>
       <Header />
       <Hero />
       <OfferCards />
       <TablePrices />
       <Contact />
       <FooterSimple />
     </main>
  );
}
