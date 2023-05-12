import { useCallback, useState } from "react";
import styles from "../../addRecipe/AddRecipe.module.scss";

export default function Description({ stepDescriptions, onStepDescriptionsChange }) {
  const [numSteps, setNumSteps] = useState(1); // nombre d'étapes par défaut
  const [descriptions, setDescriptions] = useState(
    new Array(numSteps).fill("")
  );

  console.log(descriptions);

  const handleNumStepsChange = (e) => {
    const value = parseInt(e.target.value);
    setNumSteps(value);
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
          type="text"
          placeholder="Titre de l'étape"
          className={`${styles.input} `}
          id={`descriptionRecipe${i + 1}`}
          value={descriptions[i + 1]}
        />
        <button
          type="button"
          className="btn btn-secundary"
          onClick={() => handleDescriptionSubmit(i)}
        >
          valider
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <h2>Description de la Recette</h2>
      <p>
        Ecrivez ici le détail de votre recette étape par étape, vous pouvez à
        tout moment ajouter ou retirer des étapes.
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
    </div>
  );
}

Description.defaultProps = {
  stepDescriptions: [],
};