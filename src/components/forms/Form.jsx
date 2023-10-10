import PropTypes from "prop-types";
import { FormProvider, useForm } from "react-hook-form";

export const Form = ({ children, defaultValues, id, onSubmit }) => {
  const methods = useForm({ ...defaultValues, mode: "onTouched" });

  return (
    <FormProvider {...methods}>
      <form id={id} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  defaultValues: PropTypes.object,
  id: PropTypes.string,
  onSubmit: PropTypes.func,
};
