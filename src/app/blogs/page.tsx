import prisma from "@/lib/db";
import Link from "next/link";

const BlogsPage = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: true,
    },
  });

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => {
          return (
            <Link
              key={post.id}
              href={`/blogs/${post.id}`}
              className="border border-slate-700 p-4 flex flex-col gap-2"
            >
              <h2 className="font-bold text-md">{post.title}</h2>
              <p className="font-light text-sm">
                Written by: {post.author?.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsPage;
