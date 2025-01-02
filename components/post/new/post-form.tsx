'use client';

import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

const PostForm = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Generate a preview URL for the image
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add logic to handle form submission, including image and description
    console.log('Form submitted');
    console.log(image); // The uploaded image file
  };

  return (
    <form
      className="max-w-4xl mx-auto py-8 px-4"
      onSubmit={handleSubmit}
    >
      {/* Title Field */}
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          placeholder="Title the Experience..."
          className="w-full resize-none text-lg border-b border-gray-300 placeholder-gray-500 text-gray-800 focus:ring-0 focus:outline-none pb-2"
          required
        />
      </div>

  

      {/* Enhanced Image Upload Field */}
      <div className="mb-6">
        {!preview ? (
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4 hover:border-gray-500 transition-all duration-200">
            <FiUpload className="text-gray-500 text-3xl mb-2" />
            <p className="text-sm text-gray-500 mb-2">Click to upload or drag and drop</p>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              className="opacity-0 absolute inset-0 cursor-pointer"
              onChange={handleImageChange}
            />
          </div>
        ) : (
          <div className="relative mt-4">
            <img
              src={preview}
              alt="Preview"
              className="w-full rounded-lg shadow-md"
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow hover:bg-red-600 transition-all duration-200"
            >
              <MdClose className="text-lg" />
            </button>
          </div>
        )}
      </div>
        <div>
            <textarea
            rows={4}
            placeholder='Description...'
            
            />
        </div>

      {/* Publish Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-gray-600 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-700 transition-all duration-200"
        >
          Publish
        </button>
      </div>
    </form>
  );
};

export default PostForm;
