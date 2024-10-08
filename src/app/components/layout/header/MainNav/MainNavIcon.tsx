import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import DropDown from "@/app/components/ui/DropDown";
import ToolTip, {
  ToolTipPositionHorizontal,
  ToolTipPositionVertical,
} from "@/app/components/ui/ToolTip";

import { navElemVariants } from "./shared/animations";

import { serviceList } from "@/app/constants/navConst";

import { INavElemProps } from "./shared/interfaces";

import style from "./MainNavItem.module.scss";

const MainNavDetails = ({ index, data }: INavElemProps) => {
  const { title, link, icon } = data;

  const imageElem = (
    <Image
      src={icon}
      alt={title}
      height={25}
      width={25}
      style={{ cursor: "pointer", margin: "0 5px" }}
    />
  );

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
          <ToolTip
            content={"services"}
            position={{
              horizontal: ToolTipPositionHorizontal.Top,
              vertical: ToolTipPositionVertical.Center,
            }}
          >
            {imageElem}
          </ToolTip>
        </DropDown>
      ) : (
        <ToolTip
          content={title}
          position={{
            horizontal: ToolTipPositionHorizontal.Bottom,
            vertical: ToolTipPositionVertical.Center,
          }}
        >
          <Link href={link as string}>{imageElem}</Link>
        </ToolTip>
      )}
    </motion.li>
  );
};

export default MainNavDetails;
