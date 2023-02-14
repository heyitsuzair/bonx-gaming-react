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
const onGetGames = () => {
  return Request(RequestConfig.games.read);
};
const onSearchGames = ([category, query]) => {
  RequestConfig.games.search.params.category = category;
  RequestConfig.games.search.params.query = query;
  return Request(RequestConfig.games.search);
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
export const useGames = (id) => {
  return useQuery("games", onGetGames);
};
export const useSearchGames = (id) => {
  return useMutation("search-games", onSearchGames);
};
