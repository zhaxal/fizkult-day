import { Event, EventTypes } from "@mongo/functions/events-functions";
import axios from "axios";
import { useAxiosHandler } from "./handlers";
import { useSWRConfig } from "swr";

export const useEvent = () => {
  const { mutate } = useSWRConfig();
  const { handleAxios } = useAxiosHandler();

  const addEvent = (type: EventTypes, event: Event) => {
    handleAxios(axios.post(`/api/events`, event)).then(() => {
      mutate(`/api/events?type=${type}`);
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
      mutate(`/api/events?type=${type}`);
    });
  };

  const updateEvent = (type: EventTypes, eventId: string, event: Event) => {
    handleAxios(axios.patch(`/api/events/${eventId}`, event)).then(() => {
      mutate(`/api/events?type=${type}`);
    });
  };

  return { addEvent, deleteEvent, updateEvent };
};
