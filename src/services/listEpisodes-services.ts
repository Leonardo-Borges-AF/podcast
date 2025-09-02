import { repositoryPodcast } from "../data/podcastRepository";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<FilterPodcastModel> => {
  let responseFormat: FilterPodcastModel = {
    body: [],
    StatusCode: 0,
  };

  const data = await repositoryPodcast();
  if (data.length !== 0) {
    responseFormat.StatusCode = StatusCode.OK;
  } else {
    responseFormat.StatusCode = StatusCode.NO_CONTENT;
  }

  responseFormat.body = data;
  return responseFormat;
};
