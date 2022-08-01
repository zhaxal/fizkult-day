import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useFormButton } from "@contexts/form-button-context";
import { useEventValuesHandler } from "@hooks/handlers";
import { Competition } from "@mongo/models/events/competition";
import { FieldInputProps, FormikProps, Formik, Form, Field } from "formik";
import { EventForm } from "./models/event-form";

type FormValues = Competition;

interface FieldProps {
  field: FieldInputProps<string>;
  form: FormikProps<FormValues>;
}

const type = "competition";

const CompetitionForm = ({ eventId, event }: EventForm) => {
  const { onClose, mode } = useFormButton();
  const { handleEventValues } = useEventValuesHandler();

  const initialValues: FormValues =
    event && event.type === type
      ? event
      : {
          type,
          date: new Date(),
          title: "",
          desc: "",
          image: "",
          formLink: "",
        };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          if (!mode) throw new Error("Mode is undefined");

          handleEventValues(mode, type, eventId, values);
          actions.setSubmitting(false);
          onClose();
        }}
      >
        {(props) => (
          <Form>
            <Field name="date">
              {({ field, form }: FieldProps) => (
                <FormControl>
                  <FormLabel>Дата</FormLabel>
                  <Input {...field} type="date" placeholder="Дата" />
                </FormControl>
              )}
            </Field>
            <Field name="title">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>Заголовок</FormLabel>
                  <Textarea {...field} placeholder="Заголовок" />
                  <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="desc">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>Описание</FormLabel>
                  <Textarea {...field} placeholder="Описание" />
                  <FormErrorMessage>{form.errors.desc}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="image">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>Ссылка на фото</FormLabel>
                  <Input {...field} placeholder="Ссылка на фото" />
                  <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="formLink">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>Ссылка на форму</FormLabel>
                  <Input {...field} placeholder="Ссылка на форму" />
                  <FormErrorMessage>{form.errors.formLink}</FormErrorMessage>
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
              {mode === "add" ? "Создать ивент" : "Сохранить ивент"}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CompetitionForm;
