import React from 'react';

function ImageViewer({ imageData }) {
  if (!imageData) {
    return null;
  }

  const chunkSize = 0x8000; 
  const data = new Uint8Array(imageData.data);

  let base64String = '';

  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    base64String += String.fromCharCode.apply(null, chunk);
  }

  return (
    <img src={base64String} alt="User Avatar" className={`imageAvatar`}/>
  );
}

export default ImageViewer;