import { useContext } from "react";

import { CtxGalleryImages } from "@/app/context/gallery";

import Slider from "../Slider";

import style from "./GalleryCarouselBody.module.scss";

const GalleryCarouselBody = () => {
  const { items, initialIndex } = useContext(CtxGalleryImages);

  return (
    <div className={style.container}>
      <Slider
        items={items}
        initialIndex={initialIndex}
        isFooterNav
        zoomControllers
        height={"100%"}
      />
    </div>
  );
};

export default GalleryCarouselBody;
