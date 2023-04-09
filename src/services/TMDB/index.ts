import instance from "configs/axios";
import { BASE_CONFIG } from "./constants";
import { INowPlayingParams, INowPlayingResponse, ITopRatedParams, ITopRatedResponse } from "./types";

const TMDBService = {
  getNowPlaying: async (params: INowPlayingParams) => {
    const response: INowPlayingResponse = await instance({
      ...BASE_CONFIG,
      method: "GET",
      url: "/movie/now_playing",
      params: { ...params, ...BASE_CONFIG["params"] },
    });

    return response;
  },

  getTopRated: async (params: ITopRatedParams) => {
    const response: ITopRatedResponse = await instance({
      ...BASE_CONFIG,
      method: "GET",
      url: "/movie/top_rated",
      params: { ...params, ...BASE_CONFIG["params"] },
    });

    return response;
  },
};

export default TMDBService;
