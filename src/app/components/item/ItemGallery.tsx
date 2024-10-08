"use client";

import { useState } from "react";

import CldImage from "../ui/CldImage";
import Gallery from "../ui/Gallery";

import useToggle from "@/app/hooks/useToggle";

import style from "./ItemGallery.module.scss";

const ItemGallery = ({ data }: { data: string[] }) => {
  const [carouselOpen, toggleCarousel] = useToggle();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    toggleCarousel();
  };

  return (
    <>
      <div className={style.images}>
        {data.map((image, index) => (
          <CldImage
            key={index}
            src={image}
            alt={`Example of our work`}
            height={100}
            width={100}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      <Gallery
        items={data}
        initialIndex={currentIndex}
        carouselOpen={carouselOpen}
        toggleCarousel={toggleCarousel}
      />
    </>
  );
};

export default ItemGallery;
