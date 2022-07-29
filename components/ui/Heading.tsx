import { Stack, Text } from "@chakra-ui/react";

interface HeadingProps {
  text: string;
  isMobile: boolean | undefined;
}

const Heading = ({ text, isMobile }: HeadingProps) => {
  return (
    <Stack
      maxW={isMobile ? "320px" : "800px"}
      mb="48px"
      bg="#E93734"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        sx={{
          color: "#FFFFFF",
          textTransform: "uppercase",
          fontFamily: "Mossport",
        }}
        fontSize={isMobile ? "32px" : "64px"}
      >
        {text}
      </Text>
    </Stack>
  );
};

export default Heading;
