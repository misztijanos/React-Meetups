import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";

const MainNavigation = () => {
  const favouriteCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>

      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">
              Favourites
              <span className={classes.badge}>
                {favouriteCtx.totalfavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
