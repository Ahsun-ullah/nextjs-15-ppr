import Link from "next/link";
import { Suspense, use } from "react";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default function PostPage() {
  return (
    <div className="container max-w-3xl mx-auto space-y-4 my-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">List Of Posts</h1>
        <p className="text-gray-500 text-sm">
          By clicking on the post you can read the post details.
        </p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <PostList fetchPost={fetchPosts()} />
      </Suspense>
    </div>
  );
}

const PostList = ({ fetchPost }) => {
  const posts = use(fetchPost);

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-card border border-border p-4 bg-gray-100 rounded-md"
        >
          <h2 className="text-lg font-bold ">
            <Link href={`/posts/${post.id}`}>
              {post.id} - {post.title}
            </Link>
          </h2>
        </div>
      ))}
    </div>
  );
};
