import { AnimatePresence } from "framer-motion";
import { v4 as uuid } from "uuid";

import GalleryCarousel from "./GalleryCarousel";

import { CtxGalleryImages } from "@/app/context/gallery";

import { ItemImageData } from "@/app/ts/interfaces";

type ItemArray = ItemImageData[] | string[];

const normalizeItems = (array: ItemArray): ItemImageData[] => {
  return array.map((element, index) => {
    return typeof element === "string"
      ? { id: uuid(), title: `Example of our work ${index}`, src: element }
      : element;
  });
};

const Gallery = ({
  items,
  initialIndex,
  carouselOpen,
  toggleCarousel,
}: {
  items: ItemArray;
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
