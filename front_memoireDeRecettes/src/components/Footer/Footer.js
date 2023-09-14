import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div
      className={`d-flex justify-content-between align-items-center p10 ${styles.footer}`}
    >
      <div className="d-flex flex-column align-items-start ml20">
        <Link to="/useTerms" className="decoNone">
          <p className={``}>Conditions générales d'utilisation</p>
        </Link>
        <Link to="/mentions" className="decoNone">
          <p>Mentions légales</p>
        </Link>
      </div>
      <p>Copyright 2023 Mémoire de Recettes</p>
      <div className="d-flex flex-column align-items-start ml20">
        <Link to="/confidentiality" className="decoNone">
          <p>Politique de confidentialité</p>
        </Link>
        <Link to="/cookies" className="decoNone">
          <p>Politique sur les cookies</p>
        </Link>
      </div>
    </div>
  );
}
