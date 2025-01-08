import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary mb-4">Digital Marketing for Ski Accessories</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized digital marketing strategies to reach skiing enthusiasts and grow your accessories brand.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Digital Marketing Strategy"
                className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover object-center"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Seasonal Campaign Management</h3>
                <p className="text-gray-600">Strategic marketing campaigns aligned with ski seasons and industry events.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Social Media Excellence</h3>
                <p className="text-gray-600">Engaging content creation for ski enthusiasts across Instagram, Facebook, and TikTok.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Performance Marketing</h3>
                <p className="text-gray-600">Targeted advertising to reach ski enthusiasts and resort visitors.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalMarketing;