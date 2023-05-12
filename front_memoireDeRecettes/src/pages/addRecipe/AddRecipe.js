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

const API_INDEX = "/api/recette";


export default function AddRecipe() {
  const { user } = useContext(AuthContext);
  const idUser = user[0].USER_ID;
  console.log(idUser);

//permet de récurer la description de la recette
  const [stepDescriptions, setStepDescriptions] = useState([]);

  const handleStepDescriptionsChange = (newDescriptions) => {
    setStepDescriptions(newDescriptions);
  };
console.log(stepDescriptions);


  const [mealTypeList, setMealTypeList] = useState([]);
  const [seasonList, setSeasonList] = useState([]);
  const [cookingList, setCookingList] = useState([]);
  const [dietList, setDietList] = useState([]);
  const [mealList, setMealList] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);
  //console.log(ingredientList);
  const [ustensilList, setUstensilList] = useState([]);

  const [searchIngredient1, setSearchIngredient1] = useState([]);
  const [searchIngredient2, setSearchIngredient2] = useState([]);
  const [searchIngredient3, setSearchIngredient3] = useState([]);
  const [searchIngredient4, setSearchIngredient4] = useState([]);
  const [searchIngredient5, setSearchIngredient5] = useState([]);
  const [searchIngredient6, setSearchIngredient6] = useState([]);
  const [searchIngredient7, setSearchIngredient7] = useState([]);
  const [searchIngredient8, setSearchIngredient8] = useState([]);
  const [searchIngredient9, setSearchIngredient9] = useState([]);
  const [searchIngredient10, setSearchIngredient10] = useState([]);
  const [searchIngredient11, setSearchIngredient11] = useState([]);
  const [searchIngredient12, setSearchIngredient12] = useState([]);
  const [searchIngredient13, setSearchIngredient13] = useState([]);
  const [searchIngredient14, setSearchIngredient14] = useState([]);
  const [searchIngredient15, setSearchIngredient15] = useState([]);
  const [searchIngredient16, setSearchIngredient16] = useState([]);
  const [searchIngredient17, setSearchIngredient17] = useState([]);
  const [searchIngredient18, setSearchIngredient18] = useState([]);
  const [searchIngredient19, setSearchIngredient19] = useState([]);
  const [searchIngredient20, setSearchIngredient20] = useState([]);
  const [searchIngredient21, setSearchIngredient21] = useState([]);
  const [searchIngredient22, setSearchIngredient22] = useState([]);
  const [searchIngredient23, setSearchIngredient23] = useState([]);
  const [searchIngredient24, setSearchIngredient24] = useState([]);


  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");
  const [search4, setSearch4] = useState("");
  const [search5, setSearch5] = useState("");
  const [search6, setSearch6] = useState("");
  const [search7, setSearch7] = useState("");
  const [search8, setSearch8] = useState("");

  const [ustensilChoose, setUstensilChoose] = useState([]);
  const [ingredientChoose, setIngredientChoose] = useState([]);
//console.log(ingredientChoose);
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



  const [ingredientAdded, setIngredientAdded] = useState(false);
  const [ingredientAdded2, setIngredientAdded2] = useState(false);
  const [ingredientAdded3, setIngredientAdded3] = useState(false);
  const [ingredientAdded4, setIngredientAdded4] = useState(false);
  const [ingredientAdded5, setIngredientAdded5] = useState(false);
  const [ingredientAdded6, setIngredientAdded6] = useState(false);
  const [ingredientAdded7, setIngredientAdded7] = useState(false);
  const [ingredientAdded8, setIngredientAdded8] = useState(false);
  const [ingredientAdded9, setIngredientAdded9] = useState(false);
  const [ingredientAdded10, setIngredientAdded10] = useState(false);
  const [ingredientAdded11, setIngredientAdded11] = useState(false);
  const [ingredientAdded12, setIngredientAdded12] = useState(false);
  const [ingredientAdded13, setIngredientAdded13] = useState(false);
  const [ingredientAdded14, setIngredientAdded14] = useState(false);
  const [ingredientAdded15, setIngredientAdded15] = useState(false);
  const [ingredientAdded16, setIngredientAdded16] = useState(false);
  const [ingredientAdded17, setIngredientAdded17] = useState(false);
  const [ingredientAdded18, setIngredientAdded18] = useState(false);
  const [ingredientAdded19, setIngredientAdded19] = useState(false);
  const [ingredientAdded20, setIngredientAdded20] = useState(false);
  const [ingredientAdded21, setIngredientAdded21] = useState(false);
  const [ingredientAdded22, setIngredientAdded22] = useState(false);
  const [ingredientAdded23, setIngredientAdded23] = useState(false);
  const [ingredientAdded24, setIngredientAdded24] = useState(false);

  const [inputUstensilAdded1, setInputUstensiladded1] = useState("dnone");
  const [inputUstensilAdded2, setInputUstensiladded2] = useState("dnone");
  const [inputUstensilAdded3, setInputUstensiladded3] = useState("dnone");
  const [inputUstensilAdded4, setInputUstensiladded4] = useState("dnone");
  const [inputUstensilAdded5, setInputUstensiladded5] = useState("dnone");
  const [inputUstensilAdded6, setInputUstensiladded6] = useState("dnone");
  const [inputUstensilAdded7, setInputUstensiladded7] = useState("dnone");

  const [inputIngredientAdded2, setInputIngredientadded2] = useState("dnone");
  const [inputIngredientAdded3, setInputIngredientadded3] = useState("dnone");
  const [inputIngredientAdded4, setInputIngredientadded4] = useState("dnone");
  const [inputIngredientAdded5, setInputIngredientadded5] = useState("dnone");
  const [inputIngredientAdded6, setInputIngredientadded6] = useState("dnone");
  const [inputIngredientAdded7, setInputIngredientadded7] = useState("dnone");
  const [inputIngredientAdded8, setInputIngredientadded8] = useState("dnone");
  const [inputIngredientAdded9, setInputIngredientadded9] = useState("dnone");
  const [inputIngredientAdded10, setInputIngredientadded10] = useState("dnone");
  const [inputIngredientAdded11, setInputIngredientadded11] = useState("dnone");
  const [inputIngredientAdded12, setInputIngredientadded12] = useState("dnone");
  const [inputIngredientAdded13, setInputIngredientadded13] = useState("dnone");
  const [inputIngredientAdded14, setInputIngredientadded14] = useState("dnone");
  const [inputIngredientAdded15, setInputIngredientadded15] = useState("dnone");
  const [inputIngredientAdded16, setInputIngredientadded16] = useState("dnone");
  const [inputIngredientAdded17, setInputIngredientadded17] = useState("dnone");
  const [inputIngredientAdded18, setInputIngredientadded18] = useState("dnone");
  const [inputIngredientAdded19, setInputIngredientadded19] = useState("dnone");
  const [inputIngredientAdded20, setInputIngredientadded20] = useState("dnone");
  const [inputIngredientAdded21, setInputIngredientadded21] = useState("dnone");
  const [inputIngredientAdded22, setInputIngredientadded22] = useState("dnone");
  const [inputIngredientAdded23, setInputIngredientadded23] = useState("dnone");
  const [inputIngredientAdded24, setInputIngredientadded24] = useState("dnone");


  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

 

  let arrayMeasure = [
    'Millilitres (ml)',
    'Centilitres (cl)',
    'Litres (l)',
    'Grammes (g)',
    'Kilogrammes (kg)',
    'Cuillères à soupe',
    'Cuillères à café',
    'Verre',
    'Tasse',
    'Pincée',
    'Unité'
  ];

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

  useEffect(() => {
    async function getIngredient() {
      try {
        const response = await fetch(`${API_INDEX}/getIngredient`);
        if (response.ok) {
          const ingredients = await response.json();
          setIngredientList(ingredients);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getIngredient();
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
    descriptionRecipe2:"",
    descriptionRecipe3:"",
    descriptionRecipe4:"",
  };

 // console.log(defaultValues);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
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
        const recipe = await response.json();
        reset(defaultValues);
        window.location.reload(false);
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

  function handleInputIngredient(e, index) {
   // console.log(e.target.value);
    const keyBoardInput = e.target.value;
    switch (index) {
      case 2:
        setSearchIngredient2(keyBoardInput.trim().toLowerCase());
        break;
      case 3:
        setSearchIngredient3(keyBoardInput.trim().toLowerCase());
        break;
      case 4:
        setSearchIngredient4(keyBoardInput.trim().toLowerCase());
        break;
      case 5:
        setSearchIngredient5(keyBoardInput.trim().toLowerCase());
        break;
      case 6:
        setSearchIngredient6(keyBoardInput.trim().toLowerCase());
        break;
      case 7:
        setSearchIngredient7(keyBoardInput.trim().toLowerCase());
        break;
      case 8:
        setSearchIngredient8(keyBoardInput.trim().toLowerCase());
        break;
      case 9:
        setSearchIngredient9(keyBoardInput.trim().toLowerCase());
        break;
      case 10:
        setSearchIngredient10(keyBoardInput.trim().toLowerCase());
        break;
      case 11:
        setSearchIngredient11(keyBoardInput.trim().toLowerCase());
        break;
      case 12:
        setSearchIngredient12(keyBoardInput.trim().toLowerCase());
        break;
      case 13:
        setSearchIngredient13(keyBoardInput.trim().toLowerCase());
        break;
      case 14:
        setSearchIngredient14(keyBoardInput.trim().toLowerCase());
        break;
      case 15:
        setSearchIngredient15(keyBoardInput.trim().toLowerCase());
        break;
      case 16:
        setSearchIngredient16(keyBoardInput.trim().toLowerCase());
        break;
      case 17:
        setSearchIngredient17(keyBoardInput.trim().toLowerCase());
        break;
      case 18:
        setSearchIngredient18(keyBoardInput.trim().toLowerCase());
        break;
      case 19:
        setSearchIngredient19(keyBoardInput.trim().toLowerCase());
        break;
      case 20:
        setSearchIngredient20(keyBoardInput.trim().toLowerCase());
        break;
      case 21:
        setSearchIngredient21(keyBoardInput.trim().toLowerCase());
        break;
      case 22:
        setSearchIngredient22(keyBoardInput.trim().toLowerCase());
        break;
      case 23:
        setSearchIngredient23(keyBoardInput.trim().toLowerCase());
        break;
      case 24:
        setSearchIngredient24(keyBoardInput.trim().toLowerCase());
        break;
      default:
        setSearchIngredient1(keyBoardInput.trim().toLowerCase());
    }
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

  function handleDeleteIngredient(inputId, addedStateSetter, inputQuantity, inputMeasure) {
    return function(event) {
      event.preventDefault();
      const selectedIngredientId = document.getElementById(inputId).value;
      setIngredientChoose(prevIngredients => prevIngredients.filter((ingredient) => ingredient.id !== selectedIngredientId));
      document.getElementById(inputQuantity).value = "";
      document.getElementById(inputMeasure).value = "";
      addedStateSetter(false)
    }
  }
  
  function handleAddIngredient(inputId, addedStateSetter, inputQuantity, inputMeasure) {
    return function(event) {
      event.preventDefault();
      //console.log(inputId);
      const selectedIngredientId = document.getElementById(inputId).value;
      const selectedIngredientQuantities = document.getElementById(`${inputQuantity}`).value;
      const selectedIngredientMeasure = document.getElementById(`${inputMeasure}`).value;
      if (!ingredientChoose.some((ingredient) => ingredient.id === selectedIngredientId)) {
        setIngredientChoose([...ingredientChoose, { id: selectedIngredientId, quantities: selectedIngredientQuantities, measure: selectedIngredientMeasure }]);
        addedStateSetter(true)
      }
    }
  }


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

  function addInputIngredient(i) {
    i.preventDefault();
    if (count2 === 0) {
      setInputIngredientadded2("dBlock");
    }
    if (count2 === 1) {
      setInputIngredientadded3("dBlock");
    }
    if (count2 === 2) {
      setInputIngredientadded4("dBlock");
    }
    if (count2 === 3) {
      setInputIngredientadded5("dBlock");
    }
    if (count2 === 4) {
      setInputIngredientadded6("dBlock");
    }
    if (count2 === 5) {
      setInputIngredientadded7("dBlock");
    }
    if (count2 === 6) {
      setInputIngredientadded8("dBlock");
    }
    if (count2 === 7) {
      setInputIngredientadded9("dBlock");
    }
    if (count2 === 8) {
      setInputIngredientadded10("dBlock");
    }
    if (count2 === 9) {
      setInputIngredientadded11("dBlock");
    }
    if (count2 === 10) {
      setInputIngredientadded12("dBlock");
    }
    if (count2 === 11) {
      setInputIngredientadded13("dBlock");
    }
    if (count2 === 12) {
      setInputIngredientadded14("dBlock");
    }
    if (count2 === 13) {
      setInputIngredientadded15("dBlock");
    }
    if (count2 === 14) {
      setInputIngredientadded16("dBlock");
    }
    if (count2 === 15) {
      setInputIngredientadded17("dBlock");
    }
    if (count2 === 16) {
      setInputIngredientadded18("dBlock");
    }
    if (count2 === 17) {
      setInputIngredientadded19("dBlock");
    }
    if (count2 === 18) {
      setInputIngredientadded20("dBlock");
    }
    if (count2 === 19) {
      setInputIngredientadded21("dBlock");
    }
    if (count2 === 20) {
      setInputIngredientadded22("dBlock");
    }
    if (count2 === 21) {
      setInputIngredientadded23("dBlock");
    }
    if (count2 === 22) {
      setInputIngredientadded24("dBlock");
    }
    setCount2(count2 + 1);
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

            <div className="d-flex flex-column mb20">
              <h2>De quels ingrédients de cuisine a t-on besoin ?</h2>
              <div className="d-flex">
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 1)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded}
                  ></input>
                  <select id="ingredients" disabled={ingredientAdded}>
                    <option value="" disabled>
                      Quel ingredient?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient1
                        )
                      )
                      .map((ingredient) => (
                        <option
                          key={ingredient.INGREDIENT_ID}
                          value={ingredient.INGREDIENT_ICON}
                        >
                          {ingredient.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities" disabled={ingredientAdded}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity) => (
                      <option
                        key={quantity}
                        value={(quantity + 1) / 10}
                        step="0.1"
                      >
                        {(quantity + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure" disabled={ingredientAdded}>
                    {arrayMeasure.map((measure1) => (
                      <option key={measure1} value={measure1}>
                        {" "}
                        {measure1}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients",
                      setIngredientAdded,
                      "quantities",
                      "measure"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients",
                      setIngredientAdded,
                      "quantities",
                      "measure"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>
              <div className={`${inputIngredientAdded2}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 2)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded2}
                  ></input>
                  <select id="ingredients2" disabled={ingredientAdded2}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient2
                        )
                      )
                      .map((ingredient2) => (
                        <option
                          key={ingredient2.INGREDIENT_ID}
                          value={ingredient2.INGREDIENT_ICON}
                        >
                          {ingredient2.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities2" disabled={ingredientAdded2}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity2) => (
                      <option
                        key={quantity2}
                        value={(quantity2 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity2 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure2" disabled={ingredientAdded2}>
                    {arrayMeasure.map((measure2) => (
                      <option key={measure2} value={measure2}>
                        {" "}
                        {measure2}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients2",
                      setIngredientAdded2,
                      "quantities2",
                      "measure2"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients2",
                      setIngredientAdded2,
                      "quantities2",
                      "measure2"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded3}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 3)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded3}
                  ></input>
                  <select id="ingredients3" disabled={ingredientAdded3}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient3
                        )
                      )
                      .map((ingredient3) => (
                        <option
                          key={ingredient3.INGREDIENT_ID}
                          value={ingredient3.INGREDIENT_ICON}
                        >
                          {ingredient3.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities3" disabled={ingredientAdded3}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity3) => (
                      <option
                        key={quantity3}
                        value={(quantity3 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity3 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure3" disabled={ingredientAdded3}>
                    {arrayMeasure.map((measure3) => (
                      <option key={measure3} value={measure3}>
                        {" "}
                        {measure3}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients3",
                      setIngredientAdded3,
                      "quantities3",
                      "measure3"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients3",
                      setIngredientAdded3,
                      "quantities3",
                      "measure3"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded4}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 4)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded4}
                  ></input>
                  <select id="ingredients4" disabled={ingredientAdded4}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient4
                        )
                      )
                      .map((ingredient4) => (
                        <option
                          key={ingredient4.INGREDIENT_ID}
                          value={ingredient4.INGREDIENT_ICON}
                        >
                          {ingredient4.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities4" disabled={ingredientAdded4}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity4) => (
                      <option
                        key={quantity4}
                        value={(quantity4 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity4 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure4" disabled={ingredientAdded4}>
                    {arrayMeasure.map((measure4) => (
                      <option key={measure4} value={measure4}>
                        {" "}
                        {measure4}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients4",
                      setIngredientAdded4,
                      "quantities4",
                      "measure4"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients4",
                      setIngredientAdded4,
                      "quantities4",
                      "measure4"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded5}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 5)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded5}
                  ></input>
                  <select id="ingredients5" disabled={ingredientAdded5}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient5
                        )
                      )
                      .map((ingredient5) => (
                        <option
                          key={ingredient5.INGREDIENT_ID}
                          value={ingredient5.INGREDIENT_ICON}
                        >
                          {ingredient5.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities5" disabled={ingredientAdded5}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity5) => (
                      <option
                        key={quantity5}
                        value={(quantity5 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity5 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure5" disabled={ingredientAdded5}>
                    {arrayMeasure.map((measure5) => (
                      <option key={measure5} value={measure5}>
                        {" "}
                        {measure5}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients5",
                      setIngredientAdded5,
                      "quantities5",
                      "measure5"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients5",
                      setIngredientAdded5,
                      "quantities5",
                      "measure5"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded6}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 6)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded6}
                  ></input>
                  <select id="ingredients6" disabled={ingredientAdded6}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient6
                        )
                      )
                      .map((ingredient6) => (
                        <option
                          key={ingredient6.INGREDIENT_ID}
                          value={ingredient6.INGREDIENT_ICON}
                        >
                          {ingredient6.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities6" disabled={ingredientAdded6}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity6) => (
                      <option
                        key={quantity6}
                        value={(quantity6 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity6 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure6" disabled={ingredientAdded6}>
                    {arrayMeasure.map((measure6) => (
                      <option key={measure6} value={measure6}>
                        {" "}
                        {measure6}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients6",
                      setIngredientAdded6,
                      "quantities6",
                      "measure6"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients6",
                      setIngredientAdded6,
                      "quantities6",
                      "measure6"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded7}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 7)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded7}
                  ></input>
                  <select id="ingredients7" disabled={ingredientAdded7}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient7
                        )
                      )
                      .map((ingredient7) => (
                        <option
                          key={ingredient7.INGREDIENT_ID}
                          value={ingredient7.INGREDIENT_ICON}
                        >
                          {ingredient7.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities7" disabled={ingredientAdded7}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity7) => (
                      <option
                        key={quantity7}
                        value={(quantity7 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity7 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure7" disabled={ingredientAdded7}>
                    {arrayMeasure.map((measure7) => (
                      <option key={measure7} value={measure7}>
                        {" "}
                        {measure7}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients7",
                      setIngredientAdded7,
                      "quantities7",
                      "measure7"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients7",
                      setIngredientAdded7,
                      "quantities7",
                      "measure7"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded8}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 8)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded8}
                  ></input>
                  <select id="ingredients8" disabled={ingredientAdded8}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient8
                        )
                      )
                      .map((ingredient8) => (
                        <option
                          key={ingredient8.INGREDIENT_ID}
                          value={ingredient8.INGREDIENT_ICON}
                        >
                          {ingredient8.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities8" disabled={ingredientAdded8}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity8) => (
                      <option
                        key={quantity8}
                        value={(quantity8 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity8 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure8" disabled={ingredientAdded8}>
                    {arrayMeasure.map((measure8) => (
                      <option key={measure8} value={measure8}>
                        {" "}
                        {measure8}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients8",
                      setIngredientAdded8,
                      "quantities8",
                      "measure8"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients8",
                      setIngredientAdded8,
                      "quantities8",
                      "measure8"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded9}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 9)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded9}
                  ></input>
                  <select id="ingredients9" disabled={ingredientAdded9}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient9
                        )
                      )
                      .map((ingredient9) => (
                        <option
                          key={ingredient9.INGREDIENT_ID}
                          value={ingredient9.INGREDIENT_ICON}
                        >
                          {ingredient9.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities9" disabled={ingredientAdded9}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity9) => (
                      <option
                        key={quantity9}
                        value={(quantity9 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity9 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure9" disabled={ingredientAdded9}>
                    {arrayMeasure.map((measure9) => (
                      <option key={measure9} value={measure9}>
                        {" "}
                        {measure9}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients9",
                      setIngredientAdded9,
                      "quantities9",
                      "measure9"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients9",
                      setIngredientAdded9,
                      "quantities9",
                      "measure9"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded10}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 10)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded10}
                  ></input>
                  <select id="ingredients10" disabled={ingredientAdded10}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient10
                        )
                      )
                      .map((ingredient10) => (
                        <option
                          key={ingredient10.INGREDIENT_ID}
                          value={ingredient10.INGREDIENT_ICON}
                        >
                          {ingredient10.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities10" disabled={ingredientAdded10}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity10) => (
                      <option
                        key={quantity10}
                        value={(quantity10 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity10 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure10" disabled={ingredientAdded10}>
                    {arrayMeasure.map((measure10) => (
                      <option key={measure10} value={measure10}>
                        {" "}
                        {measure10}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients10",
                      setIngredientAdded10,
                      "quantities10",
                      "measure10"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients10",
                      setIngredientAdded10,
                      "quantities10",
                      "measure10"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded11}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 11)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded11}
                  ></input>
                  <select id="ingredients11" disabled={ingredientAdded11}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient11
                        )
                      )
                      .map((ingredient11) => (
                        <option
                          key={ingredient11.INGREDIENT_ID}
                          value={ingredient11.INGREDIENT_ICON}
                        >
                          {ingredient11.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities11" disabled={ingredientAdded11}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity11) => (
                      <option
                        key={quantity11}
                        value={(quantity11 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity11 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure11" disabled={ingredientAdded11}>
                    {arrayMeasure.map((measure11) => (
                      <option key={measure11} value={measure11}>
                        {" "}
                        {measure11}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients11",
                      setIngredientAdded11,
                      "quantities11",
                      "measure11"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients11",
                      setIngredientAdded11,
                      "quantities11",
                      "measure11"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded12}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 12)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded12}
                  ></input>
                  <select id="ingredients12" disabled={ingredientAdded12}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient12
                        )
                      )
                      .map((ingredient12) => (
                        <option
                          key={ingredient12.INGREDIENT_ID}
                          value={ingredient12.INGREDIENT_ICON}
                        >
                          {ingredient12.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities12" disabled={ingredientAdded12}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity12) => (
                      <option
                        key={quantity12}
                        value={(quantity12 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity12 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure12" disabled={ingredientAdded12}>
                    {arrayMeasure.map((measure12) => (
                      <option key={measure12} value={measure12}>
                        {" "}
                        {measure12}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients12",
                      setIngredientAdded12,
                      "quantities12",
                      "measure12"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients12",
                      setIngredientAdded12,
                      "quantities12",
                      "measure12"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded13}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 13)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded13}
                  ></input>
                  <select id="ingredients13" disabled={ingredientAdded13}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient13
                        )
                      )
                      .map((ingredient13) => (
                        <option
                          key={ingredient13.INGREDIENT_ID}
                          value={ingredient13.INGREDIENT_ICON}
                        >
                          {ingredient13.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities13" disabled={ingredientAdded13}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity13) => (
                      <option
                        key={quantity13}
                        value={(quantity13 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity13 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure13" disabled={ingredientAdded13}>
                    {arrayMeasure.map((measure13) => (
                      <option key={measure13} value={measure13}>
                        {" "}
                        {measure13}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients13",
                      setIngredientAdded13,
                      "quantities13",
                      "measure13"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients13",
                      setIngredientAdded13,
                      "quantities13",
                      "measure13"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded14}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 14)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded14}
                  ></input>
                  <select id="ingredients14" disabled={ingredientAdded14}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient14
                        )
                      )
                      .map((ingredient14) => (
                        <option
                          key={ingredient14.INGREDIENT_ID}
                          value={ingredient14.INGREDIENT_ICON}
                        >
                          {ingredient14.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities14" disabled={ingredientAdded14}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity14) => (
                      <option
                        key={quantity14}
                        value={(quantity14 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity14 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure14" disabled={ingredientAdded14}>
                    {arrayMeasure.map((measure14) => (
                      <option key={measure14} value={measure14}>
                        {" "}
                        {measure14}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients14",
                      setIngredientAdded14,
                      "quantities14",
                      "measure14"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients14",
                      setIngredientAdded14,
                      "quantities14",
                      "measure14"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded15}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 15)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded15}
                  ></input>
                  <select id="ingredients15" disabled={ingredientAdded15}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient15
                        )
                      )
                      .map((ingredient15) => (
                        <option
                          key={ingredient15.INGREDIENT_ID}
                          value={ingredient15.INGREDIENT_ICON}
                        >
                          {ingredient15.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities15" disabled={ingredientAdded15}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity15) => (
                      <option
                        key={quantity15}
                        value={(quantity15 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity15 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure15" disabled={ingredientAdded15}>
                    {arrayMeasure.map((measure15) => (
                      <option key={measure15} value={measure15}>
                        {" "}
                        {measure15}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients15",
                      setIngredientAdded15,
                      "quantities15",
                      "measure15"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredient15",
                      setIngredientAdded15,
                      "quantities15",
                      "measure15"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded16}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 16)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded16}
                  ></input>
                  <select id="ingredients16" disabled={ingredientAdded16}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient16
                        )
                      )
                      .map((ingredient16) => (
                        <option
                          key={ingredient16.INGREDIENT_ID}
                          value={ingredient16.INGREDIENT_ICON}
                        >
                          {ingredient16.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities16" disabled={ingredientAdded16}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity16) => (
                      <option
                        key={quantity16}
                        value={(quantity16 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity16 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure16" disabled={ingredientAdded16}>
                    {arrayMeasure.map((measure16) => (
                      <option key={measure16} value={measure16}>
                        {" "}
                        {measure16}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients16",
                      setIngredientAdded16,
                      "quantities16",
                      "measure16"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients16",
                      setIngredientAdded16,
                      "quantities16",
                      "measure16"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded17}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 17)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded17}
                  ></input>
                  <select id="ingredients17" disabled={ingredientAdded17}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient17
                        )
                      )
                      .map((ingredient17) => (
                        <option
                          key={ingredient17.INGREDIENT_ID}
                          value={ingredient17.INGREDIENT_ICON}
                        >
                          {ingredient17.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities17" disabled={ingredientAdded17}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity17) => (
                      <option
                        key={quantity17}
                        value={(quantity17 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity17 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure17" disabled={ingredientAdded17}>
                    {arrayMeasure.map((measure17) => (
                      <option key={measure17} value={measure17}>
                        {" "}
                        {measure17}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients17",
                      setIngredientAdded17,
                      "quantities17",
                      "measure17"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients17",
                      setIngredientAdded17,
                      "quantities17",
                      "measure17"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded18}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 18)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded18}
                  ></input>
                  <select id="ingredients18" disabled={ingredientAdded18}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient18
                        )
                      )
                      .map((ingredient18) => (
                        <option
                          key={ingredient18.INGREDIENT_ID}
                          value={ingredient18.INGREDIENT_ICON}
                        >
                          {ingredient18.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities18" disabled={ingredientAdded18}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity18) => (
                      <option
                        key={quantity18}
                        value={(quantity18 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity18 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure18" disabled={ingredientAdded18}>
                    {arrayMeasure.map((measure18) => (
                      <option key={measure18} value={measure18}>
                        {" "}
                        {measure18}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients18",
                      setIngredientAdded18,
                      "quantities18",
                      "measure18"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients18",
                      setIngredientAdded18,
                      "quantities18",
                      "measure18"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded19}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 19)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded19}
                  ></input>
                  <select id="ingredients19" disabled={ingredientAdded19}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient19
                        )
                      )
                      .map((ingredient19) => (
                        <option
                          key={ingredient19.INGREDIENT_ID}
                          value={ingredient19.INGREDIENT_ICON}
                        >
                          {ingredient19.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities19" disabled={ingredientAdded19}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity19) => (
                      <option
                        key={quantity19}
                        value={(quantity19 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity19 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure19" disabled={ingredientAdded19}>
                    {arrayMeasure.map((measure19) => (
                      <option key={measure19} value={measure19}>
                        {" "}
                        {measure19}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients19",
                      setIngredientAdded19,
                      "quantities19",
                      "measure19"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients19",
                      setIngredientAdded19,
                      "quantities19",
                      "measure19"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded20}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 20)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded20}
                  ></input>
                  <select id="ingredients20" disabled={ingredientAdded20}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient20
                        )
                      )
                      .map((ingredient20) => (
                        <option
                          key={ingredient20.INGREDIENT_ID}
                          value={ingredient20.INGREDIENT_ICON}
                        >
                          {ingredient20.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities20" disabled={ingredientAdded20}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity20) => (
                      <option
                        key={quantity20}
                        value={(quantity20 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity20 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure20" disabled={ingredientAdded20}>
                    {arrayMeasure.map((measure20) => (
                      <option key={measure20} value={measure20}>
                        {" "}
                        {measure20}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients20",
                      setIngredientAdded20,
                      "quantities20",
                      "measure20"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients20",
                      setIngredientAdded20,
                      "quantities20",
                      "measure20"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded21}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 21)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded21}
                  ></input>
                  <select id="ingredients21" disabled={ingredientAdded21}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient21
                        )
                      )
                      .map((ingredient21) => (
                        <option
                          key={ingredient21.INGREDIENT_ID}
                          value={ingredient21.INGREDIENT_ICON}
                        >
                          {ingredient21.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities21" disabled={ingredientAdded21}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity21) => (
                      <option
                        key={quantity21}
                        value={(quantity21 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity21 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure21" disabled={ingredientAdded21}>
                    {arrayMeasure.map((measure21) => (
                      <option key={measure21} value={measure21}>
                        {" "}
                        {measure21}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients21",
                      setIngredientAdded21,
                      "quantities21",
                      "measure21"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients21",
                      setIngredientAdded21,
                      "quantities21",
                      "measure21"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded22}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 22)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded22}
                  ></input>
                  <select id="ingredients22" disabled={ingredientAdded22}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient22
                        )
                      )
                      .map((ingredient22) => (
                        <option
                          key={ingredient22.INGREDIENT_ID}
                          value={ingredient22.INGREDIENT_ICON}
                        >
                          {ingredient22.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities22" disabled={ingredientAdded22}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity22) => (
                      <option
                        key={quantity22}
                        value={(quantity22 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity22 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure22" disabled={ingredientAdded22}>
                    {arrayMeasure.map((measure22) => (
                      <option key={measure22} value={measure22}>
                        {" "}
                        {measure22}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients22",
                      setIngredientAdded22,
                      "quantities22",
                      "measure22"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients22",
                      setIngredientAdded22,
                      "quantities22",
                      "measure22"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded23}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 23)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded23}
                  ></input>
                  <select id="ingredients23" disabled={ingredientAdded23}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient23
                        )
                      )
                      .map((ingredient23) => (
                        <option
                          key={ingredient23.INGREDIENT_ID}
                          value={ingredient23.INGREDIENT_ICON}
                        >
                          {ingredient23.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities23" disabled={ingredientAdded23}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity23) => (
                      <option
                        key={quantity23}
                        value={(quantity23 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity23 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure23" disabled={ingredientAdded23}>
                    {arrayMeasure.map((measure23) => (
                      <option key={measure23} value={measure23}>
                        {" "}
                        {measure23}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients23",
                      setIngredientAdded23,
                      "quantities23",
                      "measure23"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary-reverse"
                    onClick={handleDeleteIngredient(
                      "ingredients23",
                      setIngredientAdded23,
                      "quantities23",
                      "measure23"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <div className={`${inputIngredientAdded24}`}>
                <div
                  className={`${styles.inputDeco} p10 d-flex justify-content-center`}
                >
                  <div className={`${styles.inputStart}`}></div>
                  <input
                    type="text"
                    onInput={(e) => handleInputIngredient(e, 24)}
                    className="flex-fill"
                    placeholder="Search ..."
                    disabled={ingredientAdded24}
                  ></input>
                  <select id="ingredients24" disabled={ingredientAdded24}>
                    <option value="" disabled>
                      Quel ingrédient ?
                    </option>
                    {ingredientList
                      .filter((i) =>
                        i.INGREDIENT_FR_NAME.toLowerCase().startsWith(
                          searchIngredient24
                        )
                      )
                      .map((ingredient24) => (
                        <option
                          key={ingredient24.INGREDIENT_ID}
                          value={ingredient24.INGREDIENT_ICON}
                        >
                          {ingredient24.INGREDIENT_FR_NAME}
                        </option>
                      ))}
                  </select>
                  <select id="quantities24" disabled={ingredientAdded24}>
                    <option value="" disabled>
                      Quelle quantité?
                    </option>
                    {Array.from(Array(2000).keys()).map((quantity24) => (
                      <option
                        key={quantity24}
                        value={(quantity24 + 1) / 10}
                        step="0.1"
                      >
                        {(quantity24 + 1) / 10}
                      </option>
                    ))}
                  </select>
                  <select id="measure24" disabled={ingredientAdded24}>
                    {arrayMeasure.map((measure24) => (
                      <option key={measure24} value={measure24}>
                        {" "}
                        {measure24}{" "}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddIngredient(
                      "ingredients24",
                      setIngredientAdded24,
                      "quantities24",
                      "measure24"
                    )}
                  >
                    Valider ingrédient
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleDeleteIngredient(
                      "ingredients24",
                      setIngredientAdded24,
                      "quantities24",
                      "measure24"
                    )}
                  >
                    Supprimer ingrédient
                  </button>
                </div>
              </div>

              <i
                className="btn btn-primary d-flex justify-content-center"
                onClick={addInputIngredient}
              >
                Ajouter un autre ingrédient ?
              </i>
              <div>
                Listes des ingrédients :
                <br />
                <span>
                  {ingredientChoose.map((i) => (
                    <img
                      className={`${styles.iconUstensil}`}
                      key={i}
                      src={`../../assets/LOGO_ingrédients_png/${i.id}`}
                      alt="ingrédients"
                    ></img>
                  ))}
                </span>
              </div>
            </div>

            <Description
        stepDescriptions={stepDescriptions}
        onStepDescriptionsChange={handleStepDescriptionsChange}
      />

            <button disabled={isSubmitting} className="btn btn-primary">
              Ajouter à vos recettes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
