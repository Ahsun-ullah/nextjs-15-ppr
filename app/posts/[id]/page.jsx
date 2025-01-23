import Link from "next/link";
import { Suspense, use } from "react";

const fetchPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "force-cache",
    next: {
      revalidate: 300,
    },
  });
  const data = await res.json();
  return data;
};

const fetchAuthor = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "force-cache",
    next: {
      revalidate: 300,
    },
  });
  const data = await res.json();
  return data;
};

export default function SinglePostPage({ params }) {
  return (
    <div className="flex gap-2 items-center">
      <Link href="/posts">Back</Link>
      <div>
        <h1 className="text-2xl font-bold">Post Details Page</h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <PostDetails params={params} />
      </Suspense>
    </div>
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

const AuthorDetails = ({ userId }) => {
  const author = use(fetchAuthor(userId));

  return (
    <div className="bg-card border border-border p-4 bg-gray-100 rounded-md">
      <p className="text-sm text-gray-500">{author.name}</p>
    </div>
  );
};
