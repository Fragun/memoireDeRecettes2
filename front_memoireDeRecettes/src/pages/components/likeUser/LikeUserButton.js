import { useState } from "react";
import styles from "../../recipePage/RecipePage.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../../context";
import { deleteLikedUser, likedUser } from "../../../apis/userLiked";

export default function LikeUserButton({ idUserLiked }) {
  const [isLikedUser, setIsLikedUser] = useState(false);
  const { user } = useContext(AuthContext);

  const handleClick = async () => {
    setIsLikedUser(!isLikedUser);
    let idUser = user[0].USER_ID;
    if (isLikedUser) {
      await deleteLikedUser(idUser, idUserLiked);
    } else {
      await likedUser(idUser, idUserLiked);
    }
  };

  return (
    <i
      title={
        !isLikedUser
          ? "Mettre le chef en favoris"
          : "Retirer le chef des favoris"
      }
      onClick={handleClick}
      className={`la-3x ${
        isLikedUser ? "la la-user-minus" : "la la-user-plus"
      } ${styles.likeUser}`}
    ></i>
  );
}
