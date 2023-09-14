import { useCallback, useEffect, useState } from "react";
import styles from "../../addRecipe/AddRecipe.module.scss";

/**
 * permet de saisir la description de la recette
 * stepDecriptions est un tableau avec la desccription de la recette étape par étape
 * onStepDescriptionsChange permet de mettre à jour la valeur de stepDescriptions dans l'élèment parent, ici addRecipe
 * @export
 * @param {*} { stepDescriptions, onStepDescriptionsChange }
 * @return
 */
export default function Description({
  stepDescriptions,
  onStepDescriptionsChange,
  isValid,
}) {
  const [numSteps, setNumSteps] = useState(1); // nombre d'étapes par défaut
  const [descriptions, setDescriptions] = useState(
    new Array(numSteps).fill("")
  );

  useEffect(() => {
    const hasValidDescription = descriptions.some(
      (description) => description.length >= 10
    );
    isValid(hasValidDescription);
  }, [descriptions, isValid]);

  const handleNumStepsChange = (e) => {
    const value = parseInt(e.target.value);
    setNumSteps(value);
  };

  const handleStepDelete = (index) => {
    setDescriptions((prevDescriptions) => {
      const newDescriptions = [...prevDescriptions];
      newDescriptions.splice(index, 1); // Remove the description at the specified index
      onStepDescriptionsChange(newDescriptions);
      return newDescriptions;
    });
  };

  const handleDescriptionChange = useCallback(
    (index, value) => {
      setDescriptions((prev) => {
        const newDescriptions = [...prev];
        newDescriptions[index] = value;
        onStepDescriptionsChange(newDescriptions);
        return newDescriptions;
      });
    },
    [onStepDescriptionsChange]
  );

  const handleDescriptionSubmit = (index) => {
    const inputId = `descriptionRecipe${index + 1}`;
    const inputValue = document.getElementById(inputId).value;
    handleDescriptionChange(index, inputValue);
  };

  // tableau d'étapes généré dynamiquement en fonction de numSteps
  const steps = [...Array(numSteps)].map((_, i) => (
    <div className="d-flex" key={`step-${i}`}>
      <div className={`${styles.inputStart}`}></div>
      <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
        <p> Etape {i + 1} : </p>
        <input
          type="textarea"
          placeholder="Titre de l'étape"
          className={`${styles.input} `}
          id={`descriptionRecipe${i + 1}`}
        />
        <button
          type="button"
          className="buttonAddRecipe"
          onClick={() => handleDescriptionSubmit(i)}
        >
          valider
        </button>
        <button
        type="button"
        className="buttonDeleteRecipe"
        onClick={() => handleStepDelete(i)}
      >
        Supprimer
      </button>
      </div>
    </div>
  ));

  return (
    <div>
      <h2>Description de la Recette</h2>
      <p>
        Ecrivez ici le détail de votre recette étape par étape, vous pouvez
        ajouter ou retirer des étapes.
      </p>
      <div>
        <label htmlFor="numSteps">Nombre d'étapes :</label>
        <input
          type="number"
          id="numSteps"
          name="numSteps"
          value={numSteps > 15 ? 15 : numSteps}
          min="1"
          max="15"
          onChange={handleNumStepsChange}
        />
      </div>
      {steps}
      <div className="d-flex flex-column align-items-center">
        {stepDescriptions.map((description, index) => (
          <div key={index}>
            étape {index + 1}: {description}
          </div>
        ))}
      </div>
    </div>
  );
}

Description.defaultProps = {
  stepDescriptions: [],
};
