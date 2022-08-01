import { Box, Stack, Image, Text, Button, VStack } from "@chakra-ui/react";

import { Competition } from "@mongo/models/events/competition";
import { newlineText } from "@utils/newline";
import { moment } from "@utils/moment";
import WatchButton from "./WatchButton";
interface CompetitionCardProps extends Competition {
  eventId: string;
}

const CompetitionCard = ({
  eventId,
  date,
  title,
  desc,
  image,
  formLink,
}: CompetitionCardProps) => {
  return (
    <Box borderRadius="32px" bg="#00AEEF">
      <Stack mr="24px" spacing="60px" direction="row">
        <VStack verticalAlign={"center"} h="full">
          <Image
            borderRadius="0px 32px 0px 32px"
            mt="60px"
            src={image}
            alt={`${title}_image`}
            w="576px"
          />
        </VStack>

        <Stack alignItems="flex-start" spacing="24px">
          <Text bg="#32BBEE" variant="date">
            {moment(date).tz("Europe/Moscow").format("D MMMM")}
          </Text>
          <Box>{newlineText(title, "heading")}</Box>
          <Box>{newlineText(desc, "body.bold")}</Box>

          <Stack direction="row" spacing="30px">
            <a target="_blank" href={formLink} rel="noreferrer">
              <Button
                variant="competition.join"
                textAlign={"center"}
                fontSize={"18px"}
                _disabled={{
                  cursor: "not-allowed",
                  color: "#FAFAFA",
                  background: "#5189C8",
                }}
                _hover={{
                  _disabled: {
                    bg: "",
                  },
                }}
                disabled={formLink === "" ? true : false}
                whiteSpace="normal"
                lineHeight={"152%"}
              >
                {formLink === "" ? "РЕГИСТРАЦИЯ НА МЕСТЕ" : "УЧАСТВОВАТЬ"}
              </Button>
            </a>
            <WatchButton eventId={eventId} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CompetitionCard;
