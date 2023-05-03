import { useParams } from "react-router-dom";
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
const URL_API = "/api/recette";


export default function RecipePage() {

const { user } = useContext(AuthContext);
  const [recipeClick, setRecipeClick] = useState([]);
  const [ustensilsRecipe, setUstensilsRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();
  let difficulty, price;
  let dateStr, date, formattedDate;
    let { idUser } = useParams();
    idUser = user[0].USER_ID;
    console.log(idUser);

  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index);
  };
  console.log(rating);
  useEffect(() => {
    async function getRecipeClicked() {
      try {
        const response = await fetch(`${URL_API}/getRecipeClicked/${id}`);
        if (response.ok) {
          const recipeClicked = await response.json();
          setRecipeClick(recipeClicked);
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

  if (!isLoading && recipeClick.length > 0) {
    difficulty = recipeClick[0].RECIPE_DIFFICULTY;
    price = recipeClick[0].RECIPE_PRICE;
    dateStr = recipeClick[0].RECIPE_PUBLICATION_DATE;
    date = moment(dateStr);
    formattedDate = date.locale("fr").format("DD MMMM YYYY");
  }

  function difficultyRecipe() {
    switch (difficulty) {
      case 1:
        return (
          <div className="d-flex justify-content-center align-items-center">
            <p>Difficulté : </p>
            <i class="las la-mitten la-2x"></i>
          </div>
        );
      case 2:
        return (
          <div className="d-flex justify-content-center align-items-center">
            <p>Difficulté : </p>
            <div>
              <i class="las la-mitten la-2x"></i>
              <i class="las la-mitten la-2x"></i>{" "}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="d-flex justify-content-center align-items-center">
            <p>Difficulté : </p>
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
            <p>Prix : </p>
            <i class="las la-euro-sign la-2x"></i>
          </div>
        );
      case 2:
        return (
          <div
            className={` ${styles.price} d-flex justify-content-center align-items-center`}
          >
            <p>Prix : </p>
            <i class="las la-euro-sign la-2x"></i>
            <i class="las la-euro-sign la-2x"></i>
          </div>
        );

      case 3:
        return (
          <div
            className={` ${styles.price} d-flex justify-content-center align-items-center`}
          >
            <p>Prix : </p>
            <i class="las la-euro-sign la-2x"></i>
            <i class="las la-euro-sign la-2x"></i>
            <i class="las la-euro-sign la-2x"></i>
          </div>
        );

      default:
        return <></>;
    }
  }

  const yupSchema = yup.object({
    astuce: yup.string().required(false),
  });
  const defaultValues = {
    astuce: "",
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
    console.log(values);
    try {
        clearErrors();
        const response = await fetch(`${URL_API}/addNotice/${id}/${idUser}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
           
        });
        if (response.ok) {
            const notice = await response.json();
            reset(defaultValues);
            console.log(notice);
        }
    } catch (message) {
        setError("generic", { type: "generic", message })
    }
});

  return (
    <div className="d-flex flex-column justify-content-center">
      {isLoading ? (
        <p>Loading...</p>
      ) : recipeClick.length > 0 ? (
        <>
          <div className={`${styles.container2}  m10`}>
            <div
              className={`${styles.mobileColumn} flex-fill d-flex justify-content-around m10`}
            >
              <div className={` align-items-start ${styles.posAbsolute}`}>
                {recipeClick[0].DIET_IMAGE.length > 0 ? (
                  <img
                    className={` ${styles.regime}`}
                    src={`../../assets/images/${recipeClick[0].DIET_IMAGE}`}
                    alt="logo avatar"
                  />
                ) : (
                  ""
                )}
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    className={` ${styles.bigImage} m10 d-flex `}
                    src={`../../assets/images/${recipeClick[0].PHOTO_NAME}`}
                    alt="recette principale"
                  ></img>
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
                    {recipeClick[0].USER_PHOTO ? (
                      <div className="  d-flex justify-content-center ">
                        <img
                          className={` ${styles.avatar}`}
                          src={`../../assets/images/${recipeClick[0].USER_PHOTO}`}
                          alt="logo avatar"
                        />
                      </div>
                    ) : (
                      ""
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
                    {difficultyRecipe()}
                    {priceRecipe()}
                    {recipeClick[0].DIET_TYPE_NAME.length > 0 ? (
                      <p>Régime : {recipeClick[0].DIET_TYPE_NAME}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
            <h3 className="ml20 pl20">Ustensiles</h3>
            <div
              className={`${styles.container4} m10 d-flex flex-row justify-content-evenly`}
            >
              {ustensilsRecipe.map((a, i) => (
                <div className="d-flex flex-column">
                  <div>{a.USTENSIL_NAME}</div>
                  <img
                    src={`../assets/images/LogoUstensiles/${a.USTENSIL_ICON}`}
                    alt="icones ustensiles"
                    className={`${styles.logoSize}`}
                  />
                </div>
              ))}
            </div>
            <h3 className="ml20 pl20">Ingrédients</h3>
            <div
              className={`${styles.container4} m10 d-flex flex-row justify-content-evenly`}
            >
              {ustensilsRecipe.map((a, i) => (
                <div className="d-flex flex-column">
                  <div>{a.USTENSIL_NAME}</div>
                  <img
                    src={`../assets/images/LogoUstensiles/${a.USTENSIL_ICON}`}
                    alt="icones ustensiles"
                    className={`${styles.logoSize}`}
                  />
                </div>
              ))}
            </div>
            <h4 className="ml20 pl20">Etape 1</h4>
            <p>
              Id laboris dolor nostrud ex esse reprehenderit dolore laborum
              magna. Veniam eiusat deserunt qui duis dolor proident magna Lorem
              eu eiusmod dolor sit. Consectetur tempor voluptate consequat
              excepteur eiusmod et voluptate labore aliqua dolor sunt qui
              voluptate.
            </p>
            <h4 className="ml20 pl20">Etape 2</h4>
            <p>
              Id laboris dolor nostrud ex esse reprehenderit dolore laborum
              magna. Veniam eiusat deserunt qui duis dolor proident magna Lorem
              eu eiusmod dolor sit. Consectetur tempor voluptate consequat
              excepteur eiusmod et voluptate labore aliqua dolor sunt qui
              voluptate.
            </p>
            <h4 className="ml20 pl20">Etape 3</h4>
            <p>
              Id laboris dolor nostrud ex esse reprehenderit dolore laborum
              magna. Veniam eiusat deserunt qui duis dolor proident magna Lorem
              eu eiusmod dolor sit. Consectetur tempor voluptate consequat
              excepteur eiusmod et voluptate labore aliqua dolor sunt qui
              voluptate.
            </p>
            <h4 className="ml20 pl20">Etape 4</h4>
            <p>
              Id laboris dolor nostrud ex esse reprehenderit dolore laborum
              magna. Veniam eiusat deserunt qui duis dolor proident magna Lorem
              eu eiusmod dolor sit. Consectetur tempor voluptate consequat
              excepteur eiusmod et voluptate labore aliqua dolor sunt qui
              voluptate.
            </p>
          </div>
          <form onSubmit={submit}
            className={`${styles.container5} m10 d-flex flex-column justify-content-evenly`}
          >
            <h3 className="m20 pl20">Le coin des astuces</h3>
            <div className="d-flex flex-row justify-content-evenly">
              <div classname={`${styles.container6}`}>
                <p>dezdzedezdezdzedzedzedzedzedzed</p>
              </div>
              {user ? (
        <div className="d-flex flex-column">
        <div>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <i
                key={index}
                className={
                  index <= rating
                    ? "la la-star la-2x"
                    : "lar la-star la-2x"
                }
                onClick={() => handleStarClick(index)}
              />
            );
          })}
          {rating ? <p>Votre note : {rating} étoiles</p> : ""}
        </div>

        <div className={`d-flex flex-row`}>
          <div className={`${styles.littleGreen}`}></div>
          <input
            type="text"
            placeholder="Noter ici une astuce pour cette recette..."
            className={``}
            {...register("astuce")}
          />
        </div>
        <div>{errors?.astuce && <p>{errors.astuce.message}</p>}</div>
        <button disabled={isSubmitting} className=" mt10 btn btn-primary">Valider</button>
      </div>
      ) :
        ("")}
              
            </div>
            
          </form>
        </>
      ) : (
        <p>not found</p>
      )}
    </div>
  );
}
