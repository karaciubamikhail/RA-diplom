import { NavLink } from "react-router-dom";

export const MenuFooter = () => {
    return (
        <ul className="nav flex-column">
            <li className="nav-item">
                <NavLink to='/about' className={"nav-link"}>О нас</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/catalog' className={"nav-link"}>Каталог</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/contacts' className={"nav-link"}>Контакты</NavLink>
            </li>
        </ul>
    )
  }
