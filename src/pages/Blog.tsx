import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "The Ultimate Guide to Ski Brand Pricing Strategy",
    description: "Learn how to position your ski brand in the luxury market with effective pricing strategies that reflect quality and exclusivity.",
    date: "March 15, 2024",
    slug: "ski-brand-pricing-guide"
  },
  {
    title: "5 Ways to Improve Your Ski Brand's Social Media Engagement",
    description: "Discover proven tactics to boost your ski brand's social media presence and connect with passionate skiing enthusiasts.",
    date: "March 12, 2024",
    slug: "improve-ski-brand-social-media"
  },
  {
    title: "Building a Strong Online Community for Your Ski Brand",
    description: "Create a loyal following by fostering an engaged online community around your boutique ski brand.",
    date: "March 8, 2024",
    slug: "building-ski-brand-community"
  },
  {
    title: "Sustainable Manufacturing in the Ski Industry",
    description: "Explore eco-friendly production methods and their impact on brand perception in the ski industry.",
    date: "March 5, 2024",
    slug: "sustainable-ski-manufacturing"
  },
  {
    title: "Digital Marketing Trends for Luxury Ski Brands",
    description: "Stay ahead of the curve with the latest digital marketing strategies specifically tailored for high-end ski brands.",
    date: "March 1, 2024",
    slug: "ski-digital-marketing-trends"
  },
  {
    title: "The Art of Ski Photography for E-commerce",
    description: "Master the techniques of capturing stunning ski product photos that drive online sales.",
    date: "February 28, 2024",
    slug: "ski-photography-ecommerce"
  },
  {
    title: "Email Marketing Strategies for Ski Brands",
    description: "Implement effective email campaigns that resonate with skiing enthusiasts and drive conversions.",
    date: "February 25, 2024",
    slug: "ski-email-marketing"
  },
  {
    title: "Leveraging User-Generated Content in Ski Marketing",
    description: "Harness the power of authentic customer content to build trust and showcase your ski brand.",
    date: "February 22, 2024",
    slug: "ski-ugc-marketing"
  },
  {
    title: "SEO Best Practices for Ski E-commerce Websites",
    description: "Optimize your ski brand's online presence with these proven SEO techniques.",
    date: "February 19, 2024",
    slug: "ski-ecommerce-seo"
  },
  {
    title: "Creating Compelling Product Descriptions for Ski Equipment",
    description: "Write persuasive product descriptions that highlight the unique features of your ski gear.",
    date: "February 16, 2024",
    slug: "ski-product-descriptions"
  },
  {
    title: "Influencer Marketing in the Ski Industry",
    description: "Partner with the right influencers to amplify your ski brand's reach and authenticity.",
    date: "February 13, 2024",
    slug: "ski-influencer-marketing"
  },
  {
    title: "Analytics and Data-Driven Decision Making for Ski Brands",
    description: "Use data analytics to inform your ski brand's marketing and business strategies.",
    date: "February 10, 2024",
    slug: "ski-brand-analytics"
  },
  {
    title: "The Psychology of Color in Ski Brand Design",
    description: "Understanding color theory and its impact on ski brand perception and customer behavior.",
    date: "February 7, 2024",
    slug: "ski-brand-color-psychology"
  },
  {
    title: "Content Marketing Calendar for Ski Brands",
    description: "Plan your content strategy around the skiing season to maximize engagement and sales.",
    date: "February 4, 2024",
    slug: "ski-content-calendar"
  },
  {
    title: "Customer Retention Strategies for Ski Brands",
    description: "Build lasting relationships with your customers through effective retention programs.",
    date: "February 1, 2024",
    slug: "ski-customer-retention"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ski Industry Insights</h1>
          <p className="text-xl text-gray-600">Expert advice and analysis for boutique ski brands</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;