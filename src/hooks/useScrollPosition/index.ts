import { useLayoutEffect, useState } from "react";

const useScrollPosition = () => {
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setPosition(position);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return position;
};

export default useScrollPosition;
