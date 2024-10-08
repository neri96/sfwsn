import cn from "classnames";
import style from "./HamburgerMenu.module.scss";

const HamburgerMenu = ({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) => {
  return (
    <div
      className={cn(style.container, { [style.active]: isOpen })}
      onClick={handleClick}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

export default HamburgerMenu;
