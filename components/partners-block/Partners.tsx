import {
  Container,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";

const Partners = () => {
  const variant = useBreakpointValue({ md: true });

  let columns: number;
  let width: string;
  let spacing: string;
  let textVariant: string;
  let mb: string;

  if (variant) {
    columns = 3;
    width = "300px";
    spacing = "30px";
    textVariant = "heading.small";
    mb = "105px";
  } else {
    columns = 2;
    width = "200px";
    spacing = "20px";
    textVariant = "heading.small.mobile";
    mb = "32px";
  }

  return (
    <Container mb={mb} maxW="1110px">
      <Stack alignItems="center" justifyContent="center">
        <Text mb="70px" variant={textVariant}>
          партнёры праздника
        </Text>
      </Stack>

      <SimpleGrid columns={columns} minChildWidth={width} spacing={spacing}>
        <Stack
          alignItems="center"
          justifyContent="center"
          bg="#F8F8F8"
          py={variant ? "64px" : "41px"}
          px="17px"
        >
          <Image src="/images/partners/department.svg" alt="department" />
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          bg="#F8F8F8"
          py={variant ? "70px" : "44px"}
          px={variant ? "15px" : "17px"}
        >
          <Image src="/images/partners/mossport.svg" alt="mossport" />
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          bg="#F8F8F8"
          py={variant ? "78px" : "48px"}
          px={"15px"}
        >
          <Text
            sx={
              variant
                ? {
                  lineHeight: "40px",
                  color: "#222220",
                  fontSize: "40px",
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontFamily: "Mossport",
                }
                : {
                  lineHeight: "20px",
                  color: "#222220",
                  fontSize: "20px",
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontFamily: "Mossport",
                }
            }
          >
            Московская академия велосипедного спорта
          </Text>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          bg="#F8F8F8"
          py={variant ? "79px" : "48px"}
          pl={variant ? "15px" : "8px"}
          pr={variant ? "15px" : "22px"}
        >
          <Image src="/images/partners/gymnastics.png" alt="gymnastics" />
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          bg="#F8F8F8"
          py={variant ? "85px" : "38px"}
          px={"5px"}
        >
          <Text
            sx={
              variant
                ? {
                  lineHeight: "75px",
                  color: "#222220",
                  fontSize: "75px",
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontFamily: "Impact",
                }
                : {
                  lineHeight: "36px",
                  color: "#222220",
                  fontSize: "36px",
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontFamily: "Impact",
                }
            }
          >
            CARX TECH
          </Text>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          bg="#F8F8F8"
          py={variant ? "61px" : "39px"}
          px={variant ? "35px" : "12px"}
        >
          <Image src="/images/partners/ufc.png" alt="ufc" />
        </Stack>
        <Stack alignItems="center" justifyContent="center">
          <Image src="/images/partners/fitness_aerobika.svg" alt="fitness_aerobika" />
        </Stack>
        <Stack alignItems={"center"} justifyContent="center">
          <Image
            src="/images/partners/oviCyberCup.png"
            alt="cyber_cup"
            maxH={"154px"} />
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default Partners;
