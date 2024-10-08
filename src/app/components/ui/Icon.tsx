import { CSSProperties } from "react";
import Image from "next/image";

const Icon = ({
  src,
  alt,
  style,
  handleClick,
}: {
  src: string;
  alt: string;
  style?: CSSProperties;
  handleClick?: () => void;
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={25}
      width={25}
      onClick={handleClick}
      style={{ cursor: "pointer", ...style }}
    />
  );
};

export default Icon;
