import { addSelectVenue } from "@features/question/questionSlice";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CreateVenuePage from "../../components/question/Venue";
import Website from "../../components/question/website";

const index = () => {
  const [venue, setVenue] = React.useState(false);
  const { query } = useRouter();
  const dispatch = useDispatch();

  console.log(query);

  useEffect(() => {
    if (query.venueId) {
      window.localStorage.setItem("beweddy_user_role", "couple");
      setVenue(false);
    }
  }, [query.venueId]);

  useEffect(() => {
    setVenue(
      window.localStorage.getItem("beweddy_user_role") === "venue"
        ? true
        : false
    );
  }, []);

  useEffect(() => {
    if (query.venueId) {
      dispatch(addSelectVenue(query.venueId));
    }
  }, [query.venueId]);

  return <div>{venue ? <CreateVenuePage /> : <Website />}</div>;
};

export default index;
