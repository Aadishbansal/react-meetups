import { Link } from "react-router-dom";
import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
  const { meetups } = props;
  let content;
  if (!meetups || meetups.length === 0) {
    content = (
      <div>
        No meetups to display. Start adding some{" "}
        <Link
          to="/add-new-meetups"
          className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        >
          click here
        </Link>
      </div>
    );
  } else {
    content = (
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8">
            {props.meetups.map((meetup) => (
              <MeetupItem
                key={meetup.id}
                id={meetup.id}
                title={meetup.title}
                image={meetup.imageUrl}
                address={meetup.address}
                description={meetup.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return content;
};
export default MeetupList;
