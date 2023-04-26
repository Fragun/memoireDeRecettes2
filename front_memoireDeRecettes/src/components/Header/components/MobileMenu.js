import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.scss';
import { useContext } from 'react';
import { AuthContext } from '../../../context';

export default function MobileMenu(props) {

    const { signout, user } = useContext(AuthContext);

    return (
        <div className={`card ${styles.menuContainer} `}>
            {user ? (
                <ul>
                    <li>
                        <Link to="profile">
                            <button className="btn btn-primary">
                                <span>Mon profil</span>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/addRecipe'>
                            <button className={`mr10 btn btn-primary`}>
                                <span>Ajouter une recette</span>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => signout()} >
                            <button className="btn btn-primary-reverse" >
                                <span>Deconnexion</span>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <i className='text-center las la-sort-up' onClick={props.onClose}></i>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <Link to="/register">
                            <button type="button" className={`mr10 btn btn-primary`}>
                                <i className="fas fa-star m5"></i>
                                <span>Inscription</span>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Login">
                            <button className={`mr10 btn btn-primary-reverse`}>
                                <i className="fas fa-right-to-bracket m5 m5"></i>
                                <span>Connexion</span>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <i className='text-center las la-sort-up' onClick={props.onClose}></i>
                    </li>
                </ul>
            )}
        </div>
    )
}