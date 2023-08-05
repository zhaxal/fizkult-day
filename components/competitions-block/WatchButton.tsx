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

interface WatchButtonProps {
  eventId?: string;
}

const WatchButton = ({ eventId }: WatchButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <FormButtonProvider onClose={onClose}>
      <Button onClick={onOpen} minH={"97px"} variant="section.register">
        РЕГИСТРАЦИЯ
      </Button>

      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Форма для записи</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RegistrationForm />
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </FormButtonProvider>
  );
};

export default WatchButton;
