import { useState } from "react";
import AlertBad from "../alert/AlertBad";
import SweetAlert from "../alert/AlertSweet";
const URL_API = "/api/recette";


export default function FileUpload({ onFileUpload }) {

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  console.log(previewImage);
console.log(selectedFile);

  const handleSubmit3 = async (event) => {
    event.preventDefault();
    console.log(event);
    if (!selectedFile) {
      AlertBad('Oupss', 'Veuillez selectionner un fichier image.');
      return;
    }

    // Création d'une instance de l'objet FileReader qui permet de lire les fichiers de type File ou Blob
    const fileReader = new FileReader();
    console.log(fileReader);
    // Lecture du contenu du fichier choisi avec l'input
    fileReader.readAsArrayBuffer(selectedFile);
    // Accès au contenu du fichier une fois la lecture terminée grace à l'événement onload
    fileReader.onload = async () => {
      // récupération du contenu du fichier lu
      const buffer = fileReader.result;
      // création d'un objet blob à partir du contenu du fichier lu et du type du fichier (ex: image/png)
      const blob = new Blob([buffer], { type: selectedFile.type });
      console.log(selectedFile.type);

      // invocation de la fonction en passant en paramètre l'objet blob
      const base64 = await convertBlobToBase64(blob);
      console.log({ base64 });

      // création d'un objet avec la clé value et comme valeur le fichier codé
      const obj = { value: base64 };
      console.log(obj);
      onFileUpload(obj);

    };
  };

  // déclaration de la fonction lors d'un changement de fichier dans l'input avant validation
  const handleFileChange = (event) => {
    // récupération du fichier
    const file = event.target.files[0];
    //on l'attribue au useState
    setSelectedFile(file);
    // s'il y a un fichier on le lit et l'attribue à previewImage qui est le src de la balise img
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        setPreviewImage(fileReader.result);
      };
    } else {
      setPreviewImage(null);
    }
  };

  // déclaration de la fonction qui récupére un objet blob, le lit et le convertit en
  // une chaine de caractères base64 qui permet de coder tout type de données
  // une fois la promesse résolue, si aucune erreur n'a été rencontré, le fichier codé et renvoyé en retour
  // de fonction
  const convertBlobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      console.log(fileReader);
      fileReader.readAsDataURL(blob);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="text-align-cneter">

        <label>
          Sélectionnez une image :
          <input type="file" onChange={handleFileChange} />
        </label>
        <button type="submit" onClick={handleSubmit3}>Valider</button>
        <br />
        <br />
        <br />
        {previewImage && (
          <img
            src={previewImage}
            alt="Image preview"
            style={{ width: "400px" }}
          />
        )}

    </div>
  );
}

FileUpload.defaultProps = {
  obj: [],
};
