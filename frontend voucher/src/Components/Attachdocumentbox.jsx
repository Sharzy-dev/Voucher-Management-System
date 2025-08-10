import React from 'react';

const AttachDocumentbox = () => {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
      <div className="space-y-2">
        {/* Upload Icon */}
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>

        {/* Instruction Text */}
        <p className="text-sm text-gray-600">
          <span className="font-medium text-blue-600">Click to browse</span> or drag and drop files here
        </p>

        {/* File Requirements */}
        <p className="text-xs text-gray-500">
          Supported file format: pdf, jpg, and png. Max file size 10MB
        </p>
      </div>
    </div>
  );
};

export default AttachDocumentbox;