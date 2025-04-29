import { NavLink } from "react-router-dom";

export const Menu = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <NavLink to='/' className={"nav-link"}>Главная</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/catalog' className={"nav-link"}>Каталог</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/about' className={"nav-link"}>О нас</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/contacts' className={"nav-link"}>Контакты</NavLink>
            </li>
        </ul>
    )
}
