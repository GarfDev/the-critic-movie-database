import dotenv from "dotenv";

dotenv.config();

export const THE_MOVIE_DATABASE_API = "https://api.themoviedb.org/3";
export const THE_MOVIE_DATABASE_API_TOKEN =
  process.env["THE_MOVIE_DATABASE_API_TOKEN"];
