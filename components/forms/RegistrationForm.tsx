import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useFormButton } from "@contexts/form-button-context";
import { useRecord } from "@hooks/record";
import { Record as FormValues } from "@mongo/models/record";
import { Formik, Form, Field, FieldInputProps, FormikProps } from "formik";

interface FieldProps {
  field: FieldInputProps<string>;
  form: FormikProps<FormValues>;
}


const RegistrationForm = () => {
  const { onClose } = useFormButton();
  const { addRecord } = useRecord();

  const initialValues: FormValues = {
    name: "",
    email: "",
    arrived: false,
    date: new Date(),
    type: "normal"
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          addRecord(values);
          actions.setSubmitting(false);
          onClose();
        }}
      >
        {(props) => (
          <Form>
            <Field name="name">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>Имя</FormLabel>
                  <Input {...field} placeholder="Имя" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>Почта</FormLabel>
                  <Input {...field} type="email" placeholder="Почта" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              bg="#00AEEF"
              color="white"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Записаться
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
