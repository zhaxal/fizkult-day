import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";


const DescriptionMobile = () => {
  const variant = useBreakpointValue({ md: true });

  return (
    <Box w="full" px={"10px"}>
      <VStack w="full" align={"center"}>
        <Box >
          <Box w="117px" h="37px">
            <Text variant="date">13 АВГУСТА</Text>
          </Box>
          <HStack
            my="37px"
            spacing="44px"
          >
            <Image src="/images/departmentMobile.svg" alt="department" />
            <Image src="/images/mossportMobile.svg" alt="mossport" />
          </HStack>

          <Stack mb="40px" alignItems="flex-start" spacing="24px">
            <Text
              sx={{
                fontFamily: "Gotham Pro Regular",
                color: "#434B53",
                maxW: "544px",
                fontSize: "21px",
                lineHeight: "143%",
              }}
            >
              Это праздник всех, кто, например, бегает по утрам, танцует зумбу,
              или любит велопрогулки
            </Text>
          </Stack>

          <Stack
            alignItems="center"
            spacing={"12px"}
            direction={"column"}
            w="full"
          >
            <Button variant="register" color="#1E2229" lineHeight={"152%"}>Записаться бесплатно</Button>
            <Text
              sx={{
                maxW: "309px",
                h: "51px",
                fontFamily: "Gotham Pro Regular",
                fontSize: "14px",
                lineHeight: "150%",
                textAlign: "center",
              }}
            >
              И получить гарантированный подарок от МОСКОВСКОГО СПОРТА
            </Text>
          </Stack>
        </Box>

        {variant ? <Image src="/images/woman.png" alt="woman" /> : ""}
      </VStack>
    </Box>
  );
};

export default DescriptionMobile;
