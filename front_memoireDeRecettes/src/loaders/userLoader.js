import { getCurrentUser } from "../apis/auth";
import { mealTypeRecipe } from "../apis/recipe";

export async function userLoader() {
    return getCurrentUser();
}

export async function recipeLoader() {
    return mealTypeRecipe();
}