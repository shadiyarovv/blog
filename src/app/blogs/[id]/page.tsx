import Comments from "@/components/Comments";
import NewCommentForm from "@/components/NewCommentForm";
import prisma from "@/lib/db";
import { FC } from "react";

interface PostDetailsPageProps {
  params: {
    id: string;
  };
}

const PostDetailsPage: FC<PostDetailsPageProps> = async ({ params }) => {
  const postDetails = await prisma.post.findFirst({
    where: {
      id: params.id,
    },
    include: {
      author: true,
    },
  });

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">{postDetails?.title}</h1>
      <p>Written by: {postDetails?.author?.name}</p>
      <div className="my-4">
        <p>
          {postDetails?.content}
        </p>
      </div>
      <Comments postId={params.id}/>
      <NewCommentForm  postId={params.id}/>
    </div>
  );
};

export default PostDetailsPage;
