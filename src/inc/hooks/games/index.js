import { useMutation, useQuery } from "react-query";
import { Request, RequestConfig, RoutesPath } from "../../config";

const onAddGame = (fields) => {
  RequestConfig.game.create.data = fields;
  return Request(RequestConfig.game.create);
};
const onGetGames = (fields) => {
  RequestConfig.games.readOwnerGame.data = fields;
  return Request(RequestConfig.games.readOwnerGame);
};

export const useAddGame = () => {
  return useMutation(onAddGame);
};
export const useOwnerGames = () => {
  return useQuery("owner-games", onGetGames);
};
