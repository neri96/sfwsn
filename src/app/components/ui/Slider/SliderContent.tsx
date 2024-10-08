import Image from "next/image";

import style from "./SliderContent.module.scss";

import { ItemImageData } from "@/app/ts/interfaces";

const SliderContent = ({ title, src }: ItemImageData) => {
  return (
    <div className={style.container}>
      <Image src={src} alt={title} placeholder="blur" />
    </div>
  );
};

export default SliderContent;
