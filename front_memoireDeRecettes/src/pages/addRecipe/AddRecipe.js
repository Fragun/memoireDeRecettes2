import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../addRecipe/AddRecipe.module.scss";
import euro from "../../assets/images/euro.png";
import difficulty from "../../assets/images/gantDifficulte.png";
import FileUpload from "../components/fileUpload/fileUpload";
import timePng from "../../assets/images/icons8-horloge-40.png";
const API_INDEX = "/api/recette";


export default function AddRecipe() {

    const [mealTypeList, setMealTypeList] = useState([]);
    const [seasonList, setSeasonList] = useState([]);
    const [cookingList, setCookingList] = useState([]);
    const [dietList, setDietList] = useState([]);
    const [mealList, setMealList] = useState([]);
    const [ustensilList, setUstensilList] = useState([]);
    const [search, setSearch] = useState("");
    const [search2, setSearch2] = useState("");
    const [search3, setSearch3] = useState("");
    const [ustensilChoose, setUstensilChoose] = useState([]);
    console.log(ustensilChoose);
    //function avec fetch pour passer ustensilChoose dans le back

    const [ustensilAdded, setUstensilAdded] = useState(false);
    const [ustensilAdded2, setUstensilAdded2] = useState(false);
    const [ustensilAdded3, setUstensilAdded3] = useState(false);
    const [inputUstensilAdded, setInputUstensiladded] = useState('dnone');
    const [inputUstensilAdded2, setInputUstensiladded2] = useState('dnone');
    const [count, setCount] = useState(0);
    {/****************************************getMealType**********************************************/ }
    useEffect(() => {
        async function getMealType() {
            try {
                const response = await fetch(`${API_INDEX}/getMealType`);
                if (response.ok) {
                    const mealType = await response.json();
                    setMealTypeList(mealType);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getMealType()
    }, []);

    {/****************************************getSeason**********************************************/ }
    useEffect(() => {
        async function getSeason() {
            try {
                const response = await fetch(`${API_INDEX}/getSeason`);
                if (response.ok) {
                    const season = await response.json();
                    //console.log(season);
                    setSeasonList(season);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getSeason()
    }, []);

    {/****************************************getCookType**********************************************/ }
    useEffect(() => {
        async function getCookType() {
            try {
                const response = await fetch(`${API_INDEX}/getCookType`);
                if (response.ok) {
                    const cookType = await response.json();
                    //console.log(cookType);
                    setCookingList(cookType);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getCookType()
    }, []);

    {/****************************************getDietType**********************************************/ }
    useEffect(() => {
        async function getDietType() {
            try {
                const response = await fetch(`${API_INDEX}/getDietType`);
                if (response.ok) {
                    const dietType = await response.json();
                    //console.log(dietType);
                    setDietList(dietType);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getDietType()
    }, []);

    {/****************************************getUstensils**********************************************/ }
    useEffect(() => {
        async function getMealMoment() {
            try {
                const response = await fetch(`${API_INDEX}/getMealMoment`);
                if (response.ok) {
                    const mealType = await response.json();
                    //console.log(mealType);
                    setMealList(mealType);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getMealMoment()
    }, []);

    useEffect(() => {
        async function getUstensils() {
            try {
                const response = await fetch(`${API_INDEX}/getUstensils`);
                if (response.ok) {
                    const ustensils = await response.json();
                    //console.log(ustensils);
                    setUstensilList(ustensils);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getUstensils()
    }, []);

    {/****************************************yupSchema**********************************************/ }
    const yupSchema = yup.object({
        titleRecipe: yup
            .string()
            .required('Titre de la recette requise'),
        commentRecipe: yup
            .string()
            .max(50, 'Doit contenir au maximum 50 caractères'),
        priceEstimation: yup
            .string()
            .oneOf(['1', '2', '3', '4'], "Estimation de prix requise"),
        difficultyEstimation: yup
            .string()
            .oneOf(['1', '2', '3', '4'], "Estimation de la difficulté requise"),
        recipeCreationDate: yup
            .date()
            .default(() => new Date()),
        coverNumberRecipe: yup
            .string()
            .required('Veuillez saisir un nombre de couvert'),
        origin: yup
            .string()
            .required('Veuillez saisir une origine de plat'),
        prepaTime: yup
            .string()
            .required('Veuillez entrer un nombre d\'heure'),
        prepaTime2: yup
            .string()
            .required('Veuillez entrer un nombre de minute'),
        cookTime: yup
            .string()
            .required('Veuillez entrer un nombre d\'heure'),
        cookTime2: yup
            .string()
            .required('Veuillez entrer un nombre de minute'),
        season: yup
            .string()
            .required('Veuillez entrer la meilleure saison pour votre plat'),
        cookType: yup
            .string()
            .required("Veuillez selectionner un type de cuisson principal"),
        dietType: yup
            .string()
            .required("Veuillez selectionner un type de régime"),
        mealType: yup
            .string()
            .required("Veuillez selectionner un type de repas"),
        ustensil: yup
            .string()
            .required("Veuillez selectionner un ou plusieurs ustensiles"),
        ustensil2: yup
            .string()
            .required("Veuillez selectionner un ou plusieurs ustensiles"),
        ustensil3: yup
             .string()
             .required("Veuillez selectionner un ou plusieurs ustensiles"),
        });



    {/****************************************defaultValues******************************************************/ }
    const defaultValues = {
        titleRecipe: "",
        commentRecipe: "",
        priceEstimation: "",
        difficultyEstimation: "",
        coverNumberRecipe: '2',
        prepaTime: "",
        prepaTime2: "",
        cookTime: "",
        cookTime2: "",
        season: "",
        cookType: "",
        dietType: "",
        mealType: "",


    };

    {/**********************************************useForm************************************************/ }
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues,
        resolver: yupResolver(yupSchema),
    });

    {/****************************************handleClick**********************************************/ }
    async function handleClick(values) {
        //console.log(values);
        try {
            const response = await fetch("http://localhost:8000/addRecipe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
               
            });
            if (response.ok) {
                const recipe = await response.json();
                reset(defaultValues);
                console.log(recipe);
            }
        } catch (error) {
            console.error(error);
        }
    }

    function handleInput(e) {
        console.log(e.target.value);
        const keyBoardInput = e.target.value;
        setSearch(keyBoardInput.trim().toLowerCase());
        
    }

    function handleInput2(e) {
        console.log(e.target.value);
        const keyBoardInput = e.target.value;
        setSearch2(keyBoardInput.trim().toLowerCase());
        
    }

    function handleInput3(e) {
        console.log(e.target.value);
        const keyBoardInput = e.target.value;
        setSearch3(keyBoardInput.trim().toLowerCase());
        
    }

    function handleAddUstensil(event) {
        event.preventDefault();
        const selectedUstensilId = document.getElementById("ustensils").value;
        console.log(selectedUstensilId);
        if (!ustensilChoose.includes(selectedUstensilId)) {
            setUstensilChoose([...ustensilChoose, selectedUstensilId]);
            setUstensilAdded(true); 
        }
    };


    function handleAddUstensil2(event) {
        event.preventDefault();
        const selectedUstensilId = document.getElementById("ustensils2").value;
        console.log(selectedUstensilId);
        if (!ustensilChoose.includes(selectedUstensilId)) {
            setUstensilChoose([...ustensilChoose, selectedUstensilId]);
            setUstensilAdded2(true);  
        }
    };

    function handleAddUstensil3(event) {
        event.preventDefault();
        const selectedUstensilId = document.getElementById("ustensils3").value;
        console.log(selectedUstensilId);
        if (!ustensilChoose.includes(selectedUstensilId)) {
            setUstensilChoose([...ustensilChoose, selectedUstensilId]);
            setUstensilAdded3(true);  
        }
    };

    function addInputUstensil(e) {
        e.preventDefault();
        if (count===0) {
            setInputUstensiladded('dBlock');
        } 
        if(count===1) {
            setInputUstensiladded2('dBlock')
         }
        setCount(count + 1)
    }

    return (
        <div className="d-flex justify-content-center">
            <div className={`${styles.rectangle} m30`}>
                <h1 className="text-align-center">Ajouter une recette</h1>
                <form onSubmit={handleSubmit(handleClick)} className="d-flex flex-column justify-content-center p20">
                    <div className="d-flex flex-column">
                        {/****************************************title**********************************************/}{/****************************************title**********************************************/}
                        <h2>Titre</h2>
                        <div className="d-flex">
                            <div className={`${styles.inputStart}`}></div>
                            <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                <input type="text"
                                    placeholder="Le titre de votre recette..."
                                    className={`${styles.input} `}
                                    {...register("titleRecipe")}
                                />
                                {errors?.titleRecipe && <p>{errors.titleRecipe.message}</p>}
                            </div>
                        </div>
                        {/****************************************comment**********************************************/}{/****************************************comment**********************************************/}
                        <h2 className="mt10">Un petit mot :</h2>
                        <div className="d-flex">
                            <div className={`${styles.inputStart}`}></div>
                            <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                <input type="text"
                                    placeholder="Un petit texte d'introduction..."
                                    className={`${styles.input} `}
                                    {...register("commentRecipe")}
                                />
                                {errors?.commentRecipe && <p>{errors.commentRecipe.message}</p>}
                            </div>
                        </div>
                        {/****************************************file**********************************************/}{/****************************************file**********************************************/}
                        <h2 className="mt10">Ajouter des images pour votre recette :</h2>
                        <FileUpload />
                        {/****************************************price**********************************************/}{/****************************************price**********************************************/}
                        <h2 className="mt10">
                            Quelle est votre estimation du prix de la recette ?
                        </h2>
                        <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <label htmlFor="price1">
                                    <img className={`${styles.size}`} src={euro} alt="symbole euro">
                                    </img>
                                </label>
                                <input
                                    type="radio"
                                    id="price1"
                                    value='1'
                                    {...register("priceEstimation")}
                                />
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <label htmlFor="price2" className={`d-flex justify-content-evenly ml10`}>
                                    <img className={`${styles.size}`} src={euro} alt="symbole euro"></img>
                                    <img className={`${styles.size}`} src={euro} alt="symbole euro"></img>
                                </label>
                                <input
                                    type="radio"
                                    id="price2"
                                    value='2'
                                    {...register("priceEstimation")}
                                />
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <label htmlFor="price3" className={`d-flex justify-content-evenly ml10`}>
                                    <img className={`${styles.size}`} src={euro} alt="symbole euro"></img>
                                    <img className={`${styles.size}`} src={euro} alt="symbole euro"></img>
                                    <img className={`${styles.size}`} src={euro} alt="symbole euro"></img>
                                </label>
                                <input
                                    className=""
                                    type="radio"
                                    id="price3"
                                    value='3'
                                    {...register("priceEstimation")}
                                />
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <label htmlFor="price4" className={`d-flex justify-content-evenly ml10`}>
                                    <img className={`${styles.size}`} src={euro} alt="symbole euro"></img>
                                    <img className={`${styles.size}`} src={euro} alt="symbole euro"></img>
                                    <img className={`${styles.size}`} src={euro} alt="symbole euro"></img>
                                    <img className={`${styles.size}`} src={euro} alt="symbole euro"></img>
                                </label>
                                <input
                                    type="radio"
                                    id="price4"
                                    value='4'
                                    {...register("priceEstimation")}
                                />
                            </div>
                        </div>
                        {errors?.priceEstimation && <p>{errors.priceEstimation.message}</p>}
                        {/****************************************difficulty**********************************************/}{/****************************************difficulty**********************************************/}
                        <h2 className="mt10">
                            Quelle est votre estimation de la difficulté de la recette ?
                        </h2>
                        <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <label htmlFor="difficulty1">
                                    <img className={`${styles.size}`} src={difficulty} alt="symbole euro"></img>
                                </label>
                                <input
                                    id="difficulty1"
                                    type="radio"
                                    value='1'
                                    {...register("difficultyEstimation")}
                                />
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <label htmlFor="difficulty2" className={`d-flex justify-content-evenly ml10`}>
                                    <img className={`${styles.size}`} src={difficulty} alt="symbole euro"></img>
                                    <img className={`${styles.size}`} src={difficulty} alt="symbole euro"></img>
                                </label>
                                <input
                                    id="difficulty2"
                                    type="radio"
                                    value='2'
                                    {...register("difficultyEstimation")}
                                />
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <label htmlFor='difficulty3' className={`d-flex justify-content-evenly ml10`}>
                                    <img className={`${styles.size}`} src={difficulty} alt="symbole euro"></img>
                                    <img className={`${styles.size}`} src={difficulty} alt="symbole euro"></img>
                                    <img className={`${styles.size}`} src={difficulty} alt="symbole euro"></img>
                                </label>
                                <input
                                    id="difficulty3"
                                    type="radio"
                                    value='3'
                                    {...register("difficultyEstimation")}
                                />
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <label htmlFor='difficulty4' className={`d-flex justify-content-evenly ml10`}>
                                    <img className={`${styles.size}`} src={difficulty} alt="symbole euro"></img>
                                    <img className={`${styles.size}`} src={difficulty} alt="symbole euro"></img>
                                    <img className={`${styles.size}`} src={difficulty} alt="symbole euro"></img>
                                    <img className={`${styles.size}`} src={difficulty} alt="symbole euro"></img>
                                </label>
                                <input
                                    id="difficulty4"
                                    type="radio"
                                    value='4'
                                    {...register("difficultyEstimation")}
                                />
                            </div>
                        </div>
                        {errors?.difficultyEstimation && <p>{errors.difficultyEstimation.message}</p>}
                        {/****************************************coverNumber**********************************************/}{/****************************************coverNumber**********************************************/}
                        <h2 className="mt10">Pour combien de personnes ?</h2>
                        <div className="d-flex">
                            <div className={`${styles.inputStart}`}></div>
                            <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                <input
                                    type="number"
                                    min="1"
                                    max="25"
                                    placeholder="Nombre de part"
                                    className={`${styles.input} `}
                                    {...register("coverNumberRecipe")}
                                />
                                {errors?.coverNumberRecipe && <p>{errors.coverNumberRecipe.message}</p>}
                            </div>
                        </div>
                        {/****************************************prepaTime**********************************************/}{/****************************************prepaTime**********************************************/}
                        <h2 className="mt10">Temps de préparation :</h2>
                        <div className="d-flex">
                            <div className={`${styles.inputStart}`}></div>
                            <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                <div className="d-flex justify-content-start">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img className={`mr20`} src={timePng} alt="symbole euro"></img>
                                        <input
                                            type="number"
                                            min="0"
                                            max="5"
                                            placeholder="heure"
                                            className={`${styles.inputLight} `}
                                            {...register("prepaTime")}
                                        />
                                        <p className="ml10">h</p>
                                        <input
                                            type="number"
                                            min="0"
                                            max="59"
                                            placeholder="minute"
                                            className={`${styles.inputLight} ml20`}
                                            {...register("prepaTime2")}
                                        />
                                        {errors?.prepaTime && <p>{errors.prepaTime.message}</p>}
                                        {errors?.prepaTime2 && <p>{errors.prepaTime2.message}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/****************************************cookTime**********************************************/} {/****************************************cookTime**********************************************/}
                        <h2 className="">Temps de cuisson :</h2>
                        <div className="d-flex">
                            <div className={`${styles.inputStart}`}></div>
                            <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                <div className="d-flex justify-content-start">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img className={` mr20`} src={timePng} alt="symbole euro"></img>
                                        <input
                                            type="number"
                                            min="0"
                                            max="72"
                                            placeholder="heure"
                                            className={`${styles.inputLight} `}
                                            {...register("cookTime")}
                                        />
                                        {errors?.cookTime && <p>{errors.cookTime.message}</p>}


                                        <p className="ml10">h</p>

                                        <input
                                            type="number"
                                            min="0"
                                            max="59"
                                            placeholder="minute"
                                            className={`${styles.inputLight} ml20`}
                                            {...register("cookTime2")}
                                        />
                                        {errors?.cookTime2 && <p>{errors.cookTime2.message}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/****************************************origin**********************************************/}{/****************************************origin**********************************************/}
                        <div className="d-flex flex-column mb10">
                            <h2>Quelle est l'origine du plat ?</h2>
                            <div className="d-flex">
                                <div className={`${styles.inputStart}`}></div>
                                <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                    <select {...register("origin")} id="origin">
                                        <option value="" disabled>
                                            Origine du plat
                                        </option>
                                        {mealTypeList.map((mealType) => (
                                            <option key={mealType.MEAL_TYPE_ID} value={mealType.MEAL_TYPE_ID}>
                                                {mealType.MEAL_TYPE_NAME}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {errors?.origin && <p>{errors.origin.message}</p>}
                        </div>
                        {/****************************************season**********************************************/}{/****************************************season**********************************************/}
                        <div className="d-flex flex-column mb10">
                            <h2>Plat de saison :</h2>
                            <div className="d-flex">
                                <div className={`${styles.inputStart}`}></div>
                                <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                    <select {...register("season")} id="season">
                                        <option value="" disabled>
                                            Saison
                                        </option>
                                        {seasonList.map((season) => (
                                            <option key={season.SEASON_ID} value={season.SEASON_ID}>
                                                {season.SEASON_NAME}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {errors?.season && <p>{errors.season.message}</p>}
                        </div>
                        {/****************************************cooking type**********************************************/}{/****************************************cooking type**********************************************/}
                        <div className="d-flex flex-column mb10">
                            <h2>Quelle est la cuissson principale ?</h2>
                            <div className="d-flex">
                                <div className={`${styles.inputStart}`}></div>
                                <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                    <select {...register("cookType")} id="cookType">
                                        <option value="" disabled>
                                            Cuisson :
                                        </option>
                                        {cookingList.map((cooking) => (
                                            <option key={cooking.COOKING_TYPE_ID} value={cooking.COOKING_TYPE_ID}>
                                                {cooking.COOKING_TYPE_NAME}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {errors?.cookType && <p>{errors.cookType.message}</p>}
                        </div>
                        {/****************************************diet type**********************************************/}{/****************************************diet type**********************************************/}
                        <div className="d-flex flex-column mb20">
                            <h2>Peux convenir pour quel type de régime ?</h2>
                            <div className="d-flex">
                                <div className={`${styles.inputStart}`}></div>
                                <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                    <select {...register("dietType")} id="dietType">
                                        <option value="" disabled>
                                            Type de régime
                                        </option>
                                        {dietList.map((diet) => (
                                            <option key={diet.DIET_TYPE_ID} value={diet.DIET_TYPE_ID}>
                                                {diet.DIET_TYPE_NAME}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {errors?.dietType && <p>{errors.dietType.message}</p>}
                        </div>
                        {/****************************************meal type moment**********************************************/}{/****************************************meal type moment**********************************************/}
                        <div className="d-flex flex-column mb20">
                            <h2>Peux convenir pour quel repas ?</h2>
                            <div className="d-flex">
                                <div className={`${styles.inputStart}`}></div>
                                <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                    <select {...register("mealType")} id="mealType">
                                        <option value="" disabled>
                                            Pour quel repas ?
                                        </option>
                                        {mealList.map((meal) => (
                                            <option key={meal.ID_TYPE_DE_REPAS} value={meal.ID_TYPE_DE_REPAS}>
                                                {meal.NOM_TYPE_DE_REPAS}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {errors?.mealType && <p>{errors.mealType.message}</p>}
                        </div>
                        {/****************************************ustensiles**********************************************/}{/****************************************ustensiles**********************************************/}
                        <div className="d-flex flex-column mb20">
                            <h2>De quels ustensiles de cuisine a t-on besoin ?</h2>
                            <div className="d-flex">
                                <div className={`${styles.inputStart}`}></div>
                                <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                    <input
                                        
                                        type="text"
                                        onInput={handleInput}
                                        className="flex-fill"
                                        placeholder="Search ..."
                                        disabled={ustensilAdded}>
                                        
                                    </input>
                                    <select {...register(`ustensil`)} id="ustensils" disabled={ustensilAdded}>
                                        <option value="" disabled>
                                            Quel ustensile ?
                                        </option>
                                        {ustensilList
                                            .filter(u => u.USTENSIL_NAME.toLowerCase().startsWith(search))
                                            .map((ustensil) => (
                                                <option key={ustensil.USTENSIL_ID} value={ustensil.USTENSIL_ICON}>
                                                    {ustensil.USTENSIL_NAME}
                                                    {/*<img src={`../../../public/assets/images/LOGO_Ustensiles_png/${ustensil.USTENSIL_ICON}`}></img>  */}
                                                </option>
                                            ))}
                                    </select>
                                    <button
                                        onClick={handleAddUstensil}
                                    >
                                        +
                                    </button>
                                </div>
                                {errors?.ustensil && <p>{errors.ustensil.message}</p>}
                            </div>
                            <div className={`${inputUstensilAdded}`}>
                                <div className={`${styles.inputStart}`}></div>
                                <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                    <input
                                        type="text"
                                        onInput={handleInput2}
                                        className="flex-fill"
                                        placeholder="Search ..."
                                        disabled={ustensilAdded2}>
                                    </input>
                                    <select {...register(`ustensil2`)} id="ustensils2" disabled={ustensilAdded2}>
                                        <option value="" disabled>
                                            Quel ustensile ?
                                        </option>
                                        {ustensilList
                                            .filter(u => u.USTENSIL_NAME.toLowerCase().startsWith(search2))
                                            .map((ustensil) => (
                                                <option key={ustensil.USTENSIL_ID} value={ustensil.USTENSIL_ICON}>
                                                    {ustensil.USTENSIL_NAME}
                                                    {/*<img src={`../../../public/assets/images/LOGO_Ustensiles_png/${ustensil.USTENSIL_ICON}`}></img>  */}
                                                </option>
                                            ))}
                                    </select>
                                    <button
                                        onClick={handleAddUstensil2}
                                    >
                                        +
                                    </button>
                                </div>
                                {errors?.ustensil2 && <p>{errors.ustensil2.message}</p>}
                            </div>

                            <div className={`${inputUstensilAdded2}`}>
                                <div className={`${styles.inputStart}`}></div>
                                <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
                                    <input
                                        type="text"
                                        onInput={handleInput3}
                                        className="flex-fill"
                                        placeholder="Search ..."
                                        disabled={ustensilAdded3}>
                                    </input>
                                    <select {...register(`ustensil3`)} id="ustensils3" disabled={ustensilAdded3}>
                                        <option value="" disabled>
                                            Quel ustensile ?
                                        </option>
                                        {ustensilList
                                            .filter(u => u.USTENSIL_NAME.toLowerCase().startsWith(search3))
                                            .map((ustensil) => (
                                                <option key={ustensil.USTENSIL_ID} value={ustensil.USTENSIL_ICON}>
                                                    {ustensil.USTENSIL_NAME}
                                                </option>
                                            ))}
                                    </select>
                                    <button
                                        onClick={handleAddUstensil3}
                                    >
                                        +
                                    </button>
                                </div>
                                {errors?.ustensil3 && <p>{errors.ustensil3.message}</p>}
                            </div>
{/*PROBLEME SELECT VALIDE QUE QUAND ON APPUIE DESSUS*/}
                            <button className="btn btn-primary" onClick={addInputUstensil}>Ajouter un autre ustensile ?</button>
                            <div>Listes des ustensiles :
                                <br />
                                <span>
                                    {ustensilChoose
                                        .map((u) => 
                                        (<img className={`${styles.iconUstensil}`} key={u} src={`../../assets/images/LogoUstensiles/${u}`} alt="ustensile"></img>))}
                                </span>
                            </div>
                            <button disabled={isSubmitting} className="btn btn-primary">
                                Ajouter à vos recettes
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}











// import { useEffect, useState } from "react";
// export default function AddRecipe() {


// const [ustensilList, setUstensilList] = useState([]);
// const [search, setSearch] = useState("");
// const [ustensilChoose, setUstensilChoose] = useState([]);
// console.log(ustensilChoose);
// useEffect(() => {
//     async function getUstensils() {
//         try {
//             const response = await fetch('http://localhost:8000/getUstensils');
//             if (response.ok) {
//                 const ustensils = await response.json();
//                 //console.log(ustensils);
//                 setUstensilList(ustensils);
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     getUstensils()
// }, []);


// function handleInput(e) {
//     console.log(e.target.value);
//     const keyBoardInput = e.target.value;
//     setSearch(keyBoardInput.trim().toLowerCase());
// }

// function handleAddUstensil(event) {
//     event.preventDefault();
//     const selectedUstensilId = document.getElementById("ustensils").value;
//     console.log(selectedUstensilId);
//     if (!ustensilChoose.includes(selectedUstensilId)) {
//       setUstensilChoose([...ustensilChoose, selectedUstensilId]);
//     }
//   };



// return (

// <div className="d-flex flex-column mb20">
// <h2>De quels ustensiles de cuisine a t-on besoin ?</h2>
// <div className="d-flex">
//     <div className={`${styles.inputStart}`}></div>
//                 <div className={`${styles.inputDeco} p10 d-flex justify-content-center`}>
//                     <input
//                         type="text"
//                         onInput={handleInput}
//                         className="flex-fill"
//                         placeholder="Search ...">
//                     </input>
//                     <select {...register(`ustensil`)} id="ustensils">
//                         <option value="" disabled>
//                             Quel ustensile ?
//                         </option>
//                         {ustensilList
//                             .filter(u => u.USTENSIL_NAME.toLowerCase().startsWith(search))
//                             .map((ustensil) => (
//                                 <option key={ustensil.USTENSIL_ID} value={ustensil.USTENSIL_ICON}>
//                                     {ustensil.USTENSIL_NAME}
//                                     {/*<img src={`../../../public/assets/images/LOGO_Ustensiles_png/${ustensil.USTENSIL_ICON}`}></img>  */}
//                                 </option>
//                             ))}
//                     </select>
//                     <button
//                     onClick={handleAddUstensil}
//                     >
//                         +
//                     </button>
//                 </div>
//                 {errors?.mealType && <p>{errors.mealType.message}</p>}
// </div>
// <span>Listes des ustensiles : 
//     <br/>{ustensilChoose 
//      .map((u) => (<img className={`${styles.iconUstensil}`} key={u} src={`../../assets/images/LogoUstensiles/${u}`} alt="ustensile"></img>))}</span>
//<button disabled={isSubmitting} className="btn btn-primary">
//Ajouter à vos recettes
//</button>
//
// </div>
//     );
// }