'use client';

import React, { useState, useEffect } from 'react';
import { FiUpload } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

interface ImageUploadFormProps {
  error?: string;
  initialPreview?: string; // Accept an initial preview URL
  onImageChange: (file: File | null) => void;
}

const ImageUploadForm: React.FC<ImageUploadFormProps> = ({
  error,
  initialPreview,
  onImageChange,
}) => {
  const [preview, setPreview] = useState<string | null>(initialPreview || null);

  useEffect(() => {
    if (initialPreview) {
      setPreview(initialPreview); // Set preview to current image URL
    }
  }, [initialPreview]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
    onImageChange(file);
  };

  const handleRemoveImage = () => {
    setPreview(null);
    onImageChange(null);
  };

  return (
    <div className="mb-6">
      {!preview ? (
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4 hover:border-gray-500 transition-all duration-200 relative">
          <FiUpload className="text-gray-500 text-3xl mb-2" />
          <p className="text-sm text-gray-500 mb-2">Click to upload or drag and drop</p>
          <input
            id="imageUrl"
            name="imageUrl"
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleInputChange}
          />
        </div>
      ) : (
        <div className="relative mt-4">
          <img src={preview} alt="Preview" className="w-full rounded-lg shadow-md" />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow hover:bg-red-600 transition-all duration-200"
          >
            <MdClose className="text-lg" />
          </button>
        </div>
      )}
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default ImageUploadForm;
