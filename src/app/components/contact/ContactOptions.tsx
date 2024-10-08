"use client";

import { Dispatch, SetStateAction } from "react";

import { ContactOption } from "@/app/ts/types";

import cn from "classnames";
import style from "./ContactOptions.module.scss";

const ContactOptions = ({
  currentOption,
  setCurrentOptions,
}: {
  currentOption: ContactOption;
  setCurrentOptions: Dispatch<SetStateAction<ContactOption>>;
}) => {
  const handleOption = (option: ContactOption) => setCurrentOptions(option);

  return (
    <div className={style.contactOptions}>
      <ul>
        <li
          className={cn(style.contactOption, {
            [style.chosenOption]: currentOption === ContactOption.Contact,
          })}
          onClick={() => handleOption(ContactOption.Contact)}
        >
          <h4>Contact</h4>
        </li>
        <li
          className={cn(style.contactOption, {
            [style.chosenOption]: currentOption === ContactOption.Estimate,
          })}
          onClick={() => handleOption(ContactOption.Estimate)}
        >
          <h4>Estimate</h4>
        </li>
      </ul>
    </div>
  );
};

export default ContactOptions;
