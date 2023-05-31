import { useEffect, useState } from "react";
import { getCookType, getDietType, getIngredient, getMealMoment, getMealType, getSeason, getUstensils } from "../../apis/recipe";
import { RecipeContext } from "../../context/RecipeContext";

export default function RecipeProvider({ children }) {

  const [mealType, setMealType] = useState([]);
  const [season, setSeason] = useState([]);
  const [origin, setOrigin] = useState([]);
  const[dietType, setDietType] = useState([]);
  const[mealMoment, setMealMoment] = useState([]);
  const[ustensils, setUstensils] = useState([]);
  const[ingredients, setIngredients] =useState([]);

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
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}
