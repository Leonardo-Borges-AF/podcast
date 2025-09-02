import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/listEpisodes-services";
import { serviceFilterEpisodes } from "../services/filterEpisodes-service";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceListEpisodes();
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceFilterEpisodes("flow");
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};
