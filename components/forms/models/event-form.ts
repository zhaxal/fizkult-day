import { Event } from "@mongo/functions/events-functions";

export type Mode = "add" | "edit";

export interface EventForm {
  eventId?: string;
  event?: Event;
}
