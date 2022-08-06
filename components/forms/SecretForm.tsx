import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { useAdmin } from "@contexts/admin-context";
import { Field, FieldInputProps, Form, Formik, FormikProps } from "formik";

interface FormValues {
  secret: string;
}

interface FieldProps {
  field: FieldInputProps<string>;
  form: FormikProps<FormValues>;
}

const SecretForm = () => {
  const { signIn } = useAdmin();
  const initialValues: FormValues = {
    secret: "",
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          signIn(values.secret);

          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <Field name="secret">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>Ключ</FormLabel>
                  <Input {...field} placeholder="Ключ" />

                  {form.status === "error" && (
                    <Alert my={2} status="warning">
                      <AlertIcon />
                      <AlertTitle>Ключ не действительный</AlertTitle>
                    </Alert>
                  )}
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
              Войти
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SecretForm;
