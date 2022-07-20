import { Stack, Text } from "@chakra-ui/react";

interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => {
  return (
    <Stack
      maxW="800px"
      mb="48px"
      bg="#E93734"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        sx={{
          color: "#FFFFFF",
          fontSize: "64px",
          textTransform: "uppercase",
          fontFamily: "Mossport",
        }}
      >
        {text}
      </Text>
    </Stack>
  );
};

export default Heading;
