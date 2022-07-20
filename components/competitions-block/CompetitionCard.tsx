import { Box, Stack, Image, Text, Button } from "@chakra-ui/react";
import { newlineText } from "@utils/newline";

const CompetitionCard = () => {
  return (
    <Box borderRadius="32px" bg="#00AEEF">
      <Stack mx="24px" spacing="60px" direction="row">
        <Image mt="60px" src="/images/guy.png" alt="guy" />
        <Stack alignItems="flex-start" spacing="24px">
          <Text bg="#32BBEE" variant="date">
            13 АВГУСТА
          </Text>
          <Box>{newlineText("Moscow\nFitness Cup", "heading")}</Box>
          <Box>
            {newlineText(
              "Открытый московский турнир в абсолютных категориях номинаций:\nПляжный бодибилдинг,\nФитнес Бикини,\nФит-модель",
              "body.bold"
            )}
          </Box>

          <Stack direction="row" spacing="30px">
            <Button variant="competition.join">УЧАСТВОВАТЬ</Button>
            <Button variant="competition.watch">БУДУ ЗРИТЕЛЕМ</Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CompetitionCard;
