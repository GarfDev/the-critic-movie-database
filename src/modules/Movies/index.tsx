import { useMemo, useState } from "react";
import { SEARCH_OFFSET, SHOW_MODE, SHOW_TYPE } from "./constants";
import { GridView, ListView, ModePicker, SearchBar, TypePicker } from "./components";
import { useQuery } from "react-query";
import { TMDBService } from "services";
import DetailModal from "./components/DetailModal";

export const Movies: React.FC = () => {
  const [mode, setMode] = useState(SHOW_MODE.LIST);
  const [type, setType] = useState(SHOW_TYPE.TOP_RATED);
  const [selected, setSelected] = useState<string | undefined>();
  const [search, setSearch] = useState("");

  /**
   * QUERIES
   */

  const {
    data: topRatedData,
    isLoading: topRatedLoading,
    isError: topRatedError,
  } = useQuery("top-rated", () => TMDBService.getTopRated({}), {
    enabled: type === SHOW_TYPE.TOP_RATED,
  });

  const {
    data: nowPlayingData,
    isLoading: nowPlayingLoading,
    isError: nowPlayingError,
  } = useQuery("now-playing", () => TMDBService.getNowPlaying({}), {
    enabled: type === SHOW_TYPE.NOW_PLAYING,
  });

  const {
    data: searchData,
    isLoading: searchLoading,
    isError: searchError,
    refetch,
  } = useQuery("search", () => TMDBService.search({ query: search }), {
    enabled: type === SHOW_TYPE.SEARCH && search.length >= SEARCH_OFFSET,
  });

  /**
   * MAPPED VALUES
   */

  const movies = useMemo(() => {
    switch (type) {
      case SHOW_TYPE.TOP_RATED: {
        return topRatedData?.data?.results || [];
      }

      case SHOW_TYPE.NOW_PLAYING: {
        return nowPlayingData?.data?.results || [];
      }

      case SHOW_TYPE.SEARCH: {
        return searchData?.data?.results || [];
      }

      default:
        return [];
    }
  }, [type, topRatedData, nowPlayingData, searchData]);

  const loading = useMemo(() => {
    switch (type) {
      case SHOW_TYPE.NOW_PLAYING:
        return nowPlayingLoading;
      case SHOW_TYPE.SEARCH:
        return searchLoading;
      case SHOW_TYPE.TOP_RATED:
        return topRatedLoading;
    }
  }, [nowPlayingLoading, searchLoading, topRatedLoading, type]);

  const error = useMemo(() => {
    switch (type) {
      case SHOW_TYPE.NOW_PLAYING:
        return nowPlayingError;
      case SHOW_TYPE.SEARCH:
        return searchError;
      case SHOW_TYPE.TOP_RATED:
        return topRatedError;
    }
  }, [nowPlayingError, searchError, topRatedError, type]);

  /**
   * EVENT HANDLERS
   */
  const typeChanger = (type: SHOW_TYPE) => setType(type);

  const modeChanger = (mode: SHOW_MODE) => setMode(mode);

  const searchHander = (search: string) => {
    if (search.length >= SEARCH_OFFSET) {
      setType(SHOW_TYPE.SEARCH);
      refetch();
    }

    setSearch(search);
  };

  const closeHandler = () => {
    setSelected(undefined);
  };

  const selectHandler = (movieId: string) => {
    setSelected(movieId);
  };

  /**
   * MAIN RETURN
   */
  return (
    <div className="flex justify-center min-h-[calc(100vh-100px)]">
      <div className="flex flex-col w-full lg:w-[980px] pt-5">
        <div className="flex justify-between items-center mx-2">
          <TypePicker selecting={type} onChange={typeChanger} />
          <div className="flex items-center">
            <ModePicker selecting={mode} onChange={modeChanger} />
          </div>
        </div>

        <div className="flex mt-5 justify-center items-center lg:justify-between">
          <SearchBar className="w-full mx-2 lg:w-[30%]" onChange={searchHander} />
        </div>

        {loading && (
          <div className="flex h-[200px] w-full justify-start items-center">
            <p className="font-bold px-2 text-stone-500 text-3xl">GETTING LATEST MOVIES TO YOU..</p>
          </div>
        )}

        {error && (
          <div className="flex h-[200px] w-full justify-start items-center">
            <p className="font-bold px-2 text-red-500 text-3xl">SOME ERROR HAPPENED WHILE FETCHING MOVIES DATA..</p>
          </div>
        )}

        {mode === SHOW_MODE.GRID && <GridView onSelect={selectHandler} loading={loading} movies={movies} />}
        {mode === SHOW_MODE.LIST && <ListView onSelect={selectHandler} loading={loading} movies={movies} />}
      </div>

      <DetailModal selected={selected} onClose={closeHandler} />
    </div>
  );
};

export default Movies;
