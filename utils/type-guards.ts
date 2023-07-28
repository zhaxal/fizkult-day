import { EventTypes } from "@mongo/functions/events-functions";


export const isEvents = (type: string): type is EventTypes => {
  return (
    (type as EventTypes) === "competition" ||
    (type as EventTypes) === "section" ||
    (type as EventTypes) === "performance" ||
    (type as EventTypes) === "schedule" ||
    (type as EventTypes) === "schoolEvent"
  );
};
