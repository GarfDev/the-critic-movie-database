import { AxiosResponse } from "axios";
import { IMovie } from "types/IMovie";

export interface INowPlayingParams {
  language?: string;
  page?: number;
  region?: string;
}

export type IListResponse = AxiosResponse<{
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
  dates: {
    maximum: number;
    minimum: number;
  };
}>;

export type INowPlayingResponse = IListResponse;

export type ITopRatedParams = INowPlayingParams;
export type ITopRatedResponse = INowPlayingResponse;

export interface ISearchParams extends INowPlayingParams {
  query?: string;
}

export type ISearchResponse = IListResponse;

export interface IMovieDetailParams {
  id: string;
}

export interface IMovieDetailResponse {
  data: IMovie;
}
