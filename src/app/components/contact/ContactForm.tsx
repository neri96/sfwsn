"use client";

import { useState } from "react";

import ContactOptions from "./ContactOptions";
import ContactMessage from "./ContactMessage";
import ContactEstimate from "./ContactEstimate";

import { ContactOption } from "@/app/ts/types";

import style from "./ContactForm.module.scss";

const ContactForm = () => {
  const [currentOption, setCurrentOptions] = useState<ContactOption>(
    ContactOption.Contact
  );

  return (
    <div className={style.contactForm}>
      <ContactOptions
        currentOption={currentOption}
        setCurrentOptions={setCurrentOptions}
      />
      {currentOption === ContactOption.Contact ? (
        <ContactMessage />
      ) : (
        <ContactEstimate />
      )}
    </div>
  );
};

export default ContactForm;
