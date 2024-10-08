"use client";

import SliderControls from "./SliderControls";
import SliderItem from "./SliderItem";
import SliderFooter from "./SliderFooter";
import SliderPagination from "./SliderPagination";

import useCarousel from "./hooks/useCarousel";
import useSwiper from "../../../hooks/useSwiper";

import * as styleFn from "./utils/style";

import style from "./style.module.scss";

import { ItemImageData } from "@/app/ts/interfaces";

interface Props {
  items: ItemImageData[];
  height?: string;
  initialIndex?: number;
  isNonStop?: boolean;
  isFooterNav?: boolean;
  isPagination?: boolean;
  isInfinite?: boolean;
  isAutoDefault?: boolean;
  isFullWidthImg?: boolean;
  zoomControllers?: boolean;
}

const Slider = ({
  items,
  height,
  initialIndex,
  isFooterNav = false,
  isPagination = false,
  isInfinite = false,
  isAutoDefault = false,
  isFullWidthImg = false,
  zoomControllers = false,
}: Props) => {
  const {
    currentIndex,
    setCurrentIndex,
    isAuto,
    toggleAuto,
    currentZoom,
    isTransitionActive,
    carouselArr,
    handleSlide,
    handlePrev,
    handleNext,
  } = useCarousel({
    items,
    initialIndex: initialIndex || 0,
    isInfinite,
    isAutoDefault,
  });

  const {
    distance,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseDown,
    onMouseMove,
  } = useSwiper({ handlePrev, handleNext });

  const carouselStyle = {
    minWidth: `${carouselArr.length * 100}%`,
    transform: `translateX(${-(100 / carouselArr.length) * currentIndex}%)${
      distance ? ` translateX(${-distance}px)` : ""
    }`,
    touchAction: "none",
    transition: isTransitionActive && !distance ? "300ms" : "none",
  };

  return (
    <div className={style.container} style={{ height: height || "100vh" }}>
      {currentZoom === 1 ? (
        <SliderControls
          currentIndex={currentIndex}
          carouselLength={carouselArr.length}
          isInfinite={isInfinite}
          isTransitionActive={isTransitionActive}
          handleSlide={handleSlide}
        />
      ) : null}

      <div
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onTouchEnd}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={style.carousel}
        style={styleFn.getCarouselStyle(carouselStyle, isFooterNav)}
      >
        {carouselArr.map(
          (
            ItemImageData: ItemImageData,
            index: number,
            self: ItemImageData[]
          ) => {
            return (
              <SliderItem
                key={(ItemImageData as ItemImageData).id || index}
                data={ItemImageData}
                currentZoom={currentZoom}
                isFullWidthImg={isFullWidthImg}
                zoomControllers={zoomControllers}
                carouselLength={self.length}
              />
            );
          }
        )}
      </div>

      {isFooterNav ? (
        <SliderFooter
          currentIndex={currentIndex}
          handleSlide={handleSlide}
          items={items}
        />
      ) : null}
      {isPagination ? (
        <SliderPagination
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          isInfinite={isInfinite}
          sliderLength={
            isInfinite ? carouselArr.length - 2 : carouselArr.length
          } // in case the carousel is infinite, there are two extra slides that imitate endless loop but they shouldn't appear in pagination
          isAuto={isAuto}
          toggleAuto={toggleAuto}
        />
      ) : null}
    </div>
  );
};

export default Slider;
