import {
  Box,
  Image,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import { Competition } from "@mongo/models/events/competition";
import { newlineText } from "@utils/newline";
import WatchButton from "./WatchButton";
import { moment } from "@utils/moment";
import { SchoolEvent } from "@mongo/models/events/schoolevent";

interface CompetitionMobileCardProps extends SchoolEvent {
  eventId: string;
}

const CompetitionMobileCard = ({
  eventId,
  date,
  title,
  description,
  image,
}: CompetitionMobileCardProps) => {
  return (
    <Box borderRadius="32px" bg="#00AEEF" minH={"640px"} w="full" h="100%">
      <Box pos="absolute" w="full" top={0}>
        <Text variant="date" mr={"87px"} ml={"116px"}>
          {/* {moment(date).tz("Europe/Moscow").format("D MMMM")} */}
          {date}
        </Text>
      </Box>
      <VStack w="full" h="full" spacing={"12.5px"}>
        <Image src={image}
          alt={`${title}_image`} borderRadius={"32px"} w={"full"} h={"280px"} />

        <VStack px={"10px"} align="flex-start" w="full">
          <VStack h="59px" justifyContent={"center"} >{newlineText(title, "heading.mobile")}</VStack>
          <Text color={"#282828"} variant={"body.bold.mobile"} dangerouslySetInnerHTML={{
            __html: `${description}`,
          }} />
        </VStack>

        {/* <VStack spacing="16px" pb={"27px"}>
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
              maxH={"64px"}
              disabled={formLink === "" ? true : false}
              whiteSpace="normal"
              lineHeight={"152%"}
            >
              {formLink === "" ? "РЕГИСТРАЦИЯ НА МЕСТЕ" : "УЧАСТВОВАТЬ"}
            </Button>
          </a>
          <Box h="64px">
            <WatchButton eventId={eventId} />
          </Box>
        </VStack> */}
      </VStack>
    </Box>
  );
};

export default CompetitionMobileCard;
