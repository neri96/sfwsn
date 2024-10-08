import Image from "next/image";

import ImgEnergy from "../../../assets/footer/energy-star.jpg";
import ImgBbb from "../../../assets/footer/bbb.png";
import ImgCards from "../../../assets/footer/cards.jpg";
import ImgAlist from "../../../assets/footer/alist.jpg";
import ImgYelp from "../../../assets/footer/yelp.jpg";

import style from "./FooterIcons.module.scss";

const icons = [
  { title: "energy", img: ImgEnergy },
  { title: "bbb", img: ImgBbb },
  { title: "credit cards", img: ImgCards },
  { title: "alist", img: ImgAlist },
  { title: "yelp", img: ImgYelp },
];

const FooterIcons = () => {
  return (
    <div className={style.footerIcons}>
      {icons.map(({ title, img }, index) => {
        return (
          <div key={index} className={style.footerIconItem}>
            <Image src={img} alt={title} />
          </div>
        );
      })}
    </div>
  );
};

export default FooterIcons;
