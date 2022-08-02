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
    <Box borderRadius="32px" bg="#00AEEF" h="100%" p={0}>
      <Stack mr="24px" spacing="60px" direction="row" h="full">
        <VStack h="576px" w="full" minW="440px">
          <Image
            borderRadius="32px"
            src={image}
            alt={`${title}_image`}
            h="full"
            w="full"
            objectFit={"cover"}
          />
        </VStack>

        <Stack alignItems="flex-start" spacing="24px">
          <Text bg="#32BBEE" variant="date">
            {moment(date).tz("Europe/Moscow").format("D MMMM")}
          </Text>

          <Box w="571px" minH="118px">{newlineText(title, "heading")}</Box>
          <Box h="180px" overflowY={"auto"}>{newlineText(desc, "body.bold")}</Box>

          <Stack direction="row" spacing="30px" pt={"5px"}>
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
                px="52.5px"
                py="18px"
                _hover={{
                  _disabled: {
                    bg: "",
                  },
                }}
                minH={"96px"}
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
