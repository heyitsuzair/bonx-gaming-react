import React, { useEffect } from "react";
import { BreadcrumbTopPage } from "../../inc/components/commons";
import ContactInfo from "./ContactInfo";
import GetInTouch from "./GetInTouch";

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
      <section className="my-20">
        <ContactInfo />
      </section>
      <section className="my-20 px-10 md:px-20">
        <GetInTouch />
      </section>
    </div>
  );
};

export default Contact;
