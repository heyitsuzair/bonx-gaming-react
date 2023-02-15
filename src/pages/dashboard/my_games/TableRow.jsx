import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Date,
  ErrorMessage,
  IconPlain,
  SpinnerSmall,
  SuccessMessage,
} from "../../../inc/components/commons";
import { RoutesPath } from "../../../inc/config";
import { useDeleteGame } from "../../../inc/hooks/games";
import { substring, bytesToMbs } from "../../../inc/utils";
import { useQueryClient } from "react-query";
import { useAuth } from "../../../inc/hooks/auth";

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

  /**
   * RQ Helpers
   */
  const queryClient = useQueryClient();

  const { user } = useAuth();

  // Custom Hooks
  const { mutate, isLoading } = useDeleteGame();

  const onSuccess = ({ data, status, response }) => {
    if (status !== 200) return ErrorMessage(response.data.msg);
    SuccessMessage(data.msg);

    queryClient.setQueryData(["owner-games", user.token], (oldData) => {
      /**
       * Filter Deleted Game
       */
      const newData = oldData.data.filter((data) => data._id !== _id);

      return { ...oldData, data: newData };
    });
  };

  const onError = ({ message }) => {
    ErrorMessage(message);
  };

  const onEditGame = (id) => {
    navigate(
      RoutesPath.dashboard.main + RoutesPath.dashboard.myGames + `/${id}`
    );
  };

  /**
   *
   * @function onDeleteGame
   *
   * Triggers When Someone Press On Trash Icon
   *
   * @param {string} id Is The ID Of Game To Be Deleted
   *
   * @calls Mutate Function Of useDeleteGame() Hook
   */

  const onDeleteGame = (id) => {
    mutate([id, user.token], {
      onError,
      onSuccess,
    });
  };

  return (
    <tr className="border-b border-secondary-90 cursor-pointer">
      <th
        onClick={() => onEditGame(_id)}
        scope="row"
        className="px-6 py-4 font-medium text-white whitespace-nowrap bg-secondary-70"
      >
        {title}
      </th>
      <td onClick={() => onEditGame(_id)} className="px-6 py-4">
        {substring(short_description)}
      </td>
      <td onClick={() => onEditGame(_id)} className="px-6 py-4 bg-secondary-70">
        <Date isSmall date={updateAt} />
      </td>
      <td onClick={() => onEditGame(_id)} className="px-6 py-4">
        {bytesToMbs(game_file.size)}
      </td>

      <td onClick={() => onEditGame(_id)} className="px-6 py-4 bg-secondary-70">
        {current_version}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          {isLoading ? (
            <SpinnerSmall />
          ) : (
            <button
              type="button"
              className="bg-red-400 w-10 h-10 rounded"
              onClick={() => onDeleteGame(_id)}
            >
              <IconPlain classes="fa fa-trash !text-sm" />
            </button>
          )}
          <button
            onClick={() => onEditGame(_id)}
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
