"use client";

import { forwardRef } from "react";
import { CldImage as CldImageDefault, CldImageProps } from "next-cloudinary";

const CldImage = forwardRef<HTMLImageElement, CldImageProps>(
  ({ ...props }, ref) => {
    return <CldImageDefault quality="auto:eco" ref={ref} {...props} />;
  }
);

export default CldImage;
