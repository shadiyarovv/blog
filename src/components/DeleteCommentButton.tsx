"use client";

import axios from "axios";

const DeleteCommentButton = ({ commentId }: any) => {
  const handleDeleteComment = async (commentId: string) => {
    try {
      const response = await axios.delete("/api/comments", {
        data: { commentId },
      });

      if (response.status === 200) console.log("Comment deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={() => handleDeleteComment(commentId)}>delete</button>;
};

export default DeleteCommentButton;
