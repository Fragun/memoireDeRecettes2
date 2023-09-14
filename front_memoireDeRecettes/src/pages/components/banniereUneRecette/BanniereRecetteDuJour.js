import { useState, useEffect } from "react";
import logoPreparation from "../../../assets/images/logoPreparation.png";
import logoCuisson from "../../../assets/images/logoCuisson.png";
import styles from "./BanniereRecetteDuJour.module.scss";
import { Link } from "react-router-dom";
import { getImages } from "../../../apis/recipe";
import Difficulty from "../difficulty/Difficulty";
import Price from "../price/Price";
import LikeRecipes from "../likeRecipe/LikeRecipes";
import StarRender from "../rating/StarRender";
import ImageViewer from "../imageViewer/ImageViewer";

const URL_API = "/api/recette";

export default function BanniereRecetteDuJour() {
  const [recipeOfDay, setRecipeOfDay] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageFile, setImageFile] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        if (recipe && recipe.PHOTO_NAME) {
          const response = await getImages(recipe.PHOTO_NAME);
          if (response.ok) {
            setImageFile(response.url);
          } else {
            setImageFile(null);
          }
        } else {
          setImageFile(null);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, [recipeOfDay, recipe]);

  function getCurrentSeason(today) {
    const seasons = [
      { name: "1", startMonth: 2, startDay: 20, endMonth: 5, endDay: 20 },
      { name: "2", startMonth: 5, startDay: 21, endMonth: 8, endDay: 21 },
      { name: "3", startMonth: 8, startDay: 22, endMonth: 11, endDay: 20 },
      { name: "4", startMonth: 11, startDay: 21, endMonth: 2, endDay: 19 },
    ];

    for (let i = 0; i < seasons.length; i++) {
      const { name, startMonth, startDay, endMonth, endDay } = seasons[i];
      const start = new Date(today.getFullYear(), startMonth, startDay);
      const end = new Date(today.getFullYear(), endMonth, endDay);

      if (today >= start && today <= end) {
        return name;
      }
    }
    return "saison inconnue";
  }

  useEffect(() => {
    const today = new Date();
    const season = getCurrentSeason(today);
    setRecipeOfDay([]);
    async function getDaysRecipe() {
      try {
        setIsLoading(true);
        const response = await fetch(`${URL_API}/getDaysRecipe/${season}`);
        if (response.ok) {
          const recipe = await response.json();
          setRecipeOfDay(recipe);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getDaysRecipe();
  }, []);

  useEffect(() => {
    if (recipeOfDay.length > 0) {
      const randomIndex = Math.floor(Math.random() * recipeOfDay.length);
      const randomRecipe = recipeOfDay[randomIndex];
      setRecipe(randomRecipe);
    }
  }, [recipeOfDay]);

  return (
    <div className={`${styles.containerBanniere}`}>
      {isLoading ? (
        <p>Loading...</p>
      ) : recipe ? (
        <div className="decoNone">
          <div className={`${styles.displayFlexBolck}`}>
            <div className={`${styles.containerImage}`}>
            <Link to={`/recipePage/${recipe.RECIPE_ID}`} className="decoNone">
              <div className={`${styles.relativePos}`}>
                <img
                  className={`${styles.imageRecette}`}
                  src={imageFile}
                  alt="plat"
                />
                <div className={`${styles.heart}`}>
                  <LikeRecipes idRecipe={recipe.RECIPE_ID} />
                </div>
                <div className={` ${styles.stars}`}>
                  {recipe.AVERAGE_SCORE && (
                    <StarRender starCount={recipe.AVERAGE_SCORE} />
                  )}
                </div>
                {recipe.DIET_IMAGE && (
                  <img
                    className={` ${styles.regime}`}
                    src={`../../assets/images/${recipe.DIET_IMAGE}`}
                    alt="régime alimentaire"
                  />
                )}

                <div className={`${styles.price} d-flex flex-row`}>
                  <span>{Price(recipe.RECIPE_PRICE)}</span>
                </div>
              </div></Link>
            </div>
            <div className="flex-column flex-fill m0 pRelative">
              <h2 className="text-align-center"> {recipe.RECIPE_TITLE}</h2>
              <p>{recipe.RECIPE_DESCRIPTION}</p>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={logoPreparation}
                  alt="préparation"
                  className={`${styles.logoTime}`}
                ></img>
                <p className={`${styles.time}`}>{recipe.PREP_TIME}</p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={logoCuisson}
                  alt="cuisson"
                  className={`${styles.logoTime}`}
                ></img>
                <p className={`${styles.time}`}>{recipe.COOKING_TIME}</p>
              </div>
              <div
                className={`${styles.difficulty} d-flex justify-content-center`}
              >
                {Difficulty(recipe.RECIPE_DIFFICULTY)}
              </div>
              {recipe.USER_PHOTO && (
                <Link to={`/myRecipesPage/${recipe.USER_ID}`}>
                  <div className={`${styles.imageAvatarPosition} `}>
                    <ImageViewer imageData={recipe.USER_PHOTO} />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
