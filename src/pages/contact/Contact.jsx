import React, { useEffect } from "react";

const Contact = ({ setProgress }) => {
  useEffect(() => {
    setProgress(70);
    setProgress(100);
    setTimeout(() => {
      setProgress(0);
    }, 500);
  }, []);

  return <div id="contact"></div>;
};

export default Contact;
