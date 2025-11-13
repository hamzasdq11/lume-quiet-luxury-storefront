import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-stationery.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-serif font-medium text-charcoal leading-tight">
                Designed for<br />
                <span className="text-gold">Clarity.</span>
              </h1>
              <p className="text-2xl lg:text-3xl font-serif text-charcoal/80 font-light">
                Crafted for the Urban Mind.
              </p>
            </div>

            <p className="text-base lg:text-lg font-sans text-warm-gray max-w-md mx-auto lg:mx-0">
              Luxury stationery, personalised with precision. Each piece embodies quiet sophistication and timeless elegance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold/90 text-cream font-sans tracking-wide transition-smooth"
              >
                Shop Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-cream font-sans tracking-wide transition-smooth"
              >
                View Collections
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={heroImage}
                alt="Luxury stationery collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
