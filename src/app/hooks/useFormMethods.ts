import { FieldErrors, UseFormReset } from "react-hook-form";

import emailjs from "@emailjs/browser";
import moment from "moment";

import { IFormInput } from "../ts/interfaces";

export interface IEmailParams {
  name: string;
  email: string;
  phone: string;
  message: string;
  date: Date | string;
  windowQty: string;
  doorQty: string;
  features?: string | string[];
  survey: string | string[];
}

const useFormMethods = () => {
  const handleEmail = (
    data: IFormInput,
    errors: FieldErrors<IFormInput>,
    reset: UseFormReset<IFormInput>,
    onSuccess: () => void
  ) => {
    if (!Object.keys(errors).length) {
      const params: IEmailParams = { ...data };

      params.date = moment().format("D MMMM, YYYY");

      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key as keyof IFormInput];

          if (Array.isArray(element)) {
            params[key as keyof IEmailParams] = element.join(", ");
          }
        }
      }

      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          params as any,
          process.env.NEXT_PUBLIC_EMAILJS_KEY as string
        )
        .then((result) => {
          if (result.status === 200) {
            onSuccess();
            reset();
          }
        });
    }
  };

  return { handleEmail };
};

export default useFormMethods;
