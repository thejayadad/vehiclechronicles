import React from 'react';

interface TitleProps {
  initialData?: {
    title?: string; // Optional initial title for editing
  };
  error?: string; // Error message for the title
}

const TitleForm: React.FC<TitleProps> = ({ initialData, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
        Title
      </label>
      <input
        id="title"
        name="title"
        defaultValue={initialData?.title || ''} // Set the initial value or leave blank
        placeholder="Title the Experience..."
        className={`w-full resize-none text-lg border-b ${
          error ? 'border-red-500' : 'border-gray-300'
        } placeholder-gray-500 text-gray-800 focus:ring-0 focus:outline-none pb-2`}
      />
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>} {/* Show error if present */}
    </div>
  );
};

export default TitleForm;
