import { useMutation, useQuery } from "react-query";
import { Request, RequestConfig } from "../../config";

const onAddGame = (fields) => {
  RequestConfig.game.create.data = fields;
  return Request(RequestConfig.game.create);
};
const onGetOwnerGames = (fields) => {
  RequestConfig.games.readOwnerGame.data = fields;
  return Request(RequestConfig.games.readOwnerGame);
};
const onDeleteGame = (id) => {
  // Add ID To Object So It Can Be Appended With URL
  RequestConfig.game.delete.id = id;
  return Request(RequestConfig.game.delete);
};
const onEditGame = ([id, fields]) => {
  RequestConfig.game.update.data = fields;
  // Add ID To Object So It Can Be Appended With URL
  RequestConfig.game.update.id = id;
  return Request(RequestConfig.game.update);
};
const onGetGame = (id) => {
  // Add ID To Object So It Can Be Appended With URL
  RequestConfig.game.read.id = id;
  return Request(RequestConfig.game.read);
};

export const useAddGame = () => {
  return useMutation(onAddGame);
};
export const useEditGame = () => {
  return useMutation(onEditGame);
};
export const useDeleteGame = () => {
  return useMutation(onDeleteGame);
};
export const useOwnerGames = () => {
  return useQuery("owner-games", onGetOwnerGames);
};
export const useGame = (id) => {
  return useQuery(["game", id], () => onGetGame(id));
};
