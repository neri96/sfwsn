import { motion } from "framer-motion";

import GalleryCarouselTop from "./GalleryCarouselTop";
import GalleryCarouselBody from "./GalleryCarouselBody";

import useZoom from "@/app/hooks/useZoom";

import { CtxImageZoom } from "@/app/context/gallery";

import { appear } from "@/app/helpers/variants";

import style from "./GalleryCarousel.module.scss";

const GalleryCarousel = () => {
  const { currentZoom, ...zoomData } = useZoom();

  return (
    <motion.div
      className={style.carousel}
      variants={appear}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <GalleryCarouselTop zoomData={zoomData} />
      <CtxImageZoom.Provider value={currentZoom || 1}>
        <GalleryCarouselBody />
      </CtxImageZoom.Provider>
    </motion.div>
  );
};

export default GalleryCarousel;
