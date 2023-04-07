import { AxiosResponse } from "axios";
import { IMovie } from "types/IMovie";

export interface INowPlayingParams {
  language?: string;
  page?: number;
  region?: string;
}

export type INowPlayingResponse = AxiosResponse<{
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
  dates: {
    maximum: number;
    minimum: number;
  };
}>;

export type ITopRatedParams = INowPlayingParams;
export type ITopRatedResponse = INowPlayingResponse;
