"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
import Button from "@/app/components/ui/Button";
import Icon from "@/app/components/ui/Icon";
import ServiceItemModal from "./ServiceItemModal";

import IcArrow from "@/app/assets/icons/arrow.svg";
import IcRead from "@/app/assets/icons/read.svg";

import useToggle from "@/app/hooks/useToggle";

import { appear } from "@/app/helpers/variants";
import { IManufacturerItemData } from "@/app/ts/interfaces";

import style from "./ServiceItemMaterials.module.scss";

const ServiceItemMaterials = ({ data }: { data: IManufacturerItemData[] }) => {
  const [currentItem, setCurrentItem] = useState<string>("");
  const [isModalOpen, toggleModal] = useToggle();

  const handleCurrentItem = (slug: string) => {
    setCurrentItem(slug);
    toggleModal();
  };

  const length = data?.length;

  return (
    <>
      <div
        className={style.container}
        style={{ top: `-${length ? length * 60 + 10 : 0}px` }}
      >
        <ul className={style.materials}>
          {data?.map(({ slug, title, hasSeparatePage }, index: number) => (
            <motion.li
              key={slug}
              variants={appear}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.1 }}
            >
              {hasSeparatePage ? (
                <Link href={`/item/${slug}`}>
                  <div className={style.details}>
                    <span>{title}</span>
                    <Icon src={IcArrow} alt="Procceed" />
                  </div>
                </Link>
              ) : (
                <>
                  <div className={style.details}>
                    <Button noStyle onClick={() => handleCurrentItem(slug)}>
                      <span>{title}</span>
                      <Icon src={IcRead} alt="Open and read" />
                    </Button>
                  </div>
                </>
              )}
            </motion.li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {Boolean(currentItem && isModalOpen) && (
          <ServiceItemModal slug={currentItem} toggleModal={toggleModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceItemMaterials;
