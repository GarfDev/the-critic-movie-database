import { useEffect, useMemo, useRef, useState } from "react";
import { useIsInViewport } from "hooks";

/* eslint-disable jsx-a11y/alt-text */
interface Props extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

const LazyImage: React.FC<Props> = ({ src, ...rest }) => {
  const ref = useRef<HTMLImageElement>(null!);
  const [loaded, setLoaded] = useState(false);

  /**
   * MAPPED-VALUES
   */
  const isInViewport = useIsInViewport(ref);
  const showRealImage = isInViewport && loaded;

  /**
   * SIDE-EFFECTS
   */
  useEffect(() => {
    if (isInViewport) {
      const mock = document.createElement("img");
      mock.src = "https://image.tmdb.org/t/p/w500/" + src!;
      mock.onload = () => setLoaded(true);
    }
  }, [isInViewport, src]);

  /**
   * MAIN RETURN
   */

  return (
    <div ref={ref} {...rest} className={"" +  rest.className}>
      {showRealImage && <img {...rest} className="transition-opacity ease-in duration-700 opacity-100" src={"https://image.tmdb.org/t/p/w500/" + src} />}
      {!showRealImage && <div className="absolute top-0 left-0 w-full h-full animate-pulse bg-stone-200" />}
    </div>
  );
};

export default LazyImage;
