import ProductCard from "./ProductCard";
import bookmarkImg from "@/assets/product-bookmark.jpg";
import deskpadImg from "@/assets/product-deskpad-new.jpg";
import calendarImg from "@/assets/product-calendar.jpg";
import navyNotebookImg from "@/assets/product-navy-notebook.jpeg";
import penSetImg from "@/assets/product-pen-set.jpeg";
import monogramImg from "@/assets/product-monogram.jpg";

const products = [
  {
    image: bookmarkImg,
    name: "Leather Bookmark",
    price: "₹2,999",
  },
  {
    image: deskpadImg,
    name: "Executive Desk Pad",
    price: "₹19,499",
  },
  {
    image: calendarImg,
    name: "Desk Calendar 2024",
    price: "₹8,999",
  },
  {
    image: navyNotebookImg,
    name: "Navy Spiral Journal",
    price: "₹14,999",
  },
  {
    image: penSetImg,
    name: "Gold Pen Collection",
    price: "₹30,999",
  },
  {
    image: monogramImg,
    name: "Monogram Journal",
    price: "₹14,999",
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
