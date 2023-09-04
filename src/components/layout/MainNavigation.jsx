import { useContext } from "react";
import { NavLink } from "react-router-dom";
import FavoriteContext from "../store/Favorite-context";
const MainNavigation = () => {
  const favoritesCtx = useContext(FavoriteContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink
          className={`navbar-brand ${({ isActive }) =>
            isActive ? " active" : ""}`}
          to="/"
        >
          Meetups
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              className={`nav-link ${({ isActive }) =>
                isActive ? " active" : ""}`}
              aria-current="page"
              to="/"
            >
              All Meetups
            </NavLink>
            <NavLink
              className={`nav-link ${({ isActive }) =>
                isActive ? " active" : ""}`}
              to="/add-new-meetups"
            >
              Add New Meetup
            </NavLink>
            <NavLink
              className={`nav-link ${({ isActive }) =>
                isActive ? " active" : ""}`}
              to="/my-favorites"
            >
              My Favorites
              <button
                type="button"
                className="btn btn-secondary ms-1 px-2 py-0"
              >
                {favoritesCtx.totalFavorties}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default MainNavigation;
