"use client";

import { Controller, Control, Path, PathValue } from "react-hook-form";

import style from "./FormDropdown.module.scss";

const FormDropdown = <T extends {}>({
  label,
  name,
  options,
  control,
}: {
  label: string;
  name: Path<T>;
  options: string[];
  control: Control<T, any>;
}) => {
  return (
    <div className={style.container}>
      <label htmlFor={label}>{label}</label>
      <Controller
        control={control}
        name={name}
        defaultValue={"None" as PathValue<T, Path<T>>}
        render={({ field }) => (
          <select
            {...field}
            id={label}
            onChange={(e) => field.onChange(e.target.value)}
          >
            <option disabled value="None">
              Select amount
            </option>
            {options.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        )}
      />
    </div>
  );
};

export default FormDropdown;
