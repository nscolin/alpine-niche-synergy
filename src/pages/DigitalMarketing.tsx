import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary mb-4">Digital Marketing Solutions</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic social media management, content creation, and targeted advertising campaigns for boutique ski brands.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Digital Marketing Strategy"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Social Media Management</h3>
                <p className="text-gray-600">Engage your audience with compelling content across all major social platforms.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Content Creation</h3>
                <p className="text-gray-600">Professional photography, videography, and copywriting services tailored for ski brands.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Paid Advertising</h3>
                <p className="text-gray-600">Targeted campaigns across Google, Facebook, and Instagram to reach your ideal customers.</p>
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