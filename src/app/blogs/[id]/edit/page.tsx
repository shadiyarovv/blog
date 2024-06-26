import PostEditForm from "@/components/PostEditForm";
import prisma from "@/lib/db";
import { FC } from "react";

interface PostEditPageParams {
  params: {
    id: string;
  };
}

const PostEditPage: FC<PostEditPageParams> = async ({ params }) => {
  const currentPost = await prisma.post.findFirst({
    where: {
      id: params.id,
    },
  });

  return (
    <div className="max-w-4xl mx-auto py-8">
      <PostEditForm
        title={currentPost?.title}
        content={currentPost?.content}
        postId={currentPost?.id}
      />
    </div>
  );
};

export default PostEditPage;
