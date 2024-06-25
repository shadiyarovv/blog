const Comments = () => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">Comments</h2>
      <ul>
        <li className="mb-4 bg-slate-300 p-2">
          <div className="flex items-center mb-2 gap-2">
            <p className="text-blue-500 font-bold">John Doe</p>
            <p className="text-gray-500">10 November, 2024</p>
          </div>

          <p>Great post, brother</p>
        </li>
      </ul>
    </div>
  );
};

export default Comments;
