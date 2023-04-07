import { Link } from "react-router-dom";
import Logo from "../../logo.gif";

interface Props {
  className?: string;
}

const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <nav className={`flex w-full justify-center px-6 ${className}`}>
      <div className="flex justify-between items-center w-full h-[100px] xl:w-[980px]">
        <img className="h-[55px]" src={Logo} alt="logo" />
        <div className="flex items-center">
          <Link to="/movies">
            <p className={`${LINK_BASE_CLASSES} mr-7`}>Movies</p>
          </Link>
          <Link to="/about">
            <p className={`${LINK_BASE_CLASSES}`}>About</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const LINK_BASE_CLASSES = 'font-bold text-lg hover:text-stone-500 transition-all'