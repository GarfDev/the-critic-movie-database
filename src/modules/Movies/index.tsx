import { useState } from "react";
import { SHOW_MODE, SHOW_TYPE } from "./constants";
import { ModePicker, SearchBar, TypePicker } from "./components";

export const Movies: React.FC = () => {
  const [mode, setMode] = useState(SHOW_MODE.GRID);
  const [type, setType] = useState(SHOW_TYPE.TOP_RATED);
  const [search, setSearch] = useState("");

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
        <div className="flex justify-between mx-2">
          <TypePicker selecting={type} onChange={typeChanger} />
          <div className="flex">
            <ModePicker selecting={mode} onChange={modeChanger} />
          </div>
        </div>

        <div className="flex mt-5 justify-center lg:justify-end">
          <SearchBar className="w-full mx-2 lg:w-[30%]" onChange={searchHander} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
