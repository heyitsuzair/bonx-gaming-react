import React from "react";
import { PlainButton, IconPlain } from "../../../inc/components/commons";
import { Link, useNavigate } from "react-router-dom";
import { RoutesPath } from "../../../inc/config";

const MyGames = () => {
  const navigate = useNavigate();

  const editGame = (id) => {
    navigate(
      RoutesPath.dashboard.main + RoutesPath.dashboard.myGames + `/${id}`
    );
  };

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
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                  Installs
                </th>
                <th scope="col" className="px-6 py-3 bg-secondary-70">
                  Version
                </th>
                <th scope="col" className="px-6 py-3 bg-secondary-90">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-secondary-90 cursor-pointer">
                <th
                  onClick={() => editGame(2)}
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap bg-secondary-70"
                >
                  Apple MacBook Pro 17"
                </th>
                <td onClick={() => editGame(2)} className="px-6 py-4">
                  Lorem ipsum dolor sit amet.
                </td>
                <td
                  onClick={() => editGame(2)}
                  className="px-6 py-4 bg-secondary-70"
                >
                  2 Days Ago
                </td>
                <td onClick={() => editGame(2)} className="px-6 py-4">
                  20 MB
                </td>
                <td
                  onClick={() => editGame(2)}
                  className="px-6 py-4 bg-secondary-70"
                >
                  1000+
                </td>
                <td onClick={() => editGame(2)} className="px-6 py-4">
                  1.0.0
                </td>
                <td className="px-6 py-4 bg-secondary-70">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="bg-red-400 w-10 h-10 rounded"
                      onClick={(e) => alert("del")}
                    >
                      <IconPlain classes="fa fa-trash !text-sm" />
                    </button>
                    <button
                      onClick={() => editGame(2)}
                      className="bg-sky-400 w-10 h-10 flex items-center justify-center rounded"
                      type="button"
                    >
                      <IconPlain classes="fa fa-pencil !text-sm" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyGames;
