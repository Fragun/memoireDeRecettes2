import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <div className={`d-flex justify-content-center align-items-center p10 ${styles.footer}`}> 
    <p>Copyright 2023 Mémoire de Recettes</p>
    </div>
    );
}