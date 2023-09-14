import styles from "./SimpleCard.module.scss";
import { useEffect, useState } from "react";
import logoPreparation from "../../../assets/images/logoPreparation.png";
import logoCuisson from "../../../assets/images/logoCuisson.png";
import { Link } from "react-router-dom";
import { getImages } from "../../../apis/recipe";
import LikeRecipes from "../likeRecipe/LikeRecipes";
import Difficulty from "../difficulty/Difficulty";
import Price from "../price/Price";
import StarRender from "../rating/StarRender";
import ImageViewer from "../imageViewer/ImageViewer";

export default function SimpleCard({
  title,
  image,
  description,
  difficulty,
  price,
  prepTime,
  timeCooking,
  regimeImage,
  idRecipe,
  averageScore,
  imageAvatar,
  idUser,
}) {
  const [imageFile, setImageFile] = useState("");

  useEffect(() => {
    setImageFile("");
    const fetchImages = async () => {
      try {
        const response = await getImages(image);

        if (response.ok) {
          setImageFile(response.url);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, [image]);

  return (
    <div className={`${styles.article}`}>
      <div className={`${styles.imgContainer}`}>
        <Link to={`/recipePage/${idRecipe}`} className="decoNone">
          <img className={styles.image} src={imageFile} alt="recette" />
          {regimeImage && (
            <img
              className={` ${styles.regime}`}
              src={`../../assets/images/${regimeImage}`}
              alt="régime alimentaire"
            />
          )}
          <div className={` ${styles.stars}`}>
            {averageScore ? <StarRender starCount={averageScore} /> : ""}
          </div>
          <div className={` ${styles.price}`}>{Price(price)}</div>
          <div className={`${styles.heart}`}>
            <LikeRecipes idRecipe={idRecipe} />
          </div>
        </Link>
      </div>
      <div
        className={`flex-column justify-content-center align-items-center ${styles.title}`}
      >
        <h3 className={`${styles.titleText}`}> {title} </h3>
        <p>{description}</p>

        <div className={`d-flex justify-content-center ${styles.ensemble}`}>
          <div className="flex-column justify-content-center align-items-center">
            <div className={`${styles.time}`}>{prepTime}</div>
            <img src={logoPreparation} alt="temps de préparation"></img>
          </div>
          <div className="ml10 flex-column justify-content-center align-items-center">
            <div className={`${styles.time}`}>{timeCooking}</div>
            <img src={logoCuisson} alt="temps de cuisson"></img>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-center">
          {Difficulty(difficulty)}
        </div>
       {imageAvatar && <Link to={`/myRecipesPage/${idUser}`}>
          <div className={`${styles.imageAvatarPosition}`}>
            <ImageViewer imageData={imageAvatar}/>
          </div>
        </Link>}
      </div>
    </div>
  );
}
