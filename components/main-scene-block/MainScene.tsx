import { Container, Image, Stack, Text } from "@chakra-ui/react";
import Heading from "@components/ui/Heading";
import Schedule from "./schedule-component/Schedule";

const MainScene = () => {
  return (
    <>
      <Heading text="главная сцена" />

      <Container mb="90px" maxW="1110px">
        <Image mb="48px" src="/images/main_scene.png" alt="main_scene" />
        <Stack alignItems="center" justifyContent="center">
          <Text mb="48px" variant="heading.small">
            расписание
          </Text>
        </Stack>

        <Schedule />
      </Container>
    </>
  );
};

export default MainScene;
