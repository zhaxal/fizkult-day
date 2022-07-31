import { Box, Stack, Image, Text, Button } from "@chakra-ui/react";

import { Competition } from "@mongo/models/events/competition";
import { newlineText } from "@utils/newline";
import { moment } from "@utils/moment";
import WatchButton from "./WatchButton";

const CompetitionCard = ({ date, title, desc, image }: Competition) => {
  return (
    <Box borderRadius="32px" bg="#00AEEF">
      <Stack mx="24px" spacing="60px" direction="row">
        <Image mt="60px" src={image} alt="guy" />
        <Stack alignItems="flex-start" spacing="24px">
          <Text bg="#32BBEE" variant="date">
            {moment(date).tz("Europe/Moscow").format("lll")}
          </Text>
          <Box>{newlineText(title, "heading")}</Box>
          <Box>{newlineText(desc, "body.bold")}</Box>

          <Stack direction="row" spacing="30px">
            <Button variant="competition.join">УЧАСТВОВАТЬ</Button>
            <WatchButton />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CompetitionCard;
