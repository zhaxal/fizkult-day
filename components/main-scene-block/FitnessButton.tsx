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
import FitnessForm from "@components/forms/FitnessForm";

import { FormButtonProvider } from "@contexts/form-button-context";

interface Props{
  btnText: string;
}


const FitnessButton = ({btnText} : Props) => {
  const variant = useBreakpointValue({ md: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <FormButtonProvider onClose={onClose}>
      <Button
        onClick={onOpen}
        variant="section.register"
        w="full"
        h="full"
        px={"50px"}
        py={variant ? "34px" : "18px"}
        overflow={"hidden"}
        textOverflow={"elapsis"}
        whiteSpace={"nowrap"}
      >
        {btnText}
      </Button>

      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Форма для записи</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FitnessForm />
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </FormButtonProvider>
  );
};

export default FitnessButton;
