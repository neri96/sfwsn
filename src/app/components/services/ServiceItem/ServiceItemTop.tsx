"use client";

import { motion } from "framer-motion";

import { appearTransform } from "@/app/helpers/variants";

import style from "./ServiceItemTop.module.scss";

const ServiceItemTop = ({ title }: { title: string; background: string }) => {
  return (
    <div className={style.container}>
      <motion.div
        className={style.title}
        variants={appearTransform}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
      >
        <h1>{title}</h1>
      </motion.div>
    </div>
  );
};

export default ServiceItemTop;
