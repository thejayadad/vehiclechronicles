import PostForm from '@/components/post/new/post-form';
import { getPostById } from '@/lib/action/post/get-post-byid';
import React from 'react';

const UpdatePostPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const post = await getPostById(id);

  console.log(post); // Ensure `imageUrl` and `description` are included

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Update Post</h1>
      <PostForm
        userEmail={post.userEmail}
        initialData={{
          title: post.title,
          description: post.description,
          imageUrl: post.imageUrl, // Pass the current image URL
        }}
        postId={post.id}
      />
    </div>
  );
};

export default UpdatePostPage;
