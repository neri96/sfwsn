"use client";

import FooterInfo from "./FooterInfo";
import FooterIcons from "./FooterIcons";
import FooterSocial from "./FooterSocial";
import FooterContact from "./FooterContact";

import style from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <FooterInfo />
        <FooterIcons />
        <FooterSocial />
        <FooterContact />
      </div>
    </footer>
  );
};

export default Footer;
