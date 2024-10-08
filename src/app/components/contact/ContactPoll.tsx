import {
  UseFormRegister,
  UseFormGetValues,
  FieldErrors,
} from "react-hook-form";

import Input, { InputType } from "@/app/components/ui/Input";

import { IFormInput } from "@/app/ts/interfaces";

import style from "./ContactPoll.module.scss";

const ContactPoll = ({
  title,
  name,
  pollArray,
  register,
  errors,
}: {
  title: string;
  name: string;
  pollArray: string[];
  register: UseFormRegister<IFormInput>;
  getValues: UseFormGetValues<IFormInput>;
  errors: FieldErrors<IFormInput>;
}) => {
  return (
    <>
      <div className={style.contactTitle}>
        <h4>{title}</h4>
      </div>
      {pollArray.map((elem: string, i: number) => {
        return (
          <Input
            key={i}
            name={name}
            inputType={InputType.Checkbox}
            label={elem}
            value={elem}
            register={register}
            error={errors[name as keyof IFormInput]?.message}
            rules={{}}
          />
        );
      })}
    </>
  );
};

export default ContactPoll;
