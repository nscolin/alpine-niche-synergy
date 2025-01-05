import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary mb-4">About Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Helping boutique ski brands reach new heights through digital excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  We're dedicated to elevating boutique ski brands through innovative digital solutions and strategic marketing approaches.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Our Expertise</h3>
                <p className="text-gray-600">
                  With years of experience in both the ski industry and digital marketing, we bring a unique perspective to help your brand succeed.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Our Approach</h3>
                <p className="text-gray-600">
                  We believe in data-driven strategies combined with creative excellence to deliver exceptional results for our clients.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&w=2023&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About Us"
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

export default About;
