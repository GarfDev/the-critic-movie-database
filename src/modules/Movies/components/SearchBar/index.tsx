import { IoSearch } from "react-icons/io5";

interface Props {
  onChange: (search: string) => void;
  className?: string;
}

const SearchBar: React.FC<Props> = ({ onChange, className }) => {
  return (
    <div className={"rounded-md flex border-black border-2 p-2 items-center " + className}>
      <IoSearch className="mr-2" size={20} />
      <input className="flex-1 outline-none font-bold" />
    </div>
  );
};

export default SearchBar;
