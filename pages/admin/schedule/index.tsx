import { NextPage } from 'next'
import { ChangeEvent, useEffect, useState } from "react";
import ProtectedRoute from "@components/ui/ProtectedRoute";
import { useAdmin } from "@contexts/admin-context";
import { useRouter } from "next/router";
import { Button, Container, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { ObjectId, WithId } from 'mongodb';
import { Schedule } from '@mongo/models/events/schedule';
import { fetcher } from '@utils/fetcher';
import useSWR from 'swr';
import TablePanel from '@components/ui/TablePanel';
import { Form, Formik, useFormik } from 'formik';
import { useFormButton } from '@contexts/form-button-context';
import { useEventValuesHandler } from '@hooks/handlers';

const Schedule: NextPage = () => {
    const { role } = useAdmin();
    const router = useRouter();
    const variant = useBreakpointValue({ md: true });
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { handleEventValues } = useEventValuesHandler();
    const [mode, setMode] = useState<"add" | "edit">("add")

    const { data: schedule } = useSWR<WithId<Schedule>[]>(
        `/api/events?type=schedule`,
        fetcher
    );

    const [initialValues, setInitialValues] = useState<WithId<Schedule>>({
        _id: "",
        type: "schedule",
        desc: "",
        title: "",
        startDate: "",
        endDate: ""
    });


    const handleEditModal = (schedule: WithId<Schedule>) => {
        setInitialValues(schedule)
        setMode("edit")
        onOpen();
    }

    useEffect(() => {
        if (!role) return;

        if (role !== "admin") {
            router.replace("/admin");
        }
    }, [role, router]);



    return (
        <ProtectedRoute>
            <Container maxW="1110px" py={5}>
                <Stack spacing={5}>
                    <Text variant="body.bold">Управление расписанием</Text>
                    <Button onClick={() => {
                        setMode("add")
                        setInitialValues({
                            _id: "",
                            type: "schedule",
                            desc: "",
                            title: "",
                            startDate: "",
                            endDate: ""
                        })
                        onOpen()
                    }}>
                        Создать элемент в расписаний
                    </Button>

                    <Stack width="100%" spacing="8px" direction="column">
                        {schedule?.map((item, index) => (
                            <Stack
                                sx={{
                                    background: "linear-gradient(17deg, #0087BE 0%, #0087BE 100%)",
                                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                                }}
                                py="10px"
                                alignItems="center"
                                justifyContent={"space-between"}
                                px="16px"
                                width={"100%"}
                                direction="row"
                                spacing={variant ? "24px" : "16px"}
                            >
                                <Text
                                    sx={{
                                        minWidth: variant ? "200px" : "128px",
                                        fontFamily: "Gotham Pro Regular",
                                        textAlign: "center",
                                        color: "#FFFFFF",
                                        fontSize: variant ? "24px" : "16px",
                                        fontWeight: "400",
                                        lineHeight: "normal",
                                    }}
                                >
                                    {item.startDate + " - " + item.endDate}
                                </Text>
                                <Text
                                    sx={{
                                        fontFamily: "Gotham Pro Regular",
                                        color: "#FFFFFF",
                                        fontSize: variant ? "24px" : "16px",
                                        fontWeight: "400",
                                        lineHeight: "120%",
                                        maxW: "650px"
                                    }}
                                >
                                    {item.title}
                                </Text>
                                <Button onClick={() => handleEditModal(item)}>Изменить</Button>
                            </Stack>
                        ))}
                    </Stack>

                    <Modal size="md" isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Создать элемент для расписания</ModalHeader>
                            <ModalBody>
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={(values, actions) => {
                                        handleEventValues(mode, "schedule", values._id.toString(), values);
                                        actions.setSubmitting(false);
                                        onClose();
                                    }}>
                                    {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                                        <Form>
                                            <Stack>
                                                <FormControl isRequired>
                                                    <FormLabel>Название</FormLabel>
                                                </FormControl>
                                                <Input
                                                    type="text"
                                                    name="title"
                                                    value={values.title}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <FormControl isRequired>
                                                    <FormLabel>Время начала</FormLabel>
                                                </FormControl>
                                                <Input
                                                    type="text"
                                                    name="startDate"
                                                    value={values.startDate}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <FormControl isRequired>
                                                    <FormLabel>Время окончания</FormLabel>
                                                </FormControl>
                                                <Input
                                                    type="text"
                                                    name="endDate"
                                                    value={values.endDate}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <Button type="submit">Submit</Button>
                                            </Stack>
                                        </Form>
                                    )}
                                </Formik>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </Stack>
            </Container>
        </ProtectedRoute>
    )
}

export default Schedule