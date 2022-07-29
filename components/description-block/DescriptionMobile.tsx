import {
  Box,
  Button,
  Container,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import description from "./styles/Desription";

const DescriptionMobile = () => {
  const variant = useBreakpointValue({ md: true });

  return (
    <Container maxW="1110px" px={"10px"}>
      <Stack spacing="118px" direction="row">
        <Box>
          <Box w="117px" h="37px">
            <Text variant="date">13 АВГУСТА</Text>
          </Box>
          <Stack
            my="37px"
            spacing="44px"
            direction="row"
            overflowWrap={"anywhere"}
          >
            <Image src="/images/departmentMobile.svg" alt="department" />
            <Image src="/images/mossportMobile.svg" alt="mossport" />
          </Stack>

          <Stack mb="40px" alignItems="flex-start" spacing="24px">
            {/* <Text
                sx={{
                  textTransform: "uppercase",
                  fontFamily: "Mossport",
                  color: "#2E363E",
                  maxW: "631px",
                  fontSize: "48px",
                  lineHeight: "53px",
                }}
              >
                физкультурно-спортивный праздник, посвященный Всероссийскому Дню
                физкультурника
              </Text> */}

            <Text
              sx={{
                fontFamily: "Gotham Pro Regular",
                color: "#434B53",
                maxW: "544px",
                fontSize: "21px",
                lineHeight: "143%",
              }}
            >
              Это праздник всех, кто, например, бегает по утрам, танцует зумбу,
              или любит велопрогулки
            </Text>
          </Stack>

          <Stack
            alignItems="center"
            spacing={"12px"}
            direction={"column"}
            w="full"
          >
            <Button variant="register" color="#1E2229" lineHeight={"152%"}>Записаться бесплатно</Button>
            <Text
              sx={{
                maxW: "309px",
                h: "51px",
                fontFamily: "Gotham Pro Regular",
                fontSize: "14px",
                lineHeight: "150%",
                textAlign: "center",
              }}
            >
              И получить гарантированный подарок от МОСКОВСКОГО СПОРТА
            </Text>
          </Stack>
        </Box>

        {variant ? <Image src="/images/woman.png" alt="woman" /> : ""}
      </Stack>
    </Container>
  );
};

export default DescriptionMobile;
