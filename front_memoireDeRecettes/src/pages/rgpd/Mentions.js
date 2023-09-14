import styles from "./UseTerms.module.scss";
export default function Mentions() {
  return (
    <div
      className={`container d-flex flex-column justify-content-center text-align-center p20 cw ${styles.containerTerms}`}
    >
      <h2>Les mentions légales</h2>
      <p>
        Le site Mémoire de Recettes https://www.memoirederecette.fr/ appartient
        à Dethoor David. Domicilié au 1830 rue des Longs Champs 59232 Bailleul,
        dethoordavid@yahoo.fr -- 0658989631. Mémoire de recettes est une SARL au
        capital de 1€, Le site est hébergé par : OVH 2 rue Kellermann 59100
        ROUBAIX – France Tel : +33 (0) 820 698 765 SAS au capital de 10 000 000
        € - RCS Roubaix-Tourcoing 424 761 419 00045 support@ovh.com. Les icônes
        d’ustensiles de cuisine ont été prise sur https://icones8.fr/ . Les
        icones des ingrédients viennent de la banque de données Cockteau. Pour
        signaler tout contenu inapproprié ou illégal : dethoordavid@yahoo.fr Le
        site internet « Mémoire de Recettes » a été déclaré à la CNIL sous le
        numéro d'enregistrement (SIRET)--------------. Nous suivons de strictes
        procédures de sécurité en ce qui concerne le stockage et la divulgation
        des informations que vous nous avez transmises, afin d'éviter tout accès
        non autorisé. « Mémoire de Recettes » ne vend pas, ne commercialise pas,
        et ne loue pas à des tiers les informations vous concernant. Le numéro
        de TVA intracommunautaire de l'entreprise est le ----------------- Le
        directeur de la publication est le propriétaire du site, Conformément à
        la loi du 6 janvier 1978 (article 27), dite "Informatique et libertés",
        vous disposez d'un droit d'accès et de rectification aux données vous
        concernant (déclaration CNIL n°1679866 v 0). Pour l'exercer,
        adressez-vous à « mémoire de recettes » au 1830 rue des longs champs
        59270 Bailleul ou par email (dethoordavid@yahoo.fr).
      </p>
    </div>
  );
}
