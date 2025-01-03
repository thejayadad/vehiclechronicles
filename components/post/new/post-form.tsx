'use client';

import React, { useState } from 'react';
import { createPost } from '@/lib/action/post/create-post';
import { updatePost } from '@/lib/action/post/update-post';
import TitleForm from './title-form';
import ImageUploadForm from './image-upload-form';

interface PostFormProps {
  userEmail: string;
  initialData?: {
    title?: string;
    description?: string;
    imageUrl?: string;
  };
  postId?: string; // Optional post ID for updates
}

const PostForm: React.FC<PostFormProps> = ({ userEmail, initialData, postId }) => {
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<Record<string, string[] | undefined>>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (image) {
      formData.append('imageUrl', image);
    }

    try {
      if (postId) {
        await updatePost(postId, null, formData); // Update existing post
      } else {
        await createPost(null, formData); // Create new post
      }
    } catch (err: any) {
      setError(err.error || {});
    }
  };

  return (
    <form className="max-w-4xl mx-auto py-8 px-4" onSubmit={handleSubmit}>
      {/* Hidden User Email */}
      <input type="hidden" name="userEmail" value={userEmail} />

      {/* Title Field */}
      <TitleForm initialData={{ title: initialData?.title || '' }} error={error?.title?.[0]} />

      {/* Image Upload Field */}
      <ImageUploadForm
        error={error?.imageUrl?.[0]}
        initialPreview={initialData?.imageUrl} // Pass the current image URL for editing
        onImageChange={setImage}
      />

      {/* Description Field */}
{/* Description Field */}
<div className="mb-4">
  <textarea
    id="description"
    name="description"
    rows={4}
    placeholder="Description..."
    defaultValue={initialData?.description || ''} // Use string directly
    className="w-full outline-none border border-gray-300 rounded-md p-2"
  />
  {error?.description?.[0] && <p className="text-sm text-red-500 mt-2">{error?.description?.[0]}</p>}
</div>


      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-gray-600 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-700 transition-all duration-200"
        >
          {postId ? 'Update Post' : 'Create Post'}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
