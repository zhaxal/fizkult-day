import { Event, EventTypes } from "@mongo/functions/events-functions";
import axios from "axios";
import { useAxiosHandler } from "./handlers";
import { useSWRConfig } from "swr";

export const useEvent = () => {
  const { mutate } = useSWRConfig();
  const { handleAxios } = useAxiosHandler();

  const addEvent = (type: EventTypes, event: Event) => {
    handleAxios(axios.post(`/api/events/${type}`, event)).then(() => {
      mutate(`/api/events/${type}`);
    });
  };

  const deleteEvent = (type: EventTypes, eventId: string) => {
    handleAxios(axios.delete(`/api/events/${type}/${eventId}`)).then(() => {
      mutate(`/api/events/${type}`);
    });
  };

  const updateEvent = (type: EventTypes, eventId: string, event: Event) => {
    
    handleAxios(axios.patch(`/api/events/${type}/${eventId}`, event)).then(
      () => {
        mutate(`/api/events/${type}`);
      }
    );
  };

  return { addEvent, deleteEvent, updateEvent };
};
