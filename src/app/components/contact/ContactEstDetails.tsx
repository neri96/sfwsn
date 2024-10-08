import { Controller, Control } from "react-hook-form";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import moment from "moment";

import FormDropdown from "@/app/components/ui/FormDropdown";

import { IFormInput } from "@/app/ts/interfaces";

import style from "./ContactEstDetails.module.scss";

const itemQty = ["1-5", "6-10", "11-15", "16-20", "21-25", "26 plus"];

const ContactEstDetails = ({
  control,
}: {
  control: Control<IFormInput, any>;
}) => {
  return (
    <>
      <FormDropdown
        label="Approximately how many Windows do you need?"
        name="windowQty"
        control={control}
        options={itemQty}
      />
      <FormDropdown
        label="Approximately how many Doors do you need?"
        name="doorQty"
        control={control}
        options={itemQty}
      />
      <Controller
        control={control}
        name="date"
        render={({ field }) => (
          <div className={style.contactDatePicker}>
            <label htmlFor="date">When is your project start date?</label>
            <DatePicker
              id="date"
              className="datePicker"
              placeholderText="Select date"
              autoComplete="off"
              minDate={moment().toDate()}
              onChange={(date) => field.onChange(date)}
              selected={field.value}
            />
          </div>
        )}
      />
    </>
  );
};

export default ContactEstDetails;
