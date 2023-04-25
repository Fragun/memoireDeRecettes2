import { useState } from "react";
import { useLoaderData } from "react-router-dom";
//import { addRecipe } from "../../apis/recipe";
import { RecipeContext } from "../../context/RecipeContext";
import { mealTypeRecipe as mealT} from "../../apis/recipe";

export default function RecipeProvider({ children }) {

    const initialRecipe = useLoaderData();
    const [recipeMealType, setRecipeMealType] = useState(initialRecipe);

    async function mealTypeRecipe(values) {
        const mealType = await mealT(values);
        setRecipeMealType(mealType);
    }
    return (
        <RecipeContext.Provider
            value={{
                recipeMealType,
                mealTypeRecipe
            }}
            >
                {children}
            </RecipeContext.Provider>
    );
}