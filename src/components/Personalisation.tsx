import { Sparkles, Type, Star } from "lucide-react";

const personalisationOptions = [
  {
    icon: Sparkles,
    title: "Gold Foil",
    description: "Elegant 24k gold foil embossing",
  },
  {
    icon: Star,
    title: "Copper Foil",
    description: "Warm copper metallic finish",
  },
  {
    icon: Type,
    title: "Blind Emboss",
    description: "Subtle debossed lettering",
  },
];

const Personalisation = () => {
  return (
    <section id="personalisation" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-serif font-medium text-charcoal">
              Your Name, <span className="text-gold">Your Mark.</span>
            </h2>
            <p className="text-lg font-sans text-warm-gray max-w-2xl mx-auto">
              Add initials, monograms, or custom messages on every LUME product. 
              Each personalisation is crafted with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {personalisationOptions.map((option, index) => (
              <div
                key={index}
                className="space-y-4 p-8 rounded-sm border border-border/50 hover:border-gold/50 transition-smooth bg-cream/30"
              >
                <div className="flex justify-center">
                  <option.icon className="h-12 w-12 text-gold" strokeWidth={1} />
                </div>
                <h3 className="font-serif text-xl text-charcoal">
                  {option.title}
                </h3>
                <p className="font-sans text-sm text-warm-gray">
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <p className="font-sans text-sm text-warm-gray mb-6">
              Available on all journals, notebooks, and leather goods
            </p>
            <button className="px-8 py-3 bg-gold text-cream font-sans tracking-wide rounded-sm hover:bg-gold/90 transition-smooth">
              Explore Personalisation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personalisation;
