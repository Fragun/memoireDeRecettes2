import { useEffect, useState } from "react";
import styles from "../../addRecipe/AddRecipe.module.scss";
import { getIngredient } from "../../../apis/recipe";

export default function IngredientRecipe({ onIngredientChooseUpdate }) {
  const [ingredientList, setIngredientList] = useState([]);
  const [count2, setCount2] = useState(0);

  let arrayMeasure = [
    "Millilitres",
    "Centilitres",
    "Litres",
    "Grammes",
    "Kilogrammes",
    "Cuillères à soupe",
    "Cuillères à café",
    "Verre",
    "Tasse",
    "Pincée",
    "Unité",
    "Yaourt",
  ];

  const [searchIngredient1, setSearchIngredient1] = useState([]);
  const [searchIngredient2, setSearchIngredient2] = useState([]);
  const [searchIngredient3, setSearchIngredient3] = useState([]);
  const [searchIngredient4, setSearchIngredient4] = useState([]);
  const [searchIngredient5, setSearchIngredient5] = useState([]);
  const [searchIngredient6, setSearchIngredient6] = useState([]);
  const [searchIngredient7, setSearchIngredient7] = useState([]);
  const [searchIngredient8, setSearchIngredient8] = useState([]);
  const [searchIngredient9, setSearchIngredient9] = useState([]);
  const [searchIngredient10, setSearchIngredient10] = useState([]);
  const [searchIngredient11, setSearchIngredient11] = useState([]);
  const [searchIngredient12, setSearchIngredient12] = useState([]);
  const [searchIngredient13, setSearchIngredient13] = useState([]);
  const [searchIngredient14, setSearchIngredient14] = useState([]);
  const [searchIngredient15, setSearchIngredient15] = useState([]);
  const [searchIngredient16, setSearchIngredient16] = useState([]);
  const [searchIngredient17, setSearchIngredient17] = useState([]);
  const [searchIngredient18, setSearchIngredient18] = useState([]);
  const [searchIngredient19, setSearchIngredient19] = useState([]);
  const [searchIngredient20, setSearchIngredient20] = useState([]);
  const [searchIngredient21, setSearchIngredient21] = useState([]);
  const [searchIngredient22, setSearchIngredient22] = useState([]);
  const [searchIngredient23, setSearchIngredient23] = useState([]);
  const [searchIngredient24, setSearchIngredient24] = useState([]);
  const [ingredientChoose, setIngredientChoose] = useState([]);
  const [ingredientAdded, setIngredientAdded] = useState(false);
  const [ingredientAdded2, setIngredientAdded2] = useState(false);
  const [ingredientAdded3, setIngredientAdded3] = useState(false);
  const [ingredientAdded4, setIngredientAdded4] = useState(false);
  const [ingredientAdded5, setIngredientAdded5] = useState(false);
  const [ingredientAdded6, setIngredientAdded6] = useState(false);
  const [ingredientAdded7, setIngredientAdded7] = useState(false);
  const [ingredientAdded8, setIngredientAdded8] = useState(false);
  const [ingredientAdded9, setIngredientAdded9] = useState(false);
  const [ingredientAdded10, setIngredientAdded10] = useState(false);
  const [ingredientAdded11, setIngredientAdded11] = useState(false);
  const [ingredientAdded12, setIngredientAdded12] = useState(false);
  const [ingredientAdded13, setIngredientAdded13] = useState(false);
  const [ingredientAdded14, setIngredientAdded14] = useState(false);
  const [ingredientAdded15, setIngredientAdded15] = useState(false);
  const [ingredientAdded16, setIngredientAdded16] = useState(false);
  const [ingredientAdded17, setIngredientAdded17] = useState(false);
  const [ingredientAdded18, setIngredientAdded18] = useState(false);
  const [ingredientAdded19, setIngredientAdded19] = useState(false);
  const [ingredientAdded20, setIngredientAdded20] = useState(false);
  const [ingredientAdded21, setIngredientAdded21] = useState(false);
  const [ingredientAdded22, setIngredientAdded22] = useState(false);
  const [ingredientAdded23, setIngredientAdded23] = useState(false);
  const [ingredientAdded24, setIngredientAdded24] = useState(false);

  const [inputIngredientAdded2, setInputIngredientadded2] = useState("dnone");
  const [inputIngredientAdded3, setInputIngredientadded3] = useState("dnone");
  const [inputIngredientAdded4, setInputIngredientadded4] = useState("dnone");
  const [inputIngredientAdded5, setInputIngredientadded5] = useState("dnone");
  const [inputIngredientAdded6, setInputIngredientadded6] = useState("dnone");
  const [inputIngredientAdded7, setInputIngredientadded7] = useState("dnone");
  const [inputIngredientAdded8, setInputIngredientadded8] = useState("dnone");
  const [inputIngredientAdded9, setInputIngredientadded9] = useState("dnone");
  const [inputIngredientAdded10, setInputIngredientadded10] = useState("dnone");
  const [inputIngredientAdded11, setInputIngredientadded11] = useState("dnone");
  const [inputIngredientAdded12, setInputIngredientadded12] = useState("dnone");
  const [inputIngredientAdded13, setInputIngredientadded13] = useState("dnone");
  const [inputIngredientAdded14, setInputIngredientadded14] = useState("dnone");
  const [inputIngredientAdded15, setInputIngredientadded15] = useState("dnone");
  const [inputIngredientAdded16, setInputIngredientadded16] = useState("dnone");
  const [inputIngredientAdded17, setInputIngredientadded17] = useState("dnone");
  const [inputIngredientAdded18, setInputIngredientadded18] = useState("dnone");
  const [inputIngredientAdded19, setInputIngredientadded19] = useState("dnone");
  const [inputIngredientAdded20, setInputIngredientadded20] = useState("dnone");
  const [inputIngredientAdded21, setInputIngredientadded21] = useState("dnone");
  const [inputIngredientAdded22, setInputIngredientadded22] = useState("dnone");
  const [inputIngredientAdded23, setInputIngredientadded23] = useState("dnone");
  const [inputIngredientAdded24, setInputIngredientadded24] = useState("dnone");

  useEffect(() => {
    onIngredientChooseUpdate(ingredientChoose);
  }, [ingredientChoose, onIngredientChooseUpdate]);

  function handleInputIngredient(e, index) {
    const keyBoardInput = e.target.value;
    switch (index) {
      case 2:
        setSearchIngredient2(keyBoardInput.trim().toLowerCase());
        break;
      case 3:
        setSearchIngredient3(keyBoardInput.trim().toLowerCase());
        break;
      case 4:
        setSearchIngredient4(keyBoardInput.trim().toLowerCase());
        break;
      case 5:
        setSearchIngredient5(keyBoardInput.trim().toLowerCase());
        break;
      case 6:
        setSearchIngredient6(keyBoardInput.trim().toLowerCase());
        break;
      case 7:
        setSearchIngredient7(keyBoardInput.trim().toLowerCase());
        break;
      case 8:
        setSearchIngredient8(keyBoardInput.trim().toLowerCase());
        break;
      case 9:
        setSearchIngredient9(keyBoardInput.trim().toLowerCase());
        break;
      case 10:
        setSearchIngredient10(keyBoardInput.trim().toLowerCase());
        break;
      case 11:
        setSearchIngredient11(keyBoardInput.trim().toLowerCase());
        break;
      case 12:
        setSearchIngredient12(keyBoardInput.trim().toLowerCase());
        break;
      case 13:
        setSearchIngredient13(keyBoardInput.trim().toLowerCase());
        break;
      case 14:
        setSearchIngredient14(keyBoardInput.trim().toLowerCase());
        break;
      case 15:
        setSearchIngredient15(keyBoardInput.trim().toLowerCase());
        break;
      case 16:
        setSearchIngredient16(keyBoardInput.trim().toLowerCase());
        break;
      case 17:
        setSearchIngredient17(keyBoardInput.trim().toLowerCase());
        break;
      case 18:
        setSearchIngredient18(keyBoardInput.trim().toLowerCase());
        break;
      case 19:
        setSearchIngredient19(keyBoardInput.trim().toLowerCase());
        break;
      case 20:
        setSearchIngredient20(keyBoardInput.trim().toLowerCase());
        break;
      case 21:
        setSearchIngredient21(keyBoardInput.trim().toLowerCase());
        break;
      case 22:
        setSearchIngredient22(keyBoardInput.trim().toLowerCase());
        break;
      case 23:
        setSearchIngredient23(keyBoardInput.trim().toLowerCase());
        break;
      case 24:
        setSearchIngredient24(keyBoardInput.trim().toLowerCase());
        break;
      default:
        setSearchIngredient1(keyBoardInput.trim().toLowerCase());
    }
  }

  function handleDeleteIngredient(
    inputId,
    addedStateSetter,
    inputQuantity,
    inputMeasure
  ) {
    return function (event) {
      event.preventDefault();
      const selectedIngredientId = document.getElementById(inputId).value;
      setIngredientChoose((prevIngredients) =>
        prevIngredients.filter(
          (ingredient) => ingredient.id !== selectedIngredientId
        )
      );
      document.getElementById(inputQuantity).value = "";
      document.getElementById(inputMeasure).value = "";
      addedStateSetter(false);
    };
  }

  function handleAddIngredient(
    inputId,
    addedStateSetter,
    inputQuantity,
    inputMeasure
  ) {
    return function (event) {
      event.preventDefault();
      const selectedIngredientId = document.getElementById(inputId).value;
      const selectedIngredientQuantities = document.getElementById(
        `${inputQuantity}`
      ).value;
      const selectedIngredientMeasure = document.getElementById(
        `${inputMeasure}`
      ).value;
      if (
        !ingredientChoose.some(
          (ingredient) => ingredient.id === selectedIngredientId
        )
      ) {
        setIngredientChoose([
          ...ingredientChoose,
          {
            id: selectedIngredientId,
            quantities: selectedIngredientQuantities,
            measure: selectedIngredientMeasure,
          },
        ]);
        addedStateSetter(true);
      }
    };
  }

  function addInputIngredient(i) {
    i.preventDefault();
    if (count2 === 0) {
      setInputIngredientadded2("dBlock");
    }
    if (count2 === 1) {
      setInputIngredientadded3("dBlock");
    }
    if (count2 === 2) {
      setInputIngredientadded4("dBlock");
    }
    if (count2 === 3) {
      setInputIngredientadded5("dBlock");
    }
    if (count2 === 4) {
      setInputIngredientadded6("dBlock");
    }
    if (count2 === 5) {
      setInputIngredientadded7("dBlock");
    }
    if (count2 === 6) {
      setInputIngredientadded8("dBlock");
    }
    if (count2 === 7) {
      setInputIngredientadded9("dBlock");
    }
    if (count2 === 8) {
      setInputIngredientadded10("dBlock");
    }
    if (count2 === 9) {
      setInputIngredientadded11("dBlock");
    }
    if (count2 === 10) {
      setInputIngredientadded12("dBlock");
    }
    if (count2 === 11) {
      setInputIngredientadded13("dBlock");
    }
    if (count2 === 12) {
      setInputIngredientadded14("dBlock");
    }
    if (count2 === 13) {
      setInputIngredientadded15("dBlock");
    }
    if (count2 === 14) {
      setInputIngredientadded16("dBlock");
    }
    if (count2 === 15) {
      setInputIngredientadded17("dBlock");
    }
    if (count2 === 16) {
      setInputIngredientadded18("dBlock");
    }
    if (count2 === 17) {
      setInputIngredientadded19("dBlock");
    }
    if (count2 === 18) {
      setInputIngredientadded20("dBlock");
    }
    if (count2 === 19) {
      setInputIngredientadded21("dBlock");
    }
    if (count2 === 20) {
      setInputIngredientadded22("dBlock");
    }
    if (count2 === 21) {
      setInputIngredientadded23("dBlock");
    }
    if (count2 === 22) {
      setInputIngredientadded24("dBlock");
    }
    setCount2(count2 + 1);
  }

  useEffect(() => {
    async function fetchIngredient() {
      try {
        const ingredients = await getIngredient();
        setIngredientList(ingredients);
      } catch (error) {
        console.error(error);
      }
    }
    fetchIngredient();
  }, []);

  return (
    <div className="d-flex flex-column mb20">
      <h2>De quels ingrédients de cuisine a t-on besoin ?</h2>
      <div className="d-flex">
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 1)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded}
              ></input>
            </div>

            <select id="ingredients" disabled={ingredientAdded}>
              <option value="" disabled>
                Quel ingredient?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(searchIngredient1)
                )
                .map((ingredient) => (
                  <option
                    key={ingredient.INGREDIENT_ID}
                    value={ingredient.INGREDIENT_ICON}
                  >
                    {ingredient.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>

          <select id="quantities" disabled={ingredientAdded}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity) => (
              <option key={quantity} value={(quantity + 1) / 10} step="0.1">
                {(quantity + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure" disabled={ingredientAdded}>
            {arrayMeasure.map((measure1) => (
              <option key={measure1} value={measure1}>
                {" "}
                {measure1}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients",
                setIngredientAdded,
                "quantities",
                "measure"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients",
                setIngredientAdded,
                "quantities",
                "measure"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
      <div className={`${inputIngredientAdded2}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 2)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded2}
              ></input>
            </div>
            <select id="ingredients2" disabled={ingredientAdded2}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(searchIngredient2)
                )
                .map((ingredient2) => (
                  <option
                    key={ingredient2.INGREDIENT_ID}
                    value={ingredient2.INGREDIENT_ICON}
                  >
                    {ingredient2.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities2" disabled={ingredientAdded2}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity2) => (
              <option key={quantity2} value={(quantity2 + 1) / 10} step="0.1">
                {(quantity2 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure2" disabled={ingredientAdded2}>
            {arrayMeasure.map((measure2) => (
              <option key={measure2} value={measure2}>
                {" "}
                {measure2}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients2",
                setIngredientAdded2,
                "quantities2",
                "measure2"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients2",
                setIngredientAdded2,
                "quantities2",
                "measure2"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded3}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 3)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded3}
              ></input>
            </div>
            <select id="ingredients3" disabled={ingredientAdded3}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(searchIngredient3)
                )
                .map((ingredient3) => (
                  <option
                    key={ingredient3.INGREDIENT_ID}
                    value={ingredient3.INGREDIENT_ICON}
                  >
                    {ingredient3.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities3" disabled={ingredientAdded3}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity3) => (
              <option key={quantity3} value={(quantity3 + 1) / 10} step="0.1">
                {(quantity3 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure3" disabled={ingredientAdded3}>
            {arrayMeasure.map((measure3) => (
              <option key={measure3} value={measure3}>
                {" "}
                {measure3}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients3",
                setIngredientAdded3,
                "quantities3",
                "measure3"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients3",
                setIngredientAdded3,
                "quantities3",
                "measure3"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded4}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 4)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded4}
              ></input>
            </div>
            <select id="ingredients4" disabled={ingredientAdded4}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(searchIngredient4)
                )
                .map((ingredient4) => (
                  <option
                    key={ingredient4.INGREDIENT_ID}
                    value={ingredient4.INGREDIENT_ICON}
                  >
                    {ingredient4.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities4" disabled={ingredientAdded4}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity4) => (
              <option key={quantity4} value={(quantity4 + 1) / 10} step="0.1">
                {(quantity4 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure4" disabled={ingredientAdded4}>
            {arrayMeasure.map((measure4) => (
              <option key={measure4} value={measure4}>
                {" "}
                {measure4}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients4",
                setIngredientAdded4,
                "quantities4",
                "measure4"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients4",
                setIngredientAdded4,
                "quantities4",
                "measure4"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded5}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 5)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded5}
              ></input>
            </div>
            <select id="ingredients5" disabled={ingredientAdded5}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(searchIngredient5)
                )
                .map((ingredient5) => (
                  <option
                    key={ingredient5.INGREDIENT_ID}
                    value={ingredient5.INGREDIENT_ICON}
                  >
                    {ingredient5.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities5" disabled={ingredientAdded5}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity5) => (
              <option key={quantity5} value={(quantity5 + 1) / 10} step="0.1">
                {(quantity5 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure5" disabled={ingredientAdded5}>
            {arrayMeasure.map((measure5) => (
              <option key={measure5} value={measure5}>
                {" "}
                {measure5}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients5",
                setIngredientAdded5,
                "quantities5",
                "measure5"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients5",
                setIngredientAdded5,
                "quantities5",
                "measure5"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded6}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 6)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded6}
              ></input>
            </div>
            <select id="ingredients6" disabled={ingredientAdded6}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(searchIngredient6)
                )
                .map((ingredient6) => (
                  <option
                    key={ingredient6.INGREDIENT_ID}
                    value={ingredient6.INGREDIENT_ICON}
                  >
                    {ingredient6.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities6" disabled={ingredientAdded6}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity6) => (
              <option key={quantity6} value={(quantity6 + 1) / 10} step="0.1">
                {(quantity6 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure6" disabled={ingredientAdded6}>
            {arrayMeasure.map((measure6) => (
              <option key={measure6} value={measure6}>
                {" "}
                {measure6}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients6",
                setIngredientAdded6,
                "quantities6",
                "measure6"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients6",
                setIngredientAdded6,
                "quantities6",
                "measure6"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded7}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 7)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded7}
              ></input>
            </div>
            <select id="ingredients7" disabled={ingredientAdded7}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(searchIngredient7)
                )
                .map((ingredient7) => (
                  <option
                    key={ingredient7.INGREDIENT_ID}
                    value={ingredient7.INGREDIENT_ICON}
                  >
                    {ingredient7.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities7" disabled={ingredientAdded7}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity7) => (
              <option key={quantity7} value={(quantity7 + 1) / 10} step="0.1">
                {(quantity7 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure7" disabled={ingredientAdded7}>
            {arrayMeasure.map((measure7) => (
              <option key={measure7} value={measure7}>
                {" "}
                {measure7}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients7",
                setIngredientAdded7,
                "quantities7",
                "measure7"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients7",
                setIngredientAdded7,
                "quantities7",
                "measure7"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded8}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 8)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded8}
              ></input>
            </div>
            <select id="ingredients8" disabled={ingredientAdded8}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(searchIngredient8)
                )
                .map((ingredient8) => (
                  <option
                    key={ingredient8.INGREDIENT_ID}
                    value={ingredient8.INGREDIENT_ICON}
                  >
                    {ingredient8.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities8" disabled={ingredientAdded8}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity8) => (
              <option key={quantity8} value={(quantity8 + 1) / 10} step="0.1">
                {(quantity8 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure8" disabled={ingredientAdded8}>
            {arrayMeasure.map((measure8) => (
              <option key={measure8} value={measure8}>
                {" "}
                {measure8}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients8",
                setIngredientAdded8,
                "quantities8",
                "measure8"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients8",
                setIngredientAdded8,
                "quantities8",
                "measure8"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded9}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 9)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded9}
              ></input>
            </div>
            <select id="ingredients9" disabled={ingredientAdded9}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(searchIngredient9)
                )
                .map((ingredient9) => (
                  <option
                    key={ingredient9.INGREDIENT_ID}
                    value={ingredient9.INGREDIENT_ICON}
                  >
                    {ingredient9.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities9" disabled={ingredientAdded9}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity9) => (
              <option key={quantity9} value={(quantity9 + 1) / 10} step="0.1">
                {(quantity9 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure9" disabled={ingredientAdded9}>
            {arrayMeasure.map((measure9) => (
              <option key={measure9} value={measure9}>
                {" "}
                {measure9}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients9",
                setIngredientAdded9,
                "quantities9",
                "measure9"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients9",
                setIngredientAdded9,
                "quantities9",
                "measure9"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded10}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 10)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded10}
              ></input>
            </div>
            <select id="ingredients10" disabled={ingredientAdded10}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(
                    searchIngredient10
                  )
                )
                .map((ingredient10) => (
                  <option
                    key={ingredient10.INGREDIENT_ID}
                    value={ingredient10.INGREDIENT_ICON}
                  >
                    {ingredient10.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities10" disabled={ingredientAdded10}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity10) => (
              <option key={quantity10} value={(quantity10 + 1) / 10} step="0.1">
                {(quantity10 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure10" disabled={ingredientAdded10}>
            {arrayMeasure.map((measure10) => (
              <option key={measure10} value={measure10}>
                {" "}
                {measure10}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients10",
                setIngredientAdded10,
                "quantities10",
                "measure10"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients10",
                setIngredientAdded10,
                "quantities10",
                "measure10"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded11}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 11)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded11}
              ></input>
            </div>
            <select id="ingredients11" disabled={ingredientAdded11}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(
                    searchIngredient11
                  )
                )
                .map((ingredient11) => (
                  <option
                    key={ingredient11.INGREDIENT_ID}
                    value={ingredient11.INGREDIENT_ICON}
                  >
                    {ingredient11.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities11" disabled={ingredientAdded11}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity11) => (
              <option key={quantity11} value={(quantity11 + 1) / 10} step="0.1">
                {(quantity11 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure11" disabled={ingredientAdded11}>
            {arrayMeasure.map((measure11) => (
              <option key={measure11} value={measure11}>
                {" "}
                {measure11}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients11",
                setIngredientAdded11,
                "quantities11",
                "measure11"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients11",
                setIngredientAdded11,
                "quantities11",
                "measure11"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded12}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 12)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded12}
              ></input>
            </div>
            <select id="ingredients12" disabled={ingredientAdded12}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(
                    searchIngredient12
                  )
                )
                .map((ingredient12) => (
                  <option
                    key={ingredient12.INGREDIENT_ID}
                    value={ingredient12.INGREDIENT_ICON}
                  >
                    {ingredient12.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities12" disabled={ingredientAdded12}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity12) => (
              <option key={quantity12} value={(quantity12 + 1) / 10} step="0.1">
                {(quantity12 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure12" disabled={ingredientAdded12}>
            {arrayMeasure.map((measure12) => (
              <option key={measure12} value={measure12}>
                {" "}
                {measure12}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients12",
                setIngredientAdded12,
                "quantities12",
                "measure12"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients12",
                setIngredientAdded12,
                "quantities12",
                "measure12"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded13}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 13)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded13}
              ></input>
            </div>
            <select id="ingredients13" disabled={ingredientAdded13}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(
                    searchIngredient13
                  )
                )
                .map((ingredient13) => (
                  <option
                    key={ingredient13.INGREDIENT_ID}
                    value={ingredient13.INGREDIENT_ICON}
                  >
                    {ingredient13.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities13" disabled={ingredientAdded13}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity13) => (
              <option key={quantity13} value={(quantity13 + 1) / 10} step="0.1">
                {(quantity13 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure13" disabled={ingredientAdded13}>
            {arrayMeasure.map((measure13) => (
              <option key={measure13} value={measure13}>
                {" "}
                {measure13}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients13",
                setIngredientAdded13,
                "quantities13",
                "measure13"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients13",
                setIngredientAdded13,
                "quantities13",
                "measure13"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded14}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 14)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded14}
              ></input>
            </div>
            <select id="ingredients14" disabled={ingredientAdded14}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(
                    searchIngredient14
                  )
                )
                .map((ingredient14) => (
                  <option
                    key={ingredient14.INGREDIENT_ID}
                    value={ingredient14.INGREDIENT_ICON}
                  >
                    {ingredient14.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities14" disabled={ingredientAdded14}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity14) => (
              <option key={quantity14} value={(quantity14 + 1) / 10} step="0.1">
                {(quantity14 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure14" disabled={ingredientAdded14}>
            {arrayMeasure.map((measure14) => (
              <option key={measure14} value={measure14}>
                {" "}
                {measure14}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients14",
                setIngredientAdded14,
                "quantities14",
                "measure14"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients14",
                setIngredientAdded14,
                "quantities14",
                "measure14"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded15}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 15)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded15}
              ></input>
            </div>
            <select id="ingredients15" disabled={ingredientAdded15}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(
                    searchIngredient15
                  )
                )
                .map((ingredient15) => (
                  <option
                    key={ingredient15.INGREDIENT_ID}
                    value={ingredient15.INGREDIENT_ICON}
                  >
                    {ingredient15.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities15" disabled={ingredientAdded15}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity15) => (
              <option key={quantity15} value={(quantity15 + 1) / 10} step="0.1">
                {(quantity15 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure15" disabled={ingredientAdded15}>
            {arrayMeasure.map((measure15) => (
              <option key={measure15} value={measure15}>
                {" "}
                {measure15}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients15",
                setIngredientAdded15,
                "quantities15",
                "measure15"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredient15",
                setIngredientAdded15,
                "quantities15",
                "measure15"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded16}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 16)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded16}
              ></input>
            </div>
            <select id="ingredients16" disabled={ingredientAdded16}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(
                    searchIngredient16
                  )
                )
                .map((ingredient16) => (
                  <option
                    key={ingredient16.INGREDIENT_ID}
                    value={ingredient16.INGREDIENT_ICON}
                  >
                    {ingredient16.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities16" disabled={ingredientAdded16}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity16) => (
              <option key={quantity16} value={(quantity16 + 1) / 10} step="0.1">
                {(quantity16 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure16" disabled={ingredientAdded16}>
            {arrayMeasure.map((measure16) => (
              <option key={measure16} value={measure16}>
                {" "}
                {measure16}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients16",
                setIngredientAdded16,
                "quantities16",
                "measure16"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients16",
                setIngredientAdded16,
                "quantities16",
                "measure16"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded17}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 17)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded17}
              ></input>
            </div>
            <select id="ingredients17" disabled={ingredientAdded17}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(
                    searchIngredient17
                  )
                )
                .map((ingredient17) => (
                  <option
                    key={ingredient17.INGREDIENT_ID}
                    value={ingredient17.INGREDIENT_ICON}
                  >
                    {ingredient17.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities17" disabled={ingredientAdded17}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity17) => (
              <option key={quantity17} value={(quantity17 + 1) / 10} step="0.1">
                {(quantity17 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure17" disabled={ingredientAdded17}>
            {arrayMeasure.map((measure17) => (
              <option key={measure17} value={measure17}>
                {" "}
                {measure17}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients17",
                setIngredientAdded17,
                "quantities17",
                "measure17"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients17",
                setIngredientAdded17,
                "quantities17",
                "measure17"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded18}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 18)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded18}
              ></input>
            </div>
            <select id="ingredients18" disabled={ingredientAdded18}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(
                    searchIngredient18
                  )
                )
                .map((ingredient18) => (
                  <option
                    key={ingredient18.INGREDIENT_ID}
                    value={ingredient18.INGREDIENT_ICON}
                  >
                    {ingredient18.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities18" disabled={ingredientAdded18}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity18) => (
              <option key={quantity18} value={(quantity18 + 1) / 10} step="0.1">
                {(quantity18 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure18" disabled={ingredientAdded18}>
            {arrayMeasure.map((measure18) => (
              <option key={measure18} value={measure18}>
                {" "}
                {measure18}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients18",
                setIngredientAdded18,
                "quantities18",
                "measure18"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients18",
                setIngredientAdded18,
                "quantities18",
                "measure18"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded19}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 19)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded19}
              ></input>
            </div>
            <select id="ingredients19" disabled={ingredientAdded19}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(
                    searchIngredient19
                  )
                )
                .map((ingredient19) => (
                  <option
                    key={ingredient19.INGREDIENT_ID}
                    value={ingredient19.INGREDIENT_ICON}
                  >
                    {ingredient19.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities19" disabled={ingredientAdded19}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity19) => (
              <option key={quantity19} value={(quantity19 + 1) / 10} step="0.1">
                {(quantity19 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure19" disabled={ingredientAdded19}>
            {arrayMeasure.map((measure19) => (
              <option key={measure19} value={measure19}>
                {" "}
                {measure19}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients19",
                setIngredientAdded19,
                "quantities19",
                "measure19"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients19",
                setIngredientAdded19,
                "quantities19",
                "measure19"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded20}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 20)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded20}
              ></input>
            </div>
            <select id="ingredients20" disabled={ingredientAdded20}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(
                    searchIngredient20
                  )
                )
                .map((ingredient20) => (
                  <option
                    key={ingredient20.INGREDIENT_ID}
                    value={ingredient20.INGREDIENT_ICON}
                  >
                    {ingredient20.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities20" disabled={ingredientAdded20}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity20) => (
              <option key={quantity20} value={(quantity20 + 1) / 10} step="0.1">
                {(quantity20 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure20" disabled={ingredientAdded20}>
            {arrayMeasure.map((measure20) => (
              <option key={measure20} value={measure20}>
                {" "}
                {measure20}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients20",
                setIngredientAdded20,
                "quantities20",
                "measure20"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients20",
                setIngredientAdded20,
                "quantities20",
                "measure20"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded21}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 21)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded21}
              ></input>
            </div>
            <select id="ingredients21" disabled={ingredientAdded21}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(
                    searchIngredient21
                  )
                )
                .map((ingredient21) => (
                  <option
                    key={ingredient21.INGREDIENT_ID}
                    value={ingredient21.INGREDIENT_ICON}
                  >
                    {ingredient21.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities21" disabled={ingredientAdded21}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity21) => (
              <option key={quantity21} value={(quantity21 + 1) / 10} step="0.1">
                {(quantity21 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure21" disabled={ingredientAdded21}>
            {arrayMeasure.map((measure21) => (
              <option key={measure21} value={measure21}>
                {" "}
                {measure21}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients21",
                setIngredientAdded21,
                "quantities21",
                "measure21"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients21",
                setIngredientAdded21,
                "quantities21",
                "measure21"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded22}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 22)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded22}
              ></input>
            </div>
            <select id="ingredients22" disabled={ingredientAdded22}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(
                    searchIngredient22
                  )
                )
                .map((ingredient22) => (
                  <option
                    key={ingredient22.INGREDIENT_ID}
                    value={ingredient22.INGREDIENT_ICON}
                  >
                    {ingredient22.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities22" disabled={ingredientAdded22}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity22) => (
              <option key={quantity22} value={(quantity22 + 1) / 10} step="0.1">
                {(quantity22 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure22" disabled={ingredientAdded22}>
            {arrayMeasure.map((measure22) => (
              <option key={measure22} value={measure22}>
                {" "}
                {measure22}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients22",
                setIngredientAdded22,
                "quantities22",
                "measure22"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients22",
                setIngredientAdded22,
                "quantities22",
                "measure22"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded23}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 23)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded23}
              ></input>
            </div>
            <select id="ingredients23" disabled={ingredientAdded23}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(
                    searchIngredient23
                  )
                )
                .map((ingredient23) => (
                  <option
                    key={ingredient23.INGREDIENT_ID}
                    value={ingredient23.INGREDIENT_ICON}
                  >
                    {ingredient23.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities23" disabled={ingredientAdded23}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity23) => (
              <option key={quantity23} value={(quantity23 + 1) / 10} step="0.1">
                {(quantity23 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure23" disabled={ingredientAdded23}>
            {arrayMeasure.map((measure23) => (
              <option key={measure23} value={measure23}>
                {" "}
                {measure23}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients23",
                setIngredientAdded23,
                "quantities23",
                "measure23"
              )}
            >
              Valider
            </button>
            <button
              className="buttonDeleteRecipe"
              onClick={handleDeleteIngredient(
                "ingredients23",
                setIngredientAdded23,
                "quantities23",
                "measure23"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <div className={`${inputIngredientAdded24}`}>
        <div
          className={`${styles.inputDeco} p10 d-flex justify-content-center`}
        >
          <div className={`${styles.containerSelect}`}>
            <div>
              <div className={`${styles.inputStart}`}></div>
              <input
                type="text"
                onInput={(e) => handleInputIngredient(e, 24)}
                className="flex-fill"
                placeholder="Search ..."
                disabled={ingredientAdded24}
              ></input>
            </div>
            <select id="ingredients24" disabled={ingredientAdded24}>
              <option value="" disabled>
                Quel ingrédient ?
              </option>
              {ingredientList
                .filter((i) =>
                  i.INGREDIENT_FR_NAME.toLowerCase().includes(
                    searchIngredient24
                  )
                )
                .map((ingredient24) => (
                  <option
                    key={ingredient24.INGREDIENT_ID}
                    value={ingredient24.INGREDIENT_ICON}
                  >
                    {ingredient24.INGREDIENT_FR_NAME}
                  </option>
                ))}
            </select>
          </div> <div className={`${styles.containerSelect}`}>
          <select id="quantities24" disabled={ingredientAdded24}>
            <option value="" disabled>
              Quelle quantité?
            </option>
            {Array.from(Array(9900).keys()).map((quantity24) => (
              <option key={quantity24} value={(quantity24 + 1) / 10} step="0.1">
                {(quantity24 + 1) / 10}
              </option>
            ))}
          </select>
          <select id="measure24" disabled={ingredientAdded24}>
            {arrayMeasure.map((measure24) => (
              <option key={measure24} value={measure24}>
                {" "}
                {measure24}{" "}
              </option>
            ))}
          </select></div>
          <div className={`${styles.containerButton}`}>
            <button
              className="buttonAddRecipe"
              onClick={handleAddIngredient(
                "ingredients24",
                setIngredientAdded24,
                "quantities24",
                "measure24"
              )}
            >
              Valider
            </button>
            <button
              className="buttonAddRecipe"
              onClick={handleDeleteIngredient(
                "ingredients24",
                setIngredientAdded24,
                "quantities24",
                "measure24"
              )}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>

      <i
        className="btn btn-primary d-flex justify-content-center"
        onClick={addInputIngredient}
      >
        Ajouter un autre ingrédient ?
      </i>
      <div>
        Listes des ingrédients :
        <br />
        <span>
          {ingredientChoose.map((i) => (
            <img
              className={`${styles.iconUstensil}`}
              key={i}
              src={`../../assets/LOGO_ingrédients_png/${i.id}`}
              alt="ingrédients"
            ></img>
          ))}
        </span>
      </div>
    </div>
  );
}

IngredientRecipe.defaultProps = {
  stepIngredient: [],
};
