import { Select, Container, Text, Stack } from "@chakra-ui/react";
import CreateEventButton from "@components/admin-page-components/CreateEventButton";
import EventTable from "@components/admin-page-components/EventTable";
import { EventTypes } from "@mongo/functions/events-functions";
import { NextPage } from "next";
import { ChangeEvent, useEffect, useState } from "react";
import { isEvents } from "@utils/type-guards";
import ProtectedRoute from "@components/ui/ProtectedRoute";
import { useAdmin } from "@contexts/admin-context";
import { useRouter } from "next/router";

const Events: NextPage = () => {
  const { role } = useAdmin();
  const router = useRouter();
  const [type, setType] = useState<EventTypes>("schedule");

  useEffect(() => {
    if (!role) return;

    if (role !== "admin") {
      router.replace("/admin");
    }
  }, [role, router]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    if (!isEvents(value)) return;

    setType(value);
  };

  return (
    <ProtectedRoute>
      <Container maxW="1110px" py={5}>
        <Stack spacing={5}>
          <Text variant="body.bold">Управление ивентами</Text>

          <CreateEventButton type={type} />

          <Select
            value={type}
            onChange={handleChange}
            maxW="md"
            placeholder="Выберите раздел"
          >
            <option value="schedule">Расписание</option>
            <option value="competition">Соревнование и Конкурсы</option>
            <option value="performance">Показательные выступления</option>
            <option value="section">МОСГОРСПОРТ</option>
          </Select>

          <EventTable type={type} />
        </Stack>
      </Container>
    </ProtectedRoute>
  );
};

export default Events;
