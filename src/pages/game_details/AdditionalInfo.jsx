import React from "react";
import { Text2Xl, TextLg } from "../../inc/components/commons";

const AdditionalInfo = () => {
  return (
    <div className="bg-secondary-70 p-10 rounded-xl">
      <Text2Xl text="Additional Information:" classes="font-bold" />
      <div className="mt-6 md:mt-10">
        <div className="flex flex-col md:flex-row gap-5 items-start justify-between">
          <div className="w-full">
            <TextLg text="UPDATED:" classes="font-bold" />
            <TextLg text="2022-03-01" classes="mt-4" />
          </div>
          <div className="w-full">
            <TextLg text="SIZE:" classes="font-bold" />
            <TextLg text="20MB" classes="mt-4" />
          </div>
          <div className="w-full">
            <TextLg text="INSTALLS:" classes="font-bold" />
            <TextLg text="100+" classes="mt-4" />
          </div>
          <div className="w-full">
            <TextLg text="CURRENT VERSION:" classes="font-bold" />
            <TextLg text="1.2.1" classes="mt-4" />
          </div>
          <div className="w-full">
            <TextLg text="PUBLISHED BY:" classes="font-bold" />
            <TextLg text="Muhammad Uzair" classes="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
