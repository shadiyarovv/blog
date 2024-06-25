"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEvent, useState } from "react";

interface NewCommentFormProps {
  postId: string;
}

const NewCommentForm: FC<NewCommentFormProps> = ({ postId }) => {
  const [comment, setComment] = useState<string>("");
  const router = useRouter();

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = async (e: FormEvent<HTMLFormElement>) => {
    if (comment.trim() !== '') {
      try {
        const newComment = await axios.post("/api/comments", {
          postId,
          text: comment,
        });

        if (newComment.status === 200) {
          router.refresh();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className="mt-4" onSubmit={handleSubmitComment}>
      <label
        htmlFor="comment"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Add comment
      </label>
      <input
        type="text"
        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none"
        value={comment}
        onChange={handleCommentChange}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-2"
      >
        Submit Comment
      </button>
    </form>
  );
};

export default NewCommentForm;
