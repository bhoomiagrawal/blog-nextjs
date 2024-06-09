import axios from "axios";

// Fetch dynamic paths for all blog posts
export async function generateStaticParams() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
  const blogs = response.data;

  return blogs.map((blog) => ({ slug: blog.slug }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = params;
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs/${slug}`
  );
  const blog = response.data;

  return {
    title: `${blog.title} - My Blog`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://example.com/blog/${slug}`,
      type: "article",
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = params;
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs/${slug}`
  );
  const blog = response.data;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        Created on: {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}
