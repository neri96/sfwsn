"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import HamburgerMenu from "@/app/components/ui/HamburgerMenu";
import MainHeaderIcon from "./MainHeaderIcon";
import MainNavIcon from "./MainNavIcon";
import MainNavTitle from "./MainNavTitle";

import IcHome from "@/app/assets/icons/home.svg";
import IcServices from "@/app/assets/icons/services.svg";
import IcContact from "@/app/assets/icons/contact.svg";
import IcTestimonials from "@/app/assets/icons/testimonials.svg";

import useToggle from "@/app/hooks/useToggle";

import style from "./style.module.scss";
import { useEffect } from "react";

interface INavList {
  title: string;
  icon: string;
  link?: string;
}

const navList: INavList[] = [
  { title: "home", icon: IcHome, link: "/" },
  { title: "services", icon: IcServices },
  {
    title: "testimonials",
    icon: IcTestimonials,
    link: "/testimonials",
  },
  { title: "contact", icon: IcContact, link: "/contact" },
];

const MainNav = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 650px)" });

  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, handleMenu, setMenuOpen] = useToggle(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setMenuOpen(!isSmallScreen);
  }, [isSmallScreen]);

  if (!isClient) return null;

  return (
    <div className={style.container}>
      <MainHeaderIcon />

      <nav>
        <ul className={style.list}>
          {navList.map((listElem, index) =>
            isMenuOpen ? (
              <MainNavTitle
                key={listElem.title}
                index={index}
                data={listElem}
              />
            ) : (
              <MainNavIcon key={listElem.title} index={index} data={listElem} />
            )
          )}
        </ul>

        {!isSmallScreen ? (
          <div className={style.hamburger}>
            <HamburgerMenu isOpen={isMenuOpen} handleClick={handleMenu} />
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default MainNav;
