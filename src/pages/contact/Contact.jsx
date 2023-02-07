import React, { useEffect } from "react";
import { BreadcrumbTopPage } from "../../inc/components/commons";

const Contact = ({ setProgress }) => {
  useEffect(() => {
    setProgress(70);
    setProgress(100);
    setTimeout(() => {
      setProgress(0);
    }, 500);
  }, []);

  return (
    <div id="contact">
      <BreadcrumbTopPage text="CONTACT US" />
    </div>
  );
};

export default Contact;
