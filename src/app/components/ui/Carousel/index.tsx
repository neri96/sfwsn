"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import Image from "next/image";

import style from "./style.module.scss";

interface ICarouselProps {
  data: { title: string; src: string }[];
}

const Carousel = ({ data }: ICarouselProps) => {
  const controls = useAnimation();
  const slideWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const totalWidth = slideWrapperRef.current?.scrollWidth || 0;
    const itemWidth = totalWidth / (data.length * 2);

    const moveCarousel = () => {
      controls.start({
        x: [0, -itemWidth * data.length],
        transition: {
          x: {
            repeat: Infinity,
            ease: "linear",
            duration: data.length * 5,
          },
        },
      });
    };

    moveCarousel();
  }, [data, controls]);

  return (
    <div className={style.carousel}>
      <motion.div
        ref={slideWrapperRef}
        className={style.slideWrapper}
        animate={controls}
      >
        {[...data, ...data].map(({ title, src }, i) => (
          <div key={i} className={style.item}>
            <Image src={src} alt={title} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
