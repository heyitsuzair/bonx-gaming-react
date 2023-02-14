import React, { useEffect, useState } from "react";
import moment from "moment";
import { TextLg, TextSm } from "../index";

const Date = ({ date, isSmall }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const result = moment(date).fromNow();

    setTimeAgo(result);
  }, []);
  if (isSmall) return <TextSm text={timeAgo} classes="font-semibold" />;
  return (
    <TextLg text={timeAgo} classes="!text-primary font-semibold capitalize" />
  );
};

export default Date;
