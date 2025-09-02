import { repositoryPodcast } from "../data/podcastRepository";

export const serviceFilterEpisodes = async (podcastName: string) => {
  const data = await repositoryPodcast(podcastName);

  return data;
};
