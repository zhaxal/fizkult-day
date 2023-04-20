import {
  Box,
  Button,
  Container,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import MainRegisterForm from "@components/forms/MainRegisterForm";

import FitnessButton from "../main-scene-block/FitnessButton";

const Description = () => {
  const variant = useBreakpointValue({ md: true });


  return (
    <Container maxW="1110px">
      <Stack spacing="118px" mt="41px" direction="row">
        <Box>
          <Stack mb="37px" spacing="19px" direction="row">
            <Image src="/images/department.svg" sx={{ maxWidth: "213px" }} onClick={() => window.open("https://www.mos.ru/moskomsport/")} cursor={"pointer"} alt="department" />
            <Image src="/images/mossport.svg" sx={{ maxWidth: "229px" }} onClick={() => window.open("https://moscow.sport")} cursor={"pointer"} alt="mossport" />
            <Image src="/images/100years.svg" sx={{ minWidth: "204px" }} onClick={() => window.open("https://100.moscow.sport")} cursor={"pointer"} alt="100years" />
          </Stack>

          <Stack mb="40px" alignItems="flex-start" spacing="40px" sx={{
            maxW: "544px",
          }}>
            <Text variant="date">12 АВГУСТА</Text>
            <Text
              sx={{
                fontFamily: "Gotham Pro Regular",
                color: "#434B53",
                fontSize: "32px",
                lineHeight: "100%",
                letterSpacing: "-0.2px",
                whiteSpace: "pre-line",
                mt: "24px"
              }}
            >
              {`12 августа 2023 года состоится традиционный праздник любителей спорта.

              Наша команда готовит много интересного в этом году!
              
              Оставь свою почту и мы отправим тебе приглашение в числе первых! `}
            </Text>
            {/* <Box px="117.5px" pt={"16px"}>
              <FitnessButton btnText="ПОЛУЧИТЬ ПОДАРОК" minW="309px" isDesc={true} />
            </Box> */}
            <Box px="49px" sx={{ width: "100%" }}>
              <MainRegisterForm />
            </Box>

          </Stack>


        </Box>

        {variant ? (<Image src="/images/woman.png" sx={{ maxHeight: "758px" }} alt="woman" />) : ""}
      </Stack>
    </Container>
  );
};

export default Description;
