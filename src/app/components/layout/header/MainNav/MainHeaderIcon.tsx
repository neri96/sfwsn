import Link from "next/link";

import Image from "next/image";

import ImgMainNav from "@/app/assets/main-icon.webp";
import ImgMainNavSmall from "@/app/assets/main-icon-small.webp";

import style from "./MainHeaderIcon.module.scss";

const MainHeaderIcon = () => {
  return (
    <Link href={"/"}>
      <div className={style.icon}>
        <Image className={style.iconLarge} src={ImgMainNav} alt="Main Icon" />
        <Image
          className={style.iconSmall}
          src={ImgMainNavSmall}
          alt="Main Icon"
        />
      </div>
    </Link>
  );
};

export default MainHeaderIcon;
