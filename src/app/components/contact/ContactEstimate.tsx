import { useForm, SubmitHandler } from "react-hook-form";

import { AnimatePresence } from "framer-motion";

import Form from "@/app/components/ui/Form";
import ContactFields from "./ContactFields";
import ContactEstDetails from "./ContactEstDetails";
import ContactPoll from "./ContactPoll";
import ContactSuccess from "./ContactSuccess";

import useToggle from "@/app/hooks/useToggle";
import useFormMethods from "@/app/hooks/useFormMethods";

import { featureArray, surveyArray } from "../../constants/formConst";

import { IFormInput } from "@/app/ts/interfaces";

const ContactEstimate = () => {
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
    getValues,
    clearErrors,
  } = useForm<IFormInput>({ defaultValues: { features: [], survey: [] } });

  const [isSuccess, toggleSuccess] = useToggle();
  const { handleEmail } = useFormMethods();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    handleEmail(data, errors, reset, toggleSuccess);
  };

  return (
    <>
      <Form
        isSuccess={isSuccess}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      >
        <ContactFields
          getValues={getValues}
          errors={errors}
          register={register}
          clearErrors={clearErrors}
        />
        <ContactEstDetails control={control} />
        <ContactPoll
          title="we want new windows/doors to provide our home/business with these features"
          name="features"
          pollArray={featureArray}
          getValues={getValues}
          errors={errors}
          register={register}
        />
        <ContactPoll
          title="how did you find us"
          name="survey"
          pollArray={surveyArray}
          getValues={getValues}
          errors={errors}
          register={register}
        />
      </Form>
      <AnimatePresence>
        {isSuccess && (
          <ContactSuccess toggleMessage={toggleSuccess}>
            {
              "Estimation request has been successfully sent. We will contact you as soon as possible"
            }
          </ContactSuccess>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactEstimate;
