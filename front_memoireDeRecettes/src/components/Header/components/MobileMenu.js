import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.scss';
import { useContext } from 'react';
import { AuthContext } from '../../../context';

export default function MobileMenu(props) {

    const { signout, user } = useContext(AuthContext);

    return (
        <div className={`card ${styles.menuContainer} `}>
            {user ? (
                    <div className='d-flex justify-content-between'>
                    <div>
                        <Link to="/">
                            <button className="las la-home btn btn-primary">
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to="profile">
                            <button className="las la-user btn btn-primary">
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <button className="las la-user btn btn-primary">
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/addRecipe'>
                            <button className={`las la-plus-circle btn btn-primary`}>
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link onClick={() => signout()} >
                        <button className={`las la-sign-out-alt btn btn-primary-reverse`}>
                            </button>
                        </Link>
                    </div>
                    <div>
                        <i className='text-center las la-sort-up' onClick={props.onClose}></i>
                    </div>
                    </div>
            ) : (
                <>
                    <div className='d-flex'>
                        <Link to="/register">
                            <button type="button" className={`mr10 btn btn-primary`}>
                                <i className="fas fa-star m5"></i>
                                <span>Inscription</span>
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Login">
                            <button className={`mr10 btn btn-primary-reverse`}>
                                <i className="fas fa-right-to-bracket m5 m5"></i>
                                <span>Connexion</span>
                            </button>
                        </Link>
                    </div>
                    <div>
                        <i className='text-center las la-sort-up' onClick={props.onClose}></i>
                    </div>
                    </>
            )}
        </div>
    )
}