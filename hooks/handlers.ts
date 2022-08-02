import { useToast } from "@chakra-ui/react";
import { Mode } from "@components/forms/models/event-form";
import { Event, EventTypes } from "@mongo/functions/events-functions";
import { AxiosResponse } from "axios";
import { useEvent } from "./event";

export const useAxiosHandler = () => {
  const toast = useToast();

  const handleAxios = async (promise: Promise<AxiosResponse<any, any>>) => {
    return promise
      .then((res) => {
        toast({
          title: res.data,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        if (err.response) {
          toast({
            title: err.response.data,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            title: err.message,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      });
  };

  return { handleAxios };
};

export const useEventValuesHandler = () => {
  const { addEvent, updateEvent } = useEvent();

  const handleEventValues = (
    mode: Mode,
    type: EventTypes,
    eventId: string | undefined,
    values: Event
  ) => {
    switch (mode) {
      case "add":
        addEvent(type, values);
        break;

      case "edit":
        if (!eventId) throw new Error("You didn't include eventId prop");
        updateEvent(type, eventId, values);
        break;
    }
  };

  return { handleEventValues };
};
