import prisma from "@/lib/db";
import { format } from "date-fns";
import { FC } from "react";
import DeleteCommentButton from "./DeleteCommentButton";

interface CommentsComponentProps {
  postId: string;
}

const Comments: FC<CommentsComponentProps> = async ({ postId }) => {
  const comments = await prisma.comment.findMany({
    where: { postId },
    include: {
      author: true,
    },
  });

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">Comments</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li className="mb-4 bg-slate-300 p-2">
              <div className="flex justify-between">
                <div className="flex items-center mb-2 gap-2">
                  <p className="text-blue-500 font-bold">
                    {comment.author?.name}
                  </p>
                  <p className="text-gray-500">
                    {format(comment.createdAt, "MMMM d, yyyy")}
                  </p>
                </div>
                <div>
                  <DeleteCommentButton
                    commentId={comment.id}
                  />
                </div>
              </div>

              <p>{comment.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
