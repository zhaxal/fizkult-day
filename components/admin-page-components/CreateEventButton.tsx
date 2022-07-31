import {
  ModalOverlay,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import SectionForm from "@components/forms/SectionForm";
import PerformanceForm from "@components/forms/PerformanceForm";
import ScheduleForm from "@components/forms/ScheduleForm";
import { FormButtonProvider } from "@contexts/form-button-context";
import { EventTypes } from "@mongo/functions/events-functions";
import CompetitionForm from "@components/forms/CompetitionForm";

interface CreateEventButtonProps {
  type: EventTypes;
}

const CreateEventButton = ({ type }: CreateEventButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <FormButtonProvider onClose={onClose} mode="add">
      <Button onClick={onOpen} w="200px" colorScheme="blue">
        Создать ивент
      </Button>

      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Форма для создания ивента</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {type === "competition" && <CompetitionForm />}
            {type === "section" && <SectionForm />}
            {type === "performance" && <PerformanceForm />}
            {type === "schedule" && <ScheduleForm />}
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </FormButtonProvider>
  );
};

export default CreateEventButton;
