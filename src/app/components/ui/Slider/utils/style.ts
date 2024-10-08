import { CSSProperties } from "react";

import { ITranslate } from "../ts/interfaces";

export const getCarouselStyle = (
  baseStyle: CSSProperties,
  isFooterNav: boolean
): CSSProperties => {
  const style: CSSProperties = {
    ...baseStyle,
    height: "100%",
    width: "auto",
  };

  if (isFooterNav) {
    return {
      ...style,
      height: "calc(100% - 70px)",
      padding: "5px 0",
      boxSizing: "border-box",
    };
  }

  return style;
};

export const getItemStyles = (
  isFullWidthImg: boolean,
  isDescr: boolean
): CSSProperties => {
  let style: Record<string, string> = {};

  style.height = "100%";
  style.width = isFullWidthImg ? "100%" : "auto";

  if (!isFullWidthImg) {
    style.maxWidth = "90%";
  }

  if (isDescr) {
    style = {
      ...style,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
    };
  }

  return style;
};

export const getImageStyles = (
  currentZoom: number,
  currentTranslate: ITranslate,
  isFullWidthImg: boolean
): CSSProperties => {
  const style: Record<string, string> = {
    transform: `scale(${currentZoom}) translate(${currentTranslate.translateX}%, ${currentTranslate.translateY}%)`,
    objectFit: "cover",
  };

  if (isFullWidthImg) {
    style.height = "100%";
    style.width = "100%";
  } else {
    style.maxHeight = "100%";
    style.maxWidth = "100%";
  }

  return style;
};

export const getSilderFooterStyle = (
  currentIndex: number,
  imageWidth: number,
  itemLength: number,
  isSmallSceen: boolean
): CSSProperties => {
  const style: Record<string, string> = {
    heigt: "100%",
    width: `${imageWidth * itemLength}px`,
  };

  if (
    currentIndex >= 2 &&
    !(currentIndex >= itemLength - (isSmallSceen ? 3 : 4))
  ) {
    style.transform = `translate(-${(currentIndex - 1) * imageWidth}px)`;
  } else if (currentIndex >= itemLength - 4) {
    style.transform = `translate(-${
      (itemLength - (isSmallSceen ? 3 : 5)) * imageWidth
    }px)`;
  }

  return style;
};

export const getPaginationBtnStyle = (
  isCurrentIndex: boolean
): CSSProperties => {
  const style: Record<string, string> = {
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    padding: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  if (isCurrentIndex) {
    style.transform = "scale(1.3)";
  }

  return style;
};
