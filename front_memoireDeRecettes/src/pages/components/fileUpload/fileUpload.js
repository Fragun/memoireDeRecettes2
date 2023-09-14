import { useState } from "react";
//import AlertBad from "../alert/AlertBad";
//import SweetAlert from "../alert/AlertSweet";

export default function FileUpload({ onFileUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        setPreviewImage(fileReader.result);
      };

      fileReader.onloadend = async () => {
        const buffer = fileReader.result;
        const blob = new Blob([buffer], { type: file.type });

        const base64 = await convertBlobToBase64(blob);
        onFileUpload({ value: base64 });
      };
    } else {
      setPreviewImage(null);
    }
  };

  const convertBlobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
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