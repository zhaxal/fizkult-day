import {
  Box,
  Button,
  Container,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import FitnessButton from "../main-scene-block/FitnessButton";

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
                fontSize: "64px",
                lineHeight: "100%",
              }}
            >
              Праздник для всех, кто любит спорт
            </Text>
            <Box px="117.5px" pt={"16px"}>
              <FitnessButton btnText="ПОЛУЧИТЬ ПОДАРОК" minW="309px" />
            </Box>

          </Stack>


        </Box>

        {variant ? (<Image src="/images/woman.png" alt="woman" />) : ""}
      </Stack>
    </Container>
  );
};

export default Description;
