import React, { Fragment } from "react";
import {
  PlainButton,
  SpinnerSmall,
  TextMd,
} from "../../../inc/components/commons";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../../inc/config";
import { useOwnerGames } from "../../../inc/hooks/games";
import TableRow from "./TableRow";
import { useAuth } from "../../../inc/hooks/auth";

const MyGames = () => {
  const navigate = useNavigate();

  // Custom Hooks
  const { user } = useAuth();
  const { data: games, isLoading } = useOwnerGames(user.token);

  return (
    <div id="my-games" className="min-h-screen">
      <PlainButton
        text="Add Game"
        size="large"
        icon="fa fa-plus"
        onClick={() =>
          navigate(RoutesPath.dashboard.main + RoutesPath.dashboard.addGame)
        }
      />
      <div className="games my-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:w-[98%]">
          <table className="w-full text-sm text-left text-white">
            <thead className="text-xs text-white uppercase">
              <tr>
                <th scope="col" className="px-6 py-3 bg-secondary-90">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 bg-secondary-70">
                  Short Description
                </th>
                <th scope="col" className="px-6 py-3 bg-secondary-90">
                  Last Updated
                </th>
                <th scope="col" className="px-6 py-3 bg-secondary-70">
                  Size
                </th>
                <th scope="col" className="px-6 py-3 bg-secondary-90">
                  Version
                </th>
                <th scope="col" className="px-6 py-3 bg-secondary-70">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={12} className="text-center py-5">
                    <SpinnerSmall />
                  </td>
                </tr>
              ) : games.data.length > 0 ? (
                games.data.map((game) => {
                  return (
                    <Fragment key={game._id}>
                      <TableRow {...game} />
                    </Fragment>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={12} className="text-center py-5">
                    <TextMd text="No Games Found" />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyGames;
