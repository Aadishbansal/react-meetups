import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetups from "./components/pages/AllMeetups";
import FavoriteMeetups from "./components/pages/FavoriteMeetups";
import NewMeetup from "./components/pages/NewMeetup";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/add-new-meetups" element={<NewMeetup />} />
        <Route path="/my-favorites" element={<FavoriteMeetups />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
