"use client";

import TopBar from "./TopBar";
import MainNav from "./MainNav";

import style from "./style.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <TopBar />
      <MainNav />
    </header>
  );
};

export default Header;
