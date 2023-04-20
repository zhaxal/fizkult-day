import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import MainRegisterForm from "@components/forms/MainRegisterForm";

import FitnessButton from "../main-scene-block/FitnessButton";

const DescriptionMobile = () => {
  const variant = useBreakpointValue({ md: true });

  return (
    <Box w="full" px={"10px"}>
      <VStack w="full" align={"center"}>
        <Box>
          <HStack justifyContent={"center"}>
            <Text variant="date" sx={{ fontSize: "16px", lineHeight: "150%", letterSpacing: "0.1em", fontFamily: "Gotham Pro Bold", fontWeight: 700 }}>12 АВГУСТА</Text>
          </HStack>

          <HStack w="100%" my="37px" px={"20px"}>
            <Image sx={{ width: "33%" }} src="/images/departmentMobile.svg" alt="department" />
            <Image sx={{ width: "33%" }} src="/images/mossportMobile.svg" alt="mossport" />
            <Image sx={{ width: "33%" }} src="/images/100years.svg" alt="100years" />
          </HStack>

          <Stack mb="40px" alignItems="center" spacing="40px">
            <Text
              sx={{
                fontFamily: "Gotham Pro Regular",
                color: "#434B53",
                maxW: "460PX",
                fontSize: "32px",
                lineHeight: "100%",
                textAlign: "center",
                letterSpacing: "-0.2px",
                fontWeight: 400,
                whiteSpace: "pre-line",
              }}
            >
              {`12 августа 2023 года состоится традиционный праздник любителей спорта.
                Наша команда готовит много интересного в этом году!
                Оставь свою почту и мы отправим тебе приглашение в числе первых! `}
            </Text>

            <Box px="17px" sx={{ width: "100%" }}>
              <MainRegisterForm />
            </Box>

          </Stack>

          {/* <VStack
            justifyContent="center"
            direction={"column"}
            w="full"
            mb={"53px"}
          >
            <FitnessButton btnText="ПОЛУЧИТЬ ПОДАРОК" minW="309px" isDesc={true} />
          </VStack> */}
        </Box>

        {variant ? <Image src="/images/woman.png" alt="woman" /> : ""}
      </VStack>
    </Box>
  );
};

export default DescriptionMobile;
