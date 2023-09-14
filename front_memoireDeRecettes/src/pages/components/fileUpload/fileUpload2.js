import { useState } from "react"

export default function FileUpload2({ onImageUpload }) {
  
  const [selectedImage, setSelectedImage] = useState();

  const handleChange = (event) => {
    const imageChoosed = event.target.files[0];
    setSelectedImage(URL.createObjectURL(imageChoosed)); // crée une url avec l'image choisi pour pouvoir l'afficher
    onImageUpload(imageChoosed); // Appelle la fonction de rappel avec le fichier image choisi
  }
  
  return (
    <div>
        <input type="file" accept="image/*" onChange={handleChange}/>
        {selectedImage && <img className="imageRecette" src={selectedImage} alt="selection"/>}
    </div>
  )
}