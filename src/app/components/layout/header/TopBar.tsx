import Icon from "../../ui/Icon";

import IcTel from "@/app/assets/icons/phone.svg";
import IcMail from "@/app/assets/icons/email.svg";

import style from "./TopBar.module.scss";

const TopBar = () => {
  const iconStyle = { height: "20px", width: "20px", marginRight: "5px" };

  return (
    <div className={style.container}>
      <ul>
        <li>
          <a href="tel:18003420308">
            <Icon
              src={IcTel}
              alt="Phone number: 18003420308"
              style={iconStyle}
            />
            <span>1-800-342-0308</span>
          </a>
        </li>
        <li>
          <a href="mailto:windowstation2012@gmail.com">
            <Icon
              src={IcMail}
              alt="E-mail address: windowstation2012@gmail.com"
              style={iconStyle}
            />

            <span>windowstation2012@gmail.com</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
