import React from "react";
import { Text2Xl, TextLg } from "../../inc/components/commons";
import { bytesToMbs } from "../../inc/utils";

const AdditionalInfo = ({
  updatedAt,
  game_file,
  installs,
  current_version,
  owner_id,
}) => {
  /**
   * Split Date Only
   */
  const lastUpdated = updatedAt.split("T")[0];
  return (
    <div className="bg-secondary-70 p-10 rounded-xl">
      <Text2Xl text="Additional Information:" classes="font-bold" />
      <div className="mt-6 md:mt-10">
        <div className="flex flex-col md:flex-row gap-5 items-start justify-between">
          <div className="w-full">
            <TextLg text="UPDATED:" classes="font-bold" />
            <TextLg text={lastUpdated} classes="mt-4" />
          </div>
          <div className="w-full">
            <TextLg text="SIZE:" classes="font-bold" />
            <TextLg text={bytesToMbs(game_file.size)} classes="mt-4" />
          </div>
          <div className="w-full">
            <TextLg text="INSTALLS:" classes="font-bold" />
            <TextLg text={installs} classes="mt-4" />
          </div>
          <div className="w-full">
            <TextLg text="CURRENT VERSION:" classes="font-bold" />
            <TextLg text={current_version} classes="mt-4" />
          </div>
          <div className="w-full">
            <TextLg text="PUBLISHED BY:" classes="font-bold" />
            <TextLg text={owner_id.name} classes="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
