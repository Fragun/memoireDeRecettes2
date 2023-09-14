import { useState } from "react";
import { fetchUserLiked } from "../../apis/userLiked";
import { UserLikeContext } from "../../context/UserLikeContext";

export default function LikedUsersProvider({ children }) {
  const [usersLike, setUsersLike] = useState([]);

  const usersFavorite = async (userId) => {
    try {
      const response = await fetchUserLiked(userId);
      setUsersLike(response);
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return (
    <UserLikeContext.Provider
      value={{
        usersFavorite,
        usersLike,
      }}
    >
      {children}
    </UserLikeContext.Provider>
  );
}
