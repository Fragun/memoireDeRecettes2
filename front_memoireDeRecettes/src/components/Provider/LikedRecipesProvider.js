import { useContext, useState } from "react";
import { LikedRecipesContext } from "../../context/LikedRecipesContext";
import { AuthContext } from "../../context";
import { deleteLoved, fetchLoved, postLoved } from "../../apis/love";

export function LikedRecipesProvider({ children }) {
  const [likedRecipes, setLikedRecipes] = useState([]);
  const { user } = useContext(AuthContext);


  const addLikedRecipe = (recipeId) => {
    setLikedRecipes([...likedRecipes, recipeId]);
    const likedInfo = [recipeId, user[0].USER_ID];
    const postLikedRecipe = async () => {
      try {
        const response = await postLoved(likedInfo);
        if (response.ok) {
          alert("recette en favori");
        }
      } catch (error) {
        console.error(error);
      }
    };
    postLikedRecipe();
  };

  const removeLikedRecipe = (recipeId) => {
    setLikedRecipes(likedRecipes.filter((id) => id !== recipeId));
    const likedInfo = [recipeId, user[0].USER_ID];
    const deleteLikedRecipe = async () => {
      try {
        const response = await deleteLoved(likedInfo);
        if (response.ok) {
          alert("recette supprimée de favori");
        }
      } catch (error) {
        console.error(error);
      }
    };
    deleteLikedRecipe();
  };

  const isRecipeLiked = async (recipeId) => {
    try {
      const response = await fetchLoved(user[0].USER_ID);
      const likedRecipeIds = response.map((item) => item.RECIPE_ID);
      return likedRecipeIds.includes(recipeId);
    } catch (error) {
      console.error(error);
      return false;
    }
  };


  return (
    <LikedRecipesContext.Provider
      value={{
        likedRecipes,
        addLikedRecipe,
        removeLikedRecipe,
        isRecipeLiked,
      }}
    >
      {children}
    </LikedRecipesContext.Provider>
  );
}

export function useLikedRecipes() {
  return useContext(LikedRecipesContext);
}
