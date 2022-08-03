import {
  Container,
  Image,
  Stack,
  Text,
  Box,
  VStack,
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
        {variant ? (
          <Box
            mb="28px"
            bgImage="/images/main_scene.png"
            bgPos={"center center"}
            bgSize={"cover"}
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
                "radial-gradient(113.08% 250.8% at 12.08% 118.21%, #222220 0%, rgba(255, 255, 255, 0.42) 84.52%)"
              }
            ></Box>
            <Box
              pos="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              px={"64px"}
            >
              <VStack h="full" align={"flex-start"} justifyContent="center">
                <Text
                  textTransform="uppercase"
                  fontFamily="Mossport"
                  fontSize={"128px"}
                  color="white"
                >
                  13 августа
                </Text>
                <Text
                  textTransform="uppercase"
                  fontFamily="Mossport"
                  fontSize={"128px"}
                  color="white"
                >
                  СК “лужники”
                </Text>
              </VStack>
            </Box>
          </Box>
        ) : (
          <Box
            mb="20px"
            bgImage="/images/main_scene.png"
            bgRepeat={"no-repeat"}
            h="231px"
            bgPos={"center center"}
            bgSize={"cover"}
            object-fit="fill"
            maxW="100%"            
            pos="relative"

          >
            <Box
              pos="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              background={
                "radial-gradient(113.08% 250.8% at 12.08% 118.21%, #222220 0%, rgba(255, 255, 255, 0.42) 84.52%)"
              }
            ></Box>
            <Box
              pos="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              px={"22px"}
            >
              <VStack
                h="full"
                align={"flex-start"}
                spacing={0}
                justifyContent="center"
              >
                <Text
                  textTransform="uppercase"
                  fontFamily="Mossport"
                  fontSize={"48px"}
                  color="white"
                >
                  13 августа
                </Text>
                <Text
                  textTransform="uppercase"
                  fontFamily="Mossport"
                  fontSize={"48px"}
                  color="white"
                >
                  СК “лужники”
                </Text>
              </VStack>
            </Box>
          </Box>
        )}
        {variant ? (
          <Stack alignItems="center" justifyContent="center">
            <Text mb="38px" variant="heading.small">
              расписание главной сцены
            </Text>
          </Stack>
        ) : (
          <Stack alignItems="center" justifyContent="center">
            <Text mb="16px" variant="heading.small.mobile" lineHeight={"60px"}>
              расписание главной сцены
            </Text>
          </Stack>
        )}

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
          <FitnessButton
            btnText="РЕГИСТРАЦИЯ НА FITNESS NON-STOP"
            minW={"465px"}
          />
        </Center>
      </Container>
    </>
  );
};

export default MainScene;
