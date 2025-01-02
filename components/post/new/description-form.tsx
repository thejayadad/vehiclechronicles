'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

// Dynamically import ReactQuill to avoid server-side rendering issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: true });

const DescriptionForm = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (value: any) => {
    setContent(value);
  };

  return (
    <div className="mb-4">
      <label className="block text-lg font-medium text-gray-700 mb-2">
        Description
      </label>
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        placeholder="Write your experience..."
        className="bg-white border border-gray-300 rounded-md shadow-sm"
        theme="snow"
      />
    </div>
  );
};

export default DescriptionForm;
