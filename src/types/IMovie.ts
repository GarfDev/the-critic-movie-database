export interface IMovie {
  id: string;
  title: string;
  overview: string;
  poster_path: string | null;
  adult: boolean;
  release_date: string;
  genre_ids: number[];
  original_title: string;
  original_language: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface IMovieGenres {
  id: string;
  name: string;
}

export interface IMovieProductionCompanies {
  id: string;
  name: string;
  logo_path: string;
  origin_country: string;
}

export enum MOVIE_STATUS {
  RUMORED = "Rumored",
  PLANNED = "Planned",
  POST_PRODUCTION = "Post Production",
  IN_PRODUCTION = "In Production",
  RELEASED = "Released",
  CANCELED = "Canceled",
}

export interface IMovieDetail extends IMovie {
  belongs_to_collection: any;
  genres: IMovieGenres[];
  homepage: string;
  imdb_id: string;
  revenue: string;
  runtime: string;
  budget: number;
  status: MOVIE_STATUS;
  tagline: string;
}
