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
    const [count, setCount] = useState(0);

    function addCount() {
        setCount(count + 1) ;
      }
    function handleClick() {
        if (count===0) {
            setShowMenu(true);
            addCount();
        } 
        else
        {
            setShowMenu(false);
            setCount(0);
        }

    }

    return (
        <header className={`${styles.header}`}>
            <div className="d-flex justify-content-center"> 

                <ul className={`${styles.desktopHeader}`}>
                    {user ? (<ul className="d-flex justify-content-evenly">
                        <Link to="/">
                            <button className="btn-primary las la-home">
                                <span>Accueil</span>
                            </button>
                        </Link>
                        <Link to="profile">
                            <button className="btn-primary ml10 las la-user">
                                <span>Mon profil</span>
                            </button>
                        </Link>
                        <Link to='/addRecipe'>
                            <button className={`btn-primary ml10 las la-plus-circle`}>
                                <span>Ajouter recette</span>
                            </button>
                        </Link>
                        <Link to='/'>
                            <button className={`btn btn-primary las la-book-open ml10`}>
                                <span>Mes recettes</span>
                            </button>  
                        </Link>
                        <Link to='/'>
                            <button className={`btn btn-primary las la-heart ml10`}>
                                <span>Mes favoris</span>
                            </button>  
                        </Link>
                        <Link to='/'>
                            <button className={`btn btn-primary las la-calendar ml10`}>
                                <span>Agenda des repas</span>
                            </button>  
                        </Link>

                        <Link  onClick={() => signout()} >
                            <button className="btn-primary-reverse ml10 las la-sign-out-alt" > 
                                <span className={`${styles.te}`}>Deconnexion</span>
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
                    onClick={handleClick}
                    className={`las la-bars mr10 positionFixed`}
                ></i>
                {showMenu && (
                    <>
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

