import { fetcher } from "@utils/fetcher";
import useSWR from "swr";
import {
  Stack,
  TableContainer,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
} from "@chakra-ui/react";
import { Event, EventTypes } from "@mongo/functions/events-functions";
import { useEvent } from "@hooks/event";
import EditEventButton from "./EditEventButton";
import { WithId } from "mongodb";
import ParticipantsButton from "./ParticipantsButton";

interface EventTableProps {
  type: EventTypes;
}

interface RenderParticipantsButtonProps {
  type: EventTypes;
  eventId: string;
}

const RenderParticipantsButton = ({
  type,
  eventId,
}: RenderParticipantsButtonProps) => {
  switch (type) {
    case "section":
      return <ParticipantsButton eventId={eventId} />;

    case "competition":
      return <ParticipantsButton eventId={eventId} />;

    default:
      return null;
  }
};

const EventTable = ({ type }: EventTableProps) => {
  const { data } = useSWR<WithId<Event>[]>(`/api/events?type=${type}`, fetcher);

  const { deleteEvent } = useEvent();

  const handleDelete = (eventId: string) => {
    return () => deleteEvent(type, eventId);
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Таблица с ивентами</TableCaption>
        <Thead>
          <Tr>
            <Th>Заголовок</Th>
            <Th>Управление</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((event, i) => {
            if (!event._id) return;

            const { _id, ...eventData } = event;
            const id = _id.toString();

            return (
              <Tr key={i}>
                <Td>{event.title}</Td>
                <Td>
                  <Stack direction="row">
                    <RenderParticipantsButton type={event.type} eventId={id} />
                    <EditEventButton
                      eventId={id}
                      type={event.type}
                      event={eventData}
                    />
                    <Button onClick={handleDelete(id)} colorScheme="red">
                      Удалить
                    </Button>
                  </Stack>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default EventTable;
