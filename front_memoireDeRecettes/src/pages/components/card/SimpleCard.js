import styles from "./SimpleCard.module.scss";
import { useState } from "react";
import logoPreparation from "../../../assets/images/logoPreparation.png";
import logoCuisson from "../../../assets/images/logoCuisson.png";
import { Link } from "react-router-dom";

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

  const handleClick = () => {
    setLiked(!liked);
  };

  function difficultyRecipe() {
    switch (difficulty) {
      case 1:
        return (
          <div className="d-flex justify-content-center align-items-center">
            <h4>Facile</h4>
            <i class="las la-mitten la-2x"></i>
          </div>
        );
      case 2:
        return (
          <div className="d-flex justify-content-center align-items-center">
            <h4> Moyenne</h4>
            <div>
              <i class="las la-mitten la-2x"></i>
              <i class="las la-mitten la-2x"></i>{" "}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="d-flex justify-content-center align-items-center">
            <h4>Difficile</h4>
            <div>
              <i class="las la-mitten la-2x"></i>
              <i class="las la-mitten la-2x"></i>
              <i class="las la-mitten la-2x"></i>{" "}
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
            <i class="las la-euro-sign"></i>
          </div>
        );
      case 2:
        return (
          <div
            className={` ${styles.price} d-flex justify-content-center align-items-center`}
          >
            <i class="las la-euro-sign"></i>
            <i class="las la-euro-sign"></i>
          </div>
        );

      case 3:
        return (
          <div
            className={` ${styles.price} d-flex justify-content-center align-items-center`}
          >
            <i class="las la-euro-sign"></i>
            <i class="las la-euro-sign"></i>
            <i class="las la-euro-sign"></i>
          </div>
        );

      default:
        return <></>;
        break;
    }
  }
  function logoRegime() {
    if ("") {
      <></>;
    }
  }

  return (
    <Link to={`/recipePage/${idRecipe}`} className="decoNone"
    
    >
    <div onClick={handleClick} className={`${styles.article}`}>
      
      <div className={`${styles.imgContainer}`}>
        
          <img
            className={styles.image}
            src={`../../assets/images/${image}`}
            alt="recette"
          />
        

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
      </div>
      <div
        className={`flex-column justify-content-center align-items-center ${styles.title}`}
      >
        <h3> {title} </h3>
        <p>{description}</p>
        <i className={`fas fa-heart ${liked ? "text-primary" : ""}`}> </i>
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
    </Link>
  );
}
