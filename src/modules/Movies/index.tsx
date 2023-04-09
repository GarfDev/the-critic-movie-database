import { useState } from "react";
import { SHOW_MODE, SHOW_TYPE } from "./constants";
import { GridView, ModePicker, SearchBar, TypePicker } from "./components";
import { useQuery } from "react-query";
import { TMDBService } from "services";

export const Movies: React.FC = () => {
  const [mode, setMode] = useState(SHOW_MODE.GRID);
  const [type, setType] = useState(SHOW_TYPE.TOP_RATED);
  const [search, setSearch] = useState("");

  /**
   * QUERIES
   */

  const { data: topRatedData } = useQuery("top-rated", () => TMDBService.getTopRated({}), {
    enabled: type === SHOW_TYPE.TOP_RATED,
  });

  // const { data: nowPlayingData } = useQuery("now-playing", () => TMDBService.getNowPlaying({}), {
  //   enabled: type === SHOW_TYPE.NOW_PLAYING,
  // });

  /**
   * MAPPED VALUES
   */

  const movies = topRatedData?.data?.results || [];

  /**
   * EVENT HANDLERS
   */
  const typeChanger = (type: SHOW_TYPE) => setType(type);

  const modeChanger = (mode: SHOW_MODE) => setMode(mode);

  const searchHander = (search: string) => {
    setType(SHOW_TYPE.SEARCH);
    setSearch(search);
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

        <GridView movies={movies} />
      </div>
    </div>
  );
};

export default Movies;
