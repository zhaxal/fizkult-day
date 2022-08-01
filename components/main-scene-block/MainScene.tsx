import {
  Container,
  Image,
  Stack,
  Text,
  Box,
  Button,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import FitnessButton from "./FitnessButton";
import Schedule from "./schedule-component/Schedule";

const MainScene = () => {
  const variant = useBreakpointValue({ md: true });

  return (
    <>
      <Container mb={variant ? "48px" : "16px"} maxW="1439px" px={0}>
        <Box
          mb="28px"
          bgImage="/images/main_scene.png"
          bgPosition="center"
          bgRepeat={"no-repeat"}
          h="692px"
          pos="relative"
        >
          <Box
            pos="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            background={
              "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.42) 71.87%)"
            }
          ></Box>
        </Box>
        <Stack alignItems="center" justifyContent="center">
          <Text mb="38px" variant="heading.small">
            расписание
          </Text>
        </Stack>
        <Container maxW="1110px">
          <Schedule />
        </Container>

        <Center
          w="full"
          h="full"
          px={variant ? "486px" : "7px"}
          my={variant ? "48px" : ""}
          pt={variant ? "" : "32px"}
          pb={variant ? "" : "16px"}
        >
          <FitnessButton btnText="РЕГИСТРАЦИЯ НА FITNESS NON-STOP"/>
        </Center>
      </Container>
    </>
  );
};

export default MainScene;
