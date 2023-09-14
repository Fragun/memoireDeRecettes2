import styles from "../homepage/Homepage.module.scss";
import style from "../MyFavorites/FavoritesPage.module.scss";
import SimpleCard from "../components/card/SimpleCard";
import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import { RecipeContext } from "../../context/RecipeContext";
import Loading from "../../components/Loading/Loading";
import { UserLikeContext } from "../../context/UserLikeContext";
import Filters from "../components/Filters/Filters";
import { Link } from "react-router-dom";
import ImageViewer from "../components/imageViewer/ImageViewer";

//const URL_API = "/api/recette";

export default function FavoritesPage() {
  const [filteredArticles, setFilteredArticles] = useState([]);
  const { user } = useContext(AuthContext);
  const { recipesFavorite, recipeByIdUser } = useContext(RecipeContext);
  const [search, setSearch] = useState("");
  const [userFavorite, setUserFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { usersFavorite, usersLike } = useContext(UserLikeContext);
  const userId = user[0].USER_ID;

  useEffect(() => {
    const fetchRecipesFavorites = async () => {
      setIsLoading(true);
      try {
        await recipesFavorite(userId);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecipesFavorites();
  }, [userId, recipesFavorite]);

  const fetchUserFavorites = async () => {
    setIsLoading(true);
    try {
      await usersFavorite(userId);
    } catch (error) {
      console.error(error);
    } finally {
      setUserFavorite(!userFavorite);
      setIsLoading(false);
    }
  };

  function handleInput(e) {
    const keyBoardInput = e.target.value;
    setSearch(keyBoardInput.trim().toLowerCase());
  }

  const filterRecipes = useCallback(
    (
      selectedPrice,
      selectedDifficulty,
      selectedDietType,
      selectedCookingType,
      selectedMealType,
      selectedSeason,
      selectedMealMoment
    ) => {
      const filters = {
        ID_TYPE_DE_REPAS: selectedMealMoment,
        SEASON_ID: selectedSeason,
        MEAL_TYPE_ID: selectedMealType,
        RECIPE_PRICE: selectedPrice,
        RECIPE_DIFFICULTY: selectedDifficulty,
        DIET_TYPE_ID: selectedDietType,
        COOKING_TYPE_ID: selectedCookingType,
      };

      let filteredRecipes = [...recipeByIdUser];

      Object.entries(filters).forEach(([filterName, filterValue]) => {
        if (filterValue > 0) {
          filteredRecipes = filteredRecipes.filter(
            (recipe) => recipe[filterName] == filterValue
          );
        }
      });

      setFilteredArticles(filteredRecipes);
    },
    [recipeByIdUser]
  );

  return (
    <div className="flex-fill container p20">
      {isLoading && recipeByIdUser ? (
        <Loading />
      ) : (
        <>
          <div className="d-flex justify-content-end mr50 p10">
            {" "}
            <button className="btn btn-tertiary" onClick={fetchUserFavorites}>
              Vos chefs favoris
            </button>
          </div>
          {userFavorite && (
            <div className="d-flex justify-content-center">
              {usersLike.map((item, key) => (
                <div
                  className={`${style.containerUsersLiked} m5 d-flex flex-column btn btn-tertiary align-items-center`}
                >
                  {item.USER_PHOTO && (
                    <div className={``}>
                      <Link to={`/myRecipesPage/${item.USER_ID}`}>
                        <div className={``}>
                          <ImageViewer imageData={item.USER_PHOTO} />
                        </div>
                      </Link>
                    </div>
                  )}

                  <div className={` ${style.pseudoUser}`}>
                    {item.USER_PSEUDO}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className={`card p20 ${styles.recetteCard}`}>
            <div
              className={`card flex-fill d-flex flex-column mb20 p20 ${styles.contentCard}`}
            >
              <div className="d-flex flex-column align-items-center justify-content-center ">
                <div className={`${styles.searchBar}`}>
                  <i className="las la-search mr10"></i>
                  <input
                    type="text"
                    onInput={handleInput}
                    className="flex-fill"
                    placeholder="Recherche ..."
                  />
                </div>
                <div className="">
                  <Filters filterRecipes={filterRecipes} />
                </div>
              </div>

              <div className={`${styles.grid}`}>
                {filteredArticles
                  .filter(
                    (a) =>
                      a.RECIPE_TITLE.toLowerCase().includes(search) ||
                      a.RECIPE_DESCRIPTION.toLowerCase().includes(search) ||
                      a.stages.toLowerCase().includes(search)
                  )
                  .map((a, i) => (
                    <SimpleCard
                      key={i}
                      title={a.RECIPE_TITLE}
                      image={a.PHOTO_NAME}
                      description={a.RECIPE_DESCRIPTION}
                      publicationDate={a.RECIPE_PUBLICATION_DATE}
                      couvert={a.RECIPE_NUMBER_PLATE}
                      difficulty={a.RECIPE_DIFFICULTY}
                      price={a.RECIPE_PRICE}
                      prepTime={a.PREP_TIME}
                      timeCooking={a.COOKING_TIME}
                      imageAvatar={a.USER_PHOTO}
                      regime={a.DIET_TYPE_NAME}
                      regimeImage={a.DIET_IMAGE}
                      idRecipe={a.RECIPE_ID}
                      averageScore={a.AVERAGE_SCORE}
                      idUser={a.USER_ID}
                    />
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
