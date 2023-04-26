import { Link } from "react-router-dom";

export default function MenuMyAccount() {

    return (
        <aside className="menuMyAccount mt20">
            <Link to='/profile'>
                <button className="btn btn-primary">
                    Vos informations personnelles
                </button>
                </Link>
        </aside>
    )

}