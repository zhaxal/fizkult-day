import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { useFormButton } from "@contexts/form-button-context";
import { useEventValuesHandler } from "@hooks/handlers";
import { Schedule as FormValues } from "@mongo/models/events/schedule";
import { dateTimeFormatter } from "@utils/timeFormatter";
import { FieldInputProps, FormikProps, Formik, Form, Field } from "formik";
import { EventForm } from "./models/event-form";

interface FieldProps {
  field: FieldInputProps<string>;
  form: FormikProps<FormValues>;
}

const type = "schedule";

const ScheduleForm = ({ eventId, event }: EventForm) => {
  const { handleEventValues } = useEventValuesHandler();
  const { onClose, mode } = useFormButton();

  const initialValues: FormValues =
    event && event.type === type
      ? event
      : {
          type,
          time: new Date(),
          title: "",
          desc: "",
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
            <Field name="time">
              {({ field, form }: FieldProps) => {
                const { value, ...other } = field;

                return (
                  <FormControl>
                    <FormLabel>Время</FormLabel>
                    <Input
                      {...other}
                      defaultValue={dateTimeFormatter(value)}
                      type="datetime-local"
                      placeholder="Время"
                    />
                  </FormControl>
                );
              }}
            </Field>

            <Field name="title">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>Заголовок</FormLabel>
                  <Input {...field} placeholder="Заголовок" />
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

export default ScheduleForm;
