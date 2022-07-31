import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useFormButton } from "@contexts/form-button-context";
import { Record as FormValues } from "@mongo/models/record";
import { Formik, Form, Field, FieldInputProps, FormikProps } from "formik";

interface FieldProps {
  field: FieldInputProps<string>;
  form: FormikProps<FormValues>;
}

interface RegistrationFormProps {
  eventId: string;
}

const RegistrationForm = ({ eventId }: RegistrationFormProps) => {
  const { onClose } = useFormButton();

  const initialValues: FormValues = {
    name: "",
    email: "",
    eventId,
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
            onClose();
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
