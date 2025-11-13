import ProductCard from "./ProductCard";
import notebookImg from "@/assets/product-notebook.jpg";
import plannerImg from "@/assets/product-planner.jpg";
import deskpadImg from "@/assets/product-deskpad.jpg";
import monogramImg from "@/assets/product-monogram.jpg";
import giftsetImg from "@/assets/product-giftset.jpg";
import folioImg from "@/assets/product-folio.jpg";

const products = [
  {
    image: notebookImg,
    name: "Signature Notebook",
    price: "£95",
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
  {
    image: giftsetImg,
    name: "Luxe Gifting Set",
    price: "£250",
  },
  {
    image: folioImg,
    name: "Leather Folio",
    price: "£195",
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
