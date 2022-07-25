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
} from "@chakra-ui/react";
import RegistrationForm from "@components/forms/RegistrationForm";
import { Competition } from "@mongo/models/events/competition";
import { newlineText } from "@utils/newline";

const WatchButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} variant="competition.watch">
        БУДУ ЗРИТЕЛЕМ
      </Button>

      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Форма для записи</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RegistrationForm event="Competition" />
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

const CompetitionCard = ({ date, title, desc, image }: Competition) => {
  return (
    <Box borderRadius="32px" bg="#00AEEF">
      <Stack mx="24px" spacing="60px" direction="row">
        <Image mt="60px" src={image} alt="guy" />
        <Stack alignItems="flex-start" spacing="24px">
          <Text bg="#32BBEE" variant="date">
            {date}
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
