import { Container, Image, Box, Text, useBreakpointValue, useMediaQuery, VStack } from "@chakra-ui/react";

const Cover = () => {
  const variant = useBreakpointValue({ md: true })
  const [desktopFont] = useMediaQuery('(min-width: 1080px)')
  const [mobileFont] = useMediaQuery('(min-width: 443px)')
  
  return (
    <Container maxW={"1110px"} px={variant ? ("16px") : ("0px")}>
      {
        variant ? (
          <Box w="full" pos="relative" h="auto">
            <Image src={"/images/cover_wo_text.svg"} alt="cover" />
            <VStack pos="absolute" top={"2.26%"} bottom="59.89%" px={"53px"} w="full" align={"flex-start"}>
              <Text color="white" fontFamily={"Cover"} fontSize={desktopFont ? "128px" : "80px"} lineHeight={desktopFont ? "138px" : "100px"} textTransform="uppercase" textOverflow={"ellipsis"} whiteSpace={"pre-line"} overflow={"hidden"}>День {'\n'}Физкультурника 2022</Text>
            </VStack>
          </Box>
        ) :
          (
            <Box w="full" pos="relative" h="auto">
              <Image src={"/images/cover_mob_wo_text.svg"} alt="cover" pos="relative" w="full" h="full" />
              <VStack pos="absolute" pl={"23px"} w="full" align={"flex-start"} top={"21.09%"} bottom="57.2%">
                <Text color="white" fontFamily={"Cover"} fontSize={mobileFont ? "48px" : "38px"} lineHeight={mobileFont ? "52px" : "40px"} textTransform="uppercase" textOverflow={"ellipsis"} whiteSpace={"pre-line"} overflow={"hidden"}>День {'\n'}Физкультурника 2022</Text>
              </VStack>
            </Box>
          )
      }

    </Container>
  );
};

export default Cover;
