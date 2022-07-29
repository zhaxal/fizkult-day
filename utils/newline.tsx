import { Text } from "@chakra-ui/react";

export const newlineText = (text: string, variant: string) => {
  const newText = text.split("\n").map(
    (str, i) => 
      <Text variant={variant} key={i}>{str}</Text>
  );
  return newText;
};
