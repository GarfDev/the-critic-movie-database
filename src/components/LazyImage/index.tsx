import { useEffect, useMemo, useRef, useState } from "react";
import { useIsInViewport } from "hooks";

/* eslint-disable jsx-a11y/alt-text */
interface Props extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  imgClassname?: string;
}

const LazyImage: React.FC<Props> = ({ imgClassname, src, ...rest }) => {
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
   * MAIN RETURN6
   */

  return (
    <div ref={ref} {...rest} className={"" +  rest.className}>
      {showRealImage && <img {...rest} className={"w-full h-full object-cover transition-opacity ease-in duration-700 opacity-100" + imgClassname} src={"https://image.tmdb.org/t/p/w500/" + src} />}
      {!showRealImage && <div className={"absolute top-0 left-0 w-full h-full animate-pulse bg-stone-200 " + imgClassname} />}
    </div>
  );
};

export default LazyImage;
