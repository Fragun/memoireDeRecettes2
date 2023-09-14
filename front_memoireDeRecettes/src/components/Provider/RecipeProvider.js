import { useEffect, useRef, useState } from "react";
import {
  getCookType,
  getDietType,
  getGoogleAnalytics,
  getIngredient,
  getMealMoment,
  getMealType,
  getRating,
  getRecipesFavorite,
  getSeason,
  getUstensils,
} from "../../apis/recipe";
import { RecipeContext } from "../../context/RecipeContext";

export default function RecipeProvider({ children }) {
  const [mealType, setMealType] = useState([]);
  const [season, setSeason] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [dietType, setDietType] = useState([]);
  const [mealMoment, setMealMoment] = useState([]);
  const [ustensils, setUstensils] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [analytics, setAnalytics] = useState([]);
  const [recipeByIdUser, setRecipeByIdUser] = useState([]);

  const [ratings, setRatings] = useState(null);
  const currentUserId = useRef(null);

  useEffect(() => {
    async function fetchMealType() {
      const MealType = await getMealType();
      setMealType(MealType);
    }
    fetchMealType();
  }, []);

  useEffect(() => {
    async function fetchSeason() {
      const season = await getSeason();
      setSeason(season);
    }
    fetchSeason();
  }, []);

  useEffect(() => {
    async function fetchOrigin() {
      const cookType = await getCookType();
      setOrigin(cookType);
    }
    fetchOrigin();
  }, []);

  useEffect(() => {
    async function fetchDietType() {
      const dietType = await getDietType();
      setDietType(dietType);
    }
    fetchDietType();
  }, []);

  useEffect(() => {
    async function fetchMealMoment() {
      const mealMoment = await getMealMoment();
      setMealMoment(mealMoment);
    }
    fetchMealMoment();
  }, []);

  useEffect(() => {
    async function fetchUstensils() {
      const ustensil = await getUstensils();
      setUstensils(ustensil);
    }
    fetchUstensils();
  }, []);

  useEffect(() => {
    async function fetchIngredients() {
      const ingredients = await getIngredient();
      setIngredients(ingredients);
    }
    fetchIngredients();
  }, []);

  useEffect(() => {
    async function fetchGoogleAnalytic() {
      const ga = await getGoogleAnalytics();
      setAnalytics(ga);
    }
    fetchGoogleAnalytic();
  }, []);

  async function recipesFavorite(userId, page) {
    if (userId !== currentUserId.current) {
      currentUserId.current = userId;
      const recipeFavorites = await getRecipesFavorite(userId, page);
      setRecipeByIdUser(recipeFavorites);
    }
  }

  async function recipesRating(idRecipe) {
    const response = await getRating(idRecipe);
    setRatings(response.averageRating);
    return response.averageRating;
  }

  return (
    <RecipeContext.Provider
      value={{
        mealType,
        season,
        origin,
        dietType,
        mealMoment,
        ustensils,
        ingredients,
        analytics,
        recipesFavorite,
        recipeByIdUser,
        recipesRating,
        ratings,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}
