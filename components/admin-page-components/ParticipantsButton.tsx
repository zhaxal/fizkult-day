import {
  Text,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useEvent } from "@hooks/event";
import { FitnessRecord } from "@mongo/models/fitness-record";
import { Record } from "@mongo/models/record";
import { WithId } from "mongodb";
import { useEffect, useState } from "react";

interface ParticipantsButtonProps {
  eventId: string;
}

interface Stats {
  total: number;
  arrived: number;
}

const getStats = (participants: WithId<Record | FitnessRecord>[]): Stats => {
  let total = 0;
  let arrived = 0;

  participants.forEach((participant) => {
    if (participant.arrived) {
      arrived++;
    }

    total++;
  });

  return { total, arrived };
};

const useParticipants = (isOpen: boolean, eventId: string) => {
  const [participants, setParticipants] = useState<
    WithId<Record | FitnessRecord>[] | null
  >(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const { getParticipantsByEvent } = useEvent();

  useEffect(() => {
    if (isOpen) {
      getParticipantsByEvent(eventId).then((participants) => {
        setParticipants(participants);
        setStats(getStats(participants));
      });
    } else {
      setParticipants(null);
      setStats(null);
    }
  }, [eventId, getParticipantsByEvent, isOpen]);

  return { participants, stats };
};

const ParticipantsButton = ({ eventId }: ParticipantsButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { participants, stats } = useParticipants(isOpen, eventId);

  return (
    <>
      <Button onClick={onOpen}>Участники</Button>

      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Таблица участников</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {participants ? (
              <>
                <Stack spacing={5}>
                  <Stack direction="row" spacing={2}>
                    <Text>Зарегистрировалось: {stats?.total}</Text>
                    <Text>Прибыло: {stats?.arrived}</Text>
                  </Stack>

                  <TableContainer>
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>Имя</Th>
                          <Th>Почта</Th>
                          <Th>Прибыл</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {participants.map((event, i) => {
                          return (
                            <Tr key={i}>
                              <Td>{event.name}</Td>
                              <Td>{event.email}</Td>
                              <Td>{event.arrived ? "Да" : "Нет"}</Td>
                            </Tr>
                          );
                        })}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Stack>
              </>
            ) : null}
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};
export default ParticipantsButton;
