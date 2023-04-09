import LazyImage from "components/LazyImage";
import { IMovie } from "types/IMovie";

interface Props {
  movies: IMovie[];
}

const ListView: React.FC<Props> = ({ movies }) => {
  return (
    <div className="w-full mt-11 px-2 flex flex-col">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="cursor-pointer my-3 relative p-3 flex overflow-hidden rounded-xl h-[714px] md:h-[374px] lg:h-[285px] "
        >
          <LazyImage className="rounded-md overflow-hidden h-full" src={movie.poster_path!} />
          <div className="ml-5 flex-1 flex flex-col">
            <p className="font-bold text-xl">{movie.title}<span className="text-sm ml-1 pb-2 font-normal">({movie.release_date})</span></p>
            <p className="mt-2"><span>{movie.overview}</span></p>
          </div>

          <LazyImage className="z-[-1] absolute top-0 left-0 w-full h-full opacity-25 blur-sm" src={movie.backdrop_path!} />
        </div>
      ))}
    </div>
  );
};

export default ListView;
