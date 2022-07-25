import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Record as FormValues } from "@mongo/models/record";
import { Formik, Form, Field, FieldInputProps, FormikProps } from "formik";

interface FieldProps {
  field: FieldInputProps<string>;
  form: FormikProps<FormValues>;
}

interface RegistrationFormProps {
  event: string;
}

const RegistrationForm = ({ event }: RegistrationFormProps) => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    event,
    arrived: false,
    date: new Date(),
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
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
