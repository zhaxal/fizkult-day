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
          <Box w="117px" h="37px">
            <Text variant="date">12 АВГУСТА</Text>
          </Box>
          <HStack maxW="320px" my="37px" spacing="44px">
            <Image maxW="40%" src="/images/departmentMobile.svg" alt="department" />
            <Image maxW="40%" src="/images/mossportMobile.svg" alt="mossport" />
          </HStack>

          <Stack mb="40px" alignItems="flex-start" spacing="40px">
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
