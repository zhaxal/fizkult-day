import {
  Box,
  Stack,
  Image,
  Text,
  Button,
  useDisclosure,
  ModalOverlay,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  VStack,
} from "@chakra-ui/react";
import RegistrationForm from "@components/forms/RegistrationForm";
import { Competition } from "@mongo/models/events/competition";
import { newlineText } from "@utils/newline";
import WatchButton from "./WatchButton";
import { moment } from "@utils/moment";

interface CompetitionMobileCardProps extends Competition {
  eventId: string;
}

const CompetitionMobileCard = ({
  eventId,
  date,
  title,
  desc,
  image,
  formLink,
}: CompetitionMobileCardProps) => {
  return (
    <Box borderRadius="32px" bg="#00AEEF" w="full" h="100%">
      <Box pos="absolute" w="full" top={0}>
        <Text bg="#32BBEE" variant="date" mr={"87px"} ml={"116px"}>
          {moment(date).tz("Europe/Moscow").format("D MMMM")}
        </Text>
      </Box>
      <VStack w="full" h="full" spacing={"12.5px"}>
        <Image src={image} alt={`${title}_image`} borderRadius={"32px"} boxSize={"320px"} />

        <VStack px={"10px"} align="flex-start" w="full">
          <Box h="59px" >{newlineText(title, "heading.mobile")}</Box>
          <Box h="120px" overflowY={"auto"}>{newlineText(desc, "body.bold.mobile")}</Box>
        </VStack>

        <VStack spacing="16px" pb={"27px"}>
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
        </VStack>
      </VStack>
    </Box>
  );
};

export default CompetitionMobileCard;
