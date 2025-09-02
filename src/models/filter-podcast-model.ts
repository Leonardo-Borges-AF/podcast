import { Podcast } from "./podcast-model";

export interface FilterPodcastModel {
  StatusCode: number;
  body: Podcast[];
}
