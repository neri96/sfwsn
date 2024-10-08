"use client";

import { ReactNode } from "react";

import cn from "classnames";
import style from "./PageSection.module.scss";

const PageSection = ({
  header,
  fixedHeight = false,
  fullWidth = false,
  children,
}: {
  header?: string;
  fixedHeight?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(style.container, {
        [style.fixedHeight]: fixedHeight,
        [style.fullWidth]: fullWidth,
      })}
    >
      {header ? (
        <div className={style.header}>
          <h3>{header}</h3>
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default PageSection;
