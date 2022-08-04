import { Event, EventTypes } from "@mongo/functions/events-functions";
import axios from "axios";
import { useAxiosHandler } from "./handlers";
import { useSWRConfig } from "swr";

export const useEvent = () => {
  const { mutate } = useSWRConfig();
  const { handleAxios } = useAxiosHandler();

  const addEvent = (event: Event) => {
    handleAxios(axios.post(`/api/events`, event)).then(() => {
      mutate(`/api/events`);
    });
  };

  const deleteEvent = (type: EventTypes, eventId: string) => {
    handleAxios(
      axios.delete(`/api/events/${eventId}`, {
        params: {
          type,
        },
      })
    ).then(() => {
      mutate(`/api/events`);
    });
  };

  const updateEvent = (eventId: string, event: Event) => {
    handleAxios(axios.patch(`/api/events/${eventId}`, event)).then(
      () => {
        mutate(`/api/events`);
      }
    );
  };

  return { addEvent, deleteEvent, updateEvent };
};
