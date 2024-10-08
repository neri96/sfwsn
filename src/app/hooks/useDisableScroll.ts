import { useEffect } from "react";

const useDisableScroll = (shouldDisable: boolean) => {
  useEffect(() => {
    if (shouldDisable) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [shouldDisable]);
};

export default useDisableScroll;
