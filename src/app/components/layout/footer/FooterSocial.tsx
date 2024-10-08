import Image from "next/image";

import IcFb from "../../../assets/footer/fb.svg";
import IcYelp from "../../../assets/footer/yelp2.svg";

import style from "./FooterSocial.module.scss";

const FooterSocial = () => {
  return (
    <div className={style.social}>
      <div className={style.item}>
        <a href="https://www.facebook.com/profile.php?id=100080451341337">
          <Image src={IcFb} alt="our Facebook page" />
        </a>
      </div>
      <div className={style.item}>
        <a href="https://www.yelp.com/biz/window-station-san-francisco-2">
          <Image src={IcYelp} alt="our Yelp page" />
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;
