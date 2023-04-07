import Navbar from "components/Navbar";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

const Root: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate("/movies");
    }
  }, [location, navigate]);

  return (
    <div className="min-h-[100vh]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
