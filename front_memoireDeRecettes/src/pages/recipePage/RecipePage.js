import { Link, useParams } from "react-router-dom";
import styles from "./RecipePage.module.scss";
import { useState, useEffect, useContext } from "react";
import logoPreparation from "../../assets/images/logoPreparation.png";
import logoCuisson from "../../assets/images/logoCuisson.png";
import moment from "moment";
import "moment/locale/fr";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/AuthContext";
import SweetAlert from "../components/alert/AlertSweet";
import { getImages } from "../../apis/recipe";
import LikeRecipes from "../components/likeRecipe/LikeRecipes";
import ShoppingListButton from "../components/shoppingList/ShoppingListButton";
import Difficulty from "../components/difficulty/Difficulty";
import Price from "../components/price/Price";
import { RecipeContext } from "../../context/RecipeContext";
import StarRender from "../components/rating/StarRender";
import AlertBad from "../components/alert/AlertBad";
import TrickRecipe from "../components/trickRecipe/TrickRecipe.";
import LikeUserButton from "../components/likeUser/LikeUserButton";
import ImageViewer from "../components/imageViewer/ImageViewer";
const URL_API = "/api/recette";

export default function RecipePage() {
  const [imageFile, setImageFile] = useState("");
  const { user } = useContext(AuthContext);
  const [recipeClick, setRecipeClick] = useState([]);
  const [ustensilsRecipe, setUstensilsRecipe] = useState([]);
  const [ingredientsRecipe, setIngredientsRecipe] = useState([]);
  const [newIngredientsRecipe, setNewIngredientsRecipe] =
    useState(ingredientsRecipe);
  const [noticeRecipe, setNoticeRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stageRecipe, setStageRecipe] = useState([]);
  const [rating, setRating] = useState(0);
  const { recipesRating } = useContext(RecipeContext);
  const [newNumberOfPlate, setNewNumberOfPlate] = useState();
  let { id } = useParams();
  let dateStr, date, formattedDate;
  let idUser;

  if (user) {
    idUser = user[0].USER_ID;
  }


  const handleChange = (event) => {
    const newNumberOfPlate = event.target.value;
    setNewNumberOfPlate(newNumberOfPlate);
    const initialNumberOfPlate = recipeClick[0].RECIPE_NUMBER_PLATE;
    const factor = newNumberOfPlate / initialNumberOfPlate;
    const newQuantityIngredientList = [...ingredientsRecipe];
    const newMeasure = newQuantityIngredientList.map((ingredient) => ({
      ...ingredient,
      INGREDIENT_QUANTITY: (ingredient.INGREDIENT_QUANTITY * factor).toFixed(2),
    }));
    setNewIngredientsRecipe(newMeasure);
  };

  useEffect(() => {
    const fetchImages = async () => {
      if (recipeClick[0]) {
        try {
          const response = await getImages(recipeClick[0].PHOTO_NAME);
          if (response.ok) {
            setImageFile(response.url);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchImages();
  }, [recipeClick]);

  const handleStarClick = (index) => {
    recipesRating(id);
    setRating(index);
  };

  useEffect(() => {
    async function getRecipeClicked() {
      try {
        const response = await fetch(`${URL_API}/getRecipeClicked/${id}`);
        if (response.ok) {
          const recipeClicked = await response.json();
          setRecipeClick(recipeClicked);
          const initialValue = recipeClicked[0].RECIPE_NUMBER_PLATE;
          setNewNumberOfPlate(initialValue);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getRecipeClicked();
  }, [id]);

  useEffect(() => {
    async function getUstensil() {
      try {
        const response = await fetch(`${URL_API}/getUstensilsByIdRecipe/${id}`);
        if (response.ok) {
          const ustensil = await response.json();
          setUstensilsRecipe(ustensil);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getUstensil();
  }, [id]);

  useEffect(() => {
    async function getIngredient() {
      try {
        const response = await fetch(
          `${URL_API}/getIngredientsByIdRecipe/${id}`
        );
        if (response.ok) {
          const ingredient = await response.json();
          setIngredientsRecipe(ingredient);
          setIsLoading(false);
          setNewIngredientsRecipe(ingredient);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getIngredient();
  }, [id]);

  useEffect(() => {
    async function getStage() {
      try {
        const response = await fetch(`${URL_API}/getStage/${id}`);
        if (response.ok) {
          const stage = await response.json();
          setStageRecipe(stage);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getStage();
  }, [id]);

  useEffect(() => {
    async function getNotice() {
      try {
        const response = await fetch(`${URL_API}/getNotice/${id}`);
        if (response.ok) {
          const notice = await response.json();
          setNoticeRecipe(notice);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getNotice();
  }, [id]);

  if (!isLoading && recipeClick[0]) {
    dateStr = recipeClick[0].RECIPE_PUBLICATION_DATE;
    date = moment(dateStr);
    formattedDate = date.locale("fr").format("DD MMMM YYYY");
  }
  const renderStars = (NOTICE_STAR_NUMBER) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= NOTICE_STAR_NUMBER) {
        stars.push(<i key={i} className="la la-star"></i>);
      } else {
        stars.push(<i key={i} className="lar la-star"></i>);
      }
    }
    return <div>{stars}</div>;
  };

  const yupSchema = yup.object({
    score: yup.number().required(),
    notice: yup
      .string()
      .notRequired()
      .min(3, "L'avis doit contenir au moins 3 caractères."),
  });

  const defaultValues = {
    score: rating,
    notice: "",
  };

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

  const submit = handleSubmit(async (values) => {
    try {
      if (rating === 0) {
        // Vérifiez si le champ de score est vide
        setError("score", {
          type: "required",
          message: "Le score est obligatoire (minimum 1 étoile)",
        });
        return;
      }
      clearErrors();
      const response = await fetch(`${URL_API}/addNotice/${id}/${idUser}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          score: rating,
        }),
      });
      if (response.ok) {
        reset(defaultValues);
        SweetAlert("Bravo", "Votre message a bien été envoyé");
      } else {
        AlertBad("Désolé", "Vous ne pouvez pas noter deux fois une recette");
      }
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  return (
    <div className="d-flex flex-column justify-content-center">
      {isLoading ? (
        <p>Loading...</p>
      ) : recipeClick && recipeClick.length > 0 ? (
        <div className={`m0`}>
          <div className={`${styles.container2}  m10 d-flex flex-column`}>
            <div
              className={`${styles.mobileColumn} flex-fill d-flex justify-content-around m10`}
            >
              <div className={` align-items-start ${styles.posAbsolute}`}>
                {recipeClick[0].DIET_IMAGE ? (
                  <img
                    className={` ${styles.regime}`}
                    src={`../../assets/images/${recipeClick[0].DIET_IMAGE}`}
                    alt="régime alimentaire"
                  />
                ) : (
                  ""
                )}
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    className={`${styles.bigImage} m10 d-flex`}
                    src={imageFile}
                    alt="recette principale"
                  />
                  <div className="d-flex justify-content-center">
                    <i>
                      ❝{" "}
                      {recipeClick[0].RECIPE_DESCRIPTION.charAt(
                        0
                      ).toUpperCase() +
                        recipeClick[0].RECIPE_DESCRIPTION.slice(1)}{" "}
                      ❞
                    </i>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column">
                <div className="ml20 mt10">
                  <h1>
                    {recipeClick[0].RECIPE_TITLE.charAt(0).toUpperCase() +
                      recipeClick[0].RECIPE_TITLE.slice(1)}
                    <em className="">-{recipeClick[0].NOM_TYPE_DE_REPAS}</em>
                  </h1>
                </div>
                <div
                  className={`${styles.container3} flex-fill d-flex flex-row justify-content-between`}
                >
                  <div className={`d-flex flex-column justify-content-center`}>
                    <p className="d-flex justify-content-center">
                      Recette de {recipeClick[0].SEASON_NAME}
                    </p>
                    <p className="d-flex justify-content-center">
                      Spécialité {recipeClick[0].MEAL_TYPE_NAME}
                    </p>
                    <p className="d-flex justify-content-center">
                      Cuisson {recipeClick[0].COOKING_TYPE_NAME}
                    </p>
                    <p>
                      Créée par {recipeClick[0].USER_PSEUDO} le {formattedDate}
                    </p>
                    {recipeClick[0].USER_PHOTO && (
                      <Link to={`/myRecipesPage/${recipeClick[0].USER_ID}`}>
                        <div className="  d-flex justify-content-center ">
                          <ImageViewer imageData={recipeClick[0].USER_PHOTO} />
                        </div>
                      </Link>
                    )}
                  </div>
                  <div className="align-items-center justify-content-center ml20">
                    <div className={`d-flex align-items-center`}>
                      <img
                        src={logoPreparation}
                        alt="temps de préparation"
                      ></img>
                      <p>{recipeClick[0].PREP_TIME}</p>
                    </div>
                    <div className={`d-flex`}>
                      <img src={logoCuisson} alt="temps de cuisson"></img>
                      <p>{recipeClick[0].COOKING_TIME}</p>
                    </div>
                    <div className="d-flex justify-content-center">
                      {Difficulty(recipeClick[0].RECIPE_DIFFICULTY)}
                    </div>
                    <div>{Price(recipeClick[0].RECIPE_PRICE)}</div>
                    {recipeClick[0].DIET_TYPE_NAME.length > 0 ? (
                      <p>Régime : {recipeClick[0].DIET_TYPE_NAME}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={`d-flex justify-content-around`}>
              <div className={`${styles.mobilePosition}`}>
                {recipeClick[0].AVERAGE_SCORE ? (
                  <div className={` ${styles.stars}`}>
                    <StarRender starCount={recipeClick[0].AVERAGE_SCORE} />
                  </div>
                ) : (
                  ""
                )}
                <select value={newNumberOfPlate} onChange={handleChange}>
                  {Array.from({ length: 12 }, (_, index) => index + 1).map(
                    (value) => (
                      <option key={value} value={value}>
                        {value} assiette(s)
                      </option>
                    )
                  )}
                </select>
              </div>
             {user != null && <div className={`${styles.mobilePosition}`}>
                <div>
                  <LikeRecipes idRecipe={recipeClick[0].RECIPE_ID} />
                </div>
                {recipeClick[0].USER_ID !== idUser && (
                  <div>
                    <LikeUserButton idUserLiked={recipeClick[0].USER_ID} />
                  </div>
                )}
                <div>
                  <ShoppingListButton
                    newIngredientsRecipe={newIngredientsRecipe}
                  />
                </div>
              </div>}
            </div>
            <h3 className="ml20 pl20">Ustensiles</h3>
            <div className={`${styles.container4} m10`}>
              {ustensilsRecipe.map((a) => (
                <div
                  className="d-flex flex-column  align-items-center"
                  key={a.USTENSIL_ID}
                >
                  <div
                    className={
                      a.USTENSIL_NAME.length > 12 ? "scroll-on-hover" : ""
                    }
                  >
                    <span className="scroll-text">{a.USTENSIL_NAME}</span>
                  </div>
                  <div>
                    {a.USTENSIL_ICON ? (
                      <img
                        src={`../assets/images/LogoUstensiles/${a.USTENSIL_ICON}`}
                        alt="icones ustensiles"
                        className={`${styles.logoSize}`}
                      />
                    ) : (
                      <img
                        src={`../assets/images/LogoUstensiles/imageDefault.gif`}
                        alt="icones ustensiles"
                        className={`${styles.logoSize}`}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <h3 className="ml20 pl20">Ingrédients</h3>
            <div className={`${styles.container4} m10`}>
              {newIngredientsRecipe
                ? newIngredientsRecipe.map((a) => (
                    <div
                      className="d-flex flex-column text-align-center"
                      key={a.INGREDIENT_ID}
                    >
                      <div
                        className={
                          a.INGREDIENT_FR_NAME.length > 12
                            ? "scroll-on-hover"
                            : ""
                        }
                      >
                        <span className="scroll-text">
                          {a.INGREDIENT_FR_NAME}
                        </span>
                      </div>
                      <div className="text-align-center">
                        <img
                          src={`../assets/LOGO_ingrédients_png/${a.INGREDIENT_ICON}`}
                          alt="icones ingrédients"
                          className={`${styles.logoSize}`}
                        />
                      </div>
                      <p>
                        {a.INGREDIENT_QUANTITY} {a.MEASURE_UNITY}
                      </p>
                    </div>
                  ))
                : ""}
            </div>
            {stageRecipe.map((sr) => (
              <div key={sr.STAGE_RECIPE_ID}>
                <h3 className={`ml20 pl20 ${styles.titleExplication}`}>
                  Etape {sr.STAGE_NUM}
                </h3>{" "}
                <div className="d-flex">
                  <div
                    className={`d-flex justify-content-center ${styles.inputCheckbokCenter}`}
                  >
                    <input
                      type="checkbox"
                      className={`${styles.checkboxStage} ml10`}
                    />
                  </div>
                  <p className={`${styles.explication}`}>
                    {sr.STAGE_RECIPE_EXPLICATION}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={`m10`}>
            <TrickRecipe id={id} />
          </div>
          <form onSubmit={handleSubmit(submit)} className={`m10`}>
            <div
              className={`${styles.container5}  d-flex flex-column justify-content-evenly mt10 pb20`}
            >
              <h3 className="m20 pl20">Le coin des avis</h3>
              <div className={`${styles.mobileFlex}`}>
                <div className={`${styles.container6} m0`}>
                  {noticeRecipe.map((n) => (
                    <div className={` d-flex flex-column `} key={n.NOTICE_ID}>
                      {n.NOTICE_RECIPE.length > 0 ? (
                        <>
                          <div className={`d-flex flex-row `}>
                            <div>
                              {" "}
                              {n.USER_PHOTO && (
                                <ImageViewer imageData={n.USER_PHOTO} />
                              )}
                            </div>
                            {n.NOTICE_STAR_NUMBER >= 1 &&
                            n.NOTICE_STAR_NUMBER <= 5
                              ? renderStars(n.NOTICE_STAR_NUMBER)
                              : ""}
                            <p>Chef {n.USER_PSEUDO}</p>
                          </div>
                          <div className={`d-flex flex-row`}>
                            <div className={`${styles.littleGreen2} `}> </div>
                            <p className={`${styles.container7} `}>
                              {n.NOTICE_RECIPE}
                            </p>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
                {user ? (
                  <div className="d-flex flex-column justify-content-start m1 align-items-center">
                    <div>
                      <h3>Donnez votre avis ici :</h3>
                      {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                          <div
                            key={index}
                            className={
                              index <= rating
                                ? "la la-star la-2x"
                                : "lar la-star la-2x"
                            }
                            onClick={() => handleStarClick(index)}
                          ></div>
                        );
                      })}
                      <div>
                        {errors?.score && <p>{errors.score.message}</p>}
                      </div>
                      {rating ? <p>Votre note : {rating} étoile(s)</p> : ""}
                    </div>
                    <div className={`d-flex flex-row`}>
                      <div className={`${styles.littleGreen}`}></div>
                      <textarea
                        rows="4"
                        cols="50"
                        placeholder="Une remarque ou un avis sur la recette..."
                        className={``}
                        {...register("notice")}
                      ></textarea>
                    </div>{" "}
                    <div>
                      {errors?.notice && <p>{errors.notice.message}</p>}
                    </div>
                    <button
                      disabled={isSubmitting}
                      className=" mt10 btn btn-primary"
                      id="addNotice"
                    >
                      Valider
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </form>
        </div>
      ) : (
        <p>No recipe data found.</p>
      )}
    </div>
  );
}
