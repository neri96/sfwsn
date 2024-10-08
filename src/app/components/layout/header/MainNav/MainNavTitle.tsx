import { motion } from "framer-motion";

import Link from "next/link";
import DropDown from "@/app/components/ui/DropDown";

import { serviceList } from "@/app/constants/navConst";

import { navElemVariants } from "./shared/animations";

import { INavElemProps } from "./shared/interfaces";

import style from "./MainNavItem.module.scss";

const MainNavTitle = ({ index, data }: INavElemProps) => {
  const { link, title } = data;

  return (
    <motion.li
      className={style.item}
      custom={index}
      initial="hidden"
      animate="visible"
      variants={navElemVariants}
    >
      {title === "services" ? (
        <DropDown list={serviceList}>
          {<span className={style.title}>{title}</span>}
        </DropDown>
      ) : (
        <span className={style.title}>
          <Link href={link as string}>{title}</Link>
        </span>
      )}
    </motion.li>
  );
};

export default MainNavTitle;
