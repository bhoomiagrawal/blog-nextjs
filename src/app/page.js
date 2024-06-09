// import axios from "axios";
// import Link from "next/link";
// import BlogCard from "../components/BlogCard";

// // Ensure SSR is used
// export async function getServerSideProps() {
//   try {
//     const response = await axios.get(
//       `${process.env.NEXT_PUBLIC_API_URL}/blogs`
//     );
//     const blogs = response.data;

//     return {
//       props: {
//         blogs,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching blogs:", error);
//     return {
//       props: {
//         blogs: [],
//       },
//     };
//   }
// }

// export default function HomePage({ blogs }) {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8">Blog Listing</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogs.map((blog) => (
//           <Link href={`/blog/${blog.slug}`} key={blog.slug}>
//             <a>
//               <BlogCard blog={blog} />
//             </a>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

import axios from "axios";
import Link from "next/link";

import BlogCard from "../components/BlogCard";

export const metadata = {
  title: "Blog Listing - My Blog",
  description: "Welcome to My Blog. Read the latest posts here.",
};

export default async function HomePage() {
  let blogs = [];

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs`
    );
    blogs = response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.slug}`} key={blog.slug}>
            <BlogCard blog={blog} />
          </Link>
        ))}
      </div>
    </div>
  );
}
