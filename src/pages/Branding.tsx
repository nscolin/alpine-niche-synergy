import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Branding = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary mb-4">Brand Development</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Brand identity development, visual design, and positioning strategy for ski brands.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Branding Services"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Brand Strategy</h3>
                <p className="text-gray-600">Develop a unique brand voice and positioning in the ski industry.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Visual Identity</h3>
                <p className="text-gray-600">Create compelling visual elements that resonate with your target audience.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Brand Guidelines</h3>
                <p className="text-gray-600">Comprehensive guidelines to ensure consistent brand presentation.</p>
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