import { useMutation } from "react-query";
import { Request, RequestConfig, RoutesPath } from "../../config";

const onAddGame = (fields) => {
  RequestConfig.games.create.data = fields;
  return Request(RequestConfig.games.create);
};

export const useAddGame = () => {
  return useMutation(onAddGame);
};
