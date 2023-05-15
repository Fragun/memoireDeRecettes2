import styles from "./Homepage.module.scss";
import SimpleCard from "../components/card/SimpleCard";
import CardMulti from "../components/card/MultiCard";
import { useContext, useEffect, useState } from "react";
import BanniereCreationCompte from "../components/banniereInscription/BanniereCreationCompte";
import BanniereRecetteDuJour from "../components/banniereUneRecette/BanniereRecetteDuJour";
import Loading from "../../components/Loading/Loading";
import { AuthContext } from "../../context";
const URL_API = "/api/recette";

//import { searchRecipes, MarmitonQueryBuilder, RECIPE_PRICE, RECIPE_DIFFICULTY, Recipe } from 'marmiton-api';

export default function Homepage() {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);
  console.log(articles);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [numberRecipes, setNumberRecipes] = useState(0);

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
          console.log(numberRecipesFromApi.count);
        }
      } catch (error) {
        console.error(error);
      }
    }

    async function getRecipes() {
      try {
        setIsLoading(true);
        const response = await fetch(`${URL_API}/getRecipes?limit=${page * 6}`);
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
    getRecipes();
  }, [URL_API, page]);

  //   function updateArticles(liked) {
  //     setArticles(
  //       articles.map((a) => (a.id === liked.id ? liked : a))
  //     );
  //   }

  return (
    <div className="flex-fill container p20">
      <div className={`card p20 ${styles.recetteCard}`}>
        {user ? "" : <BanniereCreationCompte />}


        <div className="flex-fill d-flex flex-column container p20">
          <div
            className={`card flex-fill d-flex flex-column mb20 p20 ${styles.contentCard}`}
          >
            
            <div
              className={`d-flex my30 justify-content-center align-items-center ${styles.searchBar}`}
            >
              <i className="fas fa-magnifying-glass mr10"></i>
              <input
                type="text"
                onInput={handleInput}
                className="flex-fill"
                placeholder="Search ..."
              />
            </div>
            {isLoading && !articles.length ? (
              <Loading />
            ) : (
              <div className={`${styles.grid}`}>
                {articles
                  .filter((a) =>
                    a.RECIPE_TITLE.toLowerCase().startsWith(search)
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
                      regimeImage={a.DIET_IMAGE }
                      idRecipe={a.RECIPE_ID}
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

        <h1 className="mt20 mb20">La Recette du Jour</h1>
        <BanniereRecetteDuJour />
        {/* <h1 className="mt20 mb20">Idées Repas</h1>
         <div className={`${styles.grid}`}>
                
                    {articles
                    .map((a, i) => (
                        < CardMulti                       key={i}
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
                        regimeImage={a.DIET_IMAGE }
                        idRecipe={a.RECIPE_ID}/>
                    ))}
                </div>  */}
      </div>
    </div>
  );
}