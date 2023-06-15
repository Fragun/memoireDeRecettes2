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
import SweetAlert from "../components/alert/AlertSweet";
const URL_API = "/api/recette";
// import imageDefault from "./defaultImage";

export default function RecipePage() {
  const { user } = useContext(AuthContext);

  const [recipeClick, setRecipeClick] = useState([]);
  console.log(recipeClick);
  const [ustensilsRecipe, setUstensilsRecipe] = useState([]);
  const [ingredientsRecipe, setIngredientsRecipe] = useState([]);
  //console.log(ingredientsRecipe);
  const [noticeRecipe, setNoticeRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [previewImageRecipe, setPreviewImageRecipe] = useState();
  console.log(previewImageRecipe);

  const [stageRecipe, setStageRecipe] = useState([]);
  // console.log(stageRecipe);
  // console.log(previewImageRecipe);

  useEffect(() => {
    const fetchImageAndSetPreviewImageRecipe = async () => {
      if (recipeClick.length > 0) {
        const imageRecipe = recipeClick[0].PHOTO_NAME;

        console.log("imageRecipe /", imageRecipe.data);
        const uint8Array = new Uint8Array(imageRecipe.data);
        const blob = new Blob([uint8Array]);
        const urlImage = URL.createObjectURL(blob);
        console.log(urlImage);
        const response = await fetch(urlImage);
        console.log(response);
        const text = await response.text();
        console.log(text);
        setPreviewImageRecipe(text);
      }
    };

    fetchImageAndSetPreviewImageRecipe();
  }, [recipeClick, previewImageRecipe]);

  let { id } = useParams();

  let difficulty, price;
  let dateStr, date, formattedDate;

  let { idUser } = useParams();
  //console.log({idUser});
  if (user != null) {
    idUser = user[0].USER_ID;
  }

  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index);
  };

  const renderStarRating = (starCount) => {
    const maxStars = 5;
    const fullStar = <i className="la la-star"></i>;
    const emptyStar = <i className="lar la-star"></i>;

    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      if (i <= starCount) {
        stars.push(fullStar);
      } else {
        stars.push(emptyStar);
      }
    }

    return <div>{stars}</div>;
  };

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
    astuce: yup.string().notRequired(false),
    score: yup.number().required(false),
    notice: yup.string().notRequired(),
  });

  const defaultValues = {
    astuce: "",
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

  function handleClickAstuce() {
    {
      SweetAlert("Bravo", "Votre message a bien été envoyé");
    }
  }

  const submit = handleSubmit(async (values) => {
    console.log(values);
    try {
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
        const notice = await response.json();
        reset(defaultValues);
        console.log(notice);
      }
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  return (
    <div className="d-flex flex-column justify-content-center">
      {isLoading ? (
        <p>Loading...</p>
      ) : recipeClick.length > 0 ? (
        <div className={`m0`}>
          <div className={`${styles.container2}  m10 d-flex flex-column`}>
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
                    className={`${styles.bigImage} m10 d-flex `}
                    src={`${previewImageRecipe}`}
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
              {ingredientsRecipe.map((a, i) => (
                <div className="d-flex flex-column">
                  <div>{a.INGREDIENT_FR_NAME}</div>
                  <img
                    src={`../assets/LOGO_ingrédients_png/${a.INGREDIENT_ICON}`}
                    alt="icones ingrédients"
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
          <form onSubmit={submit} className={`m10`}>
            <div
              className={`${styles.container5}  d-flex flex-column justify-content-evenly pb20`}
            >
              <h3 className="m20 pl20">Le coin des astuces</h3>
              <div className={`${styles.mobileFlex}`}>
                <div className={`${styles.container6}`}>
                  {noticeRecipe.map((n, i) => (
                    <div className={` d-flex flex-column`}>
                      {n.NOTICE_TRICK_RECIPE.length > 0 ? (
                        <>
                          <div className={`d-flex flex-row`}>
                            <img
                              src={`../../assets/images/${n.USER_PHOTO}`}
                              alt="logo du propriétaire de la recette"
                              className={`${styles.imgUserSize}`}
                            />
                            {n.NOTICE_STAR_NUMBER
                              ? renderStarRating(n.NOTICE_STAR_NUMBER)
                              : ""}
                            <p>Chef {n.USER_PSEUDO}</p>
                          </div>
                          <div className={`d-flex flex-row`}>
                            <div className={`${styles.littleGreen2}`}> </div>
                            <p className={`${styles.container7}`}>
                              {n.NOTICE_TRICK_RECIPE}
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
                  <div className="d-flex flex-column justify-content-end m1">
                    <h3>Partager une astuce :</h3>
                    <div className={`d-flex flex-row`}>
                      <div className={`${styles.littleGreen}`}></div>
                      <textarea
                        placeholder="Noter ici une astuce pour cette recette..."
                        className={``}
                        {...register("astuce")}
                      ></textarea>
                    </div>
                    <div>
                      {errors?.astuce && <p>{errors.astuce.message}</p>}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div
              className={`${styles.container5}  d-flex flex-column justify-content-evenly mt10 pb20`}
            >
              <h3 className="m20 pl20">Le coin des avis</h3>
              <div className={`${styles.mobileFlex}`}>
                <div className={`${styles.container6} `}>
                  {noticeRecipe.map((n, i) => (
                    <div className={` d-flex flex-column `}>
                      {n.NOTICE_RECIPE.length > 0 ? (
                        <>
                          <div className={`d-flex flex-row `}>
                            <img
                              src={`../../assets/images/${n.USER_PHOTO}`}
                              alt="logo du propriétaire de la recette"
                              className={`${styles.imgUserSize}`}
                            />
                            {n.NOTICE_STAR_NUMBER === 1 ? (
                              <div>
                                <i class="la la-star"></i>
                                <i class="lar la-star"></i>
                                <i class="lar la-star"></i>
                                <i class="lar la-star"></i>
                                <i class="lar la-star"></i>
                              </div>
                            ) : n.NOTICE_STAR_NUMBER === 2 ? (
                              <div>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="lar la-star"></i>
                                <i class="lar la-star"></i>
                                <i class="lar la-star"></i>
                              </div>
                            ) : n.NOTICE_STAR_NUMBER === 3 ? (
                              <div>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="lar la-star"></i>
                                <i class="lar la-star"></i>
                              </div>
                            ) : n.NOTICE_STAR_NUMBER === 4 ? (
                              <div>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="lar la-star"></i>
                              </div>
                            ) : n.NOTICE_STAR_NUMBER === 5 ? (
                              <div>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                              </div>
                            ) : (
                              ""
                            )}
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
                      <h3>Donner votre avis ici :</h3>
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

                      {rating ? <p>Votre note : {rating} étoiles</p> : ""}
                    </div>

                    <div className={`d-flex flex-row`}>
                      <div className={`${styles.littleGreen}`}></div>
                      <textarea
                        rows="4"
                        cols="50"
                        placeholder="Ou simplement une remarque ou un avis sur la recette..."
                        className={``}
                        {...register("notice")}
                      ></textarea>
                    </div>
                    <button
                      disabled={isSubmitting}
                      onClick={() => handleClickAstuce()}
                      className=" mt10 btn btn-primary"
                      id="addAstuce"
                    >
                      Valider
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>{errors?.notice && <p>{errors.notice.message}</p>}</div>
            </div>
          </form>
        </div>
      ) : (
        <p>not found</p>
      )}
    </div>
  );
}
