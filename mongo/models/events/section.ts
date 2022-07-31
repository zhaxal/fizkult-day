import { BaseEvent } from "./event";

export interface Section extends BaseEvent {
  type: "section";
  date: Date;
  image: string;
}
