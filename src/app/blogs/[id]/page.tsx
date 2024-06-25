import Comments from "@/components/Comments";
import NewCommentForm from "@/components/NewCommentForm";

const PostDetailsPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">Post Title here</h1>
      <p>Written by: John Doe</p>
      <div className="my-4">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
          accusantium atque. Quae veniam deleniti nostrum facere accusamus
          corporis distinctio quod maxime aut nulla. Numquam error laboriosam,
          aliquam esse explicabo saepe.
        </p>
      </div>
      <Comments />
      <NewCommentForm />
    </div>
  );
};

export default PostDetailsPage;
