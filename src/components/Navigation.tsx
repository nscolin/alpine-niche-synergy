import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src="/lovable-uploads/9bd02edf-0d23-4803-9126-942913ae702c.png" alt="Logo" className="h-8 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-secondary hover:text-primary transition-colors">Home</a>
            <div className="relative group">
              <button className="text-secondary hover:text-primary transition-colors">Services</button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <a href="#digital-marketing" className="block px-4 py-2 text-sm text-secondary hover:bg-gray-100">Digital Marketing</a>
                  <a href="#ecommerce" className="block px-4 py-2 text-sm text-secondary hover:bg-gray-100">E-commerce</a>
                  <a href="#branding" className="block px-4 py-2 text-sm text-secondary hover:bg-gray-100">Branding</a>
                </div>
              </div>
            </div>
            <a href="#about" className="text-secondary hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          <a href="#home" className="block px-3 py-2 text-secondary hover:text-primary">Home</a>
          <a href="#services" className="block px-3 py-2 text-secondary hover:text-primary">Services</a>
          <a href="#about" className="block px-3 py-2 text-secondary hover:text-primary">About</a>
          <a href="#contact" className="block px-3 py-2 text-secondary hover:text-primary">Contact</a>
        </div>
      </div>
    </nav>
  );
};