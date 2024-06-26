"use client";

import { FormData } from "@/types/blogs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

interface PostEditFormProps {
  title: string;
  content: string;
  postId: string;
}

const PostEditForm: FC<PostEditFormProps> = ({ title, content, postId }) => {
  const [formData, setFormData] = useState<FormData>({
    title: title,
    content: content,
  });

  const router = useRouter();

  const inputClass =
    "w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300";

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.put("/api/posts", { ...formData, postId });

      if (response.status === 200) {
        router.push(`/blogs/${postId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          className={inputClass}
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <ReactTextareaAutosize
          className={inputClass}
          minRows={5}
          placeholder="Content"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 py-2 px-4 text-white w-full rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default PostEditForm;
