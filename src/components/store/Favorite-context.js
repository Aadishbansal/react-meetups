import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorties: [],
  totalFavorties: 0,
  addFavorite: (meetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavoriteContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const handleAddFavorite = (meetup) => {
    setFavorites((prevState) => {
      return prevState.concat(meetup);
    });
  };
  const handleRemoveFavorite = (meetupId) => {
    setFavorites((prevState) => {
      return prevState.filter((meetup) => meetup.id !== meetupId);
    });
  };
  const handleItemIsFavorite = (meetupId) => {
    return favorites.some((meetup) => {
      return meetup.id === meetupId;
    });
  };

  const context = {
    favorites,
    totalFavorties: favorites.length,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    itemIsFavorite: handleItemIsFavorite,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
};
export default FavoriteContext;
