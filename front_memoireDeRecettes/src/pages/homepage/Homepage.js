import styles from "./Homepage.module.scss";
import SimpleCard from "../components/card/SimpleCard";
import CardMulti from "../components/card/MultiCard";
import { useCallback, useContext, useEffect, useState } from "react";
import BanniereCreationCompte from "../components/banniereInscription/BanniereCreationCompte";
import BanniereRecetteDuJour from "../components/banniereUneRecette/BanniereRecetteDuJour";
import Loading from "../../components/Loading/Loading";
import { AuthContext } from "../../context";
import Filters from "../components/Filters/Filters";
const URL_API = "/api/recette";

//import { searchRecipes, MarmitonQueryBuilder, RECIPE_PRICE, RECIPE_DIFFICULTY, Recipe } from 'marmiton-api';

export default function Homepage() {
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);
  const [allArticle, setAllArticle] = useState([]);
  

  function selectRecipesByDietType(allArticle, idDietTypeVegetarien) {
    return allArticle.filter(
      (item) => item.DIET_TYPE_ID === idDietTypeVegetarien
    );
  }
  function selectRecipesByLowPrice(allArticle) {
    return allArticle.filter((item) => item.RECIPE_PRICE === 1);
  }
  function selectRecipesByEasyDifficulty(allArticle) {
    return allArticle.filter((item) => item.RECIPE_DIFFICULTY === 1);
  }

  const idDietTypeVegetarien = 17;
  const idDietTypeVegan = 15;
  const selectedRecipeVegetarian = selectRecipesByDietType(
    allArticle,
    idDietTypeVegetarien
  );
  const selectedRecipeVegan = selectRecipesByDietType(
    allArticle,
    idDietTypeVegan
  );

  const selectedRecipeLowPrice = selectRecipesByLowPrice(allArticle);
  const selectedRecipeEasy = selectRecipesByEasyDifficulty(allArticle);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [numberRecipes, setNumberRecipes] = useState(0);

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
  useEffect(() => {
    async function getNumberRecipes() {
      try {
        const response = await fetch(`${URL_API}/getRecipes`);
        if (response.ok) {
          const numberRecipesFromApi = await response.json();
          setNumberRecipes(numberRecipesFromApi.count);
        }
      } catch (error) {
        console.error(error);
      }
    }

    async function getRecipes() {
      try {
        setIsLoading(true);
        const response = await fetch(`${URL_API}/getRecipes?limit=${page * 6}`);
        const responseNoLimit = await fetch(`${URL_API}/getRecipes`);
        if (response.ok) {
          const recipes = await response.json();
          const allRecipe = await responseNoLimit.json();
          setArticles(recipes);
          setAllArticle(allRecipe);
          setFilteredArticles(recipes);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getNumberRecipes();
    getRecipes();
  }, [page]);

  return (
    <div className={`flex-fill container p20 ${styles.recetteCard}`}>
      {user ? "" : <BanniereCreationCompte />}
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
      {isLoading && !articles.length ? (
        <Loading />
      ) : (
        <div className={`${styles.grid}`}>
          {filteredArticles
            .filter(
              (a) =>
                a.RECIPE_TITLE.toLowerCase().includes(search) ||
                a.RECIPE_DESCRIPTION.toLowerCase().includes(search)
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
      )}
      {numberRecipes !== articles.length && (
        <div className="d-flex justify-content-center align-items-center p20">
          <button onClick={() => setPage(page + 1)} className="btn btn-tertiary">
            Plus de recettes...
          </button>
        </div>
      )}

      <h2 className={`mt20 ml50 mb20 fs30 ${styles.titleBig}`}>La Recette du Jour</h2>
      <div className={`d-flex justify-content-center`}>
        {" "}
        <BanniereRecetteDuJour />
      </div>

      <br></br>
      <h2 className={`mt20 mb20 fs30 d-flex justify-content-end mr50 pr40 ${styles.titleBig}`}>
        {" "}
        Idées Repas{" "}
      </h2>

      <div className={`${styles.grid} `}>
        <CardMulti
          recipes={selectedRecipeVegetarian}
          textSpeciality="végétarienne"
        />
        <CardMulti
          recipes={selectedRecipeLowPrice}
          textSpeciality="bon marché"
        />
        <CardMulti recipes={selectedRecipeVegan} textSpeciality="végan" />
        <CardMulti
          recipes={selectedRecipeEasy}
          textSpeciality="cuisine facile"
        />
      </div>
    </div>
  );
}
