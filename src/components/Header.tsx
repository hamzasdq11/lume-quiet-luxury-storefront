import { ShoppingBag } from "lucide-react";
import lumeLogo from "@/assets/lume-logo.jpeg";

const Header = () => {
  const navLinks = [
    { name: "Shop", href: "#shop" },
    { name: "Collections", href: "#collections" },
    { name: "About", href: "#about" },
    { name: "Personalisation", href: "#personalisation" },
    { name: "Gifting", href: "#gifting" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-1 flex justify-start lg:hidden">
            <ShoppingBag className="h-5 w-5 text-gold cursor-pointer hover:text-gold-light transition-smooth" />
          </div>
          
          <div className="flex-1 flex justify-center">
            <a href="/" className="block">
              <img 
                src={lumeLogo} 
                alt="LUME" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          <div className="flex-1 flex justify-end">
            <ShoppingBag className="h-5 w-5 text-gold cursor-pointer hover:text-gold-light transition-smooth hidden lg:block" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-8 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-sans tracking-wide text-foreground/70 hover:text-foreground transition-smooth relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
