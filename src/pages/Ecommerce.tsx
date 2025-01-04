import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Ecommerce = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary mb-4">E-commerce Excellence</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Custom online store development, optimization, and conversion rate enhancement for ski brands.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Store Development</h3>
                <p className="text-gray-600">Custom e-commerce solutions built for performance and user experience.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Conversion Optimization</h3>
                <p className="text-gray-600">Data-driven strategies to increase sales and improve customer experience.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Analytics & Reporting</h3>
                <p className="text-gray-600">Comprehensive tracking and analysis of your online store's performance.</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="E-commerce Solutions"
                className="rounded-lg shadow-lg w-full"
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