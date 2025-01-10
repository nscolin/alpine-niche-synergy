import { useParams } from "react-router-dom";
import { BlogPost as BlogPostComponent } from "@/components/BlogPost";
import { blogPosts } from "@/data/blogPosts";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <BlogPostComponent
      title={post.title}
      date={post.date}
      content={post.content}
    />
  );
};

export default BlogPostPage;