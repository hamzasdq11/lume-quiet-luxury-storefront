import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const customerCare = [
    { name: "Contact Us", href: "#" },
    { name: "Shipping & Returns", href: "#" },
    { name: "Care Guide", href: "#" },
    { name: "FAQs", href: "#" },
  ];

  const aboutLinks = [
    { name: "Our Story", href: "#" },
    { name: "Craftsmanship", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
  ];

  return (
    <footer className="bg-cream-dark border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Customer Care */}
          <div>
            <h3 className="font-serif text-lg text-charcoal mb-6">
              Customer Care
            </h3>
            <ul className="space-y-3">
              {customerCare.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-warm-gray hover:text-gold transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About LUME */}
          <div>
            <h3 className="font-serif text-lg text-charcoal mb-6">
              About LUME
            </h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-warm-gray hover:text-gold transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-serif text-lg text-charcoal mb-6">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gold hover:text-gold-light transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-gold hover:text-gold-light transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-gold hover:text-gold-light transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
            <p className="font-sans text-sm text-warm-gray mt-6 max-w-xs">
              Stay inspired. Join our community for updates on new collections and exclusive offers.
            </p>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-sans text-sm text-warm-gray">
              © 2024 LUME. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="font-sans text-sm text-warm-gray hover:text-gold transition-smooth"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-sans text-sm text-warm-gray hover:text-gold transition-smooth"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
