import React from 'react'
// import Attachdocumentbox from "./src/Components/Attachdocumentbox";
import AttachDocumentbox from './Attachdocumentbox';

const UploadSection = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h3 className="text-lg font-medium mb-4">Attach Supporting documents</h3>
      <AttachDocumentbox />
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
        Choose files
      </button>
    </div>
  );
};

export default UploadSection