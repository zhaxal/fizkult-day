import { Container, Stack, Text } from "@chakra-ui/react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <Container maxW="1110px">
      <Stack mb="48px" bg="#00AEEF" justifyContent="center" alignItems="center">
        <Text
          sx={{
            color: "#F2F2F2",
            fontSize: "64px",
            textTransform: "uppercase",
            fontFamily: "Mossport",
          }}
        >
          {title}
        </Text>
      </Stack>
    </Container>
  );
};

export default Title;
