import { BaseEvent } from "./event";

export interface Schedule extends BaseEvent {
  type: "schedule";
  time: Date;
}
