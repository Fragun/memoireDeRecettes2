import React, { useEffect, useState } from "react";
import { useLikedRecipes } from "../../../components/Provider/LikedRecipesProvider";
import styles from "./LikeRecipes.module.scss";

export default function LikeRecipes({ idRecipe }) {
  const { isRecipeLiked, addLikedRecipe, removeLikedRecipe } =
    useLikedRecipes();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const checkIsLiked = async () => {
      const liked = await isRecipeLiked(idRecipe);
      setIsLiked(liked);
    };
    checkIsLiked();
  }, [idRecipe, isRecipeLiked]);

  const handleClick = async (e) => {
    e.preventDefault();
    if (isLiked) {
      await removeLikedRecipe(idRecipe);
    } else {
      await addLikedRecipe(idRecipe);
    }
    setIsLiked(!isLiked);
  };

  return (
    <i
      title={!isLiked ? "Mettre en favoris" : "Retirer des favoris"}
      onClick={handleClick}
      className={`la-3x ${isLiked ? "las la-heart" : "lar la-heart"} ${
        styles.heart
      }`}
    ></i>
  );
}
