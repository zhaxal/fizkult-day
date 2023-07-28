import { Button, Container, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import Heading from '@components/ui/Heading';
import { newlineText } from '@utils/newline';
import React from 'react'

const Festivale = () => {
    const variant = useBreakpointValue({ md: true });

    return (
        <>
            <Heading text="ФЕСТИВАЛЬ" isMobile={!variant} />
            <Container mb={"96px"} maxW="1110px">
                <Stack direction={"row"} spacing="30px">
                    <Stack direction={"column"} spacing="40px">
                        <Text variant="date">12 АВГУСТА</Text>
                        {newlineText("папа, мама, я - спортивная семья!", "heading.blue")}
                        <Text variant={"body.bold"} dangerouslySetInnerHTML={{
                            __html: `
                                <div>
                                    <p>Бесплатный фестиваль, где вас ждут:</p>
                                    <ul style='list-style-position: inside; padding-left: 20px'>
                                        <li>испытания на силу, скорость и выносливость</li>
                                        <li>конкурсы, на которых вы сможете побороться за призы</li>
                                        <li>открытые тренировки на свежем воздухе</li>
                                        <li>мастер-классы и выступления от ведущих тренеров</li>
                                    </ul>
                                </div>
                            `,
                        }} />
                        <Button variant={"festivale.register"} maxW={"342px"} minH={"100px"}>
                            <Text sx={{
                                fontSize: "24px",
                                color: "white",
                                fontFamily: "Gotham Pro Light",
                            }}>
                                ПЕРЕЙТИ НА САЙТ
                            </Text>
                        </Button>
                    </Stack>
                    <Image maxH="540px" src="/images/festivale/1.png" />
                </Stack>
            </Container>
        </>
    )
}

export default Festivale