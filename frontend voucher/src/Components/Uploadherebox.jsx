import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa'
function Uploadherebox () {
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];

      if (!allowedTypes.includes(file.type)) {
        setError('Only JPG, JPEG, and PNG files are allowed.');
        setImage(null);
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should not exceed 5MB.');
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
    <div  className=" justify-center items-center 
    flex flex-col mt-[17px]  rounded-lg border-[#008080] w-[466px] h-[362px] border-2 border-dashed p-10 ">
     <FaCloudUploadAlt className="text-teal-600 w-15 h-15" />
     <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4 block  w-full text-sm text-gray-600  "
      />

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {image && (
        <div className="">
          <p className=" text-sm text-gray-500">Preview:</p>
             
          <img
            src={image}
            alt="Uploaded Preview" 
            className="w-full max-h-44 object-contain rounded-md border "/>
           
             </div>
                )}
                <div> 
                  {/* <img src={arrow} alt='logo'className="text-teal-600 text-2xl mb-2"/> */}
            <h2 className=' flex flex-col w-95.5  h-16.5 font-sans font-[400px] text-2xl 
            justify-center items-center text-[#008080]'>Drag and drop files here or click <br/>
              browse</h2>
              <p className=' flex flex-col font-light text-2xl justify-center items-center  text-[#008080]'>Max file size 10MB</p>
             </div>

            </div>
          );
          };

export default Uploadherebox