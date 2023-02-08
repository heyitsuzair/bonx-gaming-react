import React from "react";
import { PlainButton, IconPlain } from "../../../inc/components/commons";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../../inc/config";

const MyGames = () => {
  const navigate = useNavigate();

  return (
    <div id="my-games">
      <PlainButton text="Add Game" icon="fa fa-plus" size="large" />
      <div className="games my-5">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-white">
            <thead class="text-xs text-white uppercase">
              <tr>
                <th scope="col" class="px-6 py-3 bg-secondary-90">
                  Title
                </th>
                <th scope="col" class="px-6 py-3 bg-secondary-70">
                  Short Description
                </th>
                <th scope="col" class="px-6 py-3 bg-secondary-90">
                  Last Updated
                </th>
                <th scope="col" class="px-6 py-3 bg-secondary-70">
                  Size
                </th>
                <th scope="col" class="px-6 py-3 bg-secondary-90">
                  Installs
                </th>
                <th scope="col" class="px-6 py-3 bg-secondary-70">
                  Version
                </th>
                <th scope="col" class="px-6 py-3 bg-secondary-90">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="border-b border-secondary-90 cursor-pointer"
                onClick={() => navigate(RoutesPath.dashboard.myGames)}
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-white whitespace-nowrap bg-secondary-70"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">Lorem ipsum dolor sit amet.</td>
                <td class="px-6 py-4 bg-secondary-70">2 Days Ago</td>
                <td class="px-6 py-4">20 MB</td>
                <td class="px-6 py-4 bg-secondary-70">1000+</td>
                <td class="px-6 py-4">1.0.0</td>
                <td class="px-6 py-4 bg-secondary-70">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="bg-red-400 w-10 h-10 rounded"
                      onClick={() => alert("del")}
                    >
                      <IconPlain classes="fa fa-trash !text-sm" />
                    </button>
                    <button
                      type="button"
                      className="bg-sky-400 w-10 h-10 rounded"
                      onClick={() => alert("edit")}
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
