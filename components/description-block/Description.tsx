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
      <Stack mt="34px" spacing="20px" direction="row">
        <Image src="/images/department.svg" sx={{ maxWidth: "288px" }} onClick={() => window.open("https://www.mos.ru/moskomsport/")} cursor={"pointer"} alt="department" />
        <Image src="/images/mossport.svg" sx={{ maxWidth: "288px" }} onClick={() => window.open("https://moscow.sport")} cursor={"pointer"} alt="mossport" />
        <Image src="/images/100years.svg" sx={{ minWidth: "288px" }} onClick={() => window.open("https://100.moscow.sport")} cursor={"pointer"} alt="100years" />
      </Stack>
      <Stack spacing="118px" direction="row">
        <Box>
          <Stack mt="34px" spacing="20px" direction="row">
            <Image src="/images/vospitatel.svg" sx={{ maxWidth: "288px" }} onClick={() => window.open("https://www.mos.ru/moskomsport/")} cursor={"pointer"} alt="vospitatel" />
            <Image src="/images/muf-logo.svg" sx={{ maxWidth: "288px" }} onClick={() => window.open("https://moscow.sport")} cursor={"pointer"} alt="muf" />
          </Stack>
          <Stack mb="40px" alignItems="flex-start" spacing="40px" sx={{
            maxW: "544px",
          }}>
            <Text variant="date">12 АВГУСТА</Text>
            <Text
              sx={{
                fontFamily: "Gotham Pro Regular",
                color: "#434B53",
                fontSize: "64px",
                lineHeight: "100%",
                letterSpacing: "-0.2px",
                whiteSpace: "pre-line",
                mt: "24px"
              }}
            >
              {`Праздник для 
              всех, кто любит
              спорт`}
            </Text>
            {/* <Box px="117.5px" pt={"16px"}>
              <FitnessButton btnText="ПОЛУЧИТЬ ПОДАРОК" minW="309px" isDesc={true} />
            </Box> */}
            <Box px="49px" sx={{ width: "100%" }}>
              {/* <MainRegisterForm /> */}
            </Box>
          </Stack>
        </Box>

        {variant ? (<Image src="/images/woman.png" sx={{ maxHeight: "758px" }} alt="woman" />) : ""}
      </Stack>
    </Container>
  );
};

export default Description;
