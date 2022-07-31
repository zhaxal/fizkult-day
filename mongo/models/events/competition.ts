import { BaseEvent } from "./event";

export interface Competition extends BaseEvent {
  type: "competition";
  date: Date;
  image: string;
  formLink: string;
}
