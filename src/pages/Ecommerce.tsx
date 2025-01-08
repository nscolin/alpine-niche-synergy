import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Ecommerce = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary mb-4">E-commerce Solutions for Ski Accessories</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized online store development and optimization for ski gear and accessories retailers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Seasonal Inventory Management</h3>
                <p className="text-gray-600">Smart inventory systems designed for seasonal ski gear and accessories.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Multi-Channel Integration</h3>
                <p className="text-gray-600">Seamless integration with ski resorts, retail locations, and online marketplaces.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Mobile-First Shopping</h3>
                <p className="text-gray-600">Optimized mobile experience for on-slope browsing and purchasing.</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="E-commerce Solutions"
                className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Ecommerce;