import { useContext } from "react";

import cn from "classnames";

import Button from "../Button";
import Icon from "../Icon";

import { CtxGalleryImages } from "@/app/context/gallery";

import IcZoomIn from "@/app/assets/icons/zoom-in.svg";
import IcZoomOut from "@/app/assets/icons/zoom-out.svg";
import Close from "@/app/assets/icons/close.svg";

import { IZoomResult } from "@/app/hooks/useZoom";

import style from "./GalleryCarouselTop.module.scss";

const GalleryCarouselTop = ({ zoomData }: { zoomData: IZoomResult }) => {
  const { toggleCarousel } = useContext(CtxGalleryImages);
  const { incrementZoom, decrementZoom, reachedMin, reachedMax } = zoomData;

  return (
    <div className={style.container}>
      <ul>
        <li
          className={cn(style.zoomIcon, {
            [style.disabled]: reachedMax,
          })}
        >
          <Button
            noStyle
            onClick={() => (reachedMax ? undefined : incrementZoom())}
          >
            <Icon src={IcZoomIn} alt="Zoom in" />
          </Button>
        </li>
        <li
          className={cn(style.zoomIcon, {
            [style.disabled]: reachedMin,
          })}
        >
          <Button
            noStyle
            onClick={() => (reachedMin ? undefined : decrementZoom())}
          >
            <Icon src={IcZoomOut} alt="Zoom out" />
          </Button>
        </li>
        <li>
          <Button noStyle onClick={toggleCarousel}>
            <Icon
              src={Close}
              alt="Close carousel"
              style={{ height: "22px", width: "22px" }}
            />
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default GalleryCarouselTop;
