import { useContext, useEffect, useState } from "react";
import styles from "../../recipePage/RecipePage.module.scss";
import { AuthContext } from "../../../context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addTrick, getTrickByRecipe } from "../../../apis/recipe";
import AlertSweet from "../alert/AlertSweet";
import AlertBad from "../alert/AlertBad";
import ImageViewer from "../imageViewer/ImageViewer";

export default function TrickRecipe({ id }) {
  const { user } = useContext(AuthContext);
  const [trickRecipe, setTrickRecipe] = useState([]);

  const yupSchemaTrick = yup.object({
    astuce: yup.string().required().min(10, "L'astuce doit contenir au moins 10 caractères."),
  });

  const defaultValues = {
    astuce: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(yupSchemaTrick),
  });

  useEffect(() => {
    async function fetchTrick() {
      try {
        const response = await getTrickByRecipe(id);
        setTrickRecipe(response);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de trick_recipe",
          error
        );
      }
    }
    fetchTrick()
  }, [id]);

  const submitTrick = handleSubmit(async (values) => {
    const idUser = user[0].USER_ID;
    try {
      const responseText = await addTrick(values, id, idUser);
      if (responseText === "Astuce ajoutée avec succès !") {
        AlertSweet("Bravo", responseText);
      } else if (
        responseText ===
        "L'utilisateur a déjà posté une astuce pour cette recette."
      ) {
        AlertBad("Erreur", responseText);
      } else {
        AlertBad("Erreur", "Vous ne pouvez pas poster plus de 3 astuces.");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission de l'astuce:", error);
    }
  });
  return (
    <div
      className={`${styles.container5}  d-flex flex-column pb20`}
    >
      <h3 className="m20 pl20">Le coin des astuces</h3>
      <div className={`${styles.mobileFlex}`}>
        <div className={`${styles.container6}`}>
          {trickRecipe && trickRecipe.map((n) => (
            <div className={` d-flex flex-column`} key={n.TRICK_RECIPE_ID}>
              {n.TRICK_RECIPE_ID ? (
                <>
                  <div className={`d-flex flex-row`}>
                    {n.USER_PHOTO && 
                    <ImageViewer imageData={n.USER_PHOTO}/>
                    }
                    <p>Chef {n.USER_PSEUDO}</p>
                  </div>
                  <div className={`d-flex flex-row`}>
                    <div className={`${styles.littleGreen2}`}> </div>
                    <p className={`${styles.container7}`}>
                      {n.TRICK_RECIPE_TEXT}
                    </p>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
        {user ? (
          <form onSubmit={handleSubmit(submitTrick)}>
            <div className="d-flex flex-column justify-content-start m1 align-items-center">
              <h3>Partagez une astuce :</h3>
              <div className={`d-flex flex-row`}>
                <div className={`${styles.littleGreen}`}></div>
                <textarea
                  placeholder="Notez ici une astuce pour cette recette..."
                  className={``}
                  {...register("astuce")}
                ></textarea>
                <div>{errors?.astuce && <p>{errors.astuce.message}</p>}</div>
              </div>
              
              <button
                disabled={isSubmitting}
                className=" mt10 btn btn-primary"
                id="addTrick"
              >
                Valider
              </button>
              
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
