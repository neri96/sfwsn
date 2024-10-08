import {
  useState,
  useEffect,
  useContext,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";

import useToggle from "@/app/hooks/useToggle";

import { CtxImageZoom } from "@/app/context/gallery";
import { ItemImageData } from "@/app/ts/interfaces";

interface ICarouselProps {
  items: ItemImageData[];
  initialIndex: number;
  isInfinite: boolean;
  isAutoDefault: boolean;
}

interface ICarouselReturnProps {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  isAuto: boolean;
  toggleAuto: () => void;
  currentZoom: number;
  isTransitionActive: boolean;
  carouselArr: ItemImageData[];
  handleSlide: (index: number) => void;
  handlePrev: () => void;
  handleNext: () => void;
}

const transitionTime = 300;

const useCarousel = ({
  items,
  initialIndex,
  isInfinite,
  isAutoDefault,
}: ICarouselProps): ICarouselReturnProps => {
  const currentZoom = useContext(CtxImageZoom);

  const [currentIndex, setCurrentIndex] = useState<number>(
    initialIndex || (isInfinite ? 1 : 0)
  );
  const [isTransitionActive, toggleTransition] = useToggle(true);
  const [isAuto, toggleAuto] = useToggle(isAutoDefault);

  const carouselArr = isInfinite
    ? [...items.slice(-1), ...items, ...items.slice(0, 1)]
    : items;

  const handleSlide = useCallback(
    (index: number) => {
      if (isInfinite) {
        if (index === carouselArr.length - 1) {
          setTimeout(() => {
            toggleTransition();
            setCurrentIndex(1);
          }, transitionTime);
        } else if (index === 0) {
          setTimeout(() => {
            toggleTransition();
            setCurrentIndex(carouselArr.length - 2);
          }, transitionTime);
        }
      } else {
        if (index < 0 || index > carouselArr.length - 1) {
          return null;
        }
      }

      setCurrentIndex(index);
    },
    [carouselArr.length, isInfinite, toggleTransition]
  );

  useEffect(() => {
    if (isInfinite) {
      if (
        (currentIndex === 1 && !isTransitionActive) ||
        (currentIndex === carouselArr.length - 2 && !isTransitionActive)
      ) {
        setTimeout(() => {
          toggleTransition();
        }, transitionTime);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isInfinite, isTransitionActive, toggleTransition]);

  useEffect(() => {
    if (isAuto) {
      const interval = setInterval(() => {
        handleSlide(currentIndex + 1);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isAuto, handleSlide]);

  return {
    currentIndex,
    setCurrentIndex,
    isAuto,
    toggleAuto,
    currentZoom,
    isTransitionActive,
    carouselArr,
    handleSlide,
    handlePrev: () => handleSlide(currentIndex - 1),
    handleNext: () => handleSlide(currentIndex + 1),
  };
};

export default useCarousel;
