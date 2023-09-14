import { Link } from "react-router-dom";
import styles from "./UseTerms.module.scss";

export default function Confidentiality() {
  return (
    <div
      className={`container d-flex flex-column justify-content-center text-align-center p20 cw ${styles.containerTerms}`}
    >
      <h2>Politique de confidentialité</h2>
      <p>
        La politique de confidentialité vous indique les informations relatives
        à la collecte des données du site web « Mémoire de Recette ». Celle-ci
        permet de vous
      </p>

      <p>
        Lors de l’utilisation du site internet « mémoire de recettes »,
        l’application est susceptible de collecter et traiter des données à
        caractère personnel vous concernant. « mémoire de recettes » s'engage à
        faire en sorte que vos informations privées soient protégées.
      </p>

      <p>
        Le site internet « mémoire de recettes » a été déclaré à la CNIL sous le
        numéro d'enregistrement -------------. Il vous est proposé par Dethoor
        David.
      </p>

      <h3>Données collectées :</h3>
      <p>
        « Mémoire de recettes » peut collecter les données ci-dessous. Ces
        Données Utilisateur ne sont pas publiques. Seul le pseudo utilisé est
        rendu public.
      </p>

      <p>
        L’Utilisateur transmet lors de son inscription sur le Site son adresse
        de messagerie électronique valide pour créer son Compte ainsi que son
        pseudo. Ce sont les seules informations obligatoires pour créer un
        compte sur « Mémoire de Recettes », les autres formulaires sont
        facultatifs. Sur sa page mon compte, l’utilisateur peut aussi y mettre
        une photo, une date d’anniversaire, une adresse, une date de naissance
        ainsi qu’un genre.
      </p>

      <p>
        L’Utilisateur peut stocker, charger et télécharger des fichiers
        (fichiers de recettes, photographies et images) durant son utilisation
        du Site. Mémoire de Recette traite ces fichiers Utilisateurs de la même
        façon que les Données Utilisateurs.
      </p>

      <p>
        Le responsable du traitement des données est Monsieur Dethoor David,
        domiciliant au 1830 rue des longs champs, 59270 Bailleul. Aussi désigné
        comme délégué à la protection des données.
      </p>

      {/* <h3>Facebook, Google :</h3>
      <p>
        Vous pouvez utiliser des boutons de Facebook ou Google pour vous
        authentifier. Ces boutons utilisent des codes fournis respectivement par
        Facebook et Google. Veuillez lire leurs déclarations de confidentialité
        pour savoir ce que ces réseaux font des données à caractère personnel
        qui sont traitées via ces cookies.
      </p> */}

      <h3>Liens externes :</h3>
      <p>
        Lorsque vous cherchez une nouvelle recette, vous pouvez ouvrir des pages
        sur d'autres sites web. Ces sites Web peuvent collecter leurs propres
        données. Cette politique de confidentialité ne traite pas, et nous ne
        sommes pas responsables des pratiques de confidentialité des sites Web
        exploités par des tiers, qu'ils soient liés ou autrement accessible sur
        le site Web « mémoire de recettes ». L'inclusion d'un lien ou l'accès à
        un site Web de tiers ne signifie pas l'approbation de ce site Web par «
        Mémoire de Recettes ».
      </p>

      <h3>Finalité des données collectées :</h3>
      <p>
        Ces données sont nécessaires pour assurer le fonctionnement du Site et
        pour améliorer la qualité de nos services. « Mémoire de Recettes »
        utilise vos données personnelles (email, pseudo, nom, prénom) pour
        valider votre compte et envoyer des messages automatiques à vous ou vos
        utilisateurs favoris selon vos actions dans le Site (emails, envoi d’une
        recette à un ami, …). « Mémoire de recettes » peut utiliser votre
        adresse électronique dans un but non-commercial (lettre d’information,
        sondage, alerte planning, alerte course). Vous pouvez vous opposer à ces
        envois.
      </p>

      <p>
        Les autres données (collectées par les journaux ou les cookies) sont
        utilisées afin d’améliorer les services proposés, et pour créer des
        statistiques anonymes d’utilisation du site dans le but de l’améliorer.
      </p>

      <p>
        En ce qui concerne les Cookies, veuillez-vous référer à notre politique
        de cookie que vous trouverez en cliquant ici.
      </p>

      <h3>Destinataire des données :</h3>
      <p>
        « Mémoire de Recettes » ne vend pas, ne commercialise pas, et ne loue
        pas à des tiers les informations vous concernant.
      </p>

      <p>
        « Mémoire de Recettes » se réserve le droit d'accéder, de lire, de
        conserver et de divulguer toute information jugée nécessaire pour :
      </p>

      <ul>
        <li>
          respecter les lois, réglementations, procédures ou exigences légales,
        </li>
        <li>
          appliquer les Conditions d'Utilisation, incluant des enquêtes
          concernant des violations éventuelles des Conditions Générales
          d’utilisation,
        </li>
        <li>
          détecter, prévenir ou traiter la fraude, la sécurité ou des problèmes
          techniques,
        </li>
        <li>répondre aux demandes d'assistance aux Utilisateurs,</li>
        <li>
          protéger les droits, la propriété ou la sécurité de « Mémoire de
          Recettes », de ses utilisateurs et du public.
        </li>
      </ul>

      <h3>Sécurité :</h3>
      <p>
        Nous suivons de strictes procédures de sécurité en ce qui concerne le
        stockage et la divulgation des informations que vous nous avez
        transmises, afin d'éviter tout accès non autorisé.
      </p>

      <p>
        Nous nous soucions de votre sécurité. Bien que nous nous efforcions de
        préserver la sécurité de votre contenu et de votre compte, « Mémoire de
        Recettes » ne peut garantir que des tiers non autorisés ne seront pas en
        mesure de franchir nos mesures de sécurité. Veuillez nous informer
        immédiatement de toute utilisation non autorisée ou tentative d'accès
        non autorisée à votre compte.
      </p>

      <h3>Conservation des données :</h3>
      <p>
        Les données collectées durant l’utilisation du Site seront conservées
        durant toute la durée nécessaire à l’utilisation du Compte. Elles sont
        stockées sur les serveurs de « Mémoire de Recettes ». Lorsqu’un compte
        Utilisateur est désactivé, « Mémoire de Recettes » conserve les données
        collectées durant l’utilisation du Site par l’Utilisateur, et ceci
        pendant une durée qui n’excèdera pas un an à compter de la
        désactivation. Au-delà de cette durée, les données collectées seront
        supprimées des serveurs de « Mémoire de Recettes ».
      </p>

      <h3>Droits de l’Utilisateur :</h3>
      <p>
        Conformément à la loi du 6 janvier 1978 (article 27), dite "Informatique
        et libertés", vous disposez d'un droit d'accès, de rectification et de
        suppression aux données vous concernant (déclaration CNIL n° 1679866 v
        0).
      </p>

      <p>
        Pour l'exercer, adressez-vous à « Mémoire de Recettes » 1830 rue des
        Longs Champs 59270 Bailleul » ou par email (dethoordavid@yahoo.fr). Vous
        pouvez également modifier en ligne les informations associées à votre
        Compte dans la section Moncompte :
        https://www.memoirederecettes/moncompte.fr/
      </p>

      <p>
        Si vous souhaitez supprimer votre compte « Mémoire de Recettes »,
        envoyez une demande par email « dethoordavid@yahoo.fr » Lorsque votre
        compte est supprimé, toutes les données associées sont également
        supprimées
      </p>
    </div>
  );
}
