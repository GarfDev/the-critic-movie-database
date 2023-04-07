import { AxiosRequestConfig } from "axios";
import {
  THE_MOVIE_DATABASE_API,
  THE_MOVIE_DATABASE_API_TOKEN,
} from "configs/secrets";

export const BASE_CONFIG: AxiosRequestConfig = {
  baseURL: THE_MOVIE_DATABASE_API,
  params: { api_key: THE_MOVIE_DATABASE_API_TOKEN },
};
