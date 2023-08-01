import { Container, Image, Box, Text, useBreakpointValue, useMediaQuery, VStack, Stack, HStack } from "@chakra-ui/react";

const Cover = () => {
  const variant = useBreakpointValue({ md: true })
  const [desktopFont] = useMediaQuery('(min-width: 1080px)')
  const [mobileFont] = useMediaQuery('(min-width: 443px)')

  return (
    <Container maxW="1440px" px={0}>
      {
        variant ? (
          <Stack w="full"
            background={"linear-gradient(to right,#01a3d3 0%, #01a3d3 50%, #0087be 50%, #0087be 100%)"}
            pos="relative">
            <Image src={"/images/cover.svg"} width="full" maxH="708px" alt="cover" />

            <VStack pos="absolute" justifyContent={"flex-end"} alignItems={"flex-end"} textAlign={"end"} sx={{ bottom: "40px", right: "27%" }}>
              <Text color="white" as={"h1"} fontFamily={"Cover"} fontSize={desktopFont ? "117px" : "80px"} lineHeight={desktopFont ? "93.6px" : "100px"} textTransform="uppercase" textOverflow={"ellipsis"} whiteSpace={"pre-line"} overflow={"hidden"}>
                День Физкультурника
              </Text>
              <Text color="#0087BE" as={"h1"} fontFamily={"Cover"} textAlign="right" fontSize={desktopFont ? "117px" : "80px"} lineHeight={desktopFont ? "93.6px" : "100px"} textTransform="uppercase" textOverflow={"ellipsis"} whiteSpace={"pre-line"} overflow={"hidden"}>
                2023
              </Text>
            </VStack>
          </Stack>
        ) :
          (
            <Box w="full" pos="relative">
              <Image src={"/images/cover-mobile.png"} alt="cover" pos="relative" w="full" maxH="541px" />
              <VStack pos="absolute" pl={"12px"} w="full" align={"flex-start"} bottom={"60%"}>
                <Text color="white" as={"h1"} fontFamily={"Cover"} pos="absolute" fontSize={mobileFont ? "70px" : "50px"} lineHeight={mobileFont ? "66.6px" : "50px"} textTransform="uppercase" textOverflow={"ellipsis"} whiteSpace={"pre-line"} overflow={"hidden"}>
                  День {'\n'} Физкультурника
                </Text>
              </VStack>
              <VStack pos="absolute" pr={"60px"} w="full" align={"flex-end"} bottom={"25%"}>
                <Text color="white" fontFamily={"Cover"} as={"h1"} pos="absolute" fontSize={mobileFont ? "70px" : "50px"} lineHeight={mobileFont ? "66.6px" : "40px"} textTransform="uppercase" textOverflow={"ellipsis"} whiteSpace={"pre-line"} overflow={"hidden"}>
                  2023
                </Text>
              </VStack>
            </Box>
          )
      }

    </Container >
  );
};

export default Cover;
