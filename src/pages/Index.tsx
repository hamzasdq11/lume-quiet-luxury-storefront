import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Collections from "@/components/Collections";
import Personalisation from "@/components/Personalisation";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import PitchDeckSlides from "@/components/PitchDeckSlides";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <Collections />
        <Personalisation />
        <Team />
        <PitchDeckSlides />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
