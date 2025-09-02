import { repositoryPodcast } from "../data/podcastRepository";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterByVideoId = async (
  videoId: string | undefined
): Promise<FilterPodcastModel> => {
  let responseFormat: FilterPodcastModel = {
    body: [],
    StatusCode: 0,
  };
  const queryString = videoId?.split("?v=")[1];
  const data = await repositoryPodcast(undefined, queryString);

  if (data.length !== 0) {
    responseFormat.StatusCode = StatusCode.OK;
  } else {
    responseFormat.StatusCode = StatusCode.NO_CONTENT;
  }

  responseFormat.body = data;
  return responseFormat;
};
