import { AnimatePresence } from "framer-motion";

import GalleryCarousel from "./GalleryCarousel";

import { CtxGalleryImages } from "@/app/context/gallery";

import { ItemImageData } from "../Slider/ts/interfaces";

type ImageArray = ItemImageData[] | string[];

const normalizeItems = (array: ImageArray) => {
  return array.map((element, index) => {
    return typeof element === "string"
      ? { id: index, title: `Example of our work ${index}`, src: element }
      : element;
  });
};

const Gallery = ({
  items,
  initialIndex,
  carouselOpen,
  toggleCarousel,
}: {
  items: ImageArray;
  initialIndex: number;
  carouselOpen: boolean;
  toggleCarousel: () => void;
}) => {
  return (
    <CtxGalleryImages.Provider
      value={{ items: normalizeItems(items), initialIndex, toggleCarousel }}
    >
      <AnimatePresence>{carouselOpen && <GalleryCarousel />}</AnimatePresence>
    </CtxGalleryImages.Provider>
  );
};

export default Gallery;
