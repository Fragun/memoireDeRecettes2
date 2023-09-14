import styles from "./MultiCard.module.scss";
import logoPreparation from "../../../assets/images/logoPreparation.png";
import logoCuisson from "../../../assets/images/logoCuisson.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getImages } from "../../../apis/recipe";
import { useEffect, useState } from "react";
import Difficulty from "../difficulty/Difficulty";
import Price from "../price/Price";
import StarRender from "../rating/StarRender";
import LikeRecipes from "../likeRecipe/LikeRecipes";
import { Link } from "react-router-dom";
import ImageViewer from "../imageViewer/ImageViewer";

export default function MultiCard({ recipes, textSpeciality }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [imageFiles, setImageFiles] = useState({});

  const fetchImages = async (imageName, recipeId) => {
    try {
      const response = await getImages(imageName);

      if (response.ok) {
        setImageFiles((prevImages) => ({
          ...prevImages,
          [recipeId]: response.url,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    recipes.forEach((recipe) => {
      if (recipe.PHOTO_NAME) {
        fetchImages(recipe.PHOTO_NAME, recipe.RECIPE_ID);
      }
    });
  }, [recipes]);

  return (
    <div className={`${styles.multiCard} `}>
      <p className={`${styles.titreMultiCard}`}>
        Spécialité {textSpeciality}
        <span className={`${styles.numberRecipe}`}>
          ({recipes.length} recettes)
        </span>
      </p>
      <Slider {...settings}>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <div className={`${styles.imgPrincipale}`}>
              <Link to={`/recipePage/${recipe.RECIPE_ID}`} className="decoNone">
                <img
                  className={`${styles.focus} `}
                  src={imageFiles[recipe.RECIPE_ID]}
                  alt="recette"
                />
              </Link>
              <div className={` ${styles.stars}`}>
                {recipe.AVERAGE_SCORE && (
                  <StarRender starCount={recipe.AVERAGE_SCORE} />
                )}
              </div>
              <div className={`${styles.heart}`}>
                <LikeRecipes idRecipe={recipe.RECIPE_ID} />
              </div>
              <div className={`${styles.price}`}>
                {recipe.RECIPE_PRICE && Price(recipe.RECIPE_PRICE)}
              </div>
              {recipe.DIET_IMAGE && (
                <img
                  className={` ${styles.regime}`}
                  src={`../../assets/images/${recipe.DIET_IMAGE}`}
                  alt="régime alimentaire"
                />
              )}
            </div>
            <div className={`${styles.pRelativ}`}>
              <div
                className={`${styles.containerTitleRecipe}  d-flex justify-content-center `}
              >
                <h2 className={`${styles.titleRecipe} text-align-center`}>
                  {recipe.RECIPE_TITLE}{" "}
                </h2>
              </div>
              <p>{recipe.RECIPE_DESCRIPTION}</p>
              <div
                className={`d-flex justify-content-center ${styles.ensemble}`}
              >
                <div className="flex-column justify-content-center align-items-center">
                  <div className={`${styles.time}`}>{recipe.PREP_TIME}</div>
                  <img
                    className={` ${styles.iconMinicard} ml10`}
                    src={logoPreparation}
                    alt="temps de préparation"
                  ></img>
                </div>
                <div className="ml10 flex-column justify-content-center align-items-center ">
                  <div className={`${styles.time}`}>{recipe.COOKING_TIME}</div>
                  <img
                    className={` ${styles.iconMinicard} ml10`}
                    src={logoCuisson}
                    alt="temps de cuisson"
                  ></img>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-center">
                <div className={`${styles.difficulty}`}>
                  {Difficulty(recipe.RECIPE_DIFFICULTY)}{" "}
                </div>
              </div>

              {recipe.USER_PHOTO && (
                <Link to={`/myRecipesPage/${recipe.USER_ID}`}>
                  <div className={`${styles.imageAvatarPosition} `}>
                    <ImageViewer imageData={recipe.USER_PHOTO}/>
                  </div>
                </Link>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
