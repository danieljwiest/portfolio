import { useEffect } from "react";

const useElementRect = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const dimensions = element.getBoundingClientRect();

    const height = dimensions.height;
    const width = dimensions.width;
  }, []);

  return {
    height: height,
    width: width,
  };
};
