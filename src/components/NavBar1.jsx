import {NavLink} from "react-router-dom"

function NavBar(){

    return(

        <nav>
            <NavLink
            to="/"
            className="navlink"
            >
                Home
            </NavLink>
            <NavLink
            to="/favorites"
            className="navlink"
            >
                Favorites
            </NavLink>
            <NavLink
            to="/tolisten"
            className="navlink"
            >
                To Listen
            </NavLink>
        </nav>
    )
}

export default NavBar