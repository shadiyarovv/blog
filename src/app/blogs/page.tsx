import { posts } from "@/data/posts";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-4">
        {posts.map((post) => {
          return (
            <Link key={post.id} href={`/blogs/${post.id}`}>
              <h2>{post.title}</h2>
              <p>Written by: {post.username}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
