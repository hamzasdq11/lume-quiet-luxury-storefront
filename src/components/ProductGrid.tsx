import ProductCard from "./ProductCard";
import navyNotebookImg from "@/assets/product-navy-notebook.jpeg";
import penSetImg from "@/assets/product-pen-set.jpeg";
import crystalDisplayImg from "@/assets/product-crystal-display.jpeg";
import plannerImg from "@/assets/product-planner.jpg";
import deskpadImg from "@/assets/product-deskpad.jpg";
import monogramImg from "@/assets/product-monogram.jpg";

const products = [
  {
    image: navyNotebookImg,
    name: "Navy Spiral Journal",
    price: "£145",
  },
  {
    image: penSetImg,
    name: "Gold Pen Collection",
    price: "£295",
  },
  {
    image: crystalDisplayImg,
    name: "Crystal Display Piece",
    price: "£175",
  },
  {
    image: plannerImg,
    name: "Weekly Planner",
    price: "£120",
  },
  {
    image: deskpadImg,
    name: "Leather Desk Pad",
    price: "£185",
  },
  {
    image: monogramImg,
    name: "Monogram Journal",
    price: "£145",
  },
];

const ProductGrid = () => {
  return (
    <section id="shop" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-charcoal mb-4">
            Featured Collection
          </h2>
          <p className="text-lg font-sans text-warm-gray max-w-2xl mx-auto">
            Thoughtfully designed essentials for the modern professional
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
