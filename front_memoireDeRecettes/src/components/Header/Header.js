import logo from "../../assets/images/logoComplet.png";
import React, { useContext } from "react";
import styles from "./Header.module.scss";
import { useState } from 'react';
import MobileMenu from "./components/MobileMenu";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";

export default function Header() {
    const { user, signout } = useContext(AuthContext);
    console.log(user);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className={`${styles.header}`}>
            <div className="d-flex justify-content-end">
                <ul className={`${styles.desktopHeader} `}>
                    {/* <button className={`mr10 btn btn-primary`}>
                        <i className="fas fa-star m5"></i>
                        <span>Recherche</span>
                    </button> */}

                    {user ? (<ul>
                        <Link to="profile">
                            <button className="mr10 btn btn-primary">
                                <span>Mon profil</span>
                            </button>
                        </Link>
                        <Link to='/addRecipe'>
                            <button className={`mr10 btn btn-primary`}>
                                <span>Ajouter une recette</span>
                            </button>
                        </Link>
                        <Link 
                            onClick={() => signout()} >
                                <button className="btn btn-primary-reverse" > 
                                <span>Deconnexion</span>
                                </button>    
                        </Link>
                    </ul>
                    ) : (
                        <ul>
                            <Link to="/register">
                                <button type="button" className={`mr10 btn btn-primary`}>
                                    <i className="fas fa-star m5"></i>
                                    <span>Inscription</span>
                                </button>
                            </Link>
                            <Link to="/Login">
                                <button className={`mr10 btn btn-primary-reverse`}>
                                    <i className="fas fa-right-to-bracket m5 m5"></i>
                                    <span>Connexion</span>
                                </button>
                            </Link>
                        </ul>
                    )}


                </ul>
                <i
                    onClick={() => setShowMenu(true)}
                    className={`fas fa-bars mr10`}
                ></i>
                {showMenu && (
                    <>
                        <div className="calc" onClick={() => setShowMenu(false)}></div>
                        <MobileMenu />
                    </>
                )}
            </div>

            <div className="d-flex justify-content-center">
                <Link to="/"> <img src={logo} alt="Logo Mémoire de Recettes" /></Link>
            </div>
        </header>
    );
}

