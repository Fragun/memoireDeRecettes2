import styles from "./Recipes.module.scss";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";

export default function Recipes({
    recipe: { id, title, image/*, liked*/ },
    toggleLikedMovies,
}) {
    const BASE_URL = useContext(ApiContext);
    // async function handleClick() {
    //     try {
    //         const response = await fetch(`${BASE_URL}/toggleLiked`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 id: id,
    //                 liked: !liked,
    //             }),
    //         });
    //         if (response.ok) {
    //             const updateMovie = await response.json();
    //             console.log(updateMovie);
    //             //toggleLikedMovies(updateMovie);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    return (
         <div /*onClick={handleClick}*/ className={`${styles.article}`}>
            <div className={`${styles.imgContainer}`}>
                <img src={image} alt="image recette" />
            </div>
            <div
                className={`d-flex flex-column justify-content-center align-items-center ${styles.title}`}
            >
                <h3 className="mb10">{title}</h3>
                {/*<i className={`fas fa-heart ${liked ? "text-primary" : ""}`}></i>
   */}   </div>
        </div>
    );
}
