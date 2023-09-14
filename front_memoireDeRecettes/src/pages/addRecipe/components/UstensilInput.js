import React, { useContext, useState, useEffect } from "react";
import styles from "../AddRecipe.module.scss";
import { RecipeContext } from "../../../context/RecipeContext";

export default function UstensilInput({ onUstensilsChange }) {
  const { ustensils } = useContext(RecipeContext);

  const [searches, setSearches] = useState([""]);
  const [ustensilAdded, setUstensilAdded] = useState([false]);
  const [ustensilChoose, setUstensilChoose] = useState([]);
  const [count, setCount] = useState(1);
  const [ustensilImages, setUstensilImages] = useState([]);

  useEffect(() => {
    // Appeler la fonction de rappel pour transmettre la liste des ustensiles au parent
    onUstensilsChange(ustensilChoose);
  }, [ustensilChoose, onUstensilsChange]);

  function handleInput(e, index) {
    const keyBoardInput = e.target.value;
    setSearches((prevSearches) => {
      const updatedSearches = [...prevSearches];
      updatedSearches[index] = keyBoardInput.trim().toLowerCase();
      return updatedSearches;
    });
  }

  function handleAddUstensil(event, index) {
    event.preventDefault();
    const selectedUstensilId = document.getElementById(
      `ustensils${index}`
    ).value;

    if (!ustensilChoose.includes(selectedUstensilId)) {
      setUstensilChoose([...ustensilChoose, selectedUstensilId]);
      const selectedUstensil = ustensils.find(
        (u) => u.USTENSIL_ID == selectedUstensilId
      );
      if (selectedUstensil) {
        setUstensilImages([...ustensilImages, selectedUstensil.USTENSIL_ICON]);
      }

      setUstensilAdded((prevUstensilAdded) => {
        const updatedUstensilAdded = [...prevUstensilAdded];
        updatedUstensilAdded[index] = true;
        return updatedUstensilAdded;
      });
    }
  }

  function addInputUstensil(event) {
    event.preventDefault();
    if (count < 12) {
      setCount(count + 1);
      setSearches([...searches, ""]);
      setUstensilAdded([...ustensilAdded, false]);
    }
  }

  function removeUstensil(index) {
    setSearches((prevSearches) => {
      const updatedSearches = [...prevSearches];
      updatedSearches.splice(index, 1);
      return updatedSearches;
    });
    setUstensilAdded((prevUstensilAdded) => {
      const updatedUstensilAdded = [...prevUstensilAdded];
      updatedUstensilAdded.splice(index, 1);
      return updatedUstensilAdded;
    });
    setUstensilChoose((prevUstensilChoose) => {
      const updatedUstensilChoose = [...prevUstensilChoose];
      updatedUstensilChoose.splice(index, 1);
      return updatedUstensilChoose;
    });
    setUstensilImages((prevUstensilImages) => {
      return prevUstensilImages.filter((_, i) => i !== index);
    });
    setCount(count - 1);
  }

  const ustensilInputs = [];
  for (let i = 0; i < count; i++) {
    ustensilInputs.push(
      <div
        className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        key={i}
      >
        <div className={`${styles.containerButton}`}>
        <div className={`${styles.inputStart}`}></div>
        <input
          type="text"
          onInput={(e) => handleInput(e, i)}
          className="flex-fill"
          placeholder="Search ..."
          disabled={ustensilAdded[i]}
        ></input>
        <select id={`ustensils${i}`} disabled={ustensilAdded[i]}>
          <option value="" disabled>
            Quel ustensile ?
          </option>
          {ustensils
            .filter((u) => u.USTENSIL_NAME.toLowerCase().includes(searches[i]))
            .map((ustensil) => (
              <option key={ustensil.USTENSIL_ID} value={ustensil.USTENSIL_ID}>
                {ustensil.USTENSIL_NAME}
              </option>
            ))}
        </select>
        </div>
        <div className={`${styles.containerButton}`}>
        <button
          className="buttonAddRecipe"
          onClick={(e) => handleAddUstensil(e, i)}
        >
          Valider
        </button>
        <button
          type="button"
          className="buttonDeleteRecipe"
          onClick={() => removeUstensil(i)}
        >
          Supprimer
        </button></div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column mb20">
      <h2>De quels ustensiles de cuisine a-t-on besoin ?</h2>
      {ustensilInputs}
      {count < 12 && (
        <i className="btn btn-primary d-flex justify-content-center" onClick={addInputUstensil}>
          Ajouter un autre ustensile ?
        </i>
      )}
      <div>
        Listes des ustensiles :
        <br />
        <span className="d-flex">
          {ustensilImages.map((imageName, index) => (
            <div key={index}>
              <img
                className={`${styles.iconUstensil}`}
                src={`../../assets/images/LogoUstensiles/${imageName}`}
                alt={imageName}
              ></img>
            </div>
          ))}
        </span>
      </div>
    </div>
  );
}
