import { repositoryPodcast } from "../data/podcastRepository";

export const serviceListEpisodes = async () => {
  const data = await repositoryPodcast();
  return data;
};
