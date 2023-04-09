import instance from "configs/axios";
import { BASE_CONFIG } from "./constants";
import {
  IListResponse,
  IMovieDetailParams,
  IMovieDetailResponse,
  INowPlayingParams,
  INowPlayingResponse,
  ISearchParams,
  ITopRatedParams,
  ITopRatedResponse,
} from "./types";

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

  getDetail: async (params: IMovieDetailParams) => {
    const response: IMovieDetailResponse = await instance({
      ...BASE_CONFIG,
      method: "GET",
      url: "/movie/" + params.id,
      params: { ...BASE_CONFIG["params"] },
    });

    return response;
  },

  search: async (params: ISearchParams) => {
    const response: IListResponse = await instance({
      ...BASE_CONFIG,
      method: "GET",
      url: "/search/movie",
      params: { ...params, ...BASE_CONFIG["params"] },
    });

    return response;
  },
};

export default TMDBService;
