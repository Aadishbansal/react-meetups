import { useContext } from "react";
import classes from "./MeetupItem.module.css";
import FavoriteContext from "../store/Favorite-context";

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoriteContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  const toggleFavotireMeetup = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      const meetup = {
        id: props.id,
        title: props.title,
        imageUrl: props.image,
        description: props.description,
        address: props.address,
      };
      favoritesCtx.addFavorite(meetup);
    }
  };
  return (
    <div className={`card my-3 text-center overflow-auto ${classes.card}`}>
      <img src={props.image} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">{props.address}</p>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={toggleFavotireMeetup}
        >
          {itemIsFavorite ? "Remove from Favorite" : "Add to Favorite"}
        </button>
      </div>
    </div>
  );
};
export default MeetupItem;
