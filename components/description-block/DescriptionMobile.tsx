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

const DescriptionMobile = () => {
  const variant = useBreakpointValue({ md: true });

  return (
    <Box w="full" px={"10px"}>
      <VStack w="full" align={"center"}>
        <Box>
          <Box w="117px" h="37px">
            <Text variant="date">13 АВГУСТА</Text>
          </Box>
          <HStack maxW="320px" my="37px" spacing="44px">
            <Image maxW="40%" src="/images/departmentMobile.svg" alt="department" />
            <Image maxW="40%" src="/images/mossportMobile.svg" alt="mossport" />
          </HStack>

          <Stack mb="40px" alignItems="flex-start" spacing="24px">
            <Text
              sx={{
                fontFamily: "Gotham Pro Regular",
                color: "#434B53",
                maxW: "460PX",
                fontSize: "32px",
                lineHeight: "143%",
                textAlign: "center",
                letterSpacing: "-0.2px",
                fontWeight: 400,
              }}
            >
              Праздник для всех, кто любит спорт
            </Text>
          </Stack>

          <VStack
            justifyContent="center"
            direction={"column"}
            w="full"
            mb={"53px"}
          >
            <Button variant="register" color="#1E2229" lineHeight={"152%"}>
              Получить подарок
            </Button>
          </VStack>
        </Box>

        {variant ? <Image src="/images/woman.png" alt="woman" /> : ""}
      </VStack>
    </Box>
  );
};

export default DescriptionMobile;
