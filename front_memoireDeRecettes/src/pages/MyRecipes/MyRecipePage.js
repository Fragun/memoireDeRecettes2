import styles from "../homepage/Homepage.module.scss";
import SimpleCard from "../components/card/SimpleCard";
import { useCallback, useContext, useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { AuthContext } from "../../context";
import { useParams } from "react-router-dom";
import LikeUserButton from "../components/likeUser/LikeUserButton";
import Filters from "../components/Filters/Filters";
const URL_API = "/api/recette";

export default function MyRecipesPage() {

  const [filteredArticles, setFilteredArticles] = useState([]);
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [numberRecipes, setNumberRecipes] = useState(0);
  const { idUser } = useParams();
  const userConnected = user[0].USER_ID;
  /**
   * met en minuscule et sans espace la valeur saisi par l'utilisateur dans la barre de recherche*
   * et place la valeur dans search
   *
   * @param {*} e
   */
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

      let filteredRecipes = [...articles];

      Object.entries(filters).forEach(([filterName, filterValue]) => {
        if (filterValue > 0) {
          filteredRecipes = filteredRecipes.filter(
            (recipe) => recipe[filterName] == filterValue
          );
        }
      });

      setFilteredArticles(filteredRecipes);
    },
    [articles]
  );

  useEffect(() => {
    async function getNumberRecipes() {
      try {
        const response = await fetch(`${URL_API}/getRecipesByUser/${idUser}/?limit=${page * 2}`);
        if (response.ok) {
          const numberRecipesFromApi = await response.json();
          setNumberRecipes(numberRecipesFromApi.count);
        }
      } catch (error) {
        console.error(error);
      }
    }

    async function getRecipesByUser() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${URL_API}/getRecipesByUser/${idUser}?limit=${page * 6}`
        );
        if (response.ok) {
          const recipes = await response.json();
          setArticles(recipes);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getNumberRecipes();
    getRecipesByUser();
  }, [page, user, idUser]);

  return (
    <div className="flex-fill container p20">
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
          {idUser == userConnected ? (
            ""
          ) : (
            <div className="d-flex justify-content-end mr10">
              <LikeUserButton idUserLiked={idUser} />
            </div>
          )}
          {isLoading && !articles.length ? (
            <Loading />
          ) : (
            <div className={`${styles.grid}`}>
              {filteredArticles
                .filter((a) => a.RECIPE_TITLE.toLowerCase().includes(search) ||
                a.RECIPE_DESCRIPTION.toLowerCase().includes(search))
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
          )}
          {numberRecipes !== articles.length && (
            <div className="d-flex justify-content-center align-items-center p20">
              <button
                onClick={() => setPage(page + 1)}
                className="btn btn-primary"
              >
                Plus de recettes...
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
