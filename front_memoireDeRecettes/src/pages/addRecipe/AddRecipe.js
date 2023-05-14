import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../addRecipe/AddRecipe.module.scss";
import euro from "../../assets/images/euro.png";
import difficulty from "../../assets/images/gantDifficulte.png";
import FileUpload from "../components/fileUpload/fileUpload";
import timePng from "../../assets/images/icons8-horloge-40.png";
import { AuthContext } from "../../context";
import Description from "../components/inputAddDescriptionRecipe/DescriptionRecipe";
import SweetAlert from "../components/alert/AlertSweet";
import Ingredients from "../components/inputAddDescriptionRecipe/IngredientRecipe"

const API_INDEX = "/api/recette";

export default function AddRecipe() {
  const { user } = useContext(AuthContext);
  const idUser = user[0].USER_ID;
 // console.log(idUser);

//permet de récupérer la description de la recette
  const [stepDescriptions, setStepDescriptions] = useState([]);
  const handleStepDescriptionsChange = (newDescriptions) => {
    setStepDescriptions(newDescriptions);
  };

  const [ingredientChoose, setIngredientChoose] = useState([]);

  const [mealTypeList, setMealTypeList] = useState([]);
  const [seasonList, setSeasonList] = useState([]);
  const [cookingList, setCookingList] = useState([]);
  const [dietList, setDietList] = useState([]);
  const [mealList, setMealList] = useState([]);
 
  //console.log(ingredientList);
  const [ustensilList, setUstensilList] = useState([]);

  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");
  const [search4, setSearch4] = useState("");
  const [search5, setSearch5] = useState("");
  const [search6, setSearch6] = useState("");
  const [search7, setSearch7] = useState("");
  const [search8, setSearch8] = useState("");

  const [ustensilChoose, setUstensilChoose] = useState([]);

const [automaticNumStage, setAutomaticNumStage] = useState('1');
//console.log(automaticNumStage);

  const [ustensilAdded1, setUstensilAdded1] = useState(false);
  const [ustensilAdded2, setUstensilAdded2] = useState(false);
  const [ustensilAdded3, setUstensilAdded3] = useState(false);
  const [ustensilAdded4, setUstensilAdded4] = useState(false);
  const [ustensilAdded5, setUstensilAdded5] = useState(false);
  const [ustensilAdded6, setUstensilAdded6] = useState(false);
  const [ustensilAdded7, setUstensilAdded7] = useState(false);
  const [ustensilAdded8, setUstensilAdded8] = useState(false);

  const [inputUstensilAdded1, setInputUstensiladded1] = useState("dnone");
  const [inputUstensilAdded2, setInputUstensiladded2] = useState("dnone");
  const [inputUstensilAdded3, setInputUstensiladded3] = useState("dnone");
  const [inputUstensilAdded4, setInputUstensiladded4] = useState("dnone");
  const [inputUstensilAdded5, setInputUstensiladded5] = useState("dnone");
  const [inputUstensilAdded6, setInputUstensiladded6] = useState("dnone");
  const [inputUstensilAdded7, setInputUstensiladded7] = useState("dnone");

  const [count, setCount] = useState(0);


  useEffect(() => {
    async function getMealType() {
      try {
        const response = await fetch(`${API_INDEX}/getMealType`);
        if (response.ok) {
          const mealType = await response.json();
          setMealTypeList(mealType);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getMealType();
  }, []);

  useEffect(() => {
    async function getSeason() {
      try {
        const response = await fetch(`${API_INDEX}/getSeason`);
        if (response.ok) {
          const season = await response.json();
          setSeasonList(season);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getSeason();
  }, []);

  useEffect(() => {
    async function getCookType() {
      try {
        const response = await fetch(`${API_INDEX}/getCookType`);
        if (response.ok) {
          const cookType = await response.json();
          setCookingList(cookType);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getCookType();
  }, []);

  useEffect(() => {
    async function getDietType() {
      try {
        const response = await fetch(`${API_INDEX}/getDietType`);
        if (response.ok) {
          const dietType = await response.json();
          setDietList(dietType);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getDietType();
  }, []);

  useEffect(() => {
    async function getMealMoment() {
      try {
        const response = await fetch(`${API_INDEX}/getMealMoment`);
        if (response.ok) {
          const mealType = await response.json();
          setMealList(mealType);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getMealMoment();
  }, []);

  useEffect(() => {
    async function getUstensils() {
      try {
        const response = await fetch(`${API_INDEX}/getUstensils`);
        if (response.ok) {
          const ustensils = await response.json();
          setUstensilList(ustensils);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getUstensils();
  }, []);

  

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
    ustensil: yup.array().default(() => ustensilChoose),
    ingredient: yup.array().default(() => ingredientChoose),
    descriptions : yup.array().default(() => stepDescriptions),
    //numStage : yup.array().default(() => automaticNumStage),
    idUserConnected: yup
        .number().default(idUser)
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
    descriptionRecipe:"",
  };

 // console.log(defaultValues);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(yupSchema),
  });

  const submit = async (values) => {
   // console.log(values);
    try {
      const response = await fetch(`${API_INDEX}/addRecipe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        SweetAlert('Bravo', 'Votre recette a bien été enregistrée').then(() => {
          window.location.reload();
        });
        const recipe = await response.json();
        reset(defaultValues);
        console.log(recipe);
      }
    } catch (error) {
      console.error(error);
    }
  };

  function handleInput(e, setSearchFunction) {
   // console.log(e.target.value);
    const keyBoardInput = e.target.value;
    setSearchFunction(keyBoardInput.trim().toLowerCase());
  }


  function handleAddUstensil(event, id) {
    event.preventDefault();
    const selectedUstensilId = document.getElementById(id).value;
    //console.log(selectedUstensilId);
    if (!ustensilChoose.includes(selectedUstensilId)) {
      setUstensilChoose([...ustensilChoose, selectedUstensilId]);
      switch (id) {
        case "ustensils":
          setUstensilAdded1(true);
          break;
        case "ustensils2":
          setUstensilAdded2(true);
          break;
        case "ustensils3":
          setUstensilAdded3(true);
          break;
        case "ustensils4":
          setUstensilAdded4(true);
          break;
        case "ustensils5":
          setUstensilAdded5(true);
          break;
        case "ustensils6":
          setUstensilAdded6(true);
          break;
        case "ustensils7":
          setUstensilAdded7(true);
          break;
        case "ustensils8":
          setUstensilAdded8(true);
          break;
        default:
          break;
      }
    }
  }

  /**
   * permet de rendre visible les input d'ajout d'ustensil selon le compteur 
   *
   * @param {*} e 
   */
  function addInputUstensil(e) {
    e.preventDefault();
    if (count === 0) {
      setInputUstensiladded1("dBlock");
    }
    if (count === 1) {
      setInputUstensiladded2("dBlock");
    }
    if (count === 2) {
      setInputUstensiladded3("dBlock");
    }
    if (count === 3) {
      setInputUstensiladded4("dBlock");
    }
    if (count === 4) {
      setInputUstensiladded5("dBlock");
    }
    if (count === 5) {
      setInputUstensiladded6("dBlock");
    }
    if (count === 6) {
      setInputUstensiladded7("dBlock");
    }
    setCount(count + 1);
  }

    /**
   * permet de mettre à jour le tableau d'ingrédient choisi depuis le composant enfant IngredientRecipe
   *
   * @param {*} newIngredientChoose 
   */
    function handleIngredientChooseUpdate(newIngredientChoose) {
      setIngredientChoose(newIngredientChoose);
    }

  
   
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
            <FileUpload />
            <h2 className="mt10">
              Quelle est votre estimation du prix de la recette ?
            </h2>
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <label htmlFor="price1">
                  <img
                    className={`${styles.size}`}
                    src={euro}
                    alt="symbole euro"
                  ></img>
                </label>
                <input
                  type="radio"
                  id="price1"
                  value="1"
                  {...register("priceEstimation")}
                />
              </div>
              <div className="d-flex flex-row align-items-center">
                <label
                  htmlFor="price2"
                  className={`d-flex justify-content-evenly ml10`}
                >
                  <img
                    className={`${styles.size}`}
                    src={euro}
                    alt="symbole euro"
                  ></img>
                  <img
                    className={`${styles.size}`}
                    src={euro}
                    alt="symbole euro"
                  ></img>
                </label>
                <input
                  type="radio"
                  id="price2"
                  value="2"
                  {...register("priceEstimation")}
                />
              </div>
              <div className="d-flex flex-row align-items-center">
                <label
                  htmlFor="price3"
                  className={`d-flex justify-content-evenly ml10`}
                >
                  <img
                    className={`${styles.size}`}
                    src={euro}
                    alt="symbole euro"
                  ></img>
                  <img
                    className={`${styles.size}`}
                    src={euro}
                    alt="symbole euro"
                  ></img>
                  <img
                    className={`${styles.size}`}
                    src={euro}
                    alt="symbole euro"
                  ></img>
                </label>
                <input
                  className=""
                  type="radio"
                  id="price3"
                  value="3"
                  {...register("priceEstimation")}
                />
              </div>
              <div className="d-flex flex-row align-items-center">
                <label
                  htmlFor="price4"
                  className={`d-flex justify-content-evenly ml10`}
                >
                  <img
                    className={`${styles.size}`}
                    src={euro}
                    alt="symbole euro"
                  ></img>
                  <img
                    className={`${styles.size}`}
                    src={euro}
                    alt="symbole euro"
                  ></img>
                  <img
                    className={`${styles.size}`}
                    src={euro}
                    alt="symbole euro"
                  ></img>
                  <img
                    className={`${styles.size}`}
                    src={euro}
                    alt="symbole euro"
                  ></img>
                </label>
                <input
                  type="radio"
                  id="price4"
                  value="4"
                  {...register("priceEstimation")}
                />
              </div>
            </div>
            {errors?.priceEstimation && <p>{errors.priceEstimation.message}</p>}
            <h2 className="mt10">
              Quelle est votre estimation de la difficulté de la recette ?
            </h2>
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <label htmlFor="difficulty1">
                  <img
                    className={`${styles.size}`}
                    src={difficulty}
                    alt="symbole euro"
                  ></img>
                </label>
                <input
                  id="difficulty1"
                  type="radio"
                  value="1"
                  {...register("difficultyEstimation")}
                />
              </div>
              <div className="d-flex flex-row align-items-center">
                <label
                  htmlFor="difficulty2"
                  className={`d-flex justify-content-evenly ml10`}
                >
                  <img
                    className={`${styles.size}`}
                    src={difficulty}
                    alt="symbole euro"
                  ></img>
                  <img
                    className={`${styles.size}`}
                    src={difficulty}
                    alt="symbole euro"
                  ></img>
                </label>
                <input
                  id="difficulty2"
                  type="radio"
                  value="2"
                  {...register("difficultyEstimation")}
                />
              </div>
              <div className="d-flex flex-row align-items-center">
                <label
                  htmlFor="difficulty3"
                  className={`d-flex justify-content-evenly ml10`}
                >
                  <img
                    className={`${styles.size}`}
                    src={difficulty}
                    alt="symbole euro"
                  ></img>
                  <img
                    className={`${styles.size}`}
                    src={difficulty}
                    alt="symbole euro"
                  ></img>
                  <img
                    className={`${styles.size}`}
                    src={difficulty}
                    alt="symbole euro"
                  ></img>
                </label>
                <input
                  id="difficulty3"
                  type="radio"
                  value="3"
                  {...register("difficultyEstimation")}
                />
              </div>
              <div className="d-flex flex-row align-items-center">
                <label
                  htmlFor="difficulty4"
                  className={`d-flex justify-content-evenly ml10`}
                >
                  <img
                    className={`${styles.size}`}
                    src={difficulty}
                    alt="symbole euro"
                  ></img>
                  <img
                    className={`${styles.size}`}
                    src={difficulty}
                    alt="symbole euro"
                  ></img>
                  <img
                    className={`${styles.size}`}
                    src={difficulty}
                    alt="symbole euro"
                  ></img>
                  <img
                    className={`${styles.size}`}
                    src={difficulty}
                    alt="symbole euro"
                  ></img>
                </label>
                <input
                  id="difficulty4"
                  type="radio"
                  value="4"
                  {...register("difficultyEstimation")}
                />
              </div>
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
            <div className="d-flex flex-column mb20">
              <h2>De quels ustensiles de cuisine a t-on besoin ?</h2>
              <div className="d-flex">
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInput(e, setSearch)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ustensilAdded1}
                  ></input>
                  <select id="ustensils" disabled={ustensilAdded1}>
                    <option value="" disabled>
                      Quel ustensile ?
                    </option>
                    {ustensilList
                      .filter((u) =>
                        u.USTENSIL_NAME.toLowerCase().startsWith(search)
                      )
                      .map((ustensil) => (
                        <option
                          key={ustensil.USTENSIL_ID}
                          value={ustensil.USTENSIL_ICON}
                        >
                          {ustensil.USTENSIL_NAME}
                        </option>
                      ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleAddUstensil(e, "ustensils")}
                  >
                    Valider ustensil
                  </button>
                </div>
              </div>
              <div className={`${inputUstensilAdded1}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInput(e, setSearch2)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ustensilAdded2}
                  ></input>
                  <select id="ustensils2" disabled={ustensilAdded2}>
                    <option value="" disabled>
                      Quel ustensile ?
                    </option>
                    {ustensilList
                      .filter((u) =>
                        u.USTENSIL_NAME.toLowerCase().startsWith(search2)
                      )
                      .map((ustensil2) => (
                        <option
                          key={ustensil2.USTENSIL_ID}
                          value={ustensil2.USTENSIL_ICON}
                        >
                          {ustensil2.USTENSIL_NAME}
                        </option>
                      ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleAddUstensil(e, "ustensils2")}
                  >
                    Valider ustensil
                  </button>
                </div>
              </div>
              <div className={`${inputUstensilAdded2}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInput(e, setSearch3)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ustensilAdded3}
                  ></input>
                  <select id="ustensils3" disabled={ustensilAdded3}>
                    <option value="" disabled>
                      Quel ustensile ?
                    </option>
                    {ustensilList
                      .filter((u) =>
                        u.USTENSIL_NAME.toLowerCase().startsWith(search3)
                      )
                      .map((ustensil3) => (
                        <option
                          key={ustensil3.USTENSIL_ID}
                          value={ustensil3.USTENSIL_ICON}
                        >
                          {ustensil3.USTENSIL_NAME}
                        </option>
                      ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleAddUstensil(e, "ustensils3")}
                  >
                    Valider ustensil
                  </button>
                </div>
              </div>
              <div className={`${inputUstensilAdded3}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInput(e, setSearch4)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ustensilAdded4}
                  ></input>
                  <select id="ustensils4" disabled={ustensilAdded4}>
                    <option value="" disabled>
                      Quel ustensile ?
                    </option>
                    {ustensilList
                      .filter((u) =>
                        u.USTENSIL_NAME.toLowerCase().startsWith(search4)
                      )
                      .map((ustensil4) => (
                        <option
                          key={ustensil4.USTENSIL_ID}
                          value={ustensil4.USTENSIL_ICON}
                        >
                          {ustensil4.USTENSIL_NAME}
                        </option>
                      ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleAddUstensil(e, "ustensils4")}
                  >
                    Valider ustensil
                  </button>
                </div>
              </div>
              <div className={`${inputUstensilAdded4}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInput(e, setSearch5)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ustensilAdded5}
                  ></input>
                  <select id="ustensils5" disabled={ustensilAdded5}>
                    <option value="" disabled>
                      Quel ustensile ?
                    </option>
                    {ustensilList
                      .filter((u) =>
                        u.USTENSIL_NAME.toLowerCase().startsWith(search5)
                      )
                      .map((ustensil5) => (
                        <option
                          key={ustensil5.USTENSIL_ID}
                          value={ustensil5.USTENSIL_ICON}
                        >
                          {ustensil5.USTENSIL_NAME}
                        </option>
                      ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleAddUstensil(e, "ustensils5")}
                  >
                    Valider ustensil
                  </button>
                </div>
              </div>
              <div className={`${inputUstensilAdded5}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInput(e, setSearch6)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ustensilAdded6}
                  ></input>
                  <select id="ustensils6" disabled={ustensilAdded6}>
                    <option value="" disabled>
                      Quel ustensile ?
                    </option>
                    {ustensilList
                      .filter((u) =>
                        u.USTENSIL_NAME.toLowerCase().startsWith(search6)
                      )
                      .map((ustensil6) => (
                        <option
                          key={ustensil6.USTENSIL_ID}
                          value={ustensil6.USTENSIL_ICON}
                        >
                          {ustensil6.USTENSIL_NAME}
                        </option>
                      ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleAddUstensil(e, "ustensils6")}
                  >
                    Valider ustensil
                  </button>
                </div>
              </div>
              <div className={`${inputUstensilAdded6}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInput(e, setSearch7)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ustensilAdded7}
                  ></input>
                  <select id="ustensils7" disabled={ustensilAdded7}>
                    <option value="" disabled>
                      Quel ustensile ?
                    </option>
                    {ustensilList
                      .filter((u) =>
                        u.USTENSIL_NAME.toLowerCase().startsWith(search7)
                      )
                      .map((ustensil7) => (
                        <option
                          key={ustensil7.USTENSIL_ID}
                          value={ustensil7.USTENSIL_ICON}
                        >
                          {ustensil7.USTENSIL_NAME}
                        </option>
                      ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleAddUstensil(e, "ustensils7")}
                  >
                    Valider ustensil
                  </button>
                </div>
              </div>
              <div className={`${inputUstensilAdded7}`}>
                <div className={`${styles.inputStart}`}></div>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <input
                    type="text"
                    onInput={(e) => handleInput(e, setSearch8)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ustensilAdded8}
                  ></input>
                  <select id="ustensils8" disabled={ustensilAdded8}>
                    <option value="" disabled>
                      Quel ustensile ?
                    </option>
                    {ustensilList
                      .filter((u) =>
                        u.USTENSIL_NAME.toLowerCase().startsWith(search8)
                      )
                      .map((ustensil8) => (
                        <option
                          key={ustensil8.USTENSIL_ID}
                          value={ustensil8.USTENSIL_ICON}
                        >
                          {ustensil8.USTENSIL_NAME}
                        </option>
                      ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleAddUstensil(e, "ustensils8")}
                  >
                    Valider ustensil
                  </button>
                </div>
              </div>
              <i className="btn btn-primary" onClick={addInputUstensil}>
                Ajouter un autre ustensile ?
              </i>
              <div>
                Listes des ustensiles :
                <br />
                <span>
                  {ustensilChoose.map((ustensill) => (
                    <img
                      className={`${styles.iconUstensil}`}
                      key={ustensill}
                      src={`../../assets/images/LogoUstensiles/${ustensill}`}
                      alt="ustensile"
                    ></img>
                  ))}
                </span>
              </div>
            </div>

            <Ingredients
            onIngredientChooseUpdate={handleIngredientChooseUpdate}
    />

            <Description
        stepDescriptions={stepDescriptions}
        onStepDescriptionsChange={handleStepDescriptionsChange}
      />

            <button disabled={isSubmitting} className="btn btn-primary"  >
              Ajouter à vos recettes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


