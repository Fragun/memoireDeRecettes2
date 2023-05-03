import styles from "./MultiCard.module.scss";


export default function MultiCard({ image, title, imageDifficulte, imageAvatar, imagePreparation, imageCuisson, imageVegan, imageVegetarien, imageSansGluten }) {
    return (
        <div className={`${styles.multiCard} `}>
            <div className={`${styles.imgPrincipale}`}>
                <div className={`${styles.arrierePlan}`}>
                    <img className={`${styles.focus} `} src={image} alt="recette" />
                </div>
                <div className={`${styles.premierPlan}`}>
                    <p className={`${styles.titreMultiCard}`}>Hachis parmentier de printemps</p>
                    <p className={`${styles.nbrRecetteMultiCard} d-flex flex-column justify-content-end align-items-end`}> 66 recettes </p>
                </div>
            </div>
            <div className={`d-flex flex-row justify-content-around ${styles.miniCard}`}>
                <div>
                    <div className={`${styles.ensemble}`}>
                        <div className={`${styles.imageDeFond}`}>
                            <img className={` ${styles.imgParTrois}`} src={image} alt="recette" />
                        </div>
                        <div className={`${styles.elementsSurImage} `}>
                            
                            <img className={` ${styles.iconeElementsPrincipaux} `} src={imageVegetarien} alt="icone végé"></img>
                            <img className={` ${styles.iconeElementsPrincipaux} `} src={imageVegan} alt="icone végan"></img>
                            <img className={` ${styles.iconeElementsPrincipaux} `} src={imageSansGluten} alt="icone sans gluten"></img>
                            <img className={` ${styles.iconeAvatar} `} src={imageAvatar} alt="avatar"></img>
                        </div>
                    </div>
                    <div className="mt135">
                    <p className=""> {title} </p>
                    <div className="d-flex flex-column ">
                        <div className="d-flex flex-row">
                            <img className={` ${styles.iconMinicard}`} src={imagePreparation} alt="temps de préparation" />
                            <p>30 minutes</p>
                        </div>
                        <div className="d-flex flex-row">
                            <img className={` ${styles.iconMinicard}`} src={imageCuisson} alt="temps de cuisson" />
                            <p>30 minutes</p>
                        </div>
                        <div className="d-flex flex-row">
                            <img className={` ${styles.iconMinicard}`} src={imageDifficulte} alt="difficulté" />
                            <p>Facile</p>
                        </div>
                    </div>
                    </div>
                   
                </div>
                <div>
                    <div className={`${styles.ensemble}`}>
                        <div className={`${styles.imageDeFond}`}>
                            <img className={` ${styles.imgParTrois}`} src={image} alt="recette" />
                        </div>
                        <div className={`${styles.elementsSurImage} `}>
                            
                            <img className={` ${styles.iconeElementsPrincipaux} `} src={imageVegetarien} alt="icone végan"></img>
                            <img className={` ${styles.iconeElementsPrincipaux} `} src={imageVegan} alt="icone végan"></img>
                            <img className={` ${styles.iconeElementsPrincipaux} `} src={imageSansGluten} alt="icone végan"></img>
                            <img className={` ${styles.iconeAvatar} `} src={imageAvatar} alt="avatar"></img>
                        </div>
                    </div>
                    <div className="mt135">
                    <p className=""> {title} </p>
                    <div className="d-flex flex-column ">
                        <div className="d-flex flex-row">
                            <img className={` ${styles.iconMinicard}`} src={imagePreparation} alt="temps de préparation" />
                            <p>30 minutes</p>
                        </div>
                        <div className="d-flex flex-row">
                            <img className={` ${styles.iconMinicard}`} src={imageCuisson} alt="temps de cuisson" />
                            <p>30 minutes</p>
                        </div>
                        <div className="d-flex flex-row">
                            <img className={` ${styles.iconMinicard}`} src={imageDifficulte} alt="difficulté" />
                            <p>Facile</p>
                        </div>
                    </div>
                    </div>
                   
                </div>
                <div>
                    <div className={`${styles.ensemble} d-flex justify-content-between`}>
                        <div className={`${styles.imageDeFond}`}>
                            <img className={` ${styles.imgParTrois}`} src={image} alt="recette" />
                        </div>
                        <div className={`${styles.elementsSurImage} `}>
                            
                            <img className={` ${styles.iconeElementsPrincipaux} `} src={imageVegetarien} alt="icone végan"></img>
                            <img className={` ${styles.iconeElementsPrincipaux} `} src={imageVegan} alt="icone végan"></img>
                            <img className={` ${styles.iconeElementsPrincipaux} `} src={imageSansGluten} alt="icone végan"></img>
                            <img className={` ${styles.iconeAvatar} `} src={imageAvatar} alt="avatar"></img>
                        </div>
                    </div>
                    <div className="mt135">
                    <p className=""> {title} </p>
                    <div className="d-flex flex-column ">
                        <div className="d-flex flex-row">
                            <img className={` ${styles.iconMinicard}`} src={imagePreparation} alt="temps de préparation" />
                            <p>30 minutes</p>
                        </div>
                        <div className="d-flex flex-row">
                            <img className={` ${styles.iconMinicard}`} src={imageCuisson} alt="temps de cuisson" />
                            <p>30 minutes</p>
                        </div>
                        <div className="d-flex flex-row">
                            <img className={` ${styles.iconMinicard}`} src={imageDifficulte} alt="difficulté" />
                            <p>Facile</p>
                        </div>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}