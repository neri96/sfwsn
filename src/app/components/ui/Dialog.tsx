import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";

import style from "./Dialog.module.scss";
import Button from "./Button";

const Dialog = ({
  title,
  onClose,
  withOVerlay = false,
  children,
}: {
  title: string;
  onClose: () => void;
  withOVerlay?: boolean;
  children: ReactNode;
}) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: withOVerlay ? 0.2 : 0 }}
      className={style.dialog}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={style.title}>{title}</div>
      <div className={style.content}>{children}</div>
      <div className={style.footer}>
        <Button type="button" onClick={onClose} customStyle={{ width: "80px" }}>
          Ok
        </Button>
      </div>
    </motion.div>
  );
};

export default Dialog;
