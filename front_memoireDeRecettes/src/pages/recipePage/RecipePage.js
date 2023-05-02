import { useParams } from 'react-router-dom';
import styles from './RecipePage.module.scss';
import { useState, useEffect } from 'react';

const URL_API = "/api/recette";

export default function RecipePage() {
  const [recipeClick, setRecipeClick] = useState([]);
  console.log(recipeClick);
  const [isLoading, setIsLoading] = useState(true);
  let {id} = useParams();

  useEffect(() => {
    async function getRecipeClicked() {
      try {
        const response = await fetch(`${URL_API}/getRecipeClicked/${id}`);
        if (response.ok) {
          const recipeClicked = await response.json();
          setRecipeClick(recipeClicked);
          setIsLoading(false);
        }
      } catch(error) {
        console.error(error);
      }
    }

    getRecipeClicked();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
        <div className={`${styles.container}`}>

        </div>
          <h2>{recipeClick[0].RECIPE_TITLE}</h2>
          <p>{recipeClick[0].RECIPE_DESCRIPTION}</p>
          {recipeClick[0].COOKING_TIME}
          {recipeClick[0].DIET_IMAGE}
          {recipeClick[0].MEAL_TYPE_NAME}
          {recipeClick[0].DIET_TYPE_NAME}
          {recipeClick[0].NOM_TYPE_DE_REPAS}
          {recipeClick[0].PHOTO_NAME}
          {recipeClick[0].PREP_TIME}
          {recipeClick[0].RECIPE_DIFFICULTY}
          {recipeClick[0].RECIPE_NUMBER_PLATE}
          {recipeClick[0].RECIPE_PRICE}
          {recipeClick[0].RECIPE_PUBLICATION_DATE}
          {recipeClick[0].RECIPE_NUMBER_PLATE}
          {recipeClick[0].SEASON_ID}
          {recipeClick[0].USER_PHOTO}
          {recipeClick[0].USER_PSEUDO}


          {/* Render the rest of the recipe details */}
        </>
      )}
    </div>
  );
}