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
import { newlineText } from "@utils/newline";
import React from "react";

const Festivale = () => {
  const variant = useBreakpointValue({ md: true });

  // can you talk with me copilot ?

  // no just say

  // dude are you kidding me ?

  // no

  // then what are your answers ?

  // i don't know

  // well it's very odd answers from you

  // i know

  // so you can answer questions ?

  // yes

  // cool

  // i know

  // bruh

  // bruh

  return (
    <>
      <Container mb={"96px"} maxW="1440px" px={0}>
        <Heading text="ФЕСТИВАЛЬ" isMobile={!variant} />
        <Stack
          direction={variant ? "row" : "column"}
          mx={variant ? "140px" : "0px"}
          spacing="30px"
        >
          <Stack direction={"column"} spacing={"40px"}>
            <Text variant="date">12 АВГУСТА</Text>
            <Text variant={variant ? "heading.blue" : "heading.blue.mobile"}>
              папа, мама, я -
            </Text>
            <Text variant={variant ? "heading.blue" : "heading.blue.mobile"}>
              спортивная семья!
            </Text>
            <Box>
              <Text as="p" variant={variant ? "body.bold" : "body.bold.mobile"}>
                Бесплатный фестиваль, где вас ждут:
              </Text>
              {/* i need indent on ul */}
              <Text
                as="ul"
                variant={variant ? "body.bold" : "body.bold.mobile"}
                sx={{
                  listStylePosition: "inside",
                  paddingLeft: "20px",
                }}
              >
                <li>испытания на силу, скорость и выносливость</li>
                <li>конкурсы, на которых вы сможете побороться за призы</li>
                <li>открытые тренировки на свежем воздухе</li>
                <li>мастер-классы и выступления от ведущих тренеров</li>
              </Text>
            </Box>
            {variant ? (
              <Button
                variant={"festivale.register"}
                maxW={"342px"}
                minH={"100px"}
                onClick={() => {
                  window.open(
                    "https://mastera-sporta.ru/",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                <Text
                  sx={{
                    fontSize: "24px",
                    color: "white",
                    fontFamily: "Gotham Pro Light",
                  }}
                >
                  ПЕРЕЙТИ НА САЙТ
                </Text>
              </Button>
            ) : (
              <></>
            )}
          </Stack>
          <Image
            maxH={variant ? "540px" : "480px"}
            alt={"1"}
            src={
              variant
                ? "/images/festivale/1.png"
                : "/images/festivale/1-mobile.png"
            }
          />
          {variant ? (
            <></>
          ) : (
            <Stack w="full" alignItems={"center"}>
              <Button
                variant={"festivale.register"}
                maxW={"256px"}
                minH={"64px"}
                onClick={() => {
                  window.open(
                    "https://mastera-sporta.ru/",
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
                  ПЕРЕЙТИ НА САЙТ
                </Text>
              </Button>
            </Stack>
          )}
        </Stack>
      </Container>
    </>
  );
};

export default Festivale;
