"use client";

import { ChangeEvent, useState } from "react";

const NewCommentForm = () => {
  const [comment, setComment] = useState<string>("");

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = () => {
    console.log(comment);
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
