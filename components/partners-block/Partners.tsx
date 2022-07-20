import {
  Container,
  SimpleGrid,
  Stack,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";

const Partners = () => {
  return (
    <Container mb="105px" maxW="1110px">
      <Stack alignItems="center" justifyContent="center">
        <Text mb="70px" variant="heading.small">
          партнёры праздника
        </Text>
      </Stack>

      <SimpleGrid columns={3} minChildWidth="300px" spacing="30px">
        <Stack
          alignItems="center"
          justifyContent="center"
          bg="#F8F8F8"
          height="234px"
        >
          <Image src="/images/partners/department.svg" alt="department" />
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          bg="#F8F8F8"
          height="234px"
        >
          <Image src="/images/partners/mossport.svg" alt="mossport" />
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          bg="#F8F8F8"
          height="234px"
        >
          <Text
            sx={{
              lineHeight: "40px",
              color: "#222220",
              fontSize: "40px",
              textAlign: "center",
              textTransform: "uppercase",
              fontFamily: "Mossport",
            }}
          >
            Московская академия велосипедного спорта
          </Text>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          bg="#F8F8F8"
          height="234px"
        >
          <Image src="/images/partners/gymnastics.png" alt="gymnastics" />
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          bg="#F8F8F8"
          height="234px"
        >
          <Text
            sx={{
              lineHeight: "75px",
              color: "#222220",
              fontSize: "75px",
              textAlign: "center",
              textTransform: "uppercase",
              fontFamily: "Impact",
            }}
          >
            CARX TECH
          </Text>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          bg="#F8F8F8"
          height="234px"
        >
          <Image src="/images/partners/ufc.png" alt="ufc" />
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default Partners;
