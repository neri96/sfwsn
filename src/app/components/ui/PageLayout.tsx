import { ReactNode } from "react";

import cn from "classnames";
import style from "./PageLayout.module.scss";

const PageLayout = ({
  topMargin = false,
  fullWidth = false,
  children,
}: {
  topMargin?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(style.container, {
        [style.fullWidth]: fullWidth,
        [style.topMargin]: topMargin,
      })}
    >
      {children}
    </div>
  );
};

export default PageLayout;
