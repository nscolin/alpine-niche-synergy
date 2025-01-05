import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Thompson",
    role: "Marketing Director at Alpine Elite",
    content: "Their strategic approach transformed our digital presence. Our online sales increased by 150% within six months.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    name: "Michael Chen",
    role: "CEO of PowderPro Skis",
    content: "The best investment we've made for our brand. Their e-commerce expertise helped us reach a global market.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    name: "David Miller",
    role: "Founder of Peak Performance Gear",
    content: "Outstanding results! Their branding strategy helped us stand out in a competitive market.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
];

export const CustomerReviews = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our clients say about their experience working with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg text-secondary">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};