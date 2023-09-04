import { useContext } from "react";
import MeetupList from "../meetups/MeetupList";
import FavoriteContext from "../store/Favorite-context";

const FavoriteMeetups = () => {
  const favoritesCtx = useContext(FavoriteContext);

  return (
    <div className="container mt-3">
      <h2>Favorite Meetups</h2>
      {favoritesCtx.totalFavorties === 0 ? (
        <p>you have no favorites yet. Start adding some</p>
      ) : (
        <MeetupList meetups={favoritesCtx.favorites} />
      )}
    </div>
  );
};
export default FavoriteMeetups;
