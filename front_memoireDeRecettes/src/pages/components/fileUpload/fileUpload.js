import { useState } from "react";
import AlertBad from "../alert/AlertBad";

const API_INDEX = "/api/recette";

const MAX_NUM_IMAGES = 3;

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  //console.log(images);

  const handleImageLoad = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      //console.log(reader);
    });
  };

  const handleImageChange = ({ target: { files } }) => {
    const numNewImages = files.length;
    const currentNumImages = images.length;
    if (currentNumImages + numNewImages <= MAX_NUM_IMAGES) {
      const updatedImages = [...images];
      for (let i = 0; i < numNewImages; i++) {
        const file = files[i];
        handleImageLoad(file).then((image) => {
          updatedImages.push(image);
          if (updatedImages.length === currentNumImages + numNewImages) {
            setImages(updatedImages);
          }
        });
      }
    } else {
      AlertBad(
        "Oups...",
        `Vous pouvez ajouter ${MAX_NUM_IMAGES} images maximum.`
      );
    }
  };

  const handleSubmit2 = async (event) => {
    console.log(event);
    event.preventDefault();
    const formData = new FormData();
    console.log(formData);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
      console.log(formData);
    }
    try {
      const response = await fetch(`${API_INDEX}/uploadImage`, {
        method: "POST",
        body: formData,
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Upload failed");
      }
      setImages([]);
      alert("Images uploaded successfully");
    } catch (error) {
      console.error(error);
      AlertBad("Oups...", `Erreur lors du téléchargement des images.`);
    }
  };

  const renderImages = () => {
    return (
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`uploaded image ${index}`}
            style={{ width: "200px" }}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit2}>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
        <button type="submit">Upload Images</button>
      </form>
      {images.length > 0 && renderImages()}
    </div>
  );
};

export default ImageUpload;