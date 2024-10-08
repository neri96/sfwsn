"use client";

import { createContext } from "react";

import { ItemImageData } from "../ts/interfaces";

export const CtxGalleryImages = createContext<{
  items: ItemImageData[];
  initialIndex: number;
  toggleCarousel: () => void;
}>({ items: [], initialIndex: 0, toggleCarousel: () => null });

export const CtxImageZoom = createContext<number>(1);
