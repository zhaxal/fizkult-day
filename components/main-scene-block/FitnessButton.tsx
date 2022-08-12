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

interface Props {
  btnText: string;
  minW: string;
  isDesc: boolean;
}


const FitnessButton = ({ btnText, minW, isDesc }: Props) => {
  const variant = useBreakpointValue({ md: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <FormButtonProvider onClose={onClose}>
      {isDesc ? (
        <Button
          onClick={onOpen}
          variant="register"
          w="full"
          maxW={minW}
          h="full"
          px={"50px"}
          lineHeight={"152%"}
          py={variant ? "34px" : "30px"}
          overflow={"hidden"}
          textOverflow={"elapsis"}
          whiteSpace={"nowrap"}
        >
          {btnText}
        </Button>) :
        (
          <Button
            onClick={onOpen}
            variant="section.register"
            w="full"
            minW={minW}
            h="full"
            px={"50px"}
            py={variant ? "34px" : "18px"}
            overflow={"hidden"}
            textOverflow={"elapsis"}
            whiteSpace={"nowrap"}
          >
            {btnText}
          </Button>
        )
      }


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
