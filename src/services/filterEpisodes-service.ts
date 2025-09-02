import { repositoryPodcast } from "../data/podcastRepository";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
) => {
  const queryString = podcastName?.split("?p=")[1];
  const data = await repositoryPodcast(queryString);

  return data;
};
