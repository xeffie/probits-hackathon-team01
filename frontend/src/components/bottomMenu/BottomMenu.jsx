import { NavLink } from "react-router-dom";
import "./bottomMenu.css";

export const BottomMenu = () => {
  return (
    <nav className="menu" aria-label="Huvudmeny">
      <NavLink to="/" end className="menu__button" aria-label="Hem">
        <i className="fa-solid fa-house icon" aria-hidden="true"></i>
      </NavLink>
      <NavLink to="/calendar" className="menu__button" aria-label="Kalender">
        <i className="fa-solid fa-calendar icon" aria-hidden="true"></i>
      </NavLink>
      <NavLink to="/community" className="menu__button" aria-label="Community">
        <i className="fa-solid fa-user-group icon" aria-hidden="true"></i>
      </NavLink>
      <NavLink to="/coaching" className="menu__button" aria-label="Coachning">
      <i className="fa-solid fa-message icon" aria-hidden="true"></i>
    </NavLink>
    </nav>
  );
};