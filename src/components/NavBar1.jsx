import {useState} from 'react'
import {NavLink} from "react-router-dom"
import '../pages/App.css'

function NavBar({darkMode, setDarkMode}){


 function handleModeSwitch(event){
    event.preventDefault()
    setDarkMode(!darkMode)
 }
    return(

      
        <nav id="navbar">
        <button id="button" onClick={handleModeSwitch} className={darkMode == true ? "switchDark" : "switchLight"}>
        {darkMode == true ? "Every is gonna be alright" : "Nothing feels good" }
        </button>
            <div id="links">
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
            </div>
           
        </nav>
      
       
       
    )
}

export default NavBar