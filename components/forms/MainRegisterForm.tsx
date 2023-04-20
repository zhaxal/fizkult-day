import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Stack,
    Text,
    useToast,
} from "@chakra-ui/react";
import { useFormButton } from "@contexts/form-button-context";
import { Formik, Form, Field, FieldInputProps, FormikProps } from "formik";
import { Form as FormValues } from "@mongo/models/form";
import axios from "axios";
import { useState } from "react";
import * as Yup from "yup";

interface FieldProps {
    field: FieldInputProps<string>;
    form: FormikProps<FormValues>;
}

const MainRegisterForm = () => {
    const toast = useToast();
    const [submitted, setSubmitted] = useState(false);

    const initialValues: FormValues = {
        name: "",
        email: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Неправильная почта').required('Поле должно быть заполнено'),
        name: Yup.string().required('Поле должно быть заполнено'),
    })

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    axios.post("/api/form", values)
                        .then((res) => {
                            toast({
                                title: "Вы успешно зарегистрировались!",
                                status: "success",
                                isClosable: true,
                            });
                        })
                        .finally(() => setSubmitted(true))

                    actions.setSubmitting(false);
                }}
            >
                {(props) => (
                    <Form style={{ width: "100%" }}>
                        <Field name="email">
                            {({ field, form }: FieldProps) => (
                                <FormControl isInvalid={form.touched.email && !!form.errors.email}>
                                    <FormLabel
                                        style={{
                                            fontFamily: "Gotham Pro Light",
                                            fontSize: "24px",
                                            lineHeight: "32px",
                                            color: "#30303E",
                                        }}
                                        htmlFor="email"
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
                                        disabled={submitted}
                                    />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="name">
                            {({ field, form }: FieldProps) => (
                                <FormControl sx={{ mt: "24px" }} isInvalid={form.touched.name && !!form.errors.name}>
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
                                        disabled={submitted}
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
                                isLoading={props.isSubmitting}
                                type="submit"
                            >
                                {submitted ? "Отправлено!" : "ХОЧУ УЗНАТЬ"}
                            </Button>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default MainRegisterForm;
