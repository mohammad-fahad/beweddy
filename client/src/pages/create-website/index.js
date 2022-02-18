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

  useEffect(() => {
    setVenue(
      window.localStorage.getItem("beweddy_user_role") === "venue"
        ? true
        : false
    );
  }, []);

  useEffect(() => {
    if (query.venue) {
      dispatch(addSelectVenue(query.venue));
    }
  }, [query]);

  return <div>{venue ? <CreateVenuePage /> : <Website />}</div>;
};

export default index;
