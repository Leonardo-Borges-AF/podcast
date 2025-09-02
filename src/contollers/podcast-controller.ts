import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/listEpisodes-services";
import { serviceFilterEpisodes } from "../services/filterEpisodes-service";
import { ContentType } from "../utils/content-type";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { serviceFilterByVideoId } from "../services/filterByVideoId";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: FilterPodcastModel = await serviceListEpisodes();

  res.writeHead(content.StatusCode, { "content-type": ContentType.JSON });
  res.write(JSON.stringify(content.body));

  res.end();
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: FilterPodcastModel = await serviceFilterEpisodes(req.url);

  res.writeHead(content.StatusCode, { "content-type": ContentType.JSON });
  res.write(JSON.stringify(content.body));

  res.end();
};

export const getFilterByVideoId = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: FilterPodcastModel = await serviceFilterByVideoId(req.url);

  res.writeHead(content.StatusCode, { "content-type": ContentType.JSON });
  res.write(JSON.stringify(content.body));

  res.end();
};
