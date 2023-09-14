import styles from "./SimpleCard.module.scss";
import { useContext, useEffect, useState } from "react";
import logoPreparation from "../../../assets/images/logoPreparation.png";
import logoCuisson from "../../../assets/images/logoCuisson.png";
import { Link } from "react-router-dom";
import { getImages } from "../../../apis/recipe";
import { AuthContext } from "../../../context";
import { fetchLoved, postLoved } from "../../../apis/love";

export default function SimpleCard({
  title,
  image,
  description,
  imageAvatar,
  difficulty,
  price,
  prepTime,
  timeCooking,
  regimeImage,
  idRecipe,
}) {
  const [liked, setLiked] = useState(false);
  console.log('====================================');
  console.log(liked);
  console.log('====================================');
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    setLiked(!liked);
    const likedInfo = [idRecipe, user[0].USER_ID, liked];
    console.log(likedInfo);
    
    const postLikedRecipe = async () => {
      try {
        const response = await postLoved(likedInfo);
        if (response.ok) {
          alert("recette en favori");
        }
      } catch (error) {
        console.error(error);
      }
    };
    postLikedRecipe();
  };

  const [favorites, setFavorites] = useState([]);
  console.log('====================================');
  console.log(favorites);
  console.log('====================================');
  

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const userId = user[0].USER_ID;
        const response = await fetchLoved(userId);
        if (response) {
          const favoriteRecipe = response.map((item) => item.RECIPE_ID);
          setFavorites(favoriteRecipe);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchFavorites();
  }, [liked]);

  function difficultyRecipe() {
    switch (difficulty) {
      case 1:
        return (
          <div className="d-flex justify-content-center align-items-center">
            <h4>Facile</h4>
            <i className="las la-mitten la-2x"></i>
          </div>
        );
      case 2:
        return (
          <div className="d-flex justify-content-center align-items-center">
            <h4> Moyenne</h4>
            <div>
              <i className="las la-mitten la-2x"></i>
              <i className="las la-mitten la-2x"></i>{" "}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="d-flex justify-content-center align-items-center">
            <h4>Difficile</h4>
            <div>
              <i className="las la-mitten la-2x"></i>
              <i className="las la-mitten la-2x"></i>
              <i className="las la-mitten la-2x"></i>{" "}
            </div>
          </div>
        );

      default:
        break;
    }
  }
  function priceRecipe() {
    switch (price) {
      case 1:
        return (
          <div
            className={` ${styles.price} d-flex justify-content-center align-items-center`}
          >
            <i className="las la-euro-sign"></i>
          </div>
        );
      case 2:
        return (
          <div
            className={` ${styles.price} d-flex justify-content-center align-items-center`}
          >
            <i className="las la-euro-sign"></i>
            <i className="las la-euro-sign"></i>
          </div>
        );

      case 3:
        return (
          <div
            className={` ${styles.price} d-flex justify-content-center align-items-center`}
          >
            <i className="las la-euro-sign"></i>
            <i className="las la-euro-sign"></i>
            <i className="las la-euro-sign"></i>
          </div>
        );

      default:
        return <></>;
        break;
    }
  }

  const [imageFile, setImageFile] = useState("");

  useEffect(() => {
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
  }, []);

  return (
    <div className={`${styles.article}`}>
      <div className={`${styles.imgContainer}`}>
        <Link to={`/recipePage/${idRecipe}`} className="decoNone">
          <img className={styles.image} src={imageFile} alt="recette" />

          {imageAvatar ? (
            <img
              className={` ${styles.avatar}`}
              src={`../../assets/images/${imageAvatar}`}
              alt="logo avatar"
            />
          ) : (
            ""
          )}
          {regimeImage.length > 0 ? (
            <img
              className={` ${styles.regime}`}
              src={`../../assets/images/${regimeImage}`}
              alt="logo avatar"
            />
          ) : (
            ""
          )}
          {priceRecipe()}
        </Link>
      </div>
      <div
        className={`flex-column justify-content-center align-items-center ${styles.title}`}
      >
        <h3 className={`${styles.titleText}`}> {title} </h3>
        <p>{description}</p>
        <i
          onClick={handleClick}
          className={
            favorites.includes(idRecipe) ? "las la-heart" : "lar la-heart"
          }
        ></i>
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
        {difficultyRecipe()}
      </div>
    </div>
  );
}
