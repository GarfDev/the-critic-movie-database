import RequestService from "../Request";
import { BASE_CONFIG } from "./constants";
import { INowPlayingParams, INowPlayingResponse, ITopRatedParams, ITopRatedResponse } from "./types";

export default class TMDBService extends RequestService {
  async getNowPlaying(params: INowPlayingParams) {
    const response: INowPlayingResponse = await this.get({
      ...BASE_CONFIG,
      method: "GET",
      url: "/movie/now_playing",
      params: { ...BASE_CONFIG["params"], ...params },
    });

    return response;
  }

  async getTopRated(params: ITopRatedParams) {
    const response: ITopRatedResponse = await this.get({
      ...BASE_CONFIG,
      method: "GET",
      url: "/movie/top_rated",
      params: { ...BASE_CONFIG["params"], ...params },
    });

    return response;
  }
}
