import { ReactNode, useEffect } from "react";

import { motion } from "framer-motion";

import Button from "@/app/components/ui/Button";

import style from "./ContactSuccess.module.scss";

const ContactSuccess = ({
  toggleMessage,
  children,
}: {
  toggleMessage: () => void;
  children: ReactNode;
}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      toggleMessage();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [toggleMessage]);

  return (
    <motion.div className={style.contactSuccess}>
      <div className={style.contactSuccessBody}>{children}</div>
      <div className={style.contactSuccessFooter}>
        <Button onClick={toggleMessage}>Ok</Button>
      </div>
    </motion.div>
  );
};

export default ContactSuccess;
