import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useFormButton } from "@contexts/form-button-context";
import { Formik, Form, Field, FieldInputProps, FormikProps } from "formik";
import { Form as FormValues } from "@mongo/models/form";
import axios from "axios";

interface FieldProps {
  field: FieldInputProps<string>;
  form: FormikProps<FormValues>;
}

const MainRegisterForm = () => {
  const { onClose } = useFormButton();
  const toast = useToast();

  const initialValues: FormValues = {
    name: "",
    email: "",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {

          values.name = values.name.trim();
          values.email = values.email.trim();

          axios.post("/api/form", values).then((res) => {
            toast({
              title: "Вы успешно зарегистрировались!",
              status: "success",
              isClosable: true,
            });
          });

          actions.resetForm()

          onClose();
        }}
      >
        {(props) => (
          <Form style={{ width: "100%" }}>
            <Field name="email">
              {({ field, form }: FieldProps) => (
                <FormControl>
                  <FormLabel
                    style={{
                      fontFamily: "Gotham Pro Light",
                      fontSize: "24px",
                      lineHeight: "32px",
                      color: "#30303E",
                    }}
                  >
                    E-mail
                  </FormLabel>
                  <Input
                    sx={{
                      minHeight: "64px",
                      border: "1px solid #C4C4C4",
                      borderRadius: "3px",
                    }}
                    {...field}
                    type="email"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="name">
              {({ field, form }: FieldProps) => (
                <FormControl sx={{ mt: "24px" }}>
                  <FormLabel
                    style={{
                      fontFamily: "Gotham Pro Light",
                      fontSize: "24px",
                      lineHeight: "32px",
                      color: "#30303E",
                    }}
                  >
                    Ваше имя
                  </FormLabel>
                  <Input
                    sx={{
                      minHeight: "64px",
                      border: "1px solid #C4C4C4",
                      borderRadius: "3px",
                    }}
                    {...field}
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
              <Button
                sx={{
                  lineHeight: "152%",
                  mt: "40px",
                  w: "309px",
                }}
                variant="register"
                disabled={props.isSubmitting}
                type="submit"
              >
                ХОЧУ УЗНАТЬ
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MainRegisterForm;
