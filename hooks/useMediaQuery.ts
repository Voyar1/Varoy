// hooks/useMediaQuery.js
import { useState, useEffect } from "react";

const useMediaQuery = (width) => {
  const [isMobile, setIsMobile] = useState(false);

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= width);
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [width]);

  return isMobile;
};

export default useMediaQuery;
