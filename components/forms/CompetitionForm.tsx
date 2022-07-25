import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { useCompetition } from "@hooks/competition";
import { Competition as FormValues } from "@mongo/models/events/competition";
import { FieldInputProps, FormikProps, Formik, Form, Field } from "formik";

interface FieldProps {
  field: FieldInputProps<string>;
  form: FormikProps<FormValues>;
}

const CompetitionForm = () => {
  const { addCompetition } = useCompetition();

  const initialValues: FormValues = {
    date: "",
    title: "",
    desc: "",
    image: "",
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          addCompetition(values);
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <Field name="date">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>Дата</FormLabel>
                  <Input {...field} placeholder="Дата" />
                  <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="title">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>Заголовок</FormLabel>
                  <Input {...field} placeholder="Заголовок" />
                  <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="desc">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>Описание</FormLabel>
                  <Input {...field} placeholder="Описание" />
                  <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="image">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>Ссылка на фото</FormLabel>
                  <Input {...field} placeholder="Ссылка на фото" />
                  <FormErrorMessage>{form.errors.date}</FormErrorMessage>
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
              Создать ивент
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CompetitionForm;
