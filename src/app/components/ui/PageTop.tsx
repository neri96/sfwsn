"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

import cn from "classnames";

import { appear } from "@/app/helpers/variants";

import style from "./PageTop.module.scss";

export enum TitlePosition {
  Top,
  Center,
  Bottom,
}

const PageTop = ({
  title,
  subtitle,
  background,
  children,
  height,
  titlePosition = TitlePosition.Center,
}: {
  title: string;
  subtitle?: string;
  background: string;
  children?: ReactNode;
  height?: number;
  titlePosition?: TitlePosition;
}) => {
  return (
    <div
      className={style.container}
      style={{
        minHeight: height || "350px",
        backgroundImage: `linear-gradient(
          to right,
          rgba(0, 0, 0, 0.4),
          rgba(0, 12, 64, 0.6)
        ), url(/bg-images/${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      {children}
      <motion.div
        className={cn(style.content, {
          [style.titleTop]: titlePosition === TitlePosition.Top,
          [style.titleCenter]: titlePosition === TitlePosition.Center,
          [style.titleBottom]: titlePosition === TitlePosition.Bottom,
        })}
        variants={appear}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
      >
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </motion.div>
    </div>
  );
};

export default PageTop;
