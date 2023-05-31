import { useEffect, useState } from "react";
import styles from "./AdminPage.module.scss";
import { deleteRecipe, getRecipe, modifyRecipe } from "../../apis/recipe";
//import AlertYorN from "../components/alert/AlertYorN";
import Swal from 'sweetalert2';

export default function AdminPage() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  /**
   * récupération de toutes les recettes
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
  }, []); // Le tableau vide indique que l'effet ne doit être exécuté qu'une seule fois, au montage du composant


  async function handleModifyRecipe(recipeId) {
    try {
      // Récupérez les nouvelles valeurs des champs de la recette
      const updatedFields = {
        // Incluez ici les champs que vous souhaitez modifier et leurs nouvelles valeurs
        // Exemple : RECIPE_TITLE: "Nouveau titre"
      };

      // Appelez la fonction d'appel vers votre backend pour modifier la recette
      await modifyRecipe(recipeId, updatedFields);

      // Mettez à jour la liste des recettes après la modification
      fetchRecipes();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Permet de supprimer une recette selon son id, puis met à jour la liste des recettes
   *
   * @param {*} recipeId 
   */
  async function handleDeleteRecipe(recipeId) {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'La suppression est irréversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-la !'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteRecipe(recipeId);
          fetchRecipes();
          Swal.fire(
            'Supprimé !',
            'Votre fichier a été supprimé.',
            'success'
          );
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
                  <td>{recipe.RECIPE_TITLE}</td>
                  <td>{recipe.RECIPE_DESCRIPTION}</td>
                  <td>
                    {date.toLocaleDateString()} <br />
                    {date.toLocaleTimeString()}
                  </td>
                  <td>{recipe.RECIPE_NUMBER_PLATE} assiettes</td>
                  <td>{recipe.RECIPE_DIFFICULTY} gants</td>
                  <td>{recipe.RECIPE_PRICE}/5 NOT€</td>
                  <td>{recipe.PREP_TIME}</td>
                  <td>{recipe.COOKING_TIME}</td>
                  <td>
                    {recipe.USER_NAME} {recipe.USER_FIRSTNAME}
                  </td>
                  <td>{recipe.NOM_TYPE_DE_REPAS}</td>
                  <td>{recipe.MEAL_TYPE_NAME}</td>
                  <td>{recipe.DIET_TYPE_NAME}</td>
                  <td>{recipe.SEASON_NAME}</td>
                  <td>{recipe.COOKING_TYPE_NAME}</td>
                  <td>
                    <button
                      className="btn btn-primary-reverse"
                      onClick={() => handleModifyRecipe(recipe.RECIPE_ID)}
                    >
                      Modifier
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary-reverse"
                      onClick={() => handleDeleteRecipe(recipe.RECIPE_ID)}
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
