import {
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
import { FormButtonProvider } from "@contexts/form-button-context";

const WatchButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <FormButtonProvider onClose={onClose}>
      <Button onClick={onOpen} variant="competition.watch">
        БУДУ ЗРИТЕЛЕМ
      </Button>

      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Форма для записи</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RegistrationForm eventId="Competition" />
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </FormButtonProvider>
  );
};

export default WatchButton;
