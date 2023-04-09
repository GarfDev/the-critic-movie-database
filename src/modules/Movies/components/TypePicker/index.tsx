/* eslint-disable jsx-a11y/role-supports-aria-props */
import { SHOW_TYPE } from "modules/Movies/constants";

interface Props {
  selecting: SHOW_TYPE;
  onChange: (type: SHOW_TYPE) => void;
}

const TypePicker: React.FC<Props> = ({ selecting, onChange }) => {
  return (
    <div className="flex p-2 flex-nowrap items-center">
      <button
        aria-selected={selecting === SHOW_TYPE.TOP_RATED}
        onClick={onChange.bind(this, SHOW_TYPE.TOP_RATED)}
        className={BUTTON_CLASSNAME}
      >
        Top Rated
      </button>
      <div className="border-2 h-full bg-stone-300 mx-2" />
      <button
        aria-selected={selecting === SHOW_TYPE.NOW_PLAYING}
        onClick={onChange.bind(this, SHOW_TYPE.NOW_PLAYING)}
        className={BUTTON_CLASSNAME}
      >
        Now Playing
      </button>
    </div>
  );
};

export default TypePicker;

export const BUTTON_CLASSNAME =
  "uppercase transition-all cursor-pointer font-bold text-stone-300 aria-selected:text-black hover:text-stone-500";
