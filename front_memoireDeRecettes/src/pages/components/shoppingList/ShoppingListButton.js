import { useContext } from "react";
import styles from "./ShoppingListButton.module.scss";
import { AuthContext } from "../../../context";
import { createShopping } from "../../../apis/shopping";

import AlertInput from "../alert/AlertInput";
import AlertSweet from "../alert/AlertSweet";

export default function ShoppingListButton(newIngredientsRecipe) {
  const { user } = useContext(AuthContext);

  const handleClick = async () => {
    try {
      const inputValue = await AlertInput();
      if (inputValue) {
        const listIngredients = newIngredientsRecipe.newIngredientsRecipe;
        const userId = user[0].USER_ID;
        const value = {
          userId: userId,
          listIngredients: listIngredients,
          title: inputValue,
        };

        const response = await createShopping(value);
        if (response) {
          AlertSweet("Bravo", "Votre liste est créée");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <i
        title="Ajouter à la liste de course"
        onClick={handleClick}
        className={` ${styles.iconlist} 
           lar la-calendar-plus la-3x 
         `}
      ></i>
    </>
  );
}
