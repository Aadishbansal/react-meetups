import { useEffect, useState } from "react";
import MeetupList from "../meetups/MeetupList";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://FOO/meetups.json")
      .then((res) => res.json())
      .then((res) => {
        if (res && res.error) {
          throw Error(res);
        }
        const meetups = [];
        for (const key in res) {
          const meetup = {
            id: key,
            ...res[key],
          };
          meetups.push(meetup);
        }
        setLoadedMeetups(meetups);
      })
      .catch((err) => {
        console.log(err);
        console.log("something went wrong");
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className="container mt-3">
      <h2>All Meetups</h2>
      {isLoading ? <p>Loading</p> : <MeetupList meetups={loadedMeetups} />}
    </div>
  );
};
export default AllMeetups;
