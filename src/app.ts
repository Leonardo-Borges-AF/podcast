import * as http from "http";

import {
  getFilterEpisodes,
  getListEpisodes,
} from "./contollers/podcast-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/httpMethod";

export const app = async (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  const [baseUrl, queryString] = req.url?.split("?") || [];

  if (req.method === HttpMethod.GET && req.url === Routes.LIST) {
    await getListEpisodes(req, res);
  }
  if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisodes(req, res);
  }
};
