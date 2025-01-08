import { Laptop, Mail, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Email Marketing",
    description: "Strategic email campaigns, customer segmentation, and automated workflows to drive recurring sales.",
    icon: Mail,
    href: "/email-marketing",
  },
  {
    title: "Digital Marketing",
    description: "Strategic social media management and targeted advertising campaigns for ski accessories brands.",
    icon: Laptop,
    href: "/digital-marketing",
  },
  {
    title: "Branding",
    description: "Brand identity development and visual design strategy for ski and winter sports accessories.",
    icon: Palette,
    href: "/branding",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored for boutique ski accessories brands
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-blue-500 mb-4">
                <service.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
                href={service.href}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
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