import LazyImage from "components/LazyImage";
import { IMovie } from "types/IMovie";

interface Props {
  movies: IMovie[];
  loading: boolean;
  onSelect: (movieId: string) => void;
}

const GridView: React.FC<Props> = ({ movies, onSelect }) => {
  return (
    <div className="w-full mt-11 px-2 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-12">
      {movies.map((movie) => (
        <div key={movie.id} onClick={onSelect.bind(this, movie.id)} className="cursor-pointer relative p-3 overflow-hidden rounded-xl h-[714px] md:h-[374px] lg:h-[285px] ">
          <p className="z-[0] font-bold">{movie.original_title}</p>
          <LazyImage className="z-[1] absolute top-0 right-0 w-full h-full" src={movie.poster_path!} />
        </div>
      ))}
    </div>
  );
};

export default GridView;
