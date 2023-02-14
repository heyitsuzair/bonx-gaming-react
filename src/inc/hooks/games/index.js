import { useMutation, useQuery } from "react-query";
import { Request, RequestConfig } from "../../config";

const onAddGame = (fields) => {
  RequestConfig.game.create.data = fields;
  return Request(RequestConfig.game.create);
};
const onGetGames = (fields) => {
  RequestConfig.games.readOwnerGame.data = fields;
  return Request(RequestConfig.games.readOwnerGame);
};
const onDeleteGame = (id) => {
  // Add ID To Object
  RequestConfig.game.delete.id = id;
  return Request(RequestConfig.game.delete);
};

export const useAddGame = () => {
  return useMutation(onAddGame);
};
export const useDeleteGame = () => {
  return useMutation(onDeleteGame);
};
export const useOwnerGames = () => {
  return useQuery("owner-games", onGetGames);
};
