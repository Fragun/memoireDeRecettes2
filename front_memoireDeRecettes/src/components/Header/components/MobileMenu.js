import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.scss';
import { useContext } from 'react';
import { AuthContext } from '../../../context';

export default function MobileMenu() {

    const { signout, user } = useContext(AuthContext);

    return (
        <div className={`card ${styles.menuContainer} `}>
            {user ? (
                <div className='d-flex justify-content-between'>
                    <div>
                        <Link to="/" className='decoNone'>
                            <button className="d-flex justify-content-center align-items-center las la-home la-2x btn-primary">
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/profile" className='decoNone'>
                            <button className="las la-user la-2x d-flex justify-content-center align-items-center btn-primary">
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/addRecipe' className='decoNone'>
                            <button className={`las la-plus-circle la-2x d-flex justify-content-center align-items-center btn-primary`}>
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className='decoNone'>
                            <button className="las la-book-open la-2x d-flex justify-content-center align-items-center btn-primary">
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className='decoNone'>
                            <button className="las la-heart la-2x d-flex justify-content-center align-items-center btn-primary">
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className='decoNone'>
                            <button className="las la-calendar la-2x d-flex justify-content-center align-items-center btn-primary">
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link onClick={() => signout()} className='decoNone'>
                            <button className={`las la-sign-out-alt la-2x d-flex justify-content-center align-items-center btn-primary-reverse`}>
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (

                <div className='d-flex justify-content-between'>
                    <div>
                        <Link to="/" className='decoNone'>
                            <button className="d-flex justify-content-center align-items-center las la-home la-2x btn-primary">
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Login" className='decoNone'>
                            <button className="d-flex justify-content-center align-items-center las la-sign-in-alt la-2x btn-primary">
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/register" className='decoNone'>
                        <button className="d-flex justify-content-center align-items-center las la-address-book la-2x btn-primary">
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}