import React, { useContext, useState, useEffect } from "react";
import { RecipeContext } from "../../../context/RecipeContext";
import styles from "./Filters.module.scss";

export default function Filters({ filterRecipes }) {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedDietType, setSelectedDietType] = useState("");
  const [selectedCookingType, setSelectedCookingType] = useState("");
  const [selectedMealType, setSelectedMealType] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedMealMoment, setSelectedMealMoment] = useState("");
  const [visibleFilters, setVisibleFilters] = useState(false);
  const { dietType, mealType, season, origin, mealMoment } =
    useContext(RecipeContext);

  useEffect(() => {
    // Appeler la fonction de filtrage lorsque l'utilisateur clique sur le bouton de filtre
    filterRecipes(
      selectedPrice,
      selectedDifficulty,
      selectedDietType,
      selectedCookingType,
      selectedMealType,
      selectedSeason,
      selectedMealMoment
    );
  }, [
    selectedCookingType,
    selectedPrice,
    selectedDifficulty,
    selectedDietType,
    selectedMealType,
    selectedSeason,
    selectedMealMoment,
    filterRecipes,
  ]);

  return (
    <>
      <div className={`d-flex justify-content-center mb20`}>
        <button
          onClick={() => setVisibleFilters(!visibleFilters)}
          className={`${styles.buttonFilter}`}
        >
          Trier...
        </button>
      </div>
      <div className={`${styles.filterContainer}`}>
        <div
          className={`${styles.filter} ${visibleFilters ? "" : styles.dnone}`}
        >
          <select
            id="priceDropdown"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            <option value="">Prix</option>
            <option value="1">Bon marché</option>
            <option value="2">Moyen</option>
            <option value="3">Cher</option>
            <option value="4">Très cher</option>
          </select>
        </div>
        <div
          className={`${styles.filter} ${visibleFilters ? "" : styles.dnone}`}
        >
          <select
            id="difficultyDropdown"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="">Difficulté</option>
            <option value="1">Facile</option>
            <option value="2">Moyenne</option>
            <option value="3">Difficile</option>
            <option value="4">Très difficile</option>
          </select>
        </div>

        <div
          className={`${styles.filter} ${visibleFilters ? "" : styles.dnone}`}
        >
          <select
            id="dietTypeDropdown"
            value={selectedDietType}
            onChange={(e) => setSelectedDietType(e.target.value)}
          >
            <option value="">Régime</option>
            {dietType
              ? dietType.map((item) => (
                  <option key={item.DIET_TYPE_ID} value={item.DIET_TYPE_ID}>
                    {item.DIET_TYPE_NAME}
                  </option>
                ))
              : ""}
          </select>
        </div>

        <div
          className={`${styles.filter} ${visibleFilters ? "" : styles.dnone}`}
        >
          <select
            id="originDropdown"
            value={selectedCookingType}
            onChange={(e) => setSelectedCookingType(e.target.value)}
          >
            <option value="">Cuisson</option>
            {origin
              ? origin.map((item) => (
                  <option
                    key={item.COOKING_TYPE_ID}
                    value={item.COOKING_TYPE_ID}
                  >
                    {item.COOKING_TYPE_NAME}
                  </option>
                ))
              : ""}
          </select>
        </div>

        <div
          className={`${styles.filter} ${visibleFilters ? "" : styles.dnone}`}
        >
          <select
            id="mealTypeDropdown"
            value={selectedMealType}
            onChange={(e) => setSelectedMealType(e.target.value)}
          >
            <option value="">Origine</option>
            {mealType
              ? mealType.map((item) => (
                  <option key={item.MEAL_TYPE_ID} value={item.MEAL_TYPE_ID}>
                    {item.MEAL_TYPE_NAME}
                  </option>
                ))
              : ""}
          </select>
        </div>

        <div
          className={`${styles.filter} ${visibleFilters ? "" : styles.dnone}`}
        >
          <select
            id="seasonDropdown"
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
          >
            <option value="">Saison</option>
            {season
              ? season.map((item) => (
                  <option key={item.SEASON_ID} value={item.SEASON_ID}>
                    {item.SEASON_NAME}
                  </option>
                ))
              : ""}
          </select>
        </div>
        <div
          className={`${styles.filter} ${visibleFilters ? "" : styles.dnone}`}
        >
          <select
            id="mealMomentDropdown"
            value={selectedMealMoment}
            onChange={(e) => setSelectedMealMoment(e.target.value)}
          >
            <option value="">Type</option>
            {mealMoment
              ? mealMoment.map((item) => (
                  <option
                    key={item.ID_TYPE_DE_REPAS}
                    value={item.ID_TYPE_DE_REPAS}
                  >
                    {item.NOM_TYPE_DE_REPAS}
                  </option>
                ))
              : ""}
          </select>
        </div>
      </div>
    </>
  );
}
