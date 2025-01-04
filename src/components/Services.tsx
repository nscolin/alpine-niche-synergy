import { Laptop, ShoppingCart, Palette } from "lucide-react";

const services = [
  {
    title: "Digital Marketing",
    description: "Strategic social media management, content creation, and targeted advertising campaigns.",
    icon: Laptop,
    href: "#digital-marketing",
  },
  {
    title: "E-commerce",
    description: "Custom online store development, optimization, and conversion rate enhancement.",
    icon: ShoppingCart,
    href: "#ecommerce",
  },
  {
    title: "Branding",
    description: "Brand identity development, visual design, and positioning strategy.",
    icon: Palette,
    href: "#branding",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored for boutique ski brands
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-primary mb-4">
                <service.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
                href={service.href}
                className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};