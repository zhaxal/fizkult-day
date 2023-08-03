import {
  Box,
  Button,
  Container,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Heading from "@components/ui/Heading";
import React from "react";

const Street = () => {
  const variant = useBreakpointValue({ md: true });

  return (
    <Container px={0} mb={"96px"} maxW="1440px">
      <Heading text="МОЙ СПОРТИВНЫЙ РАЙОН" isMobile={!variant} />

      {variant ? (
        <Box
          mb="28px"
          bgImage="/images/street/street.png"
          bgPos={"center center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          h="692px"
          pos="relative"
        >
          <Stack
            position={"absolute"}
            sx={{ left: 100, top: "15%", maxW: 540 }}
            spacing={"130px"}
            direction="column"
          >
            <Stack spacing={"32px"}>
              <Image src={"/images/street/streetLogo.png"} alt={"streetLogo"} maxW={220} />
              <Text variant={"body.bold"}>
                Бесплатные тренировки для жителей Москвы, которые любят спорт и
                хотят им регулярно заниматься.
              </Text>
              <Text variant={"body.bold"}>
                Занятия ведут профессиональные тренеры МОСГОРСПОРТа.
              </Text>
            </Stack>
            <Button
              variant={"register"}
              onClick={() => {
                window.open(
                  "https://moysportrayon.moscow.sport",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              maxW={"340px"}
            >
              ПЕРЕЙТИ НА САЙТ
            </Button>
          </Stack>
        </Box>
      ) : (
        <Stack w="full">
          <Box
            bgImage="/images/street/street-mobile.png"
            bgSize={"contain"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            minH="300px"
            w="full"
          ></Box>
          <Stack spacing={"32px"} alignItems="center">
            <Text variant={"body.bold.mobile"}>
              Бесплатные тренировки для жителей Москвы, которые любят спорт и
              хотят им регулярно заниматься.
            </Text>
            <Text variant={"body.bold.mobile"}>
              Занятия ведут профессиональные тренеры МОСГОРСПОРТа.
            </Text>
            <Button
              variant={"register.mobile"}
              onClick={() => {
                window.open(
                  "https://moysportrayon.moscow.sport",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              maxW={"256"}
              maxH={"64px"}
            >
              ПЕРЕЙТИ НА САЙТ
            </Button>
          </Stack>
        </Stack>
      )}
    </Container>
  );
};

export default Street;
