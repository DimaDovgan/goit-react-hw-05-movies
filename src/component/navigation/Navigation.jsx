import { Link, NavLink } from "react-router-dom"
import style from "./navigation.module.css"
export const Navigation = () => {
    return <nav><NavLink exact="true" to="/" className={({ isActive }) => (isActive ? `${ style.activeLink }` : `${ style.linkNav }`)}>Home</NavLink>
        <NavLink exact="true" to="/movies" className={({ isActive }) => (isActive ? `${style.activeLink}` : `${style.linkNav}`)}>Movies</NavLink>
    </nav>
}