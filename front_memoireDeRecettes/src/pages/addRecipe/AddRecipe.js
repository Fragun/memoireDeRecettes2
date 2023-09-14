import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./AddRecipe.module.scss";
import euro from "../../assets/images/euro.png";
import difficulty from "../../assets/images/gantDifficulte.png";
import FileUpload from "../components/fileUpload/fileUpload2";
import timePng from "../../assets/images/icons8-horloge-40.png";
import { AuthContext } from "../../context";
import Description from "../components/inputAddDescriptionRecipe/DescriptionRecipe";
import SweetAlert from "../components/alert/AlertSweet";
import Ingredients from "../components/inputAddDescriptionRecipe/IngredientRecipe";
import { RecipeContext } from "../../context/RecipeContext";
import UstensilInput from "./components/UstensilInput";

const API_RECETTE = "/api/recette";

export default function AddRecipe() {

  const [isStepValid, setIsStepValid] = useState(false);
  const [ingredientChoose, setIngredientChoose] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [ustensilChoosed, setUstensilChoosed] = useState([]);
  const { user } = useContext(AuthContext);
  const idUser = user[0].USER_ID;
  const { mealType, season, origin, dietType, mealMoment } =
    useContext(RecipeContext);
  const mealTypeList = mealType;
  const seasonList = season;
  const cookingList = origin;
  const dietList = dietType;
  const mealList = mealMoment;
  const [stepDescriptions, setStepDescriptions] = useState([]);
  const handleStepDescriptionsChange = (newDescriptions) => {
    setStepDescriptions(newDescriptions);
  };

  const yupSchema = yup.object({
    titleRecipe: yup.string().required("Titre de la recette requise"),
    commentRecipe: yup
      .string()
      .max(50, "Doit contenir au maximum 50 caractères"),
    priceEstimation: yup
      .string()
      .oneOf(["1", "2", "3", "4"], "Estimation de prix requise"),
    difficultyEstimation: yup
      .string()
      .oneOf(["1", "2", "3", "4"], "Estimation de la difficulté requise"),
    recipeCreationDate: yup.date().default(() => new Date()),
    coverNumberRecipe: yup
      .string()
      .required("Veuillez saisir un nombre de couvert"),
    origin: yup.string().required("Veuillez saisir une origine de plat"),
    prepaTime: yup.string().required("Veuillez entrer un nombre d'heure"),
    prepaTime2: yup.string().required("Veuillez entrer un nombre de minute"),
    cookTime: yup.string().required("Veuillez entrer un nombre d'heure"),
    cookTime2: yup.string().required("Veuillez entrer un nombre de minute"),
    season: yup
      .string()
      .required("Veuillez entrer la meilleure saison pour votre plat"),
    cookType: yup
      .string()
      .required("Veuillez selectionner un type de cuisson principal"),
    dietType: yup.string().required("Veuillez selectionner un type de régime"),
    mealType: yup.string().required("Veuillez selectionner un type de repas"),
    ustensil: yup.array().default(() => ustensilChoosed),
    ingredient: yup.array().default(() => ingredientChoose),
    descriptions: yup.array().default(() => stepDescriptions),
    //nameImage: yup.object().default(() => recipeObj),
    //numStage : yup.array().default(() => automaticNumStage),
    idUserConnected: yup.number().default(idUser),
  });

  const defaultValues = {
    titleRecipe: "",
    commentRecipe: "",
    priceEstimation: "",
    difficultyEstimation: "",
    coverNumberRecipe: "2",
    prepaTime: "",
    prepaTime2: "",
    cookTime: "",
    cookTime2: "",
    season: "",
    cookType: "",
    dietType: "",
    mealType: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(yupSchema),
  });

  const handleImageUpload = (image) => {
    setUploadedImage(image);
  };
  const [imageError, setImageError] = useState("");
  const submit = async (values) => {
    if (!uploadedImage) {
      // Si aucune image n'a été téléchargée, affichez un message d'erreur
      setImageError("Veuillez télécharger une image");
      return;
    }
    const formData = new FormData();
    formData.append("image", uploadedImage);
    formData.append("data", JSON.stringify(values));
    try {
      const response = await fetch(`${API_RECETTE}/addRecipe`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        SweetAlert("Bravo", "Votre recette a bien été enregistrée")
        await response.json();
        reset(defaultValues);
      }
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * permet de mettre à jour le tableau d'ingrédient choisi depuis le composant enfant IngredientRecipe
   *
   * @param {*} newIngredientChoose
   */
  function handleIngredientChooseUpdate(newIngredientChoose) {
    setIngredientChoose(newIngredientChoose);
  }

  function handleAddUstensil(ustensils) {
    setUstensilChoosed(ustensils);
  }

  const handleIsStepValid = (valid) => {
    setIsStepValid(valid);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className={`${styles.rectangle} m30`}>
        <h1 className="text-align-center">Ajouter une recette</h1>
        <form
          onSubmit={handleSubmit(submit)}
          className="d-flex flex-column justify-content-center p20"
        >
          <div className="d-flex flex-column">
            <h2>Titre</h2>
            <div className="d-flex">
              <div className={`${styles.inputStart}`}></div>
              <div
                className={`${styles.inputDeco} p10 d-flex justify-content-center`}
              >
                <input
                  type="text"
                  placeholder="Le titre de votre recette..."
                  className={`${styles.input} `}
                  {...register("titleRecipe")}
                />
                {errors?.titleRecipe && <p>{errors.titleRecipe.message}</p>}
              </div>
            </div>
            <h2 className="mt10">Un petit mot :</h2>
            <div className="d-flex">
              <div className={`${styles.inputStart}`}></div>
              <div
                className={`${styles.inputDeco} p10 d-flex justify-content-center`}
              >
                <input
                  type="text"
                  placeholder="Un petit texte d'introduction..."
                  className={`${styles.input} `}
                  {...register("commentRecipe")}
                />
                {errors?.commentRecipe && <p>{errors.commentRecipe.message}</p>}
              </div>
            </div>
            <h2 className="mt10">Ajouter des images pour votre recette :</h2>
            <FileUpload onImageUpload={handleImageUpload} />
            {imageError && (<p>Veuillez ajouter une image ici!</p>)}
            <h2 className="mt10">
              Quelle est votre estimation du prix de la recette ?
            </h2>
            <div className="d-flex flex-row justify-content-between">
              {Array.from({ length: 4 }, (_, index) => (
                <div className="d-flex flex-row align-items-center" key={index}>
                  <label
                    htmlFor={`price${index + 1}`}
                    className={`d-flex justify-content-evenly ml10`}
                  >
                    {Array.from({ length: index + 1 }, (_, i) => (
                      <img
                        key={i}
                        className={`${styles.size}`}
                        src={euro}
                        alt="symbole euro"
                      ></img>
                    ))}
                  </label>
                  <input
                    type="radio"
                    id={`price${index + 1}`}
                    value={`${index + 1}`}
                    {...register("priceEstimation")}
                  />
                </div>
              ))}
            </div>
            {errors?.priceEstimation && <p>{errors.priceEstimation.message}</p>}
            <h2 className="mt10">
              Quelle est votre estimation de la difficulté de la recette ?
            </h2>
            <div className="d-flex flex-row justify-content-between">
              {Array.from({ length: 4 }, (_, index) => (
                <div className="d-flex flex-row align-items-center" key={index}>
                  <label
                    htmlFor={`difficulty${index + 1}`}
                    className={`d-flex justify-content-evenly ml10`}
                  >
                    {Array.from({ length: index + 1 }, (_, i) => (
                      <img
                        key={i}
                        className={`${styles.size}`}
                        src={difficulty}
                        alt="symbole gant"
                      ></img>
                    ))}
                  </label>
                  <input
                    id={`difficulty${index + 1}`}
                    type="radio"
                    value={`${index + 1}`}
                    {...register("difficultyEstimation")}
                  />
                </div>
              ))}
            </div>
            {errors?.difficultyEstimation && (
              <p>{errors.difficultyEstimation.message}</p>
            )}
            <h2 className="mt10">Pour combien de personnes ?</h2>
            <div className="d-flex">
              <div className={`${styles.inputStart}`}></div>
              <div
                className={`${styles.inputDeco} p10 d-flex justify-content-center`}
              >
                <input
                  type="number"
                  min="1"
                  max="25"
                  placeholder="Nombre de part"
                  className={`${styles.input} `}
                  {...register("coverNumberRecipe")}
                />
                {errors?.coverNumberRecipe && (
                  <p>{errors.coverNumberRecipe.message}</p>
                )}
              </div>
            </div>
            <h2 className="mt10">Temps de préparation :</h2>
            <div className="d-flex">
              <div className={`${styles.inputStart}`}></div>
              <div
                className={`${styles.inputDeco} p10 d-flex justify-content-center`}
              >
                <div className="d-flex justify-content-start">
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      className={`mr20`}
                      src={timePng}
                      alt="symbole euro"
                    ></img>
                    <input
                      type="number"
                      min="0"
                      max="5"
                      placeholder="heure"
                      className={`${styles.inputLight} `}
                      {...register("prepaTime")}
                    />
                    <p className="ml10">h</p>
                    <input
                      type="number"
                      min="0"
                      max="59"
                      placeholder="minute"
                      className={`${styles.inputLight} ml20`}
                      {...register("prepaTime2")}
                    />
                    {errors?.prepaTime && <p>{errors.prepaTime.message}</p>}
                    {errors?.prepaTime2 && <p>{errors.prepaTime2.message}</p>}
                  </div>
                </div>
              </div>
            </div>
            <h2 className="">Temps de cuisson :</h2>
            <div className="d-flex">
              <div className={`${styles.inputStart}`}></div>
              <div
                className={`${styles.inputDeco} p10 d-flex justify-content-center`}
              >
                <div className="d-flex justify-content-start">
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      className={` mr20`}
                      src={timePng}
                      alt="symbole euro"
                    ></img>
                    <input
                      type="number"
                      min="0"
                      max="72"
                      placeholder="heure"
                      className={`${styles.inputLight} `}
                      {...register("cookTime")}
                    />
                    {errors?.cookTime && <p>{errors.cookTime.message}</p>}
                    <p className="ml10">h</p>
                    <input
                      type="number"
                      min="0"
                      max="59"
                      placeholder="minute"
                      className={`${styles.inputLight} ml20`}
                      {...register("cookTime2")}
                    />
                    {errors?.cookTime2 && <p>{errors.cookTime2.message}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column mb10">
              <h2>Quelle est l'origine du plat ?</h2>
              <div className="d-flex">
                <div className={`${styles.inputStart}`}></div>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <select {...register("origin")} id="origin">
                    <option value="" disabled>
                      Origine du plat
                    </option>
                    {mealTypeList.map((mealType) => (
                      <option
                        key={mealType.MEAL_TYPE_ID}
                        value={mealType.MEAL_TYPE_ID}
                      >
                        {mealType.MEAL_TYPE_NAME}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {errors?.origin && <p>{errors.origin.message}</p>}
            </div>
            <div className="d-flex flex-column mb10">
              <h2>Plat de saison :</h2>
              <div className="d-flex">
                <div className={`${styles.inputStart}`}></div>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <select {...register("season")} id="season">
                    <option value="" disabled>
                      Saison
                    </option>
                    {seasonList.map((season) => (
                      <option key={season.SEASON_ID} value={season.SEASON_ID}>
                        {season.SEASON_NAME}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {errors?.season && <p>{errors.season.message}</p>}
            </div>
            <div className="d-flex flex-column mb10">
              <h2>Quelle est la cuissson principale ?</h2>
              <div className="d-flex">
                <div className={`${styles.inputStart}`}></div>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <select {...register("cookType")} id="cookType">
                    <option value="" disabled>
                      Cuisson :
                    </option>
                    {cookingList.map((cooking) => (
                      <option
                        key={cooking.COOKING_TYPE_ID}
                        value={cooking.COOKING_TYPE_ID}
                      >
                        {cooking.COOKING_TYPE_NAME}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {errors?.cookType && <p>{errors.cookType.message}</p>}
            </div>
            <div className="d-flex flex-column mb20">
              <h2>Peux convenir pour quel type de régime ?</h2>
              <div className="d-flex">
                <div className={`${styles.inputStart}`}></div>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <select {...register("dietType")} id="dietType">
                    <option value="" disabled>
                      Type de régime
                    </option>
                    {dietList.map((diet) => (
                      <option key={diet.DIET_TYPE_ID} value={diet.DIET_TYPE_ID}>
                        {diet.DIET_TYPE_NAME}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {errors?.dietType && <p>{errors.dietType.message}</p>}
            </div>
            <div className="d-flex flex-column mb20">
              <h2>Peux convenir pour quel repas ?</h2>
              <div className="d-flex">
                <div className={`${styles.inputStart}`}></div>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <select {...register("mealType")} id="mealType">
                    <option value="" disabled>
                      Pour quel repas ?
                    </option>
                    {mealList.map((meal) => (
                      <option
                        key={meal.ID_TYPE_DE_REPAS}
                        value={meal.ID_TYPE_DE_REPAS}
                      >
                        {meal.NOM_TYPE_DE_REPAS}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {errors?.mealType && <p>{errors.mealType.message}</p>}
            </div>
            <UstensilInput onUstensilsChange={handleAddUstensil} />
            <Ingredients
              onIngredientChooseUpdate={handleIngredientChooseUpdate}
            />
            <Description
              stepDescriptions={stepDescriptions}
              onStepDescriptionsChange={handleStepDescriptionsChange}
              isValid={handleIsStepValid}
            />
            {!isStepValid && (
              <p className={`${styles.messageErreur}`}>
                Veuillez ajouter au moins une étape avec 10 caractères minimum.
              </p>
            )}
            {imageError && (<p className={`${styles.messageErreur}`}> Vous avez oublié d'ajouter une photo pour votre recette ! C'est obligatoire ! Pensez à prendre des photos de vos plats.</p>)}
            <button
              disabled={!isStepValid || isSubmitting}
              className="btn btn-primary"
            >
              Ajouter à vos recettes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
