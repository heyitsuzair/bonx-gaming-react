import React, { useEffect, useState } from "react";
import moment from "moment";
import { TextLg } from "../index";

const Date = ({ date }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const result = moment(date).fromNow();
    setTimeAgo(result);
  }, []);
  return <TextLg text={timeAgo} classes="!text-primary font-semibold" />;
};

export default Date;
