import React from "react";
import { useNavigate } from "react-router-dom";
import { Date, IconPlain } from "../../../inc/components/commons";
import { RoutesPath } from "../../../inc/config";
import { substring, bytesToMbs } from "../../../inc/utils";

const TableRow = ({
  _id,
  title,
  short_description,
  installs,
  current_version,
  updateAt,
  game_file,
}) => {
  const navigate = useNavigate();
  const editGame = (id) => {
    navigate(
      RoutesPath.dashboard.main + RoutesPath.dashboard.myGames + `/${id}`
    );
  };

  return (
    <tr className="border-b border-secondary-90 cursor-pointer">
      <th
        onClick={() => editGame(_id)}
        scope="row"
        className="px-6 py-4 font-medium text-white whitespace-nowrap bg-secondary-70"
      >
        {title}
      </th>
      <td onClick={() => editGame(_id)} className="px-6 py-4">
        {substring(short_description)}
      </td>
      <td onClick={() => editGame(_id)} className="px-6 py-4 bg-secondary-70">
        <Date isSmall date={updateAt} />
      </td>
      <td onClick={() => editGame(_id)} className="px-6 py-4">
        {bytesToMbs(game_file.size)}
      </td>

      <td onClick={() => editGame(_id)} className="px-6 py-4 bg-secondary-70">
        {current_version}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="bg-red-400 w-10 h-10 rounded"
            onClick={(e) => alert("del")}
          >
            <IconPlain classes="fa fa-trash !text-sm" />
          </button>
          <button
            onClick={() => editGame(_id)}
            className="bg-sky-400 w-10 h-10 flex items-center justify-center rounded"
            type="button"
          >
            <IconPlain classes="fa fa-pencil !text-sm" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
