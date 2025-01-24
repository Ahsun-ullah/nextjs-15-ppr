import PostDetails from "@/components/post-details";
import Link from "next/link";
import { Suspense } from "react";

export default function SinglePostPage({ params }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Link className="items-start font-semibold mt-4" href="/posts">
        Back
      </Link>
      <div>
        <h1 className="text-2xl font-bold">Post Details Page</h1>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <PostDetails params={params} />
      </Suspense>
    </div>
  );
}
