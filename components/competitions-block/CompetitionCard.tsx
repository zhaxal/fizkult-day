import { Box, Stack, Image, Text, Button, VStack } from "@chakra-ui/react";

import { Competition } from "@mongo/models/events/competition";
import { newlineText } from "@utils/newline";
import { moment } from "@utils/moment";
import WatchButton from "./WatchButton";
import { SchoolEvent } from "@mongo/models/events/schoolevent";
interface CompetitionCardProps extends SchoolEvent {
  eventId: string;
}

const CompetitionCard = ({
  eventId,
  date,
  title,
  description,
  image,
}: CompetitionCardProps) => {
  return (
    <Box borderRadius="32px" maxH="576px" bg="#00AEEF" h="100%" p={0}>
      <Stack mr="24px" spacing="45px" direction="row" h="full">
        <Image
          borderRadius="32px"
          src={image}
          alt={`${title}_image`}
          h="full"
          maxH="576px"
          objectFit={"cover"}
        />

        <Stack alignItems="flex-start" spacing="24px">
          <Text bg="#32BBEE" variant="date">
            {/* {moment(date).tz("Europe/Moscow").format("D MMMM")} */}
            {date}
          </Text>

          <Box minH="118px">{newlineText(title, "heading")}</Box>
          {/* <Box h="180px" overflowY={"auto"}>{newlineText(description, "body.bold")}</Box> */}
          <Text overflow={"auto"} color={"#282828"} variant={"body.bold"} dangerouslySetInnerHTML={{
            __html: `${description}`,
          }} />
          {/* <Stack direction="row" spacing="30px" pt={"5px"}>
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
          </Stack> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default CompetitionCard;
