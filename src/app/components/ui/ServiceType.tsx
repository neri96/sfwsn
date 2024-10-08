"use client";

import { useState } from "react";

import { ItemType } from "@/app/ts/types";

import cn from "classnames";
import style from "./ServiceType.module.scss";
import Button from "./Button";

export const useServiceOptions = () => {
  const [currentOption, setCurrentOption] = useState<ItemType>(ItemType.Window);

  const handleOption = (option: ItemType) => setCurrentOption(option);

  return { currentOption, handleOption };
};

const ServiceType = ({
  currentOption,
  handleOption,
}: {
  currentOption: ItemType;
  handleOption: (arg1: ItemType) => void;
}) => {
  return (
    <div className={style.container}>
      <ul className={style.service}>
        <li className={style.option}>
          <Button noStyle onClick={() => handleOption(ItemType.Window)}>
            Windows
          </Button>
        </li>
        <li className={style.option}>
          <Button noStyle onClick={() => handleOption(ItemType.Door)}>
            Doors
          </Button>
        </li>
        <div
          className={cn(style.underline, {
            [style.door]: currentOption === ItemType.Door,
          })}
        />
      </ul>
    </div>
  );
};

export default ServiceType;
