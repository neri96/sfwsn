import { useState, useEffect, TouchEvent, MouseEvent } from "react";

type handleMethod = () => void;

interface ISwiperProps {
  handlePrev: handleMethod;
  handleNext: handleMethod;
}

interface ISwiperReturnProps {
  distance: number;
  onTouchStart: (e: TouchEvent<HTMLDivElement>) => void;
  onTouchMove: (e: TouchEvent<HTMLDivElement>) => void;
  onTouchEnd: () => void;
  onMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseMove: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseUp: () => void;
}

const minSwipeDistance = 50;

const useSwiper = ({
  handlePrev,
  handleNext,
}: ISwiperProps): ISwiperReturnProps => {
  const [distance, setDistance] = useState<number>(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isSwiping || !startX) return;
    const currentX = e.touches[0].clientX;
    setDistance(startX - currentX);
  };

  const onTouchEnd = () => {
    if (!startX || Math.abs(distance) < minSwipeDistance) {
      resetSwipe();

      return;
    }

    handleSwipeEnd();
    resetSwipe();
  };

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setStartX(e.clientX);
    setIsSwiping(true);
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isSwiping || !startX) return;

    const currentX = e.clientX;
    setDistance(startX - currentX);
  };

  const onMouseUp = () => {
    if (!startX || Math.abs(distance) < minSwipeDistance) {
      resetSwipe();

      return;
    }

    handleSwipeEnd();
    resetSwipe();
  };

  const handleSwipeEnd = () => {
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const resetSwipe = () => {
    setDistance(0);
    setStartX(null);
    setIsSwiping(false);
  };

  return {
    distance,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseDown,
    onMouseMove,
    onMouseUp,
  };
};

export default useSwiper;
