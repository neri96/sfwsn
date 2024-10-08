import { ReactNode, CSSProperties, ButtonHTMLAttributes } from "react";

import cn from "classnames";

import style from "./Button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hidden?: boolean;
  noBackground?: boolean;
  noStyle?: boolean;
  children?: ReactNode;
  customStyle?: CSSProperties;
}

const Button = ({
  hidden = false,
  noBackground = false,
  noStyle = false,
  children,
  customStyle,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={cn(style.button, {
        [style.hidden]: hidden,
        [style.noBg]: noBackground,
        [style.icon]: noStyle,
      })}
      style={customStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
