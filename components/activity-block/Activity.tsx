import { Box, Button, Container, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import Heading from '@components/ui/Heading';
import React from 'react'


interface TopTextProps {
    text: string;
}

const Activity = () => {

    const variant = useBreakpointValue({ md: true });


    const TopText = ({ text }: TopTextProps) => {

        return (
            <Stack sx={{ width: "100%" }} spacing={"24px"}>
                <Text variant="date">12 АВГУСТА</Text>

                <Text variant={variant ? "heading.blue" : "heading.blue.mobile"} sx={{ lineHeight: "100%" }}>
                    {text}
                </Text>
            </Stack >
        );
    }

    return (
        <Container maxW="1440px" px={variant ? 0 : "10px"}>
            <Heading text="АКТИВНОСТИ" isMobile={!variant} />
            <Stack spacing={"10px"} mx={variant ? "140px" : "0px"} mb={"96px"}>
                <Stack direction={variant ? "row" : "column"} alignItems={"space-between"} justifyContent={"space-between"}>
                    <Stack spacing={variant ? "98px" : "40px"} maxW={variant ? "540px" : "100%"}>
                        <TopText text={"БЕГОВЕЛОГОНКА"} />
                        <Image
                            sx={{
                                borderRadius: 32,
                                display: variant ? "none" : "block"
                            }}
                            src={"/images/activity/velosport.png"}
                            alt={"velosport"}
                        />
                        <Stack spacing={variant ? "60px" : "30px"}>
                            <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                12 августа беговелогонка, гонка на самокатах и велогонка для детей 3+/4+
                            </Text>
                            <Box>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    Расписание
                                </Text>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    БЕГОВЕЛЫ 2+/3+/4+/5+
                                </Text>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    10:00-10:15 - Регистрация
                                </Text>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    10:00-10:15 - Тренировки
                                </Text>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    10:20-11:00 - Гонка
                                </Text>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    11:05-11:15 - Награждение
                                </Text>
                            </Box>
                            <Box>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    ВЕЛОГОНКА SHULZ 3+/4+
                                </Text>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    11:00-11:15 - Регистрация
                                </Text>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    11:00-11:15 - Тренировки
                                </Text>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    11:20-12:20 - Гонка
                                </Text>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    12:25-12:35 - Награждение
                                </Text>
                            </Box>
                            <Box>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    САМОКАТЫ GLOBBER 4+/5+/6-7
                                </Text>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    12:20-12:35 - Регистрация
                                </Text>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    12:20-12:35 - Тренировки
                                </Text>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    12:40-13-40 - Гонка
                                </Text>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    13:45-14:00 - Награждение
                                </Text>
                            </Box>
                            <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                Требуются предварительная регистрация:
                            </Text>
                        </Stack>
                    </Stack>
                    <Stack spacing={"30px"} justifyContent="center" alignItems={"center"}>
                        <Image
                            sx={{
                                borderRadius: 32,
                                display: variant ? "block" : "none"
                            }}
                            src={"/images/activity/velosport.png"}
                            alt={"velosport"}
                        />
                        <Button
                            variant={"festivale.register"}
                            maxW={"255px"}
                            minH={"64px"}
                            onClick={() => {
                                window.open(
                                    "https://docs.google.com/forms/d/e/1FAIpQLSc5N8QtiLYjufT5AIFSrMkOIgIL5ZsNxJfp5JOhtPsewwK0sw/viewform",
                                    "_blank",
                                    "noopener,noreferrer"
                                );
                            }}
                        >
                            <Text
                                sx={{
                                    fontSize: "16px",
                                    color: "white",
                                    fontFamily: "Gotham Pro Light",
                                }}
                            >
                                РЕГИСТРАЦИЯ
                            </Text>
                        </Button>
                    </Stack>
                </Stack>
                <Stack direction={variant ? "row" : "column"} alignItems={"space-between"} justifyContent={"space-between"}>
                    <Stack spacing={"30px"} justifyContent="center" alignItems={"center"}>
                        <Image
                            sx={{
                                borderRadius: 32,
                                display: variant ? "block" : "none"
                            }}
                            src={"/images/activity/ball.png"}
                            alt={"ball"}
                        />
                    </Stack>
                    <Stack spacing={variant ? "98px" : "40px"} maxW={"540px"}>
                        <TopText text={"ФИНАЛьные игры «оранжевого мяча»"} />
                        <Image
                            sx={{
                                borderRadius: 32,
                                display: variant ? "none" : "block"
                            }}
                            src={"/images/activity/ball.png"}
                            alt={"ball"}
                        />
                        <Stack spacing={"60px"}>
                            <Stack spacing={"40px"}>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    С 11 до 17 часов в центре уличного баскетбола «Под Мостом» пройдут финалы Московского турнира Всероссийских массовых соревнований по баскетболу «Оранжевый мяч»! В соревнованиях примут участие 42 команды в трех возрастных категориях: юноши и девушки 15-16 лет, юниоры и юниорки 17-18 лет, мужчины и женщины 19 лет и старше.
                                </Text>
                                <Text variant={variant ? "body.bold" : "body.bold.mobile"}>
                                    Вход для зрителей бесплатный!
                                </Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Activity