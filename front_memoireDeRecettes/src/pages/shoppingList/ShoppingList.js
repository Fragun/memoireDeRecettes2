import React, { useContext, useEffect, useState } from "react";
import { useRecipeContext } from "../../components/Provider/ShoppingProvider";
import styles from "./ShoppingList.module.scss";
import AlertYorN from "../components/alert/AlertYorN";
import AlertSweet from "../components/alert/AlertSweet";
import { AuthContext } from "../../context";

export default function ShoppingList() {
  const { fetchShopping, deletedShopping } = useRecipeContext();
  const [shoppingDatas, setShoppingDatas] = useState([]);
  const [principaleList, setPrincipaleList] = useState([]);
  const [principaleListGrouped, setPrincipaleListGrouped] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    function groupedIngredientsList() {
      const allIngredients = principaleList.reduce((accumulator, list) => {
        return [...accumulator, ...list.ingredients];
      }, []);

      const groupedIngredients = allIngredients.reduce((acc, ingredient) => {
        const key = `${ingredient.INGREDIENT_LIST_NAME}-${ingredient.MEASURE_LIST_NAME}`;
        if (!acc[key]) {
          acc[key] = { ...ingredient };
        } else {
          acc[key].INGREDIENT_QUANTITY += ingredient.INGREDIENT_QUANTITY;
        }
        return acc;
      }, {});

      const groupedIngredientsArray = Object.values(groupedIngredients);
      groupedIngredientsArray.sort((a, b) =>
        a.INGREDIENT_LIST_NAME.localeCompare(b.INGREDIENT_LIST_NAME)
      );

      setPrincipaleListGrouped(groupedIngredientsArray);
    }
    groupedIngredientsList();
  }, [principaleList]);

  useEffect(() => {
    async function fetchData() {
      try {
        let userId = user[0].USER_ID;
        const result = await fetchShopping(userId);
        setShoppingDatas(result);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de shopping",
          error
        );
      }
    }
    fetchData();
  }, [user, fetchShopping]);

  // Regroupement des ingrédients par SHOPPING_ID
  const groupedIngredients = shoppingDatas.reduce((acc, item) => {
    const {
      SHOPPING_ID,
      INGREDIENT_QUANTITY,
      MEASURE_LIST_NAME,
      INGREDIENT_LIST_NAME,
      SHOPPING_NAME,
    } = item;
    if (!acc[SHOPPING_ID]) {
      acc[SHOPPING_ID] = {
        SHOPPING_ID,
        ingredients: [],
        SHOPPING_NAME,
      };
    }
    acc[SHOPPING_ID].ingredients.push({
      INGREDIENT_QUANTITY,
      MEASURE_LIST_NAME,
      INGREDIENT_LIST_NAME,
    });
    return acc;
  }, {});

  const handleDeletedShopping = async (shoppingId) => {
    AlertYorN("Attention", "Voulez-vous supprimer cette liste ?")
      .then((result) => {
        if (result.isConfirmed) {
          return deletedShopping(shoppingId);
        }
      })
      .then(() => {
        AlertSweet("Bravo", "Liste de course supprimée");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClickGroup = (group) => {
    setPrincipaleList((prevList) => [...prevList, group]);
  };

  const handleSaveList = () => {
    const listText = principaleListGrouped
      ? principaleListGrouped
          .map(
            (item, key) =>
              `${item.INGREDIENT_LIST_NAME} : ${item.INGREDIENT_QUANTITY} ${item.MEASURE_LIST_NAME}\n`
          )
          .join("")
      : "";
    const blob = new Blob([listText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "liste_de_courses.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <h2> Vos Listes de courses </h2>
      <div className={` ${styles.shoppingListContainer} `}>
        {Object.values(groupedIngredients).map((group, index) => (
          <>
            <div key={index} className={`${styles.shoppingGroup}`}>
              <h3 className={`${styles.shoppingGroupTitle}`}>
                {group.SHOPPING_NAME}
              </h3>
              <ul className={`${styles.ingredientList}`}>
                {group.ingredients.map((ingredient, ingredientIndex) => (
                  <li
                    key={ingredientIndex}
                    className={`${styles.ingredientItem}`}
                  >
                    {ingredient.INGREDIENT_QUANTITY}{" "}
                    {ingredient.MEASURE_LIST_NAME} de{" "}
                    {ingredient.INGREDIENT_LIST_NAME}
                  </li>
                ))}
              </ul>
              <button
                className="btn btn-primary"
                onClick={() => handleDeletedShopping(group.SHOPPING_ID)}
              >
                Supprimer la liste
              </button>
              <button
                className={`btn btn-primary ${styles.activeButton}`}
                onClick={() => handleClickGroup(group)}
              >
                Ajouter à la liste principale
              </button>
            </div>
          </>
        ))}
      </div>
      <h3 className={`${styles.shoppingGroupTitle}`}>
        Votre liste de course principale
      </h3>
      <div className={`${styles.shoppingGroup}`}>
        {principaleListGrouped
          ? principaleListGrouped.map((item, key) => (
              <ul key={key} className={`${styles.ingredientList}`}>
                <li className={`${styles.ingredientItem}`}>
                  {item.INGREDIENT_LIST_NAME} : {item.INGREDIENT_QUANTITY}{" "}
                  {item.MEASURE_LIST_NAME}
                </li>
              </ul>
            ))
          : ""}
        <button className="btn btn-primary" onClick={handleSaveList}>
          Enregistrer la liste de courses principale
        </button>
      </div>
    </div>
  );
}
