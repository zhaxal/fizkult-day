import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import RegistrationForm from "@components/forms/RegistrationForm";
import { FormButtonProvider } from "@contexts/form-button-context";

interface RegisterButtonProps {
  eventId: string;
}

const RegisterButton = ({ eventId }: RegisterButtonProps) => {
  const variant = useBreakpointValue({ md: true });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <FormButtonProvider onClose={onClose}>
      {variant ? (
        <Button onClick={onOpen} h="96px" disabled variant="section.register">
          Записаться бесплатно
        </Button>
      ) : (
        <Button variant="section.register" disabled w="full">
          Записаться бесплатно
        </Button>
      )}

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

export default RegisterButton;
