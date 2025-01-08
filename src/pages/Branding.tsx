import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Branding = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary mb-4">Ski Accessories Brand Development</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Creating distinctive brand identities for ski accessories that resonate with winter sports enthusiasts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1520529986992-d4ce365fcfc9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Branding Services"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Visual Identity Design</h3>
                <p className="text-gray-600">Creating distinctive logos and visual elements that capture the spirit of winter sports.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Brand Story Development</h3>
                <p className="text-gray-600">Crafting compelling narratives that connect with ski and snowboard enthusiasts.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Packaging Design</h3>
                <p className="text-gray-600">Eye-catching, functional packaging designed for ski accessories and equipment.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Branding;
