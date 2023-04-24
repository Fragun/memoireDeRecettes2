import React, { useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const maxNumImages = 3;
    if (files.length <= maxNumImages) {
      const updatedImages = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          updatedImages.push(reader.result);
          if (updatedImages.length === files.length) {
            setImages(updatedImages);
          }
        };
      }
    } else {
      alert(`You can only upload up to ${maxNumImages} images.`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submit logic here, such as uploading images to server
  };

  return (
    <div>
      <div onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
        <button type="submit">Upload Images</button>
      </div>
      {images.length > 0 && (
        <div>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`uploaded image ${index}`}
              style={{ width: '200px' }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;