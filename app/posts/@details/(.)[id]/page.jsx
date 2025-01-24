import PostDetails from "@/components/post-details";
import PostDetailsModal from "@/components/post-details-modal";
import { Suspense } from "react";

export default function PostDetailsPage({ params }) {
  return (
    <PostDetailsModal>
      <Suspense fallback={<div>Loading...</div>}>
        <PostDetails params={params} />
      </Suspense>
    </PostDetailsModal>
  );
}
