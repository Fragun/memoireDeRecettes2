import { getRecipeClicked } from "../../apis/recipe";
import { RecipeContext } from "../../context/RecipeContext";
import { useParams } from "react-router-dom";

export default function RecipeByIdProvider({ children }) {
  let { id } = useParams();

  async function fetchRecipeClicked() {
    await getRecipeClicked(id);
  }

  return (
    <RecipeContext.Provider
      value={{
        fetchRecipeClicked,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}
