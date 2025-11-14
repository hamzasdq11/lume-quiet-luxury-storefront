import calendarImg from "@/assets/product-calendar.jpg";
import plannerImg from "@/assets/product-planner.jpg";
import penSetImg from "@/assets/product-pen-set.jpeg";
import deskpadNewImg from "@/assets/product-deskpad-new.jpg";

const collections = [
  {
    name: "Desk Calendar 2024",
    image: calendarImg,
    description: "Timeless essentials for daily clarity",
  },
  {
    name: "Creator Set",
    image: plannerImg,
    description: "Tools for the creative mind",
  },
  {
    name: "Executive Desk Pad",
    image: deskpadNewImg,
    description: "Refined desk organization",
  },
  {
    name: "Executive Pen Collection",
    image: penSetImg,
    description: "Signature writing instruments",
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-20 lg:py-32 bg-cream-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-charcoal mb-4">
            Curated Collections
          </h2>
          <p className="text-lg font-sans text-warm-gray max-w-2xl mx-auto">
            Explore our carefully assembled sets for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-cream mb-4">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-charcoal group-hover:text-gold transition-smooth">
                  {collection.name}
                </h3>
                <p className="font-sans text-sm text-warm-gray">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
