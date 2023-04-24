import styles from "../Profile/Profile.module.scss"

export default function Profile() {
    return (
        <div className={`flex-fill d-flex justify-content-center align-items-center`}>
            <div className={`${styles.profileContainer} card p20`}>
                <ul>
                    <li>Nom : </li>
                    <li>Email : </li>
                </ul>
            </div>
        </div>
    )
}