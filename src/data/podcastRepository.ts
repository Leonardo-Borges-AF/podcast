import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-model";

const pathData = path.join(__dirname, "../data/podcast.json");

export const repositoryPodcast = async (
  podcastName?: string,
  videoId?: string
): Promise<Podcast[]> => {
  const rawData = fs.readFileSync(pathData, "utf-8");
  let jsonFile = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (item: Podcast) => item.podcastName === podcastName
    );
  }
  if (videoId) {
    jsonFile = jsonFile.filter((item: Podcast) => item.videoId === videoId);
  }

  return jsonFile;
};
