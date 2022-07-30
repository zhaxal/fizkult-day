import {
  Box,
  Button,
  Container,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";


const Description = () => {
  const variant = useBreakpointValue({ md: true });

  
  return (
    <Container maxW="1110px">
      <Stack spacing="118px" mt="41px" direction="row">
        <Box>
          <Stack mb="37px" spacing="21px" direction="row">
            <Image src="/images/department.svg" alt="department" />
            <Image src="/images/mossport.svg" alt="mossport" />
          </Stack>

          <Stack mb="40px" alignItems="flex-start" spacing="24px">
            <Text variant="date">13 АВГУСТА</Text>
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

          <Stack alignItems="center" spacing={{base: "12px", md: "20px"}} direction={{base: "column", md: "row"}}>
            <Button variant="register">Записаться бесплатно</Button>
            <Text
              sx={{
                maxW: "210px",
                fontFamily: "Gotham Pro Regular",
                fontSize: "14px",
                lineHeight: "150%",
                textAlign: "center"
              }}
            >
              И получить гарантированный подарок от МОСКОВСКОГО СПОРТА
            </Text>
          </Stack>
        </Box>

        {variant ? (<Image src="/images/woman.png" alt="woman" />) : ""}
      </Stack>
    </Container>
  );
};

export default Description;
