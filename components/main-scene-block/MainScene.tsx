import { Container, Image, Stack, Text, Box } from "@chakra-ui/react";
import Schedule from "./schedule-component/Schedule";

const MainScene = () => {
  return (
    <>
      <Container mb="48px" maxW="1439px" px={0}>
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
            background={"radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.42) 71.87%)"}>
          </Box>
        </Box>
        <Stack alignItems="center" justifyContent="center">
          <Text mb="38px" variant="heading.small">
            расписание
          </Text>
        </Stack>
        <Container maxW="1110px">
          <Schedule  />
        </Container>
      </Container>
    </>
  );
};

export default MainScene;
