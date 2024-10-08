import { ReactNode } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Container from "./Container";
import Link from "next/link";

import useToggle from "@/app/hooks/useToggle";

import { appear } from "@/app/helpers/variants";

import style from "./DropDown.module.scss";

export enum OpenType {
  Click,
  Hover,
}

interface IList {
  id: string;
  title: string;
  link: string;
  prefetch?: boolean;
}

const DropDown = ({
  list,
  children,
}: {
  list: IList[];
  children: ReactNode;
}) => {
  const [isOpen, toggleDropDown] = useToggle();

  return (
    <div className={style.container} onClick={toggleDropDown}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={style.listWrapper}
            variants={appear}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Container>
              <ul className={style.list}>
                {list.map(({ id, title, link, prefetch }) => {
                  return (
                    <li key={id}>
                      <Link href={link} prefetch={prefetch}>
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDown;
