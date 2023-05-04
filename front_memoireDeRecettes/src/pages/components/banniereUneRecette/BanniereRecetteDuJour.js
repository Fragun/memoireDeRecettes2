import { useState, useEffect } from "react";
import logoPreparation from "../../../assets/images/logoPreparation.png";
import logoCuisson from "../../../assets/images/logoCuisson.png";
import styles from "./BanniereRecetteDuJour.module.scss";
import { Link } from "react-router-dom";

const URL_API = "/api/recette";

export default function BanniereRecetteDuJour() {
    
    const [recipeOfDay, setRecipeOfDay] = useState([]);
    const [recipe, setRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const seasons = [
        { name: "printemps", startMonth: 2, startDay: 20 },
        { name: "été", startMonth: 5, startDay: 21 },
        { name: "automne", startMonth: 8, startDay: 22 },
        { name: "hiver", startMonth: 11, startDay: 21 },
    ];

    function getCurrentSeason(today) {
        const month = today.getMonth();
        const day = today.getDate();

        for (let i = 0; i < seasons.length; i++) {
            const { name, startMonth, startDay } = seasons[i];
            const start = new Date(today.getFullYear(), startMonth, startDay);

            if (
                (i === 0 && today >= start) ||
                (i > 0 &&
                    today >= start &&
                    today <
                    new Date(
                        today.getFullYear(),
                        seasons[i].startMonth,
                        seasons[i].startDay
                    ))
            ) {
                console.log(name);
                return i + 1;
            }
        }
    }

    useEffect(() => {
        const today = new Date();
        const season = getCurrentSeason(today);
        console.log("season", season);
        setRecipeOfDay([]);

        async function getDaysRecipe() {
            try {
                setIsLoading(true);
                const response = await fetch(`${URL_API}/getDaysRecipe/${season}`);
                if (response.ok) {
                    const recipe = await response.json();
                    setRecipeOfDay(recipe);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getDaysRecipe();
    }, []);

    useEffect(() => {
        if (recipeOfDay.length > 0) {
            const randomIndex = Math.floor(Math.random() * recipeOfDay.length);
            const randomRecipe = recipeOfDay[randomIndex];
            setRecipe(randomRecipe);
        }
    }, [recipeOfDay]);

    function difficultyRecipe() {
        switch (recipe.RECIPE_DIFFICULTY) {
            case 1:
                return (
                    <div className="d-flex justify-content-center align-items-center">
                        <h4>Facile</h4>
                        <i class="las la-mitten la-2x"></i>
                    </div>
                );
            case 2:
                return (
                    <div className="d-flex justify-content-center align-items-center">
                        <h4> Moyenne</h4>
                        <div>
                            <i class="las la-mitten la-2x"></i>
                            <i class="las la-mitten la-2x"></i>{" "}
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="d-flex justify-content-center align-items-center">
                        <h4>Difficile</h4>
                        <div>
                            <i class="las la-mitten la-2x"></i>
                            <i class="las la-mitten la-2x"></i>
                            <i class="las la-mitten la-2x"></i>{" "}
                        </div>
                    </div>
                );

            default:
                break;
        }
    }
    function priceRecipe() {
        switch (recipe.RECIPE_PRICE) {
            case 1:
                return (
                    <div
                        className={` ${styles.price} d-flex justify-content-center align-items-center`}
                    >
                        <i class="las la-euro-sign"></i>
                    </div>
                );
            case 2:
                return (
                    <div
                        className={` ${styles.price} d-flex justify-content-center align-items-center`}
                    >
                        <i class="las la-euro-sign"></i>
                        <i class="las la-euro-sign"></i>
                    </div>
                );

            case 3:
                return (
                    <div
                        className={` ${styles.price} d-flex justify-content-center align-items-center`}
                    >
                        <i class="las la-euro-sign"></i>
                        <i class="las la-euro-sign"></i>
                        <i class="las la-euro-sign"></i>
                    </div>
                );

            default:
                return <></>;
                break;
        }
    }

    return (
        
        <div className={`${styles.containerBanniere}`}>
            {isLoading ? (
                <p>Loading...</p>
            ) : recipe ? (
                <Link to={`/recipePage/${recipe.RECIPE_ID}`} className="decoNone d-flex justify-content-center align-items-center">
                    
                    <img
                        src={`./assets/images/${recipe.PHOTO_NAME}`}
                        alt="recette de saison"
                    />
                    <div className="d-flex justify-content-evenly align-items-center">
                    
                        <div className="flex-column">
                            <h3> Recette de saison</h3>
                            <img
                                src="../../../assets/images/logo120px.png"
                                alt="logoo1"
                                className={`${styles.logoTime}`}
                            ></img>
                            <img
                                src="../../../assets/images/logo120px.png"
                                alt="logoo2"
                                className={`${styles.logoTime}`}
                            ></img>
                        </div>
                        <div className="flex-column flex-fill">
                            <div className="d-flex justify-content-between">
                                <img
                                    className={`${styles.imageAvatar} d-flex flex-row`}
                                    src={`./assets/images/${recipe.USER_PHOTO}`}
                                    alt="avatar"
                                ></img>
                            </div>
                            <h2 className="text-align-center"> {recipe.RECIPE_TITLE}</h2>
                            <p>{recipe.RECIPE_DESCRIPTION}</p>
                            <div className="d-flex justify-content-center">
                                <img
                                    src={logoPreparation}
                                    alt="image logo préparation"
                                    className={`${styles.logoTime}`}
                                ></img>
                                <p>{recipe.PREP_TIME}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <img
                                    src={logoCuisson}
                                    alt="image logo cuisson"
                                    className={`${styles.logoTime}`}
                                ></img>
                                <p>{recipe.COOKING_TIME}</p>
                            </div>
                            {difficultyRecipe()}
                        </div>
                    </div>
                    </Link>
            ) : null}
        </div>
        
    );
}
