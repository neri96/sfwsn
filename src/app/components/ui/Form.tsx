"use client";

import {
  useState,
  useEffect,
  ReactNode,
  Children,
  FormHTMLAttributes,
} from "react";

import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";

import Button from "./Button";

import { IFormInput } from "@/app/ts/interfaces";

import style from "./Form.module.scss";

interface IFormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  isSuccess: boolean;
  onSubmit: SubmitHandler<IFormInput>;
  handleSubmit: UseFormHandleSubmit<IFormInput, undefined>;
  children: ReactNode;
}

const Form = ({
  isSuccess,
  onSubmit,
  handleSubmit,
  children,
  ...props
}: IFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const content = Children.toArray(children);

  useEffect(() => {
    if (isSuccess) setCurrentStep(0);
  }, [isSuccess]);

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)} {...props}>
      <div
        className={style.wizard}
        style={{
          width: `${content.length * 100}%`,
          transform: `translateX(-${(100 / content.length) * currentStep}%)`,
        }}
      >
        {Children.toArray(children).map((component, index) => (
          <div key={index} className={style.wizardElem}>
            {component}
          </div>
        ))}
      </div>
      <div className={style.wizardBottom}>
        <Button
          hidden={currentStep === 0}
          customStyle={{ margin: "0 5px" }}
          onClick={() => setCurrentStep((prevState) => prevState - 1)}
        >
          Prev
        </Button>
        <Button
          hidden={currentStep === content.length - 1}
          customStyle={{ margin: "0 5px" }}
          onClick={handleSubmit(() =>
            setCurrentStep((prevState) => prevState + 1)
          )}
        >
          Next
        </Button>
        <Button
          hidden={currentStep < content.length - 1}
          type="submit"
          customStyle={{ margin: "0 5px" }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
