import { Container, Stack, Text } from "@chakra-ui/react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <Container maxW="1110px" px={"10px"}>
      <Stack my="32px" bg="#00AEEF" justifyContent="center" alignItems="center">
        <Text
          sx={{
            color: "#F2F2F2",
            fontSize: "32px",
            textTransform: "uppercase",
            fontFamily: "Mossport",
            lineHeight: "32px",
          }}
        >
          {title}
        </Text>
      </Stack>
    </Container>
  );
};

export default Title;
