import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Target, TrendingUp, Users } from "lucide-react";

const EmailMarketing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary mb-4">Email Marketing for Ski Accessories</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Drive recurring sales and customer loyalty through targeted email campaigns designed specifically for ski enthusiasts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Seasonal Campaign Strategy</h3>
                <p className="text-gray-600">
                  Perfectly timed email campaigns that align with ski seasons, weather conditions, and upcoming winter sports events to maximize engagement and sales.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Customer Segmentation</h3>
                <p className="text-gray-600">
                  Target different customer segments based on skiing preferences, purchase history, and engagement levels for more personalized messaging.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-3">Automated Workflows</h3>
                <p className="text-gray-600">
                  Set up automated email sequences for welcome series, abandoned carts, post-purchase follow-ups, and product recommendations.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1490031781863-29b9bdbea131?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Email Marketing Strategy"
                className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover object-center"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Mail className="h-12 w-12 text-blue-500 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Targeted Campaigns</h4>
              <p className="text-gray-600">Personalized emails based on customer preferences and behavior.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Users className="h-12 w-12 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold mb-2">List Management</h4>
              <p className="text-gray-600">Strategic segmentation and list maintenance for optimal engagement.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Target className="h-12 w-12 text-red-500 mb-4" />
              <h4 className="text-xl font-semibold mb-2">A/B Testing</h4>
              <p className="text-gray-600">Optimize subject lines, content, and CTAs for maximum impact.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <TrendingUp className="h-12 w-12 text-purple-500 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Performance Analytics</h4>
              <p className="text-gray-600">Detailed reporting on open rates, clicks, and conversions.</p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Sales?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let us help you create email campaigns that keep your customers coming back for more.
            </p>
            <a href="/#contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmailMarketing;
