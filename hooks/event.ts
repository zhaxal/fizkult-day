import { Event, EventTypes } from "@mongo/functions/events-functions";
import axios from "axios";
import { useAxiosHandler } from "./handlers";
import { useSWRConfig } from "swr";
import { Stats } from "@mongo/models/stats";
import { Record } from "@mongo/models/record";
import { FitnessRecord } from "@mongo/models/fitness-record";
import { WithId } from "mongodb";

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

  const getParticipantsByEvent = async (eventId: string) => {
    let data: WithId<Record | FitnessRecord>[];

    switch (eventId) {
      case "fitness":
        {
          const res = await axios.get<WithId<FitnessRecord>[]>(
            `/api/events/${eventId}/participants`
          );
          data = res.data;
        }
        break;

      default:
        {
          const res = await axios.get<WithId<Record>[]>(
            `/api/events/${eventId}/participants`
          );
          data = res.data;
        }
        break;
    }

    return data;
  };

  return {
    addEvent,
    deleteEvent,
    updateEvent,
    getParticipantsByEvent,
  };
};
