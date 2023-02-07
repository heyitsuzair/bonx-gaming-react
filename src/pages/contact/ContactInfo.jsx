import React from "react";
import { Cards } from "../../inc/config/Cards";
import { CardTitleDescription } from "../../inc/components/commons";

const ContactInfo = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-between md:my-16">
        {Cards.contact.map((card) => {
          return <CardTitleDescription key={card.img} {...card} />;
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
