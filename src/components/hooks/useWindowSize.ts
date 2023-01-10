import React from "react";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return {
    innerWidth,
    innerHeight,
  }
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  React.useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
}