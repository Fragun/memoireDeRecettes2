import styles from "./BanniereRecetteDuJour.module.scss";

export default function BanniereRecetteDuJour() {

    return (
        <div className={`${styles.containerBanniere} m20 d-flex flex-row`}>

            <img src="./assets/images/hachis-parmentier-vege.jpg" alt="recette de saison" />
            <div className="d-flex flex-column flex-fill">
                <div className="d-flex justify-content-between">
                    <h3> Recette de saison</h3>
                    <img className={`${styles.imageAvatar} d-flex flex-row`} src="./assets/images/logoUser.png" alt="avatar" ></img>
                </div>
                <h2 className="text-align-center"> Titre de la recette</h2>
                <div className="d-flex justify-content-center"><img src="./assets/images/logo200px.png" alt=" "></img><p>temps de prép</p></div>
                <div className="d-flex justify-content-center"><img src=" " alt=" "></img><p>temps de prép</p></div>
            </div>

        </div>
    )
}