import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
}

export const BlogPost = ({ title, date, content }: BlogPostProps) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <article className="prose lg:prose-xl">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <div className="text-gray-600 mb-8">{date}</div>
          <div className="prose prose-blue">{content}</div>
        </article>
      </div>
      <Footer />
    </div>
  );
};