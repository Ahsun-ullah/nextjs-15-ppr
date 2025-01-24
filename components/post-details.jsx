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

export default function PostDetails({ params }) {
  const { id } = use(params);
  const post = use(fetchPost(id));

  return (
    <div className="space-y-4">
      <div className="bg-card border border-border p-4 bg-gray-100 rounded-md">
        <h2 className="text-lg font-bold">{post.title}</h2>
        <h2 className="text-lg font-bold flex items-center">
          Author Details :
          <Suspense fallback={<div>Loading...</div>}>
            <AuthorDetails userId={post.userId} />
          </Suspense>
        </h2>
        <div>
          <p className="text-sm text-gray-500">{post.body}</p>
        </div>
      </div>
    </div>
  );
}

const AuthorDetails = ({ userId }) => {
  console.log(userId);
  const author = use(fetchAuthor(userId));

  return (
    <div className="p-1 rounded-md">
      <p className="text-m text-gray-600">{author.name}</p>
    </div>
  );
};
