import styles from "./SimpleCard.module.scss";
import { useState } from "react";
import articles from '../../../data/articles';

export default function SimpleCard({title, image, description, imageAvatar, publicationDate, couvert, difficulty, price, prepTime, timeCooking}) {
    const [liked , setLiked] = useState(false);
    
    const handleClick = () => {
        setLiked(!liked);
    };
    return (
        <div onClick={handleClick} className={`${styles.article}`}>
            <div className={`${styles.imgContainer}`}>
                <img className={` ${styles.image}`} src={`../../assets/images/${image}`} alt="recette" />
                <img className={` ${styles.avatar}`}src={imageAvatar} alt="recette" />
            </div>
            <div className={`d-flex flex-column justify-content-center align-items-center ${styles.title}`}>
                <h3 className="mb10"> {title}  </h3>
                <p>{description}</p>
                <i className={`fas fa-heart ${liked ? "text-primary" : ""}`}> </i>
            </div>
        </div>
    );
}