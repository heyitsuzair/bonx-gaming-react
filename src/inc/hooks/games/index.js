import { useMutation, useQuery } from "react-query";
import { Request, RequestConfig } from "../../config";

const onAddGame = ([fields, token]) => {
  RequestConfig.game.create.token = token;
  RequestConfig.game.create.data = fields;
  return Request(RequestConfig.game.create);
};
export const onGetOwnerGames = (token) => {
  RequestConfig.games.readOwnerGame.token = token;
  return Request(RequestConfig.games.readOwnerGame);
};
const onDeleteGame = ([id, token]) => {
  RequestConfig.game.delete.token = token;
  // Add ID To Object So It Can Be Appended With URL
  RequestConfig.game.delete.id = id;
  return Request(RequestConfig.game.delete);
};
const onEditGame = ([id, fields, token]) => {
  RequestConfig.game.update.token = token;
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
export const useOwnerGames = (token) => {
  return useQuery(["owner-games", token], () => onGetOwnerGames(token));
};
export const useGame = (id) => {
  return useQuery(["game", id], () => onGetGame(id), {
    refetchOnWindowFocus: false,
  });
};
export const useGames = () => {
  return useQuery("games", onGetGames);
};
export const useSearchGames = () => {
  return useMutation("search-games", onSearchGames);
};
