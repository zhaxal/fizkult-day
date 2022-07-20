import { Box, Stack, Image, Text, Button } from "@chakra-ui/react";
import { newlineText } from "@utils/newline";

const SectionCard = () => {
  return (
    <Box borderRadius="32px" bg="#00AEEF">
      <Stack mx="24px" spacing="60px" direction="row">
        <Image width="476px" mt="60px" src="/images/skate_guy.png" alt="guy" />
        <Stack alignItems="flex-start" spacing="24px">
          <Text bg="#32BBEE" variant="date">
            13 АВГУСТА
          </Text>
          <Box>{newlineText("секция\nскейтбординга", "heading")}</Box>
          <Box>
            {newlineText(
              "Описание секции в несколько строк\nОписание секции в несколько\nстрок ссылка на правила",
              "body.bold"
            )}
          </Box>

          <Stack direction="row" spacing="30px">
            <Button variant="section.register">Записаться бесплатно</Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SectionCard;
