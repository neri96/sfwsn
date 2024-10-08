import { ReactNode, useState, useRef, useEffect, CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";

import useToggle from "@/app/hooks/useToggle";

import { appear } from "@/app/helpers/variants";

import style from "./ToolTip.module.scss";

export enum ToolTipPositionHorizontal {
  Top = "top",
  Middle = "middle",
  Bottom = "bottom",
}

export enum ToolTipPositionVertical {
  Left = "left",
  Center = "center",
  Right = "right",
}

interface IPosition {
  horizontal: ToolTipPositionHorizontal;
  vertical: ToolTipPositionVertical;
}

interface IToolTipProps {
  content: string;
  position?: IPosition;
  isPopupOpen?: boolean;
  children: ReactNode;
}

const defaultPosition = {
  horizontal: ToolTipPositionHorizontal.Bottom,
  vertical: ToolTipPositionVertical.Center,
};

const setPosition = ($position: IPosition, $width: number): CSSProperties => {
  const { horizontal, vertical } = $position;

  const values = new Map();

  values.set(ToolTipPositionHorizontal.Top, { top: "-55px" });
  values.set(ToolTipPositionHorizontal.Middle, {
    top: "50%",
    transform: "translateY(-50%)",
  });
  values.set(ToolTipPositionHorizontal.Bottom, { bottom: "-55px" });
  values.set(ToolTipPositionVertical.Left, { left: `-${$width}px` });
  values.set(ToolTipPositionVertical.Center, {
    left: "50%",
    transform: "translateX(-50%)",
  });
  values.set(ToolTipPositionVertical.Right, { right: `-${$width}px` });

  return { ...values.get(horizontal), ...values.get(vertical) };
};

const ToolTip = ({
  content,
  position,
  isPopupOpen,
  children,
}: IToolTipProps) => {
  const [elemWidth, setElemWidth] = useState<number>(0);
  const [isToolTipOpen, toggleToolTip, setIsToolTipOpen] = useToggle();
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && !elemWidth) {
      setElemWidth(ref.current.clientWidth);
    }
  }, [elemWidth, isToolTipOpen]);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  useEffect(() => {
    if (isPopupOpen) setIsToolTipOpen(false);
  }, [isPopupOpen]);

  const handleToggle = () => {
    if (!isTouchDevice) {
      toggleToolTip();
    }
  };

  return (
    <div
      className={style.container}
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}
    >
      {children}

      <div
        ref={ref}
        className={style.tooltip}
        style={setPosition(position || defaultPosition, elemWidth)}
      >
        <AnimatePresence>
          {isToolTipOpen && (
            <motion.div
              className={style.content}
              variants={appear}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ToolTip;
