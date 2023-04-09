import LazyImage from "components/LazyImage";
import { IMovie } from "types/IMovie";

interface Props {
  movies: IMovie[];
}

const GridView: React.FC<Props> = ({ movies }) => {
  return (
    <div className="w-full mt-11 px-2 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-12">
      {movies.map((movie) => (
        <div key={movie.id} className="relative p-3 overflow-hidden rounded-xl h-[274px]">
          {movie.original_title}
          <LazyImage className="absolute top-0 right-0 w-full h-full" src={movie.poster_path!} />
        </div>
      ))}
    </div>
  );
};

export default GridView;
