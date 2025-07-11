import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { useFormButton } from "@contexts/form-button-context";
import { useValuesHandler } from "@hooks/handlers";
import { Schedule as FormValues } from "@mongo/models/events/schedule";
import { FieldInputProps, FormikProps, Formik, Form, Field } from "formik";
import { EventForm } from "./models/event-form";

interface FieldProps {
  field: FieldInputProps<string>;
  form: FormikProps<FormValues>;
}

const type = "schedule";

const ScheduleForm = ({ eventId, event }: EventForm) => {
  const { handleValues } = useValuesHandler();
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
          handleValues(mode, type, eventId, values);
          actions.setSubmitting(false);
          onClose();
        }}
      >
        {(props) => (
          <Form>
            <Field name="time">
              {({ field, form }: FieldProps) => (
                <FormControl>
                  <FormLabel>Время</FormLabel>
                  <Input {...field} type="datetime-local" placeholder="Время" />
                </FormControl>
              )}
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
                  <Input {...field} placeholder="Описание" />
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
              Создать ивент
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ScheduleForm;
