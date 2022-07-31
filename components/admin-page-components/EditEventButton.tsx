import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import SectionForm from "@components/forms/SectionForm";
import PerformanceForm from "@components/forms/PerformanceForm";
import ScheduleForm from "@components/forms/ScheduleForm";
import { FormButtonProvider } from "@contexts/form-button-context";
import { Event, EventTypes } from "@mongo/functions/events-functions";
import CompetitionForm from "@components/forms/CompetitionForm";

interface EditEventButtonProps {
  type: EventTypes;
  event: Event;
  eventId: string;
}

const EditEventButton = ({ type, event, eventId }: EditEventButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <FormButtonProvider onClose={onClose} mode="edit">
      <Button onClick={onOpen} colorScheme="yellow">
        Изменить
      </Button>

      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Форма для редактирования ивента</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {type === "competition" && (
              <CompetitionForm eventId={eventId} event={event} />
            )}

            {type === "section" && (
              <SectionForm eventId={eventId} event={event} />
            )}
            {type === "performance" && (
              <PerformanceForm eventId={eventId} event={event} />
            )}
            {type === "schedule" && (
              <ScheduleForm eventId={eventId} event={event} />
            )}
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </FormButtonProvider>
  );
};

export default EditEventButton;
