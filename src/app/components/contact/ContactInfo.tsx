import IcAddress from "@/app/assets/icons/address.svg";
import IcEmail from "@/app/assets/icons/email2.svg";
import IcPhone from "@/app/assets/icons/phone2.svg";
import Icon from "@/app/components/ui/Icon";

import style from "./ContactInfo.module.scss";

const ContactInfo = () => {
  const customStyle = { marginRight: "5px" };

  return (
    <div className={style.contactInfo}>
      <h1>Contact the San Francisco Window Station for more information</h1>
      <div className={style.contactInfoOptions}>
        <ul>
          <li>
            <a
              href="https://www.google.com/maps?q=37.97787203993747,-122.05598579009637"
              target="_blank"
            >
              <Icon
                src={IcAddress}
                alt="Address: 1130 Burnett Ave. # N Concord, CA 94520"
                style={customStyle}
              />
              1130 Burnett Ave. # N Concord, CA 94520
            </a>
          </li>
          <li>
            <a href="tel: 4152954502">
              <Icon src={IcPhone} alt="415-295-4502" style={customStyle} />
              415-295-4502
            </a>
          </li>
          <li>
            <a href="to:windowstation2012@gmail.com">
              <Icon
                src={IcEmail}
                alt="E-mail: windowstation2012@gmail.com"
                style={customStyle}
              />
              windowstation2012@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
