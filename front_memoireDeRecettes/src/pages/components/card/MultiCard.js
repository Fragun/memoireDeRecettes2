// import styles from "./MultiCard.module.scss";


// export default function MultiCard({
//     title,
//     image,
//     description,
//     imageAvatar,
//     difficulty,
//     price,
//     prepTime,
//     timeCooking,
//     regimeImage,
//     idRecipe, }) {

//     function difficultyRecipe() {
//         switch (difficulty) {
//             case 1:
//                 return (
//                     <div className="d-flex justify-content-center align-items-center">
//                         <h4>Facile</h4>
//                         <i class="las la-mitten la-2x"></i>
//                     </div>
//                 );
//             case 2:
//                 return (
//                     <div className="d-flex justify-content-center align-items-center">
//                         <h4> Moyenne</h4>
//                         <div>
//                             <i class="las la-mitten la-2x"></i>
//                             <i class="las la-mitten la-2x"></i>{" "}
//                         </div>
//                     </div>
//                 );
//             case 3:
//                 return (
//                     <div className="d-flex justify-content-center align-items-center">
//                         <h4>Difficile</h4>
//                         <div>
//                             <i class="las la-mitten la-2x"></i>
//                             <i class="las la-mitten la-2x"></i>
//                             <i class="las la-mitten la-2x"></i>{" "}
//                         </div>
//                     </div>
//                 );

//             default:
//                 break;
//         }
//     }

//     return (
//         <div className={`${styles.multiCard} `}>
//             <div className={`${styles.imgPrincipale}`}>
//                 <div className={`${styles.arrierePlan}`}>
//                     <img className={`${styles.focus} `} src={image} alt="recette" />
//                 </div>
//                 <div className={`${styles.premierPlan}`}>
//                     <p className={`${styles.titreMultiCard}`}>Spécialité { }</p>
//                     <p className={`${styles.nbrRecetteMultiCard} d-flex flex-column justify-content-end align-items-end`}> 66 recettes </p>
//                 </div>
//             </div>
//             <div className={`d-flex flex-row justify-content-around ${styles.miniCard}`}>
//                 <div>
//                     <div className={`${styles.ensemble}`}>
//                         <div className={`${styles.imageDeFond}`}>
//                             <img className={` ${styles.imgParTrois}`} src={image} alt="recette" />
//                         </div>
//                         <div className={`${styles.elementsSurImage} `}>
//                             {regimeImage.length > 0 ? (
//                                 <img
//                                     className={` ${styles.regime}`}
//                                     src={`../../assets/images/${regimeImage}`}
//                                     alt="logo avatar"
//                                 />
//                             ) : (
//                                 ""
//                             )}
//                             <img className={` ${styles.iconeAvatar} `} src={imageAvatar} alt="avatar"></img>
//                         </div>
//                     </div>
//                     <div className="mt135">
//                         <p className=""> {title} </p>
//                         <div className="d-flex flex-column ">
//                             <div className="d-flex flex-row">
//                                 <div className={` ${styles.iconMinicard}`}>{prepTime}</div>
//                                 <img src={logoPreparation} alt="temps de préparation"></img>
//                             </div>
//                             <div className="d-flex flex-row">
//                                 <div className={` ${styles.iconMinicard}`}>{timeCooking}</div>
//                                 <img src={logoCuisson} alt="temps de cuisson"></img>
//                             </div>

//                             <div className="d-flex flex-row">
//                                 <img className={` ${styles.iconMinicard}`} src={imageDifficulte} alt="difficulté" />
//                                 <p>Facile</p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                 <div>
//                     <div className={`${styles.ensemble}`}>
//                         <div className={`${styles.imageDeFond}`}>
//                             <img className={` ${styles.imgParTrois}`} src={image} alt="recette" />
//                         </div>
//                         <div className={`${styles.elementsSurImage} `}>

//                             <img className={` ${styles.iconeElementsPrincipaux} `} src={imageVegetarien} alt="icone végan"></img>
//                             <img className={` ${styles.iconeElementsPrincipaux} `} src={imageVegan} alt="icone végan"></img>
//                             <img className={` ${styles.iconeElementsPrincipaux} `} src={imageSansGluten} alt="icone végan"></img>
//                             <img className={` ${styles.iconeAvatar} `} src={imageAvatar} alt="avatar"></img>
//                         </div>
//                     </div>
//                     <div className="mt135">
//                         <p className=""> {title} </p>
//                         <div className="d-flex flex-column ">
//                             <div className="d-flex flex-row">
//                                 <img className={` ${styles.iconMinicard}`} src={imagePreparation} alt="temps de préparation" />
//                                 <p>30 minutes</p>
//                             </div>
//                             <div className="d-flex flex-row">
//                                 <img className={` ${styles.iconMinicard}`} src={imageCuisson} alt="temps de cuisson" />
//                                 <p>30 minutes</p>
//                             </div>
//                             <div className="d-flex flex-row">
//                                 <img className={` ${styles.iconMinicard}`} src={imageDifficulte} alt="difficulté" />
//                                 <p>Facile</p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                 <div>
//                     <div className={`${styles.ensemble} d-flex justify-content-between`}>
//                         <div className={`${styles.imageDeFond}`}>
//                             <img className={` ${styles.imgParTrois}`} src={image} alt="recette" />
//                         </div>
//                         <div className={`${styles.elementsSurImage} `}>

//                             <img className={` ${styles.iconeElementsPrincipaux} `} src={imageVegetarien} alt="icone végan"></img>
//                             <img className={` ${styles.iconeElementsPrincipaux} `} src={imageVegan} alt="icone végan"></img>
//                             <img className={` ${styles.iconeElementsPrincipaux} `} src={imageSansGluten} alt="icone végan"></img>
//                             <img className={` ${styles.iconeAvatar} `} src={imageAvatar} alt="avatar"></img>
//                         </div>
//                     </div>
//                     <div className="mt135">
//                         <p className=""> {title} </p>
//                         <div className="d-flex flex-column ">
//                             <div className="d-flex flex-row">
//                                 <img className={` ${styles.iconMinicard}`} src={imagePreparation} alt="temps de préparation" />
//                                 <p>30 minutes</p>
//                             </div>
//                             <div className="d-flex flex-row">
//                                 <img className={` ${styles.iconMinicard}`} src={imageCuisson} alt="temps de cuisson" />
//                                 <p>30 minutes</p>
//                             </div>
//                             <div className="d-flex flex-row">
//                                 {difficultyRecipe()}
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//             </div>
//             );
// }