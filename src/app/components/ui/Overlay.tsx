import { ReactNode } from "react";
import { motion } from "framer-motion";

import Portal from "./Portal";

import style from "./Overlay.module.scss";

const Overlay = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: ReactNode;
}) => {
  return (
    <Portal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={style.overlay}
        onClick={onClose}
      >
        {children}
      </motion.div>
    </Portal>
  );
};

export default Overlay;
