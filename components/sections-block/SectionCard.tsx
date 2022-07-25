import { Box, Stack, Image, Text, Button } from "@chakra-ui/react";
import { Section } from "@mongo/models/events/section";
import { newlineText } from "@utils/newline";

const SectionCard = ({ date, title, desc, image }: Section) => {
  return (
    <Box borderRadius="32px" bg="#00AEEF">
      <Stack mx="24px" spacing="60px" direction="row">
        <Image width="476px" mt="60px" src={image} alt="guy" />
        <Stack alignItems="flex-start" spacing="24px">
          <Text bg="#32BBEE" variant="date">
            {date}
          </Text>
          <Box>{newlineText(title, "heading")}</Box>
          <Box>{newlineText(desc, "body.bold")}</Box>

          <Stack direction="row" spacing="30px">
            <Button variant="section.register">Записаться бесплатно</Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SectionCard;
