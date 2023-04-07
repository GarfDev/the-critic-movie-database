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