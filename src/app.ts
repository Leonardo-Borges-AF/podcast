import * as http from "http";

import {
  getFilterByVideoId,
  getFilterEpisodes,
  getListEpisodes,
} from "./contollers/podcast-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/httpMethod";

export const app = async (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  const baseUrl = req.url?.split("?")[0];

  if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(req, res);
  }
  if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisodes(req, res);
  }
  if (req.method === HttpMethod.GET && baseUrl === Routes.VideoId) {
    await getFilterByVideoId(req, res);
  }
};
