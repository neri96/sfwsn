import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

import style from "./ContactContainer.module.scss";

const ContactContainer = () => {
  return (
    <div className={style.contact}>
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default ContactContainer;
