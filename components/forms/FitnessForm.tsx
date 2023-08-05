import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useFormButton } from "@contexts/form-button-context";
import { useRecord } from "@hooks/record";
import { FitnessRecord as FormValues } from "@mongo/models/fitness-record";
import { Formik, Form, Field, FieldInputProps, FormikProps } from "formik";

interface FieldProps {
  field: FieldInputProps<string>;
  form: FormikProps<FormValues>;
}

const FitnessForm = () => {
  const { onClose } = useFormButton();
  const { addRecord } = useRecord();

  const initialValues: FormValues = {
    name: "",
    email: "",
    arrived: false,
    date: new Date(),
    type: "fitness",
    phoneNumber: "",
    currentClub: "",
    recognition: "",
    class: "",
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
                  <FormLabel>ФИО</FormLabel>
                  <Input {...field} placeholder="ФИО" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>Почта</FormLabel>
                  <Input {...field} type="email" placeholder="Почта" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="phoneNumber">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>Номер телефона</FormLabel>
                  <Input {...field} placeholder="Номер телефона" />
                  <FormErrorMessage>{form.errors.phoneNumber}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="currentClub">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>
                    Клиентом какого фитнес-клуба Вы являетесь?
                  </FormLabel>
                  <Textarea
                    {...field}
                    placeholder="Клиентом какого фитнес-клуба Вы являетесь?"
                  />
                  <FormErrorMessage>{form.errors.currentClub}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="recognition">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>Как Вы узнали о мероприятии?</FormLabel>

                  <Select
                    mb={2}
                    {...field}
                    placeholder="Как Вы узнали о мероприятии?"
                  >
                    <option>
                      Реклама в интернете (поисковые системы и сайты)
                    </option>
                    <option>Реклама / анонсы в соцсетях</option>
                    <option>Реклама в фитнес-клубе</option>
                    <option>Рассылка по почте</option>
                    <option>Через родственников/друзей/знакомых</option>
                  </Select>

                  <Textarea {...field} placeholder="напишите Ваш вариант" />

                  <FormErrorMessage>{form.errors.recognition}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="class">
              {({ field, form }: FieldProps) => (
                <FormControl isRequired>
                  <FormLabel>
                    Какой мастер-класс Вы планируете посетить ?
                  </FormLabel>
                  <Select
                    {...field}
                    placeholder="Какой мастер-класс Вы планируете посетить ?"
                  >
                    <option>Move your body</option>
                    <option>Functional Training</option>
                    <option>SH´BAM</option>
                    <option>STARHIIT</option>
                    <option>House</option>
                    <option>BODYCOMBAT</option>
                    <option>Cooldown</option>
                    <option>Все мастер-классы</option>
                  </Select>
                  <FormErrorMessage>{form.errors.class}</FormErrorMessage>
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

export default FitnessForm;
