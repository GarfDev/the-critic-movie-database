import LazyImage from "components/LazyImage";
import Modal from "components/Modal";
import { useQuery } from "react-query";
import { TMDBService } from "services";

interface Props {
  selected: string | undefined;
  onClose: () => void;
}

const DetailModal: React.FC<Props> = ({ selected, onClose }) => {
  const { data } = useQuery(`movie-${selected}`, () => TMDBService.getDetail({ id: selected! }), { enabled: !!selected });

  const detail = data?.data;

  return (
    <Modal className="w-[1024px] h-[554px] transition-all" open={!!selected} onClose={onClose}>
      <div className="relative w-full p-5 h-full flex text-white flex-col">
        <div className="z-10 flex flex-col">
            <p className="font-bold text-xl">
              {detail?.title} (<span className="font-bold text-sm">{detail?.status}</span>)
            </p>
            <p className="mt-1 font-normal">{detail?.tagline}</p>
            <p className="mt-5 font-semibold">
              Genres: <span className="font-normal">{detail?.genres?.map((genre) => genre.name)?.join(", ")}</span>
            </p>
            <p className="mt-1 font-semibold">
              Release Date: <span className="font-normal">{detail?.release_date}</span>
            </p>
            <p className="mt-1 font-semibold">
              Homepage: <span className="font-normal">{detail?.homepage}</span>
            </p>
            <p className="mt-1 font-semibold">
              Vote average: <span className="font-normal">{detail?.vote_average}</span>
            </p>
            <p className="mt-1 font-semibold">
              Language: <span className="font-normal">{detail?.original_language.toUpperCase()}</span>
            </p>
          <p className="mt-5">{detail?.overview}</p>
        </div>

        {detail && (
          <LazyImage
            className="z-[0] absolute top-0 left-0 w-full h-full grayscale brightness-[0.2]"
            src={detail!.backdrop_path!}
          />
        )}
      </div>
    </Modal>
  );
};

export default DetailModal;
