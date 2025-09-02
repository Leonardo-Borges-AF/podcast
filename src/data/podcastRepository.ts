import { promises } from "dns";
import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-model";

const pathData = path.join(__dirname, "../data/podcast.json");

export const repositoryPodcast = async (
  podcastName?: string
): Promise<Podcast[]> => {
  const rawData = fs.readFileSync(pathData, "utf-8");
  let jsonFile = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (item: Podcast) => item.podcastName === podcastName
    );
  }

  return jsonFile;
};
