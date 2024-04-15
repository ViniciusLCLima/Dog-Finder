import { NavLink } from "react-router-dom"
import "./Nav.css"




const Nav =(props)=>{

    return <nav>
        <NavLink to="" className={({ isActive }) => (isActive ? "active-link" : "")} end>Home page</NavLink>
        {props.dogs.map(dog => <NavLink to={dog.name} className={({ isActive }) => (isActive ? "active-link" : "")}>{dog.name}</NavLink> )}
    </nav>
}

export default Nav