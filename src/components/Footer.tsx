import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/lovable-uploads/9bd02edf-0d23-4803-9126-942913ae702c.png" alt="Logo" className="h-8 w-auto mb-4 invert" />
            <p className="text-gray-400 max-w-xs">
              ♦♦ Black-Diamond Digital Excellence ♦♦
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:noah@ncolinllc.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                noah@ncolinllc.com
              </a>
              <a href="tel:+5700000000" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                (570) 000-0000
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} N Colin Consulting LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
