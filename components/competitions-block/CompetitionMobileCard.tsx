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
    <Box borderRadius="32px" bg="#00AEEF">
      <Box pos="absolute" w="full" top={0}>
        <Text bg="#32BBEE" variant="date" mr={"87px"} ml={"116px"}>
          {moment(date).tz("Europe/Moscow").format("D MMMM")}
        </Text>
      </Box>
      <VStack w="full" h="full" spacing={"12.5px"} pb="27px">
        <Image src={image} alt={`${title}_image`} borderRadius={"32px"} />

        <VStack px={"10px"} spacing={"24px"} align="flex-start">
          <Box>{newlineText(title, "heading.mobile")}</Box>
          <Box>{newlineText(desc, "body.bold.mobile")}</Box>
        </VStack>

        <VStack spacing="16px">
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
        </VStack>
      </VStack>
    </Box>
  );
};

export default CompetitionMobileCard;
