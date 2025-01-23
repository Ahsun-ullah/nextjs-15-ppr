import { Suspense } from "react";

export default function PostDetailsPage({ params }) {
  return (
    <PostModal>
      <Suspense fallback={<div>Loading...</div>}>
        <PostDetails params={params} />
      </Suspense>
    </PostModal>
  );
}

const PostDetails = ({ params }) => {
  const { id } = use(params);
  const post = use(fetchPost(id));

  return (
    <div className="space-y-4">
      <div className="bg-card border border-border p-4 bg-gray-100 rounded-md">
        <h2 className="text-lg font-bold">{post.title}</h2>
        <h2 className="text-lg font-bold">Author Details</h2>

        <Suspense fallback={<div>Loading...</div>}>
          <AuthorDetails userId={post.userId} />
        </Suspense>
        <p className="text-sm text-gray-500">{post.body}</p>
      </div>
    </div>
  );
};

const PostModal = () => {
  return (
    <dialog className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p className="text-sm text-gray-500">{post.body}</p>
    </dialog>
  );
};
