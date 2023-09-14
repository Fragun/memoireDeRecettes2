import styles from "./BanniereCreationCompte.module.scss";
import imageLivre from "../../../assets/images/livre.png";
import liste from "../../../assets/images/liste-de-choses-a-faire.png";
import grouper from "../../../assets/images/grouper.png";
import multiEcran from "../../../assets/images/multi-ecran.png";
import { Link } from "react-router-dom";

export default function BanniereCreationCompte() {
  return (
    <div className={`${styles.background1} mb20`}>
      <Link to={`/register`} className="decoNone">
        <h1 className="mb20 d-flex justify-content-center">
          Créer un compte pour :
        </h1>
        <div className="d-flex justify-content-around ">
          <div className="">
            <img src={imageLivre} alt="logo enregistrer" />
            <p>
              Enregistrer toutes vos <br></br> recettes préférées
            </p>
          </div>
          <div>
            <img src={multiEcran} alt="logo multi-écran" />
            <p>
              Accéder à vos recettes <br></br>sur tous vos écrans
            </p>
          </div>
          <div>
            <img src={liste} alt="liste de course" />
            <p>
              Créer votre liste <br></br>de course{" "}
            </p>
          </div>
          {/* <div>
                    <img src={calendar} alt="calendrier" />
                    <p>Planifier votre menu <br></br> de la semaine</p>
                </div> */}
          <div>
            <img src={grouper} alt="logo partager" />
            <p>Partager vos recettes</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
