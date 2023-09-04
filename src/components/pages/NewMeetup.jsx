import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../meetups/NewMeetupForm";

const NewMeetup = () => {
  const navigate = useNavigate();
  const handleAddMeetup = (meetup) => {
    fetch("https://FOO/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate("/");
      })
      .catch();
  };

  return (
    <div className="container mt-3">
      <h2>New Meetup</h2>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </div>
  );
};
export default NewMeetup;
