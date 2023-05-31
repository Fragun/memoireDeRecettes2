import { useContext, useEffect, useState } from "react";
import styles from "./AdminPage.module.scss";
import { deleteRecipe, getRecipe, modifyRecipe } from "../../apis/recipe";
//import AlertYorN from "../components/alert/AlertYorN";
import Swal from "sweetalert2";
import { RecipeContext } from "../../context/RecipeContext";

export default function AdminPage() {
  const [recipes, setRecipes] = useState([]);
  const [isEditing, setIsEditing] = useState(false)

  const [modifiedValues, setModifiedValues] = useState({});
  console.log(modifiedValues);

  const {
    mealType,
    season,
    origin,
    dietType,
    mealMoment,
    ustensils,
    ingredients,
  } = useContext(RecipeContext);
  console.log(mealType);

  /**
   * récupération de toutes les recettes dans le useState 'recipes'
   *
   */
  async function fetchRecipes() {
    try {
      const recipes = await getRecipe();
      setRecipes(recipes);
      console.log(recipes);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchRecipes();
  }, []);

  function handleModifyinput(){
    setIsEditing(true)
  }

  async function handleModifyRecipe(recipeId, isEditing) {
    try {
      const updatedFields = modifiedValues[recipeId];
      await modifyRecipe(recipeId, updatedFields);
      fetchRecipes();
      if (isEditing) {
        setIsEditing(false); // Désactiver le mode d'édition après avoir modifié la recette
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleValueChange(recipeId, field, value) {
    setModifiedValues((prevValues) => ({
      ...prevValues,
      [recipeId]: {
        ...prevValues[recipeId],
        [field]: value,
      },
    }));
  }

  /**
   * Permet de supprimer une recette selon son id, puis met à jour la liste des recettes
   * sweetAlert2 demande confirmation de suppression
   * @param {*} recipeId
   */
  async function handleDeleteRecipe(recipeId) {
    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "La suppression est irréversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimez-la !",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteRecipe(recipeId);
          fetchRecipes();
          Swal.fire("Supprimé !", "Votre fichier a été supprimé.", "success");
        } catch (error) {
          console.error(error);
        }
      }
    });
  }

  return (
    <>
      <div>
        <h1 className={`${styles.title}`}>Espace ADMIN</h1>
      </div>
      <div className={`${styles.tableau}`}>
        <table>
          <caption>Liste des recettes</caption>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Titre</th>
              <th scope="col">Description</th>
              <th scope="col">Date de publication</th>
              <th scope="col">Nombre de couvert</th>
              <th scope="col">Difficulté</th>
              <th scope="col">Estimation du prix</th>
              <th scope="col">Temps de préparation</th>
              <th scope="col">Temps de cuisson</th>
              <th scope="col">Nom du chef</th>
              <th scope="col">Type de repas</th>
              <th scope="col">Origine du plat</th>
              <th scope="col">Type de régime</th>
              <th scope="col">Saison du plat</th>
              <th scope="col">Type de cuisson</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => {
              let date = new Date(recipe.RECIPE_PUBLICATION_DATE);

              return (
                <tr>
                  <th scope="row">{recipe.RECIPE_ID}</th>
                  <td>
                    {recipe.RECIPE_TITLE}
                    {isEditing && (
                    <input
                      type="text"
                      value={
                        modifiedValues[recipe.RECIPE_ID]?.RECIPE_TITLE || ""
                      }
                      onChange={(e) =>
                        handleValueChange(
                          recipe.RECIPE_ID,
                          "RECIPE_TITLE",
                          e.target.value
                        )
                      }
                    />
                    )}
                  </td>
                  <td>
                    {recipe.RECIPE_DESCRIPTION}
                    {isEditing && (
                    <input
                      type="text"
                      value={
                        modifiedValues[recipe.RECIPE_ID]?.RECIPE_DESCRIPTION ||
                        ""
                      }
                      onChange={(e) =>
                        handleValueChange(
                          recipe.RECIPE_ID,
                          "RECIPE_DESCRIPTION",
                          e.target.value
                        )
                      }
                    />
                  )}
                  </td>
                  <td>
                    {date.toLocaleDateString()} <br />
                    {date.toLocaleTimeString()}
                  </td>
                  <td>{recipe.RECIPE_NUMBER_PLATE} assiettes</td>
                  <td>
                    {recipe.RECIPE_DIFFICULTY} gants
                    <input
                      type="text"
                      value={
                        modifiedValues[recipe.RECIPE_ID]?.RECIPE_DIFFICULTY ||
                        ""
                      }
                      onChange={(e) =>
                        handleValueChange(
                          recipe.RECIPE_ID,
                          "RECIPE_DIFFICULTY",
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td>
                    {recipe.RECIPE_PRICE}/5 NOT€
                    <input
                      type="text"
                      value={
                        modifiedValues[recipe.RECIPE_ID]?.RECIPE_PRICE || ""
                      }
                      onChange={(e) =>
                        handleValueChange(
                          recipe.RECIPE_ID,
                          "RECIPE_PRICE",
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td>
                    {recipe.PREP_TIME}
                    <input
                      type="text"
                      value={modifiedValues[recipe.RECIPE_ID]?.PREP_TIME || ""}
                      onChange={(e) =>
                        handleValueChange(
                          recipe.RECIPE_ID,
                          "PREP_TIME",
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td>
                    {recipe.COOKING_TIME}
                    <input
                      type="text"
                      value={
                        modifiedValues[recipe.RECIPE_ID]?.COOKING_TIME || ""
                      }
                      onChange={(e) =>
                        handleValueChange(
                          recipe.RECIPE_ID,
                          "COOKING_TIME",
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td>
                    {recipe.USER_NAME} {recipe.USER_FIRSTNAME}
                  </td>
                  <td>
                    {recipe.NOM_TYPE_DE_REPAS}
                    <select
                      id="recipeType"
                      onChange={(e) =>
                        handleValueChange(
                          recipe.RECIPE_ID,
                          "RECIPE_MOMENT",
                          e.target.value
                        )
                      }
                    >
                      <option
                        value={
                          modifiedValues[recipe.RECIPE_ID]?.RECIPE_MOMENT || ""
                        }
                        disabled
                      ></option>
                      {mealMoment.map((meal) => (
                        <option
                          key={meal.ID_TYPE_DE_REPAS}
                          value={meal.ID_TYPE_DE_REPAS}
                        >
                          {meal.NOM_TYPE_DE_REPAS}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    {recipe.MEAL_TYPE_NAME}
                    <select
                      id="season"
                      onChange={(e) =>
                        handleValueChange(
                          recipe.RECIPE_ID,
                          "RECIPE_MEAL_TYPE",
                          e.target.value
                        )
                      }
                    >
                      <option
                        value={
                          modifiedValues[recipe.RECIPE_ID]?.RECIPE_MEAL_TYPE ||
                          ""
                        }
                        disabled
                      >
                        Saison
                      </option>
                      {mealType.map((meal) => (
                        <option
                          key={meal.MEAL_TYPE_ID}
                          value={meal.MEAL_TYPE_ID}
                        >
                          {meal.MEAL_TYPE_NAME}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    {recipe.DIET_TYPE_NAME}

                    <select
                      id="dietType"
                      onChange={(e) =>
                        handleValueChange(
                          recipe.RECIPE_ID,
                          "RECIPE_DIET_TYPE",
                          e.target.value
                        )
                      }
                    >
                      <option
                        value={
                          modifiedValues[recipe.RECIPE_ID]?.RECIPE_DIET_TYPE ||
                          ""
                        }
                        disabled
                      >
                        Saison
                      </option>
                      {dietType.map((diet) => (
                        <option
                          key={diet.DIET_TYPE_ID}
                          value={diet.DIET_TYPE_ID}
                        >
                          {diet.DIET_TYPE_NAME}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    {recipe.SEASON_NAME}
                    <select
                      id="season"
                      onChange={(e) =>
                        handleValueChange(
                          recipe.RECIPE_ID,
                          "RECIPE_SEASON",
                          e.target.value
                        )
                      }
                    >
                      <option
                        value={
                          modifiedValues[recipe.RECIPE_ID]?.RECIPE_SEASON || ""
                        }
                        disabled
                      >
                        Saison
                      </option>
                      {season.map((s) => (
                        <option key={s.SEASON_ID} value={s.SEASON_ID}>
                          {s.SEASON_NAME}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>{recipe.COOKING_TYPE_NAME}
                  <select
                      id="cooking_principal"
                      onChange={(e) =>
                        handleValueChange(
                          recipe.RECIPE_ID,
                          "RECIPE_COOKING_PRINCIPAL",
                          e.target.value
                        )
                      }
                    >
                      <option
                        value={
                          modifiedValues[recipe.RECIPE_ID]?.RECIPE_COOKING_PRINCIPAL|| ""
                        }
                        disabled
                      >
                        Saison
                      </option>
                      {origin.map((o) => (
                      <option
                        key={o.COOKING_TYPE_ID}
                        value={o.COOKING_TYPE_ID}
                      >
                        {o.COOKING_TYPE_NAME}
                      </option>
                    ))}
                    </select>


                 </td>
                  <td>
                    <button
                      className="btn btn-primary-reverse"
                      onClick={() => handleModifyinput()}
                    >
                      Modifier
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary-reverse"
                      onClick={() => handleDeleteRecipe(recipe.RECIPE_ID)} //faire une méthode avec compteur
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colspan="2">
                Nombre total d'albums
              </th>
              <td colspan="2">77</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
