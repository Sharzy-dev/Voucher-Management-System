import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

function Uploadherebox() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];

      if (!allowedTypes.includes(file.type)) {
        setError('Only PDF, JPG, JPEG, and PNG files are allowed.');
        setImage(null);
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        setError('File size should not exceed 10MB.');
        setImage(null);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setError('');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-md p-6 bg-white rounded-lg">
      {/* Title */}
      <h3 className="font-semibold mb-1">Upload here</h3>
      <p className="text-sm text-gray-500 mb-4">
        Supported file format: pdf, jpg, and png.
      </p>

      {/* Upload Box */}
      <label
        htmlFor="fileUpload"
        className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-[#008080] rounded-lg p-8 text-center"
      >
        <FaCloudUploadAlt className="text-[#008080] text-4xl mb-3" />
        <p className="text-[#008080] font-medium">
          Drag and drop files here or click to browse
        </p>
        <p className="text-gray-500 text-sm mb-4">Max file size 10MB</p>

        <span className="px-5 py-2 bg-[#008080] text-white rounded-md hover:bg-[#006666]">
          Choose files
        </span>
        <input
          id="fileUpload"
          type="file"
          accept="image/*,application/pdf"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {image && (
        <div className="mt-4">
          <p className="text-sm text-gray-500">Preview:</p>
          <img
            src={image}
            alt="Uploaded Preview"
            className="w-full max-h-44 object-contain rounded-md border"
          />
        </div>
      )}
    </div>
  );
}

export default Uploadherebox;
