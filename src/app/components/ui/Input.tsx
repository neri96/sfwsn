"use client";

import { UseFormRegister, UseFormClearErrors } from "react-hook-form";

import cn from "classnames";
import style from "./Input.module.scss";

export enum InputType {
  Text = "text",
  Checkbox = "checkbox",
}

const Input = <T extends {}>({
  name,
  value,
  label,
  inputType,
  error,
  register,
  rules,
  clearErrors,
  isTextarea = false,
  handleClick,
}: {
  name: any;
  value?: string;
  label: string;
  error: string | undefined;
  register: UseFormRegister<T>;
  clearErrors?: UseFormClearErrors<T>;
  rules:
    | {
        required: string;
        minLength: number;
        maxLength: number;
      }
    | {};
  inputType?: InputType;
  isTextarea?: boolean;
  handleClick?: () => void;
}) => {
  const Component = isTextarea ? "textarea" : "input";

  const fieldComponent = () => {
    return (
      <>
        {error ? <div className={style.error}>{error}</div> : null}
        <Component
          value={value}
          type={inputType}
          {...(register && register(name, rules))}
          onClick={handleClick}
          onBlur={() => clearErrors && clearErrors(name)}
          placeholder={label}
        />
      </>
    );
  };

  return (
    <div
      className={cn(style.field, {
        [style.checked]: inputType === InputType.Checkbox,
      })}
    >
      {inputType === InputType.Checkbox ? (
        <label>
          {fieldComponent()}
          {label}
        </label>
      ) : (
        <>{fieldComponent()}</>
      )}
    </div>
  );
};

export default Input;
