/* eslint-disable jsx-a11y/role-supports-aria-props */
import { BiGridAlt } from "react-icons/bi";
import { TbLayoutList } from "react-icons/tb";
import { SHOW_MODE } from "modules/Movies/constants";

interface Props {
  selecting: SHOW_MODE;
  onChange: (mode: SHOW_MODE) => void;
}

const ModePicker: React.FC<Props> = ({ selecting, onChange }) => {
  return (
    <div className="flex px-2 py-1 border-black border-2 rounded-md">
      <button
        aria-selected={selecting === SHOW_MODE.GRID}
        onClick={onChange.bind(this, SHOW_MODE.GRID)}
        className={BUTTON_CLASSNAME}
      >
        <BiGridAlt size={20} />
      </button>
      <div className="w-[2px] h-full bg-stone-300 mx-2" />
      <button
        aria-selected={selecting === SHOW_MODE.LIST}
        onClick={onChange.bind(this, SHOW_MODE.LIST)}
        className={BUTTON_CLASSNAME}
      >
        <TbLayoutList size={20} />
      </button>
    </div>
  );
};

export default ModePicker;

export const BUTTON_CLASSNAME =
  "uppercase transition-all cursor-pointer font-bold text-stone-300 aria-selected:text-black hover:text-stone-500";
