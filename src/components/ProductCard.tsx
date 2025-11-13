interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

const ProductCard = ({ image, name, price }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square overflow-hidden rounded-sm bg-cream-dark mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="text-center space-y-2">
        <h3 className="font-serif text-lg text-charcoal group-hover:text-gold transition-smooth">
          {name}
        </h3>
        <p className="font-sans text-sm text-warm-gray">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
